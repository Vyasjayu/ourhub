import mongoose, {
  Schema,
  models,
  model,
} from "mongoose";

const TransactionSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["credit", "debit"],
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    paymentId: {
      type: String,
      default: "",
    },

    orderId: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["success", "failed", "pending"],
      default: "success",
    },

    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      default: "",
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    walletBalance: {
      type: Number,
      default: 0,
    },

    transactions: {
      type: [TransactionSchema],
      default: [],
    },

    profilePhoto: {
      type: String,
      default: "",
    },

    isVerified: {
      type: Boolean,
      default: true,
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },

    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User =
  models.User || model("User", UserSchema);

export default User;