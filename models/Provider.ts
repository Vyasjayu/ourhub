import mongoose, { Schema, model, models } from "mongoose";

const ProviderSchema = new Schema(
  {
    // =========================
    // Account Details
    // =========================

    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    // =========================
    // Private Details (Admin + Provider)
    // =========================

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      default: "",
      trim: true,
      lowercase: true,
    },

    // =========================
    // Public Details
    // =========================

    displayName: {
      type: String,
      default: "",
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      default: "",
    },

    dob: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      default: "",
    },

    state: {
      type: String,
      default: "",
    },

    // =========================
    // Professional Details
    // =========================

    businessName: {
      type: String,
      default: "",
    },

    experience: {
      type: String,
      default: "",
    },

    languages: {
      type: String,
      default: "",
    },

    serviceArea: {
      type: String,
      default: "",
    },

    price: {
      type: String,
      default: "",
    },

    specialization: {
      type: String,
      default: "",
    },

    about: {
      type: String,
      default: "",
    },

    // =========================
    // Public Profile
    // =========================

    profilePhoto: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    totalConsultations: {
      type: Number,
      default: 0,
    },

    isProfilePublic: {
      type: Boolean,
      default: true,
    },

    // =========================
    // Private Documents
    // =========================

    aadhaar: {
      type: String,
      default: "",
    },

    pan: {
      type: String,
      default: "",
    },

    // =========================
    // Private Bank Details
    // =========================

    accountHolder: {
      type: String,
      default: "",
    },

    accountNumber: {
      type: String,
      default: "",
    },

    ifsc: {
      type: String,
      default: "",
    },

    bankName: {
      type: String,
      default: "",
    },

    upi: {
      type: String,
      default: "",
    },

    // =========================
    // Verification Status
    // =========================

    status: {
      type: String,
      enum: [
        "pending",
        "approved",
        "rejected",
        "suspended",
      ],
      default: "pending",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: false,
    },

    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      default: null,
    },

    approvedAt: {
      type: Date,
      default: null,
    },

    rejectedReason: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default models.Provider ||
  model("Provider", ProviderSchema);