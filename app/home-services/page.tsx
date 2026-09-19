"use client";

import { useRouter } from "next/navigation";
import type { ElementType } from "react";

import PopularServices from "@/components/home-services/PopularServices";
import {
  useLanguage,
  type Language,
} from "@/context/LanguageContext";

import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bell,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Clock3,
  Droplets,
  Headphones,
  Home,
  MapPin,
  Paintbrush,
  Percent,
  Search,
  ShieldCheck,
  Sparkles,
  Sofa,
  UserRound,
  Wallet,
  WashingMachine,
  Wrench,
  Zap,
  Snowflake,
  Bug,
  Hammer,
  Settings,
  Star,
} from "lucide-react";

/* =========================================================
   SERVICE TYPE
========================================================= */

interface Service {
  id: string;

  title: string;
  titleHi: string;

  shortTitle: string;
  shortTitleHi: string;

  description: string;
  descriptionHi: string;

  icon: ElementType;
  image: string;
  link: string;
}

/* =========================================================
   SERVICES
========================================================= */

const services: Service[] = [
  {
    id: "ac-repair",
    title: "AC Service & Repair",
    titleHi: "एसी सर्विस एवं रिपेयर",
    shortTitle: "AC Repair",
    shortTitleHi: "एसी रिपेयर",
    description:
      "Cooling problems, servicing, installation & repair.",
    descriptionHi:
      "कूलिंग समस्या, सर्विसिंग, इंस्टॉलेशन एवं रिपेयर।",
    image: "/home-services/ac.jpg",
    icon: Snowflake,
    link: "/services/ac-repair/book",
  },

  {
    id: "cleaning",
    title: "Home Cleaning",
    titleHi: "होम क्लीनिंग",
    shortTitle: "Cleaning",
    shortTitleHi: "क्लीनिंग",
    description:
      "Professional cleaning for a fresh, hygienic home.",
    descriptionHi:
      "साफ-सुथरे और स्वच्छ घर के लिए प्रोफेशनल क्लीनिंग।",
    image: "/home-services/cleaning.jpg",
    icon: Sparkles,
    link: "/services/cleaning/book",
  },

  {
    id: "plumbing",
    title: "Plumbing Services",
    titleHi: "प्लंबिंग सर्विसेज",
    shortTitle: "Plumbing",
    shortTitleHi: "प्लंबिंग",
    description:
      "Leakage, taps, pipes, drainage & bathroom work.",
    descriptionHi:
      "लीकेज, नल, पाइप, ड्रेनेज एवं बाथरूम का काम।",
    image: "/home-services/plumbing.jpg",
    icon: Droplets,
    link: "/services/plumbing/book",
  },

  {
    id: "electrician",
    title: "Electrical Services",
    titleHi: "इलेक्ट्रिकल सर्विसेज",
    shortTitle: "Electrician",
    shortTitleHi: "इलेक्ट्रीशियन",
    description:
      "Fans, switches, wiring, lights & electrical repair.",
    descriptionHi:
      "पंखे, स्विच, वायरिंग, लाइट एवं इलेक्ट्रिकल रिपेयर।",
    image: "/home-services/electrician.jpg",
    icon: Zap,
    link: "/services/electrician/book",
  },

  {
    id: "appliance-repair",
    title: "Appliance Repair",
    titleHi: "अप्लायंस रिपेयर",
    shortTitle: "Appliances",
    shortTitleHi: "अप्लायंस",
    description:
      "Expert repair for everyday home appliances.",
    descriptionHi:
      "घरेलू उपकरणों की एक्सपर्ट रिपेयर सर्विस।",
    image: "/home-services/appliance.jpg",
    icon: WashingMachine,
    link: "/services/appliance-repair/book",
  },

  {
    id: "carpenter",
    title: "Carpentry Services",
    titleHi: "कारपेंटरी सर्विसेज",
    shortTitle: "Carpenter",
    shortTitleHi: "कारपेंटर",
    description:
      "Furniture repair, fitting, doors & custom work.",
    descriptionHi:
      "फर्नीचर रिपेयर, फिटिंग, दरवाजे एवं कस्टम वर्क।",
    image: "/home-services/carpentry.jpg",
    icon: Sofa,
    link: "/services/carpenter/book",
  },

  {
    id: "painting",
    title: "Painting Services",
    titleHi: "पेंटिंग सर्विसेज",
    shortTitle: "Painting",
    shortTitleHi: "पेंटिंग",
    description:
      "Interior & exterior painting by skilled experts.",
    descriptionHi:
      "कुशल एक्सपर्ट द्वारा इंटीरियर एवं एक्सटीरियर पेंटिंग।",
    image: "/home-services/painting.jpg",
    icon: Paintbrush,
    link: "/services/painting/book",
  },

  {
    id: "sanitization",
    title: "Home Sanitization",
    titleHi: "होम सैनिटाइजेशन",
    shortTitle: "Sanitization",
    shortTitleHi: "सैनिटाइजेशन",
    description:
      "Professional sanitization for safer spaces.",
    descriptionHi:
      "सुरक्षित वातावरण के लिए प्रोफेशनल सैनिटाइजेशन।",
    image: "/home-services/sanitization.jpg",
    icon: ShieldCheck,
    link: "/services/sanitization/book",
  },

  {
    id: "pest-control",
    title: "Pest Control",
    titleHi: "पेस्ट कंट्रोल",
    shortTitle: "Pest Control",
    shortTitleHi: "पेस्ट कंट्रोल",
    description:
      "Effective solutions for common household pests.",
    descriptionHi:
      "घरेलू कीड़ों और पेस्ट के लिए प्रभावी समाधान।",
    image: "/home-services/pest-control.jpg",
    icon: Bug,
    link: "/services/pest-control/book",
  },

  {
    id: "handyman",
    title: "Handyman Services",
    titleHi: "हैंडीमैन सर्विसेज",
    shortTitle: "Handyman",
    shortTitleHi: "हैंडीमैन",
    description:
      "Small repairs and maintenance around your home.",
    descriptionHi:
      "घर के छोटे रिपेयर एवं मेंटेनेंस के काम।",
    image: "/home-services/handyman.jpg",
    icon: Wrench,
    link: "/services/handyman/book",
  },

  {
    id: "furniture",
    title: "Furniture Services",
    titleHi: "फर्नीचर सर्विसेज",
    shortTitle: "Furniture",
    shortTitleHi: "फर्नीचर",
    description:
      "Assembly, repair, installation & maintenance.",
    descriptionHi:
      "फर्नीचर असेंबली, रिपेयर, इंस्टॉलेशन एवं मेंटेनेंस।",
    image: "/home-services/furniture.jpg",
    icon: Hammer,
    link: "/services/furniture/book",
  },

  {
    id: "appliance-installation",
    title: "Appliance Installation",
    titleHi: "अप्लायंस इंस्टॉलेशन",
    shortTitle: "Installation",
    shortTitleHi: "इंस्टॉलेशन",
    description:
      "Safe and professional appliance installation.",
    descriptionHi:
      "सुरक्षित और प्रोफेशनल अप्लायंस इंस्टॉलेशन।",
    image: "/home-services/installation.jpg",
    icon: Settings,
    link: "/services/appliance-installation/book",
  },
];

