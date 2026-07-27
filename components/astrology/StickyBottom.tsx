"use client";

import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Video,
  Wallet,
  Zap,
} from "lucide-react";

interface StickyBottomProps {
  walletBalance: number;
  pricePerMinute: number;
  onRecharge?: () => void;
}

export default function StickyBottom({
  walletBalance,
  pricePerMinute,
  onRecharge,
}: StickyBottomProps) {
  const canStart = walletBalance >= pricePerMinute;

  return (
    <div
      className="
        fixed
        bottom-0
        left-1/2
        z-50
        w-full
        max-w-md
        -translate-x-1/2
        border-t
        border-yellow-500/20
        bg-[#08111D]/95
        backdrop-blur-xl
        px-4
        py-4
        shadow-2xl
      "
    >
      {/* Wallet */}

      <div
        className="
          mb-4
          flex
          items-center
          justify-between
          rounded-2xl
          border
          border-yellow-500/20
          bg-[#111C30]
          p-4
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-yellow-500/10
            "
          >
            <Wallet
              size={24}
              className="text-yellow-400"
            />
          </div>

          <div>

            <p className="text-xs text-gray-400">
              Wallet Balance
            </p>

            <h3 className="text-xl font-bold text-white">
              ₹{walletBalance}
            </h3>

          </div>

        </div>

        <button
          onClick={onRecharge}
          className="
            rounded-xl
            bg-gradient-to-r
            from-yellow-400
            to-yellow-500
            px-5
            py-2.5
            font-semibold
            text-black
            transition
            hover:scale-105
          "
        >
          Recharge
        </button>

      </div>

      {/* Price */}

      <div
        className="
          mb-4
          flex
          items-center
          justify-center
          rounded-xl
          bg-green-500/10
          py-2
        "
      >
        <Zap
          size={16}
          className="mr-2 text-green-400"
        />

        <span className="font-semibold text-green-400">
          ₹{pricePerMinute}/minute Consultation
        </span>

      </div>

      {/* Buttons */}

      <div className="grid grid-cols-3 gap-3">

        <Link
          href={canStart ? "/consultation/chat" : "/wallet/recharge"}
          className={`
            flex
            flex-col
            items-center
            justify-center
            rounded-2xl
            py-4
            transition
            ${
              canStart
                ? "bg-[#111C30] hover:bg-[#18253A]"
                : "bg-[#111C30]/50 opacity-60"
            }
          `}
        >
          <MessageCircle
            size={24}
            className="text-green-400"
          />

          <span className="mt-2 text-sm text-white">
            Chat
          </span>
        </Link>

        <Link
          href={canStart ? "/consultation/call" : "/wallet/recharge"}
          className={`
            flex
            flex-col
            items-center
            justify-center
            rounded-2xl
            py-4
            transition
            ${
              canStart
                ? "bg-[#111C30] hover:bg-[#18253A]"
                : "bg-[#111C30]/50 opacity-60"
            }
          `}
        >
          <Phone
            size={24}
            className="text-blue-400"
          />

          <span className="mt-2 text-sm text-white">
            Call
          </span>
        </Link>

        <Link
          href={canStart ? "/consultation/video" : "/wallet/recharge"}
          className={`
            flex
            flex-col
            items-center
            justify-center
            rounded-2xl
            py-4
            transition
            ${
              canStart
                ? "bg-[#111C30] hover:bg-[#18253A]"
                : "bg-[#111C30]/50 opacity-60"
            }
          `}
        >
          <Video
            size={24}
            className="text-red-400"
          />

          <span className="mt-2 text-sm text-white">
            Video
          </span>
        </Link>

      </div>

      {/* Warning */}

      {!canStart && (
        <div
          className="
            mt-4
            rounded-xl
            border
            border-red-500/20
            bg-red-500/10
            p-3
            text-center
          "
        >
          <p className="text-sm text-red-300">
            Recharge your wallet to start Chat, Voice Call or Video Call.
          </p>
        </div>
      )}
    </div>
  );
}