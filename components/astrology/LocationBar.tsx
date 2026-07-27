"use client";

import { MapPin, ChevronDown, Search, X } from "lucide-react";
import { useState } from "react";


const indianCities = [
  "Indore",
  "Ujjain",
  "Bhopal",
  "Mumbai",
  "Delhi",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Kolkata",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Varanasi",
  "Patna",
  "Chandigarh",
  "Gurgaon",
];


export default function LocationBar(){


const [city,setCity] = useState("Select Location");

const [open,setOpen] = useState(false);

const [search,setSearch] = useState("");



const filteredCities = indianCities.filter((item)=>
item.toLowerCase().includes(search.toLowerCase())
);



return (

<section className="relative mt-5">


<div
className="
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
items-center
justify-between
"
>


<div className="flex items-center gap-3">


<div
className="
flex
h-10
w-10
items-center
justify-center
rounded-full
bg-yellow-500/20
"
>

<MapPin
size={20}
className="text-yellow-400"
/>


</div>




<div>


<p className="
text-xs
text-gray-400
">

Your Location

</p>


<h3
className="
font-semibold
text-white
"
>

{city}

</h3>


</div>


</div>




<button

onClick={()=>setOpen(!open)}

className="
flex
items-center
gap-1
rounded-xl
bg-yellow-500/20
px-3
py-2
text-sm
text-yellow-400
"

>

Change

{
open
?
<X size={16}/>
:
<ChevronDown size={16}/>
}

</button>


</div>



</div>





{/* Dropdown */}


{
open && (

<div
className="
absolute
left-0
right-0
top-20
z-50
rounded-2xl
border
border-yellow-500/20
bg-[#101C30]
p-4
shadow-2xl
"
>


<div
className="
flex
items-center
gap-2
rounded-xl
bg-white/5
px-3
py-2
"
>

<Search
size={18}
className="text-yellow-400"
/>


<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

placeholder="Search city..."

className="
w-full
bg-transparent
text-sm
text-white
outline-none
placeholder:text-gray-400
"

/>


</div>




<div
className="
mt-3
max-h-60
overflow-y-auto
space-y-2
"
>


{
filteredCities.map((item)=>(


<button

key={item}

onClick={()=>{

setCity(item);

setOpen(false);

setSearch("");

}}

className="
w-full
rounded-xl
px-3
py-3
text-left
text-sm
text-gray-300
hover:bg-yellow-500/20
hover:text-yellow-400
"

>

📍 {item}

</button>


))

}



</div>



</div>

)

}



</section>

)

}