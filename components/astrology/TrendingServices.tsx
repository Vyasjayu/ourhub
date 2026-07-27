"use client";

import {
  Sparkles,
  Heart,
  Briefcase,
  Gem,
  ScrollText,
  Star,
} from "lucide-react";


const trendingServices = [
  {
    id:1,
    title:"Kundli Match",
    subtitle:"Marriage",
    icon:ScrollText,
  },

  {
    id:2,
    title:"Love Astro",
    subtitle:"Relationship",
    icon:Heart,
  },

  {
    id:3,
    title:"Career Astro",
    subtitle:"Job Growth",
    icon:Briefcase,
  },

  {
    id:4,
    title:"Gemstone",
    subtitle:"Remedies",
    icon:Gem,
  },

  {
    id:5,
    title:"Daily Horoscope",
    subtitle:"Prediction",
    icon:Star,
  },

];



export default function TrendingServices(){


return (

<section className="mt-8">


{/* Heading */}

<div className="flex items-center justify-between">


<h2
className="
text-xl
font-bold
text-white
"
>
🔥 Trending Services
</h2>


<span
className="
text-xs
text-yellow-400
"
>
View All
</span>


</div>





{/* Horizontal Scroll Cards */}


<div
className="
mt-4
flex
gap-3
overflow-x-auto
pb-2
scrollbar-hide
"
>


{
trendingServices.map((service)=>{


const Icon = service.icon;


return (

<div

key={service.id}

className="
min-w-[140px]
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
h-10
w-10
items-center
justify-center
rounded-xl
bg-yellow-500/20
"
>

<Icon
size={22}
className="text-yellow-400"
/>


</div>




<h3
className="
mt-3
font-semibold
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

{service.subtitle}

</p>



</div>


)


})

}



</div>


</section>

)

}