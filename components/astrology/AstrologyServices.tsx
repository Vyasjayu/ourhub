"use client";

import {
  ScrollText,
  Heart,
  Briefcase,
  Building2,
  Sparkles,
  Compass,
  Hash,
  MoonStar,
} from "lucide-react";


const services = [

  {
    id:1,
    title:"Kundli Reading",
    desc:"Birth chart analysis",
    icon:ScrollText,
  },


  {
    id:2,
    title:"Marriage Astrology",
    desc:"Marriage matching",
    icon:Heart,
  },


  {
    id:3,
    title:"Career Astrology",
    desc:"Job & growth guidance",
    icon:Briefcase,
  },


  {
    id:4,
    title:"Business Astrology",
    desc:"Business success",
    icon:Building2,
  },


  {
    id:5,
    title:"Love Astrology",
    desc:"Relationship guidance",
    icon:Sparkles,
  },


  {
    id:6,
    title:"Vastu Consultation",
    desc:"Home & office vastu",
    icon:Compass,
  },


  {
    id:7,
    title:"Numerology",
    desc:"Name & number analysis",
    icon:Hash,
  },


  {
    id:8,
    title:"Tarot Reading",
    desc:"Future guidance",
    icon:MoonStar,
  },

];



export default function AstrologyServices(){


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
🪐 Astrology Services
</h2>


<p
className="
mt-1
text-sm
text-gray-400
"
>
Choose consultation according to your needs
</p>


</div>





{/* Grid */}


<div
className="
mt-5
grid
grid-cols-2
gap-3
"
>


{
services.map((service)=>{


const Icon = service.icon;


return (

<div

key={service.id}

className="
rounded-2xl
border
border-yellow-500/20
bg-white/5
p-4
backdrop-blur-xl
transition
hover:border-yellow-400/50
"

>


<div
className="
flex
h-11
w-11
items-center
justify-center
rounded-xl
bg-yellow-500/20
"
>

<Icon
size={23}
className="text-yellow-400"
/>


</div>



<h3
className="
mt-3
text-sm
font-bold
text-white
"
>

{service.title}

</h3>



<p
className="
mt-1
text-xs
text-gray-400
"
>

{service.desc}

</p>



</div>


)


})

}


</div>


</section>

)

}