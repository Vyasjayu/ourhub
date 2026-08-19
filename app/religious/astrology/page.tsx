"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  CircleUserRound,
  Heart,
  MessageCircle,
  Phone,
  ScrollText,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import AstrologyHeader from "@/components/astrology/AstrologyHeader";
import AstrologerCard from "@/components/astrology/AstrologerCard";
import AstrologyServices from "@/components/astrology/AstrologyServices";
import BottomNavigation from "@/components/astrology/BottomNavigation";
import FAQ from "@/components/astrology/FAQ";
import FreeKundli from "@/components/astrology/FreeKundli";
import ReviewSection from "@/components/astrology/ReviewSection";
import SearchAstrologer from "@/components/astrology/SearchAstrologer";
import WhyChooseUs from "@/components/astrology/WhyChooseUs";

type Astrologer = {
  _id: string;
  fullName: string;
  displayName: string;
  mobile: string;
  profilePhoto: string;
  category: string;
  city: string;
  state: string;
  experience: string;
  specialization: string;
  languages: string;
  price: string;
  rating: number;
  totalReviews: number;
  totalConsultations: number;
  about: string;

  isVerified?: boolean;
  isActive?: boolean;

  online?: boolean;
  isOnline?: boolean;
  isLive?: boolean;
  status?: string;
};

/* =========================================================
   QUICK ASTROLOGY SERVICES
========================================================= */

const quickServices = [
  {
    title: "कुंडली एआई",
    icon: Sparkles,
    href: "/religious/astrology/kundli",
  },
  {
    title: "कुंडली मिलान",
    icon: Heart,
    href: "/religious/astrology/kundli-milan",
  },
  {
    title: "राशिफल",
    icon: Star,
    href: "/religious/astrology/horoscope",
  },
  {
    title: "फलादेश",
    icon: Sparkles,
    href: "/religious/astrology/faladesh",
  },
];

/* =========================================================
   PROBLEM / LIFE SERVICES
========================================================= */

const problemServices = [
  {
    title: "कार्य क्षेत्र",
    icon: BriefcaseBusiness,
    href: "/religious/astrology/career",
  },
  {
    title: "मानसिक स्वास्थ्य",
    icon: CircleUserRound,
    href: "/religious/astrology/health",
  },
  {
    title: "आज",
    icon: CalendarDays,
    href: "/religious/astrology/today",
  },
  {
    title: "प्रेम",
    icon: Heart,
    href: "/religious/astrology/love",
  },
];

/* =========================================================
   REPORTS
========================================================= */

const reportServices = [
  {
    title: "बृहत कुंडली",
    icon: "📖",
    href: "/religious/astrology/reports/kundli",
  },
  {
    title: "राज योग",
    icon: "👑",
    href: "/religious/astrology/reports/raj-yog",
  },
  {
    title: "वर्ष पत्रिका",
    icon: "📘",
    href: "/religious/astrology/reports/yearly",
  },
  {
    title: "वार्षिक कुंडली",
    icon: "📕",
    href: "/religious/astrology/reports/annual",
  },
];

/* =========================================================
   AI ASTROLOGERS
========================================================= */

