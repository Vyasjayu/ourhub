"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  Video,
  User,
  Clock,
  IndianRupee,
  Check,
  X,
  RefreshCw,
} from "lucide-react";

interface ConsultationUser {
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
  user: ConsultationUser;
}

export default function ProviderConsultationsPage() {
  const router = useRouter();

  const [consultations, setConsultations] = useState<
    Consultation[]
  >([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(
    null
  );

  const [error, setError] = useState("");

  const loadConsultations = useCallback(
    async (showRefresh = false) => {
      try {
        if (showRefresh) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }

        setError("");

        const mobile =
          localStorage.getItem("providerMobile");

        if (!mobile) {
          setError("Provider login required.");
          return;
        }

        const response = await fetch(
          `/api/provider/consultations?mobile=${encodeURIComponent(
            mobile
          )}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data = await response.json();

        console.log(
          "Provider consultations response:",
          data
        );

        if (!response.ok || !data.success) {
          setError(
            data.message ||
              "Failed to load consultations."
          );

          setConsultations([]);
          return;
        }

        setConsultations(
          Array.isArray(data.consultations)
            ? data.consultations
            : []
        );
      } catch (error) {
        console.error(
          "Consultation fetch error:",
          error
        );

        setError(
          "Unable to load consultation requests."
        );
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    []
  );

  useEffect(() => {
    loadConsultations();

    // New request check every 5 seconds
    const interval = setInterval(() => {
      loadConsultations(true);
    }, 5000);

    return () => clearInterval(interval);
  }, [loadConsultations]);

  const handleAction = async (
    consultationId: string,
    action: "accept" | "reject"
  ) => {
    try {
      const mobile =
        localStorage.getItem("providerMobile");

      if (!mobile) {
        alert("Please login again.");
        router.push("/provider/login");
        return;
      }

      if (action === "reject") {
        const confirmed = window.confirm(
          "Are you sure you want to reject this request?"
        );

        if (!confirmed) {
          return;
        }
      }

      setProcessingId(consultationId);

      const response = await fetch(
        `/api/consultation/${consultationId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action,
            mobile,
          }),
        }
      );

      const data = await response.json();

      console.log(
        "Consultation action response:",
        data
      );

      if (!response.ok || !data.success) {
        alert(
          data.message ||
            "Unable to update consultation."
        );
        return;
      }

      if (action === "accept") {
        alert(
          "Consultation accepted successfully."
        );

        // Remove from pending list
        setConsultations((prev) =>
          prev.filter(
            (item) =>
              item.id !== consultationId
          )
        );

        // Open consultation/chat
        const consultation =
          data.consultation;

        if (consultation?.userId) {
          router.push(
            `/chat?consultationId=${encodeURIComponent(
              consultation.id
            )}&panditId=${encodeURIComponent(
              consultation.panditId
            )}&userId=${encodeURIComponent(
              consultation.userId
            )}`
          );
        }
      } else {
        alert(
          "Consultation rejected successfully."
        );

        setConsultations((prev) =>
          prev.filter(
            (item) =>
              item.id !== consultationId
          )
        );
      }
    } catch (error) {
      console.error(
        "Consultation action error:",
        error
      );

      alert(
        "Something went wrong. Please try again."
      );
    } finally {
      setProcessingId(null);
    }
  };

  const formatTime = (
    date: string | null
  ) => {
    if (!date) {
      return "";
    }

    try {
      return new Date(date).toLocaleString(
        "en-IN",
        {
          day: "2-digit",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        }
      );
    } catch {
      return "";
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#071424] text-white">
        <div className="mx-auto max-w-md px-4 py-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                router.push(
                  "/provider/dashboard"
                )
              }
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
            >
              <ArrowLeft size={21} />
            </button>

            <h1 className="text-2xl font-bold">
              Consultation Requests
            </h1>
          </div>

          <div className="mt-20 text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-yellow-400" />

            <p className="mt-5 text-gray-400">
              Loading requests...
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#071424] pb-10 text-white">
      <div className="mx-auto max-w-md px-4 py-5">
        {/* HEADER */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                router.push(
                  "/provider/dashboard"
                )
              }
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
            >
              <ArrowLeft size={21} />
            </button>

            <div>
              <h1 className="text-xl font-bold">
                Consultation Requests
              </h1>

              <p className="text-xs text-gray-400">
                New customer requests
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              loadConsultations(true)
            }
            disabled={refreshing}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
          >
            <RefreshCw
              size={19}
              className={
                refreshing
                  ? "animate-spin"
                  : ""
              }
            />
          </button>
        </div>

        {/* ERROR */}

        {error && (
          <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
            <p className="text-sm text-red-300">
              {error}
            </p>
          </div>
        )}

        {/* REQUEST COUNT */}

        <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-yellow-400/10 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">
                Pending Requests
              </p>

              <h2 className="mt-1 text-3xl font-bold text-yellow-400">
                {consultations.length}
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10">
              <MessageCircle className="text-yellow-400" />
            </div>
          </div>
        </div>

        {/* EMPTY STATE */}

        {consultations.length === 0 &&
          !error && (
            <div className="mt-8 rounded-3xl border border-white/10 bg-[#132234] p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/10">
                <MessageCircle
                  size={30}
                  className="text-yellow-400"
                />
              </div>

              <h2 className="mt-5 text-lg font-bold">
                No New Requests
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                When a customer starts a paid
                consultation, the request will
                appear here automatically.
              </p>

              <button
                onClick={() =>
                  loadConsultations(true)
                }
                className="mt-6 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black"
              >
                Refresh
              </button>
            </div>
          )}

        {/* CONSULTATION LIST */}

        <div className="mt-6 space-y-4">
          {consultations.map(
            (consultation) => {
              const isProcessing =
                processingId ===
                consultation.id;

              return (
                <div
                  key={consultation.id}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-[#132234]"
                >
                  {/* USER */}

                  <div className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-yellow-400/10">
                        {consultation.user
                          ?.profilePhoto ? (
                          <img
                            src={
                              consultation
                                .user
                                .profilePhoto
                            }
                            alt={
                              consultation.user
                                .fullName
                            }
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <User
                            size={25}
                            className="text-yellow-400"
                          />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2 className="truncate text-lg font-bold">
                          {consultation.user
                            ?.fullName ||
                            "Customer"}
                        </h2>

                        <p className="mt-1 text-xs text-gray-400">
                          {consultation.user
                            ?.mobile ||
                            "Mobile unavailable"}
                        </p>
                      </div>

                      <div className="rounded-full bg-green-500/10 px-3 py-1">
                        <span className="text-xs font-semibold text-green-400">
                          NEW
                        </span>
                      </div>
                    </div>

                    {/* DETAILS */}

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-black/20 p-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <IndianRupee
                            size={16}
                          />

                          <span className="text-xs">
                            Amount
                          </span>
                        </div>

                        <p className="mt-2 text-lg font-bold">
                          ₹
                          {
                            consultation.amount
                          }
                        </p>
                      </div>

                      <div className="rounded-2xl bg-black/20 p-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Clock size={16} />

                          <span className="text-xs">
                            Duration
                          </span>
                        </div>

                        <p className="mt-2 text-lg font-bold">
                          {
                            consultation.duration
                          }{" "}
                          min
                        </p>
                      </div>
                    </div>

                    {/* CONSULTATION TYPE */}

                    <div className="mt-4 flex items-center gap-3 rounded-2xl bg-black/20 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500/10">
                        <MessageCircle
                          size={20}
                          className="text-green-400"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          Consultation Request
                        </p>

                        <p className="text-xs text-gray-400">
                          Customer is waiting
                          for your response
                        </p>
                      </div>
                    </div>

                    {/* TIME */}

                    {consultation.createdAt && (
                      <p className="mt-4 text-xs text-gray-500">
                        Requested{" "}
                        {formatTime(
                          consultation.createdAt
                        )}
                      </p>
                    )}
                  </div>

                  {/* ACTIONS */}

                  <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-4">
                    <button
                      disabled={isProcessing}
                      onClick={() =>
                        handleAction(
                          consultation.id,
                          "reject"
                        )
                      }
                      className="flex h-12 items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 font-semibold text-red-400 disabled:opacity-50"
                    >
                      <X size={19} />

                      {isProcessing
                        ? "Please wait..."
                        : "Reject"}
                    </button>

                    <button
                      disabled={isProcessing}
                      onClick={() =>
                        handleAction(
                          consultation.id,
                          "accept"
                        )
                      }
                      className="flex h-12 items-center justify-center gap-2 rounded-xl bg-green-500 font-semibold text-black disabled:opacity-50"
                    >
                      <Check size={19} />

                      {isProcessing
                        ? "Please wait..."
                        : "Accept"}
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </main>
  );
}