/* =========================================================
   TRUST
========================================================= */

const trustItems = [
  {
    icon: BadgeCheck,
    title: "Verified",
    titleHi: "सत्यापित",
    subtitle: "Professionals",
    subtitleHi: "प्रोफेशनल्स",
  },
  {
    icon: ShieldCheck,
    title: "Trusted",
    titleHi: "भरोसेमंद",
    subtitle: "Service",
    subtitleHi: "सर्विस",
  },
  {
    icon: Clock3,
    title: "On-time",
    titleHi: "समय पर",
    subtitle: "Service",
    subtitleHi: "सर्विस",
  },
  {
    icon: Headphones,
    title: "24×7",
    titleHi: "24×7",
    subtitle: "Support",
    subtitleHi: "सपोर्ट",
  },
];

/* =========================================================
   STEPS
========================================================= */

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Choose",
    titleHi: "चुनें",
    subtitle: "your service",
    subtitleHi: "अपनी सर्विस",
  },
  {
    icon: CalendarDays,
    number: "02",
    title: "Book",
    titleHi: "बुक करें",
    subtitle: "date & time",
    subtitleHi: "दिन और समय",
  },
  {
    icon: UserRound,
    number: "03",
    title: "Meet",
    titleHi: "मिलें",
    subtitle: "your expert",
    subtitleHi: "अपने एक्सपर्ट से",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Relax",
    titleHi: "निश्चिंत रहें",
    subtitle: "job completed",
    subtitleHi: "काम पूरा",
  },
];

/* =========================================================
   BENEFITS
========================================================= */

