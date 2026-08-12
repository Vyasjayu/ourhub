import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Consultation from "@/models/Consultation";
import Provider from "@/models/Provider";

export async function PATCH(
  req: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    await connectDB();

    // =========================================
    // GET CONSULTATION ID
    // =========================================

    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message: "Consultation ID is required",
        },
        { status: 400 }
      );
    }

    // =========================================
    // GET BODY
    // =========================================

    let body: any;

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body",
        },
        { status: 400 }
      );
    }

    const action = body?.action;
    const mobile = body?.mobile;

    console.log("====================================");
    console.log("CONSULTATION ACTION");
    console.log("Consultation ID:", id);
    console.log("Action:", action);
    console.log("Mobile:", mobile);
    console.log("====================================");

    // =========================================
    // VALIDATION
    // =========================================

    if (!mobile) {
      return NextResponse.json(
        {
          success: false,
          message: "Provider mobile is required",
        },
        { status: 400 }
      );
    }

    if (action !== "accept" && action !== "reject") {
      return NextResponse.json(
        {
          success: false,
          message: "Action must be accept or reject",
        },
        { status: 400 }
      );
    }

    // =========================================
    // FIND PROVIDER
    // =========================================

    const provider: any = await Provider.findOne({
      mobile: String(mobile).trim(),
    })
      .select("_id fullName displayName mobile")
      .lean();

    if (!provider) {
      console.log("❌ Provider not found:", mobile);

      return NextResponse.json(
        {
          success: false,
          message: "Provider not found",
        },
        { status: 404 }
      );
    }

    const providerId = String(provider._id);

    console.log("✅ Provider ID:", providerId);

    // =========================================
    // FIND CONSULTATION
    // =========================================

    const consultation: any =
      await Consultation.findById(id);

    if (!consultation) {
      console.log("❌ Consultation not found:", id);

      return NextResponse.json(
        {
          success: false,
          message: "Consultation not found",
        },
        { status: 404 }
      );
    }

    console.log(
      "✅ Consultation found:",
      String(consultation._id)
    );

    // =========================================
    // SECURITY CHECK
    // =========================================

    if (
      String(consultation.panditId) !==
      providerId
    ) {
      console.log(
        "❌ Unauthorized consultation access"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "You are not authorized for this consultation",
        },
        { status: 403 }
      );
    }

    // =========================================
    // STATUS CHECK
    // =========================================

    if (
      consultation.status !== "requested"
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This consultation has already been processed",
          status: consultation.status,
        },
        { status: 409 }
      );
    }

    // =========================================
    // ACCEPT
    // =========================================

    if (action === "accept") {
      consultation.status = "accepted";

      consultation.startTime =
        new Date();

      consultation.endTime = null;

      await consultation.save();

      console.log(
        "✅ Consultation ACCEPTED:",
        String(consultation._id)
      );

      return NextResponse.json(
        {
          success: true,
          message:
            "Consultation accepted successfully",

          consultation: {
            id: String(
              consultation._id
            ),

            userId: String(
              consultation.userId || ""
            ),

            panditId: String(
              consultation.panditId || ""
            ),

            amount: Number(
              consultation.amount || 0
            ),

            duration: Number(
              consultation.duration || 0
            ),

            paymentId:
              consultation.paymentId || "",

            status:
              consultation.status,

            startTime:
              consultation.startTime || null,

            endTime:
              consultation.endTime || null,

            createdAt:
              consultation.createdAt || null,

            updatedAt:
              consultation.updatedAt || null,
          },
        },
        { status: 200 }
      );
    }

    // =========================================
    // REJECT
    // =========================================

    if (action === "reject") {
      consultation.status = "rejected";

      consultation.endTime =
        new Date();

      await consultation.save();

      console.log(
        "❌ Consultation REJECTED:",
        String(consultation._id)
      );

      return NextResponse.json(
        {
          success: true,
          message:
            "Consultation rejected successfully",

          consultation: {
            id: String(
              consultation._id
            ),

            userId: String(
              consultation.userId || ""
            ),

            panditId: String(
              consultation.panditId || ""
            ),

            amount: Number(
              consultation.amount || 0
            ),

            duration: Number(
              consultation.duration || 0
            ),

            paymentId:
              consultation.paymentId || "",

            status:
              consultation.status,

            startTime:
              consultation.startTime || null,

            endTime:
              consultation.endTime || null,

            createdAt:
              consultation.createdAt || null,

            updatedAt:
              consultation.updatedAt || null,
          },
        },
        { status: 200 }
      );
    }

    // =========================================
    // INVALID ACTION
    // =========================================

    return NextResponse.json(
      {
        success: false,
        message: "Invalid action",
      },
      { status: 400 }
    );
  } catch (error: any) {
    console.error(
      "❌ Consultation Action Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message ||
          "Failed to update consultation",
      },
      { status: 500 }
    );
  }
}