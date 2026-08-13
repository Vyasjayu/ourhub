"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  User,
  CalendarDays,
  MapPin,
  Loader2,
} from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

/* =========================================================
   POOJA DATA
========================================================= */

const poojas = [
  {
    slug: "ganesh-pooja",
    name: "Ganesh Pooja",
    icon: "🙏",
    price: 1,
    duration: "60 Minutes",
  },
  {
    slug: "lakshmi-pooja",
    name: "Lakshmi Pooja",
    icon: "🪔",
    price: 1500,
    duration: "60 Minutes",
  },
  {
    slug: "saraswati-pooja",
    name: "Saraswati Pooja",
    icon: "📚",
    price: 1200,
    duration: "60 Minutes",
  },
  {
    slug: "durga-pooja",
    name: "Durga Pooja",
    icon: "🌺",
    price: 1500,
    duration: "75 Minutes",
  },
  {
    slug: "kali-pooja",
    name: "Kali Pooja",
    icon: "🌹",
    price: 1600,
    duration: "75 Minutes",
  },
  {
    slug: "shiv-pooja",
    name: "Shiv Pooja",
    icon: "🔱",
    price: 1500,
    duration: "75 Minutes",
  },
  {
    slug: "hanuman-pooja",
    name: "Hanuman Pooja",
    icon: "🚩",
    price: 1200,
    duration: "60 Minutes",
  },
  {
    slug: "ram-darbar-pooja",
    name: "Ram Darbar Pooja",
    icon: "🏹",
    price: 1500,
    duration: "75 Minutes",
  },
  {
    slug: "krishna-pooja",
    name: "Krishna Pooja",
    icon: "🦚",
    price: 1400,
    duration: "60 Minutes",
  },
  {
    slug: "satyanarayan-katha",
    name: "Satyanarayan Katha",
    icon: "🙏",
    price: 2100,
    duration: "120 Minutes",
  },
  {
    slug: "rudrabhishek",
    name: "Rudrabhishek",
    icon: "🔱",
    price: 1800,
    duration: "90 Minutes",
  },
  {
    slug: "mahamrityunjaya-jaap",
    name: "Mahamrityunjaya Jaap",
    icon: "🕉️",
    price: 2100,
    duration: "90 Minutes",
  },
  {
    slug: "navgraha-pooja",
    name: "Navgraha Pooja",
    icon: "✨",
    price: 2500,
    duration: "120 Minutes",
  },
  {
    slug: "vastu-pooja",
    name: "Vastu Pooja",
    icon: "🏡",
    price: 2100,
    duration: "90 Minutes",
  },
  {
    slug: "griha-pravesh",
    name: "Griha Pravesh",
    icon: "🏠",
    price: 3100,
    duration: "120 Minutes",
  },
  {
    slug: "bhoomi-poojan",
    name: "Bhoomi Poojan",
    icon: "🌿",
    price: 2500,
    duration: "90 Minutes",
  },
  {
    slug: "vivah-pooja",
    name: "Vivah Pooja",
    icon: "💍",
    price: 3100,
    duration: "120 Minutes",
  },
  {
    slug: "engagement-pooja",
    name: "Engagement Pooja",
    icon: "💑",
    price: 1500,
    duration: "60 Minutes",
  },
  {
    slug: "namkaran-sanskar",
    name: "Namkaran Sanskar",
    icon: "👶",
    price: 1800,
    duration: "75 Minutes",
  },
  {
    slug: "mundan-sanskar",
    name: "Mundan Sanskar",
    icon: "🪔",
    price: 1800,
    duration: "75 Minutes",
  },
  {
    slug: "annaprashan",
    name: "Annaprashan",
    icon: "🍚",
    price: 1500,
    duration: "60 Minutes",
  },
  {
    slug: "janeu-sanskar",
    name: "Janeu Sanskar",
    icon: "🕉️",
    price: 2100,
    duration: "90 Minutes",
  },
  {
    slug: "pitru-dosh-nivaran",
    name: "Pitru Dosh Nivaran",
    icon: "🙏",
    price: 2500,
    duration: "90 Minutes",
  },
  {
    slug: "kaal-sarp-dosh",
    name: "Kaal Sarp Dosh",
    icon: "🐍",
    price: 3100,
    duration: "120 Minutes",
  },
  {
    slug: "manglik-dosh-pooja",
    name: "Manglik Dosh Pooja",
    icon: "🔴",
    price: 2500,
    duration: "90 Minutes",
  },
  {
    slug: "shani-shanti",
    name: "Shani Shanti",
    icon: "🪐",
    price: 1800,
    duration: "75 Minutes",
  },
  {
    slug: "rahu-ketu-shanti",
    name: "Rahu Ketu Shanti",
    icon: "☄️",
    price: 2500,
    duration: "90 Minutes",
  },
  {
    slug: "chandi-path",
    name: "Chandi Path",
    icon: "🕉️",
    price: 3100,
    duration: "120 Minutes",
  },
  {
    slug: "durga-saptashati",
    name: "Durga Saptashati",
    icon: "🌺",
    price: 3100,
    duration: "120 Minutes",
  },
  {
    slug: "lakshmi-kuber-pooja",
    name: "Lakshmi Kuber Pooja",
    icon: "💰",
    price: 2500,
    duration: "90 Minutes",
  },
  {
    slug: "dhanteras-pooja",
    name: "Dhanteras Pooja",
    icon: "🪔",
    price: 1800,
    duration: "60 Minutes",
  },
  {
    slug: "diwali-lakshmi-pooja",
    name: "Diwali Lakshmi Pooja",
    icon: "🪔",
    price: 1800,
    duration: "60 Minutes",
  },
  {
    slug: "ganesh-visarjan-pooja",
    name: "Ganesh Visarjan Pooja",
    icon: "🙏",
    price: 1500,
    duration: "60 Minutes",
  },
  {
    slug: "karwa-chauth-pooja",
    name: "Karwa Chauth Pooja",
    icon: "🌙",
    price: 1500,
    duration: "60 Minutes",
  },
  {
    slug: "raksha-bandhan-pooja",
    name: "Raksha Bandhan Pooja",
    icon: "🪢",
    price: 1200,
    duration: "45 Minutes",
  },
  {
    slug: "navratri-pooja",
    name: "Navratri Pooja",
    icon: "🌺",
    price: 1500,
    duration: "60 Minutes",
  },
  {
    slug: "chhath-pooja",
    name: "Chhath Pooja",
    icon: "🌅",
    price: 1800,
    duration: "75 Minutes",
  },
  {
    slug: "makar-sankranti-pooja",
    name: "Makar Sankranti Pooja",
    icon: "☀️",
    price: 1200,
    duration: "60 Minutes",
  },
  {
    slug: "akshaya-tritiya-pooja",
    name: "Akshaya Tritiya Pooja",
    icon: "✨",
    price: 1500,
    duration: "60 Minutes",
  },
  {
    slug: "janmashtami-pooja",
    name: "Janmashtami Pooja",
    icon: "🦚",
    price: 1500,
    duration: "60 Minutes",
  },
  {
    slug: "ram-navami-pooja",
    name: "Ram Navami Pooja",
    icon: "🏹",
    price: 1500,
    duration: "60 Minutes",
  },
  {
    slug: "mahashivratri-pooja",
    name: "Mahashivratri Pooja",
    icon: "🔱",
    price: 1800,
    duration: "75 Minutes",
  },
  {
    slug: "hanuman-jayanti-pooja",
    name: "Hanuman Jayanti Pooja",
    icon: "🚩",
    price: 1500,
    duration: "60 Minutes",
  },
  {
    slug: "ganesh-chaturthi-pooja",
    name: "Ganesh Chaturthi Pooja",
    icon: "🙏",
    price: 1500,
    duration: "60 Minutes",
  },
  {
    slug: "saraswati-puja",
    name: "Saraswati Puja",
    icon: "📚",
    price: 1200,
    duration: "60 Minutes",
  },
  {
    slug: "business-success-pooja",
    name: "Business Success Pooja",
    icon: "💼",
    price: 2100,
    duration: "90 Minutes",
  },
  {
    slug: "career-growth-pooja",
    name: "Career Growth Pooja",
    icon: "📈",
    price: 1800,
    duration: "75 Minutes",
  },
  {
    slug: "health-wellness-pooja",
    name: "Health & Wellness Pooja",
    icon: "🌿",
    price: 1800,
    duration: "75 Minutes",
  },
  {
    slug: "marriage-blessing-pooja",
    name: "Marriage Blessing Pooja",
    icon: "💍",
    price: 1800,
    duration: "75 Minutes",
  },
  {
    slug: "family-peace-pooja",
    name: "Family Peace Pooja",
    icon: "🕉️",
    price: 1800,
    duration: "75 Minutes",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function PaymentPage() {
  const params = useParams();
  const router = useRouter();

  const slug = String(params.slug || "");

  const pooja = useMemo(
    () => poojas.find((item) => item.slug === slug),
    [slug]
  );

  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  /* =========================================================
     LOAD BOOKING
  ========================================================= */

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ourhub-pooja-booking");

      if (!saved) {
        setBooking(null);
        return;
      }

      const parsedBooking = JSON.parse(saved);

      setBooking(parsedBooking);
    } catch (error) {
      console.error("BOOKING LOAD ERROR:", error);
      setBooking(null);
    }
  }, []);

  /* =========================================================
     LOAD RAZORPAY SCRIPT
  ========================================================= */

  const loadRazorpay = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (typeof window === "undefined") {
        resolve(false);
        return;
      }

      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const existingScript = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );

      if (existingScript) {
        existingScript.addEventListener("load", () => {
          resolve(true);
        });

        existingScript.addEventListener("error", () => {
          resolve(false);
        });

        return;
      }

      const script = document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.async = true;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  /* =========================================================
     START PAYMENT
  ========================================================= */

  const startPayment = async () => {
    if (loading) return;

    if (!pooja) {
      alert("Pooja details not found.");
      return;
    }

    if (!booking) {
      alert("Booking details not found.");

      router.push(
        `/pooja/online/${slug}/book`
      );

      return;
    }

    /* -----------------------------------------
       BASIC BOOKING VALIDATION
    ----------------------------------------- */

    if (
      !booking.customerName ||
      !booking.mobile ||
      !booking.city ||
      !booking.date ||
      !booking.time
    ) {
      alert(
        "Booking details are incomplete. Please fill the booking form again."
      );

      router.push(
        `/pooja/online/${slug}/book`
      );

      return;
    }

    setLoading(true);

    try {
      /* =======================================
         STEP 1
         LOAD RAZORPAY
      ======================================= */

      const razorpayLoaded =
        await loadRazorpay();

      if (!razorpayLoaded) {
        throw new Error(
          "Payment gateway could not be loaded. Please check your internet connection and try again."
        );
      }

      /* =======================================
         STEP 2
         CREATE RAZORPAY ORDER
      ======================================= */

      console.log(
        "Creating Razorpay order...",
        {
          poojaSlug: pooja.slug,
          poojaName: pooja.name,
          price: pooja.price,
        }
      );

      const orderResponse = await fetch(
        "/api/pooja/create-order",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            poojaSlug: pooja.slug,
            poojaName: pooja.name,
            price: pooja.price,

            customerName:
              booking.customerName,

            mobile: booking.mobile,

            city: booking.city,

            date: booking.date,

            time: booking.time,

            gotra: booking.gotra || "",

            sankalp:
              booking.sankalp || "",
          }),
        }
      );

      /* =======================================
         STEP 3
         READ RESPONSE SAFELY
      ======================================= */

      let orderData: any;

      try {
        orderData =
          await orderResponse.json();
      } catch {
        throw new Error(
          "Invalid response received from payment server."
        );
      }

      console.log(
        "CREATE ORDER RESPONSE:",
        orderData
      );

      if (
        !orderResponse.ok ||
        !orderData?.success
      ) {
        throw new Error(
          orderData?.message ||
            "Unable to create payment order."
        );
      }

      /* =======================================
         STEP 4
         CHECK ORDER
      ======================================= */

      if (!orderData?.order?.id) {
        throw new Error(
          "Razorpay order ID was not returned by the server."
        );
      }

      if (!orderData?.order?.amount) {
        throw new Error(
          "Razorpay order amount was not returned by the server."
        );
      }

      /*
       * IMPORTANT:
       *
       * Your API is expected to return:
       *
       * {
       *   success: true,
       *   keyId: "rzp_test_xxxxx",
       *   order: {
       *     id: "order_xxxxx",
       *     amount: 110000,
       *     currency: "INR"
       *   }
       * }
       */

      const keyId =
        orderData?.keyId ||
        process.env
          .NEXT_PUBLIC_RAZORPAY_KEY_ID;

      if (!keyId) {
        throw new Error(
          "Razorpay Key ID is missing. Please configure NEXT_PUBLIC_RAZORPAY_KEY_ID."
        );
      }

      console.log(
        "Razorpay Key:",
        keyId
          ? `${String(keyId).slice(
              0,
              10
            )}...`
          : "MISSING"
      );

      /* =======================================
         STEP 5
         RAZORPAY OPTIONS
      ======================================= */

      const options = {
        key: keyId,

        amount:
          orderData.order.amount,

        currency:
          orderData.order.currency ||
          "INR",

        name: "OurHub Services",

        description:
          `${pooja.name} Booking`,

        order_id:
          orderData.order.id,

        prefill: {
          name:
            booking.customerName,

          contact:
            `+91${booking.mobile}`,
        },

        notes: {
          pooja:
            pooja.name,

          poojaSlug:
            pooja.slug,

          customerName:
            booking.customerName,

          mobile:
            booking.mobile,

          city:
            booking.city,

          date:
            booking.date,

          time:
            booking.time,
        },

        theme: {
          color: "#facc15",
        },

        modal: {
          ondismiss: () => {
            console.log(
              "Razorpay checkout dismissed."
            );

            setLoading(false);
          },
        },

        /* =====================================
           PAYMENT SUCCESS
        ===================================== */

        handler: async function (
          response: any
        ) {
          console.log(
            "RAZORPAY PAYMENT RESPONSE:",
            response
          );

          try {
            /* ================================
               CHECK PAYMENT RESPONSE
            ================================= */

            if (
              !response
                ?.razorpay_order_id ||
              !response
                ?.razorpay_payment_id ||
              !response
                ?.razorpay_signature
            ) {
              throw new Error(
                "Invalid payment response received from Razorpay."
              );
            }

            /* ================================
               VERIFY PAYMENT
            ================================= */

            const verifyResponse =
              await fetch(
                "/api/pooja/verify-payment",
                {
                  method: "POST",

                  headers: {
                    "Content-Type":
                      "application/json",
                  },

                  body: JSON.stringify({
                    razorpay_order_id:
                      response.razorpay_order_id,

                    razorpay_payment_id:
                      response.razorpay_payment_id,

                    razorpay_signature:
                      response.razorpay_signature,

                    booking: {
                      ...booking,

                      poojaSlug:
                        pooja.slug,

                      poojaName:
                        pooja.name,

                      price:
                        pooja.price,
                    },
                  }),
                }
              );

            let verifyData: any;

            try {
              verifyData =
                await verifyResponse.json();
            } catch {
              throw new Error(
                "Invalid payment verification response."
              );
            }

            console.log(
              "VERIFY PAYMENT RESPONSE:",
              verifyData
            );

            if (
              !verifyResponse.ok ||
              !verifyData?.success
            ) {
              throw new Error(
                verifyData?.message ||
                  "Payment verification failed."
              );
            }

            /* ================================
               SAVE CONFIRMED BOOKING
            ================================= */

            const confirmedBooking = {
              ...booking,

              poojaSlug:
                pooja.slug,

              poojaName:
                pooja.name,

              price:
                pooja.price,

              paymentMethod:
                "online",

              paymentStatus:
                "paid",

              bookingStatus:
                "confirmed",

              razorpayOrderId:
                response.razorpay_order_id,

              razorpayPaymentId:
                response.razorpay_payment_id,

              razorpaySignature:
                response.razorpay_signature,

              paidAt:
                new Date().toISOString(),
            };

            localStorage.setItem(
              "ourhub-pooja-booking",
              JSON.stringify(
                confirmedBooking
              )
            );

            /* ================================
               SUCCESS PAGE
            ================================= */

            router.push(
              `/pooja/online/${slug}/book/payment/success`
            );
          } catch (error: any) {
            console.error(
              "PAYMENT VERIFICATION ERROR:",
              error
            );

            alert(
              error?.message ||
                "Payment received but verification failed. Please contact OurHub support."
            );

            setLoading(false);
          }
        },
      };

      /* =======================================
         STEP 6
         OPEN RAZORPAY
      ======================================= */

      console.log(
        "Opening Razorpay checkout..."
      );

      const razorpay =
        new window.Razorpay(
          options
        );

      /* =======================================
         PAYMENT FAILED
      ======================================= */

      razorpay.on(
        "payment.failed",
        function (
          response: any
        ) {
          console.error(
            "RAZORPAY PAYMENT FAILED:",
            response
          );

          setLoading(false);

          const errorMessage =
            response?.error
              ?.description ||
            response?.error
              ?.reason ||
            "Payment failed. Please try again.";

          alert(errorMessage);
        }
      );

      /* =======================================
         OPEN CHECKOUT
      ======================================= */

      razorpay.open();
    } catch (error: any) {
      console.error(
        "PAYMENT ERROR:",
        error
      );

      alert(
        error?.message ||
          "Unable to start payment."
      );

      setLoading(false);
    }
  };

  /* =========================================================
     POOJA NOT FOUND
  ========================================================= */

  if (!pooja) {
    return (
      <main className="min-h-screen bg-[#050b12] px-4 py-12 text-white">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#10243b] text-4xl">
            🙏
          </div>

          <h1 className="mt-5 text-xl font-bold">
            Pooja Not Found
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            The selected pooja is not available.
          </p>

          <button
            type="button"
            onClick={() =>
              router.push(
                "/pooja/online"
              )
            }
            className="mt-6 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black"
          >
            Back to Online Pooja
          </button>
        </div>
      </main>
    );
  }

  /* =========================================================
     BOOKING LOADING
  ========================================================= */

  if (!booking) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050b12] px-4 text-white">
        <div className="text-center">
          <Loader2
            className="mx-auto animate-spin text-yellow-400"
            size={30}
          />

          <p className="mt-3 text-sm text-gray-400">
            Loading booking...
          </p>

          <button
            type="button"
            onClick={() =>
              router.push(
                `/pooja/online/${slug}/book`
              )
            }
            className="mt-5 rounded-xl bg-yellow-400 px-4 py-2 text-xs font-bold text-black"
          >
            Back to Booking
          </button>
        </div>
      </main>
    );
  }

  /* =========================================================
     MAIN UI
  ========================================================= */

  return (
    <main className="min-h-screen bg-[#050b12] pb-8 text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07111d]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-md items-center gap-3 px-4">
          <button
            type="button"
            onClick={() =>
              router.push(
                `/pooja/online/${slug}/book`
              )
            }
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition active:scale-90"
          >
            <ArrowLeft size={19} />
          </button>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">
              Secure Payment
            </p>

            <p className="text-[10px] text-gray-500">
              OurHub Services
            </p>
          </div>

          <ShieldCheck
            size={20}
            className="text-yellow-400"
          />
        </div>
      </header>

      <div className="mx-auto max-w-md px-4">
        {/* =================================================
            POOJA
        ================================================= */}

        <section className="pt-5">
          <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-[#132d49] to-[#08131f] p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#1b3858] text-3xl">
                {pooja.icon}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[9px] font-semibold text-yellow-400">
                  VERIFIED POOJA
                </p>

                <h1 className="mt-1 truncate text-lg font-bold">
                  {pooja.name}
                </h1>

                <div className="mt-1 flex items-center gap-3 text-[10px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <Clock3 size={12} />
                    {pooja.duration}
                  </span>

                  <span className="font-bold text-yellow-400">
                    ₹
                    {pooja.price.toLocaleString(
                      "en-IN"
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            BOOKING SUMMARY
        ================================================= */}

        <section className="pt-5">
          <h2 className="text-sm font-bold">
            Booking Summary
          </h2>

          <div className="mt-3 space-y-3 rounded-2xl border border-white/5 bg-[#0d1a28] p-4">
            {/* NAME */}

            <div className="flex items-center gap-3">
              <User
                size={16}
                className="shrink-0 text-yellow-400"
              />

              <div>
                <p className="text-[9px] text-gray-500">
                  Devotee
                </p>

                <p className="text-xs font-semibold">
                  {booking.customerName}
                </p>
              </div>
            </div>

            {/* MOBILE */}

            <div className="flex items-center gap-3">
              <div className="flex h-4 w-4 items-center justify-center text-[11px] text-yellow-400">
                📱
              </div>

              <div>
                <p className="text-[9px] text-gray-500">
                  Mobile
                </p>

                <p className="text-xs font-semibold">
                  +91 {booking.mobile}
                </p>
              </div>
            </div>

            {/* CITY */}

            <div className="flex items-center gap-3">
              <MapPin
                size={16}
                className="shrink-0 text-yellow-400"
              />

              <div>
                <p className="text-[9px] text-gray-500">
                  City
                </p>

                <p className="text-xs font-semibold">
                  {booking.city}
                </p>
              </div>
            </div>

            {/* DATE/TIME */}

            <div className="flex items-center gap-3">
              <CalendarDays
                size={16}
                className="shrink-0 text-yellow-400"
              />

              <div>
                <p className="text-[9px] text-gray-500">
                  Pooja Schedule
                </p>

                <p className="text-xs font-semibold">
                  {booking.date} •{" "}
                  {booking.time}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            PRICE
        ================================================= */}

        <section className="pt-5">
          <div className="rounded-2xl border border-white/5 bg-[#0d1a28] p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Pooja Amount
              </span>

              <span className="text-sm font-semibold">
                ₹
                {pooja.price.toLocaleString(
                  "en-IN"
                )}
              </span>
            </div>

            <div className="my-3 border-t border-white/5" />

            <div className="flex items-center justify-between">
              <span className="font-semibold">
                Total Payable
              </span>

              <span className="text-xl font-bold text-yellow-400">
                ₹
                {pooja.price.toLocaleString(
                  "en-IN"
                )}
              </span>
            </div>
          </div>
        </section>

        {/* =================================================
            TRUST
        ================================================= */}

        <section className="pt-5">
          <div className="rounded-2xl border border-green-500/10 bg-green-500/5 p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2
                size={20}
                className="shrink-0 text-green-400"
              />

              <div>
                <p className="text-xs font-semibold text-green-400">
                  Secure Razorpay Payment
                </p>

                <p className="mt-1 text-[10px] leading-5 text-gray-500">
                  Your payment is processed securely.
                  We never store your card, UPI or
                  banking credentials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            PAY BUTTON
        ================================================= */}

        <section className="pb-6 pt-6">
          <button
            type="button"
            onClick={startPayment}
            disabled={loading}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 text-sm font-bold text-black shadow-lg shadow-yellow-500/10 transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2
                  size={17}
                  className="animate-spin"
                />

                Creating Secure Payment...
              </>
            ) : (
              <>
                Pay ₹
                {pooja.price.toLocaleString(
                  "en-IN"
                )}
              </>
            )}
          </button>

          <p className="mt-3 text-center text-[9px] text-gray-600">
            UPI • Cards • Net Banking • Wallets
          </p>

          <p className="mt-2 text-center text-[8px] text-gray-700">
            You will be redirected to Razorpay
            secure checkout.
          </p>
        </section>
      </div>
    </main>
  );
}