"use client";

import { ArrowRight } from "lucide-react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  actionText?: string;
  onAction?: () => void;
}

export default function SectionTitle({
  title,
  subtitle,
  actionText,
  onAction,
}: SectionTitleProps) {
  return (
    <div className="mb-5 flex items-end justify-between px-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-400">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && (
        <button
          onClick={onAction}
          className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-2 text-sm font-medium text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
        >
          {actionText}
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
}