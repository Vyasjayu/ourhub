import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Consultation from "@/models/Consultation";
import Provider from "@/models/Provider";
import User from "@/models/User";

// ============================================================
// TYPES
// ============================================================

interface ProviderData {
  _id: unknown;
  fullName?: string;
  displayName?: string;
  mobile?: string;
  isVerified?: boolean;
  isActive?: boolean;
}

interface ConsultationData {
  _id: unknown;
  userId?: unknown;
  panditId?: unknown;

  panditName?: string;
  panditPhone?: string;

  amount?: number;
  duration?: number;

  paymentId?: string;

  consultationType?: string;
  type?: string;

  status?: string;

  startTime?: Date | null;
  endTime?: Date | null;

  createdAt?: Date;
  updatedAt?: Date;
}

interface UserWalletData {
  _id: unknown;
  walletBalance?: number;
}

// ============================================================
// PARAMS
// ============================================================

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

// ============================================================
// GET SINGLE CONSULTATION
//
// User waiting page:
// GET /api/provider/consultations/[consultationId]
//
// requested
// accepted
// rejected
// active
// completed
// ============================================================

export async function GET(
  req: NextRequest,
  context: RouteContext
) {
  try {
    await connectDB();

    const { id } = await context.params;

    console.log(
      "===================================="
    );

    console.log(
      "📥 GET SINGLE CONSULTATION"
    );

    console.log(
      "Consultation ID:",
      id
    );

    console.log(
      "===================================="
    );

    // ========================================================
    // VALIDATION
    // ========================================================

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation ID is required",
        },
        {
          status: 400,
        }
      );
    }

    // ========================================================
    // FIND CONSULTATION
    // ========================================================

    const consultation =
      (await Consultation.findById(id)
        .lean()
        .exec()) as ConsultationData | null;

    // ========================================================
    // NOT FOUND
    // ========================================================

    if (!consultation) {
      console.log(
        "❌ Consultation not found:",
        id
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation not found",
        },
        {
          status: 404,
        }
      );
    }

    // ========================================================
    // SUCCESS
    // ========================================================

    console.log(
      "✅ Consultation found:",
      String(consultation._id)
    );

    console.log(
      "Status:",
      consultation.status
    );

    console.log(
      "User ID:",
      String(
        consultation.userId || ""
      )
    );

    console.log(
      "Pandit ID:",
      String(
        consultation.panditId || ""
      )
    );

    console.log(
      "===================================="
    );

    return NextResponse.json(
      {
        success: true,

        consultation: {
          _id: String(
            consultation._id
          ),

          id: String(
            consultation._id
          ),

          userId: String(
            consultation.userId || ""
          ),

          panditId: String(
            consultation.panditId || ""
          ),

          astrologerId: String(
            consultation.panditId || ""
          ),

          panditName:
            consultation.panditName ||
            "",

          astrologerName:
            consultation.panditName ||
            "",

          panditPhone:
            consultation.panditPhone ||
            "",

          amount: Number(
            consultation.amount || 0
          ),

          price: Number(
            consultation.amount || 0
          ),

          duration: Number(
            consultation.duration || 0
          ),

          paymentId:
            consultation.paymentId ||
            "",

          consultationType:
            consultation.consultationType ||
            consultation.type ||
            "chat",

          type:
            consultation.type ||
            consultation.consultationType ||
            "chat",

          status:
            consultation.status ||
            "requested",

          startTime:
            consultation.startTime ||
            null,

          endTime:
            consultation.endTime ||
            null,

          createdAt:
            consultation.createdAt ||
            null,

          updatedAt:
            consultation.updatedAt ||
            null,

          // Kundli fields
          name:
            (consultation as any).name ||
            "",

          gender:
            (consultation as any).gender ||
            "",

          dob:
            (consultation as any).dob ||
            "",

          birthTime:
            (consultation as any).birthTime ||
            "",

          birthPlace:
            (consultation as any).birthPlace ||
            "",

          kundli:
            (consultation as any).kundli ||
            {
              name:
                (consultation as any).name ||
                "",

              gender:
                (consultation as any).gender ||
                "",

              dob:
                (consultation as any).dob ||
                "",

              birthTime:
                (consultation as any).birthTime ||
                "",

              birthPlace:
                (consultation as any)
                  .birthPlace ||
                "",
            },
        },
      },
      {
        status: 200,
      }
    );
  } catch (error: unknown) {
    console.error(
      "❌ GET SINGLE CONSULTATION ERROR:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Failed to fetch consultation";

    return NextResponse.json(
      {
        success: false,
        message,
      },
      {
        status: 500,
      }
    );
  }
}

// ============================================================
// PATCH
//
// Provider Accept / Reject Consultation
//
// ACCEPT
// requested → accepted
//
// REJECT
// requested → rejected
// + wallet refund
//
// IMPORTANT
// accepted par active nahi hoga.
//
// Chat start hone par:
// accepted → active
// ============================================================

