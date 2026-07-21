"use client";

import {
  Star,
  Phone,
  Video,
  MapPin,
  CheckCircle,
} from "lucide-react";


const vastuExperts:any = {

1:{
name:"Acharya Amit Vastu Shastri",
experience:"18 Years",
language:"Hindi, English",
rating:4.9,
price:499,
location:"Delhi",
image:"🏠",
about:
"Acharya Amit Vastu Shastri ghar, office aur business ke liye Vastu consultation provide karte hain."
},


2:{
name:"Pt. Rajesh Vastu Expert",
experience:"12 Years",
language:"Hindi",
rating:4.8,
price:399,
location:"Varanasi",
image:"🧿",
about:
"Traditional Vastu Shastra ke madhyam se direction problems ka solution dete hain."
},


3:{
name:"Acharya Neha Vastu Consultant",
experience:"10 Years",
language:"Hindi, English",
rating:4.9,
price:599,
location:"Mumbai",
image:"✨",
about:
"Modern Vastu aur architectural guidance provide karti hain."
}

};



export default async function VastuProfile({

params,

}:{

params: Promise<{id:string}>

}){


const {id}= await params;


const expert = vastuExperts[id];



if(!expert){

return(

<div className="min-h-screen bg-[#071321] text-white flex items-center justify-center">

Expert Not Found

</div>

)

}



return(

<div className="min-h-screen bg-[#071321] text-white flex justify-center">


<div className="w-full max-w-[430px] p-5">


<h1 className="text-2xl font-bold">
{expert.name}
</h1>


<div className="flex items-center gap-2 mt-3">

<div className="text-5xl">
{expert.image}
</div>


<div>

<div className="flex gap-1">

<Star
size={16}
className="fill-yellow-400 text-yellow-400"
/>

{expert.rating}

</div>


<div className="flex gap-1 text-gray-400">

<MapPin size={15}/>

{expert.location}

</div>


</div>


</div>



<div className="bg-[#0d1b2a] rounded-3xl p-5 mt-5">

<h2 className="font-bold text-xl">
About
</h2>

<p className="text-gray-400 mt-3">
{expert.about}
</p>

</div>




<div className="bg-[#0d1b2a] rounded-3xl p-5 mt-5">


<h2 className="font-bold text-xl">
Services
</h2>


<div className="mt-3 space-y-3">


<p className="flex gap-2">
<CheckCircle/>
Home Vastu
</p>


<p className="flex gap-2">
<CheckCircle/>
Office Vastu
</p>


<p className="flex gap-2">
<CheckCircle/>
Business Vastu
</p>


</div>


</div>



<div className="grid grid-cols-2 gap-3 mt-5">


<button className="h-12 border border-[#D4AF37] rounded-xl text-[#D4AF37] flex justify-center items-center gap-2">

<Phone size={18}/>

Call

</button>


<button className="h-12 bg-[#D4AF37] text-[#071321] rounded-xl flex justify-center items-center gap-2 font-bold">

<Video size={18}/>

Video

</button>


</div>


</div>

</div>

)

}