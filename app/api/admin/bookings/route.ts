import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const limitParam = Number(
      searchParams.get("limit") || 0
    );

    const limit =
      limitParam > 0
        ? Math.min(limitParam, 100)
        : 0;

    /*
     * -----------------------------
     * FETCH BOOKINGS
     * -----------------------------
     */

    let query = Booking.find({})
      .sort({ createdAt: -1 })
      .lean();

    if (limit > 0) {
      query = query.limit(limit);
    }

    const bookings = await query;

    /*
     * -----------------------------
     * ALL BOOKINGS
     * -----------------------------
     *
     * Dashboard statistics ke liye
     * complete booking list use kar rahe hain.
     */

    const allBookings = await Booking.find({})
      .select(
        "createdAt bookingStatus paymentStatus totalAmount amount poojaPrice"
      )
      .lean();

    /*
     * -----------------------------
     * TODAY
     * -----------------------------
     */

    const now = new Date();

    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0,
      0
    );

    const endOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      23,
      59,
      59,
      999
    );

    const todayBookings = allBookings.filter(
      (booking: any) => {
        if (!booking.createdAt) return false;

        const createdAt = new Date(
          booking.createdAt
        );

        return (
          createdAt >= startOfToday &&
          createdAt <= endOfToday
        );
      }
    ).length;

    /*
     * -----------------------------
     * PENDING BOOKINGS
     * -----------------------------
     */

    const pendingBookings =
      allBookings.filter((booking: any) => {
        const bookingStatus =
          String(
            booking.bookingStatus || ""
          ).toLowerCase();

        const paymentStatus =
          String(
            booking.paymentStatus || ""
          ).toLowerCase();

        return (
          bookingStatus === "pending" ||
          bookingStatus === "requested" ||
          paymentStatus === "pending"
        );
      }).length;

    /*
     * -----------------------------
     * TOTAL REVENUE
     * -----------------------------
     *
     * Sirf successful/paid bookings
     * ko revenue me count karenge.
     */

    const totalRevenue =
      allBookings.reduce(
        (total: number, booking: any) => {
          const paymentStatus =
            String(
              booking.paymentStatus || ""
            ).toLowerCase();

          const bookingStatus =
            String(
              booking.bookingStatus || ""
            ).toLowerCase();

          const isPaid =
            paymentStatus === "paid" ||
            paymentStatus === "success" ||
            paymentStatus ===
              "successful" ||
            bookingStatus === "confirmed" ||
            bookingStatus === "completed";

          if (!isPaid) {
            return total;
          }

          const amount = Number(
            booking.totalAmount ??
              booking.amount ??
              booking.poojaPrice ??
              0
          );

          return total + amount;
        },
        0
      );

    /*
     * -----------------------------
     * RESPONSE
     * -----------------------------
     */

    return NextResponse.json({
      success: true,

      bookings,

      stats: {
        totalBookings: allBookings.length,
        todayBookings,
        pendingBookings,
        totalRevenue,
      },
    });
  } catch (error) {
    console.error(
      "ADMIN BOOKINGS ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch bookings",
      },
      {
        status: 500,
      }
    );
  }
}