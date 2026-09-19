"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Home,
  IndianRupee,
  MapPin,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Sofa,
  Star,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

/* ============================================================
   SERVICE DATA
============================================================ */

const services = [
  {
    id: "living-room",
    title: {
      en: "Living Room",
      hi: "लिविंग रूम",
    },
    description: {
      en: "Furniture, lighting & décor",
      hi: "फर्नीचर, लाइटिंग और डेकोर",
    },
    icon: Sofa,
  },
  {
    id: "modular-kitchen",
    title: {
      en: "Modular Kitchen",
      hi: "मॉड्यूलर किचन",
    },
    description: {
      en: "Smart layouts & premium finishes",
      hi: "स्मार्ट लेआउट और प्रीमियम फिनिश",
    },
    icon: Home,
  },
  {
    id: "bedroom",
    title: {
      en: "Bedroom",
      hi: "बेडरूम",
    },
    description: {
      en: "Comfortable & personalized designs",
      hi: "आरामदायक और पर्सनलाइज्ड डिजाइन",
    },
    icon: Home,
  },
  {
    id: "painting",
    title: {
      en: "Painting & Wall Design",
      hi: "पेंटिंग और वॉल डिजाइन",
    },
    description: {
      en: "Textures, wallpapers & feature walls",
      hi: "टेक्सचर, वॉलपेपर और फीचर वॉल",
    },
    icon: Paintbrush,
  },
  {
    id: "ceiling",
    title: {
      en: "False Ceiling & Lighting",
      hi: "फॉल्स सीलिंग और लाइटिंग",
    },
    description: {
      en: "Modern ceilings & ambient lighting",
      hi: "मॉडर्न सीलिंग और एम्बिएंट लाइटिंग",
    },
    icon: Ruler,
  },
];

/* ============================================================
   BENEFITS
============================================================ */

const benefits = [
  {
    en: "Verified interior professionals",
    hi: "वेरिफाइड इंटीरियर प्रोफेशनल्स",
  },
  {
    en: "Transparent project estimates",
    hi: "पारदर्शी प्रोजेक्ट एस्टिमेट",
  },
  {
    en: "Design according to your budget",
    hi: "आपके बजट के अनुसार डिजाइन",
  },
  {
    en: "End-to-end project assistance",
    hi: "एंड-टू-एंड प्रोजेक्ट सहायता",
  },
];

/* ============================================================
   PROCESS STEPS
============================================================ */

