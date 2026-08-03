"use client";

import {
  Wallet,
  IndianRupee,
  Zap,
  ArrowUpCircle,
} from "lucide-react";


interface WalletCardProps {

  walletBalance:number;

  pricePerMinute:number;

  onRecharge?:()=>void;

}



export default function WalletCard({

walletBalance,

pricePerMinute,

onRecharge

}:WalletCardProps){



const rate = Number(pricePerMinute || 0);


const minimumBalance = rate * 5;


const isLowBalance =
walletBalance < minimumBalance;



return (

<section
className="
rounded-3xl
border
border-yellow-500/20
bg-gradient-to-br
from-[#0E1726]
to-[#09111D]
p-5
shadow-xl
"
>


{/* Header */}

<div className="flex items-center justify-between">


<div className="flex items-center gap-3">


<div
className="
flex
h-12
w-12
items-center
justify-center
rounded-2xl
bg-yellow-500/10
"
>

<Wallet
size={26}
className="text-yellow-400"
/>

</div>



<div>


<p className="text-sm text-gray-400">
Wallet Balance
</p>


<h2
className="
mt-1
flex
items-center
text-3xl
font-bold
text-white
"
>


<IndianRupee
size={22}
className="text-yellow-400"
/>


{walletBalance}


</h2>


</div>


</div>




<button

onClick={onRecharge}

className="
rounded-xl
bg-yellow-400
px-4
py-2
text-sm
font-bold
text-black
"

>

Recharge

</button>


</div>





<div
className="
my-5
h-px
bg-yellow-500/10
"
/>





<div
className="
flex
items-center
justify-between
"
>


<div
className="
flex
items-center
gap-2
"
>

<Zap
size={18}
className="text-yellow-400"
/>


<span className="text-gray-300">
Consultation Rate
</span>


</div>



<span
className="
font-bold
text-yellow-400
"
>

₹{rate}/min

</span>


</div>





<div
className="
mt-4
flex
justify-between
"
>


<span className="text-gray-300">

Minimum Balance

</span>


<span className="font-bold text-white">

₹{minimumBalance}

</span>


</div>






<div

className={`
mt-6
rounded-2xl
border
p-4

${
isLowBalance

?
"border-red-500/20 bg-red-500/10"

:
"border-green-500/20 bg-green-500/10"

}

`}

>


<div className="flex justify-between items-center">


<div>


<p className="text-sm text-gray-300">

Wallet Status

</p>



<h3

className={`
mt-1
text-lg
font-bold

${
isLowBalance
?
"text-red-400"
:
"text-green-400"
}

`}

>


{
isLowBalance

?
"Low Balance"

:

"Ready for Consultation"

}


</h3>


</div>




<ArrowUpCircle

size={30}

className={
isLowBalance
?
"text-red-400"
:
"text-green-400"
}

/>


</div>




{
isLowBalance &&

(

<p
className="
mt-4
rounded-xl
bg-[#111C30]
p-3
text-sm
text-gray-300
"
>

Recharge minimum

<span
className="
font-bold
text-yellow-400
"
>

₹{minimumBalance}

</span>

to start consultation.

</p>

)

}



</div>





<div
className="
mt-5
rounded-xl
border
border-yellow-500/20
bg-[#111C30]
p-3
text-center
"
>


<p className="text-xs text-gray-400">

Wallet amount will be deducted automatically
during chat, call and video consultation.

</p>


</div>



</section>


);

}