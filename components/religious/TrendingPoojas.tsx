"use client";

import Image from "next/image";
import Link from "next/link";


const trendingPoojas = [

  {
    id:1,
    name:"Ganesh Pooja",
    image:"/images/pooja/ganesh.jpg",
    rating:"4.9",
    reviews:"1200+",
    link:"/pooja/1"
  },


  {
    id:2,
    name:"Satyanarayan Pooja",
    image:"/images/pooja/satyanarayan.jpg",
    rating:"4.8",
    reviews:"950+",
    link:"/religious/pooja/satyanarayan-pooja"
  },


  {
    id:3,
    name:"Mahamrityunjaya Jaap",
    image:"/images/pooja/shiva.jpg",
    rating:"5.0",
    reviews:"700+",
    link:"/religious/pooja/mahamrityunjaya"
  },


  {
    id:4,
    name:"Lakshmi Pooja",
    image:"/images/pooja/lakshmi.jpg",
    rating:"4.9",
    reviews:"850+",
    link:"/religious/pooja/lakshmi-pooja"
  },


];



export default function TrendingPoojas(){


return (

<section className="mt-6 px-3">


{/* Header */}

<div className="flex justify-between items-center mb-4">


<div>

<h2
className="
text-lg
font-bold
text-white
"
>
Trending Poojas
</h2>


<p
className="
text-xs
text-gray-400
"
>
Popular poojas booked by devotees
</p>


</div>



<Link

href="/pooja"

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
flex
gap-4
overflow-x-auto
pb-2
scrollbar-hide
"

>


{
trendingPoojas.map((pooja)=>(


<div

key={pooja.id}

className="
min-w-[210px]
rounded-3xl
overflow-hidden
border
border-yellow-500/20
bg-white/5
backdrop-blur-xl
shadow-xl
"

>


{/* Image */}

<div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900">

  <Image
    src={pooja.image}
    alt={pooja.name}
    fill
    sizes="210px"
    className="object-cover object-center transition-transform duration-300 hover:scale-105"
  />

  <div className="absolute top-3 right-3 rounded-full bg-black/70 px-2 py-1 text-[11px] font-semibold text-yellow-400">
    ⭐ {pooja.rating}
  </div>

</div>




{/* Content */}

<div
className="
p-3
"
>


<h3

className="
text-sm
font-semibold
text-white
"

>

{pooja.name}

</h3>



<p

className="
text-[11px]
text-gray-400
mt-1
"

>

{pooja.reviews} bookings

</p>




<div

className="
flex
items-center
gap-2
mt-2
"

>

<span

className="
text-yellow-400
font-bold
text-sm
"

>

{/* {pooja.price} */}

</span>



<span

className="
text-gray-500
line-through
text-xs
"

>

{/* {pooja.oldPrice} */}

</span>


</div>




<Link

href={pooja.link}

className="
block
mt-3
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

Book Now

</Link>



</div>



</div>


))

}



</div>



</section>

);


}