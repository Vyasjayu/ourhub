import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

import { connectDB } from "@/lib/mongodb";
import Consultation from "@/models/Consultation";
import ConsultationMessage from "@/models/ConsultationMessage";

// ============================================================
// GET MESSAGES
// ============================================================

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const consultationId =
      searchParams.get("consultationId");

    console.log("====================================");
    console.log("📥 GET CHAT MESSAGES");
    console.log("Consultation ID:", consultationId);
    console.log("====================================");

    // --------------------------------------------------------
    // Validate consultation ID
    // --------------------------------------------------------

    if (!consultationId) {
      return NextResponse.json(
        {
          success: false,
          message: "Consultation ID is required.",
        },
        { status: 400 }
      );
    }

    if (!mongoose.Types.ObjectId.isValid(consultationId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid consultation ID.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------------
    // Check consultation
    // --------------------------------------------------------

    const consultation =
      await Consultation.findById(
        consultationId
      ).lean();

    if (!consultation) {
      return NextResponse.json(
        {
          success: false,
          message: "Consultation not found.",
        },
        { status: 404 }
      );
    }

    // --------------------------------------------------------
    // Get messages
    // --------------------------------------------------------

    const messages =
      await ConsultationMessage.find({
        consultationId: String(
          consultationId
        ),
      })
        .sort({ createdAt: 1 })
        .lean();

    // --------------------------------------------------------
    // Format messages
    // --------------------------------------------------------

    const formattedMessages =
      messages.map((item: any) => ({
        id: String(item._id),

        text: String(item.text || ""),

        sender:
          item.senderType === "pandit"
            ? "pandit"
            : "user",

        senderId:
          String(item.senderId || ""),

        time: item.createdAt
          ? new Date(
              item.createdAt
            ).toLocaleTimeString(
              "en-IN",
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )
          : "",
      }));

    console.log(
      "✅ Messages found:",
      formattedMessages.length
    );

    return NextResponse.json(
      {
        success: true,

        messages:
          formattedMessages,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "❌ GET CHAT MESSAGES ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          error?.message ||
          "Unable to load messages.",
      },
      { status: 500 }
    );
  }
}

// ============================================================
// POST MESSAGE
// ============================================================

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const consultationId =
      body?.consultationId;

    const senderId =
      body?.senderId;

    const senderType =
      body?.senderType;

    const text =
      body?.text;

    console.log("====================================");
    console.log("📨 POST CHAT MESSAGE");
    console.log("Consultation:", consultationId);
    console.log("Sender ID:", senderId);
    console.log("Sender Type:", senderType);
    console.log("Message:", text);
    console.log("====================================");

    // --------------------------------------------------------
    // Validate consultation ID
    // --------------------------------------------------------

    if (!consultationId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation ID is required.",
        },
        { status: 400 }
      );
    }

    if (
      !mongoose.Types.ObjectId.isValid(
        String(consultationId)
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid consultation ID.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------------
    // Validate sender
    // --------------------------------------------------------

    if (!senderId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Sender ID is required.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------------
    // Validate sender type
    // --------------------------------------------------------

    if (
      senderType !== "user" &&
      senderType !== "pandit"
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid sender type.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------------
    // Validate text
    // --------------------------------------------------------

    if (
      !text ||
      !String(text).trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Message cannot be empty.",
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------------
    // Find consultation
    // --------------------------------------------------------

    const consultation =
      await Consultation.findById(
        consultationId
      );

    if (!consultation) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation not found.",
        },
        { status: 404 }
      );
    }

    console.log(
      "Consultation status:",
      consultation.status
    );

    // --------------------------------------------------------
    // Allow accepted OR active
    // --------------------------------------------------------

    if (
      consultation.status !== "accepted" &&
      consultation.status !== "active"
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation is not active.",
          status:
            consultation.status,
        },
        { status: 400 }
      );
    }

    // --------------------------------------------------------
    // Verify participant
    // --------------------------------------------------------

    const senderMatches =
      senderType === "user"
        ? String(
            consultation.userId
          ) === String(senderId)
        : String(
            consultation.panditId
          ) === String(senderId);

    if (!senderMatches) {
      console.error(
        "❌ Sender is not participant"
      );

      console.error(
        "Expected:",
        senderType === "user"
          ? consultation.userId
          : consultation.panditId
      );

      console.error(
        "Received:",
        senderId
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "You are not a participant in this consultation.",
        },
        { status: 403 }
      );
    }

    // --------------------------------------------------------
    // Create message
    // --------------------------------------------------------

    const newMessage =
      await ConsultationMessage.create({
        consultationId:
          String(consultationId),

        senderId:
          String(senderId),

        senderType:
          senderType,

        text:
          String(text).trim(),
      });

    console.log(
      "✅ MESSAGE SAVED:",
      newMessage._id
    );

    // --------------------------------------------------------
    // Response
    // --------------------------------------------------------

    return NextResponse.json(
      {
        success: true,

        message: {
          id: String(
            newMessage._id
          ),

          text:
            String(
              newMessage.text
            ),

          sender:
            newMessage.senderType,

          senderId:
            String(
              newMessage.senderId
            ),

          time:
            newMessage.createdAt
              ? new Date(
                  newMessage.createdAt
                ).toLocaleTimeString(
                  "en-IN",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )
              : "",
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(
      "===================================="
    );

    console.error(
      "❌ POST CHAT MESSAGE ERROR"
    );

    console.error(error);

    console.error(
      "===================================="
    );

    return NextResponse.json(
      {
        success: false,

        message:
          error?.message ||
          "Unable to send message.",
      },
      { status: 500 }
    );
  }
}