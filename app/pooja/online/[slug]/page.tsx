"use client";

import { FormEvent, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
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
import { useLanguage } from "@/context/LanguageContext";

export default function PoojaBookingPage() {
  const params = useParams();
  const router = useRouter();

  const { language } = useLanguage();
  const isHindi = language === "hi";

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

  const [loading, setLoading] = useState(false);

  const OURHUB_WHATSAPP = "918878632431";

  const minDate = new Date().toISOString().split("T")[0];

  // =========================================================
  // LANGUAGE TEXT
  // =========================================================

  const text = {
    poojaNotFound: isHindi
      ? "पूजा उपलब्ध नहीं है"
      : "Pooja Not Found",

    poojaNotFoundDesc: isHindi
      ? "चयनित पूजा अभी उपलब्ध नहीं है।"
      : "The selected pooja is not available.",

    backToOnlinePooja: isHindi
      ? "ऑनलाइन पूजा पर वापस जाएँ"
      : "Back to Online Pooja",

    bookPooja: isHindi
      ? "पूजा के लिए अनुरोध करें"
      : "Request Pooja",

    verifiedPooja: isHindi
      ? "सत्यापित पूजा"
      : "Verified Pooja",

    startingFrom: isHindi
      ? "शुरुआत से"
      : "Starting From",

    yourDetails: isHindi
      ? "आपकी जानकारी"
      : "Your Details",

    detailsDesc: isHindi
      ? "पूजा की कीमत जानने और बुकिंग के लिए अपनी जानकारी दर्ज करें।"
      : "Please provide your details to request the pooja price and booking.",

    fullName: isHindi
      ? "पूरा नाम"
      : "Full Name",

    enterFullName: isHindi
      ? "अपना पूरा नाम दर्ज करें"
      : "Enter your full name",

    mobileNumber: isHindi
      ? "मोबाइल नंबर"
      : "Mobile Number",

    mobilePlaceholder: isHindi
      ? "10 अंकों का मोबाइल नंबर"
      : "10 digit mobile number",

    city: isHindi
      ? "शहर"
      : "City",

    cityPlaceholder: isHindi
      ? "इंदौर, उज्जैन, रतलाम..."
      : "Indore, Ujjain, Ratlam...",

    poojaDate: isHindi
      ? "पूजा की तारीख"
      : "Pooja Date",

    preferredTime: isHindi
      ? "पसंदीदा समय"
      : "Preferred Time",

    gotra: isHindi
      ? "गोत्र"
      : "Gotra",

    optional: isHindi
      ? "वैकल्पिक"
      : "Optional",

    gotraPlaceholder: isHindi
      ? "अपना गोत्र दर्ज करें"
      : "Enter your gotra",

    sankalp: isHindi
      ? "संकल्प / विशेष अनुरोध"
      : "Sankalp / Special Request",

    sankalpPlaceholder: isHindi
      ? "उदाहरण: परिवार की शांति, व्यापार में सफलता, विवाह..."
      : "Example: family peace, business success, marriage...",

    requestPrice: isHindi
      ? "कीमत के लिए अनुरोध करें"
      : "Request for Price",

    requestPriceDesc: isHindi
      ? "हमारी टीम आपकी जानकारी के अनुसार अंतिम कीमत बताएगी।"
      : "Our team will share the final price based on your requirements.",

    priceOnRequest: isHindi
      ? "कीमत अनुरोध पर"
      : "Price on Request",

    safeBooking: isHindi
      ? "सुरक्षित और सत्यापित अनुरोध"
      : "Safe & Verified Request",

    safeBookingDesc: isHindi
      ? "आपकी जानकारी OurHub Services द्वारा सुरक्षित रूप से संभाली जाती है।"
      : "Your details are securely handled by OurHub Services.",

    livePooja: isHindi
      ? "लाइव पूजा"
      : "Live Pooja",

    verifiedPandit: isHindi
      ? "सत्यापित पंडित"
      : "Verified Pandit",

    needHelp: isHindi
      ? "सहायता चाहिए?"
      : "Need help?",

    helpDesc: isHindi
      ? "हमारी टीम आपको सही पूजा और कीमत की जानकारी देने में सहायता करेगी।"
      : "Our team can help you choose the right pooja and price.",

    call: isHindi
      ? "कॉल करें"
      : "Call",

    startingPrice: isHindi
      ? "शुरुआती कीमत"
      : "Starting Price",

    pleaseWait: isHindi
      ? "कृपया प्रतीक्षा करें..."
      : "Please wait...",

    requestNow: isHindi
      ? "अभी अनुरोध करें"
      : "Request Now",

    poojaNotFoundAlert: isHindi
      ? "पूजा नहीं मिली।"
      : "Pooja not found.",

    enterName: isHindi
      ? "कृपया अपना नाम दर्ज करें।"
      : "Please enter your name.",

    validMobile: isHindi
      ? "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।"
      : "Please enter a valid 10 digit mobile number.",

    enterCity: isHindi
      ? "कृपया अपना शहर दर्ज करें।"
      : "Please enter your city.",

    selectDate: isHindi
      ? "कृपया पूजा की तारीख चुनें।"
      : "Please select pooja date.",

    selectTime: isHindi
      ? "कृपया पसंदीदा समय चुनें।"
      : "Please select preferred time.",
  };

  // =========================================================
  // SUBMIT REQUEST
  // =========================================================

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!pooja) {
      alert(text.poojaNotFoundAlert);
      return;
    }

    if (!name.trim()) {
      alert(text.enterName);
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert(text.validMobile);
      return;
    }

    if (!city.trim()) {
      alert(text.enterCity);
      return;
    }

    if (!date) {
      alert(text.selectDate);
      return;
    }

    if (!time) {
      alert(text.selectTime);
      return;
    }

    setLoading(true);

    const formattedDate = new Date(
      `${date}T00:00:00`
    ).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const requestData = {
      poojaSlug: pooja.slug,
      poojaName: pooja.name,
      icon: pooja.icon,
      duration: pooja.duration,

      startingPrice: pooja.price,

      customerName: name.trim(),
      mobile,
      city: city.trim(),

      date,
      time,

      gotra: gotra.trim(),
      sankalp: sankalp.trim(),

      requestType: "price-request",
      requestStatus: "price-requested",

      language,

      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "ourhub-pooja-price-request",
      JSON.stringify(requestData)
    );

    // =====================================================
    // WHATSAPP PRICE REQUEST
    // =====================================================

    const whatsappMessage = isHindi
      ? `
🙏 *OurHub Services - पूजा कीमत अनुरोध*

━━━━━━━━━━━━━━━━━━
🪔 *पूजा की जानकारी*
━━━━━━━━━━━━━━━━━━

पूजा: ${pooja.name}
अवधि: ${pooja.duration}
शुरुआती कीमत: ₹${pooja.price.toLocaleString("en-IN")}

⚠️ अंतिम कीमत पूजा की सामग्री, स्थान और आवश्यकताओं के अनुसार बताई जाएगी।

━━━━━━━━━━━━━━━━━━
👤 *ग्राहक की जानकारी*
━━━━━━━━━━━━━━━━━━

नाम: ${name.trim()}
मोबाइल: +91 ${mobile}
शहर: ${city.trim()}

━━━━━━━━━━━━━━━━━━
📅 *पूजा की जानकारी*
━━━━━━━━━━━━━━━━━━

तारीख: ${formattedDate}
पसंदीदा समय: ${time}

गोत्र: ${gotra.trim() || "उपलब्ध नहीं कराया गया"}

संकल्प / विशेष अनुरोध:
${sankalp.trim() || "उपलब्ध नहीं कराया गया"}

━━━━━━━━━━━━━━━━━━
💰 *कीमत अनुरोध*
━━━━━━━━━━━━━━━━━━

कृपया मेरी पूजा के लिए अंतिम कीमत और उपलब्धता की जानकारी साझा करें।

धन्यवाद,
*OurHub Services*
      `.trim()
      : `
🙏 *OurHub Services - Pooja Price Request*

━━━━━━━━━━━━━━━━━━
🪔 *POOJA DETAILS*
━━━━━━━━━━━━━━━━━━

Pooja: ${pooja.name}
Duration: ${pooja.duration}
Starting Price: ₹${pooja.price.toLocaleString("en-IN")}

⚠️ Final price will be shared based on samagri, location and requirements.

━━━━━━━━━━━━━━━━━━
👤 *CUSTOMER DETAILS*
━━━━━━━━━━━━━━━━━━

Name: ${name.trim()}
Mobile: +91 ${mobile}
City: ${city.trim()}

━━━━━━━━━━━━━━━━━━
📅 *POOJA DETAILS*
━━━━━━━━━━━━━━━━━━

Date: ${formattedDate}
Preferred Time: ${time}

Gotra: ${gotra.trim() || "Not provided"}

Sankalp / Special Request:
${sankalp.trim() || "Not provided"}

━━━━━━━━━━━━━━━━━━
💰 *PRICE REQUEST*
━━━━━━━━━━━━━━━━━━

Please share the final price and availability for this pooja.

Thank you,
*OurHub Services*
      `.trim();

    const whatsappUrl =
      `https://wa.me/${OURHUB_WHATSAPP}` +
      `?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappUrl;
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
            {text.poojaNotFound}
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            {text.poojaNotFoundDesc}
          </p>

          <button
            type="button"
            onClick={() => router.push("/pooja/online")}
            className="mt-6 rounded-xl bg-yellow-400 px-5 py-3 text-sm font-bold text-black"
          >
            {text.backToOnlinePooja}
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
              {text.bookPooja}
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
                    {text.verifiedPooja}
                  </span>
                </div>

                <h1 className="mt-1 truncate text-lg font-bold">
                  {pooja.name}
                </h1>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 text-[10px] text-gray-400">
                    <Clock3 size={12} />
                    {pooja.duration}
                  </span>

                  <span className="rounded-full bg-yellow-400/10 px-2 py-1 text-[9px] font-bold text-yellow-400">
                    {text.startingFrom} ₹
                    {pooja.price.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YOUR DETAILS */}

        <section className="px-4 pt-6">
          <h2 className="text-lg font-bold">
            {text.yourDetails}
          </h2>

          <p className="mt-1 text-[11px] text-gray-500">
            {text.detailsDesc}
          </p>
        </section>

        {/* NAME */}

        <section className="px-4 pt-4">
          <label className="mb-2 block text-xs font-semibold text-gray-300">
            {text.fullName} *
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
              placeholder={text.enterFullName}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
            />
          </div>
        </section>

        {/* MOBILE */}

        <section className="px-4 pt-4">
          <label className="mb-2 block text-xs font-semibold text-gray-300">
            {text.mobileNumber} *
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
              placeholder={text.mobilePlaceholder}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
            />
          </div>
        </section>

        {/* CITY */}

        <section className="px-4 pt-4">
          <label className="mb-2 block text-xs font-semibold text-gray-300">
            {text.city} *
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
              placeholder={text.cityPlaceholder}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-600"
            />
          </div>
        </section>

        {/* DATE TIME */}

        <section className="px-4 pt-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-300">
                {text.poojaDate} *
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
                {text.preferredTime} *
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
            {text.gotra}

            <span className="ml-1 font-normal text-gray-600">
              ({text.optional})
            </span>
          </label>

          <input
            type="text"
            value={gotra}
            onChange={(e) => setGotra(e.target.value)}
            placeholder={text.gotraPlaceholder}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#0d1a28] px-3 text-sm text-white outline-none placeholder:text-gray-600"
          />
        </section>

        {/* SANKALP */}

        <section className="px-4 pt-5">
          <label className="mb-2 block text-xs font-semibold text-gray-300">
            {text.sankalp}

            <span className="ml-1 font-normal text-gray-600">
              ({text.optional})
            </span>
          </label>

          <textarea
            value={sankalp}
            onChange={(e) => setSankalp(e.target.value)}
            placeholder={text.sankalpPlaceholder}
            rows={4}
            className="w-full resize-none rounded-xl border border-white/10 bg-[#0d1a28] px-3 py-3 text-sm text-white outline-none placeholder:text-gray-600"
          />
        </section>

        {/* REQUEST FOR PRICE */}

        <section className="px-4 pt-6">
          <div className="rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.06] p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/10">
                <Phone
                  size={18}
                  className="text-yellow-400"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-white">
                  {text.requestPrice}
                </p>

                <p className="mt-1 text-[10px] leading-5 text-gray-400">
                  {text.requestPriceDesc}
                </p>

                <div className="mt-3 flex items-center justify-between rounded-xl bg-[#0d1a28] px-3 py-2">
                  <span className="text-[9px] text-gray-500">
                    {text.startingPrice}
                  </span>

                  <span className="text-sm font-bold text-yellow-400">
                    ₹{pooja.price.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>
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
                  {text.safeBooking}
                </p>

                <p className="mt-1 text-[10px] leading-5 text-gray-500">
                  {text.safeBookingDesc}
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
                  {text.livePooja}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-lg bg-white/[0.03] p-2">
                <ShieldCheck
                  size={15}
                  className="text-yellow-400"
                />

                <span className="text-[9px] text-gray-400">
                  {text.verifiedPandit}
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
                {text.needHelp}
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                {text.helpDesc}
              </p>
            </div>

            <a
              href="tel:+918878632431"
              className="flex h-9 shrink-0 items-center justify-center rounded-lg bg-white/5 px-3 text-[10px] font-semibold text-yellow-400"
            >
              {text.call}
            </a>
          </div>
        </section>

        {/* FIXED BUTTON */}

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#07111d]/95 px-3 pb-[calc(0.65rem+env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-[360px] items-center gap-2">
            <div className="min-w-0 flex-1">
              <p className="text-[8px] text-gray-500">
                {text.startingPrice}
              </p>

              <p className="mt-0.5 text-[17px] font-bold text-yellow-400">
                ₹{pooja.price.toLocaleString("en-IN")}
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex h-10 min-w-[150px] items-center justify-center gap-1.5 rounded-xl bg-yellow-400 px-3 text-[11px] font-bold text-black shadow-lg disabled:opacity-60"
            >
              {loading ? (
                <>
                  <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                  {text.pleaseWait}
                </>
              ) : (
                <>
                  {text.requestNow}
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