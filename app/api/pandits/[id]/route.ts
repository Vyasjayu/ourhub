import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Pandit from "@/models/Pandit";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    console.log("🔍 Fetch Pandit:", id);

    const pandit = await Pandit.findById(id);

    if (!pandit) {
      return NextResponse.json(
        {
          success: false,
          message: "Pandit not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      pandit,
    });
  } catch (error) {
    console.error("❌ Fetch Pandit Error:", error);

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