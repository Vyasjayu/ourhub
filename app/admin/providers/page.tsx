"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowLeft,
  BadgeCheck,
  CircleOff,
  User,
} from "lucide-react";

type Provider = {
  _id: string;

  // Private
  fullName: string;
  mobile: string;
  email: string;

  // Public
  displayName: string;
  profilePhoto: string;

  category: string;
  city: string;
  state: string;

  experience: string;
  specialization: string;
  languages: string;
  price: string;

  rating: number;
  totalReviews: number;
  totalConsultations: number;

  isVerified: boolean;
  isActive: boolean;
  isProfilePublic: boolean;
};

export default function AdminProvidersPage() {
  const router = useRouter();

  const [providers, setProviders] = useState<Provider[]>([]);
  const [filtered, setFiltered] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProviders();
  }, []);

  useEffect(() => {
    const keyword = search.toLowerCase();

    setFiltered(
      providers.filter(
        (provider) =>
          provider.fullName
            .toLowerCase()
            .includes(keyword) ||
          provider.mobile.includes(keyword) ||
          provider.category
            .toLowerCase()
            .includes(keyword) ||
          provider.displayName
            .toLowerCase()
            .includes(keyword)
      )
    );
  }, [search, providers]);

  async function loadProviders() {
    try {
      const res = await fetch("/api/admin/providers");
      const data = await res.json();

      if (data.success) {
        setProviders(data.providers);
        setFiltered(data.providers);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

 async function handleVerify(id: string) {
  try {
    const res = await fetch(`/api/admin/providers/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "approved",
      }),
    });

    const data = await res.json();

    if (data.success) {
      alert("Provider Verified");
      loadProviders();
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
}

  async function handleReject(id: string) {
    try {
      const res = await fetch(
        `/api/admin/providers/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            action: "reject",
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Provider Rejected");
        loadProviders();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#071424] text-white">
        Loading Providers...
      </main>
    );
  }
    return (
    <main className="min-h-screen bg-[#071424] text-white pb-24">

      <div className="mx-auto max-w-md px-4 py-5">

        {/* Header */}

        <div className="flex items-center gap-3">

          <button
            onClick={() => router.back()}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#132234]"
          >
            <ArrowLeft size={20} />
          </button>

          <div>

            <h1 className="text-2xl font-bold">
              All Providers
            </h1>

            <p className="text-sm text-gray-400">
              {filtered.length} Providers
            </p>

          </div>

        </div>

        {/* Search */}

        <div className="relative mt-5">

          <Search
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />

          <input
            placeholder="Search Provider..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-2xl bg-[#132234] py-4 pl-12 pr-4 outline-none"
          />

        </div>

        {/* List */}

        <div className="mt-6 space-y-4">

          {filtered.length === 0 && (

            <div className="rounded-2xl bg-[#132234] p-8 text-center">

              No Provider Found

            </div>

          )}

          {filtered.map((provider) => (

            <div
              key={provider._id}
              className="rounded-3xl bg-[#132234] p-5"
            >

              <div className="flex gap-4">

                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-yellow-400 text-xl font-bold text-black">

                  {provider.profilePhoto ? (

                    <img
                      src={provider.profilePhoto}
                      alt={provider.displayName}
                      className="h-full w-full object-cover"
                    />

                  ) : (

                    provider.displayName?.charAt(0) ||
                    provider.fullName.charAt(0)

                  )}

                </div>

                <div className="flex-1">

                  <h2 className="text-lg font-bold">

                    {provider.displayName || provider.fullName}

                  </h2>

                  <p className="text-xs text-gray-500">

                    Real Name :
                    {" "}
                    {provider.fullName}

                  </p>

                  <p className="mt-1 text-sm text-gray-400">

                    {provider.mobile}

                  </p>

                  <p className="text-xs text-gray-500">

                    {provider.category}

                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">

                      📍 {provider.city || "N/A"}

                    </span>

                    <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-400">

                      💼 {provider.experience || "0 Year"}

                    </span>

                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">

                      ₹ {provider.price || "0"}

                    </span>

                    <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs text-orange-400">

                      ⭐ {provider.rating || 5}

                    </span>

                  </div>

                </div>

              </div>

              {/* Status */}

              <div className="mt-5 flex flex-wrap items-center justify-between gap-2">

                <div>

                  {provider.isVerified ? (

                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">

                      Verified

                    </span>

                  ) : (

                    <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-400">

                      Pending Verification

                    </span>

                  )}

                </div>

                <div>

                  {provider.isActive ? (

                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">

                      Active

                    </span>

                  ) : (

                    <span className="rounded-full bg-gray-600/30 px-3 py-1 text-xs text-gray-300">

                      Inactive

                    </span>

                  )}

                </div>

                <div>

                  {provider.isProfilePublic ? (

                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">

                      Public

                    </span>

                  ) : (

                    <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs text-red-400">

                      Private

                    </span>

                  )}

                </div>

              </div>

              {/* Action Buttons */}

              <div className="mt-5 grid grid-cols-2 gap-3">

            
                              <button
                  onClick={() =>
                    router.push(
                      `/admin/providers/${provider._id}`
                    )
                  }
                  className="flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 py-3 font-semibold text-black"
                >
                  <User size={18} />
                  View
                </button>

                <button
                  onClick={() =>
                    router.push(
                      `/admin/providers/edit/${provider._id}`
                    )
                  }
                  className="rounded-2xl bg-blue-600 py-3 font-semibold text-white"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleVerify(provider._id)
                  }
                  disabled={provider.isVerified}
                  className={`flex items-center justify-center gap-2 rounded-2xl py-3 font-semibold transition ${
                    provider.isVerified
                      ? "cursor-not-allowed bg-green-900 text-green-300"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  <BadgeCheck size={18} />

                  {provider.isVerified
                    ? "Verified"
                    : "Verify"}
                </button>

                <button
                  onClick={() =>
                    handleReject(provider._id)
                  }
                  className="flex items-center justify-center gap-2 rounded-2xl bg-red-600 py-3 font-semibold transition hover:bg-red-700"
                >
                  <CircleOff size={18} />
                  Reject
                </button>
                </div>

              </div>

            // </div>

          ))}

        </div>

      </div>

    </main>
  );
}