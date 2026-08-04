import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const {
      mobile,
      password,
    } = body;

    // Validation
    if (!mobile || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Mobile and Password are required.",
        },
        { status: 400 }
      );
    }

    // Find User
    const user = await User.findOne({
      mobile,
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        { status: 404 }
      );
    }

    // Block Check
    if (user.isBlocked) {
      return NextResponse.json(
        {
          success: false,
          message: "Your account has been blocked.",
        },
        { status: 403 }
      );
    }

    // Password Check
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password.",
        },
        { status: 401 }
      );
    }

    // Update Last Login
    user.lastLogin = new Date();
    await user.save();

    // JWT Token
    const token = jwt.sign(
      {
        userId: user._id,
        mobile: user.mobile,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "30d",
      }
    );

    // Response
    const response = NextResponse.json({
      success: true,
      message: "Login Successful",
      user: {
        id: user._id,
        fullName: user.fullName,
        mobile: user.mobile,
        email: user.email,
        walletBalance: user.walletBalance,
        profilePhoto: user.profilePhoto,
      },
    });

    // Save Cookie
    response.cookies.set("userToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}