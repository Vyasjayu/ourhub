"use client";

import {
  ShieldCheck,
  UserCheck,
  LockKeyhole,
  Video,
} from "lucide-react";


const features = [

  {
    id:1,
    title:"Verified Astrologers",
    desc:"Experienced & trusted Vedic astrologers",
    icon:UserCheck,
  },


  {
    id:2,
    title:"Accurate Predictions",
    desc:"Personalized guidance based on astrology",
    icon:ShieldCheck,
  },


  {
    id:3,
    title:"Secure Consultation",
    desc:"Safe payments and private conversations",
    icon:LockKeyhole,
  },


  {
    id:4,
    title:"Online & Offline",
    desc:"Chat, Call, Video & personal meeting",
    icon:Video,
  },

];



export default function WhyChooseUs(){


return (

<section className="mt-10">


{/* Heading */}

<div>

<h2
className="
text-xl
font-bold
text-white
"
>
✨ Why Choose OurHub Astrology
</h2>


<p
className="
mt-1
text-sm
text-gray-400
"
>
Trusted astrology services for your life guidance
</p>


</div>





{/* Cards */}


<div
className="
mt-5
space-y-3
"
>


{
features.map((item)=>{


const Icon = item.icon;


return (

<div

key={item.id}

className="
flex
items-center
gap-4
rounded-2xl
border
border-yellow-500/20
bg-white/5
p-4
backdrop-blur-xl
"

>


<div
className="
flex
h-12
w-12
shrink-0
items-center
justify-center
rounded-xl
bg-yellow-500/20
"
>

<Icon
size={24}
className="text-yellow-400"
/>


</div>




<div>


<h3
className="
font-semibold
text-white
"
>
{item.title}
</h3>


<p
className="
mt-1
text-xs
text-gray-400
"
>
{item.desc}
</p>


</div>


</div>


)


})

}



</div>


</section>

)

}