"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wallet,
  X,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactBottomSheet({
  open,
  onClose,
}: Props) {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const phoneNumber = "918878632431";

  const t = {
    // Header
    startYourProject: isHindi
      ? "अपना प्रोजेक्ट शुरू करें"
      : "Start Your Project",

    free: isHindi
      ? "फ्री"
      : "Free",

    headerDescription: isHindi
      ? "अपनी जरूरतें शेयर करें और हमारे एक्सपर्ट्स आपसे संपर्क करेंगे।"
      : "Share your requirements and our experts will contact you.",

    close: isHindi
      ? "प्रोजेक्ट फॉर्म बंद करें"
      : "Close project form",

    // Trust
    freeConsultation: isHindi
      ? "फ्री कंसल्टेशन"
      : "Free consultation",

    quickResponse: isHindi
      ? "त्वरित रिस्पॉन्स"
      : "Quick response",

    online: isHindi
      ? "ऑनलाइन"
      : "Online",

    // Form labels
    fullName: isHindi
      ? "पूरा नाम"
      : "Full Name",

    enterYourName: isHindi
      ? "अपना नाम दर्ज करें"
      : "Enter your name",

    phoneNumber: isHindi
      ? "फोन नंबर"
      : "Phone Number",

    mobileNumberPlaceholder: isHindi
      ? "10 अंकों का मोबाइल नंबर"
      : "10-digit mobile number",

    email: isHindi
      ? "ईमेल"
      : "Email",

    optional: isHindi
      ? "वैकल्पिक"
      : "Optional",

    emailPlaceholder: isHindi
      ? "your@email.com"
      : "your@email.com",

    projectBudget: isHindi
      ? "प्रोजेक्ट बजट"
      : "Project Budget",

    selectBudget: isHindi
      ? "अपना बजट चुनें"
      : "Select your budget",

    projectRequirements: isHindi
      ? "प्रोजेक्ट की जरूरतें"
      : "Project Requirements",

    messagePlaceholder: isHindi
      ? "अपनी वेबसाइट, बिज़नेस या प्रोजेक्ट के बारे में बताएं..."
      : "Tell us about your website, business or project...",

    // Budget
    budget10to25: "₹10k - ₹25k",
    budget25to50: "₹25k - ₹50k",
    budget50to1L: "₹50k - ₹1L",
    budget1LPlus: "₹1L+",

    // Submit
    openingWhatsApp: isHindi
      ? "व्हाट्सऐप खुल रहा है..."
      : "Opening WhatsApp...",

    sendRequest: isHindi
      ? "व्हाट्सऐप पर रिक्वेस्ट भेजें"
      : "Send Request on WhatsApp",

    // Privacy
    privacy: isHindi
      ? "आपकी जानकारी का उपयोग केवल आपके प्रोजेक्ट के संबंध में संपर्क करने के लिए किया जाएगा।"
      : "Your details are used only to contact you about your project.",

    // Footer
    digitalStudio: "OurHub Digital Studio",

    // Validation
    nameRequired: isHindi
      ? "कृपया अपना पूरा नाम दर्ज करें।"
      : "Please enter your full name.",

    validPhone: isHindi
      ? "कृपया 10 अंकों का सही फोन नंबर दर्ज करें।"
      : "Please enter a valid 10-digit phone number.",

    validEmail: isHindi
      ? "कृपया सही ईमेल एड्रेस दर्ज करें।"
      : "Please enter a valid email address.",

    notProvided: isHindi
      ? "उपलब्ध नहीं कराया गया"
      : "Not provided",

    notSpecified: isHindi
      ? "निर्दिष्ट नहीं"
      : "Not specified",

    sentFromWebsite: isHindi
      ? "OurHub वेबसाइट से भेजा गया"
      : "Sent from OurHub Website",

    newWebsiteInquiry: isHindi
      ? "नई वेबसाइट पूछताछ"
      : "New Website Inquiry",

    name: isHindi
      ? "नाम"
      : "Name",

    phone: isHindi
      ? "फोन"
      : "Phone",

    budget: isHindi
      ? "बजट"
      : "Budget",

    projectRequirementsMessage: isHindi
      ? "प्रोजेक्ट की जरूरतें"
      : "Project Requirements",
  };

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = () => {
    const cleanName = form.name.trim();
    const cleanPhone = form.phone.replace(/\D/g, "");
    const cleanEmail = form.email.trim();
    const cleanMessage = form.message.trim();

    if (!cleanName) {
      setError(t.nameRequired);
      return;
    }

    if (cleanPhone.length !== 10) {
      setError(t.validPhone);
      return;
    }

    if (
      cleanEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)
    ) {
      setError(t.validEmail);
      return;
    }

    setSubmitting(true);

    const whatsappMessage = isHindi
      ? `🚀 *नई वेबसाइट पूछताछ*

👤 *नाम:* ${cleanName}

📞 *फोन:* +91 ${cleanPhone}

📧 *ईमेल:* ${cleanEmail || t.notProvided}

💰 *बजट:* ${form.budget || t.notSpecified}

📝 *प्रोजेक्ट की जरूरतें:*
${cleanMessage || t.notProvided}

--------------------------
🚀 ${t.sentFromWebsite}`
      : `🚀 *New Website Inquiry*

👤 *Name:* ${cleanName}

📞 *Phone:* +91 ${cleanPhone}

📧 *Email:* ${cleanEmail || t.notProvided}

💰 *Budget:* ${form.budget || t.notSpecified}

📝 *Project Requirements:*
${cleanMessage || t.notProvided}

--------------------------
🚀 ${t.sentFromWebsite}`;

    const text = encodeURIComponent(
      whatsappMessage
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );

    setTimeout(() => {
      setSubmitting(false);
      onClose();

      setForm({
        name: "",
        phone: "",
        email: "",
        budget: "",
        message: "",
      });

      setError("");
    }, 300);
  };

  return (
    <>
      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-[110] bg-black/75 backdrop-blur-md transition-all duration-300 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* =====================================================
          BOTTOM SHEET
      ===================================================== */}

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-form-title"
        className={`fixed bottom-0 left-1/2 z-[120] w-full max-w-[430px] -translate-x-1/2 overflow-hidden rounded-t-[32px] border-t border-white/[0.08] bg-[#07111D] shadow-[0_-25px_80px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-out ${
          open
            ? "translate-y-0"
            : "translate-y-full"
        }`}
      >
        {/* Ambient glow */}

        <div className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-[#DFAE45]/[0.08] blur-[80px]" />

        {/* Gold top highlight */}

        <div className="pointer-events-none absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/70 to-transparent" />

        {/* Drag handle */}

        <div className="relative flex justify-center pt-3">
          <div className="h-1.5 w-12 rounded-full bg-white/15" />
        </div>

        <div className="relative max-h-[88vh] overflow-y-auto px-4 pb-7 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* =================================================
              HEADER
          ================================================= */}

          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.08] shadow-[0_10px_30px_rgba(223,174,69,0.08)]">
                <Sparkles
                  size={21}
                  strokeWidth={2}
                  className="text-[#FFD86A]"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2
                    id="project-form-title"
                    className="text-[20px] font-black tracking-tight text-white"
                  >
                    {t.startYourProject}
                  </h2>

                  <span className="hidden min-[390px]:inline-flex rounded-full border border-green-400/15 bg-green-400/[0.06] px-2 py-1 text-[7px] font-black uppercase tracking-[0.8px] text-green-400">
                    {t.free}
                  </span>
                </div>

                <p className="mt-1 text-[11px] leading-5 text-gray-500">
                  {t.headerDescription}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label={t.close}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[14px] border border-white/[0.07] bg-white/[0.035] text-gray-400 transition hover:border-white/[0.14] hover:bg-white/[0.06] hover:text-white active:scale-95"
            >
              <X size={18} />
            </button>
          </div>

          {/* =================================================
              TRUST STRIP
          ================================================= */}

          <div className="mt-5 flex items-center gap-2 rounded-[17px] border border-white/[0.055] bg-white/[0.025] px-3 py-2.5">
            <CheckCircle2
              size={14}
              strokeWidth={2.5}
              className="shrink-0 text-green-400"
            />

            <span className="text-[9px] font-semibold text-gray-500">
              {t.freeConsultation}
            </span>

            <span className="h-1 w-1 rounded-full bg-white/10" />

            <span className="text-[9px] font-semibold text-gray-500">
              {t.quickResponse}
            </span>

            <span className="ml-auto flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />

              <span className="text-[8px] font-bold text-green-400">
                {t.online}
              </span>
            </span>
          </div>

          {/* =================================================
              FORM
          ================================================= */}

          <div className="mt-5 space-y-3">
            {/* Name */}

            <div>
              <label className="mb-1.5 ml-1 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[1px] text-gray-500">
                <UserRound size={11} />
                {t.fullName}
              </label>

              <div className="relative">
                <UserRound
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                  type="text"
                  placeholder={t.enterYourName}
                  value={form.name}
                  onChange={(e) =>
                    updateField(
                      "name",
                      e.target.value
                    )
                  }
                  className="h-[52px] w-full rounded-[17px] border border-white/[0.07] bg-[#0B1728] pl-11 pr-4 text-[12px] font-medium text-white outline-none placeholder:text-gray-700 transition focus:border-[#DFAE45]/40 focus:bg-[#0D1A2C] focus:ring-1 focus:ring-[#DFAE45]/10"
                />
              </div>
            </div>

            {/* Phone */}

            <div>
              <label className="mb-1.5 ml-1 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[1px] text-gray-500">
                <Phone size={11} />
                {t.phoneNumber}
              </label>

              <div className="relative">
                <div className="pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 items-center gap-1.5">
                  <Phone
                    size={16}
                    className="text-gray-600"
                  />

                  <span className="text-[11px] font-bold text-gray-500">
                    +91
                  </span>
                </div>

                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder={
                    t.mobileNumberPlaceholder
                  }
                  value={form.phone}
                  onChange={(e) =>
                    updateField(
                      "phone",
                      e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10)
                    )
                  }
                  className="h-[52px] w-full rounded-[17px] border border-white/[0.07] bg-[#0B1728] pl-[78px] pr-4 text-[12px] font-medium tracking-wide text-white outline-none placeholder:text-gray-700 transition focus:border-[#DFAE45]/40 focus:bg-[#0D1A2C] focus:ring-1 focus:ring-[#DFAE45]/10"
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label className="mb-1.5 ml-1 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[1px] text-gray-500">
                <Mail size={11} />

                {t.email}

                <span className="normal-case tracking-normal text-gray-700">
                  {t.optional}
                </span>
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={form.email}
                  onChange={(e) =>
                    updateField(
                      "email",
                      e.target.value
                    )
                  }
                  className="h-[52px] w-full rounded-[17px] border border-white/[0.07] bg-[#0B1728] pl-11 pr-4 text-[12px] font-medium text-white outline-none placeholder:text-gray-700 transition focus:border-[#DFAE45]/40 focus:bg-[#0D1A2C] focus:ring-1 focus:ring-[#DFAE45]/10"
                />
              </div>
            </div>

            {/* Budget */}

            <div>
              <label className="mb-1.5 ml-1 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[1px] text-gray-500">
                <Wallet size={11} />
                {t.projectBudget}
              </label>

              <div className="relative">
                <Wallet
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />

                <select
                  value={form.budget}
                  onChange={(e) =>
                    updateField(
                      "budget",
                      e.target.value
                    )
                  }
                  className="h-[52px] w-full appearance-none rounded-[17px] border border-white/[0.07] bg-[#0B1728] pl-11 pr-10 text-[12px] font-medium text-white outline-none transition focus:border-[#DFAE45]/40 focus:bg-[#0D1A2C] focus:ring-1 focus:ring-[#DFAE45]/10"
                >
                  <option
                    value=""
                    className="bg-[#0B1728]"
                  >
                    {t.selectBudget}
                  </option>

                  <option
                    value="₹10k - ₹25k"
                    className="bg-[#0B1728]"
                  >
                    {t.budget10to25}
                  </option>

                  <option
                    value="₹25k - ₹50k"
                    className="bg-[#0B1728]"
                  >
                    {t.budget25to50}
                  </option>

                  <option
                    value="₹50k - ₹1L"
                    className="bg-[#0B1728]"
                  >
                    {t.budget50to1L}
                  </option>

                  <option
                    value="₹1L+"
                    className="bg-[#0B1728]"
                  >
                    {t.budget1LPlus}
                  </option>
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                />
              </div>
            </div>

            {/* Message */}

            <div>
              <div className="mb-1.5 flex items-center justify-between px-1">
                <label className="text-[9px] font-bold uppercase tracking-[1px] text-gray-500">
                  {t.projectRequirements}
                </label>

                <span className="text-[8px] font-medium text-gray-700">
                  {form.message.length}/500
                </span>
              </div>

              <textarea
                rows={4}
                maxLength={500}
                placeholder={t.messagePlaceholder}
                value={form.message}
                onChange={(e) =>
                  updateField(
                    "message",
                    e.target.value
                  )
                }
                className="w-full resize-none rounded-[17px] border border-white/[0.07] bg-[#0B1728] px-4 py-3.5 text-[12px] leading-5 text-white outline-none placeholder:text-gray-700 transition focus:border-[#DFAE45]/40 focus:bg-[#0D1A2C] focus:ring-1 focus:ring-[#DFAE45]/10"
              />
            </div>
          </div>

          {/* =================================================
              ERROR
          ================================================= */}

          {error && (
            <div className="mt-3 rounded-[15px] border border-red-400/15 bg-red-400/[0.05] px-3.5 py-2.5">
              <p className="text-[9px] font-semibold text-red-300">
                {error}
              </p>
            </div>
          )}

          {/* =================================================
              SUBMIT
          ================================================= */}

          <button
            type="button"
            disabled={submitting}
            onClick={handleSubmit}
            className="group/submit relative mt-5 flex h-[54px] w-full items-center justify-center gap-2.5 overflow-hidden rounded-[18px] bg-gradient-to-r from-[#DFAE45] via-[#E7B94F] to-[#FFD86A] text-[12px] font-black text-black shadow-[0_14px_35px_rgba(223,174,69,0.18)] transition-all duration-300 hover:shadow-[0_16px_45px_rgba(223,174,69,0.30)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="pointer-events-none absolute -left-14 top-0 h-full w-10 rotate-[20deg] bg-white/30 blur-sm transition-all duration-700 group-hover/submit:left-[120%]" />

            {submitting ? (
              <>
                <span className="relative h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />

                <span className="relative">
                  {t.openingWhatsApp}
                </span>
              </>
            ) : (
              <>
                <MessageCircle
                  size={17}
                  strokeWidth={2.5}
                  className="relative"
                />

                <span className="relative">
                  {t.sendRequest}
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={2.7}
                  className="relative transition-transform duration-300 group-hover/submit:translate-x-1"
                />
              </>
            )}
          </button>

          {/* =================================================
              PRIVACY / TRUST
          ================================================= */}

          <div className="mt-3 flex items-center justify-center gap-2">
            <ShieldCheck
              size={12}
              strokeWidth={2.4}
              className="text-green-400"
            />

            <p className="text-center text-[8px] font-medium text-gray-600">
              {t.privacy}
            </p>
          </div>

          {/* =================================================
              FOOTER
          ================================================= */}

          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_7px_rgba(74,222,128,0.8)]" />

            <span className="text-[8px] font-bold uppercase tracking-[0.8px] text-gray-600">
              {t.digitalStudio}
            </span>

            <span className="h-1 w-1 rounded-full bg-white/10" />

            <span className="text-[8px] font-bold uppercase tracking-[0.8px] text-gray-600">
              {t.quickResponse}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}