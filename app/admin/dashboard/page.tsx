"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/admin/Header";
import DashboardCards from "@/components/admin/DashboardCards";
import QuickActions from "@/components/admin/QuickActions";
import RecentProviders from "@/components/admin/RecentProviders";



type DashboardData = {
  totalProviders: number;
  totalCustomers: number;
  totalBookings: number;
  pendingProviders: number;
};

export default function AdminDashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState<DashboardData>({
    totalProviders: 0,
    totalCustomers: 0,
    totalBookings: 0,
    pendingProviders: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      router.replace("/admin/login");
      return;
    }

    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch("/api/admin/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!data.success) {
        localStorage.removeItem("adminToken");
        router.replace("/admin/login");
        return;
      }

      setStats({
        totalProviders: data.stats.totalProviders,
        totalCustomers: data.stats.totalCustomers,
        totalBookings: data.stats.totalBookings,
        pendingProviders: data.stats.pendingProviders,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#071424] flex items-center justify-center text-white">
        Loading Dashboard...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#071424] pb-28">

      <div className="mx-auto max-w-md px-4 py-5">

        <Header />

        <DashboardCards stats={stats} />

        <QuickActions />

        <RecentProviders />

      </div>

    </main>
  );
}