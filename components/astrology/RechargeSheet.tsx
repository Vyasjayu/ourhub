"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  Wallet,
  X,
  CheckCircle2,
  Zap,
} from "lucide-react";

interface RechargeSheetProps {
  open: boolean;
  walletBalance: number;

  panditId: string;
  panditPhone: string;
  panditName: string;

  onClose: () => void;

  onRecharge: (plan: {
    amount: number;
    minutes: number;
  }) => void;
}

const plans = [
  {
    id: 1,
    amount: 1,
    minutes: 1,
    popular: false,
  },
  {
    id: 2,
    amount: 250,
    minutes: 10,
    popular: true,
  },
  {
    id: 3,
    amount: 500,
    minutes: 20,
    popular: false,
  },
  {
    id: 4,
    amount: 1000,
    minutes: 40,
    popular: false,
  },
];

export default function RechargeSheet({
  open,
  walletBalance,

  panditId,
  panditPhone,
  panditName,

  onClose,
  onRecharge,
}: RechargeSheetProps) {

  const router = useRouter();

  const [selectedPlan, setSelectedPlan] =
    useState(plans[1]);

  const [wallet, setWallet] =
    useState(walletBalance);

  useEffect(() => {
    setWallet(walletBalance);
  }, [walletBalance]);

  useEffect(() => {

    if (!open) return;

    document.body.style.overflow = "hidden";

    fetch("/api/wallet/8878632431")
      .then((res) => res.json())
      .then((data) => {

        if (data.success) {

          setWallet(data.walletBalance);

        }

      })
      .catch(console.error);

    return () => {

      document.body.style.overflow = "";

    };

  }, [open]);

  if (!open) return null;

  const handleContinue = () => {

    onRecharge(selectedPlan);

    router.push(

      `/payment?amount=${selectedPlan.amount}` +
      `&minutes=${selectedPlan.minutes}` +
      `&panditId=${panditId}` +
      `&phone=${panditPhone}` +
      `&name=${encodeURIComponent(panditName)}`

    );

  };

  return (

    <>

      {/* Overlay */}

      <div
        onClick={onClose}
        className="
        fixed
        inset-0
        z-40
        bg-black/70
        backdrop-blur-sm
        "
      />

      {/* Bottom Sheet */}

      <div
        className="
        fixed
        bottom-0
        left-1/2
        z-50
        w-full
        max-w-md
        -translate-x-1/2
        rounded-t-[34px]
        border
        border-yellow-500/20
        bg-[#08111D]
        p-6
        shadow-2xl
        "
      >

        <div
          className="
          mx-auto
          mb-5
          h-1.5
          w-16
          rounded-full
          bg-gray-500
          "
        />

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Recharge Wallet
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Select a recharge plan
            </p>

          </div>

          <button
            onClick={onClose}
            className="
            rounded-full
            bg-white/10
            p-2
            "
          >
            <X
              size={18}
              className="text-white"
            />
          </button>

        </div>

        {/* Wallet */}

        <div
          className="
          mt-6
          rounded-2xl
          border
          border-yellow-500/20
          bg-[#101C30]
          p-4
          "
        >

          <div className="flex items-center gap-3">

            <Wallet className="text-yellow-400" />

            <div>

              <p className="text-sm text-gray-400">
                Current Balance
              </p>

              <h3 className="text-3xl font-bold text-white">
                ₹{wallet}
              </h3>

            </div>

          </div>

        </div>

        {/* Plans */}

        <div className="mt-6 space-y-4">

          {plans.map((plan) => {

            const active =
              selectedPlan.id === plan.id;

            return (

              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className={`
                relative
                w-full
                rounded-2xl
                border
                p-4
                transition

                ${
                  active
                    ? "border-yellow-400 bg-yellow-400/10"
                    : "border-white/10 bg-[#101C30]"
                }
                `}
              >

                {plan.popular && (

                  <span
                    className="
                    absolute
                    right-4
                    top-3
                    rounded-full
                    bg-yellow-400
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-black
                    "
                  >
                    Popular
                  </span>

                )}

                <div className="flex items-center justify-between">

                  <div className="text-left">

                    <h3 className="text-2xl font-bold text-white">
                      ₹{plan.amount}
                    </h3>

                    <p className="mt-1 text-gray-400">
                      {plan.minutes} Minutes Consultation
                    </p>

                  </div>

                  {active ? (

                    <CheckCircle2
                      size={30}
                      className="text-yellow-400"
                    />

                  ) : (

                    <Zap
                      size={28}
                      className="text-gray-500"
                    />

                  )}

                </div>

              </button>

            );

          })}

        </div>

        {/* Info */}

        <div
          className="
          mt-6
          rounded-xl
          border
          border-yellow-500/20
          bg-[#101C30]
          p-4
          "
        >

          <p className="text-sm text-gray-300">

            Wallet amount will be deducted at

            <span className="font-bold text-yellow-400">
              {" "}₹25/min
            </span>

            {" "}during consultation.

          </p>

        </div>

        {/* Continue */}

        <button
          onClick={handleContinue}
          className="
          mt-6
          w-full
          rounded-2xl
          bg-gradient-to-r
          from-yellow-400
          to-yellow-500
          py-4
          text-lg
          font-bold
          text-black
          transition
          hover:scale-[1.02]
          "
        >
          Continue to Payment
        </button>

      </div>

    </>

  );

}