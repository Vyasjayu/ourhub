import { NextResponse } from "next/server";
import razorpay from "@/lib/razorpay";

export async function POST(req: Request) {
  try {
    // Check Environment Variables
    if (
      !process.env.RAZORPAY_KEY_ID ||
      !process.env.RAZORPAY_KEY_SECRET
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Razorpay environment variables are missing",
        },
        {
          status: 500,
        }
      );
    }

    const body = await req.json();

    console.log("CREATE ORDER BODY:", body);

    const amount = Number(body.amount);

    if (!amount) {
      return NextResponse.json(
        {
          success: false,
          message: "Amount missing",
        },
        {
          status: 400,
        }
      );
    }

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `ourhub_${Date.now()}`,
    });

    console.log("RAZORPAY ORDER:", order);

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error: any) {
    console.error("RAZORPAY CREATE ORDER ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.error?.description ||
          error?.message ||
          "Order creation failed",
      },
      {
        status: 500,
      }
    );
  }
}