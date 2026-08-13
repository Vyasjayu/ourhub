"use client";

import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Clock3,
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const poojas = [
  {
    slug: "ganesh-pooja",
    name: "Ganesh Pooja",
    description:
      "Remove obstacles and bring success, peace & prosperity.",
    price: 1101,
    duration: "60–90 Minutes",
    icon: "🙏",
  },
  {
    slug: "lakshmi-pooja",
    name: "Lakshmi Pooja",
    description:
      "Attract wealth, happiness and good fortune.",
    price: 1251,
    duration: "60–90 Minutes",
    icon: "🪔",
  },
  {
    slug: "navgrah-shanti-pooja",
    name: "Navgrah Shanti Pooja",
    description:
      "Balance planetary energies and reduce doshas.",
    price: 2101,
    duration: "90–120 Minutes",
    icon: "✨",
  },
  {
    slug: "maha-mrityunjaya-pooja",
    name: "Maha Mrityunjaya Pooja",
    description:
      "For health, peace, protection and positive energy.",
    price: 1501,
    duration: "60–90 Minutes",
    icon: "🔱",
  },
  {
    slug: "shiv-pooja",
    name: "Shiv Pooja",
    description:
      "Seek Lord Shiva's blessings for peace and wellbeing.",
    price: 1500,
    duration: "60–90 Minutes",
    icon: "🔱",
  },
  {
    slug: "hanuman-pooja",
    name: "Hanuman Pooja",
    description:
      "For courage, protection, strength and positivity.",
    price: 1200,
    duration: "60–90 Minutes",
    icon: "🚩",
  },
];

