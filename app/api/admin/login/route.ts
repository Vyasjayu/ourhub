import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "Username and Password are required",
        },
        { status: 400 }
      );
    }

    const admin = await Admin.findOne({
      username: username.toLowerCase(),
    });

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Admin not found",
        },
        { status: 404 }
      );
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Password",
        },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    return NextResponse.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        fullName: admin.fullName,
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}