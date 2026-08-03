import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import Provider from "@/models/Provider";

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const id = searchParams.get("id");
    const status = searchParams.get("status");

    // ==========================================
    // Single Provider
    // ==========================================
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

    // ==========================================
    // Filters
    // ==========================================

    const filter: any = {};

    if (
      status &&
      ["pending", "approved", "rejected"].includes(status)
    ) {
      filter.status = status;
    }

    // ==========================================
    // All Providers
    // ==========================================

    const providers = await Provider.find(filter)
      .select(
        `
        fullName
        displayName
        username
        mobile
        email

        category

        city
        state

        businessName
        experience
        specialization
        languages
        serviceArea
        about
        price

        profilePhoto

        rating
        totalReviews
        totalConsultations

        isVerified
        isActive
        isProfilePublic

        status

        createdAt
        `
      )
      .sort({
        createdAt: -1,
      });

    return NextResponse.json({
      success: true,
      total: providers.length,
      providers,
    });
  } catch (error) {
    console.error(error);

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