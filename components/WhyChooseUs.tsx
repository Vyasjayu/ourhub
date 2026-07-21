"use client";

import {
  ShieldCheck,
  Clock,
  BadgeCheck,
  Headphones,
} from "lucide-react";


const features = [
  {
    title: "Verified Professionals",
    description:
      "Trusted and verified service providers for your needs.",
    icon: BadgeCheck,
    color: "text-green-400",
  },

  {
    title: "Fast Booking",
    description:
      "Book services quickly with simple steps.",
    icon: Clock,
    color: "text-cyan-400",
  },

  {
    title: "Secure Payment",
    description:
      "Safe and reliable online payment experience.",
    icon: ShieldCheck,
    color: "text-yellow-400",
  },

  {
    title: "24/7 Support",
    description:
      "Customer support whenever you need help.",
    icon: Headphones,
    color: "text-purple-400",
  },
];



export default function WhyChooseUs() {

  return (

    <section className="mt-8 px-4">


      {/* Heading */}

      <div className="mb-5">

        <h2
          className="
          text-xl
          font-bold
          text-white
          "
        >
          Why Choose Us?
        </h2>


        <p
          className="
          mt-1
          text-sm
          text-slate-400
          "
        >
          We make your service booking simple and reliable.
        </p>

      </div>





      {/* Cards */}

      <div
        className="
        grid
        grid-cols-2
        gap-3
        "
      >


        {features.map((item)=>{


          const Icon = item.icon;


          return (

            <div
              key={item.title}
              className="
              rounded-2xl
              border
              border-slate-700
              bg-slate-900
              p-4
              transition
              hover:border-cyan-400
              "
            >


              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-slate-800
                "
              >

                <Icon
                  size={26}
                  className={item.color}
                />

              </div>





              <h3
                className="
                mt-3
                text-sm
                font-semibold
                text-white
                "
              >
                {item.title}
              </h3>





              <p
                className="
                mt-2
                text-xs
                leading-relaxed
                text-slate-400
                "
              >
                {item.description}
              </p>



            </div>

          );


        })}


      </div>


    </section>

  );

}