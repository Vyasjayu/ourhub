"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Headphones,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  RefreshCw,
  Search,
  Sparkles,
  XCircle,
} from "lucide-react";

type BookingStatus =
  | "upcoming"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "pending";

interface Booking {
  _id?: string;
  id?: string;
  bookingId?: string;

  serviceName?: string;
  service?: string;
  category?: string;

  providerName?: string;
  provider?: string;

  date?: string;
  bookingDate?: string;

  time?: string;
  bookingTime?: string;

  amount?: number | string;
  price?: number | string;

  status?: BookingStatus | string;

  address?: string;
  location?: string;

  image?: string;
  serviceImage?: string;

  createdAt?: string;
}

type Filter = "all" | "upcoming" | "completed" | "cancelled";

const demoBookings: Booking[] = [];

const filters: {
  id: Filter;
  label: string;
  icon: typeof CalendarDays;
}[] = [
  {
    id: "all",
    label: "All",
    icon: FileText,
  },
  {
    id: "upcoming",
    label: "Upcoming",
    icon: CalendarDays,
  },
  {
    id: "completed",
    label: "Completed",
    icon: CheckCircle2,
  },
  {
    id: "cancelled",
    label: "Cancelled",
    icon: XCircle,
  },
];

function normalizeStatus(status?: string): BookingStatus {
  const value = String(status || "").toLowerCase();

  if (
    value.includes("cancel") ||
    value.includes("reject") ||
    value.includes("failed")
  ) {
    return "cancelled";
  }

  if (
    value.includes("complete") ||
    value.includes("done") ||
    value.includes("finished")
  ) {
    return "completed";
  }

  if (
    value.includes("confirm") ||
    value.includes("accept") ||
    value.includes("approved")
  ) {
    return "confirmed";
  }

  return "pending";
}

function getServiceName(booking: Booking) {
  return (
    booking.serviceName ||
    booking.service ||
    booking.category ||
    "OurHub Service"
  );
}

function getBookingId(booking: Booking, index: number) {
  return (
    booking.bookingId ||
    booking.id ||
    booking._id ||
    `OH-${String(index + 1).padStart(4, "0")}`
  );
}

function getAmount(booking: Booking) {
  const value = booking.amount ?? booking.price;

  if (value === undefined || value === null || value === "") {
    return null;
  }

  const numeric = Number(value);

  if (Number.isNaN(numeric)) {
    return String(value);
  }

  return `₹${numeric.toLocaleString("en-IN")}`;
}

