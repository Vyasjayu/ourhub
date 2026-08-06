"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import ProgressBar from "@/components/provider/ProgressBar";
import BasicStep from "@/components/provider/BasicStep";
import ProfessionalStep from "@/components/provider/ProfessionalStep";
import DocumentStep from "@/components/provider/DocumentStep";
import BankStep from "@/components/provider/BankStep";
import ReviewStep from "@/components/provider/ReviewStep";

export default function ProviderProfileContent() {
  const router = useRouter();

  const [mobile, setMobile] = useState("");
  const [category, setCategory] = useState("");

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    // Basic
    displayName: "",
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",
    city: "",
    state: "",

    // Professional
    businessName: "",
    experience: "",
    languages: "",
    serviceArea: "",
    price: "",
    specialization: "",
    about: "",

    // Documents
    // Documents
profilePhoto: null as string | File | null,
aadhaar: null as string | File | null,
pan: null as string | File | null,

    // Bank
    accountHolder: "",
    accountNumber: "",
    ifsc: "",
    bankName: "",
    upi: "",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedMobile =
      localStorage.getItem("providerMobile") || "";

    const storedCategory =
      localStorage.getItem("providerCategory") || "";

    setMobile(storedMobile);
    setCategory(storedCategory);

    const loadProfile = async () => {
      try {
        if (!storedMobile) {
          setLoading(false);
          return;
        }

        const res = await fetch(
          `/api/provider/me?mobile=${storedMobile}`
        );

        const data = await res.json();

        if (data.success) {
          const p = data.provider;
setForm({
  // Basic
  displayName: p.displayName || "",
  fullName: p.fullName || "",
  email: p.email || "",
  mobile: p.mobile || "",
  gender: p.gender || "",
  dob: p.dob || "",
  city: p.city || "",
  state: p.state || "",

  // Professional
  businessName: p.businessName || "",
  experience: p.experience || "",
  languages: p.languages || "",
  serviceArea: p.serviceArea || "",
  price: p.price || "",
  specialization: p.specialization || "",
  about: p.about || "",

  // Documents
 // Documents
profilePhoto: p.profilePhoto || null,
aadhaar: p.aadhaar || null,
pan: p.pan || null,

  // Bank
  accountHolder: p.accountHolder || "",
  accountNumber: p.accountNumber || "",
  ifsc: p.ifsc || "",
  bankName: p.bankName || "",
  upi: p.upi || "",
});
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);
const calculateProgress = () => {
  const fields = [
    form.displayName,
    form.fullName,
    form.email,
    form.mobile,
    form.gender,
    form.dob,
    form.city,
    form.state,

    form.businessName,
    form.experience,
    form.languages,
    form.serviceArea,
    form.price,
    form.specialization,
    form.about,

    form.profilePhoto,
    form.aadhaar,
    form.pan,

    form.accountHolder,
    form.accountNumber,
    form.ifsc,
    form.bankName,
    form.upi,
  ];

  const completed = fields.filter((field) => {
    if (field === null || field === undefined) return false;
    return String(field).trim() !== "";
  }).length;

  return Math.round((completed / fields.length) * 100);
};

const progress = calculateProgress();
  const updateField = (
    key: keyof typeof form,
    value: string | File | null
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleBack = () => {
    if (step === 1) {
      router.back();
      return;
    }

    setStep((prev) => prev - 1);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-[#071424] flex items-center justify-center text-white">
        Loading...
      </main>
    );
  }
  const handleNext = async () => {
  // STEP 1
  if (step === 1) {
    if (
      !form.fullName ||
      !form.mobile ||
      !form.city ||
      !form.state
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setStep(2);
    return;
  }

  // STEP 2
  if (step === 2) {
    if (
      !form.businessName ||
      !form.experience ||
      !form.serviceArea
    ) {
      alert("Please complete Professional Details.");
      return;
    }

    setStep(3);
    return;
  }

  // STEP 3
  if (step === 3) {
    // Documents are optional while editing profile
    setStep(4);
    return;
  }

  // STEP 4
  // STEP 4
if (step === 4) {
  if (
    !form.accountNumber ||
    !form.ifsc ||
    !form.bankName
  ) {
    alert("Please complete Bank Details.");
    return;
  }

  try {
    setLoading(true);

    let profilePhoto = form.profilePhoto;
    let aadhaar = form.aadhaar;
    let pan = form.pan;

    // Upload Profile Photo
    if (profilePhoto instanceof File) {
      const fd = new FormData();
      fd.append("file", profilePhoto);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data.success) {
        profilePhoto = data.url;
      }
    }

    // Upload Aadhaar
    if (aadhaar instanceof File) {
      const fd = new FormData();
      fd.append("file", aadhaar);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data.success) {
        aadhaar = data.url;
      }
    }

    // Upload PAN
    if (pan instanceof File) {
      const fd = new FormData();
      fd.append("file", pan);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data.success) {
        pan = data.url;
      }
    }

    // Save Provider
    const response = await fetch("/api/provider/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        mobile,
        category,
        profilePhoto,
        aadhaar,
        pan,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      alert(result.message || "Profile update failed.");
      return;
    }

    alert("Profile Updated Successfully");

    router.push("/provider/dashboard");
  } catch (error) {
    console.error(error);
    alert("Server Error");
  } finally {
    setLoading(false);
  }

  return;
}

  // STEP 5
  if (step === 5) {
    router.push("/provider/dashboard");
    return;
  }

  setStep((prev) => prev + 1);
};
return (
  <main className="min-h-screen bg-[#071424] text-white pb-28">
    <div className="mx-auto max-w-md px-5 py-6">

      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleBack}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10"
        >
          <ArrowLeft size={22} />
        </button>

        <div>
          <h1 className="text-2xl font-bold">
            Edit Provider Profile
          </h1>

          <p className="text-sm text-gray-400">
            Step {step} of 5
          </p>
        </div>
      </div>

      {/* Progress */}
      <ProgressBar progress={progress} />

      {/* Step 1 */}
      {step === 1 && (
        <BasicStep
          form={form}
          updateField={updateField}
        />
      )}

      {/* Step 2 */}
      {step === 2 && (
        <ProfessionalStep
          category={category}
          form={form}
          updateField={updateField}
        />
      )}

      {/* Step 3 */}
      {step === 3 && (
        <DocumentStep
          form={form}
          updateField={updateField}
        />
      )}

      {/* Step 4 */}
      {step === 4 && (
        <BankStep
          form={form}
          updateField={updateField}
        />
      )}

      {/* Step 5 */}
      {step === 5 && (
        <ReviewStep
          form={form}
        />
      )}

    </div>

    {/* Bottom Buttons */}
    <div className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-[#071424] p-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-md gap-3">

        <button
          onClick={handleBack}
          className="h-14 flex-1 rounded-2xl border border-white/10 text-white"
        >
          {step === 1 ? "Cancel" : "Back"}
        </button>

        <button
          onClick={handleNext}
          className="h-14 flex-1 rounded-2xl bg-yellow-400 font-bold text-black"
        >
          {step === 5 ? "Save Profile" : "Next"}
        </button>

      </div>
    </div>

  </main>
);
}