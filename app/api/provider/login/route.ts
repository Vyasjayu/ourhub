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

    console.log("Login ID:", loginId);

    if (!loginId || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Login ID and Password are required.",
        },
        { status: 400 }
      );
    }

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

    console.log(
      "Provider Found:",
      provider ? provider.username : "NO PROVIDER"
    );

    if (!provider) {
      return NextResponse.json(
        {
          success: false,
          message: "Provider not found.",
        },
        { status: 404 }
      );
    }

    if (!provider.password) {
      console.error("Provider password is missing");

      return NextResponse.json(
        {
          success: false,
          message: "Provider password not found.",
        },
        { status: 500 }
      );
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      provider.password
    );

    console.log("Password Match:", isPasswordValid);

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password.",
        },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Login successful.",
      provider: {
        id: provider._id,
        fullName: provider.fullName,
        username: provider.username,
        mobile: provider.mobile,
        category: provider.category,
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