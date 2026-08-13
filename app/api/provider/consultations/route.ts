import { NextRequest, NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";

import Provider from "@/models/Provider";
import Consultation from "@/models/Consultation";
import User from "@/models/User";

import crypto from "crypto";

// ============================================================
// GET
// ============================================================
// Provider ke requested + accepted + active consultations
// fetch karta hai.
//
// URL:
// /api/provider/consultations?mobile=XXXXXXXXXX
// ============================================================

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    // ========================================================
    // PROVIDER MOBILE
    // ========================================================

    const mobile =
      req.nextUrl.searchParams.get("mobile");

    if (!mobile) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Provider mobile is required",
        },
        { status: 400 }
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

    // ========================================================
    // FIND PROVIDER
    // ========================================================

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
        { status: 404 }
      );
    }

    const providerId =
      String(provider._id);

    console.log(
      "✅ Provider ID:",
      providerId
    );

    // ========================================================
    // FIND CONSULTATIONS
    // ========================================================

    const consultations =
      await Consultation.find({
        panditId: providerId,

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

    // ========================================================
    // USER DETAILS
    // ========================================================

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

            // ==================================================
            // USER OBJECT
            // ==================================================

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

            // ==================================================
            // RESPONSE
            // ==================================================

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

              panditName:
                consultation.panditName ||
                provider.displayName ||
                provider.fullName ||
                "",

              panditPhone:
                consultation.panditPhone ||
                provider.mobile ||
                "",

              consultationType:
                consultation.consultationType ||
                "chat",

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

    // ========================================================
    // RESPONSE
    // ========================================================

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
      { status: 200 }
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
      { status: 500 }
    );
  }
}

// ============================================================
// POST
// ============================================================
// WALLET BASED CONSULTATION
//
// Frontend body:
//
// {
//   userId,
//   providerId,
//   astrologerId,
//   type,
//   consultationType,
//   amount,
//   providerName,
//   providerMobile,
//   pricePerMinute
// }
//
// IMPORTANT:
//
// Frontend amount / pricePerMinute ko trust nahi karenge.
//
// Server Provider.price ko actual price maanega.
//
// Duration:
// - Agar frontend duration bhejta hai -> use hoga
// - Agar duration nahi bheja -> 1 minute default
//
// Example:
//
// Provider price = ₹1/min
// Duration = 1
// Total = ₹1
//
// ============================================================

