"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const t = {
    getStarted: isHindi
      ? "शुरू करें"
      : "Get Started",

    requestFreeQuote: isHindi
      ? "फ्री कोटेशन पाएं"
      : "Request a Free Quote",

    description: isHindi
      ? "अपने प्रोजेक्ट के बारे में बताएं और अपने आइडिया को एक शानदार डिजिटल एक्सपीरियंस में बदलें।"
      : "Tell us about your project and let's turn your idea into a powerful digital experience.",

    letsBuild: isHindi
      ? "आइए कुछ शानदार बनाएं"
      : "Let's build something great",

    introDescription: isHindi
      ? "अपनी जरूरतें शेयर करें। हम आपके बिज़नेस के लिए सही सॉल्यूशन पर चर्चा करेंगे।"
      : "Share your requirements. We'll discuss the best solution for your business.",

    freeConsultation: isHindi
      ? "फ्री कंसल्टेशन"
      : "Free consultation",

    noObligation: isHindi
      ? "कोई बाध्यता नहीं"
      : "No obligation",

    fullName: isHindi
      ? "पूरा नाम *"
      : "Full Name *",

    phoneNumber: isHindi
      ? "फोन नंबर *"
      : "Phone Number *",

    emailOptional: isHindi
      ? "ईमेल एड्रेस (वैकल्पिक)"
      : "Email Address (Optional)",

    projectDetails: isHindi
      ? "अपने प्रोजेक्ट के बारे में बताएं *"
      : "Tell us about your project *",

    sendRequest: isHindi
      ? "व्हाट्सऐप पर रिक्वेस्ट भेजें"
      : "Send Request on WhatsApp",

    privacy: isHindi
      ? "फॉर्म सबमिट करके आप अपने प्रोजेक्ट के संबंध में संपर्क किए जाने के लिए सहमत होते हैं। आपकी जानकारी का उपयोग केवल आपकी पूछताछ का जवाब देने के लिए किया जाएगा।"
      : "By submitting this form, you agree to be contacted regarding your project. Your information is used only to respond to your enquiry.",

    transparent: isHindi
      ? "पारदर्शी"
      : "Transparent",

    whatsappSupport: isHindi
      ? "व्हाट्सऐप सपोर्ट"
      : "WhatsApp Support",

    premiumService: isHindi
      ? "प्रीमियम सर्विस"
      : "Premium Service",

    requiredFields: isHindi
      ? "कृपया सभी जरूरी फ़ील्ड भरें।"
      : "Please fill in all required fields.",

    validPhone: isHindi
      ? "कृपया 10 अंकों का सही फोन नंबर दर्ज करें।"
      : "Please enter a valid 10-digit phone number.",
  };

  const updateField = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = () => {
    const name = form.name.trim();
    const phone = form.phone.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !phone || !message) {
      setError(t.requiredFields);
      return;
    }

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length < 10) {
      setError(t.validPhone);
      return;
    }

    const phoneNumber = "918878632431";

    const whatsappMessage = isHindi
      ? `💻 *नई वेब डेवलपमेंट पूछताछ*

👤 *नाम:* ${name}

📞 *फोन:* +91 ${cleanPhone}

📧 *ईमेल:* ${email || "उपलब्ध नहीं कराया गया"}

📝 *प्रोजेक्ट डिटेल्स:*
${message}

━━━━━━━━━━━━━━━
🚀 OurHub वेबसाइट से भेजा गया`
      : `💻 *New Web Development Enquiry*

👤 *Name:* ${name}

📞 *Phone:* +91 ${cleanPhone}

📧 *Email:* ${email || "Not Provided"}

📝 *Project Details:*
${message}

━━━━━━━━━━━━━━━
🚀 Sent from OurHub Website`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    setError("");
  };

  return (
    <section className="relative mt-12 overflow-hidden px-4">
      {/* ================= AMBIENT GLOW ================= */}

      <div className="pointer-events-none absolute -left-24 top-20 h-60 w-60 rounded-full bg-[#DFAE45]/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-green-500/[0.025] blur-3xl" />

      {/* ================= HEADER ================= */}

      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#DFAE45]/20 bg-[#DFAE45]/10">
            <Send
              size={15}
              strokeWidth={2}
              className="text-[#DFAE45]"
            />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
            {t.getStarted}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-7 w-1 rounded-full bg-gradient-to-b from-[#FFD86A] to-[#DFAE45]" />

          <h2 className="text-[24px] font-extrabold tracking-tight text-white">
            {t.requestFreeQuote}
          </h2>
        </div>

        <p className="mt-2 pl-3 text-[13px] leading-5 text-gray-400">
          {t.description}
        </p>
      </div>

      {/* ================= INTRO CARD ================= */}

      <div className="relative mt-5 overflow-hidden rounded-[26px] border border-[#DFAE45]/15 bg-gradient-to-br from-[#101D2D] to-[#091321] p-4">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#DFAE45]/10 blur-3xl" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
            <Sparkles
              size={19}
              className="text-[#DFAE45]"
              strokeWidth={2}
            />
          </div>

          <div className="min-w-0">
            <p className="text-[12px] font-bold text-white">
              {t.letsBuild}
            </p>

            <p className="mt-1 text-[9px] leading-4 text-gray-500">
              {t.introDescription}
            </p>
          </div>
        </div>

        <div className="relative mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-3">
          <span className="flex items-center gap-1.5 text-[9px] font-medium text-gray-500">
            <CheckCircle2
              size={11}
              className="text-green-400"
            />
            {t.freeConsultation}
          </span>

          <span className="h-1 w-1 rounded-full bg-white/20" />

          <span className="flex items-center gap-1.5 text-[9px] font-medium text-gray-500">
            <CheckCircle2
              size={11}
              className="text-green-400"
            />
            {t.noObligation}
          </span>
        </div>
      </div>

      {/* ================= FORM ================= */}

      <div className="relative mt-5 space-y-3.5">
        {/* NAME */}

        <div className="group relative">
          <div className="pointer-events-none absolute left-4 top-1/2 z-10 flex -translate-y-1/2 items-center">
            <User
              size={17}
              strokeWidth={2}
              className="text-gray-500 transition-colors group-focus-within:text-[#DFAE45]"
            />
          </div>

          <input
            type="text"
            placeholder={t.fullName}
            value={form.name}
            onChange={(e) =>
              updateField("name", e.target.value)
            }
            className="h-[56px] w-full rounded-2xl border border-white/[0.08] bg-[#0A1422] pl-12 pr-4 text-[13px] font-medium text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#DFAE45]/40 focus:bg-[#0C1726] focus:shadow-[0_0_0_3px_rgba(223,174,69,0.05)]"
          />
        </div>

        {/* PHONE */}

        <div className="group relative">
          <div className="pointer-events-none absolute left-4 top-1/2 z-10 flex -translate-y-1/2 items-center">
            <Phone
              size={17}
              strokeWidth={2}
              className="text-gray-500 transition-colors group-focus-within:text-[#DFAE45]"
            />
          </div>

          <div className="pointer-events-none absolute left-11 top-1/2 z-10 h-5 -translate-y-1/2 border-l border-white/[0.08]" />

          <span className="pointer-events-none absolute left-[52px] top-1/2 z-10 -translate-y-1/2 text-[12px] font-semibold text-gray-500">
            +91
          </span>

          <input
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder={t.phoneNumber}
            value={form.phone}
            onChange={(e) =>
              updateField(
                "phone",
                e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 10)
              )
            }
            className="h-[56px] w-full rounded-2xl border border-white/[0.08] bg-[#0A1422] pl-[82px] pr-4 text-[13px] font-medium text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#DFAE45]/40 focus:bg-[#0C1726] focus:shadow-[0_0_0_3px_rgba(223,174,69,0.05)]"
          />
        </div>

        {/* EMAIL */}

        <div className="group relative">
          <div className="pointer-events-none absolute left-4 top-1/2 z-10 flex -translate-y-1/2 items-center">
            <Mail
              size={17}
              strokeWidth={2}
              className="text-gray-500 transition-colors group-focus-within:text-[#DFAE45]"
            />
          </div>

          <input
            type="email"
            placeholder={t.emailOptional}
            value={form.email}
            onChange={(e) =>
              updateField("email", e.target.value)
            }
            className="h-[56px] w-full rounded-2xl border border-white/[0.08] bg-[#0A1422] pl-12 pr-4 text-[13px] font-medium text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#DFAE45]/40 focus:bg-[#0C1726] focus:shadow-[0_0_0_3px_rgba(223,174,69,0.05)]"
          />
        </div>

        {/* MESSAGE */}

        <div className="group relative">
          <div className="pointer-events-none absolute left-4 top-4 z-10">
            <MessageCircle
              size={17}
              strokeWidth={2}
              className="text-gray-500 transition-colors group-focus-within:text-[#DFAE45]"
            />
          </div>

          <textarea
            rows={5}
            maxLength={500}
            placeholder={t.projectDetails}
            value={form.message}
            onChange={(e) =>
              updateField(
                "message",
                e.target.value.slice(0, 500)
              )
            }
            className="min-h-[130px] w-full resize-none rounded-2xl border border-white/[0.08] bg-[#0A1422] px-4 pb-4 pl-12 pt-4 text-[13px] font-medium leading-5 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-[#DFAE45]/40 focus:bg-[#0C1726] focus:shadow-[0_0_0_3px_rgba(223,174,69,0.05)]"
          />

          <span className="pointer-events-none absolute bottom-3 right-4 text-[9px] text-gray-600">
            {form.message.length}/500
          </span>
        </div>

        {/* ================= ERROR ================= */}

        {error && (
          <div className="flex items-center gap-2 rounded-2xl border border-red-500/15 bg-red-500/[0.06] px-4 py-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-[10px] font-bold text-red-400">
              !
            </span>

            <p className="text-[10px] font-medium text-red-400">
              {error}
            </p>
          </div>
        )}

        {/* ================= SUBMIT BUTTON ================= */}

        <button
          type="button"
          onClick={handleSubmit}
          className="group relative flex h-[56px] w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-[#DFAE45] via-[#E8BC58] to-[#DFAE45] text-[13px] font-extrabold text-black shadow-[0_14px_35px_rgba(223,174,69,0.16)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(223,174,69,0.24)] active:scale-[0.98]"
        >
          {/* Shine */}
          <span className="pointer-events-none absolute inset-y-0 -left-20 w-16 skew-x-[-20deg] bg-white/25 blur-sm transition-all duration-700 group-hover:left-[110%]" />

          <Send
            size={17}
            strokeWidth={2.5}
          />

          <span>{t.sendRequest}</span>

          <ArrowRight
            size={17}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

        {/* ================= PRIVACY ================= */}

        <p className="px-3 text-center text-[9px] leading-4 text-gray-600">
          {t.privacy}
        </p>
      </div>

      {/* ================= TRUST FOOTER ================= */}

      <div className="relative mt-5 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]">
        {/* Transparent */}

        <div className="flex flex-col items-center justify-center gap-1.5 border-r border-white/[0.06] px-2 py-3">
          <CheckCircle2
            size={14}
            className="text-green-400"
          />

          <span className="text-center text-[8px] font-semibold text-gray-500">
            {t.transparent}
          </span>
        </div>

        {/* WhatsApp */}

        <div className="flex flex-col items-center justify-center gap-1.5 border-r border-white/[0.06] px-2 py-3">
          <MessageCircle
            size={14}
            className="text-[#DFAE45]"
          />

          <span className="text-center text-[8px] font-semibold text-gray-500">
            {t.whatsappSupport}
          </span>
        </div>

        {/* Premium */}

        <div className="flex flex-col items-center justify-center gap-1.5 px-2 py-3">
          <Sparkles
            size={14}
            className="text-[#DFAE45]"
          />

          <span className="text-center text-[8px] font-semibold text-gray-500">
            {t.premiumService}
          </span>
        </div>
      </div>
    </section>
  );
}