"use client";

import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle } from "lucide-react";

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-[#071424] text-white">
      <div className="mx-auto max-w-md px-5 py-6">

        <div className="flex items-center gap-4">
          <Link
            href="/provider/dashboard"
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
          >
            <ArrowLeft size={22} />
          </Link>

          <h1 className="text-2xl font-bold">
            Documents
          </h1>
        </div>

        <div className="mt-8 space-y-4">

          <Card title="Profile Photo" status="Pending" />

          <Card title="Aadhaar Card" status="Uploaded" />

          <Card title="PAN Card" status="Pending" />

          <Card title="Bank Verification" status="Pending" />

        </div>

      </div>
    </main>
  );
}

function Card({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="rounded-3xl bg-[#132234] p-5 flex justify-between items-center">

      <div className="flex gap-3 items-center">
        <FileText className="text-yellow-400" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm">{status}</p>
        </div>
      </div>

      {status === "Uploaded" && (
        <CheckCircle className="text-green-400" />
      )}

    </div>
  );
}