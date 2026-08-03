import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function POST(req: Request) {
  try {
    await connectDB();

    const {
      fullName,
      mobile,
      email,
      username,
      password,
      category,
    } = await req.json();

    if (
      !fullName ||
      !mobile ||
      !username ||
      !password
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    // Username already exists
    const existingUsername = await Provider.findOne({
      username: username.toLowerCase(),
    });

    if (existingUsername) {
      return NextResponse.json(
        {
          success: false,
          message: "Username already exists.",
        },
        { status: 409 }
      );
    }

    // Mobile already exists
    const existingMobile = await Provider.findOne({
      mobile,
    });

    if (existingMobile) {
      return NextResponse.json(
        {
          success: false,
          message: "Mobile number already registered.",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate Public Display Name
    const randomNumber = Math.floor(
      1000 + Math.random() * 9000
    );

    const displayName = `Astro ${
      fullName.split(" ")[0]
    } ${randomNumber}`;

    await Provider.create({
      // Account
      username: username.toLowerCase(),
      password: hashedPassword,

      // Private
      fullName,
      mobile,
      email,

      // Public
      displayName,
      category,

      // Default Profile
      rating: 5,
      totalReviews: 0,
      totalConsultations: 0,
      isProfilePublic: true,

      // Verification Status
      status: "pending",
      isVerified: false,
      isActive: false,

      approvedBy: null,
      approvedAt: null,
      rejectedReason: "",
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Account created successfully. Please wait for admin approval.",
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}