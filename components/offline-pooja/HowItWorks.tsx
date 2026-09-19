"use client";

import {
ArrowDown,
CalendarDays,
CheckCircle2,
Flower2,
Gift,
Landmark,
Sparkles,
UserRound,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const steps = [
{
number: "01",
title: {
en: "Select Pooja",
hi: "पूजा चुनें",
},
description: {
en: "Choose the sacred pooja you wish to perform.",
hi: "वह पवित्र पूजा चुनें जिसे आप करवाना चाहते हैं।",
},
icon: Flower2,
},
{
number: "02",
title: {
en: "Select Temple",
hi: "मंदिर चुनें",
},
description: {
en: "Pick your preferred temple and location.",
hi: "अपना पसंदीदा मंदिर और स्थान चुनें।",
},
icon: Landmark,
},
{
number: "03",
title: {
en: "Pick Date & Time",
hi: "दिन और समय चुनें",
},
description: {
en: "Choose a convenient date and available slot.",
hi: "अपनी सुविधा के अनुसार तारीख और उपलब्ध समय चुनें।",
},
icon: CalendarDays,
},
{
number: "04",
title: {
en: "Pandit Performs",
hi: "पंडित पूजा करते हैं",
},
description: {
en: "Our verified pandit performs the ritual at the temple.",
hi: "हमारे प्रमाणित पंडित मंदिर में विधि-विधान से पूजा करते हैं।",
},
icon: UserRound,
},
{
number: "05",
title: {
en: "Receive Blessings",
hi: "आशीर्वाद प्राप्त करें",
},
description: {
en: "Receive prasad, pooja updates and divine blessings.",
hi: "प्रसाद, पूजा की जानकारी और दिव्य आशीर्वाद प्राप्त करें।",
},
icon: Gift,
},
];

export default function HowItWorks() {
const { language } = useLanguage();

const isHindi = language === "hi";

return ( <section className="relative mt-9 px-4">
{/* Ambient Glow */} <div className="pointer-events-none absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.055] blur-3xl" />


  {/* Section Header */}
  <div className="relative text-center">
    <div className="flex items-center justify-center gap-2">
      <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#DFAE45]/60" />

      <Sparkles
        size={13}
        className="text-[#DFAE45]"
        fill="currentColor"
      />

      <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#DFAE45]">
        {isHindi ? "सरल और पवित्र" : "Simple & Sacred"}
      </span>

      <Sparkles
        size={13}
        className="text-[#DFAE45]"
        fill="currentColor"
      />

      <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#DFAE45]/60" />
    </div>

    <h2 className="mt-2 text-[21px] font-extrabold tracking-tight text-white">
      {isHindi
        ? "ऑफलाइन पूजा कैसे काम करती है?"
        : "How Offline Pooja Works?"}
    </h2>

    <p className="mx-auto mt-2 max-w-[300px] text-[11px] leading-5 text-slate-500">
      {isHindi
        ? "अपने पसंदीदा मंदिर में पवित्र अनुष्ठान करवाने का सरल और विश्वसनीय तरीका।"
        : "A simple and trusted way to arrange sacred rituals at your preferred temple."}
    </p>
  </div>

  {/* Steps */}
  <div className="relative mt-6">
    {/* Connecting Line */}
    <div className="absolute bottom-10 left-[27px] top-10 w-px bg-gradient-to-b from-[#DFAE45]/50 via-[#DFAE45]/20 to-transparent" />

    <div className="relative space-y-3">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === steps.length - 1;

        return (
          <div key={step.number} className="relative">

            {/* Step Card */}
            <div
              className={[
                "group relative flex items-center gap-3.5 overflow-hidden rounded-[22px]",
                "border border-white/[0.07] bg-gradient-to-r from-[#0C1724] via-[#0A1420] to-[#08111C]",
                "p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.18)]",
                "transition-all duration-300",
                "hover:-translate-y-0.5 hover:border-[#DFAE45]/25",
              ].join(" ")}
            >
              {/* Card Glow */}
              <div className="pointer-events-none absolute -right-12 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[#DFAE45]/[0.045] blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number / Icon Column */}
              <div className="relative z-10 flex w-[54px] shrink-0 flex-col items-center">

                {/* Icon */}
                <div className="relative flex h-[50px] w-[50px] items-center justify-center rounded-[17px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.07] shadow-[0_0_22px_rgba(223,174,69,0.06)]">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                    className="text-[#F3C75F] transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Number Badge */}
                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-[#08111C] bg-gradient-to-br from-[#F3C75F] to-[#B98222] px-1 text-[7px] font-extrabold text-black shadow-[0_2px_8px_rgba(223,174,69,0.2)]">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 min-w-0 flex-1 py-0.5">

                <div className="flex items-center gap-2">
                  <h3 className="text-[14px] font-bold text-white">
                    {step.title[language]}
                  </h3>

                  {isLast && (
                    <span className="flex items-center gap-1 rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-1.5 py-0.5">
                      <CheckCircle2
                        size={9}
                        className="text-emerald-400"
                      />

                      <span className="text-[7px] font-bold text-emerald-300">
                        {isHindi ? "पूर्ण" : "COMPLETE"}
                      </span>
                    </span>
                  )}
                </div>

                <p className="mt-1 text-[10px] leading-[1.5] text-slate-500">
                  {step.description[language]}
                </p>

                {/* Mini progress */}
                <div className="mt-2.5 flex items-center gap-1.5">
                  <div className="h-1 w-10 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#DFAE45] to-[#F3C75F]"
                      style={{
                        width: `${((index + 1) / steps.length) * 100}%`,
                      }}
                    />
                  </div>

                  <span className="text-[7px] font-medium text-slate-600">
                    {isHindi
                      ? `चरण ${index + 1} / ${steps.length}`
                      : `STEP ${index + 1} OF ${steps.length}`}
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.025]">
                {isLast ? (
                  <CheckCircle2
                    size={14}
                    className="text-[#DFAE45]"
                  />
                ) : (
                  <ArrowDown
                    size={13}
                    className="rotate-[-90deg] text-slate-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[#DFAE45]"
                  />
                )}
              </div>

              {/* Bottom Gold Accent */}
              <div className="absolute bottom-0 left-8 h-px w-16 bg-gradient-to-r from-[#DFAE45]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Connector Dot */}
            {!isLast && (
              <div className="absolute left-[23px] top-[66px] z-20 flex h-[9px] w-[9px] items-center justify-center rounded-full border-2 border-[#071424] bg-[#DFAE45]/50">
                <span className="h-1 w-1 rounded-full bg-[#F3C75F]" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>

  {/* Bottom Trust Card */}
  <div className="relative mt-5 overflow-hidden rounded-[22px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#101B29] to-[#09121D] p-4">

    {/* Glow */}
    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#DFAE45]/[0.07] blur-2xl" />

    <div className="relative flex items-center gap-3">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/[0.08]">
        <ShieldIcon />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold text-white">
          {isHindi
            ? "आपकी श्रद्धा, हमारी जिम्मेदारी"
            : "Your Devotion, Our Responsibility"}
        </p>

        <p className="mt-0.5 text-[9px] leading-4 text-slate-500">
          {isHindi
            ? "प्रमाणित पंडित • प्रामाणिक अनुष्ठान • पारदर्शी बुकिंग"
            : "Verified pandits • Authentic rituals • Transparent booking"}
        </p>
      </div>

      <CheckCircle2
        size={17}
        className="shrink-0 text-[#DFAE45]"
      />
    </div>
  </div>

  {/* Decorative Bottom Line */}
  <div className="mt-5 flex items-center justify-center gap-2">

    <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#DFAE45]/30" />

    <Sparkles
      size={10}
      className="text-[#DFAE45]/60"
      fill="currentColor"
    />

    <span className="text-[7px] font-semibold uppercase tracking-[0.2em] text-slate-700">
      {isHindi
        ? "दिव्य • सरल • विश्वसनीय"
        : "Divine • Simple • Trusted"}
    </span>

    <Sparkles
      size={10}
      className="text-[#DFAE45]/60"
      fill="currentColor"
    />

    <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#DFAE45]/30" />
  </div>
</section>


);
}

/* Small custom shield wrapper */
function ShieldIcon() {
return ( <div className="relative"> <div className="absolute inset-0 rounded-full bg-[#DFAE45]/20 blur-md" />


  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="relative"
  >
    <path
      d="M12 3L19 6V11.5C19 16.1 16.1 20.2 12 21C7.9 20.2 5 16.1 5 11.5V6L12 3Z"
      stroke="#F3C75F"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />

    <path
      d="M9 12L11 14L15 10"
      stroke="#F3C75F"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>


);
}
