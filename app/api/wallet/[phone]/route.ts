import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ phone: string }> }
) {
  try {
    await connectDB();

    const { phone } = await params;

    const user = await User.findOne({ phone });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
      walletBalance: user.walletBalance || 0,
      transactions: user.transactions || [],
      user: {
        name: user.name,
        phone: user.phone,
      },
    });
  } catch (error: any) {
    console.error("Wallet API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}