"use client";

import { ArrowLeft, Sparkles, Star, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";


import SearchBar from "@/components/religious/SearchBar";
import CitySelector from "@/components/religious/CitySelector";
import WelcomeBanner from "@/components/religious/WelcomeBanner";
import TopCategories from "@/components/religious/TopCategories";
import PopularPujas from "@/components/religious/PopularPujas";
import JyotishSection from "@/components/religious/JyotishSection";
import VastuSection from "@/components/religious/VastuSection";
import OfferBanner from "@/components/religious/OfferBanner";
import TopPandits from "@/components/religious/TopPandits";
import Reviews from "@/components/religious/Reviews";
import FAQ from "@/components/religious/FAQ";
import BottomNav from "@/components/BottomNav";



export default function ReligiousPage() {


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

pb-32

"

      >



        {/* Background Effects */}


        <div

          className="
absolute
top-0
left-0
right-0
h-[350px]

bg-gradient-to-b

from-yellow-400/20

via-orange-400/5

to-transparent

blur-3xl

"

        />



        <div

          className="
absolute
bottom-40
right-[-100px]

h-60
w-60

rounded-full

bg-cyan-400/10

blur-3xl

"

        />








        {/* Floating Header */}


        <header

          className="
sticky
top-3
z-50

mx-4

rounded-3xl

border
border-white/10

bg-[#081423]/90

backdrop-blur-xl

shadow-2xl

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



            <div>


              <div

                className="
flex
items-center
gap-2

"

              >


                <div

                  className="
h-10
w-10

rounded-full

bg-yellow-400/20

flex
items-center
justify-center
flex
      justify-center
"

                >

                  <Sparkles

                    size={20}

                    className="text-yellow-400"

                  />

                </div>



                <div>


                  <h1

                    className="
font-bold
text-lg

"

                  >

                    Religious

                    <span className="text-yellow-400">
                      Services
                    </span>


                  </h1>


                  <p

                    className="
text-xs
text-slate-400

"

                  >

                    Book Spiritual Services

                  </p>


                </div>



              </div>


            </div>






            <button

              onClick={() => router.back()}

              className="
h-10
w-10

rounded-xl

bg-white/10

flex
items-center
justify-center

"

            >

              <ArrowLeft

                size={22}

                className="text-yellow-400"

              />

            </button>




          </div>


        </header>









        {/* Trust Section */}


        <section

          className="
mx-4
mt-6

rounded-3xl

border
border-green-400/20

bg-gradient-to-r

from-green-400/10

to-transparent

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
h-12
w-12

rounded-2xl

bg-green-400/20

flex
items-center
justify-center

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

                Trusted spiritual experts near you

              </p>


            </div>



          </div>


        </section>










        {/* Search Area */}


        <section

          className="
mx-4
mt-5

space-y-3

"

        >


          <SearchBar />


          <CitySelector />


        </section>









        {/* Hero Banner */}


        <section

          className="
mx-4
mt-6

rounded-3xl

overflow-hidden

border

border-yellow-400/20

bg-gradient-to-br

from-yellow-400/10

via-orange-400/5

to-transparent

shadow-xl

"

        >


          <WelcomeBanner />


        </section>









        {/* Categories */}


        <section

          className="
mt-8

"

        >


          <div

            className="
flex
items-center
justify-between

px-4
mb-3

"

          >

            <h2

              className="
text-lg
font-bold

"

            >

              Explore Services

            </h2>


            <Star

              size={18}

              className="text-yellow-400"

            />


          </div>



          <div

            className="
rounded-3xl

border
border-white/10

bg-[#081423]

p-3

"

          >

            <TopCategories />

          </div>


        </section>









        {/* Main Sections */}



        <div className="mt-6 space-y-6">



          <section className="mx-4 rounded-3xl bg-[#081423] border border-white/10 p-3">

            <PopularPujas />

          </section>




          <section className="mx-4 rounded-3xl bg-[#081423] border border-white/10 p-3">

            <JyotishSection />

          </section>





          <section className="mx-4 rounded-3xl bg-[#081423] border border-white/10 p-3">

            <VastuSection />

          </section>






          <section className="mx-4">

            <OfferBanner />

          </section>






          <section className="mx-4 rounded-3xl bg-[#081423] border border-white/10 p-3">

            <TopPandits />

          </section>







          <section className="mx-4 rounded-3xl bg-[#081423] border border-white/10 p-3">

            <Reviews />

          </section>







          <section className="mx-4 rounded-3xl bg-[#081423] border border-white/10 p-3 mb-5">

            <FAQ />

          </section>




        </div>








        {/* Bottom Navigation */}


        <BottomNav />





      </div>


    </main>

  );

}