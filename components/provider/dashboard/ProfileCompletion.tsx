"use client";

type Provider = {
  fullName?: string;
  displayName?: string;
  mobile?: string;
  email?: string;

  city?: string;
  state?: string;
  gender?: string;
  dob?: string;

  businessName?: string;
  experience?: string;
  serviceArea?: string;
  price?: string;
  specialization?: string;
  languages?: string;
  about?: string;

  profilePhoto?: string;
  aadhaar?: string;
  pan?: string;

  accountHolder?: string;
  accountNumber?: string;
 ifsc?: string;
  bankName?: string;
  upi?: string;
};

type Props = {
  provider: Provider;
};

export default function ProfileCompletion({
  provider,
}: Props) {

  const fields = [
    // Basic
    provider.displayName,
    provider.fullName,
    provider.mobile,
    provider.email,
    provider.gender,
    provider.dob,
    provider.city,
    provider.state,

    // Professional
    provider.businessName,
    provider.experience,
    provider.serviceArea,
    provider.price,
    provider.specialization,
    provider.languages,
    provider.about,

    // Documents
    provider.profilePhoto,
    provider.aadhaar,
    provider.pan,

    // Bank
    provider.accountHolder,
    provider.accountNumber,
    provider.ifsc,
    provider.bankName,
    provider.upi,
  ];

  const completed = fields.filter((item) => {
    if (!item) return false;
    return item.toString().trim() !== "";
  }).length;

  const percentage = Math.round(
    (completed / fields.length) * 100
  );

  return (
    <div className="mt-6 rounded-3xl border border-white/10 bg-[#132234] p-5">

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">
          Profile Completion
        </h2>

        <span className="text-lg font-bold text-yellow-400">
          {percentage}%
        </span>
      </div>

      <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-yellow-400 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-4 text-sm text-gray-400">
        {percentage === 100
          ? "🎉 Your profile is fully completed."
          : `${completed}/${fields.length} fields completed.`}
      </p>

      {percentage < 100 && (
        <button
          onClick={() => {
            window.location.href = "/provider/profile";
          }}
          className="mt-5 w-full rounded-2xl bg-yellow-400 py-3 font-semibold text-black"
        >
          Complete Profile
        </button>
      )}
    </div>
  );
}