export async function PATCH(
  req: NextRequest,
  context: RouteContext
) {
  try {
    await connectDB();

    // ========================================================
    // CONSULTATION ID
    // ========================================================

    const { id } = await context.params;

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation ID is required",
        },
        {
          status: 400,
        }
      );
    }

    // ========================================================
    // REQUEST BODY
    // ========================================================

    let body: {
      action?: string;
      mobile?: string;
    };

    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid request body",
        },
        {
          status: 400,
        }
      );
    }

    const action = body?.action;
    const mobile = body?.mobile;

    console.log(
      "===================================="
    );

    console.log(
      "📥 CONSULTATION ACTION"
    );

    console.log(
      "Consultation ID:",
      id
    );

    console.log(
      "Action:",
      action
    );

    console.log(
      "Mobile:",
      mobile
    );

    console.log(
      "===================================="
    );

    // ========================================================
    // VALIDATION
    // ========================================================

    if (!mobile) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Provider mobile is required",
        },
        {
          status: 400,
        }
      );
    }

    if (
      action !== "accept" &&
      action !== "reject"
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Action must be accept or reject",
        },
        {
          status: 400,
        }
      );
    }

    // ========================================================
    // FIND PROVIDER
    // ========================================================

    const provider =
      (await Provider.findOne({
        mobile: String(mobile).trim(),
      })
        .select(
          "_id fullName displayName mobile isVerified isActive"
        )
        .lean()
        .exec()) as ProviderData | null;

    if (!provider) {
      console.log(
        "❌ Provider not found:",
        mobile
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Provider not found",
        },
        {
          status: 404,
        }
      );
    }

    const providerId =
      String(provider._id);

    console.log(
      "✅ Provider ID:",
      providerId
    );

    // ========================================================
    // FIND CONSULTATION
    // ========================================================

    const consultation =
      (await Consultation.findById(id)
        .lean()
        .exec()) as ConsultationData | null;

    if (!consultation) {
      console.log(
        "❌ Consultation not found:",
        id
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Consultation not found",
        },
        {
          status: 404,
        }
      );
    }

    console.log(
      "✅ Consultation found:",
      String(
        consultation._id
      )
    );

    console.log(
      "Current status:",
      consultation.status
    );

    // ========================================================
    // SECURITY CHECK
    // ========================================================

    if (
      String(
        consultation.panditId
      ) !== providerId
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
        {
          status: 403,
        }
      );
    }

    // ========================================================
    // PROVIDER STATUS
    // ========================================================

    if (
      provider.isVerified === false
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Provider is not verified",
        },
        {
          status: 403,
        }
      );
    }

    if (
      provider.isActive === false
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Provider is currently inactive",
        },
        {
          status: 403,
        }
      );
    }

    // ========================================================
    // ONLY REQUESTED CAN BE PROCESSED
    // ========================================================

    if (
      consultation.status !==
      "requested"
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This consultation has already been processed",
          status:
            consultation.status,
        },
        {
          status: 409,
        }
      );
    }

    // ========================================================
    // ACCEPT
    // ========================================================

    if (action === "accept") {
      const acceptedConsultation =
        (await Consultation.findOneAndUpdate(
          {
            _id: id,
            panditId: providerId,
            status: "requested",
          },
          {
            $set: {
              status: "accepted",
              startTime: null,
              endTime: null,
            },
          },
          {
            new: true,
          }
        )
          .lean()
          .exec()) as ConsultationData | null;

      // ======================================================
      // RACE CONDITION
      // ======================================================

      if (!acceptedConsultation) {
        return NextResponse.json(
          {
            success: false,
            message:
              "This consultation has already been processed.",
          },
          {
            status: 409,
          }
        );
      }

      console.log(
        "===================================="
      );

      console.log(
        "✅ CONSULTATION ACCEPTED"
      );

      console.log(
        "Consultation ID:",
        String(
          acceptedConsultation._id
        )
      );

      console.log(
        "Status:",
        acceptedConsultation.status
      );

      console.log(
        "===================================="
      );

      return NextResponse.json(
        {
          success: true,

          message:
            "Consultation accepted successfully",

          consultation: formatConsultation(
            acceptedConsultation,
            provider
          ),
        },
        {
          status: 200,
        }
      );
    }

    // ========================================================
    // REJECT
    // ========================================================

    if (action === "reject") {
      const rejectedConsultation =
        (await Consultation.findOneAndUpdate(
          {
            _id: id,
            panditId: providerId,
            status: "requested",
          },
          {
            $set: {
              status: "rejected",
              startTime: null,
              endTime: new Date(),
            },
          },
          {
            new: true,
          }
        )
          .lean()
          .exec()) as ConsultationData | null;

      // ======================================================
      // RACE CONDITION
      // ======================================================

      if (!rejectedConsultation) {
        return NextResponse.json(
          {
            success: false,
            message:
              "This consultation has already been processed.",
          },
          {
            status: 409,
          }
        );
      }

      console.log(
        "===================================="
      );

      console.log(
        "❌ CONSULTATION REJECTED"
      );

      console.log(
        "Consultation ID:",
        String(
          rejectedConsultation._id
        )
      );

      console.log(
        "User ID:",
        String(
          rejectedConsultation.userId
        )
      );

      // ======================================================
      // REFUND AMOUNT
      // ======================================================

      const refundAmount = Number(
        rejectedConsultation.amount ||
          0
      );

      // ======================================================
      // NO REFUND
      // ======================================================

      if (
        !Number.isFinite(
          refundAmount
        ) ||
        refundAmount <= 0
      ) {
        console.log(
          "⚠️ No refund amount available"
        );

        return NextResponse.json(
          {
            success: true,

            message:
              "Consultation rejected successfully. No wallet refund was required.",

            refunded: false,

            refundAmount: 0,

            consultation:
              formatConsultation(
                rejectedConsultation,
                provider
              ),
          },
          {
            status: 200,
          }
        );
      }

      // ======================================================
      // FIND USER
      // ======================================================

      const user =
        (await User.findById(
          rejectedConsultation.userId
        )
          .select(
            "_id walletBalance"
          )
          .lean()
          .exec()) as UserWalletData | null;

      if (!user) {
        console.error(
          "❌ User not found for refund:",
          rejectedConsultation.userId
        );

        return NextResponse.json(
          {
            success: false,

            code: "REFUND_FAILED",

            message:
              "Consultation rejected, but wallet refund could not be completed. Please contact support.",

            refunded: false,

            refundAmount,

            consultationId:
              String(
                rejectedConsultation._id
              ),
          },
          {
            status: 500,
          }
        );
      }

      // ======================================================
      // WALLET REFUND
      // ======================================================

      const refundedUser =
        (await User.findOneAndUpdate(
          {
            _id:
              rejectedConsultation.userId,
          },
          {
            $inc: {
              walletBalance:
                refundAmount,
            },
          },
          {
            new: true,
          }
        )
          .select(
            "_id walletBalance"
          )
          .lean()
          .exec()) as UserWalletData | null;

      // ======================================================
      // REFUND FAILED
      // ======================================================

      if (!refundedUser) {
        console.error(
          "❌ Wallet refund failed:",
          rejectedConsultation.userId
        );

        return NextResponse.json(
          {
            success: false,

            code: "REFUND_FAILED",

            message:
              "Consultation rejected, but wallet refund failed. Please contact support.",

            refunded: false,

            refundAmount,

            consultationId:
              String(
                rejectedConsultation._id
              ),
          },
          {
            status: 500,
          }
        );
      }

      // ======================================================
      // WALLET REFUNDED
      // ======================================================

      const newWalletBalance =
        Number(
          refundedUser.walletBalance ||
            0
        );

      console.log(
        "===================================="
      );

      console.log(
        "💰 WALLET REFUNDED"
      );

      console.log(
        "User ID:",
        String(
          refundedUser._id
        )
      );

      console.log(
        "Refund Amount:",
        refundAmount
      );

      console.log(
        "New Wallet Balance:",
        newWalletBalance
      );

      console.log(
        "===================================="
      );

      return NextResponse.json(
        {
          success: true,

          message:
            "Consultation rejected and wallet refunded successfully.",

          refunded: true,

          refundAmount,

          walletBalance:
            newWalletBalance,

          consultation:
            formatConsultation(
              rejectedConsultation,
              provider
            ),
        },
        {
          status: 200,
        }
      );
    }

    // ========================================================
    // INVALID ACTION
    // ========================================================

    return NextResponse.json(
      {
        success: false,
        message:
          "Invalid action",
      },
      {
        status: 400,
      }
    );
  } catch (error: unknown) {
    console.error(
      "❌ Consultation Action Error:",
      error
    );

    const message =
      error instanceof Error
        ? error.message
        : "Failed to update consultation";

    return NextResponse.json(
      {
        success: false,
        message,
      },
      {
        status: 500,
      }
    );
  }
}

// ============================================================
// FORMAT CONSULTATION
// ============================================================

function formatConsultation(
  consultation: ConsultationData,
  provider: ProviderData
) {
  return {
    id: String(
      consultation._id
    ),

    _id: String(
      consultation._id
    ),

    userId: String(
      consultation.userId || ""
    ),

    panditId: String(
      consultation.panditId || ""
    ),

    astrologerId: String(
      consultation.panditId || ""
    ),

    panditName:
      consultation.panditName ||
      provider.displayName ||
      provider.fullName ||
      "",

    astrologerName:
      consultation.panditName ||
      provider.displayName ||
      provider.fullName ||
      "",

    panditPhone:
      consultation.panditPhone ||
      provider.mobile ||
      "",

    amount: Number(
      consultation.amount || 0
    ),

    price: Number(
      consultation.amount || 0
    ),

    duration: Number(
      consultation.duration || 0
    ),

    paymentId:
      consultation.paymentId ||
      "",

    consultationType:
      consultation.consultationType ||
      consultation.type ||
      "chat",

    type:
      consultation.type ||
      consultation.consultationType ||
      "chat",

    status:
      consultation.status ||
      "requested",

    startTime:
      consultation.startTime ||
      null,

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
}