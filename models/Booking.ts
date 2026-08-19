import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBooking extends Document {
  bookingId: string;

  bookingType: "online-pooja" | "offline-pooja";

  poojaId: string;
  poojaName: string;
  poojaPrice: number;

  customerName: string;
  mobile: string;
  email?: string;

  templeId?: string;
  templeName?: string;
  templeCity?: string;

  locationType?: "temple" | "home";
  address?: string;
  city?: string;
  pincode?: string;

  date?: string;
  time?: string;

  paymentMethod: "razorpay" | "whatsapp";
  paymentStatus: "pending" | "paid" | "failed" | "refunded";

  bookingStatus:
    | "pending"
    | "requested"
    | "confirmed"
    | "completed"
    | "cancelled";

  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;

  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    bookingId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    bookingType: {
      type: String,
      enum: ["online-pooja", "offline-pooja"],
      required: true,
    },

    poojaId: {
      type: String,
      required: true,
    },

    poojaName: {
      type: String,
      required: true,
    },

    poojaPrice: {
      type: Number,
      required: true,
      default: 0,
    },

    customerName: {
      type: String,
      required: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
    },

    templeId: {
      type: String,
    },

    templeName: {
      type: String,
    },

    templeCity: {
      type: String,
    },

    locationType: {
      type: String,
      enum: ["temple", "home"],
    },

    address: {
      type: String,
    },

    city: {
      type: String,
    },

    pincode: {
      type: String,
    },

    date: {
      type: String,
    },

    time: {
      type: String,
    },

    paymentMethod: {
      type: String,
      enum: ["razorpay", "whatsapp"],
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending",
    },

    bookingStatus: {
      type: String,
      enum: [
        "pending",
        "requested",
        "confirmed",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },

    razorpayOrderId: {
      type: String,
    },

    razorpayPaymentId: {
      type: String,
    },

    razorpaySignature: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Booking: Model<IBooking> =
  mongoose.models.Booking ||
  mongoose.model<IBooking>("Booking", BookingSchema);

export default Booking;