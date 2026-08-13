"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  Clock3,
  MapPin,
  ShieldCheck,
  User,
} from "lucide-react";

interface Astrologer {
  _id: string;
  fullName?: string;
  displayName?: string;
  profilePhoto?: string;
  specialization?: string;
  experience?: number;
  price?: number;
  mobile?: string;
  isVerified?: boolean;
}

interface UserData {
  id: string;
  fullName?: string;
  mobile?: string;
  email?: string;
}

export default function ConsultationPage() {
  const router = useRouter();
  const params = useParams();

  const id = String(params?.id || "");

  const [astrologer, setAstrologer] =
    useState<Astrologer | null>(null);

  const [user, setUser] =
    useState<UserData | null>(null);

  const [loading, setLoading] = useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [birthTime, setBirthTime] =
    useState("");
  const [birthPlace, setBirthPlace] =
    useState("");

  // =========================================================
  // LOAD USER + ASTROLOGER
  // =========================================================

  useEffect(() => {
    if (!id) return;

    async function loadData() {
      try {
        setLoading(true);

        const [astrologerRes, userRes] =
          await Promise.all([
            fetch(`/api/astrology/${id}`, {
              method: "GET",
              cache: "no-store",
            }),

            fetch("/api/user/me", {
              method: "GET",
              credentials: "include",
              cache: "no-store",
            }),
          ]);

        const astrologerData =
          await astrologerRes.json();

        const userData =
          await userRes.json();

        // =====================================================
        // USER LOGIN CHECK
        // =====================================================

        if (
          !userRes.ok ||
          !userData?.success ||
          !userData?.user
        ) {
          router.replace(
            `/auth/login?redirect=${encodeURIComponent(
              `/religious/astrology/${id}/consultation`
            )}`
          );

          return;
        }

        setUser(userData.user);

        // =====================================================
        // ASTROLOGER
        // =====================================================

        if (
          astrologerRes.ok &&
          astrologerData?.success
        ) {
          setAstrologer(
            astrologerData.astrologer ||
              astrologerData.provider ||
              null
          );
        } else {
          console.error(
            "Astrologer API error:",
            astrologerData
          );
        }
      } catch (error) {
        console.error(
          "Consultation page error:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [id, router]);

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <main className="min-h-screen bg-[#050B14] text-white">
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-yellow-400 border-t-transparent" />

            <p className="mt-4 text-sm text-gray-400">
              Preparing your consultation...
            </p>
          </div>
        </div>
      </main>
    );
  }

  // =========================================================
  // ASTROLOGER NOT FOUND
  // =========================================================

  if (!astrologer) {
    return (
      <main className="min-h-screen bg-[#050B14] px-5 text-white">
        <div className="mx-auto max-w-md py-10 text-center">
          <div className="text-5xl">
            🔮
          </div>

          <h1 className="mt-4 text-xl font-bold">
            Astrologer Not Found
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            We could not find this astrologer.
          </p>

          <button
            type="button"
            onClick={() => router.back()}
            className="mt-6 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
          >
            Go Back
          </button>
        </div>
      </main>
    );
  }

  // =========================================================
  // SUBMIT CONSULTATION REQUEST
  // =========================================================

  async function handleContinue() {
    if (submitting) {
      return;
    }

    // =======================================================
    // VALIDATION
    // =======================================================

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!gender) {
      alert("Please select your gender.");
      return;
    }

    if (!dob) {
      alert("Please select your date of birth.");
      return;
    }

    if (!birthTime) {
      alert("Please enter your birth time.");
      return;
    }

    if (!birthPlace.trim()) {
      alert("Please enter your birth place.");
      return;
    }

    if (!user?.id) {
      alert(
        "Your login session has expired. Please login again."
      );

      router.push(
        `/auth/login?redirect=${encodeURIComponent(
          `/religious/astrology/${id}/consultation`
        )}`
      );

      return;
    }

    if (!id) {
      alert(
        "Astrologer ID is missing."
      );

      return;
    }

    if (!astrologer?._id) {
      alert(
        "Astrologer information is missing."
      );

      return;
    }

    // =======================================================
    // START SUBMITTING
    // =======================================================

    try {
      setSubmitting(true);

      console.log(
        "===================================="
      );

      console.log(
        "🔮 ASTROLOGY CONSULTATION REQUEST"
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
        "Astrologer DB ID:",
        astrologer._id
      );

      console.log(
        "Name:",
        name.trim()
      );

      console.log(
        "Gender:",
        gender
      );

      console.log(
        "DOB:",
        dob
      );

      console.log(
        "Birth Time:",
        birthTime
      );

      console.log(
        "Birth Place:",
        birthPlace.trim()
      );

      console.log(
        "===================================="
      );

      // =====================================================
      // CREATE CONSULTATION REQUEST
      // =====================================================

      const response = await fetch(
        "/api/provider/consultations",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",

          body: JSON.stringify({
            // =================================================
            // USER
            // =================================================

            userId: user.id,

            userName:
              user.fullName ||
              name.trim(),

            userMobile:
              user.mobile || "",

            userEmail:
              user.email || "",

            // =================================================
            // ASTROLOGER
            // =================================================

            panditId: astrologer._id,

            astrologerId: astrologer._id,

            panditName:
              astrologer.displayName ||
              astrologer.fullName ||
              "Astrologer",

            panditPhone:
              astrologer.mobile || "",

            // =================================================
            // CONSULTATION
            // =================================================

            consultationType: "chat",

            type: "chat",

            status: "requested",

            amount: Number(
              astrologer.price || 0
            ),

            price: Number(
              astrologer.price || 0
            ),

            duration: 15,

            // =================================================
            // KUNDLI DETAILS
            // =================================================

            name: name.trim(),

            gender,

            dob,

            birthTime,

            birthPlace: birthPlace.trim(),

            // =================================================
            // NESTED KUNDLI
            // =================================================

            kundli: {
              name: name.trim(),

              gender,

              dob,

              birthTime,

              birthPlace:
                birthPlace.trim(),
            },

            // =================================================
            // ASTROLOGY DETAILS
            // =================================================

            astrology: {
              astrologerId:
                astrologer._id,

              name: name.trim(),

              gender,

              dob,

              birthTime,

              birthPlace:
                birthPlace.trim(),
            },
          }),
        }
      );

      // =====================================================
      // READ API RESPONSE
      // =====================================================

      const data = await response.json();

      console.log(
        "📩 Consultation API Response:",
        data
      );

      // =====================================================
      // API ERROR
      // =====================================================

      if (
        !response.ok ||
        !data?.success
      ) {
        console.error(
          "❌ Consultation creation failed:",
          data
        );

        throw new Error(
          data?.message ||
            "Unable to send consultation request."
        );
      }

      // =====================================================
      // GET CONSULTATION ID
      // =====================================================

      const consultationId =
        data?.consultationId ||
        data?.consultation?._id ||
        data?.consultation?.id ||
        data?.id;

      if (!consultationId) {
        console.error(
          "❌ Consultation created but ID missing:",
          data
        );

        throw new Error(
          "Consultation created but ID is missing."
        );
      }

      // =====================================================
      // SUCCESS
      // =====================================================

      console.log(
        "===================================="
      );

      console.log(
        "✅ CONSULTATION REQUEST SENT"
      );

      console.log(
        "Consultation ID:",
        consultationId
      );

      console.log(
        "Astrologer ID:",
        astrologer._id
      );

      console.log(
        "Status:",
        "requested"
      );

      console.log(
        "===================================="
      );

      // =====================================================
      // WAITING PAGE
      // =====================================================

      router.push(
        `/religious/astrology/${id}/consultation/waiting?consultationId=${encodeURIComponent(
          String(consultationId)
        )}`
      );
    } catch (error) {
      console.error(
        "❌ Consultation request error:",
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : "Unable to send consultation request."
      );
    } finally {
      setSubmitting(false);
    }
  }

  // =========================================================
  // DISPLAY DATA
  // =========================================================

  const astrologerName =
    astrologer.displayName ||
    astrologer.fullName ||
    "Astrologer";

  const price = Number(
    astrologer.price || 0
  );

  // =========================================================
  // UI
  // =========================================================

  return (
    <main className="min-h-screen bg-[#050B14] pb-10 text-white">
      <div className="mx-auto min-h-screen w-full max-w-[430px]">

        {/* ===================================================
            HEADER
        =================================================== */}

        <header className="sticky top-0 z-50 flex h-[62px] items-center border-b border-[#202D40] bg-[#050B14] px-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#101C30]"
          >
            <ArrowLeft size={21} />
          </button>

          <div className="ml-3">
            <h1 className="text-[17px] font-bold">
              Consultation
            </h1>

            <p className="text-[11px] text-gray-400">
              Create your Kundli
            </p>
          </div>
        </header>

        {/* ===================================================
            ASTROLOGER CARD
        =================================================== */}

        <section className="px-4 pt-5">
          <div className="rounded-3xl border border-[#26354B] bg-[#0B1422] p-4">
            <div className="flex items-center gap-3">

              {/* PROFILE IMAGE */}

              <div className="h-14 w-14 overflow-hidden rounded-full bg-[#172337]">
                {astrologer.profilePhoto ? (
                  <img
                    src={astrologer.profilePhoto}
                    alt={astrologerName}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <User
                      size={25}
                      className="text-gray-400"
                    />
                  </div>
                )}
              </div>

              {/* INFO */}

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <h2 className="truncate text-sm font-bold">
                    {astrologerName}
                  </h2>

                  {astrologer.isVerified && (
                    <BadgeCheck
                      size={16}
                      className="fill-blue-500 text-white"
                    />
                  )}
                </div>

                <p className="mt-1 text-xs text-gray-400">
                  {astrologer.specialization ||
                    "Vedic Astrology"}
                </p>

                <p className="mt-1 text-xs text-yellow-400">
                  ₹{price}/min
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            TITLE
        =================================================== */}

        <section className="px-4 pt-6">
          <h2 className="text-2xl font-bold">
            Create Your Kundli
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Enter your birth details so the astrologer
            can understand your birth chart and provide
            personalized guidance.
          </p>
        </section>

        {/* ===================================================
            FORM
        =================================================== */}

        <section className="px-4 pt-6">
          <div className="space-y-5 rounded-3xl border border-[#26354B] bg-[#0B1422] p-5">

            {/* NAME */}

            <div>
              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Enter your full name"
                disabled={submitting}
                className="h-12 w-full rounded-xl border border-[#304058] bg-[#101C30] px-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-yellow-400 disabled:opacity-60"
              />
            </div>

            {/* GENDER */}

            <div>
              <label className="mb-3 block text-sm font-semibold">
                Gender
              </label>

              <div className="grid grid-cols-3 gap-2">
                {[
                  "Male",
                  "Female",
                  "Other",
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    disabled={submitting}
                    onClick={() =>
                      setGender(item)
                    }
                    className={`rounded-xl border py-3 text-sm font-medium transition ${
                      gender === item
                        ? "border-yellow-400 bg-yellow-400 text-black"
                        : "border-[#304058] bg-[#101C30] text-gray-300"
                    } disabled:cursor-not-allowed disabled:opacity-60`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* DOB */}

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <CalendarDays
                  size={16}
                  className="text-yellow-400"
                />

                Date of Birth
              </label>

              <input
                type="date"
                value={dob}
                onChange={(e) =>
                  setDob(e.target.value)
                }
                disabled={submitting}
                className="h-12 w-full rounded-xl border border-[#304058] bg-[#101C30] px-4 text-sm text-white outline-none focus:border-yellow-400 disabled:opacity-60"
              />
            </div>

            {/* BIRTH TIME */}

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <Clock3
                  size={16}
                  className="text-yellow-400"
                />

                Birth Time
              </label>

              <input
                type="time"
                value={birthTime}
                onChange={(e) =>
                  setBirthTime(e.target.value)
                }
                disabled={submitting}
                className="h-12 w-full rounded-xl border border-[#304058] bg-[#101C30] px-4 text-sm text-white outline-none focus:border-yellow-400 disabled:opacity-60"
              />
            </div>

            {/* BIRTH PLACE */}

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold">
                <MapPin
                  size={16}
                  className="text-yellow-400"
                />

                Birth Place
              </label>

              <input
                type="text"
                value={birthPlace}
                onChange={(e) =>
                  setBirthPlace(e.target.value)
                }
                placeholder="Enter your birth city"
                disabled={submitting}
                className="h-12 w-full rounded-xl border border-[#304058] bg-[#101C30] px-4 text-sm text-white outline-none placeholder:text-gray-500 focus:border-yellow-400 disabled:opacity-60"
              />
            </div>

            {/* PRIVACY */}

            <div className="flex gap-3 rounded-2xl border border-green-500/20 bg-green-500/5 p-4">
              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-green-400"
              />

              <div>
                <p className="text-xs font-semibold text-green-300">
                  Your details are private
                </p>

                <p className="mt-1 text-[11px] leading-5 text-gray-400">
                  Your birth information will only be
                  used for your astrology consultation.
                </p>
              </div>
            </div>

            {/* SEND REQUEST */}

            <button
              type="button"
              onClick={handleContinue}
              disabled={submitting}
              className="h-14 w-full rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 text-sm font-bold text-black shadow-lg transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting
                ? "Sending Request..."
                : "Send Consultation Request →"}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}