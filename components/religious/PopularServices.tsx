"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Sparkles,
  Home,
  Moon,
  Heart,
  ScrollText,
  Star,
} from "lucide-react";



const services = [

  {
    id:1,
    title:"Astrology Consultation",
    subtitle:"Get answers from expert astrologers",
    image:"/images/services/astrology.png",
    icon:Sparkles,
    price:"₹199",
    link:"/religious/astrology",
  },


  {
    id:2,
    title:"Vastu Consultation",
    subtitle:"Create positive energy at home",
    image:"/images/services/vastu.png",
    icon:Home,
    price:"₹499",
    link:"/religious/vastu",
  },


  {
    id:3,
    title:"Kundli Matching",
    subtitle:"Marriage compatibility analysis",
    image:"/images/services/kundli.png",
    icon:ScrollText,
    price:"₹299",
    link:"/religious/kundli",
  },


  {
    id:4,
    title:"Numerology",
    subtitle:"Know your lucky numbers",
    image:"/images/services/numerology.png",
    icon:Star,
    price:"₹199",
    link:"/religious/numerology",
  },


  {
    id:5,
    title:"Daily Horoscope",
    subtitle:"Your daily guidance",
    image:"/images/services/horoscope.png",
    icon:Moon,
    price:"Free",
    link:"/religious/horoscope",
  },


  {
    id:6,
    title:"Spiritual Guidance",
    subtitle:"Personal divine consultation",
    image:"/images/services/spiritual.png",
    icon:Heart,
    price:"₹299",
    link:"/religious/consultation",
  },

];



export default function PopularServices(){

return (

<section className="mt-6 px-3">


{/* Heading */}

<div className="flex justify-between items-center mb-4">


<div>

<h2
className="
text-lg
font-bold
text-white
"
>
Popular Services
</h2>


<p
className="
text-xs
text-gray-400
"
>
Explore our spiritual services
</p>


</div>



<Link

href="/religious/services"

className="
text-xs
text-yellow-400
font-medium
"

>

View All

</Link>


</div>





{/* Cards */}

<div

className="
grid
grid-cols-2
gap-3
"

>


{

services.map((service)=>{


const Icon = service.icon;


return (

<Link

href={service.link}

key={service.id}

className="
rounded-3xl
overflow-hidden
border
border-yellow-500/20
bg-white/5
backdrop-blur-xl
group
"

>


{/* Image */}

<div

className="
relative
h-28
"

>


<Image

src={service.image}

alt={service.title}

fill

className="
object-cover
group-hover:scale-105
transition
duration-500
"

/>



<div

className="
absolute
inset-0
bg-black/30
"

/>



{/* Icon */}

<div

className="
absolute
top-3
left-3
w-9
h-9
rounded-full
bg-yellow-400
flex
items-center
justify-center
"

>

<Icon

size={18}

className="
text-black
"

/>

</div>



</div>





{/* Content */}

<div className="p-3">


<h3

className="
text-sm
font-semibold
text-white
"

>

{service.title}

</h3>



<p

className="
text-[11px]
text-gray-400
mt-1
line-clamp-2
"

>

{service.subtitle}

</p>




<div

className="
flex
justify-between
items-center
mt-3
"

>


<span

className="
text-yellow-400
font-bold
text-sm
"

>

{service.price}

</span>



<span

className="
text-[10px]
px-2
py-1
rounded-full
bg-yellow-400/20
text-yellow-400
"

>

Book

</span>


</div>


</div>



</Link>

)


})

}


</div>



</section>

);

}