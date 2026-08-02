import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function GET() {
  try {
    await connectDB();

    const alreadyExists = await Admin.findOne();

    if (alreadyExists) {
      return NextResponse.json({
        success: false,
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash("Admin@123", 10);

    const admin = await Admin.create({
      username: "jayant",
      password: hashedPassword,
      fullName: "Jayant Vyas",
      role: "superadmin",
    });

    return NextResponse.json({
      success: true,
      message: "Super Admin Created",
      admin,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Server Error",
    });
  }
}