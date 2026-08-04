"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [form, setForm] = useState({
    mobile: "",
    password: "",
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

    if (!form.mobile || !form.password) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: form.mobile,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message);
        return;
      }

      alert("Login Successful");

      // पहले router.refresh()
      router.refresh();

      // फिर Profile Page पर भेजो
      router.push("/profile");

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

        {/* Header */}

        <div className="text-center">

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-gray-400">
            Login to continue
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          {/* Mobile Number */}

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-300">
              Mobile Number
            </label>

            <div className="relative">

              <Phone
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                maxLength={10}
                className="h-14 w-full rounded-2xl border border-white/10 bg-[#0B1627] pl-12 pr-4 text-white outline-none transition focus:border-yellow-400"
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>

            <div className="relative">

              <Lock
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="h-14 w-full rounded-2xl border border-white/10 bg-[#0B1627] pl-12 pr-14 text-white outline-none transition focus:border-yellow-400"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >

                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}

              </button>

            </div>

          </div>

          {/* Forgot Password */}

          <div className="flex justify-end">

            <Link
              href="/forgot-password"
              className="text-sm text-yellow-400 hover:text-yellow-300"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            disabled={loading}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-yellow-400 font-semibold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-60"
          >

            {loading ? (
              "Logging in..."
            ) : (
              <>
                Login
                <ArrowRight size={20} />
              </>
            )}

          </button>
          {/* Divider */}

          <div className="flex items-center gap-3">

            <div className="h-px flex-1 bg-white/10"></div>

            <span className="text-xs uppercase tracking-wider text-gray-500">
              OR
            </span>

            <div className="h-px flex-1 bg-white/10"></div>

          </div>

          {/* Continue as Provider */}

          <Link
            href="/provider/login"
            className="flex h-14 w-full items-center justify-center rounded-2xl border border-yellow-400 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Continue as Provider
          </Link>

          {/* Register */}

          <div className="pt-2 text-center text-sm text-gray-400">

            Don't have an account?

            <Link
              href="/auth/register"
              className="ml-2 font-semibold text-yellow-400 hover:text-yellow-300"
            >
              Register
            </Link>

          </div>

        </form>

        {/* Footer */}

        <div className="mt-8 text-center">

          <p className="text-xs leading-6 text-gray-500">
            By continuing, you agree to OurHub's
            Terms of Service & Privacy Policy.
          </p>

        </div>

      </div>

    </main>

  );
}