"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      alert("Please enter Username and Password");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message);
        return;
      }

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminName", data.admin.username);

      router.push("/admin/dashboard");
    } catch (err) {
      console.log(err);
      alert("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#071424] text-white flex items-center justify-center px-5">

      <div className="w-full max-w-md rounded-3xl bg-[#132234] p-6 border border-white/10">

        <div className="flex justify-center">

          <div className="h-20 w-20 rounded-full bg-yellow-400 flex items-center justify-center">

            <ShieldCheck
              size={42}
              className="text-black"
            />

          </div>

        </div>

        <h1 className="mt-6 text-center text-3xl font-bold">

          Admin Login

        </h1>

        <p className="mt-2 text-center text-gray-400">

          OurHub Super Admin

        </p>

        <div className="mt-8">

          <label className="text-sm">

            Username

          </label>

          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            className="mt-2 h-14 w-full rounded-2xl border border-white/10 bg-[#071424] px-4 outline-none"
          />

        </div>

        <div className="mt-5">

          <label className="text-sm">

            Password

          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="mt-2 h-14 w-full rounded-2xl border border-white/10 bg-[#071424] px-4 outline-none"
          />

        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-8 h-14 w-full rounded-2xl bg-yellow-400 font-bold text-black"
        >
          {loading ? "Logging..." : "Login"}
        </button>

      </div>

    </main>
  );
}