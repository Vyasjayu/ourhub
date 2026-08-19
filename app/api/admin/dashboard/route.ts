import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import Provider from "@/models/Provider";

export async function GET() {
  try {
    await connectDB();

    // =========================
    // DATE RANGE - TODAY
    // =========================

    const now = new Date();

    const startOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0,
      0,
      0,
      0
    );

    const endOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0,
      0
    );

    // =========================
    // MAIN STATS
    // =========================

    const [
      totalBookings,
      todayBookings,
      pendingBookings,
      paidBookings,
      totalProviders,
      pendingProviders,
      revenueResult,
    ] = await Promise.all([
      // Total bookings
      Booking.countDocuments({}),

      // Today's bookings
      Booking.countDocuments({
        createdAt: {
          $gte: startOfDay,
          $lt: endOfDay,
        },
      }),

      // Pending bookings
      Booking.countDocuments({
        bookingStatus: {
          $in: [
            "pending",
            "requested",
            "payment_pending",
          ],
        },
      }),

      // Paid bookings
      Booking.countDocuments({
        paymentStatus: "paid",
      }),

      // Total providers
      Provider.countDocuments({}),

      // Pending provider verification
      Provider.countDocuments({
        isVerified: false,
      }),

      // Revenue
      Booking.aggregate([
        {
          $match: {
            paymentStatus: "paid",
          },
        },
        {
          $group: {
            _id: null,
            total: {
              $sum: {
                $ifNull: ["$poojaPrice", 0],
              },
            },
          },
        },
      ]),
    ]);

    // =========================
    // UNIQUE CUSTOMERS
    // =========================
    //
    // Customer model nahi hai,
    // isliye booking ke mobile numbers
    // se unique customers calculate kar rahe hain.
    //

    const customerResult = await Booking.aggregate([
      {
        $match: {
          mobile: {
            $exists: true,
            $nin: ["", null],
          },
        },
      },
      {
        $group: {
          _id: "$mobile",
        },
      },
      {
        $count: "total",
      },
    ]);

    const totalCustomers =
      customerResult?.[0]?.total || 0;

    // =========================
    // REVENUE
    // =========================

    const revenue = Number(
      revenueResult?.[0]?.total || 0
    );

    // =========================
    // RESPONSE
    // =========================

    return NextResponse.json({
      success: true,

      stats: {
        // Today's Summary
        todayBookings,
        revenue,
        pending: pendingBookings,

        // Dashboard Overview
        totalProviders,
        totalCustomers,
        totalBookings,
        pendingProviders,

        // Extra useful stats
        pendingBookings,
        paidBookings,

        // Backward compatibility
        bookings: totalBookings,
        providers: totalProviders,
      },
    });
  } catch (error) {
    console.error(
      "ADMIN DASHBOARD ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load dashboard stats",
      },
      {
        status: 500,
      }
    );
  }
}