
import Header from "@/components/online-pooja/Header";
import SearchSection from "@/components/online-pooja/SearchSection";
import HeroBanner from "@/components/online-pooja/HeroBanner";
import PopularCategory from "@/components/online-pooja/PopularCategory";
import WhyChoose from "@/components/online-pooja/WhyChoose";
import HowItWorks from "@/components/online-pooja/HowItWorks";
import PoojaList from "@/components/pooja/PoojaList";
import HelpFooter from "@/components/online-pooja/HelpFooter";
import StickyBooking from "@/components/online-pooja/StickyBooking";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#03070D] text-white">
      {/* =====================================================
          DESKTOP BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Top gold glow */}
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.055] blur-[120px]" />

        {/* Left spiritual glow */}
        <div className="absolute -left-[180px] top-[35%] h-[360px] w-[360px] rounded-full bg-[#7C3AED]/[0.035] blur-[120px]" />

        {/* Right gold glow */}
        <div className="absolute -right-[180px] top-[65%] h-[360px] w-[360px] rounded-full bg-[#DFAE45]/[0.035] blur-[120px]" />
      </div>

      {/* =====================================================
          MOBILE APP CONTAINER
      ====================================================== */}
      <div
        className="
          relative
          mx-auto
          min-h-screen
          w-full
          max-w-[430px]
          overflow-hidden
          bg-[#071424]
          shadow-[0_0_80px_rgba(0,0,0,0.55)]
        "
      >
        {/* ===================================================
            TOP AMBIENT LIGHT
        ==================================================== */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[240px] w-[380px] -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.035] blur-[100px]" />

        {/* ===================================================
            MAIN SCROLL CONTENT
        ==================================================== */}
        <div className="relative px-4 pb-36">

          {/* =================================================
              HEADER
          ================================================== */}
          <header className="relative z-30">
            <Header />
          </header>

          {/* =================================================
              SEARCH
          ================================================== */}
          <section className="relative z-20 mt-3">
            <SearchSection />
          </section>

          {/* =================================================
              HERO
          ================================================== */}
          <section className="relative mt-4">
            <HeroBanner />
          </section>

          {/* =================================================
              TRUST BAR
          ================================================== */}
          <section className="relative mt-4">
            <div
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/[0.06]
                bg-white/[0.025]
                px-3
                py-3
                backdrop-blur-xl
              "
            >
              {/* Verified */}
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#DFAE45]/15 bg-[#DFAE45]/[0.07]">
                  <span className="text-[11px] text-[#E7B94F]">✓</span>
                </div>

                <div>
                  <p className="text-[9px] font-semibold text-white/70">
                    Verified
                  </p>
                  <p className="text-[8px] text-white/30">
                    Pandits
                  </p>
                </div>
              </div>

              <div className="h-6 w-px bg-white/[0.07]" />

              {/* Authentic */}
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#DFAE45]/15 bg-[#DFAE45]/[0.07]">
                  <span className="text-[11px] text-[#E7B94F]">✦</span>
                </div>

                <div>
                  <p className="text-[9px] font-semibold text-white/70">
                    Authentic
                  </p>
                  <p className="text-[8px] text-white/30">
                    Rituals
                  </p>
                </div>
              </div>

              <div className="h-6 w-px bg-white/[0.07]" />

              {/* Secure */}
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#DFAE45]/15 bg-[#DFAE45]/[0.07]">
                  <span className="text-[11px] text-[#E7B94F]">◆</span>
                </div>

                <div>
                  <p className="text-[9px] font-semibold text-white/70">
                    Secure
                  </p>
                  <p className="text-[8px] text-white/30">
                    Payments
                  </p>
                </div>
              </div>

              <div className="h-6 w-px bg-white/[0.07]" />

              {/* Support */}
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#DFAE45]/15 bg-[#DFAE45]/[0.07]">
                  <span className="text-[10px] font-bold text-[#E7B94F]">
                    24
                  </span>
                </div>

                <div>
                  <p className="text-[9px] font-semibold text-white/70">
                    Support
                  </p>
                  <p className="text-[8px] text-white/30">
                    Always Here
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              POPULAR CATEGORY
          ================================================== */}
          <section className="relative mt-8">
            <PopularCategory />
          </section>

          {/* GOLD DIVIDER */}
          <div className="my-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#DFAE45]/20" />

            <div className="h-1 w-1 rounded-full bg-[#DFAE45]/60" />

            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#DFAE45]/20" />
          </div>

          {/* =================================================
              WHY CHOOSE
          ================================================== */}
          <section className="relative">
            <WhyChoose />
          </section>

          {/* =================================================
              HOW IT WORKS
          ================================================== */}
          <section className="relative mt-9">
            <HowItWorks />
          </section>

          {/* =================================================
              POoja LIST
          ================================================== */}
          <section className="relative mt-2">
            <PoojaList />
          </section>

          {/* =================================================
              MID PAGE TRUST MESSAGE
          ================================================== */}
          <section className="relative mt-9 overflow-hidden rounded-[26px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#151109] via-[#0A0E15] to-[#07101C] p-5">

            {/* Glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#DFAE45]/10 blur-[55px]" />

            <div className="relative flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/[0.08]">
                <span className="text-lg text-[#E7B94F]">
                  ✦
                </span>
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]">
                  Divine Experience
                </p>

                <h3 className="mt-1 text-[16px] font-bold text-white">
                  Your devotion, our responsibility.
                </h3>

                <p className="mt-1.5 text-[10px] leading-5 text-white/40">
                  Experience traditional pooja rituals with
                  trusted pandits from the comfort of your home.
                </p>
              </div>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/35 to-transparent" />
          </section>

          {/* =================================================
              HELP FOOTER
          ================================================== */}
          <section className="relative mt-9">
            <HelpFooter />
          </section>

          {/* =================================================
              BRAND FOOTER
          ================================================== */}
          <footer className="relative mt-8 pb-3 text-center">
            <div className="mx-auto mb-3 h-px w-20 bg-gradient-to-r from-transparent via-[#DFAE45]/35 to-transparent" />

            <p className="text-[10px] font-bold tracking-[0.3em] text-[#DFAE45]/70">
              OURHUB
            </p>

            <p className="mt-1 text-[8px] tracking-wide text-white/20">
              Divine rituals • Trusted pandits • Peace of mind
            </p>
          </footer>
        </div>

        {/* ===================================================
            STICKY BOOKING CTA
        ==================================================== */}
        <StickyBooking />
      </div>
    </main>
  );
}

