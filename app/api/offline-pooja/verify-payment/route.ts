import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

import { connectDB } from "@/lib/mongodb";
import OfflinePoojaBooking from "@/models/OfflinePoojaBooking";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = body;

    if (
      !razorpay_payment_id ||
      !razorpay_order_id ||
      !razorpay_signature
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Incomplete payment details",
        },
        { status: 400 }
      );
    }

    await connectDB();

    // ---------------------------------------
    // IMPORTANT:
    // Order ID database se lo.
    // Browser ke order ID ko blindly trust mat karo.
    // ---------------------------------------

    const booking =
      await OfflinePoojaBooking.findOne({
        razorpayOrderId: razorpay_order_id,
      });

    if (!booking) {
      return NextResponse.json(
        {
          success: false,
          message: "Booking not found",
        },
        { status: 404 }
      );
    }

    // Already paid
    if (booking.paymentStatus === "paid") {
      return NextResponse.json({
        success: true,
        message: "Payment already verified",
        bookingId: booking._id.toString(),
      });
    }

    const secret =
      process.env.RAZORPAY_KEY_SECRET;

    if (!secret) {
      throw new Error(
        "RAZORPAY_KEY_SECRET is missing"
      );
    }

    // ---------------------------------------
    // CREATE HMAC SIGNATURE
    // ---------------------------------------

    const generatedSignature =
      crypto
        .createHmac("sha256", secret)
        .update(
          `${booking.razorpayOrderId}|${razorpay_payment_id}`
        )
        .digest("hex");

    // Timing-safe comparison
    const receivedBuffer = Buffer.from(
      razorpay_signature,
      "utf8"
    );

    const generatedBuffer = Buffer.from(
      generatedSignature,
      "utf8"
    );

    if (
      receivedBuffer.length !==
      generatedBuffer.length
    ) {
      booking.paymentStatus = "failed";
      await booking.save();

      return NextResponse.json(
        {
          success: false,
          message: "Payment signature mismatch",
        },
        { status: 400 }
      );
    }

    const signatureValid =
      crypto.timingSafeEqual(
        receivedBuffer,
        generatedBuffer
      );

    if (!signatureValid) {
      booking.paymentStatus = "failed";
      await booking.save();

      return NextResponse.json(
        {
          success: false,
          message: "Payment verification failed",
        },
        { status: 400 }
      );
    }

    // ---------------------------------------
    // PAYMENT VERIFIED
    // ---------------------------------------

    booking.paymentStatus = "paid";
    booking.bookingStatus = "confirmed";

    booking.razorpayPaymentId =
      razorpay_payment_id;

    booking.razorpaySignature =
      razorpay_signature;

    await booking.save();

    return NextResponse.json({
      success: true,

      message: "Payment verified successfully",

      bookingId: booking._id.toString(),

      paymentId: razorpay_payment_id,

      orderId: booking.razorpayOrderId,
    });
  } catch (error) {
    console.error(
      "VERIFY PAYMENT ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Payment verification failed",
      },
      { status: 500 }
    );
  }
}