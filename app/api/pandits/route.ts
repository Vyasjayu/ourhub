import {connectDB} from "@/lib/mongodb";
import Pandit from "@/models/Pandit";
import {NextResponse} from "next/server";



export async function GET(){


try{


await connectDB();


const pandits =
await Pandit.find({
available:true
});



return NextResponse.json({

success:true,

pandits

});



}catch(error){


return NextResponse.json({

success:false,

message:"Server Error"

},
{
status:500
});


}


}