import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";


// ============================================================
// CONSULTATION INTERFACE
// ============================================================

export interface IConsultation
  extends Document {
  // USER
  userId: string;

  // PANDIT / ASTROLOGER
  panditId: string;
  panditName?: string | null;
  panditPhone?: string | null;

  // CONSULTATION TYPE
  consultationType:
    | "chat"
    | "voice"
    | "video";

  // PAYMENT
  amount: number;

  /*
   * Duration actual consultation start
   * hone ke baad use hogi.
   *
   * Request create hote waqt duration
   * available hona zaroori nahi.
   */
  duration?: number | null;

  /*
   * Payment successful hone ke baad
   * Razorpay/payment transaction ID
   * yahan store hogi.
   */
  paymentId?: string | null;

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


// ============================================================
// SCHEMA
// ============================================================

const ConsultationSchema =
  new Schema<IConsultation>(
    {
      // ======================================================
      // USER
      // ======================================================

      userId: {
        type: String,
        required: true,
        index: true,
        trim: true,
      },


      // ======================================================
      // PANDIT / ASTROLOGER
      // ======================================================

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


      // ======================================================
      // CONSULTATION TYPE
      // ======================================================

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


      // ======================================================
      // PAYMENT
      // ======================================================

      amount: {
        type: Number,

        required: true,

        min: 1,
      },


      /*
       * IMPORTANT
       *
       * Request create hote waqt duration
       * optional rahegi.
       *
       * Example:
       *
       * requested → duration null
       * accepted  → duration null
       * active    → actual duration
       * completed → final duration
       */

      duration: {
        type: Number,

        default: null,

        min: 1,
      },


      /*
       * Payment ID request creation se pehle
       * available nahi ho sakti.
       *
       * Isliye required=false.
       *
       * Payment complete hone ke baad
       * paymentId update karenge.
       */

      paymentId: {
        type: String,

        default: null,

        index: true,

        trim: true,
      },


      // ======================================================
      // STATUS
      // ======================================================

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


      // ======================================================
      // START TIME
      // ======================================================

      startTime: {
        type: Date,

        default: null,
      },


      // ======================================================
      // END TIME
      // ======================================================

      endTime: {
        type: Date,

        default: null,
      },
    },

    {
      timestamps: true,
    }
  );


// ============================================================
// INDEXES
// ============================================================

ConsultationSchema.index({
  panditId: 1,
  status: 1,
  createdAt: -1,
});

ConsultationSchema.index({
  userId: 1,
  status: 1,
  createdAt: -1,
});


// ============================================================
// MODEL
// ============================================================

const Consultation: Model<IConsultation> =
  mongoose.models.Consultation ||
  mongoose.model<IConsultation>(
    "Consultation",
    ConsultationSchema
  );


// ============================================================
// EXPORT
// ============================================================

export default Consultation;