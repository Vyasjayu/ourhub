"use client";

import Image from "next/image";
import Link from "next/link";


const festivals = [

  {
    id:1,
    name:"Mahashivratri",
    date:"15 February 2027",
    days:"Coming Soon",
    image:"/images/festivals/mahashivratri.png",
    description:"Special Shiv Pooja & Rudrabhishek",
    link:"/religious/pooja/mahashivratri"
  },


  {
    id:2,
    name:"Holi Festival",
    date:"04 March 2027",
    days:"Plan Your Pooja",
    image:"/images/festivals/holi.png",
    description:"Holi Puja For Peace & Prosperity",
    link:"/religious/pooja/holi"
  },


  {
    id:3,
    name:"Navratri",
    date:"11 April 2027",
    days:"Book Early",
    image:"/images/festivals/navratri.png",
    description:"Durga Maa Special Pooja",
    link:"/religious/pooja/navratri"
  },


  {
    id:4,
    name:"Diwali",
    date:"08 November 2027",
    days:"Special Offer",
    image:"/images/festivals/diwali.png",
    description:"Lakshmi Ganesh Pooja",
    link:"/religious/pooja/diwali"
  },

];



export default function UpcomingFestivals(){

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
Upcoming Festivals
</h2>


<p
className="
text-xs
text-gray-400
"
>
Celebrate with divine blessings
</p>

</div>



<Link

href="/religious/festivals"

className="
text-xs
text-yellow-400
font-medium
"

>

View All

</Link>


</div>





{/* Festival Cards */}

<div

className="
flex
gap-4
overflow-x-auto
pb-2
scrollbar-hide
"

>


{

festivals.map((festival)=>(


<div

key={festival.id}

className="
min-w-[240px]
rounded-3xl
overflow-hidden
border
border-yellow-500/20
bg-white/5
backdrop-blur-xl
"

>


{/* Image */}

<div

className="
relative
h-36
"

>


<Image

src={festival.image}

alt={festival.name}

fill

className="
object-cover
"

/>



{/* Date Badge */}

<div

className="
absolute
top-3
left-3
px-3
py-1
rounded-full
bg-black/70
text-yellow-400
text-[11px]
font-semibold
"

>

{festival.date}

</div>


</div>





{/* Content */}

<div className="p-4">


<div

className="
flex
justify-between
items-center
"

>


<h3

className="
text-white
font-bold
text-sm
"

>

{festival.name}

</h3>



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

{festival.days}

</span>


</div>




<p

className="
mt-2
text-xs
text-gray-400
"

>

{festival.description}

</p>





<Link

href={festival.link}

className="
mt-4
block
text-center
rounded-full
py-2
text-xs
font-semibold
bg-gradient-to-r
from-yellow-400
to-orange-500
text-black
"

>

Book Pooja

</Link>



</div>



</div>


))


}


</div>


</section>

);

}