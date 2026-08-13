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

  useEffect(() => {
    try {
      const saved = localStorage.getItem(
        "ourhub-pooja-booking"
      );

      if (saved) {
        setBooking(JSON.parse(saved));
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  const loadRazorpay = () => {
    return new Promise<boolean>((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => resolve(true);

      script.onerror = () => resolve(false);

      document.body.appendChild(script);
    });
  };

  const startPayment = async () => {
    if (!pooja || !booking) {
      alert("Booking details not found.");
      router.push(`/pooja/online/${slug}/book`);
      return;
    }

    setLoading(true);

    try {
      const razorpayLoaded = await loadRazorpay();

      if (!razorpayLoaded) {
        alert(
          "Payment gateway could not be loaded. Please try again."
        );
        setLoading(false);
        return;
      }

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
            customerName: booking.customerName,
            mobile: booking.mobile,
            city: booking.city,
            date: booking.date,
            time: booking.time,
          }),
        }
      );

      const orderData = await orderResponse.json();

      if (!orderResponse.ok || !orderData.success) {
        throw new Error(
          orderData.message ||
            "Unable to create payment order."
        );
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: orderData.order.amount,

        currency: orderData.order.currency,

        name: "OurHub Services",

        description: `${pooja.name} Booking`,

        order_id: orderData.order.id,

        prefill: {
          name: booking.customerName,
          contact: `+91${booking.mobile}`,
        },

        notes: {
          pooja: pooja.name,
          city: booking.city,
          date: booking.date,
          time: booking.time,
        },

        theme: {
          color: "#facc15",
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },

        handler: async function (
          response: any
        ) {
          try {
            const verifyResponse = await fetch(
              "/api/pooja/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id:
                    response.razorpay_order_id,

                  razorpay_payment_id:
                    response.razorpay_payment_id,

                  razorpay_signature:
                    response.razorpay_signature,
                }),
              }
            );

            const verifyData =
              await verifyResponse.json();

            if (
              !verifyResponse.ok ||
              !verifyData.success
            ) {
              throw new Error(
                verifyData.message ||
                  "Payment verification failed."
              );
            }

            const confirmedBooking = {
              ...booking,
              paymentMethod: "online",
              paymentStatus: "paid",
              bookingStatus: "confirmed",
              razorpayOrderId:
                response.razorpay_order_id,
              razorpayPaymentId:
                response.razorpay_payment_id,
            };

            localStorage.setItem(
              "ourhub-pooja-booking",
              JSON.stringify(confirmedBooking)
            );

            router.push(
              `/pooja/online/${slug}/book/payment/success`
            );
          } catch (error) {
            console.error(error);

            alert(
              "Payment received but verification failed. Please contact OurHub support."
            );

            setLoading(false);
          }
        },
      };

      const razorpay = new window.Razorpay(
        options
      );

      razorpay.on(
        "payment.failed",
        function (response: any) {
          console.error(
            "Payment failed:",
            response
          );

          setLoading(false);

          alert(
            response?.error?.description ||
              "Payment failed. Please try again."
          );
        }
      );

      razorpay.open();
    } catch (error: any) {
      console.error("PAYMENT ERROR:", error);

      alert(
        error?.message ||
          "Unable to start payment."
      );

      setLoading(false);
    }
  };

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

          <button
            onClick={() =>
              router.push("/pooja/online")
            }
            className="mt-6 rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black"
          >
            Back to Online Pooja
          </button>
        </div>
      </main>
    );
  }

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
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050b12] pb-8 text-white">
      {/* HEADER */}

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#07111d]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-md items-center gap-3 px-4">
          <button
            onClick={() =>
              router.push(
                `/pooja/online/${slug}/book`
              )
            }
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5"
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
        {/* POoja */}

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

        {/* CUSTOMER */}

        <section className="pt-5">
          <h2 className="text-sm font-bold">
            Booking Summary
          </h2>

          <div className="mt-3 space-y-2 rounded-2xl border border-white/5 bg-[#0d1a28] p-4">
            <div className="flex items-center gap-3">
              <User
                size={16}
                className="text-yellow-400"
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

            <div className="flex items-center gap-3">
              <MapPin
                size={16}
                className="text-yellow-400"
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

            <div className="flex items-center gap-3">
              <CalendarDays
                size={16}
                className="text-yellow-400"
              />

              <div>
                <p className="text-[9px] text-gray-500">
                  Pooja Schedule
                </p>

                <p className="text-xs font-semibold">
                  {booking.date} • {booking.time}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICE */}

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

        {/* TRUST */}

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

        {/* PAY BUTTON */}

        <section className="pt-6 pb-6">
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

                Processing...
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
        </section>
      </div>
    </main>
  );
}