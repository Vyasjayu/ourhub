
"use client";

import {
  CalendarDays,
  Grid2X2,
  Home,
  UserRound,
  WalletCards,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { useLanguage } from "@/context/LanguageContext";

const items = [
  {
    label: {
      en: "Home",
      hi: "होम",
    },
    icon: Home,
    path: "/offline-pooja",
  },
  {
    label: {
      en: "Categories",
      hi: "श्रेणियां",
    },
    icon: Grid2X2,
    path: "/offline-pooja/poojas",
  },
  {
    label: {
      en: "Bookings",
      hi: "बुकिंग",
    },
    icon: CalendarDays,
    path: "/offline-pooja/bookings",
  },
  {
    label: {
      en: "Wallet",
      hi: "वॉलेट",
    },
    icon: WalletCards,
    path: "/wallet",
  },
  {
    label: {
      en: "Profile",
      hi: "प्रोफ़ाइल",
    },
    icon: UserRound,
    path: "/profile",
  },
];

export default function OfflineBottomNav() {
  const router = useRouter();
  const pathname = usePathname();
  const { language } = useLanguage();

  const isHindi = language === "hi";

  return (
    <>
      {/* =====================================================
          BOTTOM AMBIENT GLOW
      ====================================================== */}

      <div className="pointer-events-none fixed bottom-0 left-1/2 z-40 h-28 w-full max-w-[480px] -translate-x-1/2 bg-gradient-to-t from-[#DFAE45]/[0.035] via-transparent to-transparent" />

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[480px] -translate-x-1/2 px-2 pb-2">
        <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#07111B]/[0.96] px-1.5 pt-2 shadow-[0_-10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">

          {/* Top Gold Highlight */}

          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#DFAE45]/70 to-transparent" />

          {/* Ambient Glow */}

          <div className="pointer-events-none absolute -top-16 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.035] blur-3xl" />

          {/* =================================================
              NAV ITEMS
          ================================================== */}

          <div className="relative grid grid-cols-5">
            {items.map((item) => {
              const Icon = item.icon;

              const active =
                pathname === item.path ||
                (item.path === "/offline-pooja" &&
                  pathname === "/offline-pooja/");

              const label = isHindi
                ? item.label.hi
                : item.label.en;

              return (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => router.push(item.path)}
                  aria-label={label}
                  className="group relative flex min-h-[62px] flex-col items-center justify-center"
                >
                  {/* =================================================
                      ACTIVE GLOW
                  ================================================== */}

                  {active && (
                    <span className="pointer-events-none absolute top-0 h-8 w-12 rounded-full bg-[#DFAE45]/[0.10] blur-xl" />
                  )}

                  {/* =================================================
                      ACTIVE TOP INDICATOR
                  ================================================== */}

                  <span
                    className={`absolute top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#DFAE45] to-transparent transition-all duration-300 ${
                      active
                        ? "w-9 opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />

                  {/* =================================================
                      ICON CONTAINER
                  ================================================== */}

                  <span
                    className={`relative flex h-9 w-10 items-center justify-center rounded-2xl transition-all duration-300 ${
                      active
                        ? "border border-[#DFAE45]/20 bg-[#DFAE45]/[0.08]"
                        : "border border-transparent bg-transparent group-hover:border-white/[0.05] group-hover:bg-white/[0.025]"
                    }`}
                  >
                    <Icon
                      size={20}
                      strokeWidth={active ? 2.3 : 1.7}
                      className={`transition-all duration-300 ${
                        active
                          ? "text-[#F3C75F] drop-shadow-[0_0_8px_rgba(243,199,95,0.35)]"
                          : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    />

                    {/* Active Dot */}

                    {active && (
                      <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5 items-center justify-center rounded-full border-2 border-[#07111B] bg-[#DFAE45]">
                        <span className="h-1 w-1 rounded-full bg-white/80" />
                      </span>
                    )}
                  </span>

                  {/* =================================================
                      LABEL
                  ================================================== */}

                  <span
                    className={`mt-1 text-[8px] tracking-tight transition-all duration-300 ${
                      active
                        ? "font-bold text-[#F3C75F]"
                        : "font-medium text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    {label}
                  </span>

                  {/* =================================================
                      ACTIVE BOTTOM DOT
                  ================================================== */}

                  <span
                    className={`mt-1 h-1 rounded-full bg-[#DFAE45] transition-all duration-300 ${
                      active
                        ? "w-1 opacity-100 shadow-[0_0_7px_rgba(223,174,69,0.7)]"
                        : "w-0 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Bottom Accent */}

          <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Safe Area */}

        <div className="h-1" />
      </nav>
    </>
  );
}

