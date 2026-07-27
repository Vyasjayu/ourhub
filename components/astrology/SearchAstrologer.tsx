"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";


export default function SearchAstrologer(){


const [search,setSearch] = useState("");



return (

<section className="mt-5">


<div
className="
flex
items-center
gap-3
rounded-2xl
border
border-yellow-500/20
bg-white/5
px-4
py-3
backdrop-blur-xl
"
>


{/* Search Icon */}

<Search
size={22}
className="text-yellow-400"
/>



<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search astrologer, expertise..."

className="
flex-1
bg-transparent
outline-none
text-sm
text-white
placeholder:text-gray-400
"

/>



<button

className="
flex
h-9
w-9
items-center
justify-center
rounded-xl
bg-yellow-500/20
"

>

<SlidersHorizontal
size={18}
className="text-yellow-400"
/>


</button>



</div>




{/* Quick Filters */}


<div
className="
mt-3
flex
gap-2
overflow-x-auto
scrollbar-hide
"
>


{
[
"Love",
"Marriage",
"Career",
"Kundli",
"Vastu",
"Numerology"
].map((item)=>(


<button

key={item}

className="
whitespace-nowrap
rounded-full
border
border-yellow-500/20
bg-white/5
px-4
py-2
text-xs
text-gray-300
hover:bg-yellow-500/20
hover:text-yellow-400
"

>

{item}

</button>


))

}



</div>



</section>

)

}