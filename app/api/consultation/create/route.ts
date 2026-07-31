import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Consultation from "@/models/Consultation";

export async function POST(req: Request) {

  try {

    await connectDB();

    const body = await req.json();

    console.log("📥 Consultation Request:", body);

    const {
      userId,
      panditId,
      amount,
      duration,
      paymentId
    } = body;

    // Basic validation
    if (
      !userId ||
      !panditId ||
      !amount ||
      !duration ||
      !paymentId
    ) {

      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields",
          received: body
        },
        {
          status: 400
        }
      );

    }

    const consultation = await Consultation.create({

      userId,

      panditId,

      amount,

      duration,

      paymentId,

      status: "requested",

      startTime: null

    });

    console.log("✅ Consultation Created:", consultation);

    return NextResponse.json({

      success: true,

      consultation

    });

  } catch (error: any) {

    console.error("❌ Consultation Create Error:");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Consultation creation failed",
        error: String(error)
      },
      {
        status: 500
      }
    );

  }

}