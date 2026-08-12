import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Razorpay from "razorpay";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    // ==========================================
    // 1. GET LOGGED-IN USER FROM COOKIE
    // ==========================================

    const token = req.cookies.get("userToken")?.value;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Please login first.",
        },
        { status: 401 }
      );
    }

    // Verify JWT
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as {
      userId: string;
      mobile: string;
    };

    console.log("Logged-in User ID:", decoded.userId);

    // ==========================================
    // 2. GET PAYMENT DATA
    // ==========================================

    const body = await req.json();

    console.log("📥 Verify Request:", body);

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = body;

    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment details are missing.",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // 3. VERIFY RAZORPAY SIGNATURE
    // ==========================================

    const sign =
      razorpay_order_id +
      "|" +
      razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET!
      )
      .update(sign)
      .digest("hex");

    if (
      expectedSignature !==
      razorpay_signature
    ) {
      console.log("❌ Invalid Signature");

      return NextResponse.json(
        {
          success: false,
          message: "Invalid Payment Signature.",
        },
        { status: 400 }
      );
    }

    console.log("✅ Payment Signature Verified");

    // ==========================================
    // 4. INITIALIZE RAZORPAY
    // ==========================================

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret:
        process.env.RAZORPAY_KEY_SECRET!,
    });

    // ==========================================
    // 5. FETCH ORDER FROM RAZORPAY
    // ==========================================

    const order =
      await razorpay.orders.fetch(
        razorpay_order_id
      );

    console.log("Razorpay Order:", {
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    });

    // Amount is in paise
    const amount =
      Number(order.amount) / 100;

    if (!amount || amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment amount.",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // 6. FETCH PAYMENT FROM RAZORPAY
    // ==========================================

    const payment =
      await razorpay.payments.fetch(
        razorpay_payment_id
      );

    console.log("Razorpay Payment:", {
      id: payment.id,
      order_id: payment.order_id,
      status: payment.status,
      amount: payment.amount,
    });

    // Make sure payment belongs to this order
    if (
      payment.order_id !==
      razorpay_order_id
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Payment does not belong to this order.",
        },
        { status: 400 }
      );
    }

    // Make sure amount matches
    if (
      Number(payment.amount) !==
      Number(order.amount)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment amount mismatch.",
        },
        { status: 400 }
      );
    }

    // Payment should be captured
    if (payment.status !== "captured") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Payment has not been captured yet.",
          paymentStatus: payment.status,
        },
        { status: 400 }
      );
    }

    // ==========================================
    // 7. FIND LOGGED-IN USER
    // ==========================================

    const user = await User.findById(
      decoded.userId
    );

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        { status: 404 }
      );
    }

    // ==========================================
    // 8. CHECK IF PAYMENT ALREADY CREDITED
    // ==========================================

    const alreadyCredited =
      user.transactions?.some(
        (transaction: any) =>
          transaction.paymentId ===
          razorpay_payment_id
      );

    if (alreadyCredited) {
      console.log(
        "⚠️ Payment already credited:",
        razorpay_payment_id
      );

      return NextResponse.json({
        success: true,
        message:
          "Payment was already added to wallet.",
        alreadyProcessed: true,
        paymentId:
          razorpay_payment_id,
        walletBalance:
          user.walletBalance,
      });
    }

    // ==========================================
    // 9. ADD MONEY TO WALLET
    // ==========================================

    const oldBalance =
      Number(user.walletBalance || 0);

    const newBalance =
      oldBalance + amount;

    user.walletBalance = newBalance;

    // ==========================================
    // 10. SAVE TRANSACTION
    // ==========================================

    user.transactions.push({
      type: "credit",
      amount: amount,
      paymentId:
        razorpay_payment_id,
      orderId:
        razorpay_order_id,
      status: "success",
      description: "Wallet Recharge",
    });

    await user.save();

    console.log("====================================");
    console.log("💰 WALLET CREDIT SUCCESS");
    console.log("User:", decoded.userId);
    console.log("Amount:", amount);
    console.log("Old Balance:", oldBalance);
    console.log("New Balance:", newBalance);
    console.log(
      "Payment ID:",
      razorpay_payment_id
    );
    console.log("====================================");

    // ==========================================
    // 11. SUCCESS RESPONSE
    // ==========================================

    return NextResponse.json({
      success: true,
      message:
        "Payment verified and wallet credited successfully.",
      paymentId:
        razorpay_payment_id,
      orderId:
        razorpay_order_id,
      amount: amount,
      walletBalance:
        newBalance,
    });
  } catch (error: any) {
    console.error(
      "===================================="
    );

    console.error(
      "❌ PAYMENT VERIFY ERROR:"
    );

    console.error(error);

    console.error(
      "===================================="
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ||
          "Payment verification failed.",
      },
      { status: 500 }
    );
  }
}