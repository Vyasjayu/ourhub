"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Home,
  IndianRupee,
  MapPin,
  Phone,
  Ruler,
  Sparkles,
  User,
  X,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

type LangText = {
  en: string;
  hi: string;
};

const projectTypes: Array<{
  id: string;
  title: LangText;
  subtitle: LangText;
  icon: typeof Home;
}> = [
  {
    id: "independent-house",
    title: {
      en: "Independent House",
      hi: "इंडिपेंडेंट हाउस",
    },
    subtitle: {
      en: "Complete residential construction",
      hi: "पूरा रेजिडेंशियल कंस्ट्रक्शन",
    },
    icon: Home,
  },
  {
    id: "duplex",
    title: {
      en: "Duplex Home",
      hi: "डुप्लेक्स होम",
    },
    subtitle: {
      en: "Two-floor residential home",
      hi: "दो मंजिला रेजिडेंशियल होम",
    },
    icon: Building2,
  },
  {
    id: "villa",
    title: {
      en: "Villa",
      hi: "विला",
    },
    subtitle: {
      en: "Premium custom construction",
      hi: "प्रीमियम कस्टम कंस्ट्रक्शन",
    },
    icon: Sparkles,
  },
  {
    id: "floor-construction",
    title: {
      en: "Floor Construction",
      hi: "फ्लोर कंस्ट्रक्शन",
    },
    subtitle: {
      en: "Additional floor construction",
      hi: "अतिरिक्त फ्लोर कंस्ट्रक्शन",
    },
    icon: Building2,
  },
  {
    id: "home-extension",
    title: {
      en: "Home Extension",
      hi: "होम एक्सटेंशन",
    },
    subtitle: {
      en: "Extend your existing home",
      hi: "अपने मौजूदा घर का विस्तार करें",
    },
    icon: Home,
  },
  {
    id: "custom-project",
    title: {
      en: "Custom Project",
      hi: "कस्टम प्रोजेक्ट",
    },
    subtitle: {
      en: "Tell us your requirements",
      hi: "अपनी जरूरत हमें बताएं",
    },
    icon: Ruler,
  },
];

const plotSizes: LangText[] = [
  {
    en: "Below 500 sq.ft",
    hi: "500 वर्ग फुट से कम",
  },
  {
    en: "500 - 1000 sq.ft",
    hi: "500 - 1000 वर्ग फुट",
  },
  {
    en: "1000 - 2000 sq.ft",
    hi: "1000 - 2000 वर्ग फुट",
  },
  {
    en: "2000 - 3000 sq.ft",
    hi: "2000 - 3000 वर्ग फुट",
  },
  {
    en: "Above 3000 sq.ft",
    hi: "3000 वर्ग फुट से अधिक",
  },
];

const floors: LangText[] = [
  {
    en: "Ground Floor",
    hi: "ग्राउंड फ्लोर",
  },
  {
    en: "G + 1",
    hi: "G + 1",
  },
  {
    en: "G + 2",
    hi: "G + 2",
  },
  {
    en: "G + 3",
    hi: "G + 3",
  },
  {
    en: "Custom",
    hi: "कस्टम",
  },
];

const budgets: LangText[] = [
  {
    en: "Below ₹10 Lakh",
    hi: "₹10 लाख से कम",
  },
  {
    en: "₹10 - ₹25 Lakh",
    hi: "₹10 - ₹25 लाख",
  },
  {
    en: "₹25 - ₹50 Lakh",
    hi: "₹25 - ₹50 लाख",
  },
  {
    en: "₹50 Lakh - ₹1 Crore",
    hi: "₹50 लाख - ₹1 करोड़",
  },
  {
    en: "Above ₹1 Crore",
    hi: "₹1 करोड़ से अधिक",
  },
  {
    en: "Need Expert Advice",
    hi: "एक्सपर्ट की सलाह चाहिए",
  },
];

