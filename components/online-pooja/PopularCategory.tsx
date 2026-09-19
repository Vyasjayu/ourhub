"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
ArrowRight,
ChevronRight,
Search,
Sparkles,
X,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/* =========================================================
CATEGORIES
========================================================= */

const categories = [
{
id: 1,
title: {
en: "Popular",
hi: "लोकप्रिय",
},
icon: "🙏",
slug: "popular",
},
{
id: 2,
title: {
en: "Shiv Pooja",
hi: "शिव पूजा",
},
icon: "🔱",
slug: "shiv-pooja",
},
{
id: 3,
title: {
en: "Lakshmi",
hi: "लक्ष्मी पूजा",
},
icon: "🪔",
slug: "lakshmi-pooja",
},
{
id: 4,
title: {
en: "Dosh Nivaran",
hi: "दोष निवारण",
},
icon: "✨",
slug: "dosh-nivaran",
},
{
id: 5,
title: {
en: "Griha Pravesh",
hi: "गृह प्रवेश",
},
icon: "🏠",
slug: "griha-pravesh",
},
{
id: 6,
title: {
en: "Business",
hi: "व्यवसाय",
},
icon: "💼",
slug: "business-pooja",
},
];

/* =========================================================
ALL ONLINE POOJA
========================================================= */

