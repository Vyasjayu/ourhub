import { NextResponse } from "next/server";
import { getRazorpayInstance } from "@/lib/razorpay";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const razorpay = getRazorpayInstance();

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `wallet_${Date.now()}`,
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Unable to create order",
      },
      {
        status: 500,
      }
    );
  }
}