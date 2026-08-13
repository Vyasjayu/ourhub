"use client";

import { useState } from "react";

interface Product {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  icon: string;
  category: string;
  badge?: string;
}

const categories = [
  { name: "सभी", icon: "✨" },
  { name: "कुंडली रिपोर्ट", icon: "📜" },
  { name: "पूजा सामग्री", icon: "🪔" },
  { name: "यंत्र", icon: "🔱" },
  { name: "रत्न", icon: "💎" },
  { name: "ज्योतिष सेवाएं", icon: "🔮" },
];

const products: Product[] = [
  {
    id: 1,
    title: "जन्म कुंडली रिपोर्ट",
    subtitle: "Complete Birth Chart Analysis",
    price: 199,
    oldPrice: 399,
    icon: "📜",
    category: "कुंडली रिपोर्ट",
    badge: "Popular",
  },
  {
    id: 2,
    title: "विवाह कुंडली मिलान रिपोर्ट",
    subtitle: "Detailed Marriage Compatibility",
    price: 299,
    oldPrice: 599,
    icon: "💑",
    category: "कुंडली रिपोर्ट",
    badge: "Best Seller",
  },
  {
    id: 3,
    title: "मंगल दोष रिपोर्ट",
    subtitle: "Mangal Dosha Analysis",
    price: 149,
    oldPrice: 299,
    icon: "🔥",
    category: "ज्योतिष सेवाएं",
  },
  {
    id: 4,
    title: "गृह शांति पूजा किट",
    subtitle: "Complete Puja Essentials",
    price: 499,
    oldPrice: 799,
    icon: "🪔",
    category: "पूजा सामग्री",
  },
  {
    id: 5,
    title: "श्री यंत्र",
    subtitle: "For Prosperity & Positive Energy",
    price: 699,
    oldPrice: 999,
    icon: "🔱",
    category: "यंत्र",
    badge: "Featured",
  },
  {
    id: 6,
    title: "कुबेर यंत्र",
    subtitle: "Traditional Wealth Yantra",
    price: 599,
    oldPrice: 899,
    icon: "🕉️",
    category: "यंत्र",
  },
  {
    id: 7,
    title: "रत्न परामर्श रिपोर्ट",
    subtitle: "Personalized Gemstone Guidance",
    price: 249,
    oldPrice: 499,
    icon: "💎",
    category: "रत्न",
  },
  {
    id: 8,
    title: "दैनिक राशिफल प्रीमियम",
    subtitle: "Personalized Astrology Guidance",
    price: 99,
    oldPrice: 199,
    icon: "🔮",
    category: "ज्योतिष सेवाएं",
  },
];

