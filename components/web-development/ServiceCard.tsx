"use client";

import Link from "next/link";

interface Props {
  slug: string;
  title: string;
  price: string;
  icon: string;
  color: string;
}

export default function ServiceCard({
  slug,
  title,
  price,
  icon,
  color,
}: Props){

return(

<div
className="
relative
overflow-hidden
rounded-3xl
border
border-yellow-500/20
bg-[#111C30]
p-4
transition-all
duration-300
hover:-translate-y-1
hover:border-yellow-400
"
>

<div
className={`
h-14
w-14
rounded-2xl
bg-gradient-to-r
${color}
flex
items-center
justify-center
text-3xl
`}
>

{icon}

</div>

<h3
className="
mt-4
font-semibold
text-white
"
>

{title}

</h3>

<p
className="
mt-2
text-yellow-400
font-bold
"
>

{price}

</p>
<Link href={`/web-development/service/${slug}`}>
<button
className="
mt-4
w-full
rounded-full
bg-yellow-400
py-2
font-semibold
text-black
"
>

View Details

</button>
</Link>
</div>

);

}