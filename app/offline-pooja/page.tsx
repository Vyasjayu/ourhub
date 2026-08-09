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
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden pb-24">
        <OfflineHeader />

        <LocationSearch />

        <OfflineHero />

        <HowItWorks />

        <PopularPoojas />

        <WhyOfflinePooja />

        <NearbyTemples />

        {/* Help section */}
        <section className="mt-6 px-4">
          <div className="flex items-center justify-between rounded-2xl border border-yellow-500/10 bg-[#0b1118] p-3">
            <div>
              <h3 className="text-sm font-semibold text-white">
                Need Help?
              </h3>

              <p className="mt-1 text-[10px] text-gray-400">
                Talk to our support team
              </p>
            </div>

            <button className="rounded-xl bg-yellow-400 px-5 py-3 text-xs font-bold text-black">
              Continue Booking →
            </button>
          </div>
        </section>

        <OfflineBottomNav />
      </div>
    </main>
  );
}