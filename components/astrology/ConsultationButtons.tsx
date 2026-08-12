"use client";

import { useEffect, useState } from "react";
import {
  MessageCircle,
  Phone,
  Video,
  Wallet,
  X,
  Zap,
  Loader2,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  walletBalance: number;
  pricePerMinute: number;
  panditId: string;
  panditPhone?: string;
  panditName?: string;
}

type ConsultationType = "chat" | "voice" | "video";

interface Plan {
  amount: number;
  minutes: number;
  popular?: boolean;
}

export default function ConsultationButtons({
  walletBalance,
  pricePerMinute,
  panditId,
  panditPhone = "",
  panditName = "Astrologer",
}: Props) {
  const router = useRouter();

  const [showRecharge, setShowRecharge] = useState(false);

  const [loadingType, setLoadingType] =
    useState<ConsultationType | null>(null);

  const [userId, setUserId] = useState<string | null>(null);

  const [selectedPlan, setSelectedPlan] = useState<Plan>({
    amount: 1,
    minutes: 1,
  });

  /*
   * Get logged-in user
   */
  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch("/api/user/me", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        const data = await res.json();

        if (data.success && data.user?.id) {
          setUserId(String(data.user.id));

          // Keep localStorage updated also
          localStorage.setItem(
            "userId",
            String(data.user.id)
          );
        } else {
          const storedUserId =
            localStorage.getItem("userId");

          if (storedUserId) {
            setUserId(storedUserId);
          }
        }
      } catch (error) {
        console.error(
          "Get User Error:",
          error
        );

        const storedUserId =
          localStorage.getItem("userId");

        if (storedUserId) {
          setUserId(storedUserId);
        }
      }
    }

    getUser();
  }, []);

  /*
   * Recharge plans
   */
  const plans: Plan[] = [
    {
      amount: 1,
      minutes: 1,
    },
    {
      amount: 250,
      minutes: 10,
      popular: true,
    },
    {
      amount: 500,
      minutes: 20,
    },
    {
      amount: 1000,
      minutes: 40,
    },
  ];

  /*
   * Start consultation
   */
  const handleConsultation = async (
    type: ConsultationType
  ) => {
    if (loadingType) {
      return;
    }

    /*
     * Validate astrologer
     */
    if (!panditId) {
      alert("Astrologer information is missing.");
      return;
    }

    /*
     * Price validation
     */
    const price = Number(pricePerMinute || 0);

    if (price <= 0) {
      alert(
        "Consultation price is not available."
      );
      return;
    }

    /*
     * IMPORTANT:
     *
     * Earlier code was:
     * walletBalance < price * 5
     *
     * Now only 1 minute minimum balance
     * is required.
     *
     * Example:
     * Wallet = ₹1
     * Price = ₹1/min
     *
     * ₹1 >= ₹1
     * Consultation can start.
     */
    if (Number(walletBalance) < price) {
      setSelectedPlan({
        amount: Math.max(price, 1),
        minutes: 1,
      });

      setShowRecharge(true);

      return;
    }

    /*
     * Get User ID
     */
    let currentUserId = userId;

    if (!currentUserId) {
      currentUserId =
        localStorage.getItem("userId");
    }

    /*
     * If still no user
     */
    if (!currentUserId) {
      alert(
        "Please login before starting consultation."
      );

      router.push("/auth/login");

      return;
    }

    try {
      setLoadingType(type);

      console.log(
        "================================="
      );

      console.log(
        "START CONSULTATION"
      );

      console.log(
        "Type:",
        type
      );

      console.log(
        "User ID:",
        currentUserId
      );

      console.log(
        "Pandit ID:",
        panditId
      );

      console.log(
        "Pandit Name:",
        panditName
      );

      console.log(
        "Wallet:",
        walletBalance
      );

      console.log(
        "Price:",
        price
      );

      console.log(
        "================================="
      );

      /*
       * Create consultation request
       *
       * Since payment has already been
       * added to wallet, this consultation
       * uses wallet balance.
       *
       * paymentId is generated as a wallet
       * transaction reference.
       */
      const walletPaymentId =
        `wallet_${Date.now()}`;

const res = await fetch(
  "/api/consultation/create",
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    credentials: "include",

    body: JSON.stringify({
      userId: currentUserId,

      panditId,

      amount: price,

      duration: 1,

      paymentId: walletPaymentId,

      consultationType: type,
    }),
  }
);

const data = await res.json();

console.log(
  "===================================="
);

console.log(
  "📥 CONSULTATION API RESPONSE:"
);

console.log(data);

console.log(
  "===================================="
);

// ==========================================
// API ERROR
// ==========================================

if (!res.ok || !data?.success) {
  console.error(
    "❌ Consultation API failed:",
    data
  );

  alert(
    data?.message ||
      "Unable to start consultation."
  );

  setLoadingType(null);

  return;
}

// ==========================================
// GET CONSULTATION ID
// ==========================================

// API multiple formats support karega
const consultationId =
  data?.consultationId ||
  data?.consultation?.id ||
  data?.consultation?._id ||
  data?.id;

console.log(
  "🆔 CONSULTATION ID:",
  consultationId
);

// ==========================================
// CHECK CONSULTATION ID
// ==========================================

if (!consultationId) {
  console.error(
    "❌ Consultation created but ID is missing."
  );

  console.error(
    "FULL CONSULTATION RESPONSE:",
    data
  );

  alert(
    "Consultation created but ID is missing."
  );

  setLoadingType(null);

  return;
}

// ==========================================
// FINAL CONSULTATION ID
// ==========================================

const finalConsultationId =
  String(consultationId);

console.log(
  "===================================="
);

console.log(
  "✅ CONSULTATION CREATED"
);

console.log(
  "🆔 FINAL CONSULTATION ID:",
  finalConsultationId
);

console.log(
  "📌 STATUS:",
  data?.consultation?.status
);

console.log(
  "🔮 PANDIT ID:",
  data?.consultation?.panditId
);

console.log(
  "===================================="
);

// ==========================================
// CONTINUE YOUR FLOW
// ==========================================

// Example:
//
// router.push(
//   `/consultation/${finalConsultationId}`
// );

      /*
       * Save current consultation locally
       */
      localStorage.setItem(
        "activeConsultationId",
        String(consultationId)
      );

      localStorage.setItem(
        "activePanditId",
        String(panditId)
      );

      localStorage.setItem(
        "activeConsultationType",
        type
      );

      /*
       * CHAT
       */
      if (type === "chat") {
        router.push(
          `/chat?consultationId=${encodeURIComponent(
            String(consultationId)
          )}&panditId=${encodeURIComponent(
            String(panditId)
          )}`
        );

        return;
      }

      /*
       * VOICE
       */
      if (type === "voice") {
        router.push(
          `/call?type=voice&consultationId=${encodeURIComponent(
            String(consultationId)
          )}&panditId=${encodeURIComponent(
            String(panditId)
          )}`
        );

        return;
      }

      /*
       * VIDEO
       */
      if (type === "video") {
        router.push(
          `/call?type=video&consultationId=${encodeURIComponent(
            String(consultationId)
          )}&panditId=${encodeURIComponent(
            String(panditId)
          )}`
        );

        return;
      }
    } catch (error) {
      console.error(
        "Start Consultation Error:",
        error
      );

      alert(
        "Something went wrong while starting consultation."
      );

      setLoadingType(null);
    }
  };

  /*
   * Payment page
   */
  const handlePayment = () => {
    if (!panditId) {
      alert("Astrologer information is missing.");
      return;
    }

    const params = new URLSearchParams();

    params.set(
      "amount",
      String(selectedPlan.amount)
    );

    params.set(
      "minutes",
      String(selectedPlan.minutes)
    );

    params.set(
      "panditId",
      String(panditId)
    );

    if (panditPhone) {
      params.set(
        "phone",
        String(panditPhone)
      );
    }

    if (panditName) {
      params.set(
        "name",
        String(panditName)
      );
    }

    /*
     * Close sheet before navigation
     */
    setShowRecharge(false);

    router.push(
      `/payment?${params.toString()}`
    );
  };

  /*
   * Close recharge
   */
  const closeRecharge = () => {
    if (loadingType) {
      return;
    }

    setShowRecharge(false);
  };

  /*
   * Display values
   */
  const balance =
    Number(walletBalance || 0);

  const price =
    Number(pricePerMinute || 0);

  return (
    <>
      {/* ============================= */}
      {/* MAIN CONSULTATION SECTION */}
      {/* ============================= */}

      <section className="mt-5 px-4">
        {/* Wallet Card */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-3
            rounded-2xl
            border
            border-yellow-500/20
            bg-[#111C30]
            p-4
          "
        >
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-yellow-400/10
              "
            >
              <Wallet
                size={22}
                className="text-yellow-400"
              />
            </div>

            <div className="min-w-0">
              <p className="text-xs text-gray-400">
                Wallet Balance
              </p>

              <h2 className="text-xl font-bold text-white">
                ₹{balance}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              setShowRecharge(true)
            }
            className="
              shrink-0
              rounded-xl
              bg-yellow-400
              px-4
              py-2.5
              font-semibold
              text-black
              transition
              active:scale-95
            "
          >
            Recharge
          </button>
        </div>

        {/* Price Information */}

        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-emerald-500/10
            px-3
            py-3
            text-center
            text-sm
            font-semibold
            text-emerald-400
          "
        >
          <Zap size={17} />

          <span>
            ₹{price}/minute Consultation
          </span>
        </div>

        {/* Consultation Buttons */}

        <div
          className="
            mt-4
            grid
            grid-cols-3
            gap-3
          "
        >
          {/* CHAT */}

          <button
            type="button"
            disabled={!!loadingType}
            onClick={() =>
              handleConsultation("chat")
            }
            className="
              flex
              min-h-[82px]
              flex-col
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-green-600
              px-2
              py-4
              text-white
              shadow-lg
              transition
              active:scale-95
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loadingType === "chat" ? (
              <Loader2
                size={25}
                className="animate-spin"
              />
            ) : (
              <MessageCircle size={25} />
            )}

            <span className="text-sm font-semibold">
              {loadingType === "chat"
                ? "Starting..."
                : "Chat"}
            </span>
          </button>

          {/* VOICE */}

          <button
            type="button"
            disabled={!!loadingType}
            onClick={() =>
              handleConsultation("voice")
            }
            className="
              flex
              min-h-[82px]
              flex-col
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-blue-600
              px-2
              py-4
              text-white
              shadow-lg
              transition
              active:scale-95
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loadingType === "voice" ? (
              <Loader2
                size={25}
                className="animate-spin"
              />
            ) : (
              <Phone size={25} />
            )}

            <span className="text-sm font-semibold">
              {loadingType === "voice"
                ? "Starting..."
                : "Voice"}
            </span>
          </button>

          {/* VIDEO */}

          <button
            type="button"
            disabled={!!loadingType}
            onClick={() =>
              handleConsultation("video")
            }
            className="
              flex
              min-h-[82px]
              flex-col
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-purple-600
              px-2
              py-4
              text-white
              shadow-lg
              transition
              active:scale-95
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loadingType === "video" ? (
              <Loader2
                size={25}
                className="animate-spin"
              />
            ) : (
              <Video size={25} />
            )}

            <span className="text-sm font-semibold">
              {loadingType === "video"
                ? "Starting..."
                : "Video"}
            </span>
          </button>
        </div>

        {/* Insufficient Balance */}

        {balance < price && (
          <div
            className="
              mt-4
              rounded-xl
              border
              border-red-500/30
              bg-red-500/10
              px-4
              py-3
              text-center
              text-sm
              text-red-300
            "
          >
            Recharge wallet to start
            consultation.
          </div>
        )}

        {/* Sufficient Balance */}

        {balance >= price && price > 0 && (
          <div
            className="
              mt-4
              rounded-xl
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-4
              py-3
              text-center
              text-sm
              text-emerald-300
            "
          >
            You have enough balance for{" "}
            <strong>1 minute</strong> consultation.
          </div>
        )}
      </section>

      {/* ================================= */}
      {/* RECHARGE BOTTOM SHEET */}
      {/* ================================= */}

      {showRecharge && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-end
            bg-black/75
            backdrop-blur-sm
          "
          onClick={closeRecharge}
        >
          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            className="
              max-h-[88vh]
              w-full
              overflow-y-auto
              rounded-t-[28px]
              border-t
              border-white/10
              bg-[#091322]
              p-5
              pb-8
              shadow-2xl
              sm:mx-auto
              sm:max-w-md
            "
          >
            {/* Sheet Header */}

            <div
              className="
                flex
                items-center
                justify-between
              "
            >
              <div>
                <h2
                  className="
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  Recharge Wallet
                </h2>

                <p
                  className="
                    mt-1
                    text-xs
                    text-gray-400
                  "
                >
                  Add balance and start your
                  consultation
                </p>
              </div>

              <button
                type="button"
                onClick={closeRecharge}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                "
              >
                <X size={21} />
              </button>
            </div>

            {/* Plans */}

            <div className="mt-5 space-y-3">
              {plans.map((plan) => {
                const selected =
                  selectedPlan.amount ===
                    plan.amount &&
                  selectedPlan.minutes ===
                    plan.minutes;

                return (
                  <button
                    type="button"
                    key={`${plan.amount}-${plan.minutes}`}
                    onClick={() =>
                      setSelectedPlan(plan)
                    }
                    className={`
                      relative
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      p-4
                      text-left
                      transition
                      active:scale-[0.99]

                      ${
                        selected
                          ? "border-yellow-400 bg-yellow-400/10"
                          : "border-white/10 bg-[#111C30]"
                      }
                    `}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h3
                          className="
                            text-xl
                            font-bold
                            text-white
                          "
                        >
                          ₹{plan.amount}
                        </h3>

                        {plan.popular && (
                          <span
                            className="
                              rounded-full
                              bg-yellow-400
                              px-2
                              py-0.5
                              text-[10px]
                              font-bold
                              text-black
                            "
                          >
                            POPULAR
                          </span>
                        )}
                      </div>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-gray-400
                        "
                      >
                        {plan.minutes}{" "}
                        {plan.minutes === 1
                          ? "Minute"
                          : "Minutes"}{" "}
                        Consultation
                      </p>
                    </div>

                    <Zap
                      size={22}
                      className="text-yellow-400"
                    />
                  </button>
                );
              })}
            </div>

            {/* Selected Plan */}

            <div
              className="
                mt-4
                rounded-2xl
                border
                border-yellow-400/20
                bg-yellow-400/5
                p-4
              "
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  Selected Plan
                </span>

                <span className="font-bold text-yellow-400">
                  ₹{selectedPlan.amount}
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  Consultation
                </span>

                <span className="font-semibold text-white">
                  {selectedPlan.minutes}{" "}
                  {selectedPlan.minutes === 1
                    ? "Minute"
                    : "Minutes"}
                </span>
              </div>
            </div>

            {/* Payment Button */}

            <button
              type="button"
              onClick={handlePayment}
              className="
                mt-5
                flex
                w-full
                items-center
                justify-center
                rounded-2xl
                bg-yellow-400
                py-4
                text-lg
                font-bold
                text-black
                shadow-lg
                transition
                active:scale-[0.98]
              "
            >
              Continue to Payment
            </button>

            <p
              className="
                mt-3
                text-center
                text-xs
                leading-5
                text-gray-500
              "
            >
              Wallet balance will be used
              automatically during your
              consultation.
            </p>
          </div>
        </div>
      )}
    </>
  );
}