"use client";

import {
  Check,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface Service {
  features: string[];
}

interface Props {
  service: Service;
}

export default function Features({ service }: Props) {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  const t = {
    // Section header
    whatsIncluded: isHindi
      ? "क्या शामिल है"
      : "What's Included",

    everythingYou: isHindi
      ? "लॉन्च के लिए"
      : "Everything You",

    needToLaunch: isHindi
      ? "जरूरी सब कुछ"
      : "Need to Launch",

    description: isHindi
      ? "प्रोफेशनल और हाई-परफॉर्मेंस डिजिटल प्रेज़ेंस बनाने के लिए जरूरी सभी फीचर्स।"
      : "A complete set of features designed to build a professional, high-performing digital presence.",

    features: isHindi
      ? "फीचर्स"
      : "Features",

    // Cards
    included: isHindi
      ? "शामिल"
      : "Included",

    // Quality card
    qualityStandard: isHindi
      ? "क्वालिटी स्टैंडर्ड हमेशा शामिल"
      : "Quality comes standard",

    qualityDescription: isHindi
      ? "हर प्रोजेक्ट OurHub के क्वालिटी और परफॉर्मेंस स्टैंडर्ड के अनुसार तैयार किया जाता है।"
      : "Every project follows the OurHub quality & performance standard.",

    // Trust strip
    verified: isHindi
      ? "वेरिफाइड"
      : "Verified",

    optimized: isHindi
      ? "ऑप्टिमाइज़्ड"
      : "Optimized",
  };

  /*
   * English feature → Hindi feature mapping
   *
   * This keeps your existing services data unchanged.
   * If a feature is not found in this map, the original
   * feature name will be shown.
   */
  const hindiFeatures: Record<string, string> = {
    // General
    "Responsive Design": "रिस्पॉन्सिव डिजाइन",
    "Mobile Responsive": "मोबाइल रिस्पॉन्सिव",
    "Mobile First": "मोबाइल फर्स्ट",
    "Modern UI": "मॉडर्न UI",
    "Modern Design": "मॉडर्न डिजाइन",
    "Premium Design": "प्रीमियम डिजाइन",
    "Custom Design": "कस्टम डिजाइन",
    "Professional Design": "प्रोफेशनल डिजाइन",
    "Clean Design": "क्लीन डिजाइन",
    "User Friendly": "यूज़र फ्रेंडली",

    // Website
    "Business Website": "बिज़नेस वेबसाइट",
    "Custom Website": "कस्टम वेबसाइट",
    "Landing Page": "लैंडिंग पेज",
    "Multiple Pages": "मल्टीपल पेजेज",
    "5 Pages": "5 पेज",
    "10 Pages": "10 पेज",
    "15 Pages": "15 पेज",
    "Unlimited Pages": "अनलिमिटेड पेजेज",

    // SEO
    "Basic SEO": "बेसिक SEO",
    "Advanced SEO": "एडवांस्ड SEO",
    "SEO Ready": "SEO रेडी",
    "On-Page SEO": "ऑन-पेज SEO",
    "SEO Optimization": "SEO ऑप्टिमाइज़ेशन",
    "Search Engine Friendly": "सर्च इंजन फ्रेंडली",

    // Performance
    "Fast Performance": "फास्ट परफॉर्मेंस",
    "Fast Loading": "फास्ट लोडिंग",
    "Performance Optimization": "परफॉर्मेंस ऑप्टिमाइज़ेशन",
    "Speed Optimization": "स्पीड ऑप्टिमाइज़ेशन",
    "High Performance": "हाई परफॉर्मेंस",

    // E-commerce
    "E-commerce": "ई-कॉमर्स",
    "E-commerce Store": "ई-कॉमर्स स्टोर",
    "Product Management": "प्रोडक्ट मैनेजमेंट",
    "Shopping Cart": "शॉपिंग कार्ट",
    "Payment Gateway": "पेमेंट गेटवे",
    "Online Payments": "ऑनलाइन पेमेंट्स",
    "Order Management": "ऑर्डर मैनेजमेंट",

    // Admin
    "Admin Panel": "एडमिन पैनल",
    "Custom Dashboard": "कस्टम डैशबोर्ड",
    "Dashboard": "डैशबोर्ड",
    "User Management": "यूज़र मैनेजमेंट",
    "Content Management": "कंटेंट मैनेजमेंट",

    // Development
    "Custom Development": "कस्टम डेवलपमेंट",
    "Secure Development": "सिक्योर डेवलपमेंट",
    "Scalable Development": "स्केलेबल डेवलपमेंट",
    "Clean Code": "क्लीन कोड",
    "API Integration": "API इंटीग्रेशन",
    "Third Party Integration": "थर्ड-पार्टी इंटीग्रेशन",

    // Support
    "1 Month Support": "1 महीने का सपोर्ट",
    "3 Month Support": "3 महीने का सपोर्ट",
    "6 Month Support": "6 महीने का सपोर्ट",
    "12 Month Support": "12 महीने का सपोर्ट",
    "Priority Support": "प्रायोरिटी सपोर्ट",
    "Free Support": "फ्री सपोर्ट",
    "Technical Support": "टेक्निकल सपोर्ट",

    // Security
    "Secure Website": "सिक्योर वेबसाइट",
    "SSL Certificate": "SSL सर्टिफिकेट",
    "Secure Hosting": "सिक्योर होस्टिंग",
    "Data Security": "डेटा सिक्योरिटी",

    // Integrations
    "WhatsApp Integration": "व्हाट्सऐप इंटीग्रेशन",
    "Social Media Integration": "सोशल मीडिया इंटीग्रेशन",
    "Google Maps Integration": "गूगल मैप्स इंटीग्रेशन",
    "Email Integration": "ईमेल इंटीग्रेशन",

    // Business
    "Business Ready": "बिज़नेस रेडी",
    "Conversion Focused": "कन्वर्ज़न फोकस्ड",
    "Lead Generation": "लीड जनरेशन",
    "Contact Form": "कॉन्टैक्ट फॉर्म",
    "Call To Action": "कॉल टू एक्शन",

    // Hosting / deployment
    "Domain Setup": "डोमेन सेटअप",
    "Hosting Setup": "होस्टिंग सेटअप",
    "Deployment": "डिप्लॉयमेंट",
    "Website Deployment": "वेबसाइट डिप्लॉयमेंट",

    // Common
    "Custom Features": "कस्टम फीचर्स",
    "Professional Support": "प्रोफेशनल सपोर्ट",
    "Quality Assurance": "क्वालिटी एश्योरेंस",
    "Cross Browser Support": "क्रॉस-ब्राउज़र सपोर्ट",
    "Tablet Responsive": "टैबलेट रिस्पॉन्सिव",
    "Desktop Responsive": "डेस्कटॉप रिस्पॉन्सिव",
  };

  const getFeatureTitle = (feature: string) => {
    if (!isHindi) {
      return feature;
    }

    return hindiFeatures[feature] || feature;
  };

  return (
    <section className="relative mt-12 overflow-hidden px-4">
      {/* =====================================================
          AMBIENT GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -left-20 top-20 h-44 w-44 rounded-full bg-[#DFAE45]/[0.07] blur-[80px]" />

      <div className="pointer-events-none absolute -right-16 bottom-10 h-40 w-40 rounded-full bg-blue-500/[0.04] blur-[75px]" />

      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="relative">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#DFAE45]" />

          <span className="text-[10px] font-black uppercase tracking-[2px] text-[#DFAE45]">
            {t.whatsIncluded}
          </span>

          <span className="h-px w-7 bg-gradient-to-r from-[#DFAE45] to-transparent" />
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-[27px] font-black tracking-tight text-white">
              {t.everythingYou}

              <span className="block text-[#DFAE45]">
                {t.needToLaunch}
              </span>
            </h2>

            <p className="mt-2 max-w-[320px] text-[13px] leading-6 text-gray-500">
              {t.description}
            </p>
          </div>

          {/* Feature count */}

          <div className="hidden min-[390px]:flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl border border-[#DFAE45]/15 bg-[#DFAE45]/[0.06]">
            <span className="text-sm font-black text-[#FFD86A]">
              {String(service.features.length).padStart(
                2,
                "0"
              )}
            </span>

            <span className="text-[7px] font-bold uppercase tracking-[0.8px] text-gray-600">
              {t.features}
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <div className="relative mt-7 grid grid-cols-2 gap-2.5">
        {service.features.map((feature, index) => (
          <div
            key={`${feature}-${index}`}
            className="group relative min-h-[145px] overflow-hidden rounded-[22px] border border-white/[0.065] bg-gradient-to-b from-[#0E1B2C] to-[#081321] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DFAE45]/25 hover:shadow-[0_15px_35px_rgba(0,0,0,0.25)]"
          >
            {/* Card glow */}

            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#DFAE45]/[0.07] blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Shine */}

            <span className="pointer-events-none absolute -left-12 top-0 h-full w-8 rotate-[20deg] bg-white/[0.06] blur-sm transition-all duration-700 group-hover:left-[120%]" />

            {/* Top row */}

            <div className="relative flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.07] shadow-[0_8px_20px_rgba(223,174,69,0.05)]">
                <CheckCircle2
                  size={20}
                  strokeWidth={2}
                  className="text-[#DFAE45]"
                />
              </div>

              <span className="text-[9px] font-black tracking-[1px] text-gray-700">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Feature title */}

            <div className="relative mt-5">
              <h3 className="text-[12px] font-extrabold leading-5 text-gray-200">
                {getFeatureTitle(feature)}
              </h3>

              <div className="mt-2 flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.7)]" />

                <span className="text-[8px] font-bold uppercase tracking-[0.7px] text-gray-600">
                  {t.included}
                </span>
              </div>
            </div>

            {/* Bottom accent */}

            <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      {/* =====================================================
          PREMIUM INCLUDED CARD
      ===================================================== */}

      <div className="relative mt-3 overflow-hidden rounded-[23px] border border-green-400/10 bg-gradient-to-r from-green-400/[0.05] via-white/[0.02] to-transparent p-4">
        <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-green-400/[0.04] blur-3xl" />

        <div className="relative flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] border border-green-400/15 bg-green-400/[0.07]">
            <Check
              size={18}
              strokeWidth={3}
              className="text-green-400"
            />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-extrabold text-gray-200">
              {t.qualityStandard}
            </p>

            <p className="mt-0.5 text-[9px] leading-4 text-gray-600">
              {t.qualityDescription}
            </p>
          </div>

          <Sparkles
            size={17}
            strokeWidth={2}
            className="shrink-0 text-[#DFAE45]"
          />
        </div>
      </div>

      {/* =====================================================
          BOTTOM TRUST STRIP
      ===================================================== */}

      <div className="mt-3 grid grid-cols-3 gap-2">
        {/* Verified */}

        <div className="flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.045] bg-white/[0.018] py-2.5">
          <CheckCircle2
            size={11}
            strokeWidth={2.5}
            className="text-green-400"
          />

          <span className="text-[8px] font-bold uppercase tracking-[0.6px] text-gray-600">
            {t.verified}
          </span>
        </div>

        {/* Optimized */}

        <div className="flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.045] bg-white/[0.018] py-2.5">
          <Zap
            size={11}
            strokeWidth={2.5}
            className="text-[#DFAE45]"
          />

          <span className="text-[8px] font-bold uppercase tracking-[0.6px] text-gray-600">
            {t.optimized}
          </span>
        </div>

        {/* Included */}

        <div className="flex items-center justify-center gap-1.5 rounded-xl border border-white/[0.045] bg-white/[0.018] py-2.5">
          <Check
            size={11}
            strokeWidth={2.8}
            className="text-blue-400"
          />

          <span className="text-[8px] font-bold uppercase tracking-[0.6px] text-gray-600">
            {t.included}
          </span>
        </div>
      </div>
    </section>
  );
}