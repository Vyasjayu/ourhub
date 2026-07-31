"use client";

import {
  CheckCircle,
  Wallet,
  ArrowRight,
} from "lucide-react";

import {
  useRouter,
  useSearchParams,
} from "next/navigation";

import {
  useEffect,
  useRef,
} from "react";

export default function PaymentSuccessPage() {

  const router = useRouter();

  const params = useSearchParams();

  const called = useRef(false);

  useEffect(() => {

    if (called.current) return;

    called.current = true;

    createConsultation();

  }, [params]);



  async function createConsultation() {

    try {

      const paymentId =
        params.get("paymentId");

      const panditId =
        params.get("panditId");

      const panditPhone =
        params.get("phone");

      const amount =
        Number(params.get("amount") || 1);

      const duration =
        Number(params.get("minutes") || 1);

      console.log("📥 Payment Success Params", {
        paymentId,
        panditId,
        panditPhone,
        amount,
        duration,
      });

      if (!panditId) {
        console.error("❌ Pandit ID Missing");
        return;
      }

      const res = await fetch(
        "/api/consultation/create",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            userId:
              "6a67adbbdadfce1b3bf84fe8",

            panditId,

            panditPhone,

            amount,

            duration,

            paymentId,

          }),
        }
      );

      const data =
        await res.json();

      console.log(
        "✅ Consultation Response",
        data
      );

      if (!data.success) {

        alert(
          data.message ||
          "Consultation create failed"
        );

        return;

      }

      console.log(
        "✅ Consultation Created Successfully"
      );

    } catch (error) {

      console.error(
        "❌ Consultation Error",
        error
      );

      alert(
        "Consultation creation failed."
      );

    }

  }



  const startConsultation = () => {

    const panditId =
      params.get("panditId");

    if (!panditId) {

      alert("Pandit not found");

      return;

    }

    router.push(
      `/chat?panditId=${panditId}`
    );

  };



  return (

    <div
      className="
      min-h-screen
      bg-[#020617]
      flex
      justify-center
      items-center
      px-4
      "
    >

      <div
        className="
        w-full
        max-w-md
        rounded-3xl
        bg-[#111C30]
        border
        border-yellow-500/20
        p-8
        text-center
        "
      >

        <div className="flex justify-center">

          <CheckCircle
            size={80}
            className="text-green-400"
          />

        </div>

        <h1
          className="
          mt-5
          text-3xl
          font-black
          text-white
          "
        >
          Payment Successful 🎉
        </h1>

        <p
          className="
          mt-3
          text-gray-400
          "
        >
          Payment completed successfully.
          Connecting you with Pandit Ji...
        </p>

        <div
          className="
          mt-6
          rounded-2xl
          bg-yellow-500/10
          p-4
          flex
          items-center
          justify-center
          gap-3
          "
        >

          <Wallet
            className="text-yellow-400"
          />

          <span
            className="
            text-yellow-400
            font-bold
            "
          >
            Consultation Request Sent
          </span>

        </div>

        <button

          onClick={startConsultation}

          className="
          mt-8
          w-full
          rounded-2xl
          bg-yellow-400
          py-4
          font-black
          text-black
          flex
          justify-center
          items-center
          gap-2
          "

        >

          Start Consultation

          <ArrowRight size={20} />

        </button>

      </div>

    </div>

  );

}