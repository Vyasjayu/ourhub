import OfflineHeader from "@/components/offline-pooja/OfflineHeader";
import LocationSearch from "@/components/offline-pooja/LocationSearch";
import OfflineHero from "@/components/offline-pooja/OfflineHero";
import HowItWorks from "@/components/offline-pooja/HowItWorks";
import PopularPoojas from "@/components/offline-pooja/PopularPoojas";
import WhyOfflinePooja from "@/components/offline-pooja/WhyOfflinePooja";
import NearbyTemples from "@/components/offline-pooja/NearbyTemples";
import OfflineBottomNav from "@/components/offline-pooja/OfflineBottomNav";

export default function OfflinePoojaPage() {
  return (
    <main className="min-h-screen bg-[#03070b] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden pb-28">

        {/* HEADER */}
        <OfflineHeader />

        {/* LOCATION */}
        <LocationSearch />

        {/* HERO */}
        <OfflineHero />

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* POPULAR POOJAS */}
        <PopularPoojas />

        {/* WHY OFFLINE POOJA */}
        <WhyOfflinePooja />

        {/* NEARBY TEMPLES */}
        <NearbyTemples />

        {/* HOME / TEMPLE POoja OPTIONS */}
        <section className="mt-7 px-4">
          <div className="overflow-hidden rounded-3xl border border-yellow-500/15 bg-gradient-to-br from-[#101c2a] via-[#0b141f] to-[#070d14]">

            {/* TOP */}
            <div className="border-b border-white/5 p-5">
              <div className="flex items-center gap-2">
                <span className="text-xl">🛕</span>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-yellow-400">
                    Flexible Pooja Experience
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-white">
                    Pooja Kahan Karwani Hai?
                  </h2>
                </div>
              </div>

              <p className="mt-2 text-xs leading-5 text-gray-400">
                Aap apni convenience ke according mandir ya
                ghar par pooja book kar sakte hain.
              </p>
            </div>

            {/* OPTIONS */}
            <div className="grid grid-cols-2 gap-3 p-4">

              {/* TEMPLE */}
              <button
                type="button"
                className="group rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-left transition hover:border-yellow-400/40 hover:bg-yellow-500/10 active:scale-[0.98]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1a3047] text-2xl">
                  🛕
                </div>

                <h3 className="mt-3 text-sm font-bold">
                  Mandir Mein
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-gray-500">
                  Selected temple par pooja
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-green-400">
                    Authentic Ritual
                  </span>

                  <span className="text-yellow-400">
                    →
                  </span>
                </div>
              </button>

              {/* HOME */}
              <button
                type="button"
                className="group rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-4 text-left transition hover:border-yellow-400/40 hover:bg-yellow-500/10 active:scale-[0.98]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1a3047] text-2xl">
                  🏠
                </div>

                <h3 className="mt-3 text-sm font-bold">
                  Ghar Par
                </h3>

                <p className="mt-1 text-[10px] leading-4 text-gray-500">
                  Pandit ji ghar par aayenge
                </p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-green-400">
                    Home Service
                  </span>

                  <span className="text-yellow-400">
                    →
                  </span>
                </div>
              </button>

            </div>

            {/* PRICE NOTE */}
            <div className="mx-4 mb-4 rounded-xl border border-white/5 bg-black/20 px-3 py-3">
              <div className="flex items-start gap-2">
                <span className="text-sm">✨</span>

                <div>
                  <p className="text-[10px] font-semibold text-yellow-400">
                    Same Pooja Pricing
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-gray-500">
                    Mandir ya ghar — selected pooja ka base
                    price same rahega. Booking se pehle
                    complete amount clearly show kiya jayega.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="mt-6 px-4">
          <div className="grid grid-cols-3 gap-2">

            <div className="rounded-2xl border border-white/5 bg-[#0b1118] px-2 py-4 text-center">
              <div className="text-lg">✓</div>

              <p className="mt-1 text-[9px] font-semibold text-white">
                Verified
              </p>

              <p className="mt-1 text-[8px] text-gray-500">
                Pandits
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0b1118] px-2 py-4 text-center">
              <div className="text-lg">🛕</div>

              <p className="mt-1 text-[9px] font-semibold text-white">
                Sacred
              </p>

              <p className="mt-1 text-[8px] text-gray-500">
                Rituals
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0b1118] px-2 py-4 text-center">
              <div className="text-lg">🔒</div>

              <p className="mt-1 text-[9px] font-semibold text-white">
                Secure
              </p>

              <p className="mt-1 text-[8px] text-gray-500">
                Booking
              </p>
            </div>

          </div>
        </section>

        {/* HELP */}
        <section className="mt-6 px-4">
          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/15 bg-gradient-to-r from-[#17263a] to-[#0b141f] p-4">

            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-yellow-400/5 blur-2xl" />

            <div className="relative flex items-center justify-between gap-4">

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🙏</span>

                  <h3 className="text-sm font-bold text-white">
                    Need Help?
                  </h3>
                </div>

                <p className="mt-1 text-[10px] leading-4 text-gray-400">
                  Pooja booking mein assistance chahiye?
                </p>

                <p className="mt-1 text-[9px] text-yellow-400">
                  Our support team is here for you
                </p>
              </div>

              <button
                type="button"
                className="shrink-0 rounded-xl bg-yellow-400 px-4 py-3 text-[10px] font-bold text-black shadow-lg shadow-yellow-500/10 transition active:scale-95"
              >
                Get Help
              </button>

            </div>
          </div>
        </section>

        {/* BOTTOM NAV */}
        <OfflineBottomNav />

      </div>
    </main>
  );
}