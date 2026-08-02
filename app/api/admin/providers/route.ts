import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");

    // ===============================
    // Single Provider
    // ===============================
    if (id) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid Provider ID",
          },
          {
            status: 400,
          }
        );
      }

      const provider = await Provider.findById(id);

      if (!provider) {
        return NextResponse.json(
          {
            success: false,
            message: "Provider not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json({
        success: true,
        provider,
      });
    }

    // ===============================
    // All Providers
    // ===============================

    const providers = await Provider.find().sort({
      createdAt: -1,
    });

    return NextResponse.json({
      success: true,
      providers,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}