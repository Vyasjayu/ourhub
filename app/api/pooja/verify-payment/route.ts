import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

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
          message: "Payment verification data is missing.",
        },
        { status: 400 }
      );
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;

    if (!secret) {
      console.error("RAZORPAY_KEY_SECRET missing");

      return NextResponse.json(
        {
          success: false,
          message: "Payment gateway configuration missing.",
        },
        { status: 500 }
      );
    }

    // =========================================
    // CREATE SIGNATURE
    // =========================================

    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(
        `${razorpay_order_id}|${razorpay_payment_id}`
      )
      .digest("hex");

    // =========================================
    // VERIFY
    // =========================================

    const isValid =
      generatedSignature === razorpay_signature;

    if (!isValid) {
      console.error("INVALID RAZORPAY SIGNATURE");

      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment signature.",
        },
        { status: 400 }
      );
    }

    console.log(
      "RAZORPAY PAYMENT VERIFIED:",
      razorpay_payment_id
    );

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully.",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (error: any) {
    console.error(
      "VERIFY PAYMENT ERROR:",
      error
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