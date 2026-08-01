"use client";

import {
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const process = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "We understand your business goals, audience and project requirements before starting development.",
    icon: Search,
    color: "from-cyan-500 to-blue-500",
  },
  {
    step: "02",
    title: "UI / UX Design",
    description:
      "Beautiful wireframes and modern user interface focused on conversion and user experience.",
    icon: PenTool,
    color: "from-pink-500 to-rose-500",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Building secure, scalable and high-performance websites using the latest technologies.",
    icon: Code2,
    color: "from-yellow-500 to-orange-500",
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Complete quality assurance, speed optimization and responsive testing on every device.",
    icon: ShieldCheck,
    color: "from-green-500 to-emerald-500",
  },
  {
    step: "05",
    title: "Launch & Support",
    description:
      "Deployment, SEO setup, maintenance and ongoing technical support after launch.",
    icon: Rocket,
    color: "from-violet-500 to-purple-500",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#071424] py-16">

      {/* Background Glow */}

      <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-md px-5">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-yellow-300">

            Development Process

          </span>

          <h2 className="mt-5 text-3xl font-black text-white">

            How We Work

          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400">

            Our streamlined development process ensures
            quality, speed and transparency from idea to launch.

          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-12">

          {/* Vertical Line */}

          <div className="absolute left-7 top-0 h-full w-[2px] bg-gradient-to-b from-yellow-500 via-yellow-400/50 to-transparent" />

          <div className="space-y-8">

            {process.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.step}
                  className="relative flex gap-5"
                >
                  {/* Icon */}

                  <div className="relative z-10">

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}
                    >
                      <Icon
                        size={26}
                        className="text-white"
                      />
                    </div>

                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-3xl border border-yellow-500/20 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40">

                    <div className="flex items-center justify-between">

                      <h3 className="text-lg font-bold text-white">
                        {item.title}
                      </h3>

                      <span className="text-xl font-black text-yellow-400">
                        {item.step}
                      </span>

                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-400">

                      {item.description}

                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

        {/* Bottom Card */}

        <div className="mt-12 rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-[#132D4D] via-[#10263F] to-[#0A1B2E] p-6 text-center shadow-xl shadow-yellow-500/10">

          <h3 className="text-xl font-black text-white">

            Average Project Delivery

          </h3>

          <div className="mt-5 flex justify-center gap-6">

            <div>

              <h4 className="text-3xl font-black text-yellow-400">
                7-15
              </h4>

              <p className="text-xs text-slate-400">
                Business Website
              </p>

            </div>

            <div>

              <h4 className="text-3xl font-black text-yellow-400">
                30+
              </h4>

              <p className="text-xs text-slate-400">
                Web Application
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}