function formatDate(value?: string) {
  if (!value) return "Date not available";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getStatusLabel(status: BookingStatus) {
  switch (status) {
    case "completed":
      return "Completed";

    case "cancelled":
      return "Cancelled";

    case "confirmed":
      return "Confirmed";

    case "upcoming":
      return "Upcoming";

    default:
      return "Pending";
  }
}

function getStatusStyles(status: BookingStatus) {
  switch (status) {
    case "completed":
      return {
        wrapper:
          "border-green-400/15 bg-green-500/[0.07] text-green-400",
        dot: "bg-green-400",
        icon: CheckCircle2,
      };

    case "cancelled":
      return {
        wrapper:
          "border-red-400/15 bg-red-500/[0.07] text-red-400",
        dot: "bg-red-400",
        icon: XCircle,
      };

    case "confirmed":
      return {
        wrapper:
          "border-blue-400/15 bg-blue-500/[0.07] text-blue-300",
        dot: "bg-blue-400",
        icon: CheckCircle2,
      };

    default:
      return {
        wrapper:
          "border-[#DFAE45]/20 bg-[#DFAE45]/[0.07] text-[#E7B94F]",
        dot: "bg-[#DFAE45]",
        icon: Clock3,
      };
  }
}

function getServiceInitials(name: string) {
  const words = name.trim().split(/\s+/);

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0]}${words[1][0]}`.toUpperCase();
}

function BookingCard({
  booking,
  index,
}: {
  booking: Booking;
  index: number;
}) {
  const serviceName = getServiceName(booking);
  const bookingId = getBookingId(booking, index);
  const status = normalizeStatus(booking.status);
  const statusStyles = getStatusStyles(status);
  const StatusIcon = statusStyles.icon;

  const image = booking.image || booking.serviceImage;
  const amount = getAmount(booking);

  const date = booking.date || booking.bookingDate;
  const time = booking.time || booking.bookingTime;

  return (
    <article className="group relative overflow-hidden rounded-[26px] border border-white/[0.07] bg-gradient-to-br from-[#0D1A2A] via-[#0A1624] to-[#07111D] shadow-[0_12px_45px_rgba(0,0,0,0.20)] transition-all duration-300 hover:border-[#DFAE45]/20">
      {/* top glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#DFAE45]/[0.05] blur-3xl" />

      {/* premium top line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/35 to-transparent" />

      <div className="relative p-4">
        {/* service row */}
        <div className="flex items-start gap-3">
          <div className="relative h-[62px] w-[62px] shrink-0 overflow-hidden rounded-[19px] border border-white/[0.08] bg-[#111F31]">
            {image ? (
              <img
                src={image}
                alt={serviceName}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#18283B] to-[#0A1421]">
                <span className="text-[15px] font-black text-[#DFAE45]">
                  {getServiceInitials(serviceName)}
                </span>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="mb-1 text-[9px] font-black uppercase tracking-[1.4px] text-[#DFAE45]">
                  OurHub Service
                </p>

                <h3 className="truncate text-[16px] font-extrabold tracking-[-0.2px] text-white">
                  {serviceName}
                </h3>
              </div>

              <div
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[9px] font-extrabold ${statusStyles.wrapper}`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${statusStyles.dot}`}
                />

                <span>{getStatusLabel(status)}</span>
              </div>
            </div>

            <p className="mt-1 truncate text-[11px] text-gray-500">
              Booking ID • {bookingId}
            </p>
          </div>
        </div>

        {/* divider */}
        <div className="my-4 h-px bg-white/[0.055]" />

        {/* details */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-[17px] border border-white/[0.05] bg-white/[0.025] p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DFAE45]/[0.08]">
                <CalendarDays
                  size={14}
                  strokeWidth={2}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-[1px] text-gray-600">
                  Date
                </p>

                <p className="mt-0.5 truncate text-[11px] font-bold text-gray-200">
                  {formatDate(date)}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[17px] border border-white/[0.05] bg-white/[0.025] p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DFAE45]/[0.08]">
                <Clock3
                  size={14}
                  strokeWidth={2}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[8px] font-bold uppercase tracking-[1px] text-gray-600">
                  Time
                </p>

                <p className="mt-0.5 truncate text-[11px] font-bold text-gray-200">
                  {time || "To be confirmed"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* location */}
        {(booking.address || booking.location) && (
          <div className="mt-2.5 flex items-center gap-2.5 rounded-[17px] border border-white/[0.05] bg-white/[0.025] px-3 py-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#DFAE45]/[0.08]">
              <MapPin
                size={14}
                strokeWidth={2}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="truncate text-[11px] font-medium text-gray-400">
              {booking.address || booking.location}
            </p>
          </div>
        )}

        {/* provider + amount */}
        <div className="mt-3 flex items-center justify-between">
          <div className="min-w-0">
            {booking.providerName || booking.provider ? (
              <>
                <p className="text-[8px] font-bold uppercase tracking-[1px] text-gray-600">
                  Professional
                </p>

                <p className="mt-1 truncate text-[11px] font-bold text-gray-300">
                  {booking.providerName || booking.provider}
                </p>
              </>
            ) : (
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
                <CheckCircle2 size={12} className="text-green-400" />
                Verified Service
              </div>
            )}
          </div>

          {amount && (
            <div className="text-right">
              <p className="text-[8px] font-bold uppercase tracking-[1px] text-gray-600">
                Amount
              </p>

              <p className="mt-0.5 text-[15px] font-black text-[#E7B94F]">
                {amount}
              </p>
            </div>
          )}
        </div>

        {/* actions */}
        <div className="mt-4 flex gap-2">
          <Link
            href={`/bookings/${bookingId}`}
            className="group/button flex h-[45px] flex-1 items-center justify-center gap-2 rounded-[15px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.06] text-[11px] font-extrabold text-[#E7B94F] transition-all hover:border-[#DFAE45]/40 hover:bg-[#DFAE45]/[0.10] active:scale-[0.98]"
          >
            <FileText size={15} />
            <span>View Details</span>
            <ChevronRight
              size={14}
              className="transition-transform group-hover/button:translate-x-0.5"
            />
          </Link>

          <a
            href="https://wa.me/918878632431"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact OurHub"
            className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[15px] border border-green-400/15 bg-green-500/[0.06] text-green-400 transition-all hover:border-green-400/30 hover:bg-green-500/[0.10] active:scale-95"
          >
            <MessageCircle size={18} />
          </a>
        </div>
      </div>

      {/* bottom status strip */}
      <div className="flex items-center gap-2 border-t border-white/[0.045] bg-black/[0.10] px-4 py-2.5">
        <StatusIcon
          size={12}
          strokeWidth={2.3}
          className={statusStyles.wrapper.includes("green") ? "text-green-400" : "text-[#DFAE45]"}
        />

        <span className="text-[8px] font-bold uppercase tracking-[1px] text-gray-600">
          {status === "completed"
            ? "Service successfully completed"
            : status === "cancelled"
              ? "This booking was cancelled"
              : status === "confirmed"
                ? "Your booking is confirmed"
                : "OurHub is processing your booking"}
        </span>
      </div>
    </article>
  );
}

function EmptyState({ filter }: { filter: Filter }) {
  const content = {
    all: {
      icon: PackageCheck,
      title: "No Bookings Yet",
      description:
        "Your booked OurHub services will appear here once you make your first booking.",
    },
    upcoming: {
      icon: CalendarDays,
      title: "No Upcoming Bookings",
      description:
        "You don't have any upcoming services scheduled right now.",
    },
    completed: {
      icon: CheckCircle2,
      title: "No Completed Bookings",
      description:
        "Your completed services and booking history will appear here.",
    },
    cancelled: {
      icon: XCircle,
      title: "No Cancelled Bookings",
      description:
        "Cancelled bookings will appear here.",
    },
  }[filter];

  const Icon = content.icon;

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-gradient-to-b from-[#0C1928] to-[#07111D] px-6 py-10 text-center">
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-48 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.06] blur-3xl" />

      <div className="relative mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-[23px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.06] shadow-[0_15px_40px_rgba(223,174,69,0.06)]">
        <Icon size={29} strokeWidth={1.7} className="text-[#DFAE45]" />

        <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#07111D] bg-green-400">
          <CheckCircle2 size={11} className="text-[#07111D]" />
        </div>
      </div>

      <h3 className="relative mt-5 text-[18px] font-extrabold text-white">
        {content.title}
      </h3>

      <p className="relative mx-auto mt-2 max-w-[290px] text-[11px] leading-5 text-gray-500">
        {content.description}
      </p>

      <Link
        href="/services"
        className="relative mt-6 inline-flex h-[45px] items-center justify-center gap-2 rounded-[15px] bg-gradient-to-r from-[#DFAE45] to-[#FFD86A] px-5 text-[11px] font-black text-black shadow-[0_10px_30px_rgba(223,174,69,0.15)] transition-all hover:shadow-[0_12px_35px_rgba(223,174,69,0.25)] active:scale-[0.98]"
      >
        <Sparkles size={15} />
        Explore Services
        <ChevronRight size={15} />
      </Link>
    </div>
  );
}

function LoadingCard() {
  return (
    <div className="animate-pulse rounded-[26px] border border-white/[0.06] bg-[#0A1624] p-4">
      <div className="flex gap-3">
        <div className="h-[62px] w-[62px] rounded-[19px] bg-white/[0.05]" />

        <div className="flex-1">
          <div className="h-2.5 w-20 rounded-full bg-white/[0.05]" />
          <div className="mt-2 h-4 w-36 rounded-full bg-white/[0.06]" />
          <div className="mt-2 h-2 w-24 rounded-full bg-white/[0.04]" />
        </div>
      </div>

      <div className="my-4 h-px bg-white/[0.04]" />

      <div className="grid grid-cols-2 gap-2.5">
        <div className="h-14 rounded-[17px] bg-white/[0.035]" />
        <div className="h-14 rounded-[17px] bg-white/[0.035]" />
      </div>

      <div className="mt-3 h-11 rounded-[15px] bg-white/[0.04]" />
    </div>
  );
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [activeFilter, setActiveFilter] = useState<Filter>("all");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const loadBookings = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await fetch("/api/bookings", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Unable to load bookings");
      }

      const data = await response.json();

      const list = Array.isArray(data)
        ? data
        : Array.isArray(data?.bookings)
          ? data.bookings
          : Array.isArray(data?.data)
            ? data.data
            : [];

      setBookings(list);
    } catch {
      /*
       * Keep the page usable even if the API is not ready.
       * Replace demoBookings with [] to show the empty state.
       */
      setBookings(demoBookings);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const filteredBookings = useMemo(() => {
    let result = [...bookings];

    if (activeFilter === "completed") {
      result = result.filter(
        (booking) => normalizeStatus(booking.status) === "completed"
      );
    }

    if (activeFilter === "cancelled") {
      result = result.filter(
        (booking) => normalizeStatus(booking.status) === "cancelled"
      );
    }

    if (activeFilter === "upcoming") {
      result = result.filter((booking) => {
        const status = normalizeStatus(booking.status);

        return (
          status === "pending" ||
          status === "confirmed" ||
          status === "upcoming"
        );
      });
    }

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((booking) => {
        const service = getServiceName(booking).toLowerCase();
        const id = String(
          booking.bookingId || booking.id || booking._id || ""
        ).toLowerCase();

        return service.includes(query) || id.includes(query);
      });
    }

    return result;
  }, [bookings, activeFilter, search]);

  const counts = useMemo(() => {
    return {
      all: bookings.length,
      upcoming: bookings.filter((booking) => {
        const status = normalizeStatus(booking.status);

        return (
          status === "pending" ||
          status === "confirmed" ||
          status === "upcoming"
        );
      }).length,
      completed: bookings.filter(
        (booking) => normalizeStatus(booking.status) === "completed"
      ).length,
      cancelled: bookings.filter(
        (booking) => normalizeStatus(booking.status) === "cancelled"
      ).length,
    };
  }, [bookings]);

  return (
    <main className="min-h-screen bg-[#02060D] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#050B14] pb-28">
        {/* Ambient background */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#DFAE45]/[0.035] blur-[100px]" />
          <div className="absolute -right-32 top-[35%] h-64 w-64 rounded-full bg-blue-500/[0.025] blur-[100px]" />
        </div>

        {/* Header */}
        <header className="sticky top-0 z-[70] border-b border-white/[0.06] bg-[#050B14]/90 backdrop-blur-2xl">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/45 to-transparent" />

          <div className="flex h-[70px] items-center gap-3 px-4">
            <Link
              href="/"
              aria-label="Go back"
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[14px] border border-white/[0.08] bg-white/[0.035] text-gray-300 transition-all hover:border-[#DFAE45]/25 hover:text-white active:scale-95"
            >
              <ArrowLeft size={19} />
            </Link>

            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[14px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#DFAE45]/15 to-transparent">
              <CalendarDays
                size={20}
                strokeWidth={2}
                className="text-[#E7B94F]"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h1 className="truncate text-[17px] font-extrabold tracking-[-0.3px] text-white">
                  My Bookings
                </h1>

                <span className="hidden min-[390px]:inline-flex items-center gap-1 rounded-full border border-green-400/15 bg-green-500/[0.06] px-2 py-1 text-[7px] font-black uppercase tracking-[0.8px] text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Live
                </span>
              </div>

              <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[1.2px] text-gray-600">
                Manage your services
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSearchOpen((value) => !value)}
              aria-label="Search bookings"
              className={`flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[13px] border transition-all ${
                searchOpen
                  ? "border-[#DFAE45]/30 bg-[#DFAE45]/[0.08] text-[#E7B94F]"
                  : "border-white/[0.07] bg-white/[0.03] text-gray-400"
              }`}
            >
              <Search size={17} />
            </button>

            <button
              type="button"
              onClick={() => loadBookings(true)}
              aria-label="Refresh bookings"
              className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[13px] border border-white/[0.07] bg-white/[0.03] text-gray-400 transition-all active:scale-95"
            >
              <RefreshCw
                size={16}
                className={refreshing ? "animate-spin" : ""}
              />
            </button>
          </div>

          {searchOpen && (
            <div className="px-4 pb-3">
              <div className="flex h-[45px] items-center gap-2 rounded-[15px] border border-white/[0.08] bg-[#0A1624] px-3">
                <Search size={15} className="shrink-0 text-gray-500" />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search service or booking ID..."
                  className="min-w-0 flex-1 bg-transparent text-[11px] text-white outline-none placeholder:text-gray-600"
                  autoFocus
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="text-gray-500"
                  >
                    <XCircle size={15} />
                  </button>
                )}
              </div>
            </div>
          )}
        </header>

        {/* Main content */}
        <div className="relative">
          {/* Hero */}
          <section className="relative px-4 pb-2 pt-6">
            <div className="pointer-events-none absolute -right-16 top-0 h-32 w-32 rounded-full bg-[#DFAE45]/[0.06] blur-3xl" />

            <div className="relative flex items-end justify-between">
              <div>
                <p className="mb-2 flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[1.6px] text-[#DFAE45]">
                  <Sparkles size={11} />
                  OurHub Services
                </p>

                <h2 className="text-[27px] font-black leading-[1.05] tracking-[-1px] text-white">
                  Your Bookings
                </h2>

                <p className="mt-2 text-[11px] leading-5 text-gray-500">
                  Track, manage and review all your services.
                </p>
              </div>

              <div className="hidden min-[380px]:block">
                <div className="rounded-[17px] border border-[#DFAE45]/10 bg-[#DFAE45]/[0.05] px-3 py-2 text-right">
                  <p className="text-[8px] font-bold uppercase tracking-[1px] text-gray-600">
                    Total
                  </p>

                  <p className="mt-0.5 text-[18px] font-black text-[#E7B94F]">
                    {bookings.length}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Filter tabs */}
          <section className="px-4 pb-1 pt-5">
            <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => {
                const Icon = filter.icon;
                const active = activeFilter === filter.id;

                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex h-[39px] shrink-0 items-center gap-1.5 rounded-[13px] border px-3.5 text-[10px] font-extrabold transition-all active:scale-[0.97] ${
                      active
                        ? "border-[#DFAE45]/35 bg-[#DFAE45]/[0.10] text-[#E7B94F] shadow-[0_6px_20px_rgba(223,174,69,0.06)]"
                        : "border-white/[0.06] bg-white/[0.025] text-gray-500 hover:border-white/[0.10] hover:text-gray-300"
                    }`}
                  >
                    <Icon size={14} />

                    <span>{filter.label}</span>

                    <span
                      className={`ml-0.5 rounded-full px-1.5 py-0.5 text-[8px] ${
                        active
                          ? "bg-[#DFAE45]/15 text-[#E7B94F]"
                          : "bg-white/[0.05] text-gray-600"
                      }`}
                    >
                      {counts[filter.id]}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Content */}
          <section className="px-4 pb-8 pt-5">
            {loading ? (
              <div className="space-y-3">
                <LoadingCard />
                <LoadingCard />
              </div>
            ) : filteredBookings.length > 0 ? (
              <div className="space-y-3">
                {filteredBookings.map((booking, index) => (
                  <BookingCard
                    key={
                      booking._id ||
                      booking.id ||
                      booking.bookingId ||
                      index
                    }
                    booking={booking}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <EmptyState filter={activeFilter} />
            )}
          </section>

          {/* Support card */}
          <section className="px-4 pb-7">
            <div className="relative overflow-hidden rounded-[25px] border border-white/[0.07] bg-gradient-to-br from-[#0C1928] to-[#07111D] p-4">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/[0.05] blur-3xl" />

              <div className="relative flex items-center gap-3">
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[15px] border border-green-400/15 bg-green-500/[0.07]">
                  <Headphones
                    size={20}
                    strokeWidth={2}
                    className="text-green-400"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-extrabold text-white">
                    Need help with a booking?
                  </p>

                  <p className="mt-1 text-[9px] leading-4 text-gray-500">
                    OurHub support team is here to help.
                  </p>
                </div>

                <a
                  href="https://wa.me/918878632431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[13px] bg-green-500 text-black shadow-[0_8px_22px_rgba(34,197,94,0.12)] transition-all active:scale-95"
                >
                  <MessageCircle size={18} />
                </a>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href="tel:+918878632431"
                  className="flex h-[40px] items-center justify-center gap-2 rounded-[13px] border border-white/[0.07] bg-white/[0.025] text-[9px] font-bold text-gray-400 transition-all hover:text-white"
                >
                  <Phone size={13} className="text-[#DFAE45]" />
                  Call Support
                </a>

                <a
                  href="https://wa.me/918878632431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[40px] items-center justify-center gap-2 rounded-[13px] border border-white/[0.07] bg-white/[0.025] text-[9px] font-bold text-gray-400 transition-all hover:text-white"
                >
                  <MessageCircle size={13} className="text-green-400" />
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Trust footer */}
          <section className="px-4 pb-10">
            <div className="flex items-center justify-center gap-2 text-center">
              <CheckCircle2
                size={12}
                strokeWidth={2.5}
                className="text-green-400"
              />

              <span className="text-[8px] font-bold uppercase tracking-[1px] text-gray-600">
                Secure Bookings
              </span>

              <span className="h-1 w-1 rounded-full bg-white/10" />

              <span className="text-[8px] font-bold uppercase tracking-[1px] text-gray-600">
                Verified Professionals
              </span>

              <span className="h-1 w-1 rounded-full bg-white/10" />

              <span className="text-[8px] font-bold uppercase tracking-[1px] text-gray-600">
                OurHub
              </span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}