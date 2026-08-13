"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  Share2,
  Wallet,
  Star,
  CheckCircle2,
  Phone,
  MessageCircle,
  Home,
  Sparkles,
  PlaySquare,
  User,
  Gift,
} from "lucide-react";

import ExperienceSection from "@/components/astrology/ExperienceSection";
import ExpertiseSection from "@/components/astrology/ExpertiseSection";
import LanguageSection from "@/components/astrology/LanguageSection";

import FreeKundli from "@/components/astrology/FreeKundli";
import PremiumServices from "@/components/astrology/PremiumServices";
import Panchang from "@/components/astrology/Panchang";
import Horoscope from "@/components/astrology/Horoscope";
import ReviewSection from "@/components/astrology/ReviewSection";
import FAQ from "@/components/astrology/FAQ";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface UserData {
  id: string;
  fullName: string;
  email?: string;
  mobile: string;
  profilePhoto?: string;
  walletBalance: number;
  city?: string;
  state?: string;
  createdAt?: string;
}

export default function AstrologyDetailPage({
  params,
}: PageProps) {
  const { id } = use(params);
  const router = useRouter();

  const [astrologer, setAstrologer] = useState<any>(null);
  const [user, setUser] = useState<UserData | null>(null);

  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);

  const [chatLoading, setChatLoading] = useState(false);

  // =========================================================
  // LOAD ASTROLOGER
  // =========================================================

  useEffect(() => {
    async function loadAstrologer() {
      try {
        setLoading(true);

        const res = await fetch(
          `/api/astrology/${encodeURIComponent(id)}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        const data = await res.json();

        console.log(
          "📥 ASTROLOGER RESPONSE:",
          data
        );

        if (
          res.ok &&
          data.success &&
          data.astrologer
        ) {
          setAstrologer(data.astrologer);
        } else {
          setAstrologer(null);
        }
      } catch (error) {
        console.error(
          "❌ Astrologer loading error:",
          error
        );

        setAstrologer(null);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadAstrologer();
    }
  }, [id]);

  // =========================================================
  // LOAD USER
  // =========================================================

  useEffect(() => {
    async function loadUser() {
      try {
        setUserLoading(true);

        const res = await fetch(
          "/api/user/me",
          {
            method: "GET",
            credentials: "include",
            cache: "no-store",
          }
        );

        const data = await res.json();

        console.log(
          "📥 USER RESPONSE:",
          data
        );

        if (
          res.ok &&
          data.success &&
          data.user
        ) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error(
          "❌ User loading error:",
          error
        );

        setUser(null);
      } finally {
        setUserLoading(false);
      }
    }

    loadUser();
  }, []);

  // =========================================================
  // LOADING
  // =========================================================

  if (loading || userLoading) {
    return (
      <div className="min-h-screen bg-[#e5e7eb]">
        <main className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center bg-[#050B14] text-white">
          <div className="text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />

            <p className="text-sm text-gray-400">
              Loading astrologer...
            </p>
          </div>
        </main>
      </div>
    );
  }

  // =========================================================
  // ASTROLOGER NOT FOUND
  // =========================================================

  if (!astrologer) {
    return (
      <div className="min-h-screen bg-[#e5e7eb]">
        <main className="mx-auto flex min-h-screen w-full max-w-[430px] items-center justify-center bg-[#050B14] px-5 text-white">
          <div className="text-center">
            <div className="mb-4 text-5xl">
              🔮
            </div>

            <h2 className="text-xl font-bold">
              Astrologer Not Found
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              This astrologer is not available.
            </p>

            <button
              onClick={() => router.back()}
              className="mt-6 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
            >
              Go Back
            </button>
          </div>
        </main>
      </div>
    );
  }

  // =========================================================
  // DATA
  // =========================================================

  const walletBalance = Number(
    user?.walletBalance ?? 0
  );

  const pricePerMinute = Number(
    astrologer.price ?? 0
  );

  const rating = Number(
    astrologer.rating ?? 5
  );

  const totalReviews = Number(
    astrologer.totalReviews ?? 0
  );

  const totalConsultations = Number(
    astrologer.totalConsultations ?? 0
  );

  const experience = Number(
    astrologer.experience ?? 0
  );

  const astrologerName =
    astrologer.displayName ||
    astrologer.fullName ||
    "Astrologer";

  const phone =
    astrologer.mobile || "";

  const expertise =
    astrologer.specialization
      ? String(astrologer.specialization)
          .split(",")
          .map((item: string) => item.trim())
          .filter(Boolean)
      : [];

  const languages =
    astrologer.languages
      ? String(astrologer.languages)
          .split(",")
          .map((item: string) => item.trim())
          .filter(Boolean)
      : [];

  // =========================================================
  // CALL
  // =========================================================

  function handleCall() {
    if (!phone) {
      alert(
        "Astrologer mobile number is not available."
      );
      return;
    }

    window.location.href = `tel:${phone}`;
  }

  // =========================================================
  // CHAT
  // =========================================================

  async function handleChat() {
  if (chatLoading) {
    return;
  }

  // =========================================================
  // ASTROLOGER ID CHECK
  // =========================================================

  if (!id) {
    alert("Astrologer information is missing.");
    return;
  }

  // =========================================================
  // USER LOGIN CHECK
  //
  // user already /api/user/me se load ho raha hai.
  // =========================================================

  if (!user) {
    const redirectPath =
      `/religious/astrology/${id}/consultation`;

    router.push(
      `/auth/login?redirect=${encodeURIComponent(
        redirectPath
      )}`
    );

    return;
  }

  // =========================================================
  // USER ID CHECK
  // =========================================================

  if (!user.id) {
    alert(
      "User information is missing. Please login again."
    );

    return;
  }

  // =========================================================
  // ASTROLOGER CHECK
  // =========================================================

  if (!astrologer) {
    alert(
      "Astrologer information is loading."
    );

    return;
  }

  // =========================================================
  // PRICE CHECK
  //
  // Abhi consultation create nahi kar rahe.
  // Price sirf next screen par show karne ke liye
  // available hona chahiye.
  // =========================================================

  if (
    !Number.isFinite(pricePerMinute) ||
    pricePerMinute <= 0
  ) {
    alert(
      "This astrologer has not set a valid consultation price."
    );

    return;
  }

  // =========================================================
  // GO TO KUNDLI / CONSULTATION FORM
  // =========================================================

  try {
    setChatLoading(true);

    console.log(
      "===================================="
    );

    console.log(
      "🔮 OPEN CONSULTATION FLOW"
    );

    console.log(
      "User ID:",
      user.id
    );

    console.log(
      "Astrologer ID:",
      id
    );

    console.log(
      "Astrologer:",
      astrologerName
    );

    console.log(
      "Price:",
      pricePerMinute
    );

    console.log(
      "===================================="
    );

    /*
     * IMPORTANT:
     *
     * Yahan consultation API call nahi hogi.
     *
     * Pehle user:
     *
     * Name
     * Gender
     * DOB
     * Birth Time
     * Birth Place
     *
     * fill karega.
     *
     * Form submit ke baad hi consultation create hogi.
     */

    const consultationUrl =
      `/religious/astrology/${id}/consultation`;

    router.push(consultationUrl);
  } catch (error) {
    console.error(
      "❌ Consultation flow error:",
      error
    );

    alert(
      "Unable to open consultation."
    );
  } finally {
    setChatLoading(false);
  }
}

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <div className="min-h-screen bg-[#e5e7eb]">
      <main
        className="
          relative
          mx-auto
          min-h-screen
          w-full
          max-w-[430px]
          overflow-x-hidden
          bg-[#050B14]
          text-white
          shadow-2xl
        "
      >
        {/* HEADER */}

        <header
          className="
            sticky
            top-0
            z-50
            flex
            h-[62px]
            items-center
            justify-between
            border-b
            border-[#202D40]
            bg-[#050B14]
            px-4
          "
        >
          <button
            onClick={() => router.back()}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#101C30]
            "
          >
            <ArrowLeft size={22} />
          </button>

          <div className="flex-1 px-3 text-center">
            <h1 className="text-[17px] font-bold">
              ज्योतिषी विवरण
            </h1>
          </div>

          <div
            className="
              flex
              items-center
              gap-1.5
              rounded-xl
              border
              border-yellow-400/40
              bg-[#101C30]
              px-2.5
              py-2
            "
          >
            <Wallet
              size={18}
              className="text-yellow-400"
            />

            <span className="text-xs font-bold">
              ₹{walletBalance}
            </span>
          </div>
        </header>

        {/* PROFILE */}

        <section className="relative overflow-hidden border-b border-[#27344A]">
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_top_right,#1b3150,transparent_55%)]
            "
          />

          <div className="relative px-4 pb-5 pt-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div
                    className="
                      h-[92px]
                      w-[92px]
                      overflow-hidden
                      rounded-full
                      border-2
                      border-yellow-400
                      bg-[#101C30]
                      p-[2px]
                    "
                  >
                    {astrologer.profilePhoto ? (
                      <img
                        src={
                          astrologer.profilePhoto
                        }
                        alt={
                          astrologerName
                        }
                        className="h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-3xl">
                        🔮
                      </div>
                    )}
                  </div>

                  <span
                    className="
                      absolute
                      bottom-1
                      right-1
                      h-5
                      w-5
                      rounded-full
                      border-2
                      border-[#050B14]
                      bg-green-500
                    "
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h2 className="max-w-[210px] truncate text-xl font-bold">
                      {astrologerName}
                    </h2>

                    {astrologer.isVerified && (
                      <CheckCircle2
                        size={18}
                        className="shrink-0 fill-blue-500 text-white"
                      />
                    )}
                  </div>

                  <p className="mt-1 text-sm text-gray-300">
                    {astrologer.category ===
                    "astrology"
                      ? "Vedic Astrologer"
                      : "Astrology Expert"}
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="flex items-center gap-1 text-sm text-yellow-400">
                      <Star
                        size={15}
                        fill="currentColor"
                      />
                      {rating.toFixed(1)}
                    </span>

                    <span className="text-xs text-gray-400">
                      ({totalReviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#101C30]
                "
              >
                <Share2 size={20} />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="rounded-xl bg-[#101C30] px-2 py-3 text-center">
                <p className="text-lg font-bold text-yellow-400">
                  {experience}
                </p>

                <p className="text-[10px] text-gray-400">
                  Years Experience
                </p>
              </div>

              <div className="rounded-xl bg-[#101C30] px-2 py-3 text-center">
                <p className="text-lg font-bold text-yellow-400">
                  {totalConsultations}
                </p>

                <p className="text-[10px] text-gray-400">
                  Consultations
                </p>
              </div>

              <div className="rounded-xl bg-[#101C30] px-2 py-3 text-center">
                <p className="text-lg font-bold text-yellow-400">
                  {rating.toFixed(1)}
                </p>

                <p className="text-[10px] text-gray-400">
                  Rating
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICE */}

        <section className="border-b border-[#202D40] bg-[#07101D] px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">
                परामर्श शुल्क
              </p>

              <div className="mt-1 flex items-end gap-1">
                <span className="text-2xl font-bold text-white">
                  ₹{pricePerMinute}
                </span>

                <span className="mb-1 text-xs text-gray-400">
                  /मिनट
                </span>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                gap-1
                rounded-full
                border
                border-yellow-400/30
                bg-yellow-400/10
                px-3
                py-1.5
              "
            >
              <Star
                size={14}
                fill="currentColor"
                className="text-yellow-400"
              />

              <span className="text-xs font-bold text-yellow-400">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>
        </section>

        {/* CONTENT */}

        <div className="px-3 pb-[210px]">
          {/* ABOUT */}

          <section className="mt-4">
            <div className="overflow-hidden rounded-2xl border border-[#202D40] bg-[#0B1626]">
              <div className="flex items-center justify-between border-b border-[#202D40] px-4 py-3">
                <h2 className="text-lg font-bold">
                  ज्योतिषी के बारे में
                </h2>

                <Gift
                  size={21}
                  className="text-yellow-400"
                />
              </div>

              <div className="p-4">
                <p className="text-sm leading-6 text-gray-300">
                  {astrologer.about ||
                    "यह ज्योतिषी आपको जीवन, करियर, विवाह, धन और अन्य महत्वपूर्ण विषयों पर ज्योतिषीय मार्गदर्शन प्रदान करता है।"}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-4">
            <ExperienceSection
              experience={experience}
              rating={rating}
            />
          </section>

          <section className="mt-4">
            <ExpertiseSection
              expertise={expertise}
            />
          </section>

          <section className="mt-4">
            <LanguageSection
              languages={languages}
            />
          </section>

          <section className="mt-5">
            <FreeKundli />
          </section>

          <section className="mt-5">
            <PremiumServices />
          </section>

          <section className="mt-5">
            <Panchang />
          </section>

          <section className="mt-5">
            <Horoscope />
          </section>

          <section className="mt-5">
            <ReviewSection />
          </section>

          <section className="mt-5">
            <FAQ />
          </section>
        </div>

        {/* CALL + CHAT */}

        <div
          className="
            fixed
            bottom-[70px]
            left-1/2
            z-50
            flex
            w-full
            max-w-[430px]
            -translate-x-1/2
            gap-3
            border-t
            border-[#202D40]
            bg-[#050B14]/95
            px-3
            py-3
            backdrop-blur-xl
          "
        >
          {/* CALL */}

          <button
            onClick={handleCall}
            className="
              flex
              h-[52px]
              flex-1
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#16A34A]
              text-base
              font-bold
              text-white
              shadow-lg
              active:scale-[0.98]
            "
          >
            <Phone
              size={21}
              fill="currentColor"
            />

            <span>कॉल</span>
          </button>

          {/* CHAT */}

          <button
            onClick={handleChat}
            disabled={chatLoading}
            className="
              flex
              h-[52px]
              flex-1
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#168BD3]
              text-base
              font-bold
              text-white
              shadow-lg
              active:scale-[0.98]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {chatLoading ? (
              <>
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />

                <span>
                  कनेक्ट हो रहा है...
                </span>
              </>
            ) : (
              <>
                <MessageCircle
                  size={22}
                  fill="currentColor"
                />

                <span>चैट</span>
              </>
            )}
          </button>
        </div>

        {/* BOTTOM NAV */}

        <nav
          className="
            fixed
            bottom-0
            left-1/2
            z-[60]
            w-full
            max-w-[430px]
            -translate-x-1/2
            border-t
            border-[#202D40]
            bg-[#050B14]
            pb-[env(safe-area-inset-bottom)]
          "
        >
          <div className="grid grid-cols-4">
            <button
              onClick={() =>
                router.push("/")
              }
              className="flex flex-col items-center justify-center gap-1 py-2 text-gray-400"
            >
              <Home size={22} />

              <span className="text-[10px]">
                होम
              </span>
            </button>

            <button
              onClick={() =>
                router.push(
                  "/religious/astrology"
                )
              }
              className="flex flex-col items-center justify-center gap-1 py-2 text-yellow-400"
            >
              <Sparkles size={22} />

              <span className="text-[10px] font-semibold">
                एआई ज्योतिषी
              </span>
            </button>

            <button
              onClick={() =>
                router.push(
                  "/religious/astrology"
                )
              }
              className="flex flex-col items-center justify-center gap-1 py-2 text-gray-400"
            >
              <PlaySquare size={22} />

              <span className="text-[10px]">
                लाइव
              </span>
            </button>

            <button
              onClick={() =>
                router.push(
                  "/religious/astrology"
                )
              }
              className="flex flex-col items-center justify-center gap-1 py-2 text-gray-400"
            >
              <User size={22} />

              <span className="text-[10px]">
                मेरे परामर्श
              </span>
            </button>
          </div>
        </nav>
      </main>
    </div>
  );
}