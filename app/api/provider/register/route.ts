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
      return NextResponse.json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    // Username already exists?
    const existingUsername = await Provider.findOne({
      username,
    });

    if (existingUsername) {
      return NextResponse.json({
        success: false,
        message: "Username already exists.",
      });
    }

    // Mobile already exists?
    const existingMobile = await Provider.findOne({
      mobile,
    });

    if (existingMobile) {
      return NextResponse.json({
        success: false,
        message: "Mobile number already registered.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Provider.create({
      fullName,
      mobile,
      email,
      username,
      password: hashedPassword,
      category,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Account created successfully.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Server Error",
    });
  }
}