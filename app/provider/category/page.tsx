"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Home,
  Car,
  Globe,
  CalendarDays,
  Wrench,
  Paintbrush,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const categories = [
  {
    id: "astrology",
    title: "Astrology",
    subtitle: "Astrologer, Kundli, Vastu",
    icon: Sparkles,
  },
  {
    id: "religious",
    title: "Religious",
    subtitle: "Pandit, Pooja, Havan",
    icon: CheckCircle2,
  },
  {
    id: "home",
    title: "Home Services",
    subtitle: "Electrician, Plumber",
    icon: Home,
  },
  {
    id: "automobile",
    title: "Automobile",
    subtitle: "Mechanic, Car Wash",
    icon: Car,
  },
  {
    id: "website",
    title: "Website Development",
    subtitle: "Web & App Development",
    icon: Globe,
  },
  {
    id: "event",
    title: "Event Management",
    subtitle: "Wedding & Party",
    icon: CalendarDays,
  },
  {
    id: "repair",
    title: "Repair Services",
    subtitle: "AC, TV, Fridge",
    icon: Wrench,
  },
  {
    id: "education",
    title: "Education",
    subtitle: "Tutor & Coaching",
    icon: GraduationCap,
  },
  {
    id: "beauty",
    title: "Beauty",
    subtitle: "Salon & Makeup",
    icon: Paintbrush,
  },
];

export default function ProviderCategoryPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const handleContinue = () => {
    if (!selected) return;
    router.push(`/provider/login?category=${selected}`);
  };

  return (
    <main className="min-h-screen bg-[#0B1220] text-white pb-24">
      <div className="mx-auto max-w-md px-5 pt-8">

        <h1 className="text-3xl font-bold">
          Choose Your Service
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Select the category in which you want to become an OurHub Partner.
        </p>

        <div className="mt-8 space-y-4">
          {categories.map((item) => {
            const Icon = item.icon;
            const active = selected === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`w-full rounded-3xl border p-4 transition-all ${
                  active
                    ? "border-yellow-400 bg-yellow-400/10"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <div className="flex items-center">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      active
                        ? "bg-yellow-400 text-black"
                        : "bg-white/10"
                    }`}
                  >
                    <Icon size={28} />
                  </div>

                  <div className="ml-4 flex-1 text-left">
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {item.subtitle}
                    </p>
                  </div>

                  {active && (
                    <CheckCircle2
                      className="text-yellow-400"
                      size={26}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-[#0B1220] p-4">
        <div className="mx-auto max-w-md">
          <button
            disabled={!selected}
            onClick={handleContinue}
            className={`h-14 w-full rounded-2xl text-lg font-semibold transition ${
              selected
                ? "bg-yellow-400 text-black"
                : "bg-gray-700 text-gray-400"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}