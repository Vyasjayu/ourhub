"use client";

import { useEffect, useState } from "react";

type Provider = {
  _id: string;
  fullName: string;
  mobile: string;
  category: string;
  city: string;
  isVerified: boolean;
};

export default function RecentProviders() {
  const [providers, setProviders] = useState<Provider[]>([]);

  useEffect(() => {
    loadProviders();
  }, []);

  const loadProviders = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch("/api/admin/providers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.success) {
        setProviders(data.providers);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-8">

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-xl font-bold text-white">
          Recent Providers
        </h2>

        <button className="text-sm font-semibold text-yellow-400">
          View All
        </button>

      </div>

      <div className="space-y-3">

        {providers.length === 0 && (

          <div className="rounded-3xl bg-[#132234] p-6 text-center text-gray-400">
            No Providers Found
          </div>

        )}

        {providers.map((provider) => (

          <div
            key={provider._id}
            className="rounded-3xl bg-[#132234] p-5"
          >

            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-bold text-white">
                  {provider.fullName}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {provider.mobile}
                </p>

                <p className="mt-1 text-xs text-yellow-400 capitalize">
                  {provider.category}
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  {provider.city || "-"}
                </p>

              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  provider.isVerified
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {provider.isVerified ? "Verified" : "Pending"}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}