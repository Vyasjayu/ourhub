"use client";

import {
  CalendarDays,
  ClipboardList,
  CreditCard,
  Video,
  Gift,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: CalendarDays,
    title: "Select Pooja",
    desc: "Choose your desired pooja",
  },
  {
    id: 2,
    icon: ClipboardList,
    title: "Fill Details",
    desc: "Enter your name, gotra & details",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Make Payment",
    desc: "Secure payment options",
  },
  {
    id: 4,
    icon: Video,
    title: "Pooja Performed",
    desc: "Pandit will perform pooja on time",
  },
  {
    id: 5,
    icon: Gift,
    title: "Receive Blessings",
    desc: "Get video & prasad at your home",
  },
];

export default function HowItWorks() {
  return (
    <section className="mt-8">

      {/* Card */}

      <div
        className="
          overflow-hidden
          rounded-[28px]
          border
          border-yellow-500/20
          bg-gradient-to-b
          from-[#101826]
          via-[#0d1727]
          to-[#09121f]
          shadow-[0_0_40px_rgba(255,193,7,0.06)]
        "
      >

        {/* Heading */}

        <div className="px-5 pt-5 text-center">

          <h2 className="text-[30px] font-bold text-yellow-400">

            ✨ How It Works? ✨

          </h2>

          <div className="mx-auto mt-2 h-px w-44 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

        </div>

        {/* Steps */}

        <div className="grid grid-cols-5 px-2 py-8">
                      {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative flex flex-col items-center"
              >
                {/* Line */}

                {index !== steps.length - 1 && (
                  <div className="absolute left-[64px] top-[34px] flex items-center">
                    <div className="h-[2px] w-10 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600" />

                    <ArrowRight
                      size={14}
                      className="ml-1 text-yellow-500"
                    />
                  </div>
                )}

                {/* Circle */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-yellow-500/40
                    bg-[#101826]
                    shadow-[0_0_18px_rgba(255,193,7,0.12)]
                  "
                >
                  <Icon
                    size={28}
                    className="text-yellow-400"
                  />
                </div>

                {/* Number */}

                <div
                  className="
                    -mt-2
                    z-20
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black
                    bg-yellow-400
                    text-[12px]
                    font-bold
                    text-black
                  "
                >
                  {step.id}
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-4
                    text-center
                    text-[14px]
                    font-bold
                    leading-5
                    text-white
                  "
                >
                  {step.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-2
                    px-2
                    text-center
                    text-[12px]
                    leading-5
                    text-gray-400
                  "
                >
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
              </div>

      {/* Bottom Premium Card */}

      <div
        className="
          mt-8
          rounded-3xl
          border
          border-yellow-500/20
          bg-gradient-to-r
          from-yellow-500/10
          via-orange-500/10
          to-yellow-500/10
          p-5
        "
      >
        <div className="flex items-start gap-4">

          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-yellow-500/15
              text-2xl
            "
          >
            ✨
          </div>

          <div>

            <h3 className="text-lg font-bold text-yellow-300">
              Fast & Secure Booking
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-300">
              Instant confirmation, secure payment, WhatsApp updates,
              live pooja link, HD recording and prasad delivery after
              pooja completion.
            </p>

          </div>

        </div>

        {/* Features */}

        <div className="mt-5 grid grid-cols-2 gap-3">

          <div className="rounded-xl bg-black/20 px-3 py-2 text-center text-xs font-medium text-yellow-300">
            ✓ Instant Confirmation
          </div>

          <div className="rounded-xl bg-black/20 px-3 py-2 text-center text-xs font-medium text-yellow-300">
            ✓ Secure Payment
          </div>

          <div className="rounded-xl bg-black/20 px-3 py-2 text-center text-xs font-medium text-yellow-300">
            ✓ Live Video Link
          </div>

          <div className="rounded-xl bg-black/20 px-3 py-2 text-center text-xs font-medium text-yellow-300">
            ✓ Prasad Delivery
          </div>

        </div>

      </div>

    </section>
  );
}