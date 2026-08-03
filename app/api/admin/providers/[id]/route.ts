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

    const provider = await Provider.findById(id);

    if (!provider) {
      return NextResponse.json(
        {
          success: false,
          message: "Provider not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      provider,
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

export async function PATCH(
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

    const body = await req.json();

    const provider = await Provider.findById(id);

    if (!provider) {
      return NextResponse.json(
        {
          success: false,
          message: "Provider not found",
        },
        { status: 404 }
      );
    }

    // =========================
    // Verify / Reject using action
    // =========================

    if (body.action === "verify") {
      provider.status = "approved";
      provider.isVerified = true;
      provider.isActive = true;
      provider.approvedAt = new Date();
    }

    if (body.action === "reject") {
      provider.status = "rejected";
      provider.isVerified = false;
      provider.isActive = false;
    }

    // =========================
    // Verify / Reject using status
    // =========================

    if (body.status) {
      provider.status = body.status;

      if (body.status === "approved") {
        provider.isVerified = true;
        provider.isActive = true;
        provider.approvedAt = new Date();
      }

      if (body.status === "rejected") {
        provider.isVerified = false;
        provider.isActive = false;
      }

      if (body.status === "pending") {
        provider.isVerified = false;
        provider.isActive = false;
      }
    }

    // =========================
    // Active / Inactive
    // =========================

    if (typeof body.isActive === "boolean") {
      provider.isActive = body.isActive;
    }

    // =========================
    // Public Profile
    // =========================

    if (typeof body.isProfilePublic === "boolean") {
      provider.isProfilePublic = body.isProfilePublic;
    }

    await provider.save();

    return NextResponse.json({
      success: true,
      message: "Provider updated successfully.",
      provider,
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

export async function DELETE(
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

    const provider = await Provider.findByIdAndDelete(id);

    if (!provider) {
      return NextResponse.json(
        {
          success: false,
          message: "Provider not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Provider deleted successfully.",
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