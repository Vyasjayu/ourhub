"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProviderSignupContent() {
  const router = useRouter();
  const params = useSearchParams();

  const category = params.get("category") || "";

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const updateField = (
    key: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };


  const handleSignup = async () => {

    if (
      !form.fullName ||
      !form.mobile ||
      !form.username ||
      !form.password
    ) {
      alert("Please fill all required fields.");
      return;
    }


    if (form.mobile.length !== 10) {
      alert("Enter valid mobile number.");
      return;
    }


    if (form.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }


    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }


    try {

      setLoading(true);


      const response = await fetch(
        "/api/provider/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            ...form,
            category,
          }),
        }
      );


      const data = await response.json();


      if (!data.success) {
        alert(data.message || "Signup failed");
        return;
      }


      alert("Account Created Successfully");


      localStorage.setItem(
        "providerMobile",
        form.mobile
      );


      localStorage.setItem(
        "providerCategory",
        category
      );


      router.push(
        `/provider/profile?category=${category}&mobile=${form.mobile}`
      );


    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    } finally {

      setLoading(false);

    }

  };


  return (
    <main className="min-h-screen bg-[#071424] text-white">

      <div className="mx-auto max-w-md px-5 py-8">


        <Link
          href={`/provider/category${category ? `?category=${category}` : ""}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"
        >
          <ArrowLeft size={20} />
        </Link>



        <h1 className="mt-8 text-3xl font-bold">
          Provider Signup
        </h1>


        <p className="mt-2 text-gray-400">
          Create your provider account.
        </p>



        <div className="mt-8 space-y-4">


          <input
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) =>
              updateField(
                "fullName",
                e.target.value
              )
            }
            className="h-14 w-full rounded-2xl bg-white/5 px-4 outline-none"
          />



          <input
            placeholder="Mobile Number"
            maxLength={10}
            value={form.mobile}
            onChange={(e) =>
              updateField(
                "mobile",
                e.target.value.replace(/\D/g, "")
              )
            }
            className="h-14 w-full rounded-2xl bg-white/5 px-4 outline-none"
          />



          <input
            placeholder="Email (Optional)"
            value={form.email}
            onChange={(e) =>
              updateField(
                "email",
                e.target.value
              )
            }
            className="h-14 w-full rounded-2xl bg-white/5 px-4 outline-none"
          />



          <input
            placeholder="Username"
            value={form.username}
            onChange={(e) =>
              updateField(
                "username",
                e.target.value
              )
            }
            className="h-14 w-full rounded-2xl bg-white/5 px-4 outline-none"
          />



          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              updateField(
                "password",
                e.target.value
              )
            }
            className="h-14 w-full rounded-2xl bg-white/5 px-4 outline-none"
          />



          <input
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              updateField(
                "confirmPassword",
                e.target.value
              )
            }
            className="h-14 w-full rounded-2xl bg-white/5 px-4 outline-none"
          />


        </div>




        <button
          onClick={handleSignup}
          disabled={loading}
          className="mt-8 h-14 w-full rounded-2xl bg-yellow-400 font-bold text-black"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>



      </div>

    </main>
  );
}