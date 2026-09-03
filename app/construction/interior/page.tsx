
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

export default function InteriorPage() {
  const router = useRouter();

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

            <button
              onClick={() => router.back()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            >
              <ArrowLeft size={17} strokeWidth={2} />
            </button>

            <div className="text-center">
              <p className="text-[7px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="mt-[1px] text-[12px] font-semibold">
                Interior Design
              </p>
            </div>

            <button
              onClick={() => router.push("/")}
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

              {/* glow */}

              <div className="absolute -right-[80px] -top-[80px] h-[230px] w-[230px] rounded-full bg-[#DFAE45]/10 blur-[70px]" />

              <div className="absolute -bottom-[100px] -left-[100px] h-[220px] w-[220px] rounded-full bg-[#DFAE45]/5 blur-[70px]" />

              {/* decorative lines */}

              <div className="absolute right-[-35px] top-[80px] h-[1px] w-[150px] rotate-[-35deg] bg-[#DFAE45]/10" />
              <div className="absolute right-[-35px] top-[110px] h-[1px] w-[150px] rotate-[-35deg] bg-[#DFAE45]/10" />
              <div className="absolute right-[-35px] top-[140px] h-[1px] w-[150px] rotate-[-35deg] bg-[#DFAE45]/10" />

              <div className="relative z-10 flex h-full flex-col justify-between p-5">

                <div>

                  {/* badge */}

                  <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-2.5 py-1.5">

                    <Sparkles
                      size={9}
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[7px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                      Premium Interiors
                    </span>

                  </div>

                  {/* heading */}

                  <h1 className="max-w-[300px] text-[31px] font-extrabold leading-[1.04] tracking-[-1px]">

                    Beautiful
                    <br />

                    <span className="text-[#DFAE45]">
                      Spaces.
                    </span>

                    <br />

                    Designed For You.

                  </h1>

                  <p className="mt-4 max-w-[285px] text-[11px] leading-[18px] text-white/45">
                    Create a beautiful, functional and comfortable
                    home with our verified interior experts.
                  </p>

                  {/* small location */}

                  <div className="mt-4 flex items-center gap-1.5">

                    <MapPin
                      size={12}
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[9px] text-white/45">
                      Indore · Ujjain · Ratlam
                    </span>

                  </div>

                </div>

                {/* hero bottom cards */}

                <div className="grid grid-cols-3 gap-2">

                  <MiniFeature
                    icon={<Sofa size={14} />}
                    title="Modern"
                    subtitle="Design"
                  />

                  <MiniFeature
                    icon={<Ruler size={14} />}
                    title="Custom"
                    subtitle="Planning"
                  />

                  <MiniFeature
                    icon={<ShieldCheck size={14} />}
                    title="Verified"
                    subtitle="Experts"
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
                label="Consultation"
              />

              <Stat
                icon={<Clock3 size={14} />}
                value="24–48 Hrs"
                label="Expert Contact"
              />

              <Stat
                icon={<MapPin size={14} />}
                value="3 Cities"
                label="Service Area"
              />

            </div>

          </section>

          {/* ===================================================
              SERVICES
          ==================================================== */}

          <section className="px-3 pt-9">

            <SectionHeading
              small="Our Services"
              title="Complete Interior Solutions"
              description="Everything you need to create your dream home."
            />

            <div className="mt-4 space-y-2">

              <Service
                icon={<Sofa size={17} />}
                title="Living Room"
                description="Furniture, lighting & décor"
              />

              <Service
                icon={<Home size={17} />}
                title="Modular Kitchen"
                description="Smart layouts & premium finishes"
              />

              <Service
                icon={<Home size={17} />}
                title="Bedroom"
                description="Comfortable & personalized designs"
              />

              <Service
                icon={<Paintbrush size={17} />}
                title="Painting & Wall Design"
                description="Textures, wallpapers & feature walls"
              />

              <Service
                icon={<Ruler size={17} />}
                title="False Ceiling & Lighting"
                description="Modern ceilings & ambient lighting"
              />

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
                    WHY OURHUB
                  </p>

                  <h2 className="mt-1 text-[14px] font-bold">
                    Interior Without The Hassle
                  </h2>

                </div>

              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5">

                <Benefit text="Verified interior professionals" />

                <Benefit text="Transparent project estimates" />

                <Benefit text="Design according to your budget" />

                <Benefit text="End-to-end project assistance" />

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
                  Simple Process
                </span>

                <span className="h-px w-6 bg-[#DFAE45]/40" />

              </div>

              <h2 className="mt-2 text-[21px] font-bold">
                From Idea To Home
              </h2>

            </div>

            <div className="mt-4 space-y-2">

              <Step
                number="01"
                title="Share Your Requirement"
                description="Tell us about your home, style and budget."
              />

              <Step
                number="02"
                title="Meet Your Expert"
                description="Our expert understands your requirements."
              />

              <Step
                number="03"
                title="Get Design & Estimate"
                description="Receive your personalized design and estimate."
              />

              <Step
                number="04"
                title="Start Your Project"
                description="Finalize the plan and begin your project."
              />

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
                “OurHub helped us plan our interiors according
                to our budget. The process was simple and transparent.”
              </p>

              <p className="mt-3 text-[8px] text-white/30">
                — OurHub Customer
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
              onClick={() =>
                router.push("/construction/interior/book")
              }
              className="flex h-[53px] w-full items-center justify-between rounded-[17px] bg-[#DFAE45] px-4 text-black shadow-[0_8px_30px_rgba(223,174,69,0.15)] active:scale-[0.98]"
            >

              <div className="text-left">

                <p className="text-[7px] font-bold uppercase tracking-[2px] opacity-50">
                  FREE CONSULTATION
                </p>

                <p className="mt-[2px] text-[13px] font-extrabold">
                  Talk To An Interior Expert
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