const processSteps = [
  {
    number: "01",
    title: {
      en: "Share Your Requirement",
      hi: "अपनी जरूरत बताएं",
    },
    description: {
      en: "Tell us about your home, style and budget.",
      hi: "अपने घर, पसंदीदा स्टाइल और बजट के बारे में बताएं।",
    },
  },
  {
    number: "02",
    title: {
      en: "Meet Your Expert",
      hi: "अपने एक्सपर्ट से मिलें",
    },
    description: {
      en: "Our expert understands your requirements.",
      hi: "हमारे एक्सपर्ट आपकी जरूरतों को समझेंगे।",
    },
  },
  {
    number: "03",
    title: {
      en: "Get Design & Estimate",
      hi: "डिजाइन और एस्टिमेट पाएं",
    },
    description: {
      en: "Receive your personalized design and estimate.",
      hi: "अपना पर्सनलाइज्ड डिजाइन और एस्टिमेट पाएं।",
    },
  },
  {
    number: "04",
    title: {
      en: "Start Your Project",
      hi: "अपना प्रोजेक्ट शुरू करें",
    },
    description: {
      en: "Finalize the plan and begin your project.",
      hi: "प्लान फाइनल करें और अपना प्रोजेक्ट शुरू करें।",
    },
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function InteriorPage() {
  const router = useRouter();

  const { language } = useLanguage();
  const isHindi = language === "hi";

  /* ==========================================================
     TRANSLATIONS
  ========================================================== */

  const t = {
    back: isHindi ? "वापस जाएं" : "Go back",

    home: isHindi ? "होम" : "Home",

    interiorDesign: isHindi
      ? "इंटीरियर डिजाइन"
      : "Interior Design",

    premiumInteriors: isHindi
      ? "प्रीमियम इंटीरियर्स"
      : "Premium Interiors",

    beautiful: isHindi
      ? "खूबसूरत"
      : "Beautiful",

    spaces: isHindi
      ? "स्पेसेज।"
      : "Spaces.",

    designedForYou: isHindi
      ? "आपके लिए डिजाइन किए गए।"
      : "Designed For You.",

    heroDescription: isHindi
      ? "हमारे वेरिफाइड इंटीरियर एक्सपर्ट्स के साथ खूबसूरत, फंक्शनल और आरामदायक घर बनाएं।"
      : "Create a beautiful, functional and comfortable home with our verified interior experts.",

    locations: isHindi
      ? "इंदौर · उज्जैन · रतलाम"
      : "Indore · Ujjain · Ratlam",

    modern: isHindi ? "मॉडर्न" : "Modern",
    design: isHindi ? "डिजाइन" : "Design",

    custom: isHindi ? "कस्टम" : "Custom",
    planning: isHindi ? "प्लानिंग" : "Planning",

    verified: isHindi ? "वेरिफाइड" : "Verified",
    experts: isHindi ? "एक्सपर्ट्स" : "Experts",

    consultation: isHindi
      ? "कंसल्टेशन"
      : "Consultation",

    expertContact: isHindi
      ? "एक्सपर्ट कॉन्टैक्ट"
      : "Expert Contact",

    serviceArea: isHindi
      ? "सर्विस एरिया"
      : "Service Area",

    ourServices: isHindi
      ? "हमारी सर्विसेज"
      : "Our Services",

    completeInteriorSolutions: isHindi
      ? "कम्प्लीट इंटीरियर सॉल्यूशंस"
      : "Complete Interior Solutions",

    servicesDescription: isHindi
      ? "अपने सपनों का घर बनाने के लिए जरूरी सभी इंटीरियर सर्विसेज।"
      : "Everything you need to create your dream home.",

    whyOurHub: isHindi
      ? "OURHUB क्यों"
      : "WHY OURHUB",

    interiorWithoutHassle: isHindi
      ? "बिना परेशानी के इंटीरियर"
      : "Interior Without The Hassle",

    simpleProcess: isHindi
      ? "आसान प्रक्रिया"
      : "Simple Process",

    fromIdeaToHome: isHindi
      ? "आइडिया से घर तक"
      : "From Idea To Home",

    review: isHindi
      ? "“OurHub ने हमारे बजट के अनुसार इंटीरियर प्लान करने में मदद की। पूरी प्रक्रिया आसान और पारदर्शी रही।”"
      : "“OurHub helped us plan our interiors according to our budget. The process was simple and transparent.”",

    customer: isHindi
      ? "— OurHub ग्राहक"
      : "— OurHub Customer",

    freeConsultation: isHindi
      ? "फ्री कंसल्टेशन"
      : "FREE CONSULTATION",

    talkToExpert: isHindi
      ? "इंटीरियर एक्सपर्ट से बात करें"
      : "Talk To An Interior Expert",
  };

  return (
    <div className="min-h-screen bg-[#020202]">
      {/* =====================================================
          MOBILE APP CONTAINER
      ====================================================== */}

      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#070707] text-white">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="sticky top-0 z-50 h-[56px] border-b border-white/[0.08] bg-[#070707]/95 backdrop-blur-xl">
          <div className="flex h-full items-center justify-between px-4">
            {/* BACK */}

            <button
              type="button"
              onClick={() => router.back()}
              aria-label={t.back}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            >
              <ArrowLeft
                size={17}
                strokeWidth={2}
              />
            </button>

            {/* TITLE */}

            <div className="text-center">
              <p className="text-[7px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="mt-[1px] text-[12px] font-semibold">
                {t.interiorDesign}
              </p>
            </div>

            {/* HOME */}

            <button
              type="button"
              onClick={() => router.push("/")}
              aria-label={t.home}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            >
              <Home size={16} />
            </button>
          </div>
        </header>

        {/* =====================================================
            PAGE CONTENT
        ====================================================== */}

        <div className="overflow-hidden">
          {/* ===================================================
              HERO
          ==================================================== */}

          <section className="px-3 pt-3">
            <div className="relative h-[365px] overflow-hidden rounded-[22px] border border-[#DFAE45]/20 bg-[#100e0a]">
              {/* GLOW */}

              <div className="absolute -right-[80px] -top-[80px] h-[230px] w-[230px] rounded-full bg-[#DFAE45]/10 blur-[70px]" />

              <div className="absolute -bottom-[100px] -left-[100px] h-[220px] w-[220px] rounded-full bg-[#DFAE45]/5 blur-[70px]" />

              {/* DECORATIVE LINES */}

              <div className="absolute right-[-35px] top-[80px] h-[1px] w-[150px] rotate-[-35deg] bg-[#DFAE45]/10" />

              <div className="absolute right-[-35px] top-[110px] h-[1px] w-[150px] rotate-[-35deg] bg-[#DFAE45]/10" />

              <div className="absolute right-[-35px] top-[140px] h-[1px] w-[150px] rotate-[-35deg] bg-[#DFAE45]/10" />

              <div className="relative z-10 flex h-full flex-col justify-between p-5">
                <div>
                  {/* BADGE */}

                  <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-2.5 py-1.5">
                    <Sparkles
                      size={9}
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[7px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                      {t.premiumInteriors}
                    </span>
                  </div>

                  {/* HEADING */}

                  <h1 className="max-w-[300px] text-[31px] font-extrabold leading-[1.04] tracking-[-1px]">
                    {t.beautiful}

                    <br />

                    <span className="text-[#DFAE45]">
                      {t.spaces}
                    </span>

                    <br />

                    {t.designedForYou}
                  </h1>

                  {/* DESCRIPTION */}

                  <p className="mt-4 max-w-[285px] text-[11px] leading-[18px] text-white/45">
                    {t.heroDescription}
                  </p>

                  {/* LOCATION */}

                  <div className="mt-4 flex items-center gap-1.5">
                    <MapPin
                      size={12}
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[9px] text-white/45">
                      {t.locations}
                    </span>
                  </div>
                </div>

                {/* HERO BOTTOM CARDS */}

                <div className="grid grid-cols-3 gap-2">
                  <MiniFeature
                    icon={<Sofa size={14} />}
                    title={t.modern}
                    subtitle={t.design}
                  />

                  <MiniFeature
                    icon={<Ruler size={14} />}
                    title={t.custom}
                    subtitle={t.planning}
                  />

                  <MiniFeature
                    icon={<ShieldCheck size={14} />}
                    title={t.verified}
                    subtitle={t.experts}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ===================================================
              QUICK STATS
          ==================================================== */}

          <section className="px-3 pt-3">
            <div className="grid grid-cols-3 gap-2">
              <Stat
                icon={<IndianRupee size={14} />}
                value="₹1,499"
                label={t.consultation}
              />

              <Stat
                icon={<Clock3 size={14} />}
                value="24–48 Hrs"
                label={t.expertContact}
              />

              <Stat
                icon={<MapPin size={14} />}
                value="3 Cities"
                label={t.serviceArea}
              />
            </div>
          </section>

          {/* ===================================================
              SERVICES
          ==================================================== */}

          <section className="px-3 pt-9">
            <SectionHeading
              small={t.ourServices}
              title={t.completeInteriorSolutions}
              description={t.servicesDescription}
            />

            <div className="mt-4 space-y-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Service
                    key={service.id}
                    icon={<Icon size={17} />}
                    title={service.title[language]}
                    description={
                      service.description[language]
                    }
                  />
                );
              })}
            </div>
          </section>

          {/* ===================================================
              WHY OURHUB
          ==================================================== */}

          <section className="px-3 pt-9">
            <div className="rounded-[20px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.035] p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <ShieldCheck
                    size={18}
                    className="text-[#DFAE45]"
                  />
                </div>

                <div>
                  <p className="text-[7px] font-bold uppercase tracking-[2.5px] text-[#DFAE45]">
                    {t.whyOurHub}
                  </p>

                  <h2 className="mt-1 text-[14px] font-bold">
                    {t.interiorWithoutHassle}
                  </h2>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5">
                {benefits.map((benefit) => (
                  <Benefit
                    key={benefit.en}
                    text={benefit[language]}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* ===================================================
              PROCESS
          ==================================================== */}

          <section className="px-3 pt-9">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="h-px w-6 bg-[#DFAE45]/40" />

                <span className="text-[7px] font-bold uppercase tracking-[2.5px] text-[#DFAE45]">
                  {t.simpleProcess}
                </span>

                <span className="h-px w-6 bg-[#DFAE45]/40" />
              </div>

              <h2 className="mt-2 text-[21px] font-bold">
                {t.fromIdeaToHome}
              </h2>
            </div>

            <div className="mt-4 space-y-2">
              {processSteps.map((step) => (
                <Step
                  key={step.number}
                  number={step.number}
                  title={step.title[language]}
                  description={
                    step.description[language]
                  }
                />
              ))}
            </div>
          </section>

          {/* ===================================================
              REVIEW
          ==================================================== */}

          <section className="px-3 pb-[105px] pt-9">
            <div className="rounded-[19px] border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={12}
                    className="fill-[#DFAE45] text-[#DFAE45]"
                  />
                ))}

                <span className="ml-1 text-[9px] text-white/35">
                  4.9/5
                </span>
              </div>

              <p className="mt-3 text-[11px] leading-[18px] text-white/55">
                {t.review}
              </p>

              <p className="mt-3 text-[8px] text-white/30">
                {t.customer}
              </p>
            </div>
          </section>
        </div>

        {/* =====================================================
            MOBILE BOTTOM CTA
        ====================================================== */}

        <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-[#070707]/95 px-3 py-2.5 backdrop-blur-xl">
          <div className="mx-auto w-full max-w-[430px]">
            <button
              type="button"
              onClick={() =>
                router.push(
                  "/construction/interior/book",
                )
              }
              className="flex h-[53px] w-full items-center justify-between rounded-[17px] bg-[#DFAE45] px-4 text-black shadow-[0_8px_30px_rgba(223,174,69,0.15)] active:scale-[0.98]"
            >
              <div className="text-left">
                <p className="text-[7px] font-bold uppercase tracking-[2px] opacity-50">
                  {t.freeConsultation}
                </p>

                <p className="mt-[2px] text-[13px] font-extrabold">
                  {t.talkToExpert}
                </p>
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">
                <ArrowRight size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MINI FEATURE
============================================================ */

function MiniFeature({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-[13px] border border-white/10 bg-black/20 p-2.5">
      <div className="text-[#DFAE45]">
        {icon}
      </div>

      <p className="mt-1.5 text-[8px] font-bold">
        {title}
      </p>

      <p className="text-[7px] text-white/30">
        {subtitle}
      </p>
    </div>
  );
}

/* ============================================================
   STAT
============================================================ */

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[15px] border border-white/10 bg-white/[0.035] p-3">
      <div className="text-[#DFAE45]">
        {icon}
      </div>

      <p className="mt-2 text-[10px] font-bold">
        {value}
      </p>

      <p className="mt-[2px] text-[7px] text-white/30">
        {label}
      </p>
    </div>
  );
}

