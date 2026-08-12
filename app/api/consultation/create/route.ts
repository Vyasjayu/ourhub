import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { connectDB } from "@/lib/mongodb";
import Consultation from "@/models/Consultation";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    console.log("====================================");
    console.log("📥 CONSULTATION CREATE API STARTED");
    console.log("====================================");

    // ==========================================
    // CONNECT DATABASE
    // ==========================================

    await connectDB();

    console.log("✅ Database connected");

    // ==========================================
    // GET USER TOKEN
    // ==========================================

    const token = req.cookies.get("userToken")?.value;

    if (!token) {
      console.log("❌ userToken not found");

      return NextResponse.json(
        {
          success: false,
          message: "Please login first.",
        },
        {
          status: 401,
        }
      );
    }

    console.log("✅ userToken found");

    // ==========================================
    // VERIFY JWT
    // ==========================================

    let decoded: {
      userId: string;
      mobile?: string;
    };

    try {
      decoded = jwt.verify(
        token,
        process.env.JWT_SECRET!
      ) as {
        userId: string;
        mobile?: string;
      };
    } catch (error) {
      console.error("❌ JWT VERIFY ERROR:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Invalid or expired login session.",
        },
        {
          status: 401,
        }
      );
    }

    console.log("✅ JWT verified");
    console.log("JWT USER ID:", decoded.userId);
    console.log("JWT MOBILE:", decoded.mobile || "Not available");

    // ==========================================
    // VALIDATE JWT USER ID
    // ==========================================

    if (!decoded.userId) {
      console.log("❌ JWT userId missing");

      return NextResponse.json(
        {
          success: false,
          message: "Invalid login session. User ID missing.",
        },
        {
          status: 401,
        }
      );
    }

    // ==========================================
    // FIND USER
    // ==========================================

    const user = await User.findById(decoded.userId).select(
      "-password"
    );

    if (!user) {
      console.log("❌ User not found:", decoded.userId);

      return NextResponse.json(
        {
          success: false,
          message: "User not found.",
        },
        {
          status: 404,
        }
      );
    }

    // ==========================================
    // CHECK BLOCKED USER
    // ==========================================

    if (user.isBlocked) {
      console.log("❌ User is blocked:", String(user._id));

      return NextResponse.json(
        {
          success: false,
          message: "Your account has been blocked.",
        },
        {
          status: 403,
        }
      );
    }

    console.log("✅ Logged-in User:", user.fullName);
    console.log("User ID:", String(user._id));

    // ==========================================
    // READ REQUEST BODY
    // ==========================================

    let body: any;

    try {
      body = await req.json();
    } catch (error) {
      console.error("❌ Invalid JSON body");

      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body.",
        },
        {
          status: 400,
        }
      );
    }

    console.log("====================================");
    console.log("📦 REQUEST BODY");
    console.log(body);
    console.log("====================================");

    // ==========================================
    // GET BODY DATA
    // ==========================================

    const {
      panditId,
      amount,
      duration,
      paymentId,
      panditPhone,
      panditName,
    } = body;

    console.log("panditId:", panditId);
    console.log("amount:", amount);
    console.log("duration:", duration);
    console.log("paymentId:", paymentId);
    console.log("panditPhone:", panditPhone);
    console.log("panditName:", panditName);

    // ==========================================
    // VALIDATE PANDIT ID
    // ==========================================

    if (!panditId) {
      console.log("❌ Pandit ID missing");

      return NextResponse.json(
        {
          success: false,
          message: "Pandit ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    const normalizedPanditId = String(panditId).trim();

    if (!normalizedPanditId) {
      console.log("❌ Invalid Pandit ID");

      return NextResponse.json(
        {
          success: false,
          message: "Invalid Pandit ID.",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================================
    // VALIDATE AMOUNT
    // ==========================================

    const numericAmount = Number(amount);

    if (
      !Number.isFinite(numericAmount) ||
      numericAmount <= 0
    ) {
      console.log("❌ Invalid amount:", amount);

      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment amount.",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================================
    // VALIDATE DURATION
    // ==========================================

    const numericDuration = Number(duration);

    if (
      !Number.isFinite(numericDuration) ||
      numericDuration <= 0
    ) {
      console.log("❌ Invalid duration:", duration);

      return NextResponse.json(
        {
          success: false,
          message: "Consultation duration is required.",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================================
    // VALIDATE PAYMENT ID
    // ==========================================

    if (!paymentId) {
      console.log("❌ Payment ID missing");

      return NextResponse.json(
        {
          success: false,
          message: "Payment ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    const normalizedPaymentId = String(paymentId).trim();

    if (!normalizedPaymentId) {
      console.log("❌ Invalid payment ID");

      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment ID.",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================================
    // NORMALIZE OPTIONAL PANDIT DATA
    // ==========================================

    const normalizedPanditName = panditName
      ? String(panditName).trim()
      : null;

    const normalizedPanditPhone = panditPhone
      ? String(panditPhone).trim()
      : null;

    // ==========================================
    // CHECK DUPLICATE PAYMENT
    // ==========================================

    console.log("====================================");
    console.log("🔍 CHECKING DUPLICATE PAYMENT");
    console.log("Payment ID:", normalizedPaymentId);
    console.log("====================================");

    const existingConsultation =
      await Consultation.findOne({
        paymentId: normalizedPaymentId,
      });

    // ==========================================
    // EXISTING CONSULTATION
    // ==========================================

    if (existingConsultation) {
      const existingConsultationId = String(
        existingConsultation._id
      );

      console.log(
        "⚠️ Consultation already exists:",
        existingConsultationId
      );

      const existingResponse = {
        id: existingConsultationId,

        _id: existingConsultationId,

        userId: String(
          existingConsultation.userId
        ),

        panditId: String(
          existingConsultation.panditId
        ),

        amount: Number(
          existingConsultation.amount
        ),

        duration: Number(
          existingConsultation.duration
        ),

        paymentId: String(
          existingConsultation.paymentId
        ),

        status:
          existingConsultation.status,

        startTime:
          existingConsultation.startTime ||
          null,

        endTime:
          existingConsultation.endTime ||
          null,

        panditName:
          existingConsultation.panditName ||
          null,

        panditPhone:
          existingConsultation.panditPhone ||
          null,
      };

      console.log("📤 DUPLICATE RESPONSE:");
      console.log(existingResponse);

      return NextResponse.json(
        {
          success: true,

          message:
            "Consultation already created.",

          // IMPORTANT
          consultationId:
            existingConsultationId,

          // IMPORTANT
          id: existingConsultationId,

          consultation:
            existingResponse,
        },
        {
          status: 200,
        }
      );
    }

    // ==========================================
    // CREATE CONSULTATION DATA
    // ==========================================

    console.log("====================================");
    console.log("📝 CREATING CONSULTATION");
    console.log("====================================");

    const consultationData = {
      userId: String(user._id),

      panditId: normalizedPanditId,

      panditName:
        normalizedPanditName,

      panditPhone:
        normalizedPanditPhone,

      amount: numericAmount,

      duration: numericDuration,

      paymentId:
        normalizedPaymentId,

      status: "requested" as const,

      startTime: null,

      endTime: null,
    };

    console.log(
      "CONSULTATION DATA:",
      consultationData
    );

    // ==========================================
    // CREATE
    // ==========================================

    const consultation =
      await Consultation.create(
        consultationData
      );

    // ==========================================
    // VERIFY CREATED DOCUMENT
    // ==========================================

    if (!consultation) {
      console.error(
        "❌ Consultation document was not created"
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation could not be created.",
        },
        {
          status: 500,
        }
      );
    }

    // ==========================================
    // GET MONGODB ID
    // ==========================================

    const consultationId = consultation?._id
      ? String(consultation._id)
      : "";

    // ==========================================
    // ID SAFETY CHECK
    // ==========================================

    if (!consultationId) {
      console.error(
        "❌ Consultation created but ID is missing"
      );

      console.error(
        "Created consultation:",
        consultation
      );

      return NextResponse.json(
        {
          success: false,

          message:
            "Consultation created but ID could not be generated.",

          consultationId: null,
        },
        {
          status: 500,
        }
      );
    }

    // ==========================================
    // CONVERT IDS TO STRING
    // ==========================================

    const savedUserId =
      String(consultation.userId);

    const savedPanditId =
      String(consultation.panditId);

    const savedPaymentId =
      String(consultation.paymentId);

    // ==========================================
    // RESPONSE DATA
    // ==========================================

    const responseData = {
      id: consultationId,

      _id: consultationId,

      userId: savedUserId,

      panditId: savedPanditId,

      panditName:
        consultation.panditName ||
        normalizedPanditName ||
        null,

      panditPhone:
        consultation.panditPhone ||
        normalizedPanditPhone ||
        null,

      amount: Number(
        consultation.amount
      ),

      duration: Number(
        consultation.duration
      ),

      paymentId: savedPaymentId,

      status:
        consultation.status,

      startTime:
        consultation.startTime ||
        null,

      endTime:
        consultation.endTime ||
        null,

      createdAt:
        consultation.createdAt,

      updatedAt:
        consultation.updatedAt,
    };

    // ==========================================
    // SUCCESS LOG
    // ==========================================

    console.log("====================================");
    console.log(
      "✅ CONSULTATION CREATED SUCCESSFULLY"
    );
    console.log("====================================");

    console.log(
      "🆔 Consultation ID:",
      consultationId
    );

    console.log(
      "👤 User ID:",
      savedUserId
    );

    console.log(
      "🔮 Pandit ID:",
      savedPanditId
    );

    console.log(
      "💰 Amount:",
      numericAmount
    );

    console.log(
      "⏱️ Duration:",
      numericDuration
    );

    console.log(
      "💳 Payment ID:",
      savedPaymentId
    );

    console.log(
      "📌 Status:",
      consultation.status
    );

    console.log("====================================");

    // ==========================================
    // FINAL RESPONSE
    // ==========================================

    return NextResponse.json(
      {
        success: true,

        message:
          "Consultation created successfully.",

        // IMPORTANT:
        // Frontend can directly use data.consultationId
        consultationId:

          consultationId,

        // Extra compatibility
        id: consultationId,

        consultation:
          responseData,
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    console.error("====================================");
    console.error(
      "❌ CONSULTATION CREATE ERROR"
    );
    console.error("====================================");

    console.error(
      "Error message:",
      error?.message
    );

    console.error(
      "Error name:",
      error?.name
    );

    console.error(
      "Error code:",
      error?.code
    );

    console.error(
      "Full error:",
      error
    );

    console.error("====================================");

    // ==========================================
    // DUPLICATE KEY ERROR
    // ==========================================

    if (error?.code === 11000) {
      console.error(
        "⚠️ DUPLICATE KEY ERROR"
      );

      return NextResponse.json(
        {
          success: false,

          message:
            "This payment has already been used for a consultation.",

          error:
            process.env.NODE_ENV ===
            "development"
              ? String(error)
              : undefined,
        },
        {
          status: 409,
        }
      );
    }

    // ==========================================
    // MONGOOSE VALIDATION ERROR
    // ==========================================

    if (
      error?.name ===
      "ValidationError"
    ) {
      console.error(
        "❌ MONGOOSE VALIDATION ERROR"
      );

      return NextResponse.json(
        {
          success: false,

          message:
            "Consultation data validation failed.",

          error:
            process.env.NODE_ENV ===
            "development"
              ? String(error)
              : undefined,
        },
        {
          status: 400,
        }
      );
    }

    // ==========================================
    // DEFAULT ERROR
    // ==========================================

    return NextResponse.json(
      {
        success: false,

        message:
          error?.message ||
          "Consultation creation failed.",

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