"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import ProgressBar from "@/components/provider/ProgressBar";
import BasicStep from "@/components/provider/BasicStep";
import ProfessionalStep from "@/components/provider/ProfessionalStep";
import DocumentStep from "@/components/provider/DocumentStep";
import BankStep from "@/components/provider/BankStep";
import ReviewStep from "@/components/provider/ReviewStep";

export default function ProviderProfilePage() {
  const router = useRouter();
  const params = useSearchParams();
  const mobile = params.get("mobile") || "";
const category = params.get("category") || "";

//  const mobile = localStorage.getItem("providerMobile");
// const category = localStorage.getItem("providerCategory");

// router.push(
//   `/provider/profile?mobile=${mobile}&category=${category}`
// );

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    // Basic
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
    profilePhoto: null as File | null,
    aadhaar: null as File | null,
    pan: null as File | null,

    // Bank
    accountHolder: "",
    accountNumber: "",
    ifsc: "",
    bankName: "",
    upi: "",
  });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const mobile = localStorage.getItem("providerMobile");

        if (!mobile) {
          setLoading(false);
          return;
        }

        const res = await fetch(`/api/provider/me?mobile=${mobile}`);
        const data = await res.json();

        if (data.success) {
          const p = data.provider;

          setForm({
            fullName: p.fullName || "",
            email: p.email || "",
            mobile: p.mobile || "",
            gender: p.gender || "",
            dob: p.dob || "",
            city: p.city || "",
            state: p.state || "",

            businessName: p.businessName || "",
            experience: p.experience || "",
            languages: p.languages || "",
            serviceArea: p.serviceArea || "",
            price: p.price || "",
            specialization: p.specialization || "",
            about: p.about || "",

            profilePhoto: null,
            aadhaar: null,
            pan: null,

            accountHolder: p.accountHolder || "",
            accountNumber: p.accountNumber || "",
            ifsc: p.ifsc || "",
            bankName: p.bankName || "",
            upi: p.upi || "",
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

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
  }

  // STEP 3
  if (step === 3) {
    // Edit profile ke time documents optional rahenge
    setStep(4);
    return;
  }

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

      const response = await fetch("/api/provider/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          category,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        alert(data.message || "Profile update failed.");
        setLoading(false);
        return;
      }

      alert("Profile Updated Successfully");

      router.push("/provider/dashboard");

    } catch (error) {
      console.log(error);
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

      <ProgressBar step={step} />

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