"use client";

import Link from "next/link";
import {
ArrowRight,
BadgeCheck,
CheckCircle2,
Clock3,
Home,
Landmark,
MapPin,
MessageCircle,
Phone,
ShieldCheck,
Sparkles,
Star,
Users,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

import OfflineHeader from "@/components/offline-pooja/OfflineHeader";
import LocationSearch from "@/components/offline-pooja/LocationSearch";
import OfflineHero from "@/components/offline-pooja/OfflineHero";
import HowItWorks from "@/components/offline-pooja/HowItWorks";
import PopularPoojas from "@/components/offline-pooja/PopularPoojas";
import WhyOfflinePooja from "@/components/offline-pooja/WhyOfflinePooja";
import NearbyTemples from "@/components/offline-pooja/NearbyTemples";
import OfflineBottomNav from "@/components/offline-pooja/OfflineBottomNav";

export default function OfflinePoojaPage() {
const { language } = useLanguage();

const isHindi = language === "hi";

return ( <main className="min-h-screen bg-[#02060A] text-white"> <div className="relative mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden bg-[#071424] pb-32">


    {/* =====================================================
        AMBIENT BACKGROUND
    ====================================================== */}

    <div className="pointer-events-none absolute -right-32 top-[-100px] h-72 w-72 rounded-full bg-[#DFAE45]/[0.08] blur-[110px]" />

    <div className="pointer-events-none absolute -left-32 top-[520px] h-72 w-72 rounded-full bg-blue-500/[0.035] blur-[110px]" />

    <div className="pointer-events-none absolute right-[-100px] top-[1050px] h-64 w-64 rounded-full bg-[#DFAE45]/[0.035] blur-[100px]" />

    {/* =====================================================
        HEADER
    ====================================================== */}

    <div className="relative z-30">
      <OfflineHeader />
    </div>

    {/* =====================================================
        LOCATION
    ====================================================== */}

    <section className="relative z-20 px-4">
      <LocationSearch />
    </section>

    {/* =====================================================
        HERO
    ====================================================== */}

    <section className="relative z-10">
      <OfflineHero />
    </section>

    {/* =====================================================
        PREMIUM TRUST STRIP
    ====================================================== */}

    <section className="relative z-10 mt-5 px-4">
      <div className="grid grid-cols-3 overflow-hidden rounded-[22px] border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl">

        <TrustItem
          icon={<BadgeCheck size={17} />}
          title={isHindi ? "प्रमाणित" : "Verified"}
          subtitle={isHindi ? "पंडित" : "Pandits"}
        />

        <TrustItem
          icon={<Landmark size={17} />}
          title={isHindi ? "प्रामाणिक" : "Authentic"}
          subtitle={isHindi ? "अनुष्ठान" : "Rituals"}
          bordered
        />

        <TrustItem
          icon={<ShieldCheck size={17} />}
          title={isHindi ? "सुरक्षित" : "Secure"}
          subtitle={isHindi ? "बुकिंग" : "Booking"}
          bordered
        />
      </div>
    </section>

    {/* =====================================================
        HOW IT WORKS
    ====================================================== */}

    <section className="relative z-10 mt-8">
      <SectionHeading
        eyebrow={isHindi ? "सरल प्रक्रिया" : "Simple Process"}
        title={isHindi ? "आसानी से पूजा बुक करें" : "Book Pooja With Ease"}
        description={
          isHindi
            ? "अपनी पूजा चुनें, स्थान चुनें और हमारे प्रमाणित पंडित को सभी अनुष्ठान करने दें।"
            : "Choose your pooja, select the location and let our verified pandit handle the rituals."
        }
      />

      <HowItWorks />
    </section>

    {/* =====================================================
        POPULAR POOJAS
    ====================================================== */}

    <section className="relative z-10 mt-9">
      <PopularPoojas />
    </section>

    {/* =====================================================
        TEMPLE / HOME EXPERIENCE
    ====================================================== */}

    <section className="relative z-10 mt-9 px-4">
      <div className="relative overflow-hidden rounded-[30px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#151D29] via-[#0D1724] to-[#07101A] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

        {/* Ambient glow */}

        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-blue-500/[0.04] blur-3xl" />

        {/* Header */}

        <div className="relative border-b border-white/[0.06] p-5">
          <div className="flex items-start justify-between gap-3">

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/[0.08]">
                <Sparkles
                  size={20}
                  className="text-[#E7B94F]"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  {isHindi
                    ? "लचीला अनुभव"
                    : "Flexible Experience"}
                </p>

                <h2 className="mt-1 text-[19px] font-bold">
                  {isHindi
                    ? "आप अपनी पूजा कहाँ करवाना चाहेंगे?"
                    : "Where would you like your pooja?"}
                </h2>
              </div>
            </div>

            <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-2.5 py-1 text-[8px] font-bold text-emerald-400">
              {isHindi ? "आपकी पसंद" : "YOUR CHOICE"}
            </span>
          </div>

          <p className="mt-3 text-[11px] leading-5 text-slate-500">
            {isHindi
              ? "अपनी सुविधा के अनुसार चुने हुए मंदिर या अपने घर पर पूजा बुक करें।"
              : "Book your pooja at a selected temple or at your home according to your convenience."}
          </p>
        </div>

        {/* Options */}

        <div className="relative grid grid-cols-2 gap-3 p-4">

          {/* Temple */}

          <Link
            href="/offline-pooja"
            className="
              group
              relative
              overflow-hidden
              rounded-[23px]
              border
              border-[#DFAE45]/20
              bg-gradient-to-br
              from-[#182538]
              to-[#0C1724]
              p-4
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#DFAE45]/40
              active:scale-[0.97]
            "
          >
            <div className="absolute right-[-20px] top-[-20px] h-20 w-20 rounded-full bg-[#DFAE45]/10 blur-2xl" />

            <div className="relative flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DFAE45]/15 bg-[#DFAE45]/[0.08]">
                <Landmark
                  size={21}
                  className="text-[#E7B94F]"
                />
              </div>

              <ArrowRight
                size={16}
                className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-[#DFAE45]"
              />
            </div>

            <h3 className="relative mt-4 text-[14px] font-bold">
              {isHindi ? "मंदिर में" : "Mandir Mein"}
            </h3>

            <p className="relative mt-1 text-[10px] leading-4 text-slate-500">
              {isHindi
                ? "चुने हुए मंदिर में पवित्र पूजा।"
                : "Selected temple par sacred pooja."}
            </p>

            <div className="relative mt-4 flex items-center gap-1.5">
              <CheckCircle2
                size={12}
                className="text-emerald-400"
              />

              <span className="text-[9px] font-semibold text-emerald-400">
                {isHindi
                  ? "प्रामाणिक अनुष्ठान"
                  : "Authentic Ritual"}
              </span>
            </div>
          </Link>

          {/* Home */}

          <Link
            href="/offline-pooja"
            className="
              group
              relative
              overflow-hidden
              rounded-[23px]
              border
              border-[#DFAE45]/20
              bg-gradient-to-br
              from-[#182538]
              to-[#0C1724]
              p-4
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#DFAE45]/40
              active:scale-[0.97]
            "
          >
            <div className="absolute right-[-20px] top-[-20px] h-20 w-20 rounded-full bg-[#DFAE45]/10 blur-2xl" />

            <div className="relative flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DFAE45]/15 bg-[#DFAE45]/[0.08]">
                <Home
                  size={21}
                  className="text-[#E7B94F]"
                />
              </div>

              <ArrowRight
                size={16}
                className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-[#DFAE45]"
              />
            </div>

            <h3 className="relative mt-4 text-[14px] font-bold">
              {isHindi ? "घर पर" : "Ghar Par"}
            </h3>

            <p className="relative mt-1 text-[10px] leading-4 text-slate-500">
              {isHindi
                ? "पंडित जी आपके घर पर।"
                : "Pandit ji aapke ghar par."}
            </p>

            <div className="relative mt-4 flex items-center gap-1.5">
              <CheckCircle2
                size={12}
                className="text-emerald-400"
              />

              <span className="text-[9px] font-semibold text-emerald-400">
                {isHindi
                  ? "घरेलू सेवा"
                  : "Home Service"}
              </span>
            </div>
          </Link>
        </div>

        {/* Pricing */}

        <div className="relative mx-4 mb-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-black/20 px-4 py-3">
          <div className="flex items-start gap-3">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/[0.08]">
              <Sparkles
                size={15}
                className="text-[#DFAE45]"
              />
            </div>

            <div>
              <p className="text-[10px] font-bold text-[#E7B94F]">
                {isHindi
                  ? "पारदर्शी मूल्य"
                  : "Transparent Pricing"}
              </p>

              <p className="mt-1 text-[9px] leading-4 text-slate-500">
                {isHindi
                  ? "मंदिर या घर — चुनी गई पूजा की बेस कीमत कन्फर्मेशन से पहले स्पष्ट रूप से दिखाई जाएगी।"
                  : "Mandir ya ghar — selected pooja ka base price clearly show kiya jayega before confirmation."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* =====================================================
        WHY OFFLINE POOJA
    ====================================================== */}

    <section className="relative z-10 mt-9">
      <WhyOfflinePooja />
    </section>

    {/* =====================================================
        NEARBY TEMPLES
    ====================================================== */}

    <section className="relative z-10 mt-9">
      <NearbyTemples />
    </section>

    {/* =====================================================
        LOCAL SERVICE BENEFITS
    ====================================================== */}

    <section className="relative z-10 mt-9 px-4">
      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-gradient-to-br from-[#101C2A] to-[#08121E] p-5">

        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#DFAE45]/[0.08] blur-3xl" />

        <div className="relative">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/[0.08]">
              <MapPin
                size={20}
                className="text-[#E7B94F]"
              />
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                {isHindi
                  ? "स्थानीय पूजा सेवा"
                  : "Local Pooja Service"}
              </p>

              <h2 className="mt-1 text-[18px] font-bold">
                {isHindi
                  ? "आपके शहर में सेवा"
                  : "Serving Your City"}
              </h2>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <CityCard
              city="Ujjain"
              available={isHindi ? "उपलब्ध" : "Available"}
            />

            <CityCard
              city="Indore"
              available={isHindi ? "उपलब्ध" : "Available"}
            />

            <CityCard
              city="Ratlam"
              available={isHindi ? "उपलब्ध" : "Available"}
            />
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/[0.05] bg-black/20 px-3 py-3">
            <Users
              size={15}
              className="text-[#DFAE45]"
            />

            <p className="text-[10px] leading-4 text-slate-500">
              {isHindi
                ? "चयनित क्षेत्रों में घर और मंदिर पूजा बुकिंग के लिए प्रमाणित पंडित उपलब्ध हैं।"
                : "Verified pandits available for home and temple pooja bookings in selected areas."}
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* =====================================================
        SUPPORT CARD
    ====================================================== */}

    <section className="relative z-10 mt-9 px-4">
      <div className="relative overflow-hidden rounded-[30px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#17263A] via-[#101B29] to-[#08121E] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        <div className="relative">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">

                <MessageCircle
                  size={20}
                  className="text-[#E7B94F]"
                />

                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#DFAE45]">
                  {isHindi
                    ? "विशेष सहायता"
                    : "Dedicated Assistance"}
                </p>

                <h2 className="mt-1 text-[18px] font-bold">
                  {isHindi ? "मदद चाहिए?" : "Need Help?"}
                </h2>
              </div>
            </div>

            <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.07] px-2.5 py-1 text-[8px] font-bold text-emerald-400">
              {isHindi ? "ऑनलाइन" : "ONLINE"}
            </span>
          </div>

          <p className="relative mt-4 text-[11px] leading-5 text-slate-400">
            {isHindi
              ? "पूजा बुकिंग में सहायता चाहिए? हमारी सपोर्ट टीम आपकी मदद के लिए उपलब्ध है।"
              : "Pooja booking mein assistance chahiye? Our support team is here to help."}
          </p>

          <div className="relative mt-5 grid grid-cols-2 gap-3">

            <a
              href="tel:+918878632431"
              className="
                flex
                h-[50px]
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-[#F3C75F]
                via-[#DFAE45]
                to-[#C28B2D]
                text-[12px]
                font-extrabold
                text-[#171008]
                shadow-[0_8px_25px_rgba(223,174,69,0.18)]
                transition
                active:scale-95
              "
            >
              <Phone size={17} />

              {isHindi
                ? "सपोर्ट कॉल करें"
                : "Call Support"}
            </a>

            <a
              href="https://wa.me/918878632431"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                h-[50px]
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.035]
                text-[12px]
                font-bold
                text-white
                transition
                hover:border-emerald-400/25
                hover:bg-emerald-400/[0.06]
                active:scale-95
              "
            >
              <MessageCircle
                size={17}
                className="text-emerald-400"
              />

              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* =====================================================
        FINAL TRUST PANEL
    ====================================================== */}

    <section className="relative z-10 mt-6 px-4">
      <div className="rounded-[24px] border border-white/[0.06] bg-white/[0.02] px-4 py-4">

        <div className="flex items-center justify-center gap-5">

          <MiniTrust
            icon={<ShieldCheck size={15} />}
            text={isHindi ? "सुरक्षित" : "Secure"}
          />

          <MiniTrust
            icon={<BadgeCheck size={15} />}
            text={isHindi ? "प्रमाणित" : "Verified"}
          />

          <MiniTrust
            icon={<Star size={15} />}
            text={isHindi ? "विश्वसनीय" : "Trusted"}
          />

          <MiniTrust
            icon={<Clock3 size={15} />}
            text={isHindi ? "सहायता" : "Support"}
          />

        </div>
      </div>
    </section>

    {/* =====================================================
        BRAND FOOTER
    ====================================================== */}

    <footer className="relative z-10 px-4 pb-5 pt-9 text-center">

      <div className="flex items-center justify-center gap-3">

        <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#DFAE45]/30" />

        <div className="flex items-center gap-1.5">

          <Sparkles
            size={10}
            className="text-[#DFAE45]"
          />

          <span className="text-[10px] font-extrabold tracking-[0.3em] text-[#DFAE45]">
            OURHUB
          </span>

          <Sparkles
            size={10}
            className="text-[#DFAE45]"
          />

        </div>

        <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#DFAE45]/30" />
      </div>

      <p className="mt-2 text-[9px] tracking-wide text-slate-700">
        {isHindi
          ? "दिव्य • प्रामाणिक • विश्वसनीय"
          : "Divine • Authentic • Trusted"}
      </p>
    </footer>

    {/* =====================================================
        BOTTOM NAV
    ====================================================== */}

    <OfflineBottomNav />
  </div>
</main>


);
}

/* =============================================================
SECTION HEADING
============================================================= */

function SectionHeading({
eyebrow,
title,
description,
}: {
eyebrow: string;
title: string;
description: string;
}) {
return ( <div className="px-4"> <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#DFAE45]">
{eyebrow} </p>


  <h2 className="mt-1 text-[22px] font-extrabold tracking-tight">
    {title}
  </h2>

  <p className="mt-2 max-w-[380px] text-[11px] leading-5 text-slate-500">
    {description}
  </p>

  <div className="mt-4 h-px w-full bg-gradient-to-r from-[#DFAE45]/30 via-[#DFAE45]/10 to-transparent" />
</div>


);
}

/* =============================================================
TRUST ITEM
============================================================= */

function TrustItem({
icon,
title,
subtitle,
bordered = false,
}: {
icon: React.ReactNode;
title: string;
subtitle: string;
bordered?: boolean;
}) {
return (
<div
className={`         flex
        items-center
        justify-center
        gap-2
        px-2
        py-3
        ${bordered ? "border-l border-white/[0.06]" : ""}
      `}
> <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#DFAE45]/[0.08] text-[#DFAE45]">
{icon} </div>


  <div>
    <p className="text-[9px] font-bold text-slate-200">
      {title}
    </p>

    <p className="text-[8px] text-slate-600">
      {subtitle}
    </p>
  </div>
</div>


);
}

/* =============================================================
CITY CARD
============================================================= */

function CityCard({
city,
available,
}: {
city: string;
available: string;
}) {
return ( <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] px-2 py-3 text-center">


  <MapPin
    size={14}
    className="mx-auto text-[#DFAE45]"
  />

  <p className="mt-1.5 text-[10px] font-bold text-slate-200">
    {city}
  </p>

  <p className="mt-0.5 text-[8px] text-slate-600">
    {available}
  </p>
</div>


);
}

/* =============================================================
MINI TRUST
============================================================= */

function MiniTrust({
icon,
text,
}: {
icon: React.ReactNode;
text: string;
}) {
return ( <div className="flex items-center gap-1.5">


  <span className="text-[#DFAE45]">
    {icon}
  </span>

  <span className="text-[9px] font-semibold text-slate-500">
    {text}
  </span>

</div>


);
}
