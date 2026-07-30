"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Flower2,
  CalendarCheck,
  UserRound,
  UserCircle,
} from "lucide-react";


const navItems = [

  {
    id:1,
    title:"Home",
    icon:Home,
    link:"/religious",
  },


  {
    id:2,
    title:"Pooja",
    icon:Flower2,
    link:"/religious/pooja",
  },


  {
    id:3,
    title:"Booking",
    icon:CalendarCheck,
    link:"/religious/bookings",
  },


  {
    id:4,
    title:"Pandit",
    icon:UserRound,
    link:"/religious/pandits",
  },


  {
    id:5,
    title:"Profile",
    icon:UserCircle,
    link:"/profile",
  },

];



export default function BottomNav(){


const pathname = usePathname();



return (

<nav

className="
fixed
bottom-0
left-0
right-0
z-50
px-3
pb-3
md:hidden
"

>


<div

className="
rounded-3xl
border
border-yellow-500/20
bg-[#071424]/95
backdrop-blur-xl
shadow-2xl
shadow-black/40
"

>


<div

className="
grid
grid-cols-5
items-center
h-16
"

>


{

navItems.map((item)=>{


const Icon = item.icon;


const active =
pathname === item.link;



return (

<Link

key={item.id}

href={item.link}

className={`
flex
flex-col
items-center
justify-center
gap-1
transition

${
active
?
"text-yellow-400"
:
"text-gray-400"
}

`}

>


<div

className={`
w-9
h-9
rounded-full
flex
items-center
justify-center

${
active
?
"bg-yellow-400/20"
:
""
}

`}

>


<Icon

size={21}

className={`
transition

${
active
?
"text-yellow-400"
:
"text-gray-400"
}

`}

/>


</div>



<span

className="
text-[10px]
font-medium
"

>

{item.title}

</span>



</Link>

)


})


}



</div>


</div>


</nav>

);

}