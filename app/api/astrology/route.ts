import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function GET() {
  try {
    await connectDB();

    const astrologers = await Provider.find({
      category: "astrology",
      status: "approved",
      isVerified: true,
      isActive: true,
      isProfilePublic: true,
    })
      .select({
        fullName: 1,
        displayName: 1,
        mobile: 1,
        profilePhoto: 1,
        category: 1,
        city: 1,
        state: 1,
        experience: 1,
        specialization: 1,
        languages: 1,
        price: 1,
        rating: 1,
        totalReviews: 1,
        totalConsultations: 1,
        about: 1,
      })
      .sort({
        rating: -1,
        totalConsultations: -1,
        createdAt: -1,
      });

    return NextResponse.json({
      success: true,
      total: astrologers.length,
      astrologers,
    });
  } catch (error) {
    console.error("Astrology API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load astrologers.",
      },
      {
        status: 500,
      }
    );
  }
}