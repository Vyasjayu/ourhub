"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VerifyOtpContent() {
  const router = useRouter();
  const params = useSearchParams();

  const mobile = params.get("mobile") || "";
  const category = params.get("category") || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);


  const handleVerify = async () => {

    if (otp.length !== 6) {
      alert("Please enter 6 digit OTP");
      return;
    }


    try {

      setLoading(true);


      const response = await fetch(
        "/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile,
            otp,
          }),
        }
      );


      const data = await response.json();


      if (data.success) {

        localStorage.setItem(
          "providerMobile",
          mobile
        );


        router.push(
          `/provider/profile?category=${category}&mobile=${mobile}`
        );


      } else {

        alert(data.message || "Invalid OTP");

      }


    } catch (error) {

      console.log(error);

      alert("OTP verification failed");


    } finally {

      setLoading(false);

    }

  };



  const resendOtp = async () => {

    try {

      const response = await fetch(
        "/api/auth/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile,
          }),
        }
      );


      const data = await response.json();


      if (data.success) {

        alert("OTP Sent Successfully");

      } else {

        alert(data.message || "OTP send failed");

      }


    } catch(error) {

      console.log(error);

      alert("Something went wrong");

    }

  };



  return (
    <main className="min-h-screen bg-[#071424] text-white">

      <div className="mx-auto max-w-md px-5 py-8">


        <Link
          href={`/provider/login${category ? `?category=${category}` : ""}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"
        >
          <ArrowLeft size={20}/>
        </Link>



        <h1 className="mt-10 text-3xl font-bold">
          Verify OTP
        </h1>


        <p className="mt-2 text-gray-400">
          OTP sent to +91 {mobile}
        </p>



        <input
          value={otp}
          onChange={(e) =>
            setOtp(
              e.target.value.replace(/\D/g, "")
            )
          }
          maxLength={6}
          placeholder="Enter OTP"
          className="mt-8 h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-center text-2xl tracking-[10px] outline-none focus:border-yellow-400"
        />



        <button
          onClick={handleVerify}
          disabled={loading}
          className="mt-8 h-14 w-full rounded-2xl bg-yellow-400 text-lg font-bold text-black"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>



        <button
          onClick={resendOtp}
          className="mt-5 w-full text-sm text-yellow-400"
        >
          Resend OTP
        </button>


      </div>

    </main>
  );
}