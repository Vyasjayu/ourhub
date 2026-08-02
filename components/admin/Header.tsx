"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, LogOut, ShieldCheck } from "lucide-react";

export default function Header() {
  const router = useRouter();

  const [adminName, setAdminName] = useState("Admin");

  useEffect(() => {
    const name = localStorage.getItem("adminName");

    if (name) {
      setAdminName(name);
    }
  }, []);

  const handleLogout = () => {
    const ok = confirm("Logout from Admin Panel?");

    if (!ok) return;

    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");

    router.replace("/admin/login");
  };

  return (
    <>
      {/* Top Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400">

            <ShieldCheck
              size={28}
              className="text-black"
            />

          </div>

          <div>

            <p className="text-sm text-gray-400">
              Welcome Back
            </p>

            <h2 className="text-xl font-bold text-white capitalize">
              {adminName}
            </h2>

          </div>

        </div>

        <button
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#132234] text-yellow-400"
        >
          <Bell size={22} />
        </button>

      </div>

      {/* Admin Card */}

      <div className="mt-6 rounded-3xl bg-gradient-to-r from-yellow-400 to-yellow-500 p-5">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-black/70">
              OurHub Services
            </p>

            <h1 className="mt-1 text-2xl font-bold text-black">
              Super Admin
            </h1>

            <p className="mt-2 text-sm text-black/80">
              Manage Providers, Customers,
              Bookings & Earnings
            </p>

          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl bg-black/10 p-3 transition hover:bg-black/20"
          >
            <LogOut
              size={22}
              className="text-black"
            />
          </button>

        </div>

      </div>

      {/* Today's Summary */}

      <div className="mt-5 rounded-3xl bg-[#132234] p-5">

        <h3 className="text-lg font-semibold text-white">
          Today's Summary
        </h3>

        <div className="mt-4 grid grid-cols-3 gap-3">

          <div className="rounded-2xl bg-[#1A2D42] p-3 text-center">

            <p className="text-xs text-gray-400">
              Bookings
            </p>

            <h4 className="mt-2 text-xl font-bold text-yellow-400">
              0
            </h4>

          </div>

          <div className="rounded-2xl bg-[#1A2D42] p-3 text-center">

            <p className="text-xs text-gray-400">
              Revenue
            </p>

            <h4 className="mt-2 text-xl font-bold text-green-400">
              ₹0
            </h4>

          </div>

          <div className="rounded-2xl bg-[#1A2D42] p-3 text-center">

            <p className="text-xs text-gray-400">
              Pending
            </p>

            <h4 className="mt-2 text-xl font-bold text-red-400">
              0
            </h4>

          </div>

        </div>

      </div>
    </>
  );
}