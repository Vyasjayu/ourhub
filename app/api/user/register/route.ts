import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      fullName,
      mobile,
      email,
      password,
    } = body;

    // Validation
    if (
      !fullName ||
      !mobile ||
      !password
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All required fields are mandatory.",
        },
        { status: 400 }
      );
    }

    // Mobile validation
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid mobile number.",
        },
        { status: 400 }
      );
    }

    // Password validation
    if (password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: "Password must be at least 6 characters.",
        },
        { status: 400 }
      );
    }

    // Check existing user
    const existingUser = await User.findOne({
      mobile,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Mobile number already registered.",
        },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      fullName,
      mobile,
      email,
      password: hashedPassword,
      walletBalance: 0,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully.",
        user: {
          id: user._id,
          fullName: user.fullName,
          mobile: user.mobile,
          email: user.email,
          walletBalance: user.walletBalance,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}