export async function POST(
  req: NextRequest
) {
  try {
    await connectDB();

    // ========================================================
    // BODY
    // ========================================================

    const body =
      await req.json();

    console.log(
      "===================================="
    );

    console.log(
      "📥 CREATE WALLET CONSULTATION"
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

      // Optional
      duration,

      // Optional frontend fields
      consultationType =
        body?.type || "chat",

      amount: frontendAmount,

      providerName,
      providerMobile,
      pricePerMinute,
    } = body;

    // ========================================================
    // PROVIDER ID
    // ========================================================

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
        { status: 400 }
      );
    }

    // ========================================================
    // USER ID
    // ========================================================

    if (!userId) {
      return NextResponse.json(
        {
          success: false,

          message:
            "User ID is required. Please login first.",
        },
        { status: 401 }
      );
    }

    // ========================================================
    // CONSULTATION TYPE
    // ========================================================

    const finalConsultationType =
      String(
        consultationType ||
          "chat"
      ).toLowerCase();

    if (
      ![
        "chat",
        "voice",
        "video",
      ].includes(
        finalConsultationType
      )
    ) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Invalid consultation type.",
        },
        { status: 400 }
      );
    }

    // ========================================================
    // DURATION
    // ========================================================
    //
    // IMPORTANT FIX
    //
    // Tumhare current frontend request me duration nahi aa raha.
    //
    // Isliye:
    //
    // duration available -> use it
    // duration missing   -> 1 minute
    //
    // ========================================================

    let consultationDuration =
      Number(duration);

    if (
      !Number.isFinite(
        consultationDuration
      ) ||
      consultationDuration <= 0
    ) {
      consultationDuration = 1;
    }

    // Integer minute
    consultationDuration =
      Math.max(
        1,
        Math.floor(
          consultationDuration
        )
      );

    console.log(
      "⏱ Consultation Duration:",
      consultationDuration
    );

    // ========================================================
    // FIND USER
    // ========================================================

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
        { status: 404 }
      );
    }

    // ========================================================
    // FIND ASTROLOGER
    // ========================================================

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
        { status: 404 }
      );
    }

    console.log(
      "✅ Astrologer:",
      provider.displayName ||
        provider.fullName
    );

    // ========================================================
    // CATEGORY
    // ========================================================

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
        { status: 400 }
      );
    }

    // ========================================================
    // VERIFIED
    // ========================================================

    if (
      !provider.isVerified
    ) {
      return NextResponse.json(
        {
          success: false,

          message:
            "This astrologer is not verified",
        },
        { status: 403 }
      );
    }

    // ========================================================
    // ACTIVE
    // ========================================================

    if (
      !provider.isActive
    ) {
      return NextResponse.json(
        {
          success: false,

          message:
            "This astrologer is currently unavailable",
        },
        { status: 403 }
      );
    }

    // ========================================================
    // PROFILE PUBLIC
    // ========================================================

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
        { status: 403 }
      );
    }

    // ========================================================
    // PRICE
    // ========================================================
    //
    // IMPORTANT:
    //
    // Provider.price database se aa raha hai.
    //
    // Frontend:
    // amount
    // pricePerMinute
    //
    // ko trust nahi karenge.
    //
    // ========================================================

    const pricePerMinuteServer =
      Number(
        provider.price || 0
      );

    if (
      !Number.isFinite(
        pricePerMinuteServer
      ) ||
      pricePerMinuteServer <= 0
    ) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Astrologer consultation price is not configured.",
        },
        { status: 400 }
      );
    }

    // ========================================================
    // FINAL AMOUNT
    // ========================================================
    //
    // Example:
    //
    // ₹1/min × 1 minute = ₹1
    //
    // ₹10/min × 5 minutes = ₹50
    //
    // ========================================================

    const consultationAmount =
      pricePerMinuteServer *
      consultationDuration;

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
            "Invalid consultation amount.",
        },
        { status: 400 }
      );
    }

    console.log(
      "💰 Server Price/Minute:",
      pricePerMinuteServer
    );

    console.log(
      "⏱ Duration:",
      consultationDuration
    );

    console.log(
      "💰 Final Consultation Amount:",
      consultationAmount
    );

    console.log(
      "⚠️ Frontend amount:",
      frontendAmount
    );

    console.log(
      "⚠️ Frontend pricePerMinute:",
      pricePerMinute
    );

    // ========================================================
    // CHECK EXISTING CONSULTATION
    // ========================================================
    //
    // Same user + same astrologer
    // ke saath active request duplicate nahi banegi.
    //
    // ========================================================

    const existingConsultation =
      await Consultation.findOne({
        userId: String(
          user._id
        ),

        panditId: String(
          provider._id
        ),

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
        "⚠️ Existing consultation:",
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

            panditName:
              existingConsultation.panditName ||
              provider.displayName ||
              provider.fullName ||
              "",

            panditPhone:
              existingConsultation.panditPhone ||
              provider.mobile ||
              "",

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

            consultationType:
              existingConsultation.consultationType ||
              "chat",

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
        { status: 200 }
      );
    }

    // ========================================================
    // CURRENT WALLET BALANCE
    // ========================================================

    const currentWalletBalance =
      Number(
        user.walletBalance || 0
      );

    console.log(
      "💰 Current Wallet:",
      currentWalletBalance
    );

    console.log(
      "💰 Required Amount:",
      consultationAmount
    );

    // ========================================================
    // INSUFFICIENT WALLET
    // ========================================================

    if (
      !Number.isFinite(
        currentWalletBalance
      ) ||
      currentWalletBalance <
        consultationAmount
    ) {
      const shortfall =
        Math.max(
          consultationAmount -
            currentWalletBalance,
          0
        );

      console.log(
        "❌ Insufficient wallet"
      );

      console.log(
        "Shortfall:",
        shortfall
      );

      return NextResponse.json(
        {
          success: false,

          code:
            "INSUFFICIENT_WALLET_BALANCE",

          message:
            "Insufficient wallet balance. Please add money to your wallet.",

          walletBalance:
            currentWalletBalance,

          requiredAmount:
            consultationAmount,

          shortfall,
        },
        { status: 402 }
      );
    }

    // ========================================================
    // INTERNAL PAYMENT ID
    // ========================================================
    //
    // Razorpay paymentId nahi hai.
    //
    // Wallet transaction ke liye internal ID.
    //
    // ========================================================

    const paymentId =
      `wallet_${crypto.randomUUID()}`;

    console.log(
      "💳 Internal Wallet Payment ID:",
      paymentId
    );

    // ========================================================
    // ATOMIC WALLET DEDUCTION
    // ========================================================
    //
    // MongoDB ensure karega:
    //
    // walletBalance >= amount
    //
    // Isse wallet negative nahi hoga.
    //
    // ========================================================

   const updatedUser: any =
  await User.findOneAndUpdate(
    {
      _id: user._id,

      walletBalance: {
        $gte: consultationAmount,
      },
    },
    {
      $inc: {
        walletBalance:
          -consultationAmount,
      },
    },
    {
      new: true,
    }
  ).lean();

    // ========================================================
    // WALLET DEDUCTION FAILED
    // ========================================================

    if (!updatedUser) {
      console.log(
        "❌ Wallet deduction failed"
      );

      return NextResponse.json(
        {
          success: false,

          code:
            "INSUFFICIENT_WALLET_BALANCE",

          message:
            "Insufficient wallet balance. Please add money to your wallet.",
        },
        { status: 402 }
      );
    }

    console.log(
      "✅ Wallet amount deducted:",
      consultationAmount
    );

    console.log(
      "💰 Remaining Wallet:",
      updatedUser.walletBalance
    );

    // ========================================================
    // CREATE CONSULTATION
    // ========================================================

    let consultation: any;

    try {
      consultation =
        await Consultation.create({
          userId: String(
            user._id
          ),

          panditId: String(
            provider._id
          ),

          panditName:
            provider.displayName ||
            provider.fullName ||
            null,

          panditPhone:
            provider.mobile ||
            null,

          consultationType:
            finalConsultationType,

          amount:
            consultationAmount,

          duration:
            consultationDuration,

          paymentId,

          status:
            "requested",

          startTime:
            null,

          endTime:
            null,
        });
    } catch (createError: any) {
      console.error(
        "❌ Consultation creation failed:",
        createError
      );

      // ======================================================
      // REFUND WALLET
      // ======================================================

      await User.findByIdAndUpdate(
        user._id,
        {
          $inc: {
            walletBalance:
              consultationAmount,
          },
        }
      );

      console.log(
        "↩️ Wallet refunded:",
        consultationAmount
      );

      throw createError;
    }

    // ========================================================
    // SUCCESS LOG
    // ========================================================

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
      "Duration:",
      consultation.duration
    );

    console.log(
      "Payment ID:",
      consultation.paymentId
    );

    console.log(
      "Wallet Remaining:",
      updatedUser.walletBalance
    );

    console.log(
      "Type:",
      consultation.consultationType
    );

    console.log(
      "Status:",
      consultation.status
    );

    console.log(
      "===================================="
    );

    // ========================================================
    // RESPONSE
    // ========================================================

    return NextResponse.json(
      {
        success: true,

        message:
          "Consultation request created successfully",

        walletPayment:
          true,

        paymentId:
          consultation.paymentId,

        walletBalance:
          Number(
            updatedUser.walletBalance ||
              0
          ),

        pricePerMinute:
          pricePerMinuteServer,

        duration:
          consultationDuration,

        amount:
          consultationAmount,

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

          panditName:
            consultation.panditName ||
            "",

          panditPhone:
            consultation.panditPhone ||
            "",

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

          consultationType:
            consultation.consultationType ||
            "chat",

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

        consultationId:
          String(
            consultation._id
          ),
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error(
      "❌ CREATE CONSULTATION ERROR:"
    );

    console.error(error);

    // ========================================================
    // DUPLICATE PAYMENT ID
    // ========================================================

    if (
      error?.code === 11000
    ) {
      return NextResponse.json(
        {
          success: false,

          message:
            "This wallet payment has already been used for a consultation.",
        },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,

        message:
          error?.message ||
          "Failed to create consultation",
      },
      { status: 500 }
    );
  }
}