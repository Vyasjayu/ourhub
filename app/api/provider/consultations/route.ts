import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Provider from "@/models/Provider";
import Consultation from "@/models/Consultation";
import User from "@/models/User";

/*
|--------------------------------------------------------------------------
| GET
|--------------------------------------------------------------------------
| Provider ke pending / accepted / active consultations fetch karta hai.
|
| URL:
| /api/provider/consultations?mobile=XXXXXXXXXX
|--------------------------------------------------------------------------
*/

export async function GET(
  req: NextRequest
) {
  try {
    await connectDB();

    const mobile =
      req.nextUrl.searchParams.get(
        "mobile"
      );

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

    console.log(
      "===================================="
    );

    console.log(
      "📥 PROVIDER CONSULTATIONS"
    );

    console.log(
      "Mobile:",
      mobile
    );

    console.log(
      "===================================="
    );

    // =====================================================
    // FIND PROVIDER
    // =====================================================

    const provider: any =
      await Provider.findOne({
        mobile: mobile.trim(),
      })
        .select(
          "_id fullName displayName mobile"
        )
        .lean();

    if (!provider) {
      console.log(
        "❌ Provider not found"
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

    // =====================================================
    // FIND CONSULTATIONS
    // =====================================================

    const consultations =
      await Consultation.find({
        panditId: provider._id,

        status: {
          $in: [
            "requested",
            "accepted",
            "active",
          ],
        },
      })
        .sort({
          createdAt: -1,
        })
        .lean();

    console.log(
      "📋 Consultations:",
      consultations.length
    );

    // =====================================================
    // USER DETAILS
    // =====================================================

    const formattedConsultations =
      await Promise.all(
        consultations.map(
          async (
            consultation: any
          ) => {
            let userData: any =
              null;

            try {
              if (
                consultation.userId
              ) {
                userData =
                  await User.findById(
                    consultation.userId
                  )
                    .select(
                      "fullName mobile email profilePhoto"
                    )
                    .lean();
              }
            } catch (error) {
              console.error(
                "❌ User fetch error:",
                error
              );
            }

            const user =
              userData
                ? {
                    id: String(
                      userData._id
                    ),

                    fullName:
                      userData.fullName ||
                      "Customer",

                    mobile:
                      userData.mobile ||
                      "",

                    email:
                      userData.email ||
                      "",

                    profilePhoto:
                      userData.profilePhoto ||
                      "",
                  }
                : {
                    id: String(
                      consultation.userId ||
                        ""
                    ),

                    fullName:
                      "Customer",

                    mobile: "",

                    email: "",

                    profilePhoto: "",
                  };

            return {
              id: String(
                consultation._id
              ),

              _id: String(
                consultation._id
              ),

              userId: String(
                consultation.userId ||
                  ""
              ),

              panditId: String(
                consultation.panditId ||
                  ""
              ),

              amount: Number(
                consultation.amount ||
                  0
              ),

              duration: Number(
                consultation.duration ||
                  0
              ),

              paymentId:
                consultation.paymentId ||
                "",

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

              user,
            };
          }
        )
      );

    console.log(
      "✅ Formatted consultations:",
      formattedConsultations.length
    );

    return NextResponse.json(
      {
        success: true,

        provider: {
          id: providerId,

          fullName:
            provider.fullName ||
            "",

          displayName:
            provider.displayName ||
            "",

          mobile:
            provider.mobile ||
            "",
        },

        count:
          formattedConsultations.length,

        consultations:
          formattedConsultations,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    console.error(
      "❌ Provider Consultation GET Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,

        message:
          error?.message ||
          "Failed to fetch consultations",
      },
      {
        status: 500,
      }
    );
  }
}

/*
|--------------------------------------------------------------------------
| POST
|--------------------------------------------------------------------------
| User astrologer ko chat/call consultation request bhejta hai.
|
| Body:
| {
|   userId,
|   providerId,
|   astrologerId,
|   amount
| }
|--------------------------------------------------------------------------
*/

export async function POST(
  req: NextRequest
) {
  try {
    await connectDB();

    const body =
      await req.json();

    console.log(
      "===================================="
    );

    console.log(
      "📥 CREATE CONSULTATION REQUEST"
    );

    console.log(
      "Body:",
      body
    );

    console.log(
      "===================================="
    );

    const {
      userId,
      providerId,
      astrologerId,
    } = body;

    // =====================================================
    // PROVIDER ID
    // =====================================================

    const finalProviderId =
      providerId ||
      astrologerId;

    if (!finalProviderId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Astrologer ID is required",
        },
        {
          status: 400,
        }
      );
    }

    // =====================================================
    // USER ID
    // =====================================================

    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "User ID is required. Please login first.",
        },
        {
          status: 401,
        }
      );
    }

    // =====================================================
    // FIND USER
    // =====================================================

    const user: any =
      await User.findById(
        userId
      )
        .select(
          "_id fullName mobile email profilePhoto walletBalance"
        )
        .lean();

    if (!user) {
      console.log(
        "❌ User not found:",
        userId
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "User not found",
        },
        {
          status: 404,
        }
      );
    }

    // =====================================================
    // FIND ASTROLOGER
    // =====================================================

    const provider: any =
      await Provider.findById(
        finalProviderId
      )
        .select(
          "_id fullName displayName mobile category isVerified isActive isProfilePublic price"
        )
        .lean();

    if (!provider) {
      console.log(
        "❌ Astrologer not found:",
        finalProviderId
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Astrologer not found",
        },
        {
          status: 404,
        }
      );
    }

    console.log(
      "✅ Astrologer:",
      provider.displayName ||
        provider.fullName
    );

    // =====================================================
    // CATEGORY
    // =====================================================

    if (
      provider.category !==
      "astrology"
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Selected provider is not an astrologer",
        },
        {
          status: 400,
        }
      );
    }

    // =====================================================
    // VERIFIED
    // =====================================================

    if (!provider.isVerified) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This astrologer is not verified",
        },
        {
          status: 403,
        }
      );
    }

    // =====================================================
    // ACTIVE
    // =====================================================

    if (!provider.isActive) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This astrologer is currently unavailable",
        },
        {
          status: 403,
        }
      );
    }

    // =====================================================
    // PROFILE PUBLIC
    // =====================================================

    if (
      provider.isProfilePublic ===
      false
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This astrologer profile is not public",
        },
        {
          status: 403,
        }
      );
    }

    // =====================================================
    // PRICE
    // =====================================================

    // IMPORTANT:
    // Browser se amount nahi le rahe.
    // Database me astrologer ki actual price use hogi.

    const consultationAmount =
      Number(
        provider.price || 0
      );

    if (
      !Number.isFinite(
        consultationAmount
      ) ||
      consultationAmount <= 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Astrologer consultation price is not configured.",
        },
        {
          status: 400,
        }
      );
    }

    // =====================================================
    // EXISTING CONSULTATION
    // =====================================================

    const existingConsultation =
      await Consultation.findOne({
        userId: user._id,

        panditId:
          provider._id,

        status: {
          $in: [
            "requested",
            "accepted",
            "active",
          ],
        },
      })
        .sort({
          createdAt: -1,
        })
        .lean();

    if (existingConsultation) {
      console.log(
        "⚠️ Existing consultation found:",
        existingConsultation._id
      );

      return NextResponse.json(
        {
          success: true,

          message:
            "An active consultation already exists",

          consultation: {
            id: String(
              existingConsultation._id
            ),

            _id: String(
              existingConsultation._id
            ),

            userId: String(
              existingConsultation.userId
            ),

            panditId: String(
              existingConsultation.panditId
            ),

            amount: Number(
              existingConsultation.amount ||
                0
            ),

            duration: Number(
              existingConsultation.duration ||
                0
            ),

            paymentId:
              existingConsultation.paymentId ||
              "",

            status:
              existingConsultation.status,

            startTime:
              existingConsultation.startTime ||
              null,

            endTime:
              existingConsultation.endTime ||
              null,

            createdAt:
              existingConsultation.createdAt ||
              null,

            updatedAt:
              existingConsultation.updatedAt ||
              null,
          },

          consultationId:
            String(
              existingConsultation._id
            ),
        },
        {
          status: 200,
        }
      );
    }

    // =====================================================
    // CREATE CONSULTATION
    // =====================================================

    const consultation =
      await Consultation.create({
        userId: user._id,

        panditId:
          provider._id,

        amount:
          consultationAmount,

        duration: 0,

        paymentId: "",

        status: "requested",

        startTime: null,

        endTime: null,
      });

    console.log(
      "===================================="
    );

    console.log(
      "✅ CONSULTATION CREATED"
    );

    console.log(
      "Consultation ID:",
      consultation._id
    );

    console.log(
      "User ID:",
      consultation.userId
    );

    console.log(
      "Provider ID:",
      consultation.panditId
    );

    console.log(
      "Amount:",
      consultation.amount
    );

    console.log(
      "Status:",
      consultation.status
    );

    console.log(
      "===================================="
    );

    // =====================================================
    // RESPONSE
    // =====================================================

    return NextResponse.json(
      {
        success: true,

        message:
          "Consultation request created successfully",

        consultation: {
          id: String(
            consultation._id
          ),

          _id: String(
            consultation._id
          ),

          userId: String(
            consultation.userId
          ),

          panditId: String(
            consultation.panditId
          ),

          amount: Number(
            consultation.amount ||
              0
          ),

          duration: Number(
            consultation.duration ||
              0
          ),

          paymentId:
            consultation.paymentId ||
            "",

          status:
            consultation.status,

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
        },

        // VERY IMPORTANT
        // Frontend direct ID read kar sakta hai.
        consultationId:
          String(
            consultation._id
          ),
      },
      {
        status: 201,
      }
    );
  } catch (error: any) {
    console.error(
      "❌ CREATE CONSULTATION ERROR:"
    );

    console.error(error);

    return NextResponse.json(
      {
        success: false,

        message:
          error?.message ||
          "Failed to create consultation",
      },
      {
        status: 500,
      }
    );
  }
}