import mongoose,{Schema,Document} from "mongoose";


export interface IConsultation extends Document {


userId:string;

panditId:string;

amount:number;

duration:number;

paymentId:string;

status:string;

startTime?:Date;

endTime?:Date;


}



const ConsultationSchema =
new Schema<IConsultation>({

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
type:Date
},


endTime:{
type:Date
}



},
{
timestamps:true
});



const Consultation =
mongoose.models.Consultation ||
mongoose.model<IConsultation>(
"Consultation",
ConsultationSchema
);



export default Consultation;