export default function AstrologyShopPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("सभी");

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "सभी" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.subtitle
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#071424] px-4 py-5 text-white">
      <div className="mx-auto max-w-md">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="mb-5">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/10 text-2xl">
                🛍️
              </div>

              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#FFD400]">
                  OurHub Astrology
                </p>

                <h1 className="mt-0.5 text-xl font-black">
                  Astro Shop
                </h1>

                <p className="mt-1 text-[9px] text-gray-500">
                  ज्योतिष सेवाएं और पूजा सामग्री
                </p>
              </div>

            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#263449] bg-[#101C30] text-lg"
            >
              🛒
            </button>

          </div>

        </header>


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="overflow-hidden rounded-3xl border border-[#FFD400]/20 bg-gradient-to-br from-[#18263A] via-[#101C30] to-[#0B1320]">

          <div className="p-5">

            <div className="inline-flex rounded-full border border-[#FFD400]/20 bg-[#FFD400]/10 px-3 py-1">
              <span className="text-[8px] font-bold text-[#FFD400]">
                ✨ ASTROLOGY STORE
              </span>
            </div>

            <h2 className="mt-4 text-2xl font-black leading-tight">
              ज्योतिष की हर
              <br />
              <span className="text-[#FFD400]">
                जरूरत एक जगह
              </span>
            </h2>

            <p className="mt-3 max-w-[280px] text-[10px] leading-5 text-gray-400">
              Kundli Reports, Yantra, Puja Essentials,
              Gemstone Guidance और अन्य ज्योतिष सेवाएं।
            </p>

            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("shop-products")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="mt-5 rounded-xl bg-[#FFD400] px-5 py-3 text-[10px] font-black text-black transition active:scale-95"
            >
              Explore Products →
            </button>

          </div>

          <div className="flex justify-end px-6 pb-4">

            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#FFD400]/20 bg-[#FFD400]/5 text-4xl">
              🔮
            </div>

          </div>

        </section>


        {/* =====================================================
            SEARCH
        ===================================================== */}

        <div className="relative mt-5">

          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm">
            🔍
          </span>

          <input
            type="text"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder="Search astrology products..."
            className="h-12 w-full rounded-2xl border border-[#263449] bg-[#101C30] pl-11 pr-4 text-xs text-white outline-none placeholder:text-gray-600 focus:border-[#FFD400]/40"
          />

        </div>


        {/* =====================================================
            CATEGORIES
        ===================================================== */}

        <section className="mt-5">

          <div className="mb-3">
            <p className="text-xs font-bold">
              Shop by Category
            </p>

            <p className="mt-1 text-[8px] text-gray-500">
              अपनी जरूरत के अनुसार चुनें
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">

            {categories.map((category) => {

              const active =
                selectedCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    setSelectedCategory(category.name)
                  }
                  className={`shrink-0 rounded-2xl border px-4 py-3 transition ${
                    active
                      ? "border-[#FFD400]/50 bg-[#FFD400]/10"
                      : "border-[#1E2A3D] bg-[#101C30]"
                  }`}
                >

                  <div className="text-lg">
                    {category.icon}
                  </div>

                  <p
                    className={`mt-1 whitespace-nowrap text-[8px] font-bold ${
                      active
                        ? "text-[#FFD400]"
                        : "text-gray-400"
                    }`}
                  >
                    {category.name}
                  </p>

                </button>
              );
            })}

          </div>

        </section>


        {/* =====================================================
            PRODUCTS
        ===================================================== */}

        <section
          id="shop-products"
          className="mt-5"
        >

          <div className="mb-3 flex items-center justify-between">

            <div>
              <p className="text-xs font-bold">
                Astrology Store
              </p>

              <p className="mt-1 text-[8px] text-gray-500">
                Premium astrology products & services
              </p>
            </div>

            <span className="rounded-lg bg-[#FFD400]/10 px-2 py-1 text-[8px] font-bold text-[#FFD400]">
              {filteredProducts.length} Items
            </span>

          </div>


          {filteredProducts.length === 0 ? (

            <div className="rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-8 text-center">

              <div className="text-3xl">
                🔍
              </div>

              <p className="mt-3 text-xs font-bold">
                Product Not Found
              </p>

              <p className="mt-1 text-[9px] text-gray-500">
                Try another search or category.
              </p>

            </div>

          ) : (

            <div className="grid grid-cols-2 gap-3">

              {filteredProducts.map((product) => {

                const discount =
                  product.oldPrice
                    ? Math.round(
                        ((product.oldPrice -
                          product.price) /
                          product.oldPrice) *
                          100
                      )
                    : 0;

                return (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-[#1E2A3D] bg-[#101C30] transition hover:border-[#FFD400]/30"
                  >

                    {/* PRODUCT ICON */}

                    <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-[#18263A] to-[#0B1320]">

                      {product.badge && (
                        <span className="absolute left-2 top-2 rounded-full bg-[#FFD400] px-2 py-1 text-[7px] font-black text-black">
                          {product.badge}
                        </span>
                      )}

                      {discount > 0 && (
                        <span className="absolute right-2 top-2 rounded-full bg-green-500/10 px-2 py-1 text-[7px] font-bold text-green-400">
                          {discount}% OFF
                        </span>
                      )}

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#FFD400]/20 bg-[#FFD400]/10 text-3xl">
                        {product.icon}
                      </div>

                    </div>


                    {/* PRODUCT INFO */}

                    <div className="p-3">

                      <h3 className="line-clamp-2 text-[10px] font-bold leading-4 text-white">
                        {product.title}
                      </h3>

                      <p className="mt-1 line-clamp-2 text-[8px] leading-4 text-gray-500">
                        {product.subtitle}
                      </p>

                      <div className="mt-3 flex items-center gap-2">

                        <span className="text-sm font-black text-[#FFD400]">
                          ₹{product.price}
                        </span>

                        {product.oldPrice && (
                          <span className="text-[8px] text-gray-600 line-through">
                            ₹{product.oldPrice}
                          </span>
                        )}

                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          console.log(
                            "Selected product:",
                            product
                          );
                        }}
                        className="mt-3 flex h-9 w-full items-center justify-center rounded-xl border border-[#FFD400]/30 bg-[#FFD400]/10 text-[9px] font-black text-[#FFD400] transition hover:bg-[#FFD400] hover:text-black active:scale-95"
                      >
                        View Details
                      </button>

                    </div>

                  </article>
                );
              })}

            </div>

          )}

        </section>


        {/* =====================================================
            TRUST SECTION
        ===================================================== */}

        <section className="mt-5 rounded-2xl border border-[#1E2A3D] bg-[#101C30] p-4">

          <div className="mb-4">

            <p className="text-xs font-bold">
              Why Shop With OurHub?
            </p>

            <p className="mt-1 text-[8px] text-gray-500">
              सुरक्षित और भरोसेमंद ज्योतिष सेवाएं
            </p>

          </div>

          <div className="grid grid-cols-2 gap-3">

            <div className="rounded-xl bg-[#0B1320] p-3">
              <div className="text-lg">🔐</div>
              <p className="mt-2 text-[9px] font-bold">
                Secure Payment
              </p>
              <p className="mt-1 text-[7px] text-gray-500">
                Safe & secure checkout
              </p>
            </div>

            <div className="rounded-xl bg-[#0B1320] p-3">
              <div className="text-lg">⭐</div>
              <p className="mt-2 text-[9px] font-bold">
                Trusted Services
              </p>
              <p className="mt-1 text-[7px] text-gray-500">
                Quality astrology services
              </p>
            </div>

            <div className="rounded-xl bg-[#0B1320] p-3">
              <div className="text-lg">📦</div>
              <p className="mt-2 text-[9px] font-bold">
                Easy Ordering
              </p>
              <p className="mt-1 text-[7px] text-gray-500">
                Simple & quick process
              </p>
            </div>

            <div className="rounded-xl bg-[#0B1320] p-3">
              <div className="text-lg">💬</div>
              <p className="mt-2 text-[9px] font-bold">
                Support
              </p>
              <p className="mt-1 text-[7px] text-gray-500">
                Help when you need it
              </p>
            </div>

          </div>

        </section>


        {/* =====================================================
            DISCLAIMER
        ===================================================== */}

        <div className="mt-5 rounded-2xl border border-[#263449] bg-[#0B1320] p-4">

          <p className="text-[9px] font-bold text-gray-300">
            🔮 Note
          </p>

          <p className="mt-2 text-[8px] leading-4 text-gray-500">
            Astrology services and products are provided
            for spiritual and general guidance. Results
            may vary based on individual circumstances.
          </p>

        </div>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <p className="mt-6 pb-4 text-center text-[8px] leading-4 text-gray-600">
          © OurHub Astrology • Premium Astrology Services
        </p>

      </div>
    </main>
  );
}