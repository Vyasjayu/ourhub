"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function PaymentSuccessClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState(
    "Payment Successful"
  );

  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function createConsultation() {
      try {
        // ==========================================
        // GET PAYMENT DETAILS
        // ==========================================

        const paymentId =
          searchParams.get("paymentId");

        const panditId =
          searchParams.get("panditId");

        const amount = Number(
          searchParams.get("amount") || 0
        );

        // Payment page is sending "minutes"
        const minutes = Number(
          searchParams.get("minutes") ||
            searchParams.get("duration") ||
            0
        );

        const panditPhone =
          searchParams.get("phone") || "";

        const panditName =
          searchParams.get("name") || "";

        console.log(
          "================================"
        );

        console.log(
          "PAYMENT SUCCESS PAGE"
        );

        console.log(
          "paymentId:",
          paymentId
        );

        console.log(
          "panditId:",
          panditId
        );

        console.log(
          "amount:",
          amount
        );

        console.log(
          "minutes:",
          minutes
        );

        console.log(
          "panditName:",
          panditName
        );

        console.log(
          "================================"
        );

        // ==========================================
        // VALIDATION
        // ==========================================

        if (!paymentId) {
          setMessage(
            "Payment ID missing"
          );

          setError(
            "Payment information was not found."
          );

          return;
        }

        if (!panditId) {
          setMessage(
            "Astrologer information missing"
          );

          setError(
            "Astrologer information was not found."
          );

          return;
        }

        if (!amount || amount <= 0) {
          setMessage(
            "Invalid payment amount"
          );

          setError(
            "Payment amount is invalid."
          );

          return;
        }

        if (!minutes || minutes <= 0) {
          setMessage(
            "Consultation duration missing"
          );

          setError(
            "Consultation duration was not found."
          );

          return;
        }

        // ==========================================
        // CREATE CONSULTATION
        // ==========================================

        const res = await fetch(
          "/api/consultation/create",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            credentials: "include",

            body: JSON.stringify({
              panditId,

              amount,

              duration: minutes,

              paymentId,

              panditPhone,

              panditName,
            }),
          }
        );

        const data = await res.json();

        console.log(
          "CONSULTATION CREATE RESPONSE:",
          data
        );

        // ==========================================
        // HANDLE RESPONSE
        // ==========================================

        if (!res.ok || !data.success) {
          setMessage(
            data.message ||
              "Consultation creation failed"
          );

          setError(
            data.message ||
              "Unable to create consultation."
          );

          return;
        }

        // ==========================================
        // SUCCESS
        // ==========================================

        if (!cancelled) {
          setMessage(
            "Consultation Started"
          );

          setError("");

          setTimeout(() => {
            router.push(
              `/chat?panditId=${encodeURIComponent(
                panditId
              )}`
            );
          }, 1000);
        }
      } catch (error) {
        console.error(
          "CREATE CONSULTATION ERROR:",
          error
        );

        if (!cancelled) {
          setMessage(
            "Something went wrong"
          );

          setError(
            "Unable to create consultation. Please contact support."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    createConsultation();

    return () => {
      cancelled = true;
    };
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050B14]">
      <div className="mx-4 w-full max-w-md rounded-3xl bg-[#111C30] p-8 text-center shadow-2xl">

        {/* Icon */}

        <div className="mb-4 text-5xl">
          {loading ? "⏳" : "✅"}
        </div>

        {/* Message */}

        <h1 className="text-xl font-bold text-white">
          {message}
        </h1>

        {/* Loading */}

        {loading && (
          <p className="mt-3 text-sm text-gray-400">
            Creating consultation...
          </p>
        )}

        {/* Error */}

        {!loading && error && (
          <>
            <p className="mt-4 text-sm text-red-400">
              {error}
            </p>

            <button
              onClick={() =>
                router.push(
                  "/provider/dashboard"
                )
              }
              className="mt-6 rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
            >
              Go to Dashboard
            </button>
          </>
        )}

        {/* Success */}

        {!loading && !error && (
          <p className="mt-3 text-sm text-gray-400">
            Connecting you with the astrologer...
          </p>
        )}
      </div>
    </div>
  );
}