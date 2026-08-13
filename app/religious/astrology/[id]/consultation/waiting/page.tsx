"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Loader2,
  ShieldCheck,
  User,
  XCircle,
} from "lucide-react";

interface Consultation {
  _id: string;
  id?: string;

  userId?: string;

  panditId?: string;
  astrologerId?: string;

  panditName?: string;
  astrologerName?: string;

  status?: string;

  amount?: number;
  duration?: number;

  consultationType?: string;

  name?: string;
  gender?: string;
  dob?: string;
  birthTime?: string;
  birthPlace?: string;

  kundli?: {
    name?: string;
    gender?: string;
    dob?: string;
    birthTime?: string;
    birthPlace?: string;
  };
}

type PageState =
  | "loading"
  | "waiting"
  | "accepted"
  | "rejected"
  | "error";

export default function ConsultationWaitingPage() {
  const router = useRouter();

  const params = useParams();
  const searchParams = useSearchParams();

  const astrologerId = String(
    params?.id || ""
  );

  const consultationId =
    searchParams.get("consultationId");

  const [consultation, setConsultation] =
    useState<Consultation | null>(null);

  const [pageState, setPageState] =
    useState<PageState>("loading");

  const [error, setError] =
    useState("");

  const [checking, setChecking] =
    useState(false);

  // ============================================================
  // LOAD CONSULTATION
  // ============================================================

  useEffect(() => {
    if (!consultationId) {
      setError(
        "Consultation ID is missing."
      );

      setPageState("error");

      return;
    }

    let cancelled = false;

    async function checkConsultation() {
      try {
        setChecking(true);

        const response = await fetch(
          `/api/provider/consultations/${consultationId}`,
          {
            method: "GET",
            cache: "no-store",
            credentials: "include",
          }
        );

        const text =
          await response.text();

        console.log(
          "📩 Consultation API:",
          text
        );

        let data: any = null;

        try {
          data = text
            ? JSON.parse(text)
            : null;
        } catch {
          throw new Error(
            "Server returned invalid response."
          );
        }

        if (!response.ok) {
          throw new Error(
            data?.message ||
              "Failed to load consultation."
          );
        }

        if (!data?.success) {
          throw new Error(
            data?.message ||
              "Consultation could not be loaded."
          );
        }

        if (cancelled) return;

        const consultationData =
          data.consultation;

        setConsultation(
          consultationData
        );

        // ======================================================
        // VERY IMPORTANT
        // ONLY DATABASE STATUS DECIDES PAGE
        // ======================================================

        const status = String(
          consultationData?.status ||
            "requested"
        ).toLowerCase();

        console.log(
          "🔎 Consultation status:",
          status
        );

        // ------------------------------------------------------
        // ACCEPTED
        // ------------------------------------------------------

        if (status === "accepted") {
          setPageState("accepted");

          return;
        }

        // ------------------------------------------------------
        // ACTIVE
        // ------------------------------------------------------

        if (status === "active") {
          setPageState("accepted");

          return;
        }

        // ------------------------------------------------------
        // REJECTED
        // ------------------------------------------------------

        if (
          status === "rejected" ||
          status === "cancelled"
        ) {
          setPageState("rejected");

          return;
        }

        // ------------------------------------------------------
        // REQUESTED / PENDING
        // ------------------------------------------------------

        if (
          status === "requested" ||
          status === "pending"
        ) {
          setPageState("waiting");

          return;
        }

        // ------------------------------------------------------
        // UNKNOWN STATUS
        // ------------------------------------------------------

        console.warn(
          "⚠️ Unknown consultation status:",
          status
        );

        // Unknown status ko accepted MAT samjho.
        setPageState("waiting");
      } catch (err) {
        console.error(
          "❌ Consultation polling error:",
          err
        );

        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to check consultation."
          );

          setPageState("error");
        }
      } finally {
        if (!cancelled) {
          setChecking(false);
        }
      }
    }

    // First check
    checkConsultation();

    // ==========================================================
    // POLLING
    // ==========================================================

    const interval = setInterval(
      checkConsultation,
      5000
    );

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [consultationId]);

  // ============================================================
  // LOADING
  // ============================================================

  if (pageState === "loading") {
    return (
      <main className="min-h-screen bg-[#050B14] text-white">
        <div className="flex min-h-screen items-center justify-center px-5">
          <div className="text-center">
            <Loader2
              size={42}
              className="mx-auto animate-spin text-yellow-400"
            />

            <h1 className="mt-5 text-xl font-bold">
              Checking Consultation
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Please wait...
            </p>
          </div>
        </div>
      </main>
    );
  }

  // ============================================================
  // ERROR
  // ============================================================

  if (pageState === "error") {
    return (
      <main className="min-h-screen bg-[#050B14] px-5 text-white">
        <div className="mx-auto flex min-h-screen max-w-md items-center justify-center">
          <div className="w-full rounded-3xl border border-red-500/20 bg-[#0B1422] p-6 text-center">
            <XCircle
              size={52}
              className="mx-auto text-red-400"
            />

            <h1 className="mt-4 text-xl font-bold">
              Consultation Not Found
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              {error ||
                "Unable to load your consultation."}
            </p>

            <button
              onClick={() =>
                router.back()
              }
              className="mt-6 w-full rounded-2xl bg-yellow-400 py-3 font-bold text-black"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ============================================================
  // REJECTED
  // ============================================================

  if (pageState === "rejected") {
    return (
      <main className="min-h-screen bg-[#050B14] text-white">
        <div className="mx-auto flex min-h-screen max-w-md items-center justify-center px-5">
          <div className="w-full rounded-3xl border border-red-500/20 bg-[#0B1422] p-6 text-center">
            <XCircle
              size={56}
              className="mx-auto text-red-400"
            />

            <h1 className="mt-5 text-2xl font-bold">
              Consultation Rejected
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              The astrologer is unable to accept
              your consultation request.
            </p>

            <button
              onClick={() =>
                router.push(
                  `/religious/astrology/${astrologerId}`
                )
              }
              className="mt-7 w-full rounded-2xl bg-yellow-400 py-4 font-bold text-black"
            >
              Find Another Astrologer
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ============================================================
  // ACCEPTED
  // ============================================================

  if (pageState === "accepted") {
    const kundli =
      consultation?.kundli;

    const name =
      kundli?.name ||
      consultation?.name ||
      "User";

    const gender =
      kundli?.gender ||
      consultation?.gender ||
      "-";

    const dob =
      kundli?.dob ||
      consultation?.dob ||
      "-";

    const birthTime =
      kundli?.birthTime ||
      consultation?.birthTime ||
      "-";

    const birthPlace =
      kundli?.birthPlace ||
      consultation?.birthPlace ||
      "-";

    return (
      <main className="min-h-screen bg-[#050B14] pb-10 text-white">
        <div className="mx-auto min-h-screen w-full max-w-[430px]">
          <header className="flex h-[62px] items-center border-b border-[#202D40] px-4">
            <button
              onClick={() =>
                router.back()
              }
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101C30]"
            >
              <ArrowLeft size={21} />
            </button>

            <div className="ml-3">
              <h1 className="text-[17px] font-bold">
                Consultation Accepted
              </h1>

              <p className="text-[11px] text-gray-400">
                Your astrologer is ready
              </p>
            </div>
          </header>

          <section className="px-4 pt-7">
            <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6 text-center">
              <CheckCircle2
                size={58}
                className="mx-auto text-green-400"
              />

              <h2 className="mt-4 text-2xl font-bold">
                Request Accepted
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Astrologer has accepted your
                consultation request.
              </p>
            </div>
          </section>

          <section className="px-4 pt-5">
            <div className="rounded-3xl border border-[#26354B] bg-[#0B1422] p-5">
              <h3 className="text-lg font-bold">
                Kundli For
              </h3>

              <div className="mt-5 space-y-4">
                <InfoRow
                  label="Name"
                  value={name}
                />

                <InfoRow
                  label="Gender"
                  value={gender}
                />

                <InfoRow
                  label="DOB"
                  value={dob}
                />

                <InfoRow
                  label="Birth Time"
                  value={birthTime}
                />

                <InfoRow
                  label="Birth Place"
                  value={birthPlace}
                />
              </div>
            </div>
          </section>

          <section className="px-4 pt-5">
            <div className="flex gap-3 rounded-2xl border border-green-500/20 bg-green-500/5 p-4">
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-green-400"
              />

              <p className="text-xs leading-5 text-gray-400">
                Your birth details are securely
                shared only for this astrology
                consultation.
              </p>
            </div>
          </section>

          <section className="px-4 pt-5">
            <button
              onClick={() => {
                router.push(
                  `/religious/astrology/${astrologerId}/consultation/chat?consultationId=${consultationId}`
                );
              }}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-sm font-bold text-black shadow-lg"
            >
              Start Consultation
            </button>
          </section>
        </div>
      </main>
    );
  }

  // ============================================================
  // WAITING
  // ============================================================

  return (
    <main className="min-h-screen bg-[#050B14] pb-10 text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px]">
        <header className="flex h-[62px] items-center border-b border-[#202D40] px-4">
          <button
            onClick={() =>
              router.back()
            }
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101C30]"
          >
            <ArrowLeft size={21} />
          </button>

          <div className="ml-3">
            <h1 className="text-[17px] font-bold">
              Consultation Request
            </h1>

            <p className="text-[11px] text-gray-400">
              Waiting for astrologer
            </p>
          </div>
        </header>

        <section className="px-4 pt-8">
          <div className="rounded-3xl border border-yellow-400/20 bg-[#0B1422] p-6 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400/10">
              <Clock3
                size={40}
                className="text-yellow-400"
              />
            </div>

            <h1 className="mt-6 text-2xl font-bold">
              Waiting for Response
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Your consultation request has
              been sent to the astrologer.
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Please wait while the astrologer
              reviews your request.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-yellow-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />

              {checking
                ? "Checking status..."
                : "Waiting for acceptance"}
            </div>
          </div>
        </section>

        <section className="px-4 pt-5">
          <div className="rounded-3xl border border-[#26354B] bg-[#0B1422] p-5">
            <h2 className="text-lg font-bold">
              Request Details
            </h2>

            <div className="mt-5 space-y-4">
              <InfoRow
                label="Status"
                value="Waiting"
                valueClass="text-yellow-400"
              />

              <InfoRow
                label="Consultation"
                value="Chat"
              />

              <InfoRow
                label="Duration"
                value={
                  consultation?.duration
                    ? `${consultation.duration} min`
                    : "-"
                }
              />

              <InfoRow
                label="Amount"
                value={
                  consultation?.amount
                    ? `₹${consultation.amount}`
                    : "-"
                }
              />
            </div>
          </div>
        </section>

        <section className="px-4 pt-5">
          <div className="flex gap-3 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
            <ShieldCheck
              size={20}
              className="mt-0.5 shrink-0 text-blue-400"
            />

            <div>
              <p className="text-xs font-semibold text-blue-300">
                Your request is secure
              </p>

              <p className="mt-1 text-[11px] leading-5 text-gray-400">
                You will be notified automatically
                when the astrologer accepts your
                consultation.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

// ============================================================
// INFO ROW
// ============================================================

function InfoRow({
  label,
  value,
  valueClass = "text-white",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[#202D40] pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-gray-400">
        {label}
      </span>

      <span
        className={`text-right text-sm font-semibold ${valueClass}`}
      >
        {value}
      </span>
    </div>
  );
}