export default function OfflinePoojaSelectionPage() {
  const params = useParams();
  const router = useRouter();

  const slug = String(params.slug || "");

  const pooja = useMemo(() => {
    return poojas.find((item) => item.slug === slug);
  }, [slug]);

  const [mode, setMode] = useState<"temple" | "home" | null>(null);

  const continueBooking = () => {
    if (!pooja) return;

    if (!mode) {
      alert("Please select where you want the pooja.");
      return;
    }

    /*
     * Save current offline booking information.
     * Next page will use this information.
     */
    const existingBooking = {
      poojaSlug: pooja.slug,
      poojaName: pooja.name,
      price: pooja.price,
      duration: pooja.duration,
      poojaMode: mode,
      bookingType:
        mode === "temple"
          ? "Mandir Mein Pooja"
          : "Ghar Par Pooja",
    };

    localStorage.setItem(
      "ourhub-offline-pooja-booking",
      JSON.stringify(existingBooking)
    );

    /*
     * Next step
     */
    router.push(
      `/offline-pooja/${slug}/${mode}`
    );
  };

  if (!pooja) {
    return (
      <main className="min-h-screen bg-[#03070b] px-4 py-12 text-white">
        <div className="mx-auto max-w-md text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#10243b] text-4xl">
            🙏
          </div>

          <h1 className="mt-5 text-xl font-bold">
            Pooja Not Found
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            The selected pooja could not be found.
          </p>

          <button
            onClick={() =>
              router.push("/offline-pooja")
            }
            className="mt-6 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-black"
          >
            Back to Offline Pooja
          </button>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#03070b] text-white">

      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-x-hidden pb-32">

        {/* HEADER */}

        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111d]/95 backdrop-blur-xl">

          <div className="flex h-14 items-center gap-3 px-4">

            <button
              type="button"
              onClick={() =>
                router.push("/offline-pooja")
              }
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 transition active:scale-95"
            >
              <ArrowLeft size={19} />
            </button>

            <div className="min-w-0 flex-1">

              <p className="text-sm font-bold">
                Book Offline Pooja
              </p>

              <p className="text-[9px] text-gray-500">
                OurHub Services
              </p>

            </div>

            <ShieldCheck
              size={20}
              className="text-yellow-400"
            />

          </div>

        </header>

        {/* PROGRESS */}

        <section className="px-4 pt-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-yellow-400">
                Step 1 of 4
              </p>

              <h2 className="mt-1 text-lg font-bold">
                Choose Pooja Location
              </h2>
            </div>

            <span className="text-xs font-semibold text-gray-500">
              25%
            </span>

          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-1/4 rounded-full bg-yellow-400" />
          </div>

        </section>

        {/* POOJA CARD */}

        <section className="px-4 pt-5">

          <div className="overflow-hidden rounded-3xl border border-yellow-500/15 bg-gradient-to-br from-[#132d49] via-[#0c1b2b] to-[#08111b]">

            <div className="p-5">

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#1b3858] text-3xl shadow-inner">
                  {pooja.icon}
                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-yellow-400">
                    Selected Pooja
                  </p>

                  <h1 className="mt-1 text-lg font-bold">
                    {pooja.name}
                  </h1>

                  <div className="mt-2 flex items-center gap-3">

                    <span className="flex items-center gap-1 text-[10px] text-gray-400">
                      <Clock3 size={12} />
                      {pooja.duration}
                    </span>

                    <span className="text-sm font-bold text-yellow-400">
                      ₹
                      {pooja.price.toLocaleString(
                        "en-IN"
                      )}
                    </span>

                  </div>

                </div>

              </div>

              <p className="mt-4 text-[11px] leading-5 text-gray-400">
                {pooja.description}
              </p>

            </div>

            <div className="border-t border-white/5 bg-black/10 px-5 py-3">

              <div className="flex items-center gap-2">

                <Check
                  size={14}
                  className="text-green-400"
                />

                <span className="text-[10px] text-gray-400">
                  Verified pooja service by OurHub
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* LOCATION SELECTION */}

        <section className="px-4 pt-7">

          <div className="mb-4">

            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-yellow-400">
              Select Experience
            </p>

            <h2 className="mt-1 text-base font-bold">
              Pooja Kahan Karwani Hai?
            </h2>

            <p className="mt-1 text-[10px] leading-4 text-gray-500">
              Apni convenience ke according Mandir ya
              Ghar Par Pooja choose karein.
            </p>

          </div>

          {/* TEMPLE */}

          <button
            type="button"
            onClick={() => setMode("temple")}
            className={`mb-4 w-full rounded-3xl border p-4 text-left transition active:scale-[0.99] ${
              mode === "temple"
                ? "border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-500/5"
                : "border-white/10 bg-[#0b1118] hover:border-yellow-500/30"
            }`}
          >

            <div className="flex items-center gap-4">

              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${
                  mode === "temple"
                    ? "bg-yellow-400 text-black"
                    : "bg-[#17263a]"
                }`}
              >
                🛕
              </div>

              <div className="min-w-0 flex-1">

                <div className="flex items-center justify-between gap-2">

                  <h3 className="text-sm font-bold">
                    Mandir Mein Pooja
                  </h3>

                  {mode === "temple" && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-black">
                      <Check size={14} />
                    </div>
                  )}

                </div>

                <p className="mt-1 text-[10px] leading-4 text-gray-500">
                  Selected sacred temple par verified
                  pandit ji pooja perform karenge.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">

                  <span className="rounded-full bg-green-500/10 px-2 py-1 text-[8px] font-semibold text-green-400">
                    Temple Experience
                  </span>

                  <span className="rounded-full bg-white/5 px-2 py-1 text-[8px] text-gray-400">
                    Prasad Available
                  </span>

                </div>

              </div>

            </div>

          </button>

          {/* HOME */}

          <button
            type="button"
            onClick={() => setMode("home")}
            className={`w-full rounded-3xl border p-4 text-left transition active:scale-[0.99] ${
              mode === "home"
                ? "border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-500/5"
                : "border-white/10 bg-[#0b1118] hover:border-yellow-500/30"
            }`}
          >

            <div className="flex items-center gap-4">

              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${
                  mode === "home"
                    ? "bg-yellow-400 text-black"
                    : "bg-[#17263a]"
                }`}
              >
                🏠
              </div>

              <div className="min-w-0 flex-1">

                <div className="flex items-center justify-between gap-2">

                  <h3 className="text-sm font-bold">
                    Ghar Par Pooja
                  </h3>

                  {mode === "home" && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400 text-black">
                      <Check size={14} />
                    </div>
                  )}

                </div>

                <p className="mt-1 text-[10px] leading-4 text-gray-500">
                  Verified pandit ji aapke ghar par
                  aakar pooja perform karenge.
                </p>

                <div className="mt-3 flex flex-wrap gap-2">

                  <span className="rounded-full bg-green-500/10 px-2 py-1 text-[8px] font-semibold text-green-400">
                    Home Service
                  </span>

                  <span className="rounded-full bg-white/5 px-2 py-1 text-[8px] text-gray-400">
                    Convenient
                  </span>

                </div>

              </div>

            </div>

          </button>

        </section>

        {/* PRICE INFORMATION */}

        <section className="px-4 pt-5">

          <div className="rounded-2xl border border-white/5 bg-[#0b1118] p-4">

            <div className="flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10">
                <Sparkles
                  size={17}
                  className="text-yellow-400"
                />
              </div>

              <div>

                <p className="text-xs font-semibold text-yellow-400">
                  Transparent Pricing
                </p>

                <p className="mt-1 text-[10px] leading-5 text-gray-500">
                  Selected pooja ka base price same rahega.
                  Next step par location ke according
                  applicable charges clearly show honge.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* TRUST */}

        <section className="px-4 pt-4">

          <div className="grid grid-cols-3 gap-2">

            <div className="rounded-2xl border border-white/5 bg-[#0b1118] p-3 text-center">

              <ShieldCheck
                size={18}
                className="mx-auto text-green-400"
              />

              <p className="mt-2 text-[9px] font-semibold">
                Verified
              </p>

            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0b1118] p-3 text-center">

              <MapPin
                size={18}
                className="mx-auto text-yellow-400"
              />

              <p className="mt-2 text-[9px] font-semibold">
                Flexible
              </p>

            </div>

            <div className="rounded-2xl border border-white/5 bg-[#0b1118] p-3 text-center">

              <Home
                size={18}
                className="mx-auto text-blue-400"
              />

              <p className="mt-2 text-[9px] font-semibold">
                Convenient
              </p>

            </div>

          </div>

        </section>

      </div>

      {/* STICKY CONTINUE */}

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#07111d]/95 px-4 py-3 backdrop-blur-xl">

        <div className="mx-auto max-w-[480px]">

          <div className="mb-2 flex items-center justify-between">

            <div>

              <p className="text-[9px] text-gray-500">
                Total Pooja Amount
              </p>

              <p className="text-base font-bold text-yellow-400">
                ₹
                {pooja.price.toLocaleString(
                  "en-IN"
                )}
              </p>

            </div>

            <p className="text-[9px] text-gray-500">
              {mode === "temple"
                ? "Mandir Pooja"
                : mode === "home"
                ? "Home Pooja"
                : "Select location"}
            </p>

          </div>

          <button
            type="button"
            onClick={continueBooking}
            disabled={!mode}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 text-sm font-bold text-black shadow-lg shadow-yellow-500/10 transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
          >

            Continue

            <ChevronRight size={18} />

          </button>

        </div>

      </div>

    </main>
  );
}