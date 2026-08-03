import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function POST(req: Request) {
  try {
    console.log("========== PROVIDER LOGIN ==========");

    await connectDB();
    console.log("✅ MongoDB Connected");

    const body = await req.json();

    const loginId = body.loginId?.trim();
    const password = body.password;

    if (!loginId || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Login ID and Password are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Username OR Mobile
    const provider = await Provider.findOne({
      $or: [
        {
          username: loginId.toLowerCase(),
        },
        {
          mobile: loginId,
        },
      ],
    });

    if (!provider) {
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

    // Password Check
    const isPasswordValid = await bcrypt.compare(
      password,
      provider.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password.",
        },
        {
          status: 401,
        }
      );
    }

    // ==========================
    // Account Status Check
    // ==========================

    if (provider.status === "pending") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Your profile is pending admin approval.",
        },
        {
          status: 403,
        }
      );
    }

    if (provider.status === "rejected") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Your profile has been rejected. Please contact support.",
        },
        {
          status: 403,
        }
      );
    }

    if (provider.status === "suspended") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Your account has been suspended.",
        },
        {
          status: 403,
        }
      );
    }

    if (!provider.isVerified) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Your account is not verified yet.",
        },
        {
          status: 403,
        }
      );
    }

    if (!provider.isActive) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Your account is currently inactive.",
        },
        {
          status: 403,
        }
      );
    }

    // ==========================
    // Login Success
    // ==========================

    return NextResponse.json({
      success: true,
      message: "Login successful.",

      provider: {
        id: provider._id,

        // Private
        fullName: provider.fullName,

        // Public
        displayName: provider.displayName,

        username: provider.username,
        mobile: provider.mobile,
        category: provider.category,

        status: provider.status,
        isVerified: provider.isVerified,
        isActive: provider.isActive,
      },
    });
  } catch (error) {
    console.error("========== LOGIN ERROR ==========");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}