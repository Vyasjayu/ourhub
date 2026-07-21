"use client";

import { Star, Quote } from "lucide-react";


const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Customer",
    review:
      "Amazing service experience. Professional team and quick response.",
    rating: 5,
  },

  {
    name: "Priya Verma",
    role: "Customer",
    review:
      "I booked home service and the work was completed perfectly.",
    rating: 5,
  },

  {
    name: "Amit Patel",
    role: "Business Owner",
    review:
      "Very easy platform to find trusted service providers.",
    rating: 4,
  },

];



export default function Testimonials() {

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
          Customer Reviews
        </h2>


        <p
          className="
          mt-1
          text-sm
          text-slate-400
          "
        >
          What our customers say about us
        </p>

      </div>





      {/* Reviews */}

      <div
        className="
        flex
        gap-4
        overflow-x-auto
        pb-3
        scrollbar-hide
        "
      >


        {testimonials.map((item,index)=>(


          <div
            key={index}
            className="
            min-w-[280px]
            rounded-2xl
            border
            border-slate-700
            bg-slate-900
            p-5
            "
          >


            {/* Quote Icon */}

            <div
              className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-cyan-400/10
              "
            >

              <Quote
                size={20}
                className="text-cyan-400"
              />

            </div>





            {/* Review */}

            <p
              className="
              mt-4
              text-sm
              leading-relaxed
              text-slate-300
              "
            >
              "{item.review}"
            </p>





            {/* Rating */}

            <div
              className="
              mt-4
              flex
              gap-1
              "
            >

              {Array.from({
                length:item.rating
              }).map((_,i)=>(

                <Star
                  key={i}
                  size={16}
                  fill="currentColor"
                  className="text-yellow-400"
                />

              ))}

            </div>





            {/* User */}

            <div
              className="
              mt-5
              border-t
              border-slate-700
              pt-4
              "
            >

              <h3
                className="
                text-sm
                font-semibold
                text-white
                "
              >
                {item.name}
              </h3>


              <p
                className="
                text-xs
                text-slate-400
                "
              >
                {item.role}
              </p>


            </div>



          </div>


        ))}


      </div>


    </section>

  );

}