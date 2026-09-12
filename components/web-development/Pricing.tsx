
"use client";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  Crown,
  Headphones,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    description: "Perfect for individuals & small businesses.",
    icon: Rocket,
    features: [
      "5 Pages",
      "Responsive Design",
      "Basic SEO",
      "1 Month Support",
    ],
  },
  {
    name: "Professional",
    price: "₹24,999",
    description: "A complete solution for growing businesses.",
    icon: Crown,
    popular: true,
    features: [
      "15 Pages",
      "Admin Panel",
      "Advanced SEO",
      "6 Month Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Powerful solutions built around your requirements.",
    icon: Zap,
    features: [
      "Unlimited Pages",
      "Custom Dashboard",
      "API Integration",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  const handleChoosePlan = (planName: string) => {
    const phone = "918878632431";

    const message = encodeURIComponent(
      `Hi OurHub, I'm interested in the ${planName} Web Development plan. Please share more details.`
    );

    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="relative mt-12 overflow-hidden px-4">
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -left-24 top-20 h-60 w-60 rounded-full bg-[#DFAE45]/[0.045] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-64 w-64 rounded-full bg-blue-500/[0.025] blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="mb-5">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
              <Sparkles
                size={15}
                strokeWidth={2}
                className="text-[#DFAE45]"
              />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              Simple Pricing
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-8 w-1 rounded-full bg-gradient-to-b from-[#FFD86A] to-[#DFAE45]" />

            <h2 className="text-[25px] font-extrabold tracking-tight text-white">
              Pricing Plans
            </h2>
          </div>

          <p className="mt-2 pl-3 text-[13px] leading-5 text-gray-400">
            Choose a plan that fits your business today and scale when you are
            ready.
          </p>
        </div>

        {/* Pricing Promise */}
        <div className="relative overflow-hidden rounded-[24px] border border-[#DFAE45]/15 bg-gradient-to-r from-[#101D2D] to-[#091321] p-4">
          <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#DFAE45]/10 blur-3xl" />

          <div className="relative flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/15 bg-[#DFAE45]/10">
              <Headphones
                size={17}
                className="text-[#DFAE45]"
                strokeWidth={2}
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-extrabold text-white">
                Transparent pricing
              </p>

              <p className="mt-0.5 text-[9px] leading-4 text-gray-500">
                No confusing packages. Pick what your business actually needs.
              </p>
            </div>

            <Check
              size={17}
              strokeWidth={2.5}
              className="shrink-0 text-green-400"
            />
          </div>
        </div>

        {/* Plans */}
        <div className="mt-5 space-y-4">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`
                  group relative overflow-hidden rounded-[28px]
                  border p-5
                  shadow-[0_15px_40px_rgba(0,0,0,0.22)]
                  transition-all duration-300
                  hover:-translate-y-1
                  active:scale-[0.99]
                  ${
                    plan.popular
                      ? "border-[#DFAE45]/40 bg-gradient-to-br from-[#172338] via-[#0D1A2A] to-[#09121F] shadow-[0_18px_50px_rgba(223,174,69,0.10)]"
                      : "border-white/[0.07] bg-gradient-to-br from-[#101D2D] via-[#0B1726] to-[#08121F] hover:border-[#DFAE45]/25"
                  }
                `}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-[#DFAE45]/25 bg-[#DFAE45]/10 px-2.5 py-1.5">
                    <Sparkles
                      size={9}
                      className="text-[#DFAE45]"
                      strokeWidth={2.3}
                    />

                    <span className="text-[7px] font-extrabold uppercase tracking-[1px] text-[#DFAE45]">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Glow */}
                <div
                  className={`
                    pointer-events-none absolute -right-16 -top-16
                    h-40 w-40 rounded-full blur-3xl
                    transition-all duration-500
                    ${
                      plan.popular
                        ? "bg-[#DFAE45]/[0.12] group-hover:bg-[#DFAE45]/[0.18]"
                        : "bg-[#DFAE45]/[0.045] group-hover:bg-[#DFAE45]/[0.10]"
                    }
                  `}
                />

                {/* Top Line */}
                <div
                  className={`
                    absolute left-0 right-0 top-0 h-px
                    bg-gradient-to-r from-transparent via-[#DFAE45]/50 to-transparent
                    ${plan.popular ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    transition-opacity duration-300
                  `}
                />

                <div className="relative">
                  {/* Plan Header */}
                  <div className="flex items-start gap-3">
                    <div
                      className={`
                        relative flex h-12 w-12 shrink-0 items-center justify-center
                        overflow-hidden rounded-[17px]
                        border border-[#DFAE45]/15
                        bg-[#DFAE45]/[0.07]
                        transition-all duration-300
                        group-hover:scale-105
                        group-hover:border-[#DFAE45]/30
                        ${
                          plan.popular
                            ? "bg-[#DFAE45]/10"
                            : ""
                        }
                      `}
                    >
                      <span className="pointer-events-none absolute -left-8 top-0 h-full w-6 rotate-[25deg] bg-white/15 blur-sm transition-all duration-700 group-hover:left-[120%]" />

                      <Icon
                        size={20}
                        strokeWidth={1.9}
                        className="relative z-10 text-[#DFAE45]"
                      />
                    </div>

                    <div className="min-w-0 flex-1 pr-20">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[17px] font-extrabold text-white">
                          {plan.name}
                        </h3>

                        <span className="text-[7px] font-bold uppercase tracking-[1px] text-gray-600">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-1 text-[9px] leading-4 text-gray-500">
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-5 rounded-[20px] border border-white/[0.06] bg-white/[0.025] p-4">
                    <p className="text-[8px] font-bold uppercase tracking-[1.5px] text-gray-600">
                      Starting investment
                    </p>

                    <div className="mt-1 flex items-end gap-2">
                      <span
                        className={`
                          text-[30px] font-black leading-none tracking-tight
                          ${
                            plan.price === "Custom"
                              ? "text-[#DFAE45]"
                              : "text-[#DFAE45]"
                          }
                        `}
                      >
                        {plan.price}
                      </span>

                      {plan.price !== "Custom" && (
                        <span className="pb-0.5 text-[8px] font-medium text-gray-600">
                          onwards
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-5">
                    <p className="mb-3 text-[8px] font-bold uppercase tracking-[1.5px] text-gray-600">
                      What&apos;s included
                    </p>

                    <div className="grid grid-cols-2 gap-x-3 gap-y-2.5">
                      {plan.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex min-w-0 items-center gap-2"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-green-400/[0.08]">
                            <Check
                              size={11}
                              strokeWidth={2.8}
                              className="text-green-400"
                            />
                          </span>

                          <span className="truncate text-[9px] font-medium text-gray-400">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => handleChoosePlan(plan.name)}
                    className={`
                      group/button relative mt-5 flex h-[45px] w-full
                      items-center justify-center gap-2
                      overflow-hidden rounded-2xl
                      text-[10px] font-extrabold
                      transition-all duration-300
                      active:scale-[0.98]
                      ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#DFAE45] to-[#FFD86A] text-black shadow-[0_10px_30px_rgba(223,174,69,0.18)] hover:shadow-[0_12px_35px_rgba(223,174,69,0.28)]"
                          : "border border-[#DFAE45]/20 bg-[#DFAE45]/[0.06] text-[#DFAE45] hover:border-[#DFAE45]/40 hover:bg-[#DFAE45]/10"
                      }
                    `}
                  >
                    {plan.popular && (
                      <span className="pointer-events-none absolute -left-12 top-0 h-full w-10 rotate-[20deg] bg-white/25 blur-sm transition-all duration-700 group-hover/button:left-[120%]" />
                    )}

                    <span className="relative z-10">
                      {plan.price === "Custom"
                        ? "Discuss Your Project"
                        : "Choose Plan"}
                    </span>

                    <ArrowRight
                      size={14}
                      strokeWidth={2.7}
                      className="relative z-10 transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </button>

                  {/* Bottom Info */}
                  <div className="mt-3 flex items-center justify-center gap-1.5">
                    <CheckCircle2
                      size={10}
                      strokeWidth={2.3}
                      className="text-green-400"
                    />

                    <span className="text-[7px] font-semibold uppercase tracking-[0.8px] text-gray-600">
                      Free consultation available
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Card */}
        <div className="relative mt-4 overflow-hidden rounded-[24px] border border-white/[0.07] bg-[#0A1422] p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
              <Sparkles
                size={15}
                className="text-[#DFAE45]"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[11px] font-extrabold text-white">
                Need something different?
              </p>

              <p className="mt-0.5 text-[8px] leading-4 text-gray-600">
                Tell us your requirements and we&apos;ll create a custom
                solution.
              </p>
            </div>

            <div className="ml-auto shrink-0 rounded-full border border-green-400/10 bg-green-400/[0.05] px-2 py-1">
              <span className="text-[7px] font-bold text-green-400">
                Custom
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

