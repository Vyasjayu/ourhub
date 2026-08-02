"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User } from "lucide-react";

export default function ProviderLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || "";

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

 const handleLogin = async () => {
  if (!loginId || !password) {
    alert("Please enter Login ID and Password");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch("/api/provider/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        loginId,
        password,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      alert(data.message);
      return;
    }

    // ✅ Save provider data
    localStorage.setItem(
      "providerMobile",
      data.provider.mobile
    );

    localStorage.setItem(
      "providerId",
      data.provider.id
    );

    localStorage.setItem(
      "providerName",
      data.provider.fullName
    );

    localStorage.setItem(
      "providerCategory",
      data.provider.category
    );

    router.push("/provider/dashboard");

  } catch (error) {
    console.error(error);
    alert("Login Failed");
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

        <div className="mt-10">

          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-yellow-400 text-black">
            <User size={34} />
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            Provider Login
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Login using your Login ID and Password.
          </p>

        </div>

        <div className="mt-10">

          <label className="mb-2 block text-sm">
            Login ID
          </label>

          <input
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            placeholder="Enter Login ID"
            className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-lg outline-none focus:border-yellow-400"
          />

        </div>

        <div className="mt-6">

          <label className="mb-2 block text-sm">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-lg outline-none focus:border-yellow-400"
          />

        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-8 h-14 w-full rounded-2xl bg-yellow-400 text-lg font-bold text-black"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <Link
          href={`/provider/signup${category ? `?category=${category}` : ""}`}
          className="mt-6 block text-center text-sm text-yellow-400"
        >
          New Provider? Create Account
        </Link>

      </div>
    </main>
  );
}