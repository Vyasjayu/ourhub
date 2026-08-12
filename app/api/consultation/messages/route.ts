import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Consultation from "@/models/Consultation";
import ConsultationMessage from "@/models/ConsultationMessage";

// ======================================================
// GET MESSAGES
// ======================================================

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);

    const consultationId =
      searchParams.get("consultationId");

    console.log("====================================");
    console.log("📥 GET CONSULTATION MESSAGES");
    console.log("Consultation ID:", consultationId);
    console.log("====================================");

    if (!consultationId) {
      return NextResponse.json(
        {
          success: false,
          message: "Consultation ID is required.",
        },
        { status: 400 }
      );
    }

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

    const messages =
      await ConsultationMessage.find({
        consultationId: String(
          consultationId
        ),
      })
        .sort({
          createdAt: 1,
        })
        .lean();

    const formattedMessages =
      messages.map((item: any) => ({
        id: String(item._id),

        text: String(item.text || ""),

        sender:
          item.senderType === "user"
            ? "user"
            : "pandit",

        senderId:
          String(item.senderId),

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

    return NextResponse.json(
      {
        success: true,
        messages: formattedMessages,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "❌ GET messages error:",
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

// ======================================================
// POST MESSAGE
// ======================================================

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

    console.log("");
    console.log("====================================");
    console.log("📨 SEND CONSULTATION MESSAGE");
    console.log("====================================");
    console.log(
      "Consultation ID:",
      consultationId
    );
    console.log(
      "Sender ID:",
      senderId
    );
    console.log(
      "Sender Type:",
      senderType
    );
    console.log(
      "Message:",
      text
    );
    console.log("====================================");

    // ==================================================
    // VALIDATION
    // ==================================================

    if (!consultationId) {
      console.error(
        "❌ consultationId missing"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation ID is required.",
        },
        { status: 400 }
      );
    }

    if (!senderId) {
      console.error(
        "❌ senderId missing"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Sender ID is required.",
        },
        { status: 400 }
      );
    }

    if (
      senderType !== "user" &&
      senderType !== "pandit"
    ) {
      console.error(
        "❌ Invalid senderType:",
        senderType
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid sender type.",
        },
        { status: 400 }
      );
    }

    if (
      !text ||
      !String(text).trim()
    ) {
      console.error(
        "❌ Empty message"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Message cannot be empty.",
        },
        { status: 400 }
      );
    }

    // ==================================================
    // FIND CONSULTATION
    // ==================================================

    const consultation =
      await Consultation.findById(
        consultationId
      );

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
        },
        { status: 404 }
      );
    }

    console.log(
      "✅ Consultation found"
    );

    console.log(
      "Consultation userId:",
      consultation.userId
    );

    console.log(
      "Consultation panditId:",
      consultation.panditId
    );

    console.log(
      "Consultation status:",
      consultation.status
    );

    // ==================================================
    // CHECK STATUS
    // ==================================================

    if (
      consultation.status !==
        "accepted" &&
      consultation.status !==
        "active"
    ) {
      console.error(
        "❌ Consultation not active:",
        consultation.status
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation is not active.",
        },
        { status: 400 }
      );
    }

    // ==================================================
    // VERIFY PARTICIPANT
    // ==================================================

    const consultationUserId =
      String(
        consultation.userId
      ).trim();

    const consultationPanditId =
      String(
        consultation.panditId
      ).trim();

    const currentSenderId =
      String(senderId).trim();

    console.log(
      "Participant verification:"
    );

    console.log(
      "User ID:",
      consultationUserId
    );

    console.log(
      "Pandit ID:",
      consultationPanditId
    );

    console.log(
      "Current Sender:",
      currentSenderId
    );

    // ==================================================
    // USER
    // ==================================================

    if (
      senderType === "user" &&
      consultationUserId !==
        currentSenderId
    ) {
      console.error(
        "❌ USER ID DOES NOT MATCH"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "User is not a participant in this consultation.",
        },
        { status: 403 }
      );
    }

    // ==================================================
    // PANDIT
    // ==================================================

    if (
      senderType === "pandit" &&
      consultationPanditId !==
        currentSenderId
    ) {
      console.error(
        "❌ PANDIT ID DOES NOT MATCH"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Pandit is not a participant in this consultation.",
        },
        { status: 403 }
      );
    }

    // ==================================================
    // CREATE MESSAGE
    // ==================================================

    const newMessage =
      await ConsultationMessage.create({
        consultationId:
          String(consultationId),

        senderId:
          currentSenderId,

        senderType,

        text:
          String(text).trim(),
      });

    console.log(
      "===================================="
    );

    console.log(
      "✅ MESSAGE SAVED SUCCESSFULLY"
    );

    console.log(
      "Message ID:",
      newMessage._id
    );

    console.log(
      "===================================="
    );

    // ==================================================
    // RESPONSE
    // ==================================================

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
            new Date(
              newMessage.createdAt
            ).toLocaleTimeString(
              "en-IN",
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            ),
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(
      "===================================="
    );

    console.error(
      "❌ POST MESSAGE ERROR"
    );

    console.error(
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
          "Unable to send message.",
      },
      { status: 500 }
    );
  }
}