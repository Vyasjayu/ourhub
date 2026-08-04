"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  User,
  Wallet,
  MapPin,
  Bell,
  Settings,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  Loader2,
} from "lucide-react";

type UserType = {
  id: string;
  fullName: string;
  email: string;
  mobile: string;
  profilePhoto?: string;
  walletBalance?: number;
  city?: string;
  state?: string;
};

export default function ProfilePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const res = await fetch("/api/user/me");

      const data = await res.json();

      if (!data.success) {
        router.push("/auth/login");
        return;
      }

      setUser(data.user);
    } catch (error) {
      console.error(error);
      router.push("/auth/login");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      const res = await fetch("/api/user/logout", {
        method: "POST",
      });

      const data = await res.json();

      if (data.success) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      alert("Logout failed");
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#071424]">
        <Loader2
          size={40}
          className="animate-spin text-yellow-400"
        />
      </main>
    );
  }
  return (
  <main className="min-h-screen bg-[#071424] pb-28">

    {/* Header */}

    <div className="sticky top-0 z-20 border-b border-white/10 bg-[#071424]/95 backdrop-blur">

      <div className="mx-auto flex max-w-md items-center justify-between px-5 py-5">

        <h1 className="text-2xl font-bold text-white">
          My Profile
        </h1>

        <button
          onClick={() => router.push("/")}
          className="rounded-xl border border-white/10 px-4 py-2 text-sm text-gray-300"
        >
          Home
        </button>

      </div>

    </div>

    <div className="mx-auto max-w-md px-5">

      {/* Profile Card */}

      <div className="mt-6 overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-[#13233C] to-[#0B1527] p-6 shadow-xl">

        <div className="flex flex-col items-center">

          {/* Profile Photo */}

          <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-4 border-yellow-400 bg-[#1A2942]">

            {user?.profilePhoto ? (

              <img
                src={user.profilePhoto}
                alt="Profile"
                className="h-full w-full object-cover"
              />

            ) : (

              <User
                size={44}
                className="text-yellow-400"
              />

            )}

          </div>

          {/* Name */}

          <h2 className="mt-4 text-xl font-bold text-white">

            {user?.fullName}

          </h2>

          {/* Mobile */}

          <p className="mt-1 text-sm text-gray-400">

            {user?.mobile}

          </p>

          {/* Email */}

          <p className="mt-1 text-center text-sm text-gray-500">

            {user?.email || "No email added"}

          </p>

        </div>

        {/* Wallet */}

        <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-[#1A2942] p-4">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-gray-400">
                Wallet Balance
              </p>

              <h3 className="mt-1 text-2xl font-bold text-yellow-400">

                ₹{user?.walletBalance ?? 0}

              </h3>

            </div>

            <div className="rounded-2xl bg-yellow-400/10 p-3">

              <Wallet
                size={30}
                className="text-yellow-400"
              />

            </div>

          </div>

        </div>

        {/* City */}

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">

          <MapPin size={18} />

          <span>

            {user?.city || "City"},
            {" "}
            {user?.state || "State"}

          </span>

        </div>

      </div>
            {/* Menu */}

      <div className="mt-6 space-y-3">

        <MenuItem
          icon={<Wallet size={22} />}
          title="My Wallet"
          subtitle="View wallet & transactions"
          onClick={() => router.push("/wallet")}
        />

        <MenuItem
          icon={<Bell size={22} />}
          title="Notifications"
          subtitle="Latest updates & alerts"
          onClick={() => router.push("/notifications")}
        />

        <MenuItem
          icon={<MapPin size={22} />}
          title="Saved Address"
          subtitle="Manage your addresses"
          onClick={() => router.push("/address")}
        />

        <MenuItem
          icon={<Settings size={22} />}
          title="Settings"
          subtitle="App preferences"
          onClick={() => router.push("/settings")}
        />

        <MenuItem
          icon={<Shield size={22} />}
          title="Privacy Policy"
          subtitle="Terms & privacy"
          onClick={() => router.push("/privacy")}
        />

        <MenuItem
          icon={<HelpCircle size={22} />}
          title="Help & Support"
          subtitle="Contact our team"
          onClick={() => router.push("/support")}
        />

      </div>

      {/* Logout Button */}

      <button
        onClick={handleLogout}
        className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-red-500 font-semibold text-white transition hover:bg-red-600"
      >

        <LogOut size={22} />

        Logout

      </button>

    </div>

  </main>
);
}

type MenuItemProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick: () => void;
};

function MenuItem({
  icon,
  title,
  subtitle,
  onClick,
}: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#13233C] p-4 transition hover:border-yellow-400 hover:bg-[#1A2942]"
    >
      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
          {icon}
        </div>

        <div className="text-left">

          <h3 className="text-sm font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-xs text-gray-400">
            {subtitle}
          </p>

        </div>

      </div>

      <ChevronRight
        size={20}
        className="text-gray-500"
      />

    </button>
  );
}