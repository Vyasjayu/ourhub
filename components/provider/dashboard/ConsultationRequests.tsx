"use client";

import { useEffect, useState } from "react";
import {
  MessageCircle,
  Phone,
  Video,
  Check,
  X,
  Clock,
  IndianRupee,
  User,
  Loader2,
} from "lucide-react";

interface UserData {
  id: string;
  fullName: string;
  mobile: string;
  email: string;
  profilePhoto: string;
}

interface Consultation {
  id: string;
  userId: string;
  panditId: string;
  amount: number;
  duration: number;
  paymentId: string;
  status: string;
  startTime: string | null;
  endTime: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  user: UserData;
}

interface Props {
  providerMobile: string;
}

export default function ConsultationRequests({
  providerMobile,
}: Props) {
  const [consultations, setConsultations] =
    useState<Consultation[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [processingId, setProcessingId] =
    useState<string | null>(null);

  const [error, setError] =
    useState("");

  // =========================================
  // LOAD REQUESTS
  // =========================================

  async function loadConsultations() {
    try {
      setError("");

      const res = await fetch(
        `/api/provider/consultations?mobile=${encodeURIComponent(
          providerMobile
        )}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(
          data.message ||
            "Failed to load consultation requests"
        );

        return;
      }

      setConsultations(
        data.consultations || []
      );
    } catch (error) {
      console.error(
        "Load consultations error:",
        error
      );

      setError(
        "Unable to load consultation requests"
      );
    } finally {
      setLoading(false);
    }
  }

  // =========================================
  // INITIAL LOAD + AUTO REFRESH
  // =========================================

  useEffect(() => {
    if (!providerMobile) {
      setLoading(false);
      return;
    }

    loadConsultations();

    const interval = setInterval(() => {
      loadConsultations();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [providerMobile]);

  // =========================================
  // ACCEPT / REJECT
  // =========================================

  async function handleAction(
    consultationId: string,
    action: "accept" | "reject"
  ) {
    try {
      setProcessingId(consultationId);

      const res = await fetch(
        `/api/provider/consultations/${consultationId}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            action,
            mobile: providerMobile,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(
          data.message ||
            "Something went wrong"
        );

        return;
      }

      if (action === "accept") {
        alert(
          "Consultation accepted successfully"
        );
      } else {
        alert(
          "Consultation rejected successfully"
        );
      }

      // Remove processed request
      setConsultations((prev) =>
        prev.filter(
          (item) =>
            item.id !== consultationId
        )
      );
    } catch (error) {
      console.error(
        "Consultation action error:",
        error
      );

      alert(
        "Unable to process consultation"
      );
    } finally {
      setProcessingId(null);
    }
  }

  // =========================================
  // LOADING
  // =========================================

  if (loading) {
    return (
      <section className="mt-7">
        <div className="flex items-center gap-3">
          <Loader2
            size={20}
            className="animate-spin text-yellow-400"
          />

          <p className="text-gray-400">
            Checking consultation requests...
          </p>
        </div>
      </section>
    );
  }

  // =========================================
  // ERROR
  // =========================================

  if (error) {
    return (
      <section className="mt-7">
        <div className="rounded-3xl border border-red-500/20 bg-red-500/10 p-5">
          <p className="text-sm text-red-300">
            {error}
          </p>

          <button
            onClick={loadConsultations}
            className="mt-4 rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white"
          >
            Retry
          </button>
        </div>
      </section>
    );
  }

  // =========================================
  // NO REQUEST
  // =========================================

  if (consultations.length === 0) {
    return (
      <section className="mt-7">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">
            Consultation Requests
          </h2>
        </div>

        <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
          <Clock
            size={36}
            className="mx-auto text-yellow-400"
          />

          <h3 className="mt-3 font-semibold text-white">
            No Pending Requests
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            New consultation requests will
            appear here automatically.
          </p>
        </div>
      </section>
    );
  }

  // =========================================
  // REQUESTS
  // =========================================

  return (
    <section className="mt-7">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Consultation Requests
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            {consultations.length} pending request
            {consultations.length !== 1
              ? "s"
              : ""}
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-sm font-bold text-black">
          {consultations.length}
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {consultations.map(
          (consultation) => {
            const isProcessing =
              processingId ===
              consultation.id;

            const userName =
              consultation.user?.fullName ||
              "Customer";

            const userMobile =
              consultation.user?.mobile ||
              "";

            return (
              <div
                key={consultation.id}
                className="overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111C30]"
              >
                {/* Header */}

                <div className="border-b border-white/10 p-5">
                  <div className="flex items-center gap-4">
                    {/* User Avatar */}

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-yellow-400 text-black">
                      {consultation.user
                        ?.profilePhoto ? (
                        <img
                          src={
                            consultation.user
                              .profilePhoto
                          }
                          alt={userName}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <User size={25} />
                      )}
                    </div>

                    {/* User */}

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-lg font-bold text-white">
                        {userName}
                      </h3>

                      {userMobile && (
                        <p className="mt-1 text-sm text-gray-400">
                          {userMobile}
                        </p>
                      )}
                    </div>

                    {/* New badge */}

                    <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                      NEW
                    </span>
                  </div>
                </div>

                {/* Consultation Details */}

                <div className="grid grid-cols-2 gap-3 p-5">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <IndianRupee
                        size={17}
                      />

                      <span className="text-xs">
                        Amount
                      </span>
                    </div>

                    <p className="mt-2 text-lg font-bold text-white">
                      ₹
                      {
                        consultation.amount
                      }
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Clock
                        size={17}
                      />

                      <span className="text-xs">
                        Duration
                      </span>
                    </div>

                    <p className="mt-2 text-lg font-bold text-white">
                      {
                        consultation.duration
                      }{" "}
                      min
                    </p>
                  </div>
                </div>

                {/* Consultation Type */}

                <div className="px-5">
                  <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/20">
                      <MessageCircle
                        size={22}
                        className="text-green-400"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">
                        Chat Consultation
                      </p>

                      <p className="text-xs text-gray-400">
                        Customer wants to
                        connect with you
                      </p>
                    </div>
                  </div>
                </div>

                {/* Time */}

                <div className="px-5 pt-4">
                  <p className="text-xs text-gray-500">
                    Request ID:{" "}
                    {consultation.id}
                  </p>
                </div>

                {/* Buttons */}

                <div className="grid grid-cols-2 gap-3 p-5">
                  <button
                    disabled={isProcessing}
                    onClick={() =>
                      handleAction(
                        consultation.id,
                        "reject"
                      )
                    }
                    className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 font-bold text-red-400 transition active:scale-95 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <Loader2
                        size={19}
                        className="animate-spin"
                      />
                    ) : (
                      <X size={19} />
                    )}

                    Reject
                  </button>

                  <button
                    disabled={isProcessing}
                    onClick={() =>
                      handleAction(
                        consultation.id,
                        "accept"
                      )
                    }
                    className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-green-500 font-bold text-black transition active:scale-95 disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <Loader2
                        size={19}
                        className="animate-spin"
                      />
                    ) : (
                      <Check size={19} />
                    )}

                    Accept
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}