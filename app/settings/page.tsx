"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  User,
  Bell,
  Lock,
  Globe,
  Moon,
  ChevronRight,
  LogOut,
} from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await fetch("/api/user/logout", {
        method: "POST",
      });

      router.push("/auth/login");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Logout failed");
    }
  }

  return (
    <main className="min-h-screen bg-[#071424] text-white pb-10">

      {/* Header */}

      <div className="sticky top-0 z-20 border-b border-white/10 bg-[#071424]/95 backdrop-blur">

        <div className="mx-auto flex max-w-md items-center gap-4 px-5 py-5">

          <button
            onClick={() => router.back()}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
          >
            <ArrowLeft size={22} />
          </button>

          <h1 className="text-2xl font-bold">
            Settings
          </h1>

        </div>

      </div>

      <div className="mx-auto max-w-md px-5">

        {/* Account */}

        <div className="mt-6 rounded-3xl border border-yellow-400/20 bg-[#13233C] p-5">

          <h2 className="mb-5 text-lg font-bold">
            Account
          </h2>

          <MenuItem
            icon={<User size={22} />}
            title="Edit Profile"
            subtitle="Update your personal information"
            onClick={() => router.push("/profile/edit")}
          />

          <MenuItem
            icon={<Lock size={22} />}
            title="Change Password"
            subtitle="Update your account password"
            onClick={() => router.push("/change-password")}
          />

        </div>

        {/* App Settings */}

        <div className="mt-6 rounded-3xl border border-yellow-400/20 bg-[#13233C] p-5">

          <h2 className="mb-5 text-lg font-bold">
            App Settings
          </h2>

          <MenuItem
            icon={<Bell size={22} />}
            title="Notifications"
            subtitle="Manage notification settings"
            onClick={() => router.push("/notifications")}
          />

          <MenuItem
            icon={<Moon size={22} />}
            title="Appearance"
            subtitle="Dark mode enabled"
            onClick={() => alert("Coming Soon")}
          />

          <MenuItem
            icon={<Globe size={22} />}
            title="Language"
            subtitle="English"
            onClick={() => alert("Coming Soon")}
          />

        </div>

        {/* Logout */}

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
      className="mb-4 flex w-full items-center justify-between rounded-2xl border border-white/10 bg-[#1A2942] p-4 transition hover:border-yellow-400"
    >
      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
          {icon}
        </div>

        <div className="text-left">

          <h3 className="font-semibold">
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