const timelines: Array<{
  id: string;
  title: LangText;
  subtitle: LangText;
}> = [
  {
    id: "immediately",
    title: {
      en: "Immediately",
      hi: "तुरंत",
    },
    subtitle: {
      en: "Ready to start soon",
      hi: "जल्द शुरू करने के लिए तैयार",
    },
  },
  {
    id: "1-3-months",
    title: {
      en: "1 - 3 Months",
      hi: "1 - 3 महीने",
    },
    subtitle: {
      en: "Planning stage",
      hi: "प्लानिंग स्टेज",
    },
  },
  {
    id: "3-6-months",
    title: {
      en: "3 - 6 Months",
      hi: "3 - 6 महीने",
    },
    subtitle: {
      en: "Future planning",
      hi: "भविष्य की प्लानिंग",
    },
  },
  {
    id: "exploring",
    title: {
      en: "Just Exploring",
      hi: "अभी जानकारी ले रहा हूं",
    },
    subtitle: {
      en: "Need information first",
      hi: "पहले जानकारी चाहिए",
    },
  },
];

/* =========================================================
   PAGE WRAPPER
========================================================= */

export default function ConstructionRequestPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen w-full bg-[#030303]">
          <div className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center bg-[#080808] text-white">
            <div className="text-center">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-[#DFAE45]" />

              <p className="mt-4 text-[11px] text-white/40">
                Loading request form...
              </p>
            </div>
          </div>
        </main>
      }
    >
      <ConstructionRequestContent />
    </Suspense>
  );
}

/* =========================================================
   MAIN CONTENT
========================================================= */

function ConstructionRequestContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { language } = useLanguage();
  const isHindi = language === "hi";

  const service =
    searchParams.get("service") || "construction";

  const serviceName = useMemo<LangText>(() => {
    if (service === "home-construction") {
      return {
        en: "Home Construction",
        hi: "होम कंस्ट्रक्शन",
      };
    }

    if (service === "renovation") {
      return {
        en: "Home Renovation",
        hi: "होम रिनोवेशन",
      };
    }

    if (service === "interior") {
      return {
        en: "Interior Work",
        hi: "इंटीरियर वर्क",
      };
    }

    return {
      en: "Construction",
      hi: "कंस्ट्रक्शन",
    };
  }, [service]);

  const t = {
    loading: isHindi
      ? "रिक्वेस्ट फॉर्म लोड हो रहा है..."
      : "Loading request form...",

    goBack: isHindi ? "वापस जाएं" : "Go back",
    close: isHindi ? "बंद करें" : "Close",

    projectRequest: isHindi
      ? "प्रोजेक्ट रिक्वेस्ट"
      : "Project Request",

    selectedService: isHindi
      ? "आपकी चुनी हुई सर्विस"
      : "YOUR SELECTED SERVICE",

    step: isHindi ? "स्टेप" : "Step",
    of: isHindi ? "में से" : "of",
    complete: isHindi ? "पूरा" : "Complete",

    projectDetails: isHindi
      ? "प्रोजेक्ट डिटेल्स"
      : "PROJECT DETAILS",

    whatBuild: isHindi
      ? "आप क्या बनाना चाहते हैं?"
      : "What Do You Want",

    toBuild: isHindi
      ? ""
      : "To Build?",

    toBuildHindi: isHindi
      ? ""
      : "",

    constructionType: isHindi
      ? "आप किस प्रकार का कंस्ट्रक्शन प्रोजेक्ट प्लान कर रहे हैं, उसे चुनें।"
      : "Select the type of construction project you are planning.",

    propertyDetails: isHindi
      ? "प्रॉपर्टी डिटेल्स"
      : "PROPERTY DETAILS",

    tellAbout: isHindi
      ? "हमें अपनी"
      : "Tell Us About",

    property: isHindi
      ? "प्रॉपर्टी के बारे में बताएं"
      : "Your Property",

    plotSize: isHindi ? "प्लॉट साइज" : "Plot Size",

    floors: isHindi
      ? "फ्लोर की संख्या"
      : "Number Of Floors",

    locationBudget: isHindi
      ? "लोकेशन और बजट"
      : "LOCATION & BUDGET",

    projectLocation: isHindi
      ? "आपका प्रोजेक्ट"
      : "Where Is Your",

    located: isHindi
      ? "कहां स्थित है?"
      : "Project Located?",

    city: isHindi ? "शहर" : "City",

    enterCity: isHindi
      ? "अपना शहर दर्ज करें"
      : "Enter your city",

    areaLocality: isHindi
      ? "एरिया / लोकैलिटी"
      : "Area / Locality",

    optional: isHindi ? "(वैकल्पिक)" : "(Optional)",

    enterArea: isHindi
      ? "एरिया या लोकैलिटी दर्ज करें"
      : "Enter area or locality",

    estimatedBudget: isHindi
      ? "अनुमानित बजट"
      : "Estimated Budget",

    projectTimeline: isHindi
      ? "प्रोजेक्ट टाइमलाइन"
      : "PROJECT TIMELINE",

    whenStart: isHindi
      ? "आप कब शुरू"
      : "When Do You Plan",

    start: isHindi
      ? "करना चाहते हैं?"
      : "To Start?",

    timelineDescription: isHindi
      ? "इससे हमें आपको सही कंस्ट्रक्शन एक्सपर्ट से जोड़ने में मदद मिलेगी।"
      : "This helps us connect you with the right construction expert.",

    contactDetails: isHindi
      ? "कॉन्टैक्ट डिटेल्स"
      : "CONTACT DETAILS",

    contactExpert: isHindi
      ? "हमारे एक्सपर्ट आपसे"
      : "Where Should Our Expert",

    contactYou: isHindi
      ? "कहां संपर्क करें?"
      : "Contact You?",

    contactDescription: isHindi
      ? "हमारे कंस्ट्रक्शन एक्सपर्ट आपके प्रोजेक्ट के बारे में आपसे संपर्क करेंगे।"
      : "Our construction expert will contact you regarding your project.",

    yourName: isHindi ? "आपका नाम" : "Your Name",

    enterName: isHindi
      ? "अपना नाम दर्ज करें"
      : "Enter your name",

    mobileNumber: isHindi
      ? "मोबाइल नंबर"
      : "Mobile Number",

    enterMobile: isHindi
      ? "मोबाइल नंबर दर्ज करें"
      : "Enter mobile number",

    requestSummary: isHindi
      ? "रिक्वेस्ट समरी"
      : "REQUEST SUMMARY",

    service: isHindi ? "सर्विस" : "Service",

    project: isHindi ? "प्रोजेक्ट" : "Project",

    budget: isHindi ? "बजट" : "Budget",

    citySummary: isHindi ? "शहर" : "City",

    consent: isHindi
      ? "रिक्वेस्ट सबमिट करके आप अपने कंस्ट्रक्शन प्रोजेक्ट के संबंध में संपर्क किए जाने के लिए सहमत हैं।"
      : "By submitting this request, you agree to be contacted regarding your construction project.",

    continue: isHindi ? "आगे बढ़ें" : "Continue",

    submit: isHindi
      ? "प्रोजेक्ट रिक्वेस्ट सबमिट करें"
      : "Submit Project Request",
  };

  const [step, setStep] = useState(1);

  const [projectType, setProjectType] = useState("");
  const [plotSize, setPlotSize] = useState("");
  const [floor, setFloor] = useState("");

  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");

  const [timeline, setTimeline] = useState("");

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const totalSteps = 5;

  const progress = (step / totalSteps) * 100;

  const canContinue = () => {
    if (step === 1) {
      return projectType !== "";
    }

    if (step === 2) {
      return plotSize !== "" && floor !== "";
    }

    if (step === 3) {
      return city.trim() !== "" && budget !== "";
    }

    if (step === 4) {
      return timeline !== "";
    }

    if (step === 5) {
      return (
        name.trim().length >= 2 &&
        mobile.trim().length === 10
      );
    }

    return false;
  };

  const handleNext = () => {
    if (!canContinue()) return;

    if (step < totalSteps) {
      setStep((prev) => prev + 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    handleSubmit();
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    router.back();
  };

  const handleSubmit = () => {
    const selectedProject =
      projectTypes.find(
        (item) => item.id === projectType
      )?.title[language] || projectType;

    const selectedTimeline =
      timelines.find(
        (item) => item.id === timeline
      )?.title[language] || timeline;

    const selectedServiceName =
      serviceName[language];

    const requestId = `OH-CON-${Date.now()
      .toString()
      .slice(-6)}`;

    const whatsappNumber = "918878632431";

    const message = isHindi
      ? `
🏗️ *नई कंस्ट्रक्शन रिक्वेस्ट*

🆔 *रिक्वेस्ट ID:* ${requestId}

━━━━━━━━━━━━━━

🏠 *सर्विस*
${selectedServiceName}

🏗️ *प्रोजेक्ट टाइप*
${selectedProject}

📐 *प्लॉट साइज*
${plotSize}

🏢 *फ्लोर*
${floor}

📍 *शहर*
${city}

📌 *एरिया / लोकैलिटी*
${area || "उपलब्ध नहीं"}

💰 *अनुमानित बजट*
${budget}

📅 *प्रोजेक्ट टाइमलाइन*
${selectedTimeline}

━━━━━━━━━━━━━━

👤 *कस्टमर डिटेल्स*

👤 नाम: ${name}

📱 मोबाइल: +91 ${mobile}

━━━━━━━━━━━━━━

⚡ *OurHub वेबसाइट से रिक्वेस्ट प्राप्त हुई*
`
      : `
🏗️ *NEW CONSTRUCTION REQUEST*

🆔 *Request ID:* ${requestId}

━━━━━━━━━━━━━━

🏠 *SERVICE*
${selectedServiceName}

🏗️ *PROJECT TYPE*
${selectedProject}

📐 *PLOT SIZE*
${plotSize}

🏢 *FLOORS*
${floor}

📍 *CITY*
${city}

📌 *AREA / LOCALITY*
${area || "Not Provided"}

💰 *ESTIMATED BUDGET*
${budget}

📅 *PROJECT TIMELINE*
${selectedTimeline}

━━━━━━━━━━━━━━

👤 *CUSTOMER DETAILS*

👤 Name: ${name}

📱 Mobile: +91 ${mobile}

━━━━━━━━━━━━━━

⚡ *Request received from OurHub Website*
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    router.push(
      `/construction/request/success?service=${encodeURIComponent(
        service
      )}&id=${encodeURIComponent(requestId)}`
    );
  };

  return (
    <main className="min-h-screen w-full bg-[#030303]">
      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#080808] pb-[105px] text-white">

        {/* ================= HEADER ================= */}

        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#080808]/95 backdrop-blur-xl">
          <div className="flex h-[62px] items-center justify-between px-4">

            <button
              type="button"
              onClick={handleBack}
              aria-label={t.goBack}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] active:scale-95"
            >
              <ArrowLeft size={21} />
            </button>

            <div className="text-center">
              <p className="text-[8px] font-bold uppercase tracking-[4px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="mt-1 text-[12px] font-semibold">
                {t.projectRequest}
              </p>
            </div>

            <button
              type="button"
              onClick={() =>
                router.push("/construction")
              }
              aria-label={t.close}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] active:scale-95"
            >
              <X size={19} />
            </button>
          </div>
        </header>

        {/* ================= SELECTED SERVICE ================= */}

        <section className="px-4 pt-5">
          <div className="rounded-[22px] border border-[#DFAE45]/20 bg-[#DFAE45]/[0.06] p-4">
            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DFAE45]/10">
                <Building2
                  size={21}
                  className="text-[#DFAE45]"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[8px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                  {t.selectedService}
                </p>

                <h1 className="mt-1 text-[15px] font-semibold">
                  {serviceName[language]}
                </h1>
              </div>

            </div>
          </div>
        </section>

        {/* ================= PROGRESS ================= */}

        <section className="px-4 pt-6">
          <div className="flex items-center justify-between">

            <p className="text-[10px] font-medium text-white/50">
              {t.step} {step} {t.of} {totalSteps}
            </p>

            <p className="text-[10px] font-semibold text-[#DFAE45]">
              {Math.round(progress)}% {t.complete}
            </p>

          </div>

          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
            <div
              className="h-full rounded-full bg-[#DFAE45] transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </section>

        {/* ================= STEP 1 ================= */}

        {step === 1 && (
          <section className="px-4 pt-8">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              {t.projectDetails}
            </p>

            <h2 className="mt-2 text-[24px] font-bold">
              {isHindi ? (
                <>
                  आप क्या{" "}
                  <span className="block text-[#DFAE45]">
                    बनाना चाहते हैं?
                  </span>
                </>
              ) : (
                <>
                  What Do You Want
                  <span className="block text-[#DFAE45]">
                    To Build?
                  </span>
                </>
              )}
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-white/45">
              {t.constructionType}
            </p>

            <div className="mt-6 space-y-3">
              {projectTypes.map((item) => {
                const Icon = item.icon;

                const selected =
                  projectType === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setProjectType(item.id)
                    }
                    className={`flex w-full items-center gap-3 rounded-[20px] border p-4 text-left transition active:scale-[0.98] ${
                      selected
                        ? "border-[#DFAE45]/60 bg-[#DFAE45]/10"
                        : "border-white/[0.07] bg-[#111111]"
                    }`}
                  >

                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                        selected
                          ? "bg-[#DFAE45] text-black"
                          : "bg-[#DFAE45]/10 text-[#DFAE45]"
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">

                      <h3 className="text-[13px] font-semibold">
                        {item.title[language]}
                      </h3>

                      <p className="mt-1 text-[10px] text-white/45">
                        {item.subtitle[language]}
                      </p>

                    </div>

                    {selected ? (
                      <CheckCircle2
                        size={20}
                        className="text-[#DFAE45]"
                      />
                    ) : (
                      <ChevronRight
                        size={18}
                        className="text-white/25"
                      />
                    )}

                  </button>
                );
              })}
            </div>

          </section>
        )}

        {/* ================= STEP 2 ================= */}

        {step === 2 && (
          <section className="px-4 pt-8">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              {t.propertyDetails}
            </p>

            <h2 className="mt-2 text-[24px] font-bold">
              {isHindi ? (
                <>
                  अपनी{" "}
                  <span className="block text-[#DFAE45]">
                    प्रॉपर्टी के बारे में बताएं
                  </span>
                </>
              ) : (
                <>
                  Tell Us About
                  <span className="block text-[#DFAE45]">
                    Your Property
                  </span>
                </>
              )}
            </h2>

            {/* PLOT SIZE */}

            <div className="mt-7">

              <div className="flex items-center gap-2">
                <Ruler
                  size={17}
                  className="text-[#DFAE45]"
                />

                <h3 className="text-[13px] font-semibold">
                  {t.plotSize}
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">

                {plotSizes.map((size) => {
                  const selected =
                    plotSize === size.en;

                  return (
                    <button
                      key={size.en}
                      type="button"
                      onClick={() =>
                        setPlotSize(size.en)
                      }
                      className={`rounded-2xl border px-3 py-4 text-left text-[11px] transition active:scale-[0.97] ${
                        selected
                          ? "border-[#DFAE45]/60 bg-[#DFAE45]/10 text-[#DFAE45]"
                          : "border-white/[0.07] bg-[#111111] text-white/65"
                      }`}
                    >
                      {size[language]}
                    </button>
                  );
                })}

              </div>
            </div>

            {/* FLOORS */}

            <div className="mt-8">

              <div className="flex items-center gap-2">
                <Building2
                  size={17}
                  className="text-[#DFAE45]"
                />

                <h3 className="text-[13px] font-semibold">
                  {t.floors}
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">

                {floors.map((item) => {
                  const selected =
                    floor === item.en;

                  return (
                    <button
                      key={item.en}
                      type="button"
                      onClick={() =>
                        setFloor(item.en)
                      }
                      className={`rounded-2xl border px-3 py-4 text-left text-[11px] transition active:scale-[0.97] ${
                        selected
                          ? "border-[#DFAE45]/60 bg-[#DFAE45]/10 text-[#DFAE45]"
                          : "border-white/[0.07] bg-[#111111] text-white/65"
                      }`}
                    >
                      {item[language]}
                    </button>
                  );
                })}

              </div>
            </div>

          </section>
        )}

        {/* ================= STEP 3 ================= */}

        {step === 3 && (
          <section className="px-4 pt-8">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              {t.locationBudget}
            </p>

            <h2 className="mt-2 text-[24px] font-bold">
              {isHindi ? (
                <>
                  आपका प्रोजेक्ट{" "}
                  <span className="block text-[#DFAE45]">
                    कहां स्थित है?
                  </span>
                </>
              ) : (
                <>
                  Where Is Your
                  <span className="block text-[#DFAE45]">
                    Project Located?
                  </span>
                </>
              )}
            </h2>

            {/* CITY */}

            <div className="mt-7">

              <label className="text-[12px] font-semibold">
                {t.city}
              </label>

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#111111] px-4">

                <MapPin
                  size={18}
                  className="text-[#DFAE45]"
                />

                <input
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                  placeholder={t.enterCity}
                  className="h-[52px] w-full bg-transparent text-[12px] outline-none placeholder:text-white/25"
                />

              </div>

            </div>

            {/* AREA */}

            <div className="mt-5">

              <label className="text-[12px] font-semibold">
                {t.areaLocality}

                <span className="ml-1 text-white/35">
                  {t.optional}
                </span>
              </label>

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#111111] px-4">

                <MapPin
                  size={18}
                  className="text-[#DFAE45]"
                />

                <input
                  value={area}
                  onChange={(e) =>
                    setArea(e.target.value)
                  }
                  placeholder={t.enterArea}
                  className="h-[52px] w-full bg-transparent text-[12px] outline-none placeholder:text-white/25"
                />

              </div>

            </div>

            {/* BUDGET */}

            <div className="mt-8">

              <div className="flex items-center gap-2">

                <IndianRupee
                  size={17}
                  className="text-[#DFAE45]"
                />

                <h3 className="text-[13px] font-semibold">
                  {t.estimatedBudget}
                </h3>

              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">

                {budgets.map((item) => {
                  const selected =
                    budget === item.en;

                  return (
                    <button
                      key={item.en}
                      type="button"
                      onClick={() =>
                        setBudget(item.en)
                      }
                      className={`rounded-2xl border px-3 py-4 text-left text-[10px] transition active:scale-[0.97] ${
                        selected
                          ? "border-[#DFAE45]/60 bg-[#DFAE45]/10 text-[#DFAE45]"
                          : "border-white/[0.07] bg-[#111111] text-white/65"
                      }`}
                    >
                      {item[language]}
                    </button>
                  );
                })}

              </div>

            </div>

          </section>
        )}

        {/* ================= STEP 4 ================= */}

        {step === 4 && (
          <section className="px-4 pt-8">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              {t.projectTimeline}
            </p>

            <h2 className="mt-2 text-[24px] font-bold">
              {isHindi ? (
                <>
                  आप कब{" "}
                  <span className="block text-[#DFAE45]">
                    शुरू करना चाहते हैं?
                  </span>
                </>
              ) : (
                <>
                  When Do You Plan
                  <span className="block text-[#DFAE45]">
                    To Start?
                  </span>
                </>
              )}
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-white/45">
              {t.timelineDescription}
            </p>

            <div className="mt-7 space-y-3">

              {timelines.map((item) => {

                const selected =
                  timeline === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setTimeline(item.id)
                    }
                    className={`flex w-full items-center gap-3 rounded-[20px] border p-4 text-left transition active:scale-[0.98] ${
                      selected
                        ? "border-[#DFAE45]/60 bg-[#DFAE45]/10"
                        : "border-white/[0.07] bg-[#111111]"
                    }`}
                  >

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                        selected
                          ? "bg-[#DFAE45] text-black"
                          : "bg-[#DFAE45]/10 text-[#DFAE45]"
                      }`}
                    >
                      <CalendarDays size={20} />
                    </div>

                    <div className="flex-1">

                      <h3 className="text-[13px] font-semibold">
                        {item.title[language]}
                      </h3>

                      <p className="mt-1 text-[10px] text-white/45">
                        {item.subtitle[language]}
                      </p>

                    </div>

                    {selected && (
                      <CheckCircle2
                        size={20}
                        className="text-[#DFAE45]"
                      />
                    )}

                  </button>
                );
              })}

            </div>

          </section>
        )}

        {/* ================= STEP 5 ================= */}

        {step === 5 && (
          <section className="px-4 pt-8">

            <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
              {t.contactDetails}
            </p>

            <h2 className="mt-2 text-[24px] font-bold">
              {isHindi ? (
                <>
                  हमारे एक्सपर्ट आपसे{" "}
                  <span className="block text-[#DFAE45]">
                    कहां संपर्क करें?
                  </span>
                </>
              ) : (
                <>
                  Where Should Our Expert
                  <span className="block text-[#DFAE45]">
                    Contact You?
                  </span>
                </>
              )}
            </h2>

            <p className="mt-3 text-[12px] leading-6 text-white/45">
              {t.contactDescription}
            </p>

            {/* NAME */}

            <div className="mt-8">

              <label className="text-[12px] font-semibold">
                {t.yourName}
              </label>

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#111111] px-4">

                <User
                  size={18}
                  className="text-[#DFAE45]"
                />

                <input
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder={t.enterName}
                  className="h-[52px] w-full bg-transparent text-[12px] outline-none placeholder:text-white/25"
                />

              </div>

            </div>

            {/* MOBILE */}

            <div className="mt-5">

              <label className="text-[12px] font-semibold">
                {t.mobileNumber}
              </label>

              <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#111111] px-4">

                <Phone
                  size={18}
                  className="text-[#DFAE45]"
                />

                <span className="border-r border-white/[0.08] pr-3 text-[11px] text-white/55">
                  +91
                </span>

                <input
                  value={mobile}
                  onChange={(e) =>
                    setMobile(
                      e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10)
                    )
                  }
                  inputMode="numeric"
                  maxLength={10}
                  placeholder={t.enterMobile}
                  className="h-[52px] w-full bg-transparent text-[12px] outline-none placeholder:text-white/25"
                />

              </div>

            </div>

            {/* REQUEST SUMMARY */}

            <div className="mt-8 rounded-[22px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.05] p-4">

              <p className="text-[9px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                {t.requestSummary}
              </p>

              <div className="mt-4 space-y-3">

                <SummaryRow
                  label={t.service}
                  value={serviceName[language]}
                />

                <SummaryRow
                  label={t.project}
                  value={
                    projectTypes.find(
                      (item) =>
                        item.id === projectType
                    )?.title[language] || "-"
                  }
                />

                <SummaryRow
                  label={t.plotSize}
                  value={
                    plotSizes.find(
                      (item) =>
                        item.en === plotSize
                    )?.[language] || "-"
                  }
                />

                <SummaryRow
                  label={t.budget}
                  value={
                    budgets.find(
                      (item) =>
                        item.en === budget
                    )?.[language] || "-"
                  }
                />

                <SummaryRow
                  label={t.citySummary}
                  value={city}
                />

              </div>

            </div>

            <p className="mt-4 text-center text-[9px] leading-4 text-white/35">
              {t.consent}
            </p>

          </section>
        )}

        <div className="h-8" />

      </div>

      {/* ================= STICKY BUTTON ================= */}

      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#080808]/95 backdrop-blur-xl">

        <div className="mx-auto w-full max-w-[430px] border-t border-white/[0.07] px-4 py-3">

          <button
            type="button"
            disabled={!canContinue()}
            onClick={handleNext}
            className={`flex h-[54px] w-full items-center justify-center gap-2 rounded-2xl text-[13px] font-bold transition ${
              canContinue()
                ? "bg-[#DFAE45] text-black active:scale-[0.98]"
                : "cursor-not-allowed bg-white/[0.07] text-white/25"
            }`}
          >

            {step === totalSteps ? (
              <>
                {t.submit}

                <CheckCircle2 size={18} />
              </>
            ) : (
              <>
                {t.continue}

                <ArrowRight size={18} />
              </>
            )}

          </button>

        </div>

      </div>
    </main>
  );
}

/* =========================================================
   SUMMARY ROW
========================================================= */

function SummaryRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">

      <span className="text-[10px] text-white/40">
        {label}
      </span>

      <span className="max-w-[190px] truncate text-right text-[10px] font-medium text-white/75">
        {value || "-"}
      </span>

    </div>
  );
}