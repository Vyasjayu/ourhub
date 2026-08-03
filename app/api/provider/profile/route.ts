import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    // Remove File Objects
    const {
      profilePhoto,
      aadhaar,
      pan,
      password,
      ...rest
    } = body;

    // Find Provider
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

    // Never overwrite Category
    if (!rest.category) {
      rest.category = existingProvider.category;
    }

    // Never overwrite Username
    if (!rest.username) {
      rest.username = existingProvider.username;
    }

    // Generate Display Name (if empty)
    if (!rest.displayName || rest.displayName.trim() === "") {
      if (existingProvider.displayName) {
        rest.displayName = existingProvider.displayName;
      } else {
        const random = Math.floor(1000 + Math.random() * 9000);

        rest.displayName = `Astro ${random}`;
      }
    }

    // Default Public Profile Fields
    if (rest.rating === undefined) {
      rest.rating = existingProvider.rating ?? 5;
    }

    if (rest.totalReviews === undefined) {
      rest.totalReviews =
        existingProvider.totalReviews ?? 0;
    }

    if (rest.totalConsultations === undefined) {
      rest.totalConsultations =
        existingProvider.totalConsultations ?? 0;
    }

    if (rest.isProfilePublic === undefined) {
      rest.isProfilePublic =
        existingProvider.isProfilePublic ?? true;
    }

    // Update Provider
    const provider = await Provider.findOneAndUpdate(
      {
        mobile: body.mobile,
      },
      {
        $set: {
          ...rest,
          updatedAt: new Date(),
        },
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
    console.error("PROFILE UPDATE ERROR:", error);

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