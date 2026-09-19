"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Home,
  MapPin,
  Phone,
  User,
  Wallet,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function InteriorBookingPage() {
  const router = useRouter();
  const { language } = useLanguage();

  const isHindi = language === "hi";

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    city: "Indore",
    propertyType: "",
    service: "",
    rooms: "",
    budget: "",
    timeline: "",
  });

  const update = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  /* ============================================================
     TRANSLATIONS
  ============================================================ */

  const t = {
    interior: isHindi ? "इंटीरियर" : "Interior",

    interiorConsultation: isHindi
      ? "इंटीरियर कंसल्टेशन"
      : "Interior Consultation",

    requestReceived: isHindi
      ? "रिक्वेस्ट प्राप्त हुई"
      : "REQUEST RECEIVED",

    thankYou: isHindi
      ? "धन्यवाद!"
      : "Thank You!",

    successDescription: isHindi
      ? "आपकी इंटीरियर कंसल्टेशन रिक्वेस्ट सफलतापूर्वक सबमिट हो गई है।"
      : "Your interior consultation request has been successfully submitted.",

    whatHappensNext: isHindi
      ? "आगे क्या होगा"
      : "WHAT HAPPENS NEXT",

    nextStep1: isHindi
      ? "हमारे इंटीरियर एक्सपर्ट आपकी जरूरत की समीक्षा करेंगे।"
      : "Our interior expert will review your requirement.",

    nextStep2: isHindi
      ? "आपको अपने प्रोजेक्ट के संबंध में कॉल प्राप्त होगी।"
      : "You will receive a call regarding your project.",

    nextStep3: isHindi
      ? "डिजाइन, बजट और प्रोजेक्ट टाइमलाइन पर चर्चा की जाएगी।"
      : "Discuss design, budget and project timeline.",

    backToInterior: isHindi
      ? "इंटीरियर पर वापस जाएं"
      : "Back To Interior",

    getStarted: isHindi
      ? "शुरू करें"
      : "GET STARTED",

    tellUsAboutHome: isHindi
      ? "अपने घर के बारे में बताएं"
      : "Tell Us About Your Home",

    formDescription: isHindi
      ? "कुछ जानकारी साझा करें और हमारे इंटीरियर एक्सपर्ट आपसे संपर्क करेंगे।"
      : "Share a few details and our interior expert will contact you.",

    contactDetails: isHindi
      ? "कॉन्टैक्ट डिटेल्स"
      : "Contact Details",

    yourName: isHindi
      ? "आपका नाम"
      : "Your Name",

    enterFullName: isHindi
      ? "अपना पूरा नाम दर्ज करें"
      : "Enter your full name",

    mobileNumber: isHindi
      ? "मोबाइल नंबर"
      : "Mobile Number",

    enterMobile: isHindi
      ? "मोबाइल नंबर दर्ज करें"
      : "Enter mobile number",

    city: isHindi
      ? "शहर"
      : "City",

    propertyDetails: isHindi
      ? "प्रॉपर्टी डिटेल्स"
      : "Property Details",

    propertyType: isHindi
      ? "प्रॉपर्टी का प्रकार"
      : "Property Type",

    selectPropertyType: isHindi
      ? "प्रॉपर्टी का प्रकार चुनें"
      : "Select property type",

    rooms: isHindi
      ? "कमरों की संख्या"
      : "Number of Rooms",

    selectRooms: isHindi
      ? "कमरे चुनें"
      : "Select rooms",

    interiorRequirement: isHindi
      ? "इंटीरियर रिक्वायरमेंट"
      : "Interior Requirement",

    whatDoYouNeed: isHindi
      ? "आपको क्या चाहिए?"
      : "What do you need?",

    completeInterior: isHindi
      ? "कम्प्लीट इंटीरियर"
      : "Complete Interior",

    modularKitchen: isHindi
      ? "मॉड्यूलर किचन"
      : "Modular Kitchen",

    livingRoom: isHindi
      ? "लिविंग रूम"
      : "Living Room",

    bedroom: isHindi
      ? "बेडरूम"
      : "Bedroom",

    falseCeiling: isHindi
      ? "फॉल्स सीलिंग"
      : "False Ceiling",

    paintingDecor: isHindi
      ? "पेंटिंग और डेकोर"
      : "Painting & Décor",

    budgetTimeline: isHindi
      ? "बजट और टाइमलाइन"
      : "Budget & Timeline",

    estimatedBudget: isHindi
      ? "अनुमानित इंटीरियर बजट"
      : "Estimated Interior Budget",

    selectBudget: isHindi
      ? "अपना बजट चुनें"
      : "Select your budget",

    startWhen: isHindi
      ? "आप कब शुरू करना चाहते हैं?"
      : "When do you want to start?",

    selectTimeline: isHindi
      ? "टाइमलाइन चुनें"
      : "Select timeline",

    immediately: isHindi
      ? "तुरंत"
      : "Immediately",

    withinOneMonth: isHindi
      ? "1 महीने के अंदर"
      : "Within 1 Month",

    oneToThreeMonths: isHindi
      ? "1–3 महीने"
      : "1–3 Months",

    threeToSixMonths: isHindi
      ? "3–6 महीने"
      : "3–6 Months",

    justExploring: isHindi
      ? "अभी सिर्फ जानकारी ले रहा हूं"
      : "Just Exploring",

    promise: isHindi
      ? "OURHUB का वादा"
      : "OURHUB PROMISE",

    noPressure: isHindi
      ? "कोई दबाव नहीं। सिर्फ एक्सपर्ट गाइडेंस।"
      : "No pressure. Just expert guidance.",

    verifiedExperts: isHindi
      ? "वेरिफाइड इंटीरियर एक्सपर्ट्स"
      : "Verified interior experts",

    transparentEstimates: isHindi
      ? "पारदर्शी एस्टिमेट"
      : "Transparent estimates",

    designedBudget: isHindi
      ? "आपके बजट के अनुसार डिजाइन"
      : "Designed around your budget",

    freeConsultation: isHindi
      ? "फ्री कंसल्टेशन"
      : "FREE CONSULTATION",

    submitRequirement: isHindi
      ? "अपनी रिक्वायरमेंट सबमिट करें"
      : "Submit Requirement",

    invalidName: isHindi
      ? "कृपया अपना नाम दर्ज करें"
      : "Please enter your name",

    invalidMobile: isHindi
      ? "कृपया सही मोबाइल नंबर दर्ज करें"
      : "Please enter a valid mobile number",

    invalidProperty: isHindi
      ? "कृपया प्रॉपर्टी का प्रकार चुनें"
      : "Please select property type",

    invalidService: isHindi
      ? "कृपया इंटीरियर सर्विस चुनें"
      : "Please select interior service",
  };

  /* ============================================================
     OPTIONS
  ============================================================ */

  const cities = [
    {
      value: "Indore",
      label: isHindi ? "इंदौर" : "Indore",
    },
    {
      value: "Ujjain",
      label: isHindi ? "उज्जैन" : "Ujjain",
    },
    {
      value: "Ratlam",
      label: isHindi ? "रतलाम" : "Ratlam",
    },
  ];

  const propertyOptions = [
    {
      value: "2 BHK Apartment",
      label: isHindi ? "2 BHK अपार्टमेंट" : "2 BHK Apartment",
    },
    {
      value: "3 BHK Apartment",
      label: isHindi ? "3 BHK अपार्टमेंट" : "3 BHK Apartment",
    },
    {
      value: "4 BHK Apartment",
      label: isHindi ? "4 BHK अपार्टमेंट" : "4 BHK Apartment",
    },
    {
      value: "Independent House",
      label: isHindi ? "इंडिपेंडेंट हाउस" : "Independent House",
    },
    {
      value: "Villa",
      label: isHindi ? "विला" : "Villa",
    },
    {
      value: "Office / Commercial",
      label: isHindi ? "ऑफिस / कमर्शियल" : "Office / Commercial",
    },
  ];

  const roomOptions = [
    {
      value: "1–2 Rooms",
      label: isHindi ? "1–2 कमरे" : "1–2 Rooms",
    },
    {
      value: "3–4 Rooms",
      label: isHindi ? "3–4 कमरे" : "3–4 Rooms",
    },
    {
      value: "5–6 Rooms",
      label: isHindi ? "5–6 कमरे" : "5–6 Rooms",
    },
    {
      value: "Full Home",
      label: isHindi ? "पूरा घर" : "Full Home",
    },
  ];

  const serviceOptions = [
    {
      value: "Complete Interior",
      label: t.completeInterior,
    },
    {
      value: "Modular Kitchen",
      label: t.modularKitchen,
    },
    {
      value: "Living Room",
      label: t.livingRoom,
    },
    {
      value: "Bedroom",
      label: t.bedroom,
    },
    {
      value: "False Ceiling",
      label: t.falseCeiling,
    },
    {
      value: "Painting & Décor",
      label: t.paintingDecor,
    },
  ];

  const budgetOptions = [
    {
      value: "₹2 – ₹5 Lakhs",
      label: isHindi ? "₹2 – ₹5 लाख" : "₹2 – ₹5 Lakhs",
    },
    {
      value: "₹5 – ₹10 Lakhs",
      label: isHindi ? "₹5 – ₹10 लाख" : "₹5 – ₹10 Lakhs",
    },
    {
      value: "₹10 – ₹15 Lakhs",
      label: isHindi ? "₹10 – ₹15 लाख" : "₹10 – ₹15 Lakhs",
    },
    {
      value: "₹15 – ₹25 Lakhs",
      label: isHindi ? "₹15 – ₹25 लाख" : "₹15 – ₹25 Lakhs",
    },
    {
      value: "₹25 Lakhs+",
      label: isHindi ? "₹25 लाख+" : "₹25 Lakhs+",
    },
  ];

  const timelineOptions = [
    {
      value: "Immediately",
      label: t.immediately,
    },
    {
      value: "Within 1 Month",
      label: t.withinOneMonth,
    },
    {
      value: "1–3 Months",
      label: t.oneToThreeMonths,
    },
    {
      value: "3–6 Months",
      label: t.threeToSixMonths,
    },
    {
      value: "Just Exploring",
      label: t.justExploring,
    },
  ];

  /* ============================================================
     SUBMIT
  ============================================================ */

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) {
      alert(t.invalidName);
      return;
    }

    if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      alert(t.invalidMobile);
      return;
    }

    if (!form.propertyType) {
      alert(t.invalidProperty);
      return;
    }

    if (!form.service) {
      alert(t.invalidService);
      return;
    }

    setSubmitted(true);
  };

  /* ============================================================
     SUCCESS
  ============================================================ */

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#020202]">
        <div className="mx-auto flex min-h-screen w-full max-w-[430px] flex-col bg-[#070707] px-4 text-white">

          {/* HEADER */}
          <header className="flex h-[56px] items-center justify-between border-b border-white/[0.08]">
            <button
              type="button"
              onClick={() => router.back()}
              aria-label={isHindi ? "वापस जाएं" : "Go back"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            >
              <ArrowLeft size={17} />
            </button>

            <div className="text-center">
              <p className="text-[7px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="text-[12px] font-semibold">
                {t.interior}
              </p>
            </div>

            <div className="w-9" />
          </header>

          {/* SUCCESS */}
          <div className="flex flex-1 flex-col items-center justify-center pb-20 text-center">

            <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#DFAE45]/20 bg-[#DFAE45]/10">
              <CheckCircle2
                size={40}
                className="text-[#DFAE45]"
              />
            </div>

            <p className="mt-7 text-[8px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
              {t.requestReceived}
            </p>

            <h1 className="mt-2 text-[25px] font-bold">
              {t.thankYou}
            </h1>

            <p className="mt-3 max-w-[300px] text-[11px] leading-5 text-white/45">
              {t.successDescription}
            </p>

            {/* NEXT STEPS */}
            <div className="mt-7 w-full rounded-[20px] border border-white/10 bg-white/[0.035] p-4 text-left">

              <p className="text-[8px] font-bold uppercase tracking-[2px] text-white/30">
                {t.whatHappensNext}
              </p>

              <div className="mt-4 space-y-3">

                <NextStep
                  number="01"
                  text={t.nextStep1}
                />

                <NextStep
                  number="02"
                  text={t.nextStep2}
                />

                <NextStep
                  number="03"
                  text={t.nextStep3}
                />

              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                router.push("/construction/interior")
              }
              className="mt-6 flex h-[48px] w-full items-center justify-center gap-2 rounded-[15px] bg-[#DFAE45] text-[12px] font-bold text-black"
            >
              {t.backToInterior}
              <ArrowRight size={15} />
            </button>

          </div>
        </div>
      </main>
    );
  }

  /* ============================================================
     BOOKING FORM
  ============================================================ */

  return (
    <main className="min-h-screen bg-[#020202]">

      <div className="mx-auto min-h-screen w-full max-w-[430px] bg-[#070707] text-white">

        {/* HEADER */}
        <header className="sticky top-0 z-50 h-[56px] border-b border-white/[0.08] bg-[#070707]/95 backdrop-blur-xl">

          <div className="flex h-full items-center justify-between px-4">

            <button
              type="button"
              onClick={() => router.back()}
              aria-label={isHindi ? "वापस जाएं" : "Go back"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
            >
              <ArrowLeft size={17} />
            </button>

            <div className="text-center">
              <p className="text-[7px] font-bold uppercase tracking-[3px] text-[#DFAE45]">
                OURHUB
              </p>

              <p className="text-[12px] font-semibold">
                {t.interiorConsultation}
              </p>
            </div>

            <div className="w-9" />

          </div>
        </header>

        {/* FORM */}
        <form onSubmit={submitForm}>

          <div className="px-4 pb-[100px]">

            {/* TITLE */}
            <section className="pt-5">

              <div className="flex items-center gap-2">

                <span className="h-px w-6 bg-[#DFAE45]/50" />

                <span className="text-[7px] font-bold uppercase tracking-[2.5px] text-[#DFAE45]">
                  {t.getStarted}
                </span>

              </div>

              <h1 className="mt-2 text-[25px] font-bold tracking-[-0.5px]">
                {t.tellUsAboutHome}
              </h1>

              <p className="mt-1.5 text-[10px] leading-[17px] text-white/35">
                {t.formDescription}
              </p>

            </section>

            {/* CONTACT DETAILS */}
            <section className="mt-6">

              <SectionTitle
                number="01"
                title={t.contactDetails}
              />

              <div className="mt-3 space-y-3">

                <Input
                  label={t.yourName}
                  placeholder={t.enterFullName}
                  value={form.name}
                  onChange={(value) =>
                    update("name", value)
                  }
                  icon={<User size={15} />}
                />

                {/* MOBILE */}
                <div>

                  <label className="mb-1.5 block text-[9px] font-semibold text-white/50">
                    {t.mobileNumber}
                  </label>

                  <div className="flex h-[48px] overflow-hidden rounded-[14px] border border-white/10 bg-white/[0.035] focus-within:border-[#DFAE45]/40">

                    <div className="flex w-[52px] items-center justify-center border-r border-white/10 text-[10px] text-white/50">
                      +91
                    </div>

                    <input
                      type="tel"
                      inputMode="numeric"
                      maxLength={10}
                      placeholder={t.enterMobile}
                      value={form.mobile}
                      onChange={(e) =>
                        update(
                          "mobile",
                          e.target.value.replace(/\D/g, "")
                        )
                      }
                      className="min-w-0 flex-1 bg-transparent px-3 text-[11px] text-white outline-none placeholder:text-white/20"
                    />

                    <div className="flex w-10 items-center justify-center text-white/20">
                      <Phone size={15} />
                    </div>

                  </div>
                </div>

                {/* CITY */}
                <Select
                  label={t.city}
                  value={form.city}
                  onChange={(value) =>
                    update("city", value)
                  }
                  options={cities}
                  icon={<MapPin size={15} />}
                />

              </div>

            </section>

            {/* PROPERTY */}
            <section className="mt-7">

              <SectionTitle
                number="02"
                title={t.propertyDetails}
              />

              <div className="mt-3 space-y-3">

                <Select
                  label={t.propertyType}
                  value={form.propertyType}
                  onChange={(value) =>
                    update("propertyType", value)
                  }
                  placeholder={t.selectPropertyType}
                  options={propertyOptions}
                  icon={<Home size={15} />}
                />

                <Select
                  label={t.rooms}
                  value={form.rooms}
                  onChange={(value) =>
                    update("rooms", value)
                  }
                  placeholder={t.selectRooms}
                  options={roomOptions}
                  icon={<Home size={15} />}
                />

              </div>

            </section>

            {/* REQUIREMENT */}
            <section className="mt-7">

              <SectionTitle
                number="03"
                title={t.interiorRequirement}
              />

              <div className="mt-3">

                <label className="mb-2 block text-[9px] font-semibold text-white/50">
                  {t.whatDoYouNeed}
                </label>

                <div className="grid grid-cols-2 gap-2">

                  {serviceOptions.map((item) => {

                    const active =
                      form.service === item.value;

                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() =>
                          update(
                            "service",
                            item.value
                          )
                        }
                        className={`min-h-[47px] rounded-[13px] border px-2 text-left text-[9px] font-semibold transition ${
                          active
                            ? "border-[#DFAE45]/60 bg-[#DFAE45]/10 text-[#DFAE45]"
                            : "border-white/10 bg-white/[0.035] text-white/55"
                        }`}
                      >

                        <div className="flex items-center justify-between gap-2">

                          <span>
                            {item.label}
                          </span>

                          {active && (
                            <Check
                              size={13}
                              className="shrink-0 text-[#DFAE45]"
                            />
                          )}

                        </div>

                      </button>
                    );
                  })}

                </div>

              </div>

            </section>

            {/* BUDGET */}
            <section className="mt-7">

              <SectionTitle
                number="04"
                title={t.budgetTimeline}
              />

              <div className="mt-3 space-y-3">

                <Select
                  label={t.estimatedBudget}
                  value={form.budget}
                  onChange={(value) =>
                    update("budget", value)
                  }
                  placeholder={t.selectBudget}
                  options={budgetOptions}
                  icon={<Wallet size={15} />}
                />

                <Select
                  label={t.startWhen}
                  value={form.timeline}
                  onChange={(value) =>
                    update("timeline", value)
                  }
                  placeholder={t.selectTimeline}
                  options={timelineOptions}
                  icon={<MapPin size={15} />}
                />

              </div>

            </section>

            {/* SUMMARY */}
            <section className="mt-7">

              <div className="rounded-[18px] border border-[#DFAE45]/15 bg-[#DFAE45]/[0.035] p-4">

                <div className="flex items-center gap-2">

                  <ShieldIcon />

                  <div>

                    <p className="text-[7px] font-bold uppercase tracking-[2px] text-[#DFAE45]">
                      {t.promise}
                    </p>

                    <p className="mt-1 text-[11px] font-semibold">
                      {t.noPressure}
                    </p>

                  </div>

                </div>

                <div className="mt-3 space-y-2">

                  <Promise
                    text={t.verifiedExperts}
                  />

                  <Promise
                    text={t.transparentEstimates}
                  />

                  <Promise
                    text={t.designedBudget}
                  />

                </div>

              </div>

            </section>

          </div>

          {/* STICKY SUBMIT */}
          <div className="fixed bottom-0 left-0 right-0 z-[100] border-t border-white/10 bg-[#070707]/95 px-3 py-2.5 backdrop-blur-xl">

            <div className="mx-auto w-full max-w-[430px]">

              <button
                type="submit"
                className="flex h-[53px] w-full items-center justify-between rounded-[17px] bg-[#DFAE45] px-4 text-black shadow-[0_8px_30px_rgba(223,174,69,0.15)] active:scale-[0.98]"
              >

                <div className="text-left">

                  <p className="text-[7px] font-bold uppercase tracking-[2px] opacity-50">
                    {t.freeConsultation}
                  </p>

                  <p className="mt-[2px] text-[13px] font-extrabold">
                    {t.submitRequirement}
                  </p>

                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10">

                  <ArrowRight size={16} />

                </div>

              </button>

            </div>

          </div>

        </form>

      </div>

    </main>
  );
}

