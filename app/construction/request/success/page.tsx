"use client";

import { Suspense, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock3,
  HardHat,
  Home,
  Phone,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   LOADING FALLBACK
========================================================= */

function SuccessPageLoading() {
  return (
    <main className="min-h-screen w-full bg-[#030303]">
      <div className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center bg-[#080808] text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-[#DFAE45]/20 border-t-[#DFAE45]" />

          <p className="mt-4 text-[11px] font-medium text-white/50">
            Loading request...
          </p>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   MAIN CONTENT
========================================================= */

function ConstructionRequestSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  /* =======================================================
     SERVICE
  ======================================================= */

  const service = searchParams.get("service") || "construction";

  const serviceName = useMemo(() => {
    switch (service) {
      case "home-construction":
        return "Home Construction";

      case "renovation":
        return "Home Renovation";

      case "interior":
        return "Interior Work";

      case "painting":
        return "Painting Services";

      default:
        return "Construction Service";
    }
  }, [service]);

  /* =======================================================
     REQUEST ID

     IMPORTANT:
     Request page se jo ID aa rahi hai usi ko use karenge.
     Naya random ID generate nahi karenge.
  ======================================================= */

  const requestId = useMemo(() => {
    const existingId = searchParams.get("id");

    if (existingId) {
      return existingId;
    }

    return `OH-CON-${Math.floor(
      100000 + Math.random() * 900000
    )}`;
  }, [searchParams]);

  /* =======================================================
     TRACK REQUEST
  ======================================================= */

  const handleTrackRequest = () => {
    router.push(
      `/construction/request/status?id=${encodeURIComponent(
        requestId
      )}`
    );
  };

  /* =======================================================
     BACK
  ======================================================= */

  const handleBack = () => {
    router.push("/construction");
  };

  return (
    <main className="min-h-screen w-full bg-[#030303]">
      {/* =====================================================
          MOBILE APP CONTAINER
      ===================================================== */}

      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#080808] pb-[105px] text-white">
        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080808]/95 backdrop-blur-xl">
          <div className="flex h-[62px] items-center justify-center px-4">
            <div className="text-center">
              <p className="text-[8px] font-bold uppercase tracking-[4px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="mt-1 text-[12px] font-semibold">
                Request Submitted
              </p>
            </div>
          </div>
        </header>

        {/* ===================================================
            SUCCESS HERO
        =================================================== */}

        <section className="relative overflow-hidden px-4 pt-10">
          {/* Background Glow */}

          <div className="pointer-events-none absolute left-1/2 top-8 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[#DFAE45]/15 blur-[80px]" />

          <div className="relative text-center">
            {/* SUCCESS ICON */}

            <div className="relative mx-auto flex h-[88px] w-[88px] items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#DFAE45]/20" />

              <div className="absolute inset-[7px] rounded-full border border-[#DFAE45]/25" />

              <div className="relative flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#DFAE45] shadow-[0_0_40px_rgba(223,174,69,0.25)]">
                <Check
                  size={32}
                  strokeWidth={3}
                  className="text-black"
                />
              </div>
            </div>

            {/* BADGE */}

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10 px-3 py-1.5">
              <CheckCircle2
                size={13}
                className="text-[#DFAE45]"
              />

              <span className="text-[9px] font-semibold uppercase tracking-[1px] text-[#E8C86D]">
                Request Successfully Submitted
              </span>
            </div>

            {/* HEADING */}

            <h1 className="mt-5 text-[28px] font-bold leading-[1.15]">
              Your Project Request
              <span className="block text-[#DFAE45]">
                Is On Its Way!
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mx-auto mt-4 max-w-[330px] text-[12px] leading-6 text-white/50">
              We have received your construction requirement.
              Our team will review your project details and connect
              you with the right expert.
            </p>
          </div>
        </section>

        {/* ===================================================
            REQUEST ID CARD
        =================================================== */}

        <section className="mt-8 px-4">
          <div className="relative overflow-hidden rounded-[24px] border border-[#DFAE45]/20 bg-gradient-to-br from-[#19140C] via-[#11100D] to-[#0E0E0E] p-5">
            {/* Glow */}

            <div className="absolute -right-10 -top-10 h-[130px] w-[130px] rounded-full bg-[#DFAE45]/10 blur-[50px]" />

            <div className="relative">
              <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                YOUR REQUEST ID
              </p>

              <div className="mt-2 flex items-center justify-between gap-3">
                <h2 className="break-all text-[20px] font-bold tracking-wide">
                  {requestId}
                </h2>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <ClipboardList
                    size={19}
                    className="text-[#DFAE45]"
                  />
                </div>
              </div>

              <div className="my-4 h-px bg-white/[0.07]" />

              {/* SERVICE */}

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] text-white/40">
                    SELECTED SERVICE
                  </p>

                  <p className="mt-1 text-[12px] font-semibold">
                    {serviceName}
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                  <Building2
                    size={19}
                    className="text-[#DFAE45]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            WHAT HAPPENS NEXT
        =================================================== */}

        <section className="mt-10 px-4">
          <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            WHAT HAPPENS NEXT
          </p>

          <h2 className="mt-1 text-[21px] font-bold">
            Your Next Steps
          </h2>

          <div className="mt-6 space-y-5">
            {/* STEP 01 */}

            <div className="relative flex gap-4">
              <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                <ClipboardList
                  size={19}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold tracking-[2px] text-[#DFAE45]/70">
                  STEP 01
                </p>

                <h3 className="mt-1 text-[13px] font-semibold">
                  We Review Your Project
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-white/45">
                  Our team will review your construction requirements
                  and project details.
                </p>
              </div>
            </div>

            {/* STEP 02 */}

            <div className="relative flex gap-4">
              <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                <Phone
                  size={19}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold tracking-[2px] text-[#DFAE45]/70">
                  STEP 02
                </p>

                <h3 className="mt-1 text-[13px] font-semibold">
                  Expert Contacts You
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-white/45">
                  A suitable construction professional may contact you
                  to understand your requirements better.
                </p>
              </div>
            </div>

            {/* STEP 03 */}

            <div className="relative flex gap-4">
              <div className="relative z-10 flex h-[43px] w-[43px] shrink-0 items-center justify-center rounded-2xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
                <HardHat
                  size={19}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[9px] font-bold tracking-[2px] text-[#DFAE45]/70">
                  STEP 03
                </p>

                <h3 className="mt-1 text-[13px] font-semibold">
                  Discuss Your Project
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-white/45">
                  Discuss your project requirements, timeline and
                  estimated budget with the expert.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            TRUST CARD
        =================================================== */}

        <section className="mt-10 px-4">
          <div className="rounded-[25px] border border-white/[0.07] bg-[#111111] p-5">
            <div className="flex gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <ShieldCheck
                  size={21}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <h3 className="text-[14px] font-semibold">
                  Your Request Is Secure
                </h3>

                <p className="mt-2 text-[11px] leading-5 text-white/45">
                  Your project information is shared only for the
                  purpose of reviewing and connecting you with suitable
                  construction professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            HELP CARD
        =================================================== */}

        <section className="mt-5 px-4">
          <div className="flex items-center justify-between rounded-[22px] border border-white/[0.07] bg-[#111111] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DFAE45]/10">
                <Clock3
                  size={18}
                  className="text-[#DFAE45]"
                />
              </div>

              <div>
                <p className="text-[12px] font-semibold">
                  Need Help?
                </p>

                <p className="mt-1 text-[9px] text-white/40">
                  Our support team is here for you
                </p>
              </div>
            </div>

            <ChevronRight
              size={18}
              className="text-white/30"
            />
          </div>
        </section>

        {/* ===================================================
            BACK TO CONSTRUCTION
        =================================================== */}

        <section className="mt-8 px-4">
          <button
            type="button"
            onClick={handleBack}
            className="flex w-full items-center justify-center gap-2 py-3 text-[11px] font-semibold text-white/55 transition active:scale-[0.98]"
          >
            <Home size={16} />

            Back To Construction Services
          </button>
        </section>

        <div className="h-8" />
      </div>

      {/* =====================================================
          STICKY CTA
      ===================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#080808]/95 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-[430px] border-t border-white/[0.07] px-4 py-3">
          <button
            type="button"
            onClick={handleTrackRequest}
            className="flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-[#DFAE45] text-[13px] font-bold text-black transition active:scale-[0.98]"
          >
            <BadgeCheck size={18} />

            Track My Request

            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </main>
  );
}

/* =========================================================
   PAGE
   Suspense MUST wrap the component using useSearchParams()
========================================================= */

export default function ConstructionRequestSuccessPage() {
  return (
    <Suspense fallback={<SuccessPageLoading />}>
      <ConstructionRequestSuccessContent />
    </Suspense>
  );
}