const benefits = [
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    titleHi: "सत्यापित प्रोफेशनल्स",
    description:
      "Connect with trusted service professionals selected for quality and reliability.",
    descriptionHi:
      "गुणवत्ता और भरोसे के लिए चुने गए विश्वसनीय सर्विस प्रोफेशनल्स से जुड़ें।",
  },
  {
    icon: Wallet,
    title: "Transparent Pricing",
    titleHi: "पारदर्शी कीमत",
    description:
      "Know what you are booking with simple and transparent service information.",
    descriptionHi:
      "सरल और पारदर्शी सर्विस जानकारी के साथ जानें कि आप क्या बुक कर रहे हैं।",
  },
  {
    icon: Clock3,
    title: "Convenient Booking",
    titleHi: "आसान बुकिंग",
    description:
      "Choose a service and request a convenient date and time in just a few taps.",
    descriptionHi:
      "कुछ ही टैप में सर्विस चुनें और अपनी सुविधानुसार तारीख एवं समय का अनुरोध करें।",
  },
  {
    icon: Headphones,
    title: "OurHub Support",
    titleHi: "OurHub सपोर्ट",
    description:
      "Need help? OurHub support is available to assist you throughout your service journey.",
    descriptionHi:
      "मदद चाहिए? आपकी पूरी सर्विस यात्रा के दौरान OurHub सपोर्ट आपकी सहायता के लिए उपलब्ध है।",
  },
];

/* =========================================================
   PAGE TRANSLATIONS
========================================================= */

const pageText = {
  en: {
    homeServices: "HOME SERVICES",
    servingIn: "Serving in",
    location: "Ujjain, Madhya Pradesh",
    searchPlaceholder:
      "What service do you need today?",
    trustedHomeServices: "TRUSTED HOME SERVICES",
    heroTitle1: "Your Home.",
    heroTitle2: "Our Experts.",
    heroDescription:
      "From quick repairs to complete home care — book trusted professionals in minutes.",
    exploreServices: "Explore Services",
    trustedService: "Trusted service",
    localProfessionals: "Local professionals",
    mostRequested: "Most requested",
    popularServices: "Popular Services",
    viewAll: "View all",
    explore: "Explore",
    allHomeServices: "All Home Services",
    services: "services",
    verified: "VERIFIED",
    welcomeOffer: "WELCOME OFFER",
    discount: "Get up to 20% OFF",
    firstService: "On your first home service.",
    book: "BOOK",
    whyOurHub: "Why OurHub",
    simpleService: "Service made simple.",
    simpleDescription:
      "Everything you need to get your home taken care of, without the hassle.",
    simpleProcess: "Simple process",
    howItWorks: "How It Works",
    currentlyServing: "Currently serving",
    coverageDescription:
      "Quality home services delivered by professionals across our service areas.",
    needHelp: "Need a hand at home?",
    finalDescription:
      "Choose a service and let OurHub take care of the rest.",
    bookService: "Book a Service",
    home: "Home",
    bookings: "Bookings",
    bookNow: "Book Now",
    wallet: "Wallet",
    profile: "Profile",
    goBack: "Go back",
    notifications: "Notifications",
  },

  hi: {
    homeServices: "होम सर्विसेज",
    servingIn: "सेवा उपलब्ध",
    location: "उज्जैन, मध्य प्रदेश",
    searchPlaceholder:
      "आज आपको कौन सी सर्विस चाहिए?",
    trustedHomeServices: "भरोसेमंद होम सर्विसेज",
    heroTitle1: "आपका घर।",
    heroTitle2: "हमारे एक्सपर्ट्स।",
    heroDescription:
      "छोटी रिपेयर से लेकर पूरे घर की देखभाल तक — कुछ ही मिनटों में भरोसेमंद प्रोफेशनल बुक करें।",
    exploreServices: "सर्विसेज देखें",
    trustedService: "भरोसेमंद सर्विस",
    localProfessionals: "स्थानीय प्रोफेशनल्स",
    mostRequested: "सबसे ज्यादा बुक की जाने वाली",
    popularServices: "लोकप्रिय सर्विसेज",
    viewAll: "सभी देखें",
    explore: "एक्सप्लोर करें",
    allHomeServices: "सभी होम सर्विसेज",
    services: "सर्विसेज",
    verified: "सत्यापित",
    welcomeOffer: "वेलकम ऑफर",
    discount: "20% तक की छूट पाएं",
    firstService: "पहली होम सर्विस पर।",
    book: "बुक करें",
    whyOurHub: "OurHub क्यों?",
    simpleService: "सर्विस अब आसान है।",
    simpleDescription:
      "बिना किसी परेशानी के अपने घर की देखभाल के लिए जरूरी हर सर्विस यहां पाएं।",
    simpleProcess: "आसान प्रक्रिया",
    howItWorks: "यह कैसे काम करता है",
    currentlyServing: "वर्तमान में सेवा उपलब्ध",
    coverageDescription:
      "हमारे सर्विस क्षेत्रों में प्रोफेशनल्स द्वारा गुणवत्तापूर्ण होम सर्विस उपलब्ध कराई जाती है।",
    needHelp: "घर पर मदद चाहिए?",
    finalDescription:
      "एक सर्विस चुनें और बाकी काम OurHub पर छोड़ दें।",
    bookService: "सर्विस बुक करें",
    home: "होम",
    bookings: "बुकिंग्स",
    bookNow: "अभी बुक करें",
    wallet: "वॉलेट",
    profile: "प्रोफाइल",
    goBack: "वापस जाएं",
    notifications: "सूचनाएं",
  },
} as const;

