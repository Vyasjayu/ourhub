"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Star,
  MapPin,
  Award,
} from "lucide-react";


const pandits = [

  {
    id:1,
    name:"Acharya Rajesh Sharma",
    image:"/images/pandits/pandit1.png",
    speciality:"Vedic Pooja Expert",
    experience:"15+ Years Experience",
    rating:"4.9",
    reviews:"1200+",
    location:"Ujjain",
    link:"/religious/pandit/rajesh-sharma",
  },


  {
    id:2,
    name:"Pandit Amit Mishra",
    image:"/images/pandits/pandit2.png",
    speciality:"Kundli & Astrology",
    experience:"12+ Years Experience",
    rating:"4.8",
    reviews:"900+",
    location:"Indore",
    link:"/religious/pandit/amit-mishra",
  },


  {
    id:3,
    name:"Acharya Vikram Joshi",
    image:"/images/pandits/pandit3.png",
    speciality:"Rudrabhishek Specialist",
    experience:"20+ Years Experience",
    rating:"5.0",
    reviews:"1500+",
    location:"Varanasi",
    link:"/religious/pandit/vikram-joshi",
  },


  {
    id:4,
    name:"Pandit Mohan Tiwari",
    image:"/images/pandits/pandit4.png",
    speciality:"Marriage Pooja Expert",
    experience:"10+ Years Experience",
    rating:"4.9",
    reviews:"700+",
    location:"Bhopal",
    link:"/religious/pandit/mohan-tiwari",
  },

];



export default function TopPandits(){

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
Top Pandits
</h2>


<p
className="
text-xs
text-gray-400
"
>
Trusted spiritual experts
</p>


</div>


<Link

href="/religious/pandits"

className="
text-xs
text-yellow-400
font-medium
"

>
View All
</Link>


</div>





{/* Pandit Cards */}

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
pandits.map((pandit)=>(


<div

key={pandit.id}

className="
min-w-[250px]
rounded-3xl
border
border-yellow-500/20
bg-white/5
backdrop-blur-xl
overflow-hidden
"

>


{/* Profile Image */}

<div

className="
relative
h-36
"

>

<Image

src={pandit.image}

alt={pandit.name}

fill

className="
object-cover
"

/>



{/* Rating */}

<div

className="
absolute
top-3
right-3
px-3
py-1
rounded-full
bg-black/70
flex
items-center
gap-1
text-xs
text-yellow-400
"

>

<Star
size={12}
fill="currentColor"
/>

{pandit.rating}

</div>


</div>





{/* Content */}

<div className="p-4">


<h3

className="
text-sm
font-bold
text-white
"

>

{pandit.name}

</h3>



<p

className="
text-xs
text-yellow-400
mt-1
"

>

{pandit.speciality}

</p>





<div

className="
flex
items-center
gap-2
mt-3
text-xs
text-gray-400
"

>

<Award size={14}/>

{pandit.experience}

</div>





<div

className="
flex
items-center
gap-2
mt-2
text-xs
text-gray-400
"

>

<MapPin size={14}/>

{pandit.location}

</div>




<p

className="
text-[11px]
text-gray-500
mt-2
"

>

{pandit.reviews} devotees consulted

</p>





<Link

href={pandit.link}

className="
block
text-center
mt-4
rounded-full
py-2
bg-gradient-to-r
from-yellow-400
to-orange-500
text-black
text-xs
font-semibold
"

>

Book Consultation

</Link>



</div>



</div>


))

}


</div>



</section>

);

}