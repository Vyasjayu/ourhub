"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Script from "next/script";

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const [user, setUser] = useState<any>(null);

  const panditId = searchParams.get("panditId") || "";
  const panditPhone = searchParams.get("phone") || "";
  const panditName =
    searchParams.get("name") || "Astrologer";

  const amount = Number(
    searchParams.get("amount") || 0
  );

  const minutes = Number(
    searchParams.get("minutes") || 30
  );

  // ==========================================
  // GET LOGGED-IN USER
  // ==========================================

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true);

        const res = await fetch("/api/user/me", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        const data = await res.json();

        console.log("USER RESPONSE:", data);

        if (!res.ok || !data.success) {
          router.push("/auth/login");
          return;
        }

        setUser(data.user);
      } catch (error) {
        console.error(
          "USER FETCH ERROR:",
          error
        );

        router.push("/auth/login");
      } finally {
        setLoading(false);
      }
    }

    getUser();
  }, [router]);

  // ==========================================
  // LOAD RAZORPAY SCRIPT
  // ==========================================

  function loadRazorpay() {
    return new Promise<boolean>((resolve) => {
      if (
        document.getElementById(
          "razorpay-script"
        )
      ) {
        resolve(true);
        return;
      }

      const script =
        document.createElement("script");

      script.id = "razorpay-script";

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  }

  // ==========================================
  // START PAYMENT
  // ==========================================

  async function handlePayment() {
    try {
      if (!user) {
        alert("Please login first.");
        router.push("/auth/login");
        return;
      }

      if (!amount || amount <= 0) {
        alert("Invalid payment amount.");
        return;
      }

      setPaymentLoading(true);

      // Load Razorpay
      const razorpayLoaded =
        await loadRazorpay();

      if (!razorpayLoaded) {
        alert(
          "Unable to load payment gateway."
        );

        setPaymentLoading(false);
        return;
      }

      // ========================================
      // CREATE ORDER
      // ========================================

      const orderResponse = await fetch(
        "/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",

          body: JSON.stringify({
            amount: amount,
          }),
        }
      );

      const orderData =
        await orderResponse.json();

      console.log(
        "CREATE ORDER RESPONSE:",
        orderData
      );

      if (
        !orderResponse.ok ||
        !orderData.success
      ) {
        alert(
          orderData.message ||
            "Unable to create payment order."
        );

        setPaymentLoading(false);
        return;
      }

      const order = orderData.order;

      // ========================================
      // RAZORPAY CHECKOUT
      // ========================================

      const options = {
        key:
          process.env
            .NEXT_PUBLIC_RAZORPAY_KEY_ID,

        amount: order.amount,

        currency: order.currency || "INR",

        name: "OurHub",

        description:
          "Astrology Consultation",

        order_id: order.id,

        prefill: {
          name:
            user.fullName || "",

          email:
            user.email || "",

          contact:
            user.mobile || "",
        },

        theme: {
          color: "#FACC15",
        },

        handler:
          async function (
            razorpayResponse: any
          ) {
            try {
              console.log(
                "RAZORPAY SUCCESS:",
                razorpayResponse
              );

              // =================================
              // VERIFY PAYMENT
              // =================================

              const verifyResponse =
                await fetch(
                  "/api/payment/verify",
                  {
                    method: "POST",

                    headers: {
                      "Content-Type":
                        "application/json",
                    },

                    credentials: "include",

                    body: JSON.stringify({
                      razorpay_order_id:
                        razorpayResponse.razorpay_order_id,

                      razorpay_payment_id:
                        razorpayResponse.razorpay_payment_id,

                      razorpay_signature:
                        razorpayResponse.razorpay_signature,

                      panditId:
                        panditId,

                      panditPhone:
                        panditPhone,

                      panditName:
                        panditName,

                      amount:
                        amount,

                      minutes:
                        minutes,
                    }),
                  }
                );

              const verifyData =
                await verifyResponse.json();

              console.log(
                "VERIFY RESPONSE:",
                verifyData
              );

              // =================================
              // PAYMENT VERIFIED
              // =================================

              if (
                verifyResponse.ok &&
                verifyData.success
              ) {
                alert(
                  "Payment successful!"
                );

                router.push(
                  `/payment-success?paymentId=${encodeURIComponent(
                    razorpayResponse.razorpay_payment_id
                  )}&amount=${encodeURIComponent(
                    amount
                  )}&minutes=${encodeURIComponent(
                    minutes
                  )}&panditId=${encodeURIComponent(
                    panditId
                  )}&phone=${encodeURIComponent(
                    panditPhone
                  )}&name=${encodeURIComponent(
                    panditName
                  )}`
                );

                return;
              }

              // =================================
              // VERIFICATION FAILED
              // =================================

              alert(
                verifyData.message ||
                  "Payment verification failed."
              );
            } catch (error) {
              console.error(
                "VERIFY ERROR:",
                error
              );

              alert(
                "Payment verification failed. Please contact support."
              );
            } finally {
              setPaymentLoading(false);
            }
          },

        modal: {
          ondismiss:
            function () {
              console.log(
                "Razorpay checkout closed"
              );

              setPaymentLoading(false);
            },
        },
      };

      // ========================================
      // OPEN RAZORPAY
      // ========================================

      const Razorpay =
        (window as any).Razorpay;

      if (!Razorpay) {
        alert(
          "Payment gateway is not available."
        );

        setPaymentLoading(false);
        return;
      }

      const razorpay =
        new Razorpay(options);

      razorpay.on(
        "payment.failed",
        function (response: any) {
          console.error(
            "PAYMENT FAILED:",
            response
          );

          alert(
            response?.error?.description ||
              "Payment failed."
          );

          setPaymentLoading(false);
        }
      );

      razorpay.open();
    } catch (error) {
      console.error(
        "PAYMENT ERROR:",
        error
      );

      alert(
        "Something went wrong while starting payment."
      );

      setPaymentLoading(false);
    }
  }

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#071424] text-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-yellow-400" />

          <p className="mt-4 text-gray-400">
            Loading...
          </p>
        </div>
      </main>
    );
  }

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <main className="min-h-screen bg-[#071424] px-5 py-8 text-white">
      <div className="mx-auto max-w-md">

        {/* Header */}

        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            Astrology Consultation
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Secure payment powered by Razorpay
          </p>
        </div>

        {/* User */}

        <div className="rounded-3xl bg-[#132234] p-5">

          <p className="text-sm text-gray-400">
            Logged in as
          </p>

          <h2 className="mt-1 text-lg font-bold">
            {user?.fullName}
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            {user?.mobile}
          </p>
        </div>

        {/* Astrologer */}

        <div className="mt-5 rounded-3xl bg-[#132234] p-5">

          <p className="text-sm text-gray-400">
            Astrologer
          </p>

          <h2 className="mt-1 text-xl font-bold">
            {panditName}
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Consultation: {minutes} minutes
          </p>
        </div>

        {/* Amount */}

        <div className="mt-5 rounded-3xl bg-gradient-to-r from-yellow-500 to-yellow-300 p-6 text-black">

          <p className="text-sm font-medium">
            Payable Amount
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            ₹{amount}
          </h2>

          <p className="mt-2 text-sm">
            Secure online payment
          </p>
        </div>

        {/* Pay Button */}

        <button
          type="button"
          onClick={handlePayment}
          disabled={paymentLoading}
          className="mt-7 flex h-14 w-full items-center justify-center rounded-2xl bg-yellow-400 font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {paymentLoading
            ? "Processing Payment..."
            : `Pay ₹${amount}`}
        </button>

        {/* Security */}

        <p className="mt-5 text-center text-xs text-gray-500">
          Your payment is securely processed
          through Razorpay.
        </p>

      </div>
    </main>
  );
}