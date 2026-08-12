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

        // ⭐ LIVE / ONLINE STATUS
        isOnline: 1,
        online: 1,
        isLive: 1,
      })
      .sort({
        rating: -1,
        totalConsultations: -1,
        createdAt: -1,
      })
      .lean();

    /*
     * IMPORTANT
     *
     * Different parts of the provider system may use
     * different names for online status.
     *
     * We normalize everything to:
     *
     * online: true / false
     */

    const formattedAstrologers = astrologers.map((astrologer: any) => {
      const isOnline =
        astrologer.isOnline === true ||
        astrologer.online === true ||
        astrologer.isLive === true;

      return {
        _id: astrologer._id,

        fullName: astrologer.fullName || "",

        displayName:
          astrologer.displayName ||
          astrologer.fullName ||
          "Astrologer",

        mobile: astrologer.mobile || "",

        profilePhoto:
          astrologer.profilePhoto ||
          "/images/astrology/default-astrologer.jpg",

        category: astrologer.category || "astrology",

        city: astrologer.city || "",

        state: astrologer.state || "",

        experience: astrologer.experience || "",

        specialization:
          astrologer.specialization || "",

        languages: astrologer.languages || "",

        price: astrologer.price || "0",

        rating: astrologer.rating || 0,

        totalReviews:
          astrologer.totalReviews || 0,

        totalConsultations:
          astrologer.totalConsultations || 0,

        about: astrologer.about || "",

        isVerified:
          astrologer.isVerified === true,

        isActive:
          astrologer.isActive === true,

        /*
         * ⭐ FRONTEND WILL USE THIS
         */
        online: isOnline,

        /*
         * Original fields also returned
         */
        isOnline:
          astrologer.isOnline === true,

        isLive:
          astrologer.isLive === true,
      };
    });

    return NextResponse.json({
      success: true,
      total: formattedAstrologers.length,
      astrologers: formattedAstrologers,
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