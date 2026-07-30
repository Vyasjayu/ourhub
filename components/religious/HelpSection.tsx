"use client";

import Link from "next/link";

import {
  Headphones,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";


export default function HelpSection(){

return (

<section className="mt-6 px-3 pb-24">


<div

className="
relative
overflow-hidden
rounded-3xl
border
border-yellow-500/30
bg-gradient-to-br
from-[#1b1304]
via-[#111827]
to-[#071424]
p-5
"

>


{/* Glow */}

<div

className="
absolute
top-0
right-0
w-32
h-32
rounded-full
bg-yellow-400/20
blur-3xl
"

/>



<div

className="
relative
z-10
"

>


{/* Header */}

<div

className="
flex
items-center
gap-3
"

>


<div

className="
w-11
h-11
rounded-full
bg-yellow-400
flex
items-center
justify-center
"

>

<Headphones

size={22}

className="
text-black
"

/>

</div>



<div>


<h2

className="
text-lg
font-bold
text-white
"

>

Need Help?

</h2>


<p

className="
text-xs
text-gray-400
"

>

Our support team is here for you

</p>


</div>


</div>





{/* Message */}

<p

className="
mt-4
text-sm
text-gray-300
leading-relaxed
"

>

Have questions about Pooja booking,
Pandit availability or astrology services?
Connect with our support team anytime.

</p>





{/* Buttons */}

<div

className="
grid
grid-cols-2
gap-3
mt-5
"

>


{/* WhatsApp */}

<Link

href="https://wa.me/918878632431"

target="_blank"

className="
flex
items-center
justify-center
gap-2
rounded-full
py-3
bg-green-500
text-white
text-xs
font-semibold
"

>

<MessageCircle size={16}/>

WhatsApp

</Link>





{/* Call */}

<a

href="tel:+918878632431"

className="
flex
items-center
justify-center
gap-2
rounded-full
py-3
bg-gradient-to-r
from-yellow-400
to-orange-500
text-black
text-xs
font-semibold
"

>

<Phone size={16}/>

Call Now

</a>



</div>





<Link

href="/contact"

className="
mt-4
flex
items-center
justify-center
gap-2
text-xs
text-yellow-400
font-medium
"

>

Visit Help Center

<ArrowRight size={14}/>

</Link>



</div>



</div>


</section>

);

}