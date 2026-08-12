
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    console.log("====================================");
    console.log("REGISTER API STARTED");

    // Connect Database
    await connectDB();

    // Read request body
    const body = await req.json();

    console.log("REQUEST BODY:", {
      fullName: body?.fullName,
      mobile: body?.mobile,
      email: body?.email,
    });

    const {
      fullName,
      mobile,
      email,
      password,
    } = body;

    // Normalize values
    const cleanFullName = String(fullName || "").trim();
    const cleanMobile = String(mobile || "").trim();
    const cleanEmail = String(email || "").trim().toLowerCase();
    const cleanPassword = String(password || "");

    console.log("---------- NORMALIZED DATA ----------");
    console.log("fullName:", cleanFullName);
    console.log("mobile received:", mobile);
    console.log("cleanMobile:", cleanMobile);
    console.log("email:", cleanEmail);
    console.log("--------------------------------------");

    // Required fields validation
    if (
      !cleanFullName ||
      !cleanMobile ||
      !cleanPassword
    ) {
      console.log("VALIDATION FAILED: Required fields missing");

      return NextResponse.json(
        {
          success: false,
          message: "All required fields are mandatory.",
        },
        { status: 400 }
      );
    }

    // Mobile validation
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      console.log(
        "VALIDATION FAILED: Invalid mobile:",
        cleanMobile
      );

      return NextResponse.json(
        {
          success: false,
          message: "Invalid mobile number.",
        },
        { status: 400 }
      );
    }

    // Password validation
    if (cleanPassword.length < 6) {
      console.log(
        "VALIDATION FAILED: Password less than 6 characters"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Password must be at least 6 characters.",
        },
        { status: 400 }
      );
    }

    // ==========================================
    // CHECK EXISTING USER
    // ==========================================

    console.log("========== REGISTER DEBUG ==========");
    console.log(
      "mobile received:",
      mobile
    );
    console.log(
      "cleanMobile:",
      cleanMobile
    );

    const existingUser = await User.findOne({
      mobile: cleanMobile,
    });

    console.log(
      "existingUser:",
      existingUser
    );

    console.log(
      "===================================="
    );

    // Existing user found
    if (existingUser) {
      console.log(
        "DUPLICATE MOBILE FOUND:",
        cleanMobile
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Mobile number already registered.",
        },
        { status: 409 }
      );
    }

    // ==========================================
    // HASH PASSWORD
    // ==========================================

    console.log("Hashing password...");

    const hashedPassword =
      await bcrypt.hash(
        cleanPassword,
        10
      );

    // ==========================================
    // CREATE USER
    // ==========================================

    console.log(
      "Creating new user..."
    );

    const user = await User.create({
      fullName: cleanFullName,
      mobile: cleanMobile,
      email: cleanEmail,
      password: hashedPassword,
      walletBalance: 0,
    });

    console.log(
      "USER CREATED SUCCESSFULLY:"
    );

    console.log({
      id: user._id.toString(),
      fullName: user.fullName,
      mobile: user.mobile,
      email: user.email,
    });

    console.log(
      "REGISTER API SUCCESS"
    );

    console.log(
      "===================================="
    );

    // ==========================================
    // SUCCESS RESPONSE
    // ==========================================

    return NextResponse.json(
      {
        success: true,
        message:
          "Account created successfully.",
        user: {
          id: user._id.toString(),
          fullName: user.fullName,
          mobile: user.mobile,
          email: user.email,
          walletBalance:
            user.walletBalance,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(
      "===================================="
    );

    console.error(
      "REGISTER API ERROR:"
    );

    console.error(error);

    console.error(
      "ERROR CODE:",
      error?.code
    );

    console.error(
      "ERROR KEY PATTERN:",
      error?.keyPattern
    );

    console.error(
      "ERROR KEY VALUE:",
      error?.keyValue
    );

    console.error(
      "===================================="
    );

    // MongoDB duplicate key error
    if (error?.code === 11000) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Mobile number already registered.",
          error: {
            code: error.code,
            keyPattern:
              error.keyPattern,
            keyValue:
              error.keyValue,
          },
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

