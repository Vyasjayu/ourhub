"use client";

import { ShieldCheck, ShieldAlert } from "lucide-react";

interface HeaderCardProps {
  provider: {
    fullName: string;
    mobile: string;
    category: string;
    profilePhoto?: string;
    isVerified: boolean;
  };
}

export default function HeaderCard({
  provider,
}: HeaderCardProps) {
  return (
    <div className="rounded-3xl bg-[#132234] border border-white/10 p-5">

      <div className="flex items-center gap-4">

        {/* Profile Image */}

        <div className="h-16 w-16 overflow-hidden rounded-full bg-yellow-400 flex items-center justify-center">

          {provider.profilePhoto ? (
            <img
              src={provider.profilePhoto}
              alt={provider.fullName}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-2xl font-bold text-black">
              {provider.fullName.charAt(0).toUpperCase()}
            </span>
          )}

        </div>

        {/* Info */}

        <div className="flex-1">

          <h2 className="text-xl font-bold text-white">
            {provider.fullName}
          </h2>

          <p className="text-sm text-gray-400">
            +91 {provider.mobile}
          </p>

          <span className="mt-2 inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-xs font-semibold text-yellow-400 capitalize">
            {provider.category}
          </span>

        </div>

      </div>

      {/* Verification */}

      <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#0b1828] px-4 py-3">

        <div>

          <p className="text-xs text-gray-400">
            Verification Status
          </p>

          <p className="mt-1 font-semibold text-white">
            {provider.isVerified
              ? "Verified Provider"
              : "Verification Pending"}
          </p>

        </div>

        {provider.isVerified ? (
          <ShieldCheck
            size={28}
            className="text-green-400"
          />
        ) : (
          <ShieldAlert
            size={28}
            className="text-yellow-400"
          />
        )}

      </div>

    </div>
  );
}