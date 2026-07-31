import "dotenv/config";

import { connectDB } from "@/lib/mongodb";
import Pandit from "@/models/Pandit";


async function addPandit(){

try{

await connectDB();


const pandit = await Pandit.create({

name:"Pandit Rohit Sharma",

phone:"9302552375",

email:"raj@gmail.com",

experience:10,

rating:4.8,

charge:20,

available:true

});


console.log("Pandit Added:",pandit);


process.exit(0);


}catch(error){

console.log(error);

process.exit(1);

}

}


addPandit();