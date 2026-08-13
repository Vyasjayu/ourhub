import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOfflinePoojaBooking extends Document {
  bookingType: string;

  poojaId: number;
  poojaName: string;
  poojaPrice: number;

  customerName: string;
  mobile: string;

  templeId: string;
  templeName: string;
  templeCity: string;

  locationType: "temple" | "home";

  address?: string;
  city?: string;
  pincode?: string;

  date: string;
  time: string;

  amount: number;

  paymentStatus:
    | "pending"
    | "paid"
    | "failed";

  bookingStatus:
    | "pending"
    | "confirmed"
    | "cancelled";

  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;

  createdAt: Date;
  updatedAt: Date;
}

const OfflinePoojaBookingSchema =
  new Schema<IOfflinePoojaBooking>(
    {
      bookingType: {
        type: String,
        default: "offline-pooja",
      },

      poojaId: {
        type: Number,
        required: true,
      },

      poojaName: {
        type: String,
        required: true,
      },

      poojaPrice: {
        type: Number,
        required: true,
      },

      customerName: {
        type: String,
        required: true,
      },

      mobile: {
        type: String,
        required: true,
      },

      templeId: {
        type: String,
        required: true,
      },

      templeName: {
        type: String,
        required: true,
      },

      templeCity: {
        type: String,
        required: true,
      },

      locationType: {
        type: String,
        enum: ["temple", "home"],
        default: "temple",
      },

      address: {
        type: String,
        default: "",
      },

      city: {
        type: String,
        default: "",
      },

      pincode: {
        type: String,
        default: "",
      },

      date: {
        type: String,
        required: true,
      },

      time: {
        type: String,
        required: true,
      },

      amount: {
        type: Number,
        required: true,
      },

      paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending",
      },

      bookingStatus: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending",
      },

      razorpayOrderId: {
        type: String,
        default: "",
      },

      razorpayPaymentId: {
        type: String,
        default: "",
      },

      razorpaySignature: {
        type: String,
        default: "",
      },
    },
    {
      timestamps: true,
    }
  );

const OfflinePoojaBooking: Model<IOfflinePoojaBooking> =
  mongoose.models.OfflinePoojaBooking ||
  mongoose.model<IOfflinePoojaBooking>(
    "OfflinePoojaBooking",
    OfflinePoojaBookingSchema
  );

export default OfflinePoojaBooking;