/* ============================================================
   SECTION HEADING
============================================================ */

function SectionHeading({
  small,
  title,
  description,
}: {
  small: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="h-px w-6 bg-[#DFAE45]/50" />

        <span className="text-[7px] font-bold uppercase tracking-[2.5px] text-[#DFAE45]">
          {small}
        </span>
      </div>

      <h2 className="mt-2 text-[21px] font-bold tracking-[-0.4px]">
        {title}
      </h2>

      <p className="mt-1 text-[10px] leading-[17px] text-white/35">
        {description}
      </p>
    </>
  );
}

/* ============================================================
   SERVICE
============================================================ */

function Service({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex min-h-[65px] items-center gap-3 rounded-[17px] border border-white/10 bg-white/[0.035] px-3 py-2.5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[#DFAE45]">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-[11px] font-bold">
          {title}
        </h3>

        <p className="mt-[2px] truncate text-[8px] text-white/30">
          {description}
        </p>
      </div>

      <ChevronRight
        size={14}
        className="shrink-0 text-white/20"
      />
    </div>
  );
}

/* ============================================================
   BENEFIT
============================================================ */

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DFAE45]/10">
        <Check
          size={10}
          className="text-[#DFAE45]"
          strokeWidth={3}
        />
      </div>

      <span className="text-[9px] text-white/55">
        {text}
      </span>
    </div>
  );
}

/* ============================================================
   STEP
============================================================ */

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[17px] border border-white/10 bg-white/[0.025] p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10 text-[9px] font-bold text-[#DFAE45]">
        {number}
      </div>

      <div className="min-w-0">
        <h3 className="text-[10px] font-bold">
          {title}
        </h3>

        <p className="mt-[2px] text-[8px] leading-[14px] text-white/30">
          {description}
        </p>
      </div>
    </div>
  );
}