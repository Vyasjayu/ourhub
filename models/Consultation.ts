import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";

// ============================================
// CONSULTATION INTERFACE
// ============================================

export interface IConsultation extends Document {
  // USER
  userId: string;

  // PANDIT
  panditId: string;
  panditName?: string | null;
  panditPhone?: string | null;

  // CONSULTATION TYPE
  consultationType?: "chat" | "voice" | "video";

  // PAYMENT
  amount: number;
  duration: number;
  paymentId: string;

  // STATUS
  status:
    | "requested"
    | "accepted"
    | "active"
    | "rejected"
    | "completed"
    | "cancelled";

  // TIMING
  startTime?: Date | null;
  endTime?: Date | null;

  // TIMESTAMPS
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// SCHEMA
// ============================================

const ConsultationSchema =
  new Schema<IConsultation>(
    {
      // ========================================
      // USER
      // ========================================

      userId: {
        type: String,
        required: true,
        index: true,
        trim: true,
      },

      // ========================================
      // PANDIT
      // ========================================

      panditId: {
        type: String,
        required: true,
        index: true,
        trim: true,
      },

      panditName: {
        type: String,
        default: null,
        trim: true,
      },

      panditPhone: {
        type: String,
        default: null,
        trim: true,
      },

      // ========================================
      // CONSULTATION TYPE
      // ========================================

      consultationType: {
        type: String,
        enum: [
          "chat",
          "voice",
          "video",
        ],
        default: "chat",
        index: true,
      },

      // ========================================
      // PAYMENT
      // ========================================

      amount: {
        type: Number,
        required: true,
        min: 1,
      },

      duration: {
        type: Number,
        required: true,
        min: 1,
      },

      paymentId: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim: true,
      },

      // ========================================
      // STATUS
      // ========================================

      status: {
        type: String,
        enum: [
          "requested",
          "accepted",
          "active",
          "rejected",
          "completed",
          "cancelled",
        ],
        default: "requested",
        index: true,
      },

      // ========================================
      // START TIME
      // ========================================

      startTime: {
        type: Date,
        default: null,
      },

      // ========================================
      // END TIME
      // ========================================

      endTime: {
        type: Date,
        default: null,
      },
    },
    {
      timestamps: true,
    }
  );

// ============================================
// MODEL
// ============================================

const Consultation: Model<IConsultation> =
  mongoose.models.Consultation ||
  mongoose.model<IConsultation>(
    "Consultation",
    ConsultationSchema
  );

// ============================================
// EXPORT
// ============================================

export default Consultation;