/* =========================================================
   CITY LIST
========================================================= */

const cities = {
  en: ["Ujjain", "Ratlam", "Indore"],
  hi: ["उज्जैन", "रतलाम", "इंदौर"],
} as const;

/* =========================================================
   PAGE
========================================================= */

export default function HomeServicesPage() {
  const router = useRouter();

  const { language } = useLanguage();

  const t = pageText[language];

  /* =======================================================
     HANDLERS
  ======================================================= */

  const handleServiceSelect = (
    serviceId: string
  ) => {
    if (!serviceId) return;

    /*
      Language does not affect URL.

      English:
      /services/ac-repair/book

      Hindi:
      /services/ac-repair/book
    */

    router.push(`/services/${serviceId}/book`);
  };

  const handleBookService = () => {
    router.push("/services");
  };

  const handleSearch = () => {
    router.push("/services");
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="min-h-screen bg-[#020407] text-white">
      <div className="mx-auto min-h-screen w-full max-w-[480px] overflow-hidden bg-[#020407]">

        {/* =================================================
            TOP GLOW
        ================================================= */}

        <div
          className="
            pointer-events-none
            fixed
            left-1/2
            top-[-180px]
            z-0
            h-[360px]
            w-[360px]
            -translate-x-1/2
            rounded-full
            bg-[#DFAE45]/[0.055]
            blur-[100px]
          "
        />

        {/* =================================================
            HEADER
        ================================================= */}

        <header className="relative z-10 px-5 pb-1 pt-5">

          <div className="flex items-center justify-between">

            {/* BACK */}

            <button
              type="button"
              aria-label={t.goBack}
              onClick={() => router.back()}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.035]
                transition
                active:scale-90
              "
            >
              <ArrowLeft
                size={21}
                strokeWidth={1.7}
              />
            </button>

            {/* LOGO */}

            <div className="flex flex-col items-center">

              <div
                className="
                  text-[28px]
                  font-black
                  leading-none
                  tracking-[-2px]
                "
              >
                <span className="text-white">
                  OUR
                </span>

                <span className="text-[#DFAE45]">
                  HUB
                </span>
              </div>

              <div className="mt-1 flex items-center gap-1.5">

                <span className="h-[3px] w-[3px] rounded-full bg-[#DFAE45]" />

                <span
                  className="
                    text-[8px]
                    font-bold
                    tracking-[3px]
                    text-white/35
                  "
                >
                  {t.homeServices}
                </span>

                <span className="h-[3px] w-[3px] rounded-full bg-[#DFAE45]" />

              </div>

            </div>

            {/* NOTIFICATION */}

            <button
              type="button"
              aria-label={t.notifications}
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.035]
                transition
                active:scale-90
              "
            >
              <Bell
                size={21}
                strokeWidth={1.7}
              />

              <span
                className="
                  absolute
                  right-[9px]
                  top-[8px]
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#DFAE45]
                "
              />
            </button>

          </div>

          {/* LOCATION */}

          <button
            type="button"
            className="mt-7 flex items-center gap-2.5 text-left"
          >

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-[14px]
                border
                border-[#DFAE45]/20
                bg-[#DFAE45]/[0.06]
              "
            >
              <MapPin
                size={18}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <div>

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[1.6px]
                  text-white/30
                "
              >
                {t.servingIn}
              </p>

              <div className="mt-0.5 flex items-center gap-1">

                <span className="text-[15px] font-semibold">
                  {t.location}
                </span>

                <ChevronDown
                  size={14}
                  className="text-white/40"
                />

              </div>

            </div>

          </button>

          {/* SEARCH */}

          <button
            type="button"
            onClick={handleSearch}
            className="
              group
              mt-5
              flex
              h-[60px]
              w-full
              items-center
              rounded-[20px]
              border
              border-white/[0.08]
              bg-[#0A0D11]
              px-3.5
              text-left
              transition
              active:scale-[0.985]
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-[14px]
                border
                border-[#DFAE45]/10
                bg-[#DFAE45]/[0.07]
              "
            >
              <Search
                size={20}
                strokeWidth={1.8}
                className="text-[#DFAE45]"
              />
            </div>

            <span className="ml-3 text-[13px] text-white/35">
              {t.searchPlaceholder}
            </span>

            <div
              className="
                ml-auto
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-xl
                bg-white/[0.035]
              "
            >
              <ChevronRight
                size={16}
                className="text-white/30"
              />
            </div>

          </button>

        </header>

        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative z-10 px-5 pt-5">

          <div
            className="
              relative
              h-[350px]
              overflow-hidden
              rounded-[28px]
              border
              border-[#DFAE45]/20
              bg-[#080A0D]
              shadow-[0_25px_80px_rgba(0,0,0,0.42)]
            "
          >

            <div
              className="
                absolute
                -right-20
                -top-24
                h-[290px]
                w-[290px]
                rounded-full
                bg-[#DFAE45]/[0.13]
                blur-[85px]
              "
            />

            <div
              className="
                absolute
                -bottom-28
                -left-24
                h-[230px]
                w-[230px]
                rounded-full
                bg-[#DFAE45]/[0.055]
                blur-[75px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-[-18px]
                z-[5]
                h-[310px]
                w-[235px]
              "
            >
              <img
                src="/home-services/hero-expert.png"
                alt="OurHub Home Service Expert"
                className="
                  h-full
                  w-full
                  object-contain
                  object-bottom
                "
              />
            </div>

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-10
                w-[78%]
                bg-gradient-to-r
                from-[#080A0D]
                via-[#080A0D]/95
                to-transparent
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
                bg-gradient-to-b
                from-transparent
                via-transparent
                to-[#020407]/90
              "
            />

            <div className="relative z-20 h-full p-6">

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#DFAE45]/20
                  bg-[#DFAE45]/[0.06]
                  px-3
                  py-1.5
                "
              >
                <Sparkles
                  size={12}
                  className="text-[#DFAE45]"
                />

                <span
                  className="
                    text-[8px]
                    font-extrabold
                    tracking-[1.5px]
                    text-[#DFAE45]
                  "
                >
                  {t.trustedHomeServices}
                </span>
              </div>

              <h1
                className="
                  mt-5
                  max-w-[215px]
                  text-[31px]
                  font-black
                  leading-[1.04]
                  tracking-[-1.5px]
                "
              >
                {t.heroTitle1}
                <br />

                <span className="text-[#DFAE45]">
                  {t.heroTitle2}
                </span>
              </h1>

              <p
                className="
                  mt-4
                  max-w-[200px]
                  text-[12px]
                  leading-[1.6]
                  text-white/50
                "
              >
                {t.heroDescription}
              </p>

              <button
                type="button"
                onClick={handleBookService}
                className="
                  mt-5
                  flex
                  h-[48px]
                  items-center
                  gap-2
                  rounded-[15px]
                  bg-[#E7B94F]
                  px-5
                  text-[12px]
                  font-black
                  text-black
                  transition
                  active:scale-95
                "
              >
                {t.exploreServices}
                <ArrowRight size={16} />
              </button>

              <div
                className="
                  absolute
                  bottom-5
                  left-6
                  flex
                  items-center
                  gap-2
                "
              >

                <div className="flex -space-x-2">

                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-[#080A0D]
                        bg-white/[0.12]
                      "
                    >
                      <UserRound
                        size={11}
                        className="text-white/55"
                      />
                    </div>
                  ))}

                </div>

                <div>

                  <div className="flex items-center gap-1">

                    <Star
                      size={10}
                      fill="#DFAE45"
                      className="text-[#DFAE45]"
                    />

                    <span className="text-[9px] font-bold">
                      {t.trustedService}
                    </span>

                  </div>

                  <p className="text-[8px] text-white/30">
                    {t.localProfessionals}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            TRUST
        ================================================= */}

        <section className="relative z-10 px-5 pt-5">

          <div
            className="
              grid
              grid-cols-4
              rounded-[22px]
              border
              border-white/[0.07]
              bg-[#090C10]
              px-1
              py-5
            "
          >

            {trustItems.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    flex
                    flex-col
                    items-center
                    text-center
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-[13px]
                      border
                      border-[#DFAE45]/15
                      bg-[#DFAE45]/[0.045]
                    "
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.7}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <p
                    className="
                      mt-2.5
                      text-[9px]
                      font-bold
                      leading-4
                      text-white/75
                    "
                  >
                    {language === "hi"
                      ? item.titleHi
                      : item.title}

                    <br />

                    <span className="font-medium text-white/35">
                      {language === "hi"
                        ? item.subtitleHi
                        : item.subtitle}
                    </span>
                  </p>

                </div>
              );
            })}

          </div>

        </section>

        {/* =================================================
            POPULAR SERVICES
        ================================================= */}

        <section className="relative z-10 pt-9">

          <PopularServices
  onSelectService={handleServiceSelect}
/>

        </section>

        {/* =================================================
            ALL SERVICES
        ================================================= */}

        <section className="relative z-10 px-5 pt-9">

          <div className="flex items-end justify-between">

            <div>

              <p
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[2px]
                  text-[#DFAE45]
                "
              >
                {t.explore}
              </p>

              <h2
                className="
                  mt-1
                  text-[23px]
                  font-black
                  tracking-[-0.7px]
                "
              >
                {t.allHomeServices}
              </h2>

            </div>

            <span
              className="
                rounded-full
                border
                border-white/[0.07]
                bg-white/[0.025]
                px-2.5
                py-1
                text-[9px]
                font-semibold
                text-white/35
              "
            >
              {services.length} {t.services}
            </span>

          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">

            {services.map((service) => {

              const Icon = service.icon;

              const title =
                language === "hi"
                  ? service.titleHi
                  : service.title;

              const shortTitle =
                language === "hi"
                  ? service.shortTitleHi
                  : service.shortTitle;

              const description =
                language === "hi"
                  ? service.descriptionHi
                  : service.description;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() =>
                    handleServiceSelect(
                      service.id
                    )
                  }
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[21px]
                    border
                    border-white/[0.075]
                    bg-[#090C10]
                    text-left
                    transition
                    active:scale-[0.975]
                  "
                >

                  <div
                    className="
                      relative
                      h-[124px]
                      overflow-hidden
                    "
                  >

                    <img
                      src={service.image}
                      alt={title}
                      className="
                        h-full
                        w-full
                        object-cover
                        opacity-75
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-[#090C10]
                        via-transparent
                        to-black/15
                      "
                    />

                    <div
                      className="
                        absolute
                        left-3
                        top-3
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-[11px]
                        border
                        border-white/[0.12]
                        bg-black/45
                        backdrop-blur-md
                      "
                    >
                      <Icon
                        size={15}
                        className="text-[#E7B94F]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div
                      className="
                        absolute
                        right-2.5
                        top-2.5
                        flex
                        items-center
                        gap-1
                        rounded-full
                        border
                        border-white/[0.1]
                        bg-black/40
                        px-2
                        py-1
                        backdrop-blur-md
                      "
                    >
                      <BadgeCheck
                        size={10}
                        className="text-[#DFAE45]"
                      />

                      <span className="text-[7px] font-bold text-white/60">
                        {t.verified}
                      </span>
                    </div>

                  </div>

                  <div className="px-3.5 pb-3.5 pt-2.5">

                    <div className="flex items-center justify-between gap-2">

                      <h3
                        className="
                          text-[13px]
                          font-extrabold
                          leading-5
                        "
                      >
                        {shortTitle}
                      </h3>

                      <div
                        className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-[#DFAE45]/[0.07]
                        "
                      >
                        <ChevronRight
                          size={12}
                          className="text-[#DFAE45]"
                        />
                      </div>

                    </div>

                    <p
                      className="
                        mt-1
                        line-clamp-2
                        text-[9px]
                        leading-4
                        text-white/35
                      "
                    >
                      {description}
                    </p>

                  </div>

                </button>
              );
            })}

          </div>

        </section>

        {/* =================================================
            OFFER
        ================================================= */}

        <section className="relative z-10 px-5 pt-8">

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#DFAE45]/20
              bg-gradient-to-br
              from-[#171209]
              via-[#100E09]
              to-[#090C10]
              p-5
            "
          >

            <div
              className="
                absolute
                -right-16
                -top-20
                h-[180px]
                w-[180px]
                rounded-full
                bg-[#DFAE45]/10
                blur-[55px]
              "
            />

            <div className="relative z-10 flex items-center gap-3.5">

              <div
                className="
                  flex
                  h-[56px]
                  w-[56px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[17px]
                  bg-[#E7B94F]
                "
              >
                <Percent
                  size={25}
                  strokeWidth={2.3}
                  className="text-black"
                />
              </div>

              <div className="min-w-0">

                <p
                  className="
                    text-[8px]
                    font-extrabold
                    tracking-[1.8px]
                    text-[#DFAE45]
                  "
                >
                  {t.welcomeOffer}
                </p>

                <h3
                  className="
                    mt-1
                    text-[17px]
                    font-black
                  "
                >
                  {t.discount}
                </h3>

                <p className="mt-1 text-[9px] text-white/40">
                  {t.firstService}
                </p>

              </div>

              <button
                type="button"
                onClick={handleBookService}
                className="
                  ml-auto
                  shrink-0
                  rounded-[12px]
                  bg-[#E7B94F]
                  px-3.5
                  py-3
                  text-[9px]
                  font-black
                  text-black
                  transition
                  active:scale-95
                "
              >
                {t.book}
              </button>

            </div>

          </div>

        </section>

        {/* =================================================
            WHY OURHUB
        ================================================= */}

        <section className="relative z-10 px-5 pt-10">

          <p
            className="
              text-[9px]
              font-extrabold
              uppercase
              tracking-[2px]
              text-[#DFAE45]
            "
          >
            {t.whyOurHub}
          </p>

          <h2
            className="
              mt-1
              text-[23px]
              font-black
              tracking-[-0.7px]
            "
          >
            {t.simpleService}
          </h2>

          <p
            className="
              mt-2
              max-w-[330px]
              text-[11px]
              leading-5
              text-white/35
            "
          >
            {t.simpleDescription}
          </p>

          <div className="mt-5 space-y-3">

            {benefits.map((benefit) => {

              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="
                    flex
                    gap-3.5
                    rounded-[20px]
                    border
                    border-white/[0.065]
                    bg-[#090C10]
                    p-4
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-[14px]
                      border
                      border-[#DFAE45]/15
                      bg-[#DFAE45]/[0.05]
                    "
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.7}
                      className="text-[#DFAE45]"
                    />
                  </div>

                  <div className="min-w-0">

                    <h3 className="text-[12px] font-extrabold">
                      {language === "hi"
                        ? benefit.titleHi
                        : benefit.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        leading-[1.6]
                        text-white/35
                      "
                    >
                      {language === "hi"
                        ? benefit.descriptionHi
                        : benefit.description}
                    </p>

                  </div>

                  <Check
                    size={14}
                    className="
                      ml-auto
                      mt-1
                      shrink-0
                      text-[#DFAE45]/55
                    "
                  />

                </div>
              );
            })}

          </div>

        </section>

        {/* =================================================
            HOW IT WORKS
        ================================================= */}

        <section className="relative z-10 px-5 pt-10">

          <div className="flex items-end justify-between">

            <div>

              <p
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[2px]
                  text-[#DFAE45]
                "
              >
                {t.simpleProcess}
              </p>

              <h2
                className="
                  mt-1
                  text-[23px]
                  font-black
                  tracking-[-0.7px]
                "
              >
                {t.howItWorks}
              </h2>

            </div>

            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#DFAE45]/15
                bg-[#DFAE45]/[0.05]
              "
            >
              <ArrowRight
                size={14}
                className="text-[#DFAE45]"
              />
            </div>

          </div>

          <div className="mt-6 grid grid-cols-4 gap-1">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative text-center"
                >

                  <div
                    className="
                      relative
                      mx-auto
                      flex
                      h-[58px]
                      w-[58px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#DFAE45]/20
                      bg-[#090C10]
                    "
                  >

                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="text-[#E7B94F]"
                    />

                    <span
                      className="
                        absolute
                        -right-1
                        -top-1
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        bg-[#E7B94F]
                        text-[8px]
                        font-black
                        text-black
                      "
                    >
                      {index + 1}
                    </span>

                  </div>

                  <h3
                    className="
                      mt-3
                      text-[10px]
                      font-extrabold
                    "
                  >
                    {language === "hi"
                      ? step.titleHi
                      : step.title}
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-[8px]
                      leading-4
                      text-white/30
                    "
                  >
                    {language === "hi"
                      ? step.subtitleHi
                      : step.subtitle}
                  </p>

                  {index !== steps.length - 1 && (
                    <div
                      className="
                        absolute
                        left-[calc(100%_-_3px)]
                        top-[29px]
                        w-[18px]
                        border-t
                        border-dashed
                        border-white/[0.1]
                      "
                    />
                  )}

                </div>
              );
            })}

          </div>

        </section>

        {/* =================================================
            COVERAGE
        ================================================= */}

        <section className="relative z-10 px-5 pt-10">

          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-white/[0.07]
              bg-[#090C10]
              p-5
            "
          >

            <div className="relative z-10">

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-[13px]
                    border
                    border-[#DFAE45]/15
                    bg-[#DFAE45]/[0.06]
                  "
                >
                  <MapPin
                    size={18}
                    className="text-[#DFAE45]"
                  />
                </div>

                <div>

                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[1.6px]
                      text-white/25
                    "
                  >
                    {t.currentlyServing}
                  </p>

                  <h3 className="mt-0.5 text-[14px] font-extrabold">
                    {language === "hi"
                      ? "उज्जैन • रतलाम • इंदौर"
                      : "Ujjain • Ratlam • Indore"}
                  </h3>

                </div>

              </div>

              <p
                className="
                  mt-4
                  text-[10px]
                  leading-5
                  text-white/35
                "
              >
                {t.coverageDescription}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                {cities[language].map((city) => (
                  <span
                    key={city}
                    className="
                      rounded-full
                      border
                      border-white/[0.07]
                      bg-white/[0.025]
                      px-3
                      py-1.5
                      text-[8px]
                      font-bold
                      text-white/50
                    "
                  >
                    {city}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="relative z-10 px-5 pb-[150px] pt-10">

          <div
            className="
              relative
              overflow-hidden
              rounded-[27px]
              border
              border-[#DFAE45]/20
              bg-gradient-to-br
              from-[#171209]
              to-[#0B0D10]
              px-5
              py-8
              text-center
            "
          >

            <div
              className="
                absolute
                left-1/2
                top-[-100px]
                h-[210px]
                w-[210px]
                -translate-x-1/2
                rounded-full
                bg-[#DFAE45]/10
                blur-[65px]
              "
            />

            <div className="relative z-10">

              <div
                className="
                  mx-auto
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-[16px]
                  bg-[#E7B94F]
                "
              >
                <Home
                  size={21}
                  className="text-black"
                  strokeWidth={1.8}
                />
              </div>

              <h2
                className="
                  mt-4
                  text-[22px]
                  font-black
                  tracking-[-0.6px]
                "
              >
                {t.needHelp}
              </h2>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-[270px]
                  text-[10px]
                  leading-5
                  text-white/35
                "
              >
                {t.finalDescription}
              </p>

              <button
                type="button"
                onClick={handleBookService}
                className="
                  mt-5
                  inline-flex
                  h-[49px]
                  items-center
                  gap-2
                  rounded-[15px]
                  bg-[#E7B94F]
                  px-6
                  text-[11px]
                  font-black
                  text-black
                  transition
                  active:scale-95
                "
              >
                {t.bookService}
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </section>

        {/* =================================================
            BOTTOM NAV
        ================================================= */}

        <nav
          className="
            fixed
            bottom-0
            left-1/2
            z-50
            h-[86px]
            w-full
            max-w-[480px]
            -translate-x-1/2
            border-t
            border-white/[0.07]
            bg-[#07090C]/95
            px-3
            backdrop-blur-2xl
          "
        >

          <div className="grid h-full grid-cols-5">

            {/* HOME */}

            <button
              type="button"
              onClick={() =>
                router.push("/services")
              }
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-1
              "
            >
              <Home
                size={21}
                strokeWidth={1.8}
                className="text-[#E7B94F]"
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  text-[#E7B94F]
                "
              >
                {t.home}
              </span>
            </button>

            {/* BOOKINGS */}

            <button
              type="button"
              onClick={() =>
                router.push("/bookings")
              }
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-1
              "
            >
              <ClipboardList
                size={21}
                strokeWidth={1.7}
                className="text-white/35"
              />

              <span className="text-[8px] text-white/35">
                {t.bookings}
              </span>
            </button>

            {/* CENTER BOOK NOW */}

            <button
              type="button"
              onClick={handleBookService}
              className="
                relative
                flex
                flex-col
                items-center
                justify-end
                pb-3
              "
            >

              <div
                className="
                  absolute
                  -top-8
                  flex
                  h-[62px]
                  w-[62px]
                  items-center
                  justify-center
                  rounded-full
                  border-[5px]
                  border-[#07090C]
                  bg-[#DFAE45]
                "
              >
                <CalendarDays
                  size={24}
                  strokeWidth={1.8}
                  className="text-black"
                />
              </div>

              <span
                className="
                  text-[8px]
                  font-bold
                  text-white
                "
              >
                {t.bookNow}
              </span>

            </button>

            {/* WALLET */}

            <button
              type="button"
              onClick={() =>
                router.push("/services/wallet")
              }
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-1
              "
            >
              <Wallet
                size={21}
                strokeWidth={1.7}
                className="text-white/35"
              />

              <span className="text-[8px] text-white/35">
                {t.wallet}
              </span>
            </button>

            {/* PROFILE */}

            <button
              type="button"
              onClick={() =>
                router.push("/profile")
              }
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-1
              "
            >
              <UserRound
                size={21}
                strokeWidth={1.7}
                className="text-white/35"
              />

              <span className="text-[8px] text-white/35">
                {t.profile}
              </span>
            </button>

          </div>

        </nav>

      </div>
    </main>
  );
}