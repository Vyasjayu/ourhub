import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

import { connectDB } from "@/lib/mongodb";
import OfflinePoojaBooking from "@/models/OfflinePoojaBooking";
import { allPoojas } from "@/data/pooja";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      poojaId,
      poojaName,
      customerName,
      mobile,
      templeId,
      templeName,
      templeCity,
      locationType,
      address,
      city,
      pincode,
      date,
      time,
    } = body;

    if (!poojaId) {
      return NextResponse.json(
        {
          success: false,
          message: "Pooja is required",
        },
        { status: 400 }
      );
    }

    if (!customerName || !mobile) {
      return NextResponse.json(
        {
          success: false,
          message: "Customer details are required",
        },
        { status: 400 }
      );
    }

    if (!date || !time) {
      return NextResponse.json(
        {
          success: false,
          message: "Date and time are required",
        },
        { status: 400 }
      );
    }

    if (!templeId || !templeName || !templeCity) {
      return NextResponse.json(
        {
          success: false,
          message: "Temple details are required",
        },
        { status: 400 }
      );
    }

    // ---------------------------------------
    // IMPORTANT:
    // Price frontend se trust nahi kar rahe.
    // Server par pooja ke actual price ko lookup
    // kar rahe hain.
    // ---------------------------------------

    const pooja = allPoojas.find(
      (item) => item.id === Number(poojaId)
    );

    if (!pooja) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid pooja",
        },
        { status: 400 }
      );
    }

    const amount = Number(pooja.price);

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid pooja amount",
        },
        { status: 400 }
      );
    }

    // Razorpay amount paise me leta hai
    const amountInPaise = Math.round(amount * 100);

    await connectDB();

    const receipt = `OP${Date.now()}`.slice(0, 40);

    // ---------------------------------------
    // CREATE RAZORPAY ORDER
    // ---------------------------------------

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt,
      notes: {
        bookingType: "offline-pooja",
        poojaId: String(pooja.id),
        poojaName: pooja.name,
        customerName: String(customerName),
        mobile: String(mobile),
        templeName: String(templeName),
        templeCity: String(templeCity),
      },
    });

    // ---------------------------------------
    // SAVE PENDING BOOKING
    // ---------------------------------------

    const booking = await OfflinePoojaBooking.create({
      bookingType: "offline-pooja",

      poojaId: pooja.id,
      poojaName: pooja.name,
      poojaPrice: amount,

      customerName: String(customerName).trim(),
      mobile: String(mobile).trim(),

      templeId: String(templeId),
      templeName: String(templeName),
      templeCity: String(templeCity),

      locationType:
        locationType === "home"
          ? "home"
          : "temple",

      address:
        locationType === "home"
          ? String(address || "").trim()
          : "",

      city:
        locationType === "home"
          ? String(city || "").trim()
          : String(templeCity),

      pincode:
        locationType === "home"
          ? String(pincode || "").trim()
          : "",

      date: String(date),
      time: String(time),

      amount,

      paymentStatus: "pending",
      bookingStatus: "pending",

      razorpayOrderId: order.id,
    });

    return NextResponse.json({
      success: true,

      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      },

      bookingId: booking._id.toString(),

      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error(
      "CREATE RAZORPAY ORDER ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create payment order",
      },
      { status: 500 }
    );
  }
}