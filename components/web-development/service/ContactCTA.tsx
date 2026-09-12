
"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export default function ContactCTA() {
  const startProject = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const phone = "918878632431";

  const whatsappMessage = encodeURIComponent(
    "Hello OurHub Team 👋\n\nI want to develop a website. Please share more details."
  );

  return (
    <section className="relative mt-12 overflow-hidden px-4 pb-4">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-20 h-48 w-48 rounded-full bg-[#DFAE45]/[0.08] blur-[85px]" />

      <div className="pointer-events-none absolute -right-20 bottom-20 h-48 w-48 rounded-full bg-green-500/[0.05] blur-[90px]" />

      {/* Main CTA Card */}
      <div className="group relative overflow-hidden rounded-[30px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#101D30] via-[#0B1728] to-[#07111D] shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
        {/* Gold top line */}
        <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/80 to-transparent" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full border border-[#DFAE45]/[0.06]" />

        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#DFAE45]/[0.05]" />

        {/* Gold glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#DFAE45]/[0.07] blur-[70px]" />

        <div className="relative p-5">
          {/* Eyebrow */}
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/[0.07] px-3 py-1.5">
              <Sparkles
                size={12}
                strokeWidth={2.5}
                className="text-[#DFAE45]"
              />

              <span className="text-[9px] font-black uppercase tracking-[1.5px] text-[#DFAE45]">
                Let's Build Something Great
              </span>
            </div>
          </div>

          {/* Heading */}
          <div className="mt-6 text-center">
            <h2 className="text-[27px] font-black leading-[1.15] tracking-tight text-white">
              Ready To Start
              <span className="block text-[#FFD86A]">
                Your Project?
              </span>
            </h2>

            <p className="mx-auto mt-3 max-w-[315px] text-[12px] leading-6 text-gray-500">
              Tell us what you need and our experts will help turn your idea
              into a professional digital experience.
            </p>
          </div>

          {/* Trust stats */}
          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="rounded-[17px] border border-white/[0.055] bg-white/[0.025] px-2 py-3 text-center">
              <CheckCircle2
                size={15}
                className="mx-auto text-green-400"
                strokeWidth={2.5}
              />

              <p className="mt-1.5 text-[9px] font-extrabold text-gray-300">
                Verified
              </p>

              <p className="mt-0.5 text-[7px] text-gray-600">
                Professionals
              </p>
            </div>

            <div className="rounded-[17px] border border-white/[0.055] bg-white/[0.025] px-2 py-3 text-center">
              <Clock3
                size={15}
                className="mx-auto text-[#DFAE45]"
                strokeWidth={2.5}
              />

              <p className="mt-1.5 text-[9px] font-extrabold text-gray-300">
                Quick
              </p>

              <p className="mt-0.5 text-[7px] text-gray-600">
                Response
              </p>
            </div>

            <div className="rounded-[17px] border border-white/[0.055] bg-white/[0.025] px-2 py-3 text-center">
              <ShieldCheck
                size={15}
                className="mx-auto text-blue-400"
                strokeWidth={2.5}
              />

              <p className="mt-1.5 text-[9px] font-extrabold text-gray-300">
                Secure
              </p>

              <p className="mt-0.5 text-[7px] text-gray-600">
                Process
              </p>
            </div>
          </div>

          {/* Primary WhatsApp */}
          <a
            href={`https://wa.me/${phone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group/whatsapp relative mt-5 flex h-[54px] w-full items-center justify-center gap-2.5 overflow-hidden rounded-[18px] border border-green-400/20 bg-gradient-to-r from-[#159447] to-[#20B85A] text-[12px] font-black text-white shadow-[0_12px_32px_rgba(34,197,94,0.16)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(34,197,94,0.25)] active:scale-[0.98]"
          >
            {/* Shine */}
            <span className="pointer-events-none absolute -left-14 top-0 h-full w-10 rotate-[20deg] bg-white/25 blur-sm transition-all duration-700 group-hover/whatsapp:left-[120%]" />

            <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
              <MessageCircle
                size={18}
                strokeWidth={2.2}
              />

              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-green-200 shadow-[0_0_8px_rgba(187,247,208,0.9)]" />
            </span>

            <span className="relative">
              Chat With OurHub
            </span>

            <ArrowRight
              size={16}
              strokeWidth={2.7}
              className="relative transition-transform duration-300 group-hover/whatsapp:translate-x-1"
            />
          </a>

          {/* Secondary actions */}
          <div className="mt-2.5 grid grid-cols-2 gap-2.5">
            <a
              href={`tel:+${phone}`}
              className="group/call flex h-[50px] items-center justify-center gap-2 rounded-[17px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.05] text-[11px] font-extrabold text-gray-200 transition-all duration-300 hover:border-[#DFAE45]/35 hover:bg-[#DFAE45]/[0.09] active:scale-[0.98]"
            >
              <Phone
                size={17}
                strokeWidth={2.2}
                className="text-[#DFAE45] transition-transform duration-300 group-hover/call:scale-110"
              />

              Call Now
            </a>

            <button
              type="button"
              onClick={startProject}
              className="group/form flex h-[50px] items-center justify-center gap-2 rounded-[17px] border border-white/[0.08] bg-white/[0.035] text-[11px] font-extrabold text-gray-200 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.06] active:scale-[0.98]"
            >
              <Zap
                size={16}
                strokeWidth={2.2}
                className="text-[#FFD86A] transition-transform duration-300 group-hover/form:scale-110"
              />

              Send Requirement
            </button>
          </div>

          {/* Free consultation banner */}
          <div className="mt-5 rounded-[19px] border border-[#DFAE45]/10 bg-black/20 p-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#DFAE45]/15 bg-[#DFAE45]/[0.07]">
                <Sparkles
                  size={16}
                  className="text-[#DFAE45]"
                  strokeWidth={2}
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-extrabold text-gray-200">
                  Free Project Consultation
                </p>

                <p className="mt-0.5 text-[8px] leading-4 text-gray-600">
                  Discuss your idea, requirements & budget with our experts.
                </p>
              </div>

              <CheckCircle2
                size={15}
                className="shrink-0 text-green-400"
                strokeWidth={2.5}
              />
            </div>
          </div>

          {/* Bottom trust */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.8px] text-gray-600">
              Free Consultation
            </span>

            <span className="h-1 w-1 rounded-full bg-white/10" />

            <span className="text-[8px] font-bold uppercase tracking-[0.8px] text-gray-600">
              Premium Design
            </span>

            <span className="h-1 w-1 rounded-full bg-white/10" />

            <span className="text-[8px] font-bold uppercase tracking-[0.8px] text-gray-600">
              Fast Delivery
            </span>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/30 to-transparent" />
      </div>
    </section>
  );
}



