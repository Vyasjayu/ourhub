"use client";

import { useState } from "react";
import {
  MessageCircle,
  Phone,
  Video,
  Wallet,
  X,
  Zap,
} from "lucide-react";

import { useRouter } from "next/navigation";

interface Props {
  walletBalance: number;
  pricePerMinute: number;

  panditId: string;
  panditPhone: string;
  panditName: string;
}

export default function ConsultationButtons({
  walletBalance,
  pricePerMinute,

  panditId,
  panditPhone,
  panditName,
}: Props) {

  const router = useRouter();

  const [showRecharge, setShowRecharge] = useState(false);

  const [selectedPlan, setSelectedPlan] = useState({
    amount: 250,
    minutes: 10,
  });

  const minimumBalance = pricePerMinute * 5;

  const handleConsultation = (type: string) => {

    if (walletBalance < minimumBalance) {

      setShowRecharge(true);

      return;
    }

    alert(`${type} Consultation Started`);
  };

  const plans = [
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

  const handlePayment = () => {

    console.log("Selected Plan:", selectedPlan);

    console.log("Pandit Details:", {
      panditId,
      panditPhone,
      panditName,
    });

    router.push(

      `/payment` +

      `?amount=${selectedPlan.amount}` +

      `&minutes=${selectedPlan.minutes}` +

      `&panditId=${panditId}` +

      `&phone=${panditPhone}` +

      `&name=${encodeURIComponent(panditName)}`

    );

  };

  return (
    <>
      <section className="px-4 mt-5">

        {/* Wallet */}

        <div
          className="
          bg-[#111C30]
          rounded-2xl
          border
          border-yellow-500/20
          p-4
          flex
          items-center
          justify-between
          "
        >

          <div className="flex items-center gap-3">

            <Wallet className="text-yellow-400" />

            <div>

              <p className="text-xs text-gray-400">
                Wallet Balance
              </p>

              <h2 className="text-white text-2xl font-bold">
                ₹{walletBalance}
              </h2>

            </div>

          </div>

          <button
            onClick={() => setShowRecharge(true)}
            className="
            bg-yellow-400
            text-black
            px-4
            py-2
            rounded-xl
            font-semibold
            "
          >
            Recharge
          </button>

        </div>

        {/* Consultation Buttons */}

        <div className="grid grid-cols-3 gap-3 mt-5">

          <button
            onClick={() => handleConsultation("Chat")}
            className="
            rounded-2xl
            bg-green-600
            py-4
            text-white
            flex
            flex-col
            items-center
            gap-2
            "
          >

            <MessageCircle />

            Chat

          </button>

          <button
            onClick={() => handleConsultation("Voice")}
            className="
            rounded-2xl
            bg-blue-600
            py-4
            text-white
            flex
            flex-col
            items-center
            gap-2
            "
          >

            <Phone />

            Voice

          </button>

          <button
            onClick={() => handleConsultation("Video")}
            className="
            rounded-2xl
            bg-purple-600
            py-4
            text-white
            flex
            flex-col
            items-center
            gap-2
            "
          >

            <Video />

            Video

          </button>

        </div>

      </section>

      {/* Recharge Sheet */}

      {
        showRecharge &&

        <div
          className="
          fixed
          inset-0
          z-50
          bg-black/70
          flex
          items-end
          "
        >

          <div
            className="
            w-full
            rounded-t-[32px]
            bg-[#091322]
            p-6
            "
          >

            <div
              className="
              flex
              justify-between
              items-center
              "
            >

              <h2
                className="
                text-white
                text-xl
                font-bold
                "
              >
                Recharge Wallet
              </h2>

              <button
                onClick={() => setShowRecharge(false)}
              >
                <X className="text-white" />
              </button>

            </div>

            <div className="mt-5 space-y-3">

              {
                plans.map((plan) => (

                  <button
                    key={plan.amount}
                    onClick={() => setSelectedPlan(plan)}
                    className={`
                    w-full
                    rounded-2xl
                    p-4
                    flex
                    justify-between
                    items-center
                    border

                    ${
                      selectedPlan.amount === plan.amount
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-white/10 bg-[#111C30]"
                    }
                    `}
                  >

                    <div>

                      <h3 className="text-white font-bold text-xl">
                        ₹{plan.amount}
                      </h3>

                      <p className="text-gray-400">
                        {plan.minutes} Minutes Consultation
                      </p>

                    </div>

                    <Zap className="text-yellow-400" />

                  </button>

                ))
              }

            </div>

            <button
              onClick={handlePayment}
              className="
              mt-6
              w-full
              rounded-2xl
              bg-yellow-400
              py-4
              font-bold
              text-black
              text-lg
              "
            >
              Continue to Payment
            </button>

          </div>

        </div>
      }

    </>
  );
}