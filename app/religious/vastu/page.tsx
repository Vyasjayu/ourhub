"use client";

import Link from "next/link";
import {
  Search,
  Star,
  Filter,
} from "lucide-react";

import CitySelector from "@/components/religious/CitySelector";


const vastuExperts = [
  {
    id: 1,
    name: "Acharya Amit Vastu Shastri",
    experience: "18 Years",
    language: "Hindi, English",
    rating: 4.9,
    price: 499,
    image: "🏠",
  },
  {
    id: 2,
    name: "Pt. Rajesh Vastu Expert",
    experience: "12 Years",
    language: "Hindi",
    rating: 4.8,
    price: 399,
    image: "🧿",
  },
  {
    id: 3,
    name: "Acharya Neha Vastu Consultant",
    experience: "10 Years",
    language: "Hindi, English",
    rating: 4.9,
    price: 599,
    image: "✨",
  },
];


export default function VastuPage() {

  return (

    <main className="min-h-screen bg-[#071321] flex justify-center">


      <div className="w-full max-w-[430px] bg-[#071321] text-white min-h-screen pb-24">


        {/* Header */}

        <div className="sticky top-0 z-50 bg-[#081423] border-b border-white/10">

          <div className="px-4 py-4">


            <h1 className="text-2xl font-bold">

              <span className="text-white">
                Vastu 
              </span>

              <span className="text-[#D4AF37]">
                Consultation
              </span>

            </h1>


            <p className="text-sm text-gray-400 mt-1">
              Get Verified Vastu Experts For Home & Office
            </p>


          </div>

        </div>



        {/* Search */}

        <div className="px-4 mt-5">


          <div className="h-14 rounded-2xl bg-[#0d1b2a] flex items-center px-4">


            <Search 
              className="text-gray-400" 
              size={20}
            />


            <input

              placeholder="Search Vastu Expert..."

              className="flex-1 bg-transparent outline-none ml-3 placeholder:text-gray-500"

            />


          </div>


        </div>




        {/* City */}

        <CitySelector />





        {/* Filter */}

        <div className="px-4 mt-5">


          <button

            className="h-11 px-5 rounded-xl bg-[#D4AF37] text-[#071321] font-semibold flex items-center gap-2"

          >


            <Filter size={18}/>

            Filters


          </button>


        </div>







        {/* Top Vastu Experts */}


        <div className="px-4 mt-8">


          <h2 className="text-xl font-bold mb-4">

            🏠 Top Vastu Experts

          </h2>





          <div className="space-y-5">



          {
            vastuExperts.map((item)=>(



              <div

                key={item.id}

                className="bg-[#0d1b2a] rounded-3xl p-5 border border-white/10"

              >





                <div className="flex gap-4">



                  <div

                    className="w-20 h-20 rounded-2xl bg-[#D4AF37] text-4xl flex items-center justify-center"

                  >

                    {item.image}


                  </div>





                  <div className="flex-1">


                    <h3 className="font-bold text-lg">

                      {item.name}

                    </h3>



                    <p className="text-gray-400 text-sm mt-1">

                      {item.experience}

                    </p>



                    <p className="text-gray-400 text-sm">

                      {item.language}

                    </p>




                    <div className="flex items-center gap-1 mt-2">


                      <Star

                        size={16}

                        className="fill-yellow-400 text-yellow-400"

                      />


                      <span>

                        {item.rating}

                      </span>


                    </div>



                  </div>


                </div>






                <div className="mt-5 flex justify-between items-center">



                  <div>


                    <p className="text-gray-400 text-sm">

                      Starting From

                    </p>



                    <h3 className="text-2xl font-bold text-[#D4AF37]">

                      ₹{item.price}

                    </h3>



                  </div>



                </div>







                <div className="grid grid-cols-2 gap-3 mt-5">



                  <Link

                    href={`/religious/vastu/${item.id}`}

                    className="h-12 rounded-xl border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center font-semibold"

                  >

                    View Profile


                  </Link>





                  <Link

                    href={`/religious/vastu/${item.id}`}

                    className="h-12 rounded-xl bg-[#D4AF37] text-[#071321] flex items-center justify-center font-bold"

                  >

                    Consult Now


                  </Link>



                </div>





              </div>



            ))

          }



          </div>



        </div>



      </div>


    </main>

  );

}