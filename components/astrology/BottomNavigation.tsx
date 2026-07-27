"use client";

import Link from "next/link";
import {
  Home,
  Sparkles,
  CalendarCheck,
  User,
} from "lucide-react";


const menu = [

  {
    id:1,
    title:"Home",
    icon:Home,
    link:"/",
  },

  {
    id:2,
    title:"Services",
    icon:Sparkles,
    link:"/religious",
  },

  {
    id:3,
    title:"Booking",
    icon:CalendarCheck,
    link:"/booking",
  },

  {
    id:4,
    title:"Profile",
    icon:User,
    link:"/profile",
  },

];



export default function BottomNavigation(){


return (

<nav
className="
fixed
bottom-0
left-0
right-0
z-50
border-t
border-yellow-500/20
bg-[#071424]/95
backdrop-blur-xl

md:hidden
"
>


<div
className="
mx-auto
flex
max-w-md
items-center
justify-around
px-3
py-3
"
>


{
menu.map((item)=>{


const Icon=item.icon;


return (

<Link

key={item.id}

href={item.link}

className="
flex
flex-col
items-center
gap-1
text-gray-400
transition
hover:text-yellow-400
"

>


<div
className="
rounded-xl
p-1.5
"
>

<Icon
size={22}
/>

</div>


<span
className="
text-[11px]
"
>
{item.title}
</span>


</Link>


)


})

}


</div>


</nav>

)

}