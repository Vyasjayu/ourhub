"use client";

import { useEffect, useState } from "react";
import {
  Wallet,
  X,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface RechargeSheetProps {

  open: boolean;

  walletBalance: number;

  onClose: () => void;

  onRecharge: (plan: {
    amount: number;
    minutes: number;
  }) => void;

}


const plans = [
  {
    id: 1,
    amount: 125,
    minutes: 5,
    popular: false,
  },
  {
    id: 2,
    amount: 250,
    minutes: 10,
    popular: true,
  },
  {
    id: 3,
    amount: 500,
    minutes: 20,
    popular: false,
  },
  {
    id: 4,
    amount: 1000,
    minutes: 40,
    popular: false,
  },
];


export default function RechargeSheet({
  open,
  walletBalance,
  onClose,
  onRecharge,
}: RechargeSheetProps) {

const router = useRouter();
const [selectedPlan,setSelectedPlan] = useState(plans[1]);


useEffect(()=>{

if(open){

document.body.style.overflow="hidden";

}else{

document.body.style.overflow="";

}


return()=>{

document.body.style.overflow="";

}


},[open]);



if(!open) return null;



return (

<>


<div
onClick={onClose}
className="
fixed
inset-0
z-40
bg-black/70
backdrop-blur-sm
"
/>



<div
className="
fixed
bottom-0
left-1/2
z-50
w-full
max-w-md
-translate-x-1/2
rounded-t-[34px]
border
border-yellow-500/20
bg-[#08111D]
p-6
shadow-2xl
"
>


<div
className="
mx-auto
mb-5
h-1.5
w-16
rounded-full
bg-gray-500
"
/>



<div className="
flex
items-center
justify-between
">


<div>

<h2 className="
text-2xl
font-bold
text-white
">
Recharge Wallet
</h2>


<p className="
mt-1
text-sm
text-gray-400
">
Select a recharge plan
</p>


</div>


<button
onClick={onClose}
className="
rounded-full
bg-white/10
p-2
"
>

<X
className="text-white"
size={18}
/>

</button>


</div>




<div
className="
mt-6
rounded-2xl
border
border-yellow-500/20
bg-[#101C30]
p-4
"
>


<div className="
flex
items-center
gap-3
">


<Wallet className="text-yellow-400"/>


<div>

<p className="
text-sm
text-gray-400
">
Current Balance
</p>


<h3 className="
text-3xl
font-bold
text-white
">
₹{walletBalance}
</h3>


</div>


</div>


</div>




<div className="
mt-6
space-y-4
">


{
plans.map((plan)=>{


const active =
selectedPlan.amount === plan.amount;


return(

<button

key={plan.id}

onClick={()=>setSelectedPlan(plan)}

className={`
relative
w-full
rounded-2xl
border
p-4
transition-all

${
active
?
"border-yellow-400 bg-yellow-400/10"
:
"border-white/10 bg-[#101C30]"
}

`}

>


{
plan.popular &&

<span
className="
absolute
right-4
top-3
rounded-full
bg-yellow-400
px-3
py-1
text-xs
font-bold
text-black
"
>
Popular
</span>

}



<div className="
flex
items-center
justify-between
">


<div className="text-left">


<h3 className="
text-2xl
font-bold
text-white
">
₹{plan.amount}
</h3>


<p className="
mt-1
text-gray-400
">
{plan.minutes} Minutes Consultation
</p>


</div>



{
active ?

<CheckCircle2
className="text-yellow-400"
size={30}
/>

:

<Zap
className="text-gray-500"
size={28}
/>

}



</div>


</button>


)


})

}


</div>




<div
className="
mt-6
rounded-xl
border
border-yellow-500/20
bg-[#101C30]
p-4
"
>

<p className="
text-sm
text-gray-300
">

Wallet amount will be deducted automatically at

<span className="
font-bold
text-yellow-400
">
 ₹25/min
</span>

during Chat, Voice or Video consultation.

</p>


</div>



<button

onClick={()=>{

router.push(
`/payment?amount=${selectedPlan.amount}&minutes=${selectedPlan.minutes}`
);

}}

className="
mt-6
w-full
rounded-2xl
bg-gradient-to-r
from-yellow-400
to-yellow-500
py-4
text-lg
font-bold
text-black
transition
hover:scale-[1.02]
"

>

Continue to Payment

</button>



</div>


</>

)

}