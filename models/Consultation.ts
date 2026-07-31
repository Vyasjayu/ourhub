import mongoose, { Schema, Document, Model } from "mongoose";


export interface IConsultation extends Document {

  userId: string;

  panditId: string;

  amount: number;

  duration: number;

  paymentId: string;

  status: string;

  startTime?: Date | null;

  endTime?: Date | null;

}



const ConsultationSchema = new Schema<IConsultation>(
{

  userId:{
    type:String,
    required:true
  },


  panditId:{
    type:String,
    required:true
  },


  amount:{
    type:Number,
    required:true
  },


  duration:{
    type:Number,
    required:true
  },


  paymentId:{
    type:String,
    required:true
  },


  status:{
    type:String,
    default:"requested"
  },


  startTime:{
    type:Date,
    default:null
  },


  endTime:{
    type:Date,
    default:null
  }


},
{
  timestamps:true
}
);



const Consultation: Model<IConsultation> =
  mongoose.models.Consultation ||
  mongoose.model<IConsultation>(
    "Consultation",
    ConsultationSchema
  );


export default Consultation;