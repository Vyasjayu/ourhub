"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  User,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (
      !form.fullName ||
      !form.mobile ||
      !form.password
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
        try {
      const res = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          mobile: form.mobile,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message);
        setLoading(false);
        return;
      }

      alert("Account Created Successfully");

      router.push("/auth/login");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050B14] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md rounded-3xl border border-yellow-500/20 bg-[#101C30] p-6 shadow-2xl">

        <div className="text-center">

          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-gray-400">
            Join OurHub Astrology
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
                      {/* Full Name */}

          <div className="relative">

            <User
              size={20}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#09111D] py-4 pl-12 pr-4 text-white outline-none focus:border-yellow-400"
            />

          </div>

          {/* Mobile */}

          <div className="relative">

            <Phone
              size={20}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              maxLength={10}
              className="w-full rounded-xl border border-white/10 bg-[#09111D] py-4 pl-12 pr-4 text-white outline-none focus:border-yellow-400"
            />

          </div>

          {/* Email */}

          <div className="relative">

            <Mail
              size={20}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email (Optional)"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#09111D] py-4 pl-12 pr-4 text-white outline-none focus:border-yellow-400"
            />

          </div>

          {/* Password */}

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#09111D] py-4 pl-12 pr-12 text-white outline-none focus:border-yellow-400"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-4 text-gray-400"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          {/* Confirm Password */}

          <div className="relative">

            <Lock
              size={20}
              className="absolute left-4 top-4 text-gray-400"
            />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-[#09111D] py-4 pl-12 pr-12 text-white outline-none focus:border-yellow-400"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-4 text-gray-400"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          {/* Create Button */}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-4 text-lg font-bold text-black transition hover:scale-[1.02] disabled:opacity-50"
          >
            {loading ? (
              "Creating..."
            ) : (
              <>
                Create Account
                <ArrowRight
                  size={20}
                  className="ml-2"
                />
              </>
            )}
          </button>

          <p className="text-center text-gray-400">

            Already have an account?

            <Link
              href="/auth/login"
              className="ml-2 font-semibold text-yellow-400"
            >
              Login
            </Link>

          </p>

        </form>

      </div>

    </main>

  );

}
    