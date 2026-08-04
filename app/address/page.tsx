"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  MapPin,
  Home,
  Building2,
  Plus,
  CheckCircle,
} from "lucide-react";

export default function AddressPage() {
  const router = useRouter();

  const addresses = [
    {
      id: 1,
      type: "Home",
      icon: <Home size={22} className="text-yellow-400" />,
      name: "Jayant Vyas",
      phone: "8878632431",
      address:
        "123, Main Road, Ratlam, Madhya Pradesh - 457001",
      default: true,
    },
    {
      id: 2,
      type: "Office",
      icon: <Building2 size={22} className="text-blue-400" />,
      name: "Jayant Vyas",
      phone: "8878632431",
      address:
        "AB Road, Vijay Nagar, Indore, Madhya Pradesh - 452010",
      default: false,
    },
  ];

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
            Saved Address
          </h1>

        </div>

      </div>

      <div className="mx-auto max-w-md px-5">

        {/* Add Address */}

        <button
          className="mt-6 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-yellow-400 font-semibold text-black transition hover:bg-yellow-300"
        >
          <Plus size={22} />
          Add New Address
        </button>

        {/* Address List */}

        <div className="mt-6 space-y-5">

          {addresses.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-[#13233C] p-5"
            >

              <div className="flex items-start justify-between">

                <div className="flex gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                    {item.icon}
                  </div>

                  <div>

                    <div className="flex items-center gap-2">

                      <h2 className="font-bold">
                        {item.type}
                      </h2>

                      {item.default && (
                        <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs text-green-400">
                          Default
                        </span>
                      )}

                    </div>

                    <p className="mt-2 font-medium">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-400">
                      {item.phone}
                    </p>

                  </div>

                </div>

                {item.default && (
                  <CheckCircle
                    size={22}
                    className="text-green-400"
                  />
                )}

              </div>

              <div className="mt-4 flex gap-3">

                <MapPin
                  size={18}
                  className="mt-1 text-yellow-400"
                />

                <p className="text-sm leading-6 text-gray-300">
                  {item.address}
                </p>

              </div>

              <div className="mt-5 flex gap-3">

                <button
                  className="flex-1 rounded-xl border border-yellow-400 py-3 font-medium text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                >
                  Edit
                </button>

                <button
                  className="flex-1 rounded-xl border border-red-500 py-3 font-medium text-red-400 transition hover:bg-red-500 hover:text-white"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}