const aiAstrologers = [
  {
    name: "टैरो राजीव",
    price: "₹17/मिनट",
    image: "/images/astrology/ai/rajiv.jpg",
  },
  {
    name: "एस्टो लिंडा",
    price: "₹22/मिनट",
    image: "/images/astrology/ai/linda.jpg",
  },
  {
    name: "एस्टो अनन्या",
    price: "₹11/मिनट",
    image: "/images/astrology/ai/ananya.jpg",
  },
  {
    name: "अर्जुन पंडित",
    price: "₹11/मिनट",
    image: "/images/astrology/ai/arjun.jpg",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function JyotishPage() {
  const [astrologers, setAstrologers] = useState<Astrologer[]>([]);
  const [loading, setLoading] = useState(true);

  /* =======================================================
     LOAD ASTROLOGERS
  ======================================================= */

  useEffect(() => {
    loadAstrologers();
  }, []);

  async function loadAstrologers() {
    try {
      const res = await fetch("/api/astrology", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to load astrologers");
      }

      const data = await res.json();

      if (data.success && Array.isArray(data.astrologers)) {
        setAstrologers(data.astrologers);
      } else {
        setAstrologers([]);
      }
    } catch (error) {
      console.error("Astrologer loading error:", error);
      setAstrologers([]);
    } finally {
      setLoading(false);
    }
  }

  /* =======================================================
     LIVE ASTROLOGERS
  ======================================================= */

  const onlineAstrologers = astrologers.filter((astro) => {
  return (
    astro.online === true ||
    (astro as any).isOnline === true ||
    (astro as any).isLive === true ||
    (astro as any).status === "online" ||
    (astro as any).status === "live"
  );
});

  return (
    <main className="min-h-screen bg-black pb-24">
      {/* ===================================================
          MOBILE APP WIDTH
      =================================================== */}

      <div className="mx-auto min-h-screen w-full max-w-md overflow-x-hidden bg-[#050B14] shadow-2xl">
        {/* =================================================
            HEADER
        ================================================= */}

        <AstrologyHeader />

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <div className="px-3">


           {/* =================================================
              5. QUICK ASTROLOGY SERVICES
          ================================================= */}

          <section className="pt-7">
            <div className="grid grid-cols-4 gap-2">
              {quickServices.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="flex h-[66px] w-[66px] items-center justify-center rounded-2xl bg-[#101C30] text-[#FFD400]">
                      <Icon
                        size={34}
                        strokeWidth={1.8}
                      />
                    </div>

                    <p className="mt-2 line-clamp-2 text-[11px] font-semibold text-white">
                      {service.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>

          <section className="pt-7">
            <div className="grid grid-cols-4 gap-2">
              {problemServices.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="flex h-[62px] w-[62px] items-center justify-center rounded-2xl bg-[#101C30] text-[#FFD400]">
                      <Icon
                        size={31}
                        strokeWidth={1.8}
                      />
                    </div>

                    <p className="mt-2 line-clamp-2 text-[11px] font-semibold text-white">
                      {service.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* =================================================
              1. CALL & CHAT
          ================================================= */}

          <section className="pt-5">
            <SectionHeading
              title="कॉल और चैट"
              href="/religious/astrology/astrologers"
            />

            {loading ? (
              <MiniLoader />
            ) : astrologers.length > 0 ? (
              <HorizontalAstrologers
                astrologers={astrologers.slice(0, 8)}
              />
            ) : (
              <EmptyBox message="अभी कोई astrologer उपलब्ध नहीं है" />
            )}
          </section>

          {/* =================================================
              2. LIVE
          ================================================= */}

          <section className="pt-7">
            <SectionHeading
              title="लाइव"
              href="/religious/astrology/astrologers?online=true"
            />

            {loading ? (
              <MiniLoader />
            ) : onlineAstrologers.length > 0 ? (
              <HorizontalAstrologers
                astrologers={onlineAstrologers.slice(0, 8)}
                showOnline
              />
            ) : (
              <EmptyBox message="अभी कोई astrologer live नहीं है" />
            )}
          </section>

          {/* =================================================
              3. MERE PARAMARSH
          ================================================= */}

          <section className="pt-7">
            <SectionHeading
              title="मेरे परामर्श"
              href="/religious/astrology/consultations"
            />

            <div className="flex gap-3 overflow-x-auto pb-2">
              <ConsultationCard
                icon="🧑"
                title="मेरी सलाह"
                href="/religious/astrology/consultations"
              />

              <ConsultationCard
                icon="📅"
                title="मेरी बुकिंग"
                href="/religious/astrology/bookings"
              />

              <ConsultationCard
                icon="💬"
                title="मेरी चैट"
                href="/religious/astrology/chats"
              />

              <ConsultationCard
                icon="📋"
                title="इतिहास"
                href="/religious/astrology/history"
              />
            </div>
          </section>

        

         

          {/* =================================================
              6. DECISION BANNER
          ================================================= */}

          <section className="pt-6">
            <Link
              href="/religious/astrology/ask"
              className="flex h-[76px] items-center justify-between rounded-2xl border border-[#FFD400]/25 bg-[#101C30] px-4"
            >
              <div className="min-w-0">
                <p className="truncate text-[17px] font-bold text-white">
                  आज कोई बड़ा decision लेना है?
                </p>

                <p className="mt-1 text-[10px] text-gray-400">
                  Expert astrologer से सलाह लें
                </p>
              </div>

              <div className="ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFD400] text-black">
                <ArrowRight size={23} />
              </div>
            </Link>
          </section>

          {/* =================================================
              7. LIFE PROBLEMS
          ================================================= */}

          

            {/* =================================================
              4. REPORTS
          ================================================= */}

          <section className="pt-7">
            <SectionHeading
              title="रिपोर्ट्स"
              href="/religious/astrology/reports"
            />

            <div className="grid grid-cols-4 gap-2">
              {reportServices.map((report) => (
                <Link
                  key={report.title}
                  href={report.href}
                  className="flex min-h-[92px] flex-col items-center justify-center rounded-xl border border-[#1E2A3D] bg-[#101C30] px-1 text-center"
                >
                  <div className="text-3xl">
                    {report.icon}
                  </div>

                  <p className="mt-2 line-clamp-2 text-[10px] font-semibold text-white">
                    {report.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* =================================================
              8. KUNDLI AI+
          ================================================= */}

          <section className="pt-7">
            <Link
              href="/religious/astrology/kundli"
              className="relative flex h-[88px] items-center justify-between overflow-hidden rounded-xl border border-[#FFD400]/20 bg-[#101C30]"
            >
              <div className="px-4">
                <p className="text-[24px] font-black text-white">
                  <span className="text-[#FFD400]">
                    kundli ai+
                  </span>
                </p>

                <p className="mt-1 text-[11px] text-gray-300">
                  क्लिक करो, कुंडली पढ़ो
                </p>
              </div>

              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFD400] text-black">
                <Sparkles size={25} />
              </div>
            </Link>
          </section>

          {/* =================================================
              9. AI JYOTISHI
          ================================================= */}

          <section className="pt-7">
            <SectionHeading
              title="AI ज्योतिषी"
              href="/religious/astrology/ai"
            />

            <div className="flex gap-4 overflow-x-auto pb-2">
              {aiAstrologers.map((astro) => (
                <Link
                  key={astro.name}
                  href="/religious/astrology/ai"
                  className="w-[86px] shrink-0 text-center"
                >
                  <div className="mx-auto flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-full border-2 border-[#FFD400] bg-[#101C30]">
                    <img
                      src={astro.image}
                      alt={astro.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <span className="absolute text-3xl">
                      🔮
                    </span>
                  </div>

                  <p className="mt-2 truncate text-[11px] font-bold text-white">
                    {astro.name}
                  </p>

                  <p className="mt-1 text-[9px] text-gray-400">
                    {astro.price}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* =================================================
              10. SEARCH ASTROLOGER
          ================================================= */}

          <section className="pt-7">
            <SearchAstrologer />
          </section>

          {/* =================================================
              11. TOP ASTROLOGERS
          ================================================= */}

          {/* =================================================
    TOP ASTROLOGERS - HORIZONTAL
================================================= */}

          <section className="pt-7">
            <SectionHeading
              title="Top Astrologers"
              href="/religious/astrology/astrologers"
            />

            {loading ? (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-[105px] shrink-0 animate-pulse text-center"
                  >
                    <div className="mx-auto h-[82px] w-[82px] rounded-full bg-[#17243A]" />

                    <div className="mx-auto mt-2 h-3 w-20 rounded bg-[#17243A]" />

                    <div className="mx-auto mt-2 h-2 w-14 rounded bg-[#17243A]" />
                  </div>
                ))}
              </div>
            ) : astrologers.length === 0 ? (
              <EmptyBox message="No Verified Astrologers Found" />
            ) : (
              <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-hide">
                {astrologers.slice(0, 10).map((astrologer) => (
                  <Link
                    key={astrologer._id}
                    href={`/religious/astrology/${astrologer._id}`}
                    className="w-[105px] shrink-0 text-center"
                  >
                    {/* Profile Image */}
                    <div className="relative mx-auto h-[82px] w-[82px]">
                      <img
                        src={
                          astrologer.profilePhoto ||
                          "/images/astrology/default-astrologer.jpg"
                        }
                        alt={
                          astrologer.displayName ||
                          astrologer.fullName
                        }
                        className="h-full w-full rounded-full border-2 border-[#FFD400] object-cover"
                      />

                      {/* Online Dot */}
                      {astrologer.online && (
                        <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[#050B14] bg-green-500" />
                      )}

                      {/* Verified */}
                      {astrologer.isVerified !== false && (
                        <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD400] text-[10px] text-black">
                          ✓
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <p className="mt-2 truncate text-[12px] font-bold text-white">
                      {astrologer.displayName ||
                        astrologer.fullName}
                    </p>

                    {/* Experience */}
                    <p className="mt-1 truncate text-[9px] text-gray-400">
                      {astrologer.experience || "Expert"}
                    </p>

                    {/* Price */}
                    <p className="mt-1 text-[10px] font-semibold text-[#FFD400]">
                      ₹{astrologer.price || "0"}/मिनट
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </section>

          {/* =================================================
              12. ASTROLOGY SERVICES
          ================================================= */}

          <section className="pt-7">
            <AstrologyServices />
          </section>

          {/* =================================================
              13. WHY CHOOSE OURHUB
          ================================================= */}

          <section className="pt-7">
            <WhyChooseUs />
          </section>

          {/* =================================================
              14. FREE KUNDLI
          ================================================= */}

          <section className="pt-7">
            <FreeKundli />
          </section>

          {/* =================================================
              15. REVIEWS
          ================================================= */}

          <section className="pt-7">
            <ReviewSection />
          </section>

          {/* =================================================
              16. FAQ
          ================================================= */}

          <section className="pt-7">
            <FAQ />
          </section>

          {/* Bottom spacing */}
          <div className="h-28" />
        </div>

        {/* ===================================================
            FIXED CALL + CHAT
        =================================================== */}

        <div className="fixed bottom-[64px] left-1/2 z-40 flex w-full max-w-md -translate-x-1/2 gap-3 bg-[#050B14] px-3 py-2">
          {/* <Link
            href="/religious/astrology/astrologers?mode=call"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#32B85C] text-base font-bold text-white shadow-lg"
          >
            <Phone
              size={22}
              fill="currentColor"
            />

            कॉल
          </Link> */}

          <Link
            href="/religious/astrology/astrologers?mode=chat"
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#2495D5] text-base font-bold text-white shadow-lg"
          >
            <MessageCircle
              size={22}
              fill="currentColor"
            />

            चैट
          </Link>
        </div>

        {/* ===================================================
            BOTTOM NAV
        =================================================== */}

        <BottomNavigation />
      </div>
    </main>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h2 className="text-[20px] font-bold text-white">
        {title}
      </h2>

      <Link
        href={href}
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#FFD400] text-[#FFD400]"
      >
        <ChevronRight size={19} />
      </Link>
    </div>
  );
}

/* =========================================================
   HORIZONTAL ASTROLOGERS
========================================================= */

function HorizontalAstrologers({
  astrologers,
  showOnline = false,
}: {
  astrologers: Astrologer[];
  showOnline?: boolean;
}) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {astrologers.map((astrologer) => (
        <Link
          key={astrologer._id}
          href={`/religious/astrology/${astrologer._id}`}
          className="w-[86px] shrink-0 text-center"
        >
          <div className="relative mx-auto h-[74px] w-[74px]">
            <img
              src={
                astrologer.profilePhoto ||
                "/images/astrology/default-astrologer.jpg"
              }
              alt={
                astrologer.displayName ||
                astrologer.fullName
              }
              className="h-full w-full rounded-full border-2 border-[#FFD400] object-cover"
            />

            {(showOnline || astrologer.online) && (
              <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[#050B14] bg-green-500" />
            )}
          </div>

          <p className="mt-2 truncate text-[11px] font-bold text-white">
            {astrologer.displayName ||
              astrologer.fullName}
          </p>

          <p className="mt-1 text-[9px] text-gray-400">
            ₹{astrologer.price || "0"}/मिनट
          </p>
        </Link>
      ))}
    </div>
  );
}

/* =========================================================
   CONSULTATION CARD
========================================================= */

function ConsultationCard({
  icon,
  title,
  href,
}: {
  icon: string;
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex min-w-[88px] flex-col items-center justify-center rounded-xl border border-[#1E2A3D] bg-[#101C30] px-2 py-4 text-center"
    >
      <span className="text-2xl">
        {icon}
      </span>

      <span className="mt-2 line-clamp-2 text-[10px] font-semibold text-white">
        {title}
      </span>
    </Link>
  );
}

/* =========================================================
   LOADER
========================================================= */

function MiniLoader() {
  return (
    <div className="flex gap-4 overflow-hidden">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="w-[86px] shrink-0 animate-pulse text-center"
        >
          <div className="mx-auto h-[74px] w-[74px] rounded-full bg-[#101C30]" />

          <div className="mx-auto mt-2 h-2 w-14 rounded bg-[#101C30]" />

          <div className="mx-auto mt-2 h-2 w-10 rounded bg-[#101C30]" />
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   EMPTY BOX
========================================================= */

function EmptyBox({
  message,
}: {
  message: string;
}) {
  return (
    <div className="rounded-xl border border-[#1E2A3D] bg-[#101C30] p-5 text-center">
      <Users
        size={26}
        className="mx-auto text-[#FFD400]"
      />

      <p className="mt-2 text-xs text-gray-400">
        {message}
      </p>
    </div>
  );
}

/* =========================================================
   ASTROLOGER SKELETON
========================================================= */

function AstrologerSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">
      <div className="flex gap-3">
        <div className="h-16 w-16 rounded-full bg-[#17243A]" />

        <div className="flex-1">
          <div className="h-3 w-32 rounded bg-[#17243A]" />

          <div className="mt-2 h-2 w-24 rounded bg-[#17243A]" />

          <div className="mt-3 h-2 w-40 rounded bg-[#17243A]" />
        </div>
      </div>

      <div className="mt-4 h-9 rounded-lg bg-[#17243A]" />
    </div>
  );
}