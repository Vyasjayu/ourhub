"use client";

import { FormEvent, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  HelpCircle,
  MapPin,
  Phone,
  ShieldCheck,
  User,
  Video,
} from "lucide-react";

import { poojas } from "@/lib/pooja-data";

export default function PoojaBookingPage() {
  const params = useParams();
  const router = useRouter();

  const slug = String(params?.slug || "");

  const pooja = useMemo(() => {
    return poojas.find((item) => item.slug === slug);
  }, [slug]);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [gotra, setGotra] = useState("");
  const [sankalp, setSankalp] = useState("");

  const [paymentMethod, setPaymentMethod] = useState<
    "online" | "contact"
  >("online");

  const [loading, setLoading] = useState(false);

  const OURHUB_WHATSAPP = "918878632431";

  const minDate = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!pooja) {
      alert("Pooja not found.");
      return;
    }

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    if (!city.trim()) {
      alert("Please enter your city.");
      return;
    }

    if (!date) {
      alert("Please select pooja date.");
      return;
    }

    if (!time) {
      alert("Please select preferred time.");
      return;
    }

    setLoading(true);

    const bookingData = {
      poojaSlug: pooja.slug,
      poojaName: pooja.name,
      icon: pooja.icon,
      duration: pooja.duration,
      price: pooja.price,

      customerName: name.trim(),
      mobile,
      city: city.trim(),

      date,
      time,

      gotra: gotra.trim(),
      sankalp: sankalp.trim(),

      paymentMethod,

      bookingStatus:
        paymentMethod === "online"
          ? "payment_pending"
          : "contact_requested",

      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "ourhub-pooja-booking",
      JSON.stringify(bookingData)
    );

    // =====================================================
    // CONTACT ME FIRST
    // =====================================================

    if (paymentMethod === "contact") {
      const formattedDate = new Date(
        `${date}T00:00:00`
      ).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      const whatsappMessage = `
🙏 *OurHub Services - Pooja Booking Request*

━━━━━━━━━━━━━━━━━━
🪔 *POOJA DETAILS*
━━━━━━━━━━━━━━━━━━

Pooja: ${pooja.name}
Duration: ${pooja.duration}
Amount: ₹${pooja.price.toLocaleString("en-IN")}

━━━━━━━━━━━━━━━━━━
👤 *CUSTOMER DETAILS*
━━━━━━━━━━━━━━━━━━

Name: ${name.trim()}
Mobile: +91 ${mobile}
City: ${city.trim()}

━━━━━━━━━━━━━━━━━━
📅 *BOOKING DETAILS*
━━━━━━━━━━━━━━━━━━

Date: ${formattedDate}
Preferred Time: ${time}

Gotra: ${gotra.trim() || "Not provided"}

Sankalp / Special Request:
${sankalp.trim() || "Not provided"}

━━━━━━━━━━━━━━━━━━
📞 *BOOKING PREFERENCE*
━━━━━━━━━━━━━━━━━━

Contact Me First

Please contact me to confirm the pooja booking and payment details.

Thank you,
*OurHub Services*
      `.trim();

      const whatsappUrl =
        `https://wa.me/${OURHUB_WHATSAPP}` +
        `?text=${encodeURIComponent(whatsappMessage)}`;

      window.location.href = whatsappUrl;
      return;
    }

    // =====================================================
    // ONLINE PAYMENT
    // =====================================================

    // Payment page will read booking from localStorage.
    router.push(`/pooja/online/${pooja.slug}/book/payment`);
  };

  // =======================================================
  // NOT FOUND
  // =======================================================

  if (!pooja) {
    return (
      <main className="min-h-screen bg-[#050b12] px-4 py-12 text-white">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#10243b] text-4xl">
            🙏
          </div>

          <h1 className="mt-5 text-xl font-bold">
            Pooja Not Found
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            The selected pooja is not available.
          </p>

          <button
            type="button"
            onClick={() => router.push("/pooja/online")}
            className="mt-6 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-black"
          >
            Back to Online Pooja
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050b12] pb-32 text-white">
      {/* HEADER */}

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111d]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-14 w-full max-w-md items-center gap-3 px-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">
              Book Pooja
            </p>

            <p className="text-[10px] text-gray-500">
              OurHub Services
            </p>
          </div>

          <ShieldCheck
            size={20}
            className="shrink-0 text-yellow-400"
          />
        </div>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-md"
      >
        {/* POOJA SUMMARY */}

        <section className="px-4 pt-5">
          <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-[#132d49] to-[#08131f] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1b3858] text-3xl">
                {pooja.icon}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <ShieldCheck
                    size={12}
                    className="text-yellow-400"
                  />

                  <span className="text-[9px] font-semibold text-yellow-400">
                    Verified Pooja
                  </span>
                </div>

                <h1 className="mt-1 truncate text-lg font-bold">
                  {pooja.name}
                </h1>

                <div className="mt-1 flex items-center gap-3 text-[10px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock3 size={12} />
                    {pooja.duration}
                  </span>

                  <span className="font-bold text-yellow-400">
                    ₹{pooja.price.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YOUR DETAILS */}

        <section className="px-4 pt-6">
          <h2 className="text-lg font-bold">
            Your Details
          </h2>

          <p className="mt-1 text-[11px] text-gray-500">
            Please provide your details for the pooja booking.
          </p>
        </section>

        {/* NAME */}

        <section className="px-4 pt-4">
          <label className="mb-2 block text-xs font-semibold text-gray-300">
            Full Name *
          </label>

          <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#0d1a28] px-3">
            <User
              size={18}
              className="text-yellow-400"
            />

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
            />
          </div>
        </section>

        {/* MOBILE */}

        <section className="px-4 pt-4">
          <label className="mb-2 block text-xs font-semibold text-gray-300">
            Mobile Number *
          </label>

          <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#0d1a28] px-3">
            <Phone
              size={18}
              className="text-yellow-400"
            />

            <span className="text-sm text-gray-400">
              +91
            </span>

            <input
              type="tel"
              inputMode="numeric"
              maxLength={10}
              value={mobile}
              onChange={(e) =>
                setMobile(
                  e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10)
                )
              }
              placeholder="10 digit mobile number"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
            />
          </div>
        </section>

        {/* CITY */}

        <section className="px-4 pt-4">
          <label className="mb-2 block text-xs font-semibold text-gray-300">
            City *
          </label>

          <div className="flex h-12 items-center gap-3 rounded-xl border border-white/10 bg-[#0d1a28] px-3">
            <MapPin
              size={18}
              className="text-yellow-400"
            />

            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Indore, Ujjain, Ratlam..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
            />
          </div>
        </section>

        {/* DATE TIME */}

        <section className="px-4 pt-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-300">
                Pooja Date *
              </label>

              <div className="flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-[#0d1a28] px-3">
                <CalendarDays
                  size={17}
                  className="text-yellow-400"
                />

                <input
                  type="date"
                  min={minDate}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full min-w-0 bg-transparent text-xs text-white outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-300">
                Preferred Time *
              </label>

              <div className="flex h-12 items-center gap-2 rounded-xl border border-white/10 bg-[#0d1a28] px-3">
                <Clock3
                  size={17}
                  className="text-yellow-400"
                />

                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full min-w-0 bg-transparent text-xs text-white outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* GOTRA */}

        <section className="px-4 pt-5">
          <label className="mb-2 block text-xs font-semibold text-gray-300">
            Gotra
            <span className="ml-1 font-normal text-gray-600">
              (Optional)
            </span>
          </label>

          <input
            type="text"
            value={gotra}
            onChange={(e) => setGotra(e.target.value)}
            placeholder="Enter your gotra"
            className="h-12 w-full rounded-xl border border-white/10 bg-[#0d1a28] px-3 text-sm text-white outline-none placeholder:text-gray-600"
          />
        </section>

        {/* SANKALP */}

        <section className="px-4 pt-5">
          <label className="mb-2 block text-xs font-semibold text-gray-300">
            Sankalp / Special Request
            <span className="ml-1 font-normal text-gray-600">
              (Optional)
            </span>
          </label>

          <textarea
            value={sankalp}
            onChange={(e) => setSankalp(e.target.value)}
            placeholder="Example: family peace, business success, marriage..."
            rows={4}
            className="w-full resize-none rounded-xl border border-white/10 bg-[#0d1a28] px-3 py-3 text-sm text-white outline-none placeholder:text-gray-600"
          />
        </section>

        {/* PAYMENT OPTION */}

        <section className="px-4 pt-6">
          <h2 className="text-sm font-bold">
            Booking Preference
          </h2>

          <div className="mt-3 space-y-2">
            <button
              type="button"
              onClick={() => setPaymentMethod("online")}
              className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left ${
                paymentMethod === "online"
                  ? "border-yellow-500/50 bg-yellow-500/10"
                  : "border-white/10 bg-[#0d1a28]"
              }`}
            >
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  paymentMethod === "online"
                    ? "border-yellow-400 bg-yellow-400"
                    : "border-gray-600"
                }`}
              >
                {paymentMethod === "online" && (
                  <Check
                    size={13}
                    className="text-black"
                  />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold">
                  Pay Online
                </p>

                <p className="mt-1 text-[10px] text-gray-500">
                  Secure online payment & instant booking
                </p>
              </div>

              <span className="rounded-full bg-green-500/10 px-2 py-1 text-[8px] font-semibold text-green-400">
                Recommended
              </span>
            </button>

            <button
              type="button"
              onClick={() => setPaymentMethod("contact")}
              className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left ${
                paymentMethod === "contact"
                  ? "border-yellow-500/50 bg-yellow-500/10"
                  : "border-white/10 bg-[#0d1a28]"
              }`}
            >
              <div
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                  paymentMethod === "contact"
                    ? "border-yellow-400 bg-yellow-400"
                    : "border-gray-600"
                }`}
              >
                {paymentMethod === "contact" && (
                  <Check
                    size={13}
                    className="text-black"
                  />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold">
                  Contact Me First
                </p>

                <p className="mt-1 text-[10px] text-gray-500">
                  Our team will call you to confirm details
                </p>
              </div>

              <Phone
                size={17}
                className="text-yellow-400"
              />
            </button>
          </div>
        </section>

        {/* TRUST */}

        <section className="px-4 pt-6">
          <div className="rounded-2xl border border-white/5 bg-[#0b1724] p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-500/10">
                <ShieldCheck
                  size={19}
                  className="text-yellow-400"
                />
              </div>

              <div>
                <p className="text-xs font-semibold">
                  Safe & Verified Booking
                </p>

                <p className="mt-1 text-[10px] leading-5 text-gray-500">
                  Your booking details are securely handled by
                  OurHub Services.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] p-2">
                <Video
                  size={15}
                  className="text-yellow-400"
                />

                <span className="text-[9px] text-gray-400">
                  Live Pooja
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] p-2">
                <ShieldCheck
                  size={15}
                  className="text-yellow-400"
                />

                <span className="text-[9px] text-gray-400">
                  Verified Pandit
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* HELP */}

        <section className="px-4 pb-8 pt-5">
          <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#0d1a28] p-3">
            <HelpCircle
              size={18}
              className="text-yellow-400"
            />

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold">
                Need help with booking?
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                Our team can help you choose the right pooja.
              </p>
            </div>

            <a
              href="tel:+918878632431"
              className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-white/5 px-3 text-[10px] font-semibold text-yellow-400"
            >
              Call
            </a>
          </div>
        </section>

        {/* FIXED BUTTON */}

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#07111d]/95 px-3 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-[360px] items-center gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-[8px] text-gray-500">
                Total Amount
              </p>

              <p className="mt-0.5 text-[17px] font-bold text-yellow-400">
                ₹{pooja.price.toLocaleString("en-IN")}
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex h-10 min-w-[125px] items-center justify-center gap-1.5 rounded-xl bg-yellow-400 px-3 text-[12px] font-bold text-black shadow-lg disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                  Please wait...
                </>
              ) : (
                <>
                  Continue
                  <ChevronRight size={15} />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}