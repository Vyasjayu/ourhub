import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Provider ID",
        },
        { status: 400 }
      );
    }

    const astrologer = await Provider.findOne({
      _id: id,
      category: "astrology",
      isVerified: true,
      isActive: true,
      isProfilePublic: true,
    });

    if (!astrologer) {
      return NextResponse.json(
        {
          success: false,
          message: "Astrologer not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      astrologer,
    });
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