const allPoojas = [
{
id: 1,
name: {
en: "Ganesh Pooja",
hi: "गणेश पूजा",
},
icon: "🙏",
},
{
id: 2,
name: {
en: "Lakshmi Pooja",
hi: "लक्ष्मी पूजा",
},
icon: "🪔",
},
{
id: 3,
name: {
en: "Saraswati Pooja",
hi: "सरस्वती पूजा",
},
icon: "📚",
},
{
id: 4,
name: {
en: "Durga Pooja",
hi: "दुर्गा पूजा",
},
icon: "🌺",
},
{
id: 5,
name: {
en: "Kali Pooja",
hi: "काली पूजा",
},
icon: "🌹",
},
{
id: 6,
name: {
en: "Shiv Pooja",
hi: "शिव पूजा",
},
icon: "🔱",
},
{
id: 7,
name: {
en: "Hanuman Pooja",
hi: "हनुमान पूजा",
},
icon: "🚩",
},
{
id: 8,
name: {
en: "Ram Darbar Pooja",
hi: "राम दरबार पूजा",
},
icon: "🏹",
},
{
id: 9,
name: {
en: "Krishna Pooja",
hi: "कृष्ण पूजा",
},
icon: "🦚",
},
{
id: 10,
name: {
en: "Satyanarayan Katha",
hi: "सत्यनारायण कथा",
},
icon: "🙏",
},
{
id: 11,
name: {
en: "Rudrabhishek",
hi: "रुद्राभिषेक",
},
icon: "🔱",
},
{
id: 12,
name: {
en: "Mahamrityunjaya Jaap",
hi: "महामृत्युंजय जाप",
},
icon: "🕉️",
},
{
id: 13,
name: {
en: "Navgraha Pooja",
hi: "नवग्रह पूजा",
},
icon: "✨",
},
{
id: 14,
name: {
en: "Vastu Pooja",
hi: "वास्तु पूजा",
},
icon: "🏡",
},
{
id: 15,
name: {
en: "Griha Pravesh",
hi: "गृह प्रवेश",
},
icon: "🏠",
},
{
id: 16,
name: {
en: "Bhoomi Poojan",
hi: "भूमि पूजन",
},
icon: "🌿",
},
{
id: 17,
name: {
en: "Vivah Pooja",
hi: "विवाह पूजा",
},
icon: "💍",
},
{
id: 18,
name: {
en: "Engagement Pooja",
hi: "सगाई पूजा",
},
icon: "💑",
},
{
id: 19,
name: {
en: "Namkaran Sanskar",
hi: "नामकरण संस्कार",
},
icon: "👶",
},
{
id: 20,
name: {
en: "Mundan Sanskar",
hi: "मुंडन संस्कार",
},
icon: "🪔",
},
{
id: 21,
name: {
en: "Annaprashan",
hi: "अन्नप्राशन",
},
icon: "🍚",
},
{
id: 22,
name: {
en: "Janeu Sanskar",
hi: "जनेऊ संस्कार",
},
icon: "🕉️",
},
{
id: 23,
name: {
en: "Pitru Dosh Nivaran",
hi: "पितृ दोष निवारण",
},
icon: "🙏",
},
{
id: 24,
name: {
en: "Kaal Sarp Dosh",
hi: "काल सर्प दोष",
},
icon: "🐍",
},
{
id: 25,
name: {
en: "Manglik Dosh Pooja",
hi: "मांगलिक दोष पूजा",
},
icon: "🔴",
},
{
id: 26,
name: {
en: "Shani Shanti",
hi: "शनि शांति",
},
icon: "🪐",
},
{
id: 27,
name: {
en: "Rahu Ketu Shanti",
hi: "राहु केतु शांति",
},
icon: "☄️",
},
{
id: 28,
name: {
en: "Chandi Path",
hi: "चंडी पाठ",
},
icon: "🕉️",
},
{
id: 29,
name: {
en: "Durga Saptashati",
hi: "दुर्गा सप्तशती",
},
icon: "🌺",
},
{
id: 30,
name: {
en: "Lakshmi Kuber Pooja",
hi: "लक्ष्मी कुबेर पूजा",
},
icon: "💰",
},
{
id: 31,
name: {
en: "Dhanteras Pooja",
hi: "धनतेरस पूजा",
},
icon: "🪔",
},
{
id: 32,
name: {
en: "Diwali Lakshmi Pooja",
hi: "दिवाली लक्ष्मी पूजा",
},
icon: "🪔",
},
{
id: 33,
name: {
en: "Ganesh Visarjan Pooja",
hi: "गणेश विसर्जन पूजा",
},
icon: "🙏",
},
{
id: 34,
name: {
en: "Karwa Chauth Pooja",
hi: "करवा चौथ पूजा",
},
icon: "🌙",
},
{
id: 35,
name: {
en: "Raksha Bandhan Pooja",
hi: "रक्षा बंधन पूजा",
},
icon: "🪢",
},
{
id: 36,
name: {
en: "Navratri Pooja",
hi: "नवरात्रि पूजा",
},
icon: "🌺",
},
{
id: 37,
name: {
en: "Chhath Pooja",
hi: "छठ पूजा",
},
icon: "🌅",
},
{
id: 38,
name: {
en: "Makar Sankranti Pooja",
hi: "मकर संक्रांति पूजा",
},
icon: "☀️",
},
{
id: 39,
name: {
en: "Akshaya Tritiya Pooja",
hi: "अक्षय तृतीया पूजा",
},
icon: "✨",
},
{
id: 40,
name: {
en: "Janmashtami Pooja",
hi: "जन्माष्टमी पूजा",
},
icon: "🦚",
},
{
id: 41,
name: {
en: "Ram Navami Pooja",
hi: "राम नवमी पूजा",
},
icon: "🏹",
},
{
id: 42,
name: {
en: "Mahashivratri Pooja",
hi: "महाशिवरात्रि पूजा",
},
icon: "🔱",
},
{
id: 43,
name: {
en: "Hanuman Jayanti Pooja",
hi: "हनुमान जयंती पूजा",
},
icon: "🚩",
},
{
id: 44,
name: {
en: "Ganesh Chaturthi Pooja",
hi: "गणेश चतुर्थी पूजा",
},
icon: "🙏",
},
{
id: 45,
name: {
en: "Saraswati Puja",
hi: "सरस्वती पूजा",
},
icon: "📚",
},
{
id: 46,
name: {
en: "Business Success Pooja",
hi: "व्यवसाय सफलता पूजा",
},
icon: "💼",
},
{
id: 47,
name: {
en: "Career Growth Pooja",
hi: "करियर वृद्धि पूजा",
},
icon: "📈",
},
{
id: 48,
name: {
en: "Health & Wellness Pooja",
hi: "स्वास्थ्य एवं कल्याण पूजा",
},
icon: "🌿",
},
{
id: 49,
name: {
en: "Marriage Blessing Pooja",
hi: "विवाह आशीर्वाद पूजा",
},
icon: "💍",
},
{
id: 50,
name: {
en: "Family Peace Pooja",
hi: "परिवार शांति पूजा",
},
icon: "🕉️",
},
];

/* =========================================================
SLUG GENERATOR
========================================================= */

function createPoojaSlug(name: string) {
return name
.toLowerCase()
.trim()
.replace(/&/g, "and")
.replace(/[^a-z0-9]+/g, "-")
.replace(/^-+|-+$/g, "");
}

/* =========================================================
COMPONENT
========================================================= */

