"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import {
  Briefcase,
  MapPin,
  Wallet,
  Languages,
  Star,
  BadgeCheck,
  MessageCircle,
  Clock,
  Check,
  X,
  User,
  RefreshCw,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

import HeaderCard from "@/components/provider/dashboard/HeaderCard";
import ProfileCompletion from "@/components/provider/dashboard/ProfileCompletion";
import StatsCards from "@/components/provider/dashboard/StatsCards";
import InfoCard from "@/components/provider/dashboard/InfoCard";
import QuickActions from "@/components/provider/dashboard/QuickActions";

// ======================================================
// PROVIDER TYPE
// ======================================================

type Provider = {
  _id?: string;
  id?: string;

  fullName: string;
  displayName: string;

  mobile: string;
  email: string;

  category: string;

  city: string;
  state: string;

  businessName: string;
  experience: string;

  serviceArea: string;
  price: string;

  specialization: string;
  languages: string;
  about: string;

  profilePhoto: string;

  rating: number;

  isVerified: boolean;
  isActive: boolean;
};

// ======================================================
// CONSULTATION TYPE
// ======================================================

type ConsultationStatus =
  | "requested"
  | "accepted"
  | "active"
  | "rejected"
  | "completed"
  | "cancelled"
  | string;

type Consultation = {
  id?: string;
  _id?: string;

  userId: string;
  panditId: string;

  amount: number;
  duration: number;

  paymentId: string;

  status: ConsultationStatus;

  startTime: string | null;
  endTime: string | null;

  createdAt: string | null;
  updatedAt: string | null;

  user?: {
    id: string;
    fullName: string;
    mobile: string;
    email: string;
    profilePhoto: string;
  };

  panditName?: string | null;
};

// ======================================================
// COMPONENT
// ======================================================

export default function ProviderDashboardPage() {
  const [provider, setProvider] = useState<Provider | null>(null);

  const [loading, setLoading] = useState(true);

  const [consultations, setConsultations] = useState<Consultation[]>([]);

  const [consultationsLoading, setConsultationsLoading] = useState(false);

  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  const isMountedRef = useRef(true);

  // ====================================================
  // PROVIDER ID
  // ====================================================

  const providerId = provider?._id || provider?.id || "";

  // ====================================================
  // CONSULTATION ID HELPER
  // ====================================================

  const getConsultationId = useCallback(
    (consultation: Consultation) => {
      return consultation.id || consultation._id || "";
    },
    []
  );

  // ====================================================
  // LOAD PROVIDER
  // ====================================================

  const loadProvider = useCallback(async () => {
    try {
      const mobile = localStorage.getItem("providerMobile");

      if (!mobile) {
        if (isMountedRef.current) {
          setProvider(null);
          setLoading(false);
        }

        return;
      }

      const response = await fetch(
        `/api/provider/me?mobile=${encodeURIComponent(mobile)}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success || !data.provider) {
        if (isMountedRef.current) {
          setProvider(null);
        }

        return;
      }

      if (isMountedRef.current) {
        setProvider(data.provider);
      }
    } catch (error) {
      console.error("Provider load error:", error);

      if (isMountedRef.current) {
        setProvider(null);
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, []);

  // ====================================================
  // LOAD CONSULTATIONS
  // ====================================================

  const loadConsultations = useCallback(
    async (showLoader = false) => {
      try {
        const mobile = localStorage.getItem("providerMobile");

        if (!mobile) {
          if (isMountedRef.current) {
            setConsultations([]);
          }

          return;
        }

        if (showLoader && isMountedRef.current) {
          setConsultationsLoading(true);
        }

        const response = await fetch(
          `/api/provider/consultations?mobile=${encodeURIComponent(mobile)}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data = await response.json();

        if (!response.ok || !data.success) {
          if (isMountedRef.current) {
            setConsultations([]);
          }

          return;
        }

        const list = Array.isArray(data.consultations)
          ? data.consultations
          : [];

        if (isMountedRef.current) {
          setConsultations(list);
        }
      } catch (error) {
        console.error("Consultation load error:", error);

        if (isMountedRef.current) {
          setConsultations([]);
        }
      } finally {
        if (showLoader && isMountedRef.current) {
          setConsultationsLoading(false);
        }
      }
    },
    []
  );

  // ====================================================
  // ACCEPT / REJECT CONSULTATION
  // ====================================================

  const handleConsultationAction = useCallback(
    async (
      consultationId: string,
      action: "accept" | "reject"
    ) => {
      try {
        const mobile = localStorage.getItem("providerMobile");

        if (!mobile) {
          alert("Provider login expired. Please login again.");
          return;
        }

        if (!consultationId) {
          alert("Consultation ID is missing.");
          return;
        }

        setActionLoading(consultationId);

        const response = await fetch(
          `/api/provider/consultations/${encodeURIComponent(
            consultationId
          )}`,
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

        if (!response.ok || !data.success) {
          alert(
            data.message ||
              `Unable to ${
                action === "accept" ? "accept" : "reject"
              } consultation.`
          );

          return;
        }

        await loadConsultations(false);

        if (action === "accept") {
          alert("Consultation accepted successfully.");
        } else {
          alert("Consultation rejected successfully.");
        }
      } catch (error) {
        console.error("Consultation action error:", error);

        alert("Something went wrong. Please try again.");
      } finally {
        if (isMountedRef.current) {
          setActionLoading(null);
        }
      }
    },
    [loadConsultations]
  );

  // ====================================================
  // INITIAL LOAD + POLLING
  // ====================================================

  useEffect(() => {
    isMountedRef.current = true;

    const initialize = async () => {
      await Promise.all([
        loadProvider(),
        loadConsultations(true),
      ]);
    };

    initialize();

    pollingRef.current = setInterval(() => {
      loadProvider();
      loadConsultations(false);
    }, 5000);

    return () => {
      isMountedRef.current = false;

      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
    };
  }, [loadProvider, loadConsultations]);

  // ====================================================
  // PENDING CONSULTATIONS
  // ====================================================

  const pendingConsultations = useMemo(() => {
    return consultations.filter(
      (item) => item.status === "requested"
    );
  }, [consultations]);

  // ====================================================
  // ACTIVE / ACCEPTED CONSULTATIONS
  // ====================================================

  const activeConsultations = useMemo(() => {
    return consultations.filter(
      (item) =>
        item.status === "accepted" ||
        item.status === "active"
    );
  }, [consultations]);

  // ====================================================
  // COMPLETED CONSULTATIONS
  // ====================================================

  const completedConsultations = useMemo(() => {
    return consultations.filter(
      (item) => item.status === "completed"
    );
  }, [consultations]);

  // ====================================================
  // TOTAL EARNINGS
  // ====================================================

  const totalEarnings = useMemo(() => {
    return completedConsultations.reduce(
      (total, consultation) => {
        return total + Number(consultation.amount || 0);
      },
      0
    );
  }, [completedConsultations]);

  // ====================================================
  // CHAT URL
  // ====================================================

  const getChatUrl = useCallback(
    (consultation: Consultation) => {
      const consultationId = getConsultationId(consultation);

      const customerId =
        consultation.user?.id ||
        consultation.userId ||
        "";

      const panditId =
        consultation.panditId ||
        providerId ||
        "";

      return (
        `/provider/chat` +
        `?consultationId=${encodeURIComponent(
          consultationId
        )}` +
        `&userId=${encodeURIComponent(
          customerId
        )}` +
        `&panditId=${encodeURIComponent(
          panditId
        )}`
      );
    },
    [getConsultationId, providerId]
  );

  // ====================================================
  // MANUAL REFRESH
  // ====================================================

  const handleRefresh = async () => {
    await loadConsultations(true);
  };

  // ====================================================
  // LOADING
  // ====================================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#071424] px-5 text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />

          <p className="mt-4 text-gray-400">
            Loading Dashboard...
          </p>
        </div>
      </main>
    );
  }

  // ====================================================
  // PROVIDER NOT FOUND
  // ====================================================

  if (!provider) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#071424] px-5 text-white">
        <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-7 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10">
            <User
              size={30}
              className="text-red-400"
            />
          </div>

          <h2 className="mt-5 text-2xl font-bold">
            Provider Not Found
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Your provider session could not be found.
            Please login again to continue.
          </p>

          <Link
            href="/provider/login"
            className="mt-6 flex h-12 w-full items-center justify-center rounded-2xl bg-yellow-400 font-bold text-black transition active:scale-[0.98]"
          >
            Login Again
          </Link>
        </div>
      </main>
    );
  }

  // ====================================================
  // MAIN
  // ====================================================

  return (
    <main className="min-h-screen bg-[#071424] pb-28 text-white">
      <div className="mx-auto w-full max-w-md px-4 py-5">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <HeaderCard provider={provider} />

        {/* ================================================= */}
        {/* PROFILE COMPLETION */}
        {/* ================================================= */}

        <ProfileCompletion provider={provider} />

        {/* ================================================= */}
        {/* ACTIVE CONSULTATIONS */}
        {/* ================================================= */}

        {activeConsultations.length > 0 && (
          <section className="mt-7">

            {/* SECTION HEADER */}

            <div className="mb-4">
              <div className="flex items-center gap-2">
                <MessageSquare
                  size={22}
                  className="text-green-400"
                />

                <h2 className="text-xl font-bold">
                  Active Consultations
                </h2>
              </div>

              <p className="mt-1 text-xs text-gray-400">
                Customers currently connected with you
              </p>
            </div>

            {/* ACTIVE CARDS */}

            <div className="space-y-4">
              {activeConsultations.map(
                (consultation) => {
                  const consultationId =
                    getConsultationId(
                      consultation
                    );

                  const customerName =
                    consultation.user?.fullName ||
                    "Customer";

                  const chatUrl =
                    getChatUrl(consultation);

                  const isActive =
                    consultation.status ===
                    "active";

                  return (
                    <div
                      key={consultationId}
                      className="overflow-hidden rounded-3xl border border-green-400/20 bg-[#111C30] shadow-xl shadow-black/10"
                    >

                      {/* CUSTOMER */}

                      <div className="p-5">
                        <div className="flex items-center gap-3">

                          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-yellow-400/10 ring-1 ring-yellow-400/10">

                            {consultation.user
                              ?.profilePhoto ? (
                              <img
                                src={
                                  consultation.user
                                    .profilePhoto
                                }
                                alt={
                                  customerName
                                }
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <User
                                size={26}
                                className="text-yellow-400"
                              />
                            )}

                          </div>

                          <div className="min-w-0 flex-1">

                            <h3 className="truncate text-lg font-bold">
                              {customerName}
                            </h3>

                            <div className="mt-1 flex items-center gap-2">

                              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                              <span className="text-xs font-medium text-green-400">
                                {isActive
                                  ? "Chat Active"
                                  : "Accepted"}
                              </span>

                            </div>
                          </div>
                        </div>

                        {/* DETAILS */}

                        <div className="mt-5 grid grid-cols-2 gap-3">

                          <div className="rounded-2xl bg-white/5 p-4">
                            <Wallet
                              size={19}
                              className="text-yellow-400"
                            />

                            <p className="mt-2 text-xs text-gray-400">
                              Amount
                            </p>

                            <p className="mt-1 font-bold">
                              ₹
                              {Number(
                                consultation.amount ||
                                  0
                              )}
                            </p>
                          </div>

                          <div className="rounded-2xl bg-white/5 p-4">
                            <Clock
                              size={19}
                              className="text-green-400"
                            />

                            <p className="mt-2 text-xs text-gray-400">
                              Duration
                            </p>

                            <p className="mt-1 font-bold">
                              {
                                consultation.duration
                              }{" "}
                              min
                            </p>
                          </div>

                        </div>

                        {/* START / CHAT */}

                        <Link
                          href={chatUrl}
                          className="mt-5 flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-3.5 font-bold text-black transition active:scale-[0.98]"
                        >
                          <MessageCircle
                            size={20}
                          />

                          {isActive
                            ? "Continue Chat"
                            : "Open Chat"}

                          <ExternalLink
                            size={17}
                          />
                        </Link>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </section>
        )}

        {/* ================================================= */}
        {/* CONSULTATION REQUESTS */}
        {/* ================================================= */}

        <section className="mt-7">

          {/* SECTION HEADER */}

          <div className="flex items-start justify-between gap-3">

            <div>
              <div className="flex items-center gap-2">

                <MessageCircle
                  size={21}
                  className="text-yellow-400"
                />

                <h2 className="text-xl font-bold">
                  Consultation Requests
                </h2>
              </div>

              <p className="mt-1 text-xs text-gray-400">
                New customer requests will appear here
              </p>
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              disabled={
                consultationsLoading
              }
              aria-label="Refresh consultations"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 transition active:scale-95 disabled:opacity-50"
            >
              <RefreshCw
                size={18}
                className={
                  consultationsLoading
                    ? "animate-spin"
                    : ""
                }
              />
            </button>
          </div>

          {/* LOADING */}

          {consultationsLoading &&
            consultations.length === 0 && (
              <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">

                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />

                <p className="mt-3 text-sm text-gray-400">
                  Checking requests...
                </p>
              </div>
            )}

          {/* NO REQUEST */}

          {!consultationsLoading &&
            pendingConsultations.length === 0 && (
              <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400/10">
                  <MessageCircle
                    size={32}
                    className="text-yellow-400"
                  />
                </div>

                <h3 className="mt-4 text-lg font-bold">
                  No New Requests
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  New consultation requests
                  from customers will appear
                  here automatically.
                </p>

              </div>
            )}

          {/* PENDING REQUESTS */}

          <div className="mt-4 space-y-4">

            {pendingConsultations.map(
              (consultation) => {
                const consultationId =
                  getConsultationId(
                    consultation
                  );

                const customerName =
                  consultation.user?.fullName ||
                  "Customer";

                const isProcessing =
                  actionLoading ===
                  consultationId;

                return (
                  <div
                    key={consultationId}
                    className="overflow-hidden rounded-3xl border border-yellow-400/20 bg-[#111C30] shadow-xl shadow-black/10"
                  >

                    {/* HEADER */}

                    <div className="border-b border-white/10 p-5">

                      <div className="flex items-start justify-between gap-3">

                        <div className="flex min-w-0 items-center gap-3">

                          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-yellow-400/10">

                            {consultation.user
                              ?.profilePhoto ? (
                              <img
                                src={
                                  consultation.user
                                    .profilePhoto
                                }
                                alt={
                                  customerName
                                }
                                className="h-12 w-12 rounded-full object-cover"
                              />
                            ) : (
                              <User
                                size={24}
                                className="text-yellow-400"
                              />
                            )}

                          </div>

                          <div className="min-w-0">

                            <h3 className="truncate font-bold text-white">
                              {customerName}
                            </h3>

                            <p className="text-xs text-gray-400">
                              Customer
                            </p>
                          </div>

                        </div>

                        <span className="shrink-0 rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                          New Request
                        </span>

                      </div>
                    </div>

                    {/* DETAILS */}

                    <div className="grid grid-cols-2 gap-3 p-5">

                      <div className="rounded-2xl bg-white/5 p-4">

                        <Wallet
                          size={20}
                          className="text-yellow-400"
                        />

                        <p className="mt-2 text-xs text-gray-400">
                          Amount
                        </p>

                        <p className="mt-1 text-lg font-bold">
                          ₹
                          {Number(
                            consultation.amount ||
                              0
                          )}
                        </p>

                      </div>

                      <div className="rounded-2xl bg-white/5 p-4">

                        <Clock
                          size={20}
                          className="text-green-400"
                        />

                        <p className="mt-2 text-xs text-gray-400">
                          Duration
                        </p>

                        <p className="mt-1 text-lg font-bold">
                          {
                            consultation.duration
                          }{" "}
                          min
                        </p>

                      </div>

                    </div>

                    {/* CHAT INFO */}

                    <div className="mx-5 rounded-2xl bg-green-500/10 p-4">

                      <div className="flex items-center gap-3">

                        <MessageCircle
                          size={22}
                          className="shrink-0 text-green-400"
                        />

                        <div>
                          <p className="text-sm font-semibold text-green-400">
                            Chat Consultation
                          </p>

                          <p className="text-xs leading-5 text-gray-400">
                            Customer is waiting
                            for your response
                          </p>
                        </div>

                      </div>
                    </div>

                    {/* REQUEST TIME */}

                    {consultation.createdAt && (
                      <p className="px-5 pt-4 text-xs text-gray-500">
                        Requested{" "}
                        {new Date(
                          consultation.createdAt
                        ).toLocaleString(
                          "en-IN",
                          {
                            dateStyle: "medium",
                            timeStyle: "short",
                          }
                        )}
                      </p>
                    )}

                    {/* BUTTONS */}

                    <div className="grid grid-cols-2 gap-3 p-5">

                      {/* REJECT */}

                      <button
                        type="button"
                        onClick={() =>
                          handleConsultationAction(
                            consultationId,
                            "reject"
                          )
                        }
                        disabled={
                          isProcessing
                        }
                        className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-red-500/30 bg-red-500/10 font-semibold text-red-400 transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <X size={20} />

                        Reject
                      </button>

                      {/* ACCEPT */}

                      <button
                        type="button"
                        onClick={() =>
                          handleConsultationAction(
                            consultationId,
                            "accept"
                          )
                        }
                        disabled={
                          isProcessing
                        }
                        className="flex h-12 items-center justify-center gap-2 rounded-2xl bg-green-500 font-bold text-black transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                      >

                        {isProcessing ? (
                          <>
                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />

                            Processing
                          </>
                        ) : (
                          <>
                            <Check
                              size={20}
                            />

                            Accept
                          </>
                        )}

                      </button>

                    </div>
                  </div>
                );
              }
            )}

          </div>
        </section>

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}

        <div className="mt-7">

          <StatsCards
            earnings={totalEarnings}
            bookings={
              consultations.length
            }
            rating={
              provider.rating || 0
            }
            notifications={
              pendingConsultations.length
            }
          />

        </div>

        {/* ================================================= */}
        {/* PROFESSIONAL DETAILS */}
        {/* ================================================= */}

        <div className="mt-7">

          <h2 className="mb-4 text-xl font-bold text-white">
            Professional Details
          </h2>

          <div className="space-y-4">

            <InfoCard
              icon={
                <Briefcase size={22} />
              }
              title="Display Name"
              value={
                provider.displayName ||
                provider.fullName ||
                "-"
              }
            />

            <InfoCard
              icon={
                <Briefcase size={22} />
              }
              title="Business Name"
              value={
                provider.businessName ||
                "-"
              }
            />

            <InfoCard
              icon={
                <MapPin size={22} />
              }
              title="Location"
              value={`${provider.city || "-"}, ${
                provider.state || "-"
              }`}
            />

            <InfoCard
              icon={
                <Briefcase size={22} />
              }
              title="Category"
              value={
                provider.category ||
                "-"
              }
            />

            <InfoCard
              icon={
                <Briefcase size={22} />
              }
              title="Specialization"
              value={
                provider.specialization ||
                "-"
              }
            />

            <InfoCard
              icon={
                <Languages size={22} />
              }
              title="Languages"
              value={
                provider.languages ||
                "-"
              }
            />

            <InfoCard
              icon={
                <Briefcase size={22} />
              }
              title="Experience"
              value={
                provider.experience ||
                "-"
              }
            />

            <InfoCard
              icon={
                <Wallet size={22} />
              }
              title="Consultation Fee"
              value={
                provider.price
                  ? `₹${provider.price}`
                  : "-"
              }
            />

            <InfoCard
              icon={
                <MapPin size={22} />
              }
              title="Service Area"
              value={
                provider.serviceArea ||
                "-"
              }
            />

            <InfoCard
              icon={
                <Star size={22} />
              }
              title="Rating"
              value={`${provider.rating || 0}/5`}
            />

            <InfoCard
              icon={
                <BadgeCheck size={22} />
              }
              title="Verification"
              value={
                provider.isVerified
                  ? "Verified"
                  : "Pending"
              }
            />

          </div>
        </div>

        {/* ================================================= */}
        {/* ABOUT */}
        {/* ================================================= */}

        <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-5">

          <h2 className="text-lg font-bold text-white">
            About
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-300">
            {provider.about ||
              "No description added yet."}
          </p>

        </div>

        {/* ================================================= */}
        {/* QUICK ACTIONS */}
        {/* ================================================= */}

        <QuickActions />

      </div>
    </main>
  );
}