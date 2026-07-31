import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    console.log("📥 Verify Request:", body);

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = body;

    const sign =
      razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET!
      )
      .update(sign)
      .digest("hex");

    if (expectedSignature === razorpay_signature) {

      console.log("✅ Payment Verified");

      return NextResponse.json({

        success: true,

        paymentId: razorpay_payment_id,

        orderId: razorpay_order_id

      });

    }

    console.log("❌ Invalid Signature");

    return NextResponse.json(
      {
        success: false,
        message: "Invalid Payment"
      },
      {
        status: 400
      }
    );

  } catch (error: any) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message
      },
      {
        status: 500
      }
    );

  }

}