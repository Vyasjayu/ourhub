import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      poojaSlug,
      poojaName,
      price,
      customerName,
      mobile,
      city,
      date,
      time,
    } = body;

    // ================================
    // VALIDATION
    // ================================

    if (!poojaSlug || !poojaName) {
      return NextResponse.json(
        {
          success: false,
          message: "Pooja details are missing.",
        },
        { status: 400 }
      );
    }

    if (!customerName || !mobile || !city || !date || !time) {
      return NextResponse.json(
        {
          success: false,
          message: "Booking details are incomplete.",
        },
        { status: 400 }
      );
    }

    const amount = Number(price);

    if (!amount || amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment amount.",
        },
        { status: 400 }
      );
    }

    // ================================
    // RAZORPAY ENV
    // ================================

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("RAZORPAY ENV MISSING", {
        keyIdExists: !!keyId,
        keySecretExists: !!keySecret,
      });

      return NextResponse.json(
        {
          success: false,
          message:
            "Razorpay configuration is missing on the server.",
        },
        { status: 500 }
      );
    }

    // ================================
    // RAZORPAY INSTANCE
    // ================================

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    // Razorpay amount is ALWAYS in paise
    const amountInPaise = Math.round(amount * 100);

    // ================================
    // CREATE ORDER
    // ================================

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",

      receipt: `pooja_${Date.now()}`,

      notes: {
        poojaSlug: String(poojaSlug),
        poojaName: String(poojaName),
        customerName: String(customerName),
        mobile: String(mobile),
        city: String(city),
        date: String(date),
        time: String(time),
      },
    });

    console.log("RAZORPAY ORDER CREATED:", order.id);

    return NextResponse.json({
      success: true,

      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      },

      keyId,
    });
  } catch (error: any) {
    console.error("CREATE RAZORPAY ORDER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.error?.description ||
          error?.message ||
          "Unable to create payment order.",
      },
      { status: 500 }
    );
  }
}