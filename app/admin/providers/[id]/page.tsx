"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  Wallet,
  BadgeCheck,
} from "lucide-react";

type Provider = {
  _id: string;
  fullName: string;
  mobile: string;
  email: string;
  category: string;
  gender: string;
  dob: string;
  city: string;
  state: string;

  businessName: string;
  experience: string;
  languages: string;
  serviceArea: string;
  price: string;
  specialization: string;
  about: string;

  accountHolder: string;
  accountNumber: string;
  bankName: string;
 ifsc: string;
  upi: string;

  isVerified: boolean;
  isActive: boolean;
};

export default function ProviderDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProvider();
  }, []);

  async function loadProvider() {
    try {
      const res = await fetch(`/api/admin/providers?id=${id}`);
      const data = await res.json();

      if (data.success) {
        setProvider(data.provider);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#071424] flex items-center justify-center text-white">
        Loading...
      </main>
    );
  }

  if (!provider) {
    return (
      <main className="min-h-screen bg-[#071424] flex items-center justify-center text-white">
        Provider Not Found
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
            className="h-11 w-11 rounded-xl bg-[#132234] flex items-center justify-center"
          >
            <ArrowLeft size={20} />
          </button>

          <h1 className="text-2xl font-bold">
            Provider Details
          </h1>

        </div>

        {/* Profile */}

        <div className="mt-6 rounded-3xl bg-[#132234] p-6">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400 text-4xl font-bold text-black">

            {provider.fullName.charAt(0)}

          </div>

          <h2 className="mt-4 text-center text-2xl font-bold">

            {provider.fullName}

          </h2>

          <p className="text-center text-gray-400">

            {provider.category}

          </p>

        </div>

        {/* Basic */}

        <div className="mt-6 rounded-3xl bg-[#132234] p-5">

          <h2 className="mb-4 text-xl font-bold">

            Basic Details

          </h2>

          <Info icon={<User size={18}/>} title="Gender" value={provider.gender}/>
          <Info icon={<Phone size={18}/>} title="Mobile" value={provider.mobile}/>
          <Info icon={<Mail size={18}/>} title="Email" value={provider.email}/>
          <Info icon={<MapPin size={18}/>} title="Location" value={`${provider.city}, ${provider.state}`}/>
        </div>

        {/* Professional */}

        <div className="mt-6 rounded-3xl bg-[#132234] p-5">

          <h2 className="mb-4 text-xl font-bold">

            Professional

          </h2>

          <Info icon={<Briefcase size={18}/>} title="Business" value={provider.businessName}/>
          <Info icon={<Briefcase size={18}/>} title="Experience" value={provider.experience}/>
          <Info icon={<Briefcase size={18}/>} title="Languages" value={provider.languages}/>
          <Info icon={<Briefcase size={18}/>} title="Area" value={provider.serviceArea}/>
          <Info icon={<Wallet size={18}/>} title="Price" value={`₹ ${provider.price}`}/>
        </div>

        {/* Bank */}

        <div className="mt-6 rounded-3xl bg-[#132234] p-5">

          <h2 className="mb-4 text-xl font-bold">

            Bank Details

          </h2>

          <Info title="Account Holder" value={provider.accountHolder}/>
          <Info title="Account Number" value={provider.accountNumber}/>
          <Info title="Bank" value={provider.bankName}/>
          <Info title="IFSC" value={provider.ifsc}/>
          <Info title="UPI" value={provider.upi}/>
        </div>

        {/* Status */}

        <div className="mt-6 rounded-3xl bg-[#132234] p-5">

          <h2 className="mb-4 text-xl font-bold">

            Status

          </h2>

          <div className="flex items-center justify-between">

            <span>Verification</span>

            <span
              className={`rounded-full px-3 py-1 text-sm ${
                provider.isVerified
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            >
              {provider.isVerified ? "Verified" : "Pending"}
            </span>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-8 grid grid-cols-2 gap-4">

          <button
            className="rounded-2xl bg-green-600 py-4 font-bold"
          >
            <div className="flex justify-center gap-2">

              <BadgeCheck size={20}/>

              Verify

            </div>
          </button>

          <button
            className="rounded-2xl bg-red-600 py-4 font-bold"
          >
            Reject
          </button>

        </div>

      </div>

    </main>
  );
}

function Info({
  icon,
  title,
  value,
}:{
  icon?:React.ReactNode;
  title:string;
  value:string;
}){

  return(

    <div className="flex justify-between border-b border-white/5 py-3">

      <div className="flex items-center gap-2">

        {icon}

        <span className="text-gray-400">

          {title}

        </span>

      </div>

      <span className="font-medium">

        {value || "-"}

      </span>

    </div>

  );

}