/* ============================================================
   SECTION TITLE
============================================================ */

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2.5">

      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#DFAE45]/10 text-[8px] font-bold text-[#DFAE45]">
        {number}
      </div>

      <h2 className="text-[14px] font-bold">
        {title}
      </h2>

    </div>
  );
}

/* ============================================================
   INPUT
============================================================ */

function Input({
  label,
  placeholder,
  value,
  onChange,
  icon,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon: React.ReactNode;
}) {
  return (
    <div>

      <label className="mb-1.5 block text-[9px] font-semibold text-white/50">
        {label}
      </label>

      <div className="flex h-[48px] items-center rounded-[14px] border border-white/10 bg-white/[0.035] px-3 focus-within:border-[#DFAE45]/40">

        <input
          type="text"
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          placeholder={placeholder}
          className="min-w-0 flex-1 bg-transparent text-[11px] text-white outline-none placeholder:text-white/20"
        />

        <div className="text-white/20">
          {icon}
        </div>

      </div>

    </div>
  );
}

/* ============================================================
   SELECT
============================================================ */

function Select({
  label,
  value,
  onChange,
  options,
  placeholder = "Select",
  icon,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
  placeholder?: string;
  icon: React.ReactNode;
}) {
  return (
    <div>

      <label className="mb-1.5 block text-[9px] font-semibold text-white/50">
        {label}
      </label>

      <div className="relative">

        <select
          value={value}
          onChange={(e) =>
            onChange(e.target.value)
          }
          className={`h-[48px] w-full appearance-none rounded-[14px] border border-white/10 bg-white/[0.035] px-10 pr-10 text-[11px] outline-none ${
            value
              ? "text-white"
              : "text-white/20"
          } focus:border-[#DFAE45]/40`}
        >

          <option
            value=""
            disabled
            className="bg-[#111] text-white/50"
          >
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#111] text-white"
            >
              {option.label}
            </option>
          ))}

        </select>

        <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/20">
          {icon}
        </div>

        <ChevronDown
          size={15}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/25"
        />

      </div>

    </div>
  );
}

/* ============================================================
   PROMISE
============================================================ */

function Promise({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-2">

      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#DFAE45]/10">

        <Check
          size={9}
          className="text-[#DFAE45]"
          strokeWidth={3}
        />

      </div>

      <span className="text-[9px] text-white/45">
        {text}
      </span>

    </div>
  );
}

/* ============================================================
   NEXT STEP
============================================================ */

function NextStep({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-2.5">

      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#DFAE45]/10 text-[8px] font-bold text-[#DFAE45]">
        {number}
      </div>

      <p className="pt-1 text-[9px] leading-4 text-white/45">
        {text}
      </p>

    </div>
  );
}

/* ============================================================
   SHIELD
============================================================ */

function ShieldIcon() {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/10">
      <ShieldCheck
        size={17}
        className="text-[#DFAE45]"
      />
    </div>
  );
}

/* ============================================================
   SHIELD CHECK
============================================================ */

function ShieldCheck({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}