export default function PopularCategory() {
const { language } = useLanguage();
const isHindi = language === "hi";

const [showAll, setShowAll] = useState(false);
const [search, setSearch] = useState("");

const text = {
sacredCollection: isHindi
? "पवित्र संग्रह"
: "Sacred Collection",


poojaCategories: isHindi
  ? "पूजा की श्रेणियां"
  : "Pooja Categories",

purposeDescription: isHindi
  ? "अपने आध्यात्मिक उद्देश्य के लिए पूजा चुनें"
  : "Choose a ritual for your divine purpose",

viewAll: isHindi
  ? "सभी देखें"
  : "View All",

availablePoojas: isHindi
  ? "50+ पवित्र पूजाएं उपलब्ध"
  : "50+ sacred poojas available",

exploreAll: isHindi
  ? "सभी पूजा देखें"
  : "Explore All Poojas",

ritualsAvailable: isHindi
  ? `${allPoojas.length} पूजा ऑनलाइन बुकिंग के लिए उपलब्ध`
  : `${allPoojas.length} rituals available for online booking`,

searchPlaceholder: isHindi
  ? "गणेश, शिव, लक्ष्मी आदि खोजें..."
  : "Search Ganesh, Shiv, Lakshmi...",

browseAllRituals: isHindi
  ? "सभी पवित्र अनुष्ठान देखें"
  : "Browse all sacred rituals",

poojaFound: isHindi
  ? "पूजा मिली"
  : "pooja found",

clear: isHindi
  ? "साफ़ करें"
  : "Clear",

closeAllPooja: isHindi
  ? "सभी पूजा बंद करें"
  : "Close All Pooja",

close: isHindi
  ? "बंद करें"
  : "Close",

noPoojaFound: isHindi
  ? "कोई पूजा नहीं मिली"
  : "No Pooja Found",

tryAnother: isHindi
  ? "किसी अन्य पूजा का नाम खोजकर देखें"
  : "Try searching with another pooja name",

browseAll: isHindi
  ? "सभी देखें"
  : "Browse All",


};

/* =======================================================
SEARCH FILTER
======================================================= */

const filteredPoojas = useMemo(() => {
const query = search.trim().toLowerCase();


if (!query) {
  return allPoojas;
}

return allPoojas.filter((pooja) => {
  const englishName = pooja.name.en.toLowerCase();
  const hindiName = pooja.name.hi.toLowerCase();

  return (
    englishName.includes(query) ||
    hindiName.includes(query)
  );
});


}, [search]);

/* =======================================================
OPEN
======================================================= */

const openAllPooja = () => {
setSearch("");
setShowAll(true);
};

/* =======================================================
CLOSE
======================================================= */

const closeAllPooja = () => {
setShowAll(false);
setSearch("");
};

return (
<>
{/* =====================================================
PREMIUM CATEGORY SECTION
===================================================== */}


  <section className="relative mt-6">
    {/* Ambient Glow */}
    <div className="pointer-events-none absolute -left-12 top-10 h-32 w-32 rounded-full bg-[#DFAE45]/[0.06] blur-[55px]" />

    <div
      className="
        relative
        overflow-hidden
        rounded-[26px]
        border
        border-white/[0.07]
        bg-gradient-to-br
        from-[#0D1928]
        via-[#0A1523]
        to-[#08111D]
        p-3.5
        shadow-[0_18px_45px_rgba(0,0,0,0.22)]
      "
    >
      {/* Top Accent */}
      <div className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent" />

      {/* =================================================
          HEADER
      ================================================== */}

      <div className="flex items-center justify-between">
        <div>
          <div className="mb-1 flex items-center gap-1.5">
            <Sparkles
              size={11}
              className="text-[#DFAE45]"
            />

            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]/75">
              {text.sacredCollection}
            </span>
          </div>

          <h2 className="text-[18px] font-bold tracking-[-0.02em] text-white">
            {text.poojaCategories}
          </h2>

          <p className="mt-0.5 text-[9px] text-white/35">
            {text.purposeDescription}
          </p>
        </div>

        {/* View All */}
        <button
          type="button"
          onClick={openAllPooja}
          className="
            group
            flex
            items-center
            gap-1.5
            rounded-full
            border
            border-[#DFAE45]/20
            bg-[#DFAE45]/[0.06]
            px-3
            py-2
            text-[10px]
            font-bold
            text-[#E7B94F]
            transition-all
            duration-300
            hover:border-[#DFAE45]/35
            hover:bg-[#DFAE45]/10
            active:scale-95
          "
        >
          <span>{text.viewAll}</span>

          <ArrowRight
            size={12}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>

      {/* =================================================
          CATEGORY GRID
      ================================================== */}

      <div className="mt-4 grid grid-cols-3 gap-2">
        {categories.map((item, index) => (
          <Link
            key={item.id}
            href={`/pooja/online/${item.slug}`}
            className="
              group
              relative
              overflow-hidden
              rounded-[17px]
              border
              border-white/[0.06]
              bg-white/[0.025]
              px-1.5
              py-3
              text-center
              shadow-[0_8px_20px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-[#DFAE45]/25
              hover:bg-[#DFAE45]/[0.045]
              active:scale-[0.96]
            "
          >
            {/* Card Glow */}
            <div className="pointer-events-none absolute -right-5 -top-5 h-14 w-14 rounded-full bg-[#DFAE45]/[0.08] blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Number */}
            <span className="absolute right-1.5 top-1.5 text-[7px] font-bold text-white/15">
              0{index + 1}
            </span>

            {/* Icon */}
            <div
              className="
                relative
                mx-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-[#DFAE45]/10
                bg-gradient-to-br
                from-[#172B43]
                to-[#0E1B2B]
                text-[20px]
                shadow-[0_6px_18px_rgba(0,0,0,0.2)]
                transition-all
                duration-300
                group-hover:border-[#DFAE45]/25
                group-hover:shadow-[0_6px_22px_rgba(223,174,69,0.1)]
              "
            >
              {item.icon}
            </div>

            {/* Name */}
            <p
              className="
                relative
                mt-2
                truncate
                px-0.5
                text-[9px]
                font-semibold
                text-white/75
                transition-colors
                duration-300
                group-hover:text-white
              "
            >
              {item.title[language]}
            </p>

            {/* Gold Bottom */}
            <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#DFAE45] opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-60" />
          </Link>
        ))}
      </div>

      {/* Bottom Hint */}
      <div className="mt-3 flex items-center justify-center gap-2">
        <span className="h-px w-7 bg-gradient-to-r from-transparent to-white/[0.08]" />

        <span className="text-[8px] font-medium text-white/20">
          {text.availablePoojas}
        </span>

        <span className="h-px w-7 bg-gradient-to-l from-transparent to-white/[0.08]" />
      </div>
    </div>
  </section>

  {/* =====================================================
      PREMIUM ALL POOJA BOTTOM SHEET
  ===================================================== */}

  {showAll && (
    <div className="fixed inset-0 z-[9999]">
      {/* =================================================
          BACKDROP
      ================================================== */}

      <button
        type="button"
        aria-label={text.closeAllPooja}
        onClick={closeAllPooja}
        className="
          absolute
          inset-0
          cursor-default
          bg-black/80
          backdrop-blur-md
        "
      />

      {/* =================================================
          SHEET
      ================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          flex
          h-[90vh]
          w-[calc(100%-16px)]
          max-w-[430px]
          -translate-x-1/2
          flex-col
          overflow-hidden
          rounded-t-[30px]
          border
          border-[#DFAE45]/15
          bg-[#050B14]
          shadow-[0_-25px_80px_rgba(0,0,0,0.75)]
        "
      >
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -left-20 top-0 h-44 w-44 rounded-full bg-[#DFAE45]/[0.07] blur-[70px]" />

        <div className="pointer-events-none absolute -right-20 top-40 h-40 w-40 rounded-full bg-[#7C3AED]/[0.06] blur-[70px]" />

        {/* =================================================
            DRAG HANDLE
        ================================================== */}

        <div className="relative flex justify-center pt-3">
          <div className="h-1 w-10 rounded-full bg-white/15" />
        </div>

        {/* =================================================
            HEADER
        ================================================== */}

        <div className="relative px-4 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                <Sparkles
                  size={12}
                  className="text-[#DFAE45]"
                />

                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#DFAE45]/75">
                  {text.sacredCollection}
                </span>
              </div>

              <h2 className="mt-1 text-[20px] font-bold text-white">
                {text.exploreAll}
              </h2>

              <p className="mt-0.5 text-[9px] text-white/35">
                {text.ritualsAvailable}
              </p>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={closeAllPooja}
              aria-label={text.close}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.04]
                text-white/50
                transition-all
                duration-200
                hover:border-[#DFAE45]/25
                hover:text-[#DFAE45]
                active:scale-90
              "
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {/* =================================================
            SEARCH
        ================================================== */}

        <div className="relative px-4 pt-4">
          <div
            className="
              group
              flex
              h-[50px]
              items-center
              gap-2.5
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.035]
              px-3
              shadow-[0_10px_30px_rgba(0,0,0,0.18)]
              backdrop-blur-xl
              transition-all
              duration-300
              focus-within:border-[#DFAE45]/35
              focus-within:bg-[#DFAE45]/[0.035]
            "
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#DFAE45]/[0.07]">
              <Search
                size={16}
                className="text-[#DFAE45]"
              />
            </div>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={text.searchPlaceholder}
              autoFocus
              className="
                min-w-0
                flex-1
                bg-transparent
                text-[12px]
                font-medium
                text-white
                outline-none
                placeholder:text-white/25
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label={text.clear}
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/[0.06]
                  text-white/40
                  transition
                  hover:text-white
                  active:scale-90
                "
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Result Count */}
          <div className="mt-2 flex items-center justify-between px-1">
            <span className="text-[8px] font-medium text-white/25">
              {search
                ? `${filteredPoojas.length} ${text.poojaFound}`
                : text.browseAllRituals}
            </span>

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-[8px] font-semibold text-[#DFAE45]"
              >
                {text.clear}
              </button>
            )}
          </div>
        </div>

        {/* =================================================
            GRID
        ================================================== */}

        <div
          className="
            relative
            mt-3
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            px-4
            pb-7
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {filteredPoojas.length > 0 ? (
            <div className="grid grid-cols-3 gap-2">
              {filteredPoojas.map((pooja, index) => {
                const slug = createPoojaSlug(
                  pooja.name.en
                );

                return (
                  <Link
                    key={pooja.id}
                    href={`/pooja/online/${slug}`}
                    onClick={closeAllPooja}
                    className="
                      group
                      relative
                      flex
                      min-h-[104px]
                      flex-col
                      items-center
                      justify-center
                      overflow-hidden
                      rounded-[17px]
                      border
                      border-white/[0.06]
                      bg-white/[0.025]
                      px-1.5
                      py-2.5
                      text-center
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#DFAE45]/25
                      hover:bg-[#DFAE45]/[0.045]
                      active:scale-[0.95]
                    "
                  >
                    {/* Number */}
                    <span className="absolute right-1.5 top-1.5 text-[7px] font-bold text-white/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Glow */}
                    <div className="pointer-events-none absolute -right-5 -top-5 h-14 w-14 rounded-full bg-[#DFAE45]/[0.08] blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Icon */}
                    <div
                      className="
                        relative
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-[#DFAE45]/10
                        bg-gradient-to-br
                        from-[#172B43]
                        to-[#0D1827]
                        text-[18px]
                        shadow-[0_6px_15px_rgba(0,0,0,0.2)]
                        transition-all
                        duration-300
                        group-hover:border-[#DFAE45]/25
                      "
                    >
                      {pooja.icon}
                    </div>

                    {/* Name */}
                    <p
                      className="
                        relative
                        mt-2
                        min-h-[28px]
                        w-full
                        px-0.5
                        text-[9px]
                        font-semibold
                        leading-[13px]
                        text-white/70
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    >
                      {pooja.name[language]}
                    </p>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#DFAE45] opacity-0 transition-all duration-300 group-hover:w-8 group-hover:opacity-60" />
                  </Link>
                );
              })}
            </div>
          ) : (
            /* =================================================
               NO RESULT
            ================================================== */

            <div className="flex min-h-[330px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/[0.07] bg-white/[0.025]">
                <Search
                  size={24}
                  className="text-white/20"
                />
              </div>

              <p className="mt-4 text-[15px] font-bold text-white">
                {text.noPoojaFound}
              </p>

              <p className="mt-1 text-[10px] text-white/30">
                {text.tryAnother}
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  mt-4
                  flex
                  items-center
                  gap-1.5
                  rounded-full
                  border
                  border-[#DFAE45]/20
                  bg-[#DFAE45]/[0.06]
                  px-3
                  py-2
                  text-[9px]
                  font-bold
                  text-[#DFAE45]
                "
              >
                {text.browseAll}

                <ChevronRight size={12} />
              </button>
            </div>
          )}
        </div>

        {/* Bottom Accent */}
        <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#DFAE45]/40 to-transparent" />
      </div>
    </div>
  )}
</>


);
}
