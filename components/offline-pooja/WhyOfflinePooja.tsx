import {
  BadgeCheck,
  Gift,
  Landmark,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    title: "Authentic Rituals",
    description: "Performed as per Vedic scriptures",
    icon: Sparkles,
  },
  {
    title: "Experienced Pandits",
    description: "Trained & verified by OurHub",
    icon: BadgeCheck,
  },
  {
    title: "Temple Visit",
    description: "Pooja performed at holy temples",
    icon: Landmark,
  },
  {
    title: "Prasad & Blessings",
    description: "Receive prasad & positive energy",
    icon: Gift,
  },
];

export default function WhyOfflinePooja() {
  return (
    <section className="mt-7 px-4">
      <div className="rounded-2xl border border-yellow-500/15 bg-[#080e14] p-3">
        <h2 className="text-center text-[18px] font-semibold text-yellow-400">
          ✣ Why Book Offline Pooja? ✣
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-2">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/5 bg-[#111923] p-3"
              >
                <div className="flex items-start gap-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/30">
                    <Icon
                      size={21}
                      className="text-yellow-400"
                    />
                  </div>

                  <div>
                    <h3 className="text-[11px] font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[9px] leading-4 text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}