import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import Consultation from "@/models/Consultation";

export async function GET(req: NextRequest) {
  try {
    // ==========================================
    // CONNECT DATABASE
    // ==========================================

    await connectDB();

    console.log("====================================");
    console.log("📥 CONSULTATION STATUS API STARTED");
    console.log("====================================");

    // ==========================================
    // GET QUERY PARAMETERS
    // ==========================================

    const { searchParams } = new URL(req.url);

    const consultationId =
      searchParams.get("consultationId");

    const panditId =
      searchParams.get("panditId");

    console.log(
      "Consultation ID:",
      consultationId
    );

    console.log(
      "Pandit ID:",
      panditId
    );

    // ==========================================
    // VALIDATE CONSULTATION ID
    // ==========================================

    if (!consultationId) {
      console.error(
        "❌ Consultation ID missing"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================================
    // VALIDATE MONGODB OBJECT ID
    // ==========================================

    if (
      !mongoose.Types.ObjectId.isValid(
        consultationId
      )
    ) {
      console.error(
        "❌ Invalid Consultation ID:",
        consultationId
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid consultation ID.",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================================
    // FIND CONSULTATION
    // ==========================================

    const consultation =
      await Consultation.findById(
        consultationId
      ).lean();

    // ==========================================
    // CONSULTATION NOT FOUND
    // ==========================================

    if (!consultation) {
      console.error(
        "❌ Consultation not found:",
        consultationId
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation not found.",
          consultationId:
            consultationId,
          panditId:
            panditId || null,
        },
        {
          status: 404,
        }
      );
    }

    console.log(
      "✅ Consultation found"
    );

    console.log(
      "MongoDB ID:",
      String(consultation._id)
    );

    console.log(
      "User ID:",
      String(consultation.userId)
    );

    console.log(
      "Pandit ID:",
      String(consultation.panditId)
    );

    console.log(
      "Pandit Name:",
      consultation.panditName ||
        "Not available"
    );

    console.log(
      "Current Status:",
      consultation.status
    );

    // ==========================================
    // VERIFY PANDIT ID
    // ==========================================

    if (
      panditId &&
      String(consultation.panditId) !==
        String(panditId)
    ) {
      console.error(
        "❌ Pandit ID mismatch"
      );

      console.error(
        "DB Pandit:",
        String(consultation.panditId)
      );

      console.error(
        "Request Pandit:",
        String(panditId)
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation does not belong to this astrologer.",
        },
        {
          status: 403,
        }
      );
    }

    // ==========================================
    // STATUS
    // ==========================================

    let finalStatus =
      consultation.status;

    let finalStartTime =
      consultation.startTime || null;

    // ==========================================
    // ACCEPTED → ACTIVE
    // ==========================================
    //
    // Pandit ne request accept kar di hai.
    //
    // User side par consultation immediately
    // active kar denge.
    //
    // ==========================================

    if (
      consultation.status ===
      "accepted"
    ) {
      console.log(
        "===================================="
      );

      console.log(
        "🟢 CONSULTATION ACCEPTED"
      );

      console.log(
        "➡️ Changing accepted → active"
      );

      console.log(
        "===================================="
      );

      const updateData: any = {
        status: "active",
      };

      // Start time sirf ek baar set hoga
      if (!consultation.startTime) {
        updateData.startTime =
          new Date();
      }

      const updatedConsultation =
        await Consultation.findByIdAndUpdate(
          consultation._id,
          {
            $set: updateData,
          },
          {
            new: true,
          }
        ).lean();

      if (
        updatedConsultation
      ) {
        finalStatus =
          updatedConsultation.status;

        finalStartTime =
          updatedConsultation.startTime ||
          null;

        console.log(
          "✅ Consultation ACTIVE"
        );

        console.log(
          "Start Time:",
          finalStartTime
        );
      }
    }

    // ==========================================
    // BUILD RESPONSE
    // ==========================================

    const responseData = {
      _id: String(
        consultation._id
      ),

      userId: String(
        consultation.userId
      ),

      panditId: String(
        consultation.panditId
      ),

      // Actual Pandit name
      panditName:
        consultation.panditName ||
        "Pandit Ji",

      panditPhone:
        consultation.panditPhone ||
        null,

      consultationType:
        consultation.consultationType ||
        "chat",

      amount:
        Number(
          consultation.amount || 0
        ),

      duration:
        Number(
          consultation.duration || 0
        ),

      paymentId:
        String(
          consultation.paymentId
        ),

      status:
        finalStatus,

      startTime:
        finalStartTime,

      endTime:
        consultation.endTime ||
        null,

      createdAt:
        consultation.createdAt ||
        null,

      updatedAt:
        consultation.updatedAt ||
        null,
    };

    // ==========================================
    // LOG RESPONSE
    // ==========================================

    console.log(
      "===================================="
    );

    console.log(
      "📤 CONSULTATION STATUS RESPONSE"
    );

    console.log(
      "===================================="
    );

    console.log(
      "Consultation ID:",
      responseData._id
    );

    console.log(
      "Pandit ID:",
      responseData.panditId
    );

    console.log(
      "Pandit Name:",
      responseData.panditName
    );

    console.log(
      "Status:",
      responseData.status
    );

    console.log(
      "Start Time:",
      responseData.startTime
    );

    console.log(
      "===================================="
    );

    // ==========================================
    // FINAL RESPONSE
    // ==========================================

    return NextResponse.json(
      {
        success: true,

        message:
          "Consultation status loaded successfully.",

        consultation:
          responseData,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    // ==========================================
    // ERROR
    // ==========================================

    console.error(
      "===================================="
    );

    console.error(
      "❌ CONSULTATION STATUS API ERROR"
    );

    console.error(
      "===================================="
    );

    console.error(
      "Error name:",
      error?.name
    );

    console.error(
      "Error message:",
      error?.message
    );

    console.error(
      "Full error:",
      error
    );

    console.error(
      "===================================="
    );

    return NextResponse.json(
      {
        success: false,

        message:
          error?.message ||
          "Unable to load consultation.",

        error:
          process.env.NODE_ENV ===
          "development"
            ? String(error)
            : undefined,
      },
      {
        status: 500,
      }
    );
  }
}