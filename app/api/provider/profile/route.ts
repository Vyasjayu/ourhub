import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      profilePhoto,
      aadhaar,
      pan,
      password,
      ...rest
    } = body;

    const existingProvider = await Provider.findOne({
      mobile: body.mobile,
    });

    if (!existingProvider) {
      return NextResponse.json(
        {
          success: false,
          message: "Provider not found.",
        },
        {
          status: 404,
        }
      );
    }

    // Preserve values
    rest.category =
      rest.category || existingProvider.category;

    rest.username =
      rest.username || existingProvider.username;

    if (!rest.displayName?.trim()) {
      rest.displayName =
        existingProvider.displayName ||
        `Astro ${Math.floor(
          1000 + Math.random() * 9000
        )}`;
    }

    rest.rating =
      rest.rating ?? existingProvider.rating ?? 5;

    rest.totalReviews =
      rest.totalReviews ??
      existingProvider.totalReviews ??
      0;

    rest.totalConsultations =
      rest.totalConsultations ??
      existingProvider.totalConsultations ??
      0;

    rest.isProfilePublic =
      rest.isProfilePublic ??
      existingProvider.isProfilePublic ??
      true;

    const updateData: any = {
      ...rest,
      updatedAt: new Date(),
    };

    // ==========================
    // Profile Photo
    // ==========================

    if (profilePhoto === null) {
      updateData.profilePhoto = "";
    } else if (
      typeof profilePhoto === "string"
    ) {
      updateData.profilePhoto = profilePhoto;
    } else {
      updateData.profilePhoto =
        existingProvider.profilePhoto;
    }

    // ==========================
    // Aadhaar
    // ==========================

    if (aadhaar === null) {
      updateData.aadhaar = "";
    } else if (
      typeof aadhaar === "string"
    ) {
      updateData.aadhaar = aadhaar;
    } else {
      updateData.aadhaar =
        existingProvider.aadhaar;
    }

    // ==========================
    // PAN
    // ==========================

    if (pan === null) {
      updateData.pan = "";
    } else if (
      typeof pan === "string"
    ) {
      updateData.pan = pan;
    } else {
      updateData.pan =
        existingProvider.pan;
    }

    const provider =
      await Provider.findOneAndUpdate(
        {
          mobile: body.mobile,
        },
        {
          $set: updateData,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    return NextResponse.json({
      success: true,
      message: "Profile Updated Successfully.",
      provider,
    });
  } catch (error) {
    console.error(
      "PROFILE UPDATE ERROR:",
      error
    );

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