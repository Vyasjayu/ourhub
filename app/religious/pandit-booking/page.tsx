"use client";

import { ArrowLeft, Sparkles, ShieldCheck, Star } from "lucide-react";
import { useRouter } from "next/navigation";


import SearchBar from "@/components/religious/SearchBar";
import CitySelector from "@/components/religious/CitySelector";
import PanditList from "@/components/religious/PanditList";



export default function PanditBookingPage() {


  const router = useRouter();



  return (

    <main

      className="
      min-h-screen
      bg-[#020617]
      flex
      justify-center
      "

    >



      <div

        className="
        relative

        w-full
        max-w-[430px]

        min-h-screen

        overflow-hidden

        bg-[#071321]

        text-white

        pb-10

        "

      >






        {/* Background Glow */}


        <div

          className="
          absolute
          top-0
          left-0
          right-0

          h-[300px]

          bg-gradient-to-b

          from-yellow-400/20

          via-orange-400/10

          to-transparent

          blur-3xl

          "

        />







        {/* Premium Header */}


        <header

          className="
          sticky
          top-3
          z-50

          mx-4

          rounded-3xl

          border
          border-yellow-400/20

          bg-[#081423]/90

          backdrop-blur-xl

          shadow-xl

          "

        >


          <div

            className="
            flex
            items-center
            justify-between
            p-4
            "

          >




            <div

              className="
              flex
              items-center
              gap-3
              "

            >



              <div

                className="
                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-2xl

                bg-yellow-400/20

                "

              >

                <Sparkles

                  size={22}

                  className="text-yellow-400"

                />

              </div>




              <div>


                <h1

                  className="
                  text-lg
                  font-bold
                  "

                >

                  Pandit

                  <span className="text-yellow-400">
                    {" "}Booking
                  </span>


                </h1>



                <p

                  className="
                  text-xs
                  text-slate-400
                  "

                >

                  Trusted Spiritual Experts

                </p>


              </div>



            </div>








            <button

              onClick={()=>router.back()}

              className="
              flex

              h-10
              w-10

              items-center
              justify-center

              rounded-xl

              bg-white/10

              border
              border-white/10

              "

            >

              <ArrowLeft

                size={22}

                className="text-yellow-400"

              />


            </button>




          </div>


        </header>









        {/* Trust Card */}


        <section

          className="
          relative

          mx-4

          mt-6

          rounded-3xl

          border
          border-green-400/20

          bg-green-400/10

          p-4

          "

        >


          <div

            className="
            flex
            items-center
            gap-3
            "

          >


            <div

              className="
              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-2xl

              bg-green-400/20

              "

            >

              <ShieldCheck

                className="text-green-400"

              />

            </div>





            <div>


              <h3

                className="
                font-semibold
                "

              >

                Verified Pandits

              </h3>


              <p

                className="
                text-xs
                text-slate-400
                "

              >

                Experienced spiritual experts

              </p>


            </div>



          </div>



        </section>









        {/* Search Section */}


        <section

          className="
          mx-4

          mt-5

          rounded-3xl

          border

          border-white/10

          bg-[#081423]

          p-3

          "

        >


          <SearchBar />


        </section>









        {/* Location Section */}


        <section

          className="
          mx-4

          mt-4

          rounded-3xl

          border

          border-white/10

          bg-[#081423]

          p-3

          "

        >


          <CitySelector />


        </section>









        {/* Title */}


        <div

          className="
          mt-7

          flex

          items-center

          justify-between

          px-4

          "

        >


          <h2

            className="
            text-lg

            font-bold

            "

          >

            Top Pandits Near You

          </h2>




          <div

            className="
            flex
            items-center
            gap-1

            text-yellow-400

            "

          >

            <Star size={16}/>

            <span className="text-sm">
              4.9
            </span>

          </div>



        </div>









        {/* Pandit List Card */}


        <section

          className="
          mx-4

          mt-4

          rounded-3xl

          border

          border-white/10

          bg-[#081423]

          p-3

          "

        >


          <PanditList />


        </section>







      </div>


    </main>


  );

}