import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function GET() {
  try {
    await connectDB();

    const astrologers = await Provider.find({
      category: "astrology",
      isVerified: true,
      isActive: true,
      isProfilePublic: true,
    })
      .select(
        `
        fullName
        displayName
        profilePhoto
        mobile
        category
        city
        state
        experience
        specialization
        languages
        price
        rating
        totalReviews
        totalConsultations
        about
        `
      )
      .sort({
        rating: -1,
        totalConsultations: -1,
      });

    return NextResponse.json({
      success: true,
      astrologers,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}