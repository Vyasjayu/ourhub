"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Search,
  CalendarCheck2,
  User,
  Sparkles,
} from "lucide-react";


export default function BottomNav() {


const pathname = usePathname();



const menu=[

{
name:"Home",
icon:Home,
path:"/religious",
},


{
name:"Services",
icon:Search,
path:"/religious/services",
},


{
name:"Booking",
icon:CalendarCheck2,
path:"/religious/bookings",
},


{
name:"Profile",
icon:User,
path:"/religious/profile",
},


];



return (


<nav className="
fixed 
bottom-0 
left-0 
right-0 
z-50
bg-[#081321]/95
backdrop-blur-xl
border-t 
border-white/10
">


<div className="
max-w-[430px]
mx-auto
h-20
flex
items-center
justify-around
relative
">





{/* Home */}

<Link

href="/"

className={`
flex flex-col items-center
text-xs
${pathname==="/religious"
?"text-yellow-400"
:"text-gray-400"}
`}

>

<Home size={24}/>

<span className="mt-1">
Home
</span>


</Link>







{/* Services */}


<Link

href="/religious/services"

className={`
flex flex-col items-center
text-xs
${pathname.includes("/services")
?"text-yellow-400"
:"text-gray-400"}
`}

>


<Search size={24}/>


<span className="mt-1">
Services
</span>


</Link>







{/* Center Button */}


<Link

href="/religious/bookings"

className="
absolute
-top-8
w-16
h-16
rounded-full
bg-gradient-to-r
from-yellow-400
to-orange-500
shadow-2xl
flex
items-center
justify-center
border-4
border-[#071321]
"


>


<Sparkles

className="text-black"

size={30}

/>


</Link>







{/* Booking */}


<Link

href="/religious/bookings"

className={`
flex flex-col items-center
text-xs
${pathname.includes("/bookings")
?"text-yellow-400"
:"text-gray-400"}
`}

>


<CalendarCheck2 size={24}/>


<span className="mt-1">
Booking
</span>


</Link>







{/* Profile */}


<Link

href="/religious/profile"

className={`
flex flex-col items-center
text-xs
${pathname.includes("/profile")
?"text-yellow-400"
:"text-gray-400"}
`}

>


<User size={24}/>


<span className="mt-1">
Profile
</span>


</Link>



</div>


</nav>


);

}