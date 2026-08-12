import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Provider ID",
        },
        {
          status: 400,
        }
      );
    }

    const astrologer = await Provider.findOne({
      _id: id,
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

        // ⭐ LIVE STATUS
        isOnline: 1,
        online: 1,
        isLive: 1,
      })
      .lean();

    if (!astrologer) {
      return NextResponse.json(
        {
          success: false,
          message: "Astrologer not found",
        },
        {
          status: 404,
        }
      );
    }

    const astro: any = astrologer;

    /*
     * ⭐ NORMALIZE LIVE STATUS
     */

    const isOnline =
      astro.isOnline === true ||
      astro.online === true ||
      astro.isLive === true;

    const formattedAstrologer = {
      _id: astro._id,

      fullName: astro.fullName || "",

      displayName:
        astro.displayName ||
        astro.fullName ||
        "Astrologer",

      mobile: astro.mobile || "",

      profilePhoto:
        astro.profilePhoto ||
        "/images/astrology/default-astrologer.jpg",

      category: astro.category || "astrology",

      city: astro.city || "",

      state: astro.state || "",

      experience: astro.experience || "",

      specialization:
        astro.specialization || "",

      languages:
        astro.languages || "",

      price:
        astro.price || "0",

      rating:
        astro.rating || 0,

      totalReviews:
        astro.totalReviews || 0,

      totalConsultations:
        astro.totalConsultations || 0,

      about:
        astro.about || "",

      isVerified:
        astro.isVerified === true,

      isActive:
        astro.isActive === true,

      // ⭐ IMPORTANT
      online: isOnline,

      isOnline:
        astro.isOnline === true,

      isLive:
        astro.isLive === true,
    };

    return NextResponse.json({
      success: true,
      astrologer: formattedAstrologer,
    });
  } catch (error) {
    console.error("Astrologer Detail API Error:", error);

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