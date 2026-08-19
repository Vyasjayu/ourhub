import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

function generateBookingId() {
  const date = new Date();

  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  const random = Math.floor(
    1000 + Math.random() * 9000
  );

  return `OH-${year}${month}${day}-${random}`;
}

export async function POST(
  request: NextRequest
) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      bookingType,
      poojaId,
      poojaName,
      poojaPrice,

      customerName,
      mobile,
      email,

      templeId,
      templeName,
      templeCity,

      locationType,
      address,
      city,
      pincode,

      date,
      time,

      paymentMethod,
      paymentStatus,
      bookingStatus,

      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    } = body;

    if (!bookingType) {
      return NextResponse.json(
        {
          success: false,
          message: "Booking type is required",
        },
        { status: 400 }
      );
    }

    if (!poojaName) {
      return NextResponse.json(
        {
          success: false,
          message: "Pooja name is required",
        },
        { status: 400 }
      );
    }

    if (!customerName) {
      return NextResponse.json(
        {
          success: false,
          message: "Customer name is required",
        },
        { status: 400 }
      );
    }

    if (!mobile || mobile.length !== 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Valid mobile number is required",
        },
        { status: 400 }
      );
    }

    const bookingId = generateBookingId();

    const booking = await Booking.create({
      bookingId,

      bookingType,

      poojaId: poojaId || "",
      poojaName,
      poojaPrice: Number(poojaPrice || 0),

      customerName,
      mobile,
      email: email || "",

      templeId: templeId || "",
      templeName: templeName || "",
      templeCity: templeCity || "",

      locationType: locationType || "temple",

      address: address || "",
      city: city || "",
      pincode: pincode || "",

      date: date || "",
      time: time || "",

      paymentMethod:
        paymentMethod || "razorpay",

      paymentStatus:
        paymentStatus || "pending",

      bookingStatus:
        bookingStatus ||
        (paymentMethod === "whatsapp"
          ? "requested"
          : "pending"),

      razorpayOrderId:
        razorpayOrderId || "",

      razorpayPaymentId:
        razorpayPaymentId || "",

      razorpaySignature:
        razorpaySignature || "",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Booking created successfully",
        booking: {
          id: booking._id,
          bookingId: booking.bookingId,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "CREATE BOOKING ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create booking",
      },
      { status: 500 }
    );
  }
}