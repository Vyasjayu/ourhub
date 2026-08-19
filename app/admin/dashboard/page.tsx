"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/admin/Header";
import DashboardCards from "@/components/admin/DashboardCards";
import QuickActions from "@/components/admin/QuickActions";
import RecentProviders from "@/components/admin/RecentProviders";

import {
  CalendarCheck,
  Clock3,
  IndianRupee,
  ChevronRight,
  RefreshCw,
} from "lucide-react";

type DashboardData = {
  totalProviders: number;
  totalCustomers: number;
  totalBookings: number;
  pendingProviders: number;

  todayBookings: number;
  pendingBookings: number;
  totalRevenue: number;
};

type Booking = {
  _id?: string;
  id?: string;

  bookingType?: string;
  poojaName?: string;
  customerName?: string;
  mobile?: string;

  templeName?: string;
  templeCity?: string;

  date?: string;
  time?: string;

  amount?: number;
  poojaPrice?: number;
  totalAmount?: number;

  paymentStatus?: string;
  bookingStatus?: string;

  createdAt?: string;
};

export default function AdminDashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [stats, setStats] = useState<DashboardData>({
    totalProviders: 0,
    totalCustomers: 0,
    totalBookings: 0,
    pendingProviders: 0,
    todayBookings: 0,
    pendingBookings: 0,
    totalRevenue: 0,
  });

  const [recentBookings, setRecentBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      router.replace("/admin/login");
      return;
    }

    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setRefreshing(true);

      const token = localStorage.getItem("adminToken");

      if (!token) {
        router.replace("/admin/login");
        return;
      }

      /*
       * Dashboard API
       */
      const dashboardRes = await fetch("/api/admin/dashboard", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      const dashboardData = await dashboardRes.json();

      if (!dashboardData.success) {
        localStorage.removeItem("adminToken");
        router.replace("/admin/login");
        return;
      }

      const apiStats = dashboardData.stats || {};

      setStats({
        totalProviders: Number(apiStats.totalProviders || 0),
        totalCustomers: Number(apiStats.totalCustomers || 0),
        totalBookings: Number(apiStats.totalBookings || 0),
        pendingProviders: Number(apiStats.pendingProviders || 0),

        todayBookings: Number(apiStats.todayBookings || 0),
        pendingBookings: Number(apiStats.pendingBookings || 0),
        totalRevenue: Number(apiStats.totalRevenue || 0),
      });

      /*
       * Recent bookings
       *
       * API response expected:
       *
       * {
       *   success: true,
       *   bookings: [...]
       * }
       */
      try {
        const bookingRes = await fetch(
          "/api/admin/bookings?limit=5",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            cache: "no-store",
          }
        );

        if (bookingRes.ok) {
          const bookingData = await bookingRes.json();

          if (bookingData.success) {
            setRecentBookings(
              Array.isArray(bookingData.bookings)
                ? bookingData.bookings
                : []
            );
          }
        }
      } catch (bookingError) {
        console.log("Booking API error:", bookingError);
      }
    } catch (error) {
      console.log("Dashboard error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const formatMoney = (amount: number) => {
    return amount.toLocaleString("en-IN");
  };

  const getBookingTitle = (booking: Booking) => {
    return (
      booking.poojaName ||
      booking.bookingType ||
      "Pooja Booking"
    );
  };

  const getCustomerName = (booking: Booking) => {
    return booking.customerName || "Customer";
  };

  const getStatusClass = (status?: string) => {
    const value = status?.toLowerCase();

    if (
      value === "confirmed" ||
      value === "paid" ||
      value === "success"
    ) {
      return "bg-green-500/10 text-green-400";
    }

    if (
      value === "cancelled" ||
      value === "failed"
    ) {
      return "bg-red-500/10 text-red-400";
    }

    return "bg-yellow-500/10 text-yellow-400";
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#071424] text-white">
        <div className="text-center">
          <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-yellow-400 border-t-transparent" />

          <p className="text-sm text-gray-400">
            Loading Dashboard...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#071424] pb-28 text-white">
      <div className="mx-auto w-full max-w-md px-4 py-5">

        {/* HEADER */}

        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <Header />
          </div>

          <button
            type="button"
            onClick={loadDashboard}
            disabled={refreshing}
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition active:scale-95 disabled:opacity-50"
          >
            <RefreshCw
              size={17}
              className={
                refreshing
                  ? "animate-spin"
                  : ""
              }
            />
          </button>
        </div>

        {/* MAIN DASHBOARD CARDS */}

        <DashboardCards stats={stats} />

        {/* BOOKING SUMMARY */}

        <section className="mt-5">

          <div className="mb-3 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold">
                Booking Overview
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                Online & Offline Pooja bookings
              </p>
            </div>

            <CalendarCheck
              size={18}
              className="text-yellow-400"
            />
          </div>

          <div className="grid grid-cols-3 gap-2">

            {/* TODAY */}

            <div className="rounded-2xl border border-white/10 bg-[#0b1726] p-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <CalendarCheck size={16} />
              </div>

              <p className="mt-3 text-[9px] text-gray-500">
                Today
              </p>

              <p className="mt-1 text-lg font-extrabold">
                {stats.todayBookings}
              </p>

            </div>

            {/* PENDING */}

            <div className="rounded-2xl border border-white/10 bg-[#0b1726] p-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-400">
                <Clock3 size={16} />
              </div>

              <p className="mt-3 text-[9px] text-gray-500">
                Pending
              </p>

              <p className="mt-1 text-lg font-extrabold">
                {stats.pendingBookings}
              </p>

            </div>

            {/* REVENUE */}

            <div className="rounded-2xl border border-white/10 bg-[#0b1726] p-3">

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                <IndianRupee size={16} />
              </div>

              <p className="mt-3 text-[9px] text-gray-500">
                Revenue
              </p>

              <p className="mt-1 truncate text-base font-extrabold text-green-400">
                ₹{formatMoney(stats.totalRevenue)}
              </p>

            </div>

          </div>

        </section>

        {/* NEW BOOKING ALERT */}

        {stats.pendingBookings > 0 && (
          <button
            type="button"
            onClick={() =>
              router.push("/admin/bookings")
            }
            className="mt-4 flex w-full items-center gap-3 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-4 text-left transition active:scale-[0.99]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-black">
              <CalendarCheck size={19} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-yellow-400">
                New Booking Requires Attention
              </p>

              <p className="mt-1 text-[10px] leading-4 text-gray-400">
                You have {stats.pendingBookings} pending
                booking
                {stats.pendingBookings > 1
                  ? "s"
                  : ""}{" "}
                to review.
              </p>
            </div>

            <ChevronRight
              size={18}
              className="shrink-0 text-yellow-400"
            />
          </button>
        )}

        {/* QUICK ACTIONS */}

        <div className="mt-5">
          <QuickActions />
        </div>

        {/* RECENT BOOKINGS */}

        <section className="mt-6">

          <div className="mb-3 flex items-center justify-between">

            <div>
              <h2 className="text-sm font-bold">
                Recent Bookings
              </h2>

              <p className="mt-1 text-[10px] text-gray-500">
                Latest customer bookings
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                router.push("/admin/bookings")
              }
              className="text-[10px] font-semibold text-yellow-400"
            >
              View All
            </button>

          </div>

          {recentBookings.length === 0 ? (

            <div className="rounded-2xl border border-white/10 bg-[#0b1726] p-6 text-center">

              <CalendarCheck
                size={26}
                className="mx-auto text-gray-600"
              />

              <p className="mt-3 text-xs font-semibold text-gray-400">
                No bookings yet
              </p>

              <p className="mt-1 text-[9px] text-gray-600">
                New online or offline pooja bookings
                will appear here.
              </p>

            </div>

          ) : (

            <div className="space-y-2">

              {recentBookings.map(
                (booking, index) => {

                  const amount =
                    Number(
                      booking.totalAmount ??
                        booking.poojaPrice ??
                        booking.amount ??
                        0
                    );

                  const status =
                    booking.bookingStatus ||
                    booking.paymentStatus ||
                    "pending";

                  return (
                    <button
                      key={
                        booking._id ||
                        booking.id ||
                        index
                      }
                      type="button"
                      onClick={() =>
                        router.push(
                          "/admin/bookings"
                        )
                      }
                      className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1726] p-3 text-left transition active:scale-[0.99]"
                    >

                      {/* ICON */}

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                        <CalendarCheck
                          size={17}
                        />
                      </div>

                      {/* INFO */}

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-xs font-bold">
                          {getBookingTitle(
                            booking
                          )}
                        </p>

                        <p className="mt-1 truncate text-[9px] text-gray-500">
                          {getCustomerName(
                            booking
                          )}
                          {booking.mobile
                            ? ` • ${booking.mobile}`
                            : ""}
                        </p>

                        {booking.templeName && (
                          <p className="mt-1 truncate text-[8px] text-gray-600">
                            {booking.templeName}
                            {booking.templeCity
                              ? `, ${booking.templeCity}`
                              : ""}
                          </p>
                        )}

                      </div>

                      {/* RIGHT */}

                      <div className="shrink-0 text-right">

                        <p className="text-xs font-bold text-yellow-400">
                          ₹{formatMoney(amount)}
                        </p>

                        <span
                          className={`mt-1 inline-flex rounded-full px-2 py-1 text-[7px] font-bold uppercase ${getStatusClass(
                            status
                          )}`}
                        >
                          {status}
                        </span>

                      </div>

                    </button>
                  );
                }
              )}

            </div>
          )}

        </section>

        {/* PROVIDERS */}

        <div className="mt-6">
          <RecentProviders />
        </div>

      </div>
    </main>
  );
}