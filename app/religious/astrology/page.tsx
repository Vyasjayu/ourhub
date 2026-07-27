"use client";


import AstrologerCard from "@/components/astrology/AstrologerCard";
import AstrologyServices from "@/components/astrology/AstrologyServices";
import BottomNavigation from "@/components/astrology/BottomNavigation";
import FAQ from "@/components/astrology/FAQ";
import FreeKundli from "@/components/astrology/FreeKundli";
import Hero from "@/components/astrology/Hero";
import LocationBar from "@/components/astrology/LocationBar";
import ReviewSection from "@/components/astrology/ReviewSection";
import SearchAstrologer from "@/components/astrology/SearchAstrologer";
import TrendingServices from "@/components/astrology/TrendingServices";
import WhyChooseUs from "@/components/astrology/WhyChooseUs";
// import LocationBar from "@/components/astrology/LocationBar";
// import SearchAstrologer from "@/components/astrology/SearchAstrologer";

// import TrendingServices from "@/components/astrology/TrendingServices";

// import AstrologerCard from "@/components/astrology/AstrologerCard";

// import AstrologyServices from "@/components/astrology/AstrologyServices";

// import WhyChooseUs from "@/components/astrology/WhyChooseUs";

// import FreeKundli from "@/components/astrology/FreeKundli";

// import Reviews from "@/components/astrology/Reviews";

// import FAQ from "@/components/astrology/FAQ";

// import BottomNavigation from "@/components/astrology/BottomNavigation";


import { astrologers } from "@/data/astrologers";



export default function JyotishPage(){


return (

<main
className="
min-h-screen
bg-[#050B14]
pb-24
"
>


{/* Hero */}

<Hero />



<div
className="
mx-auto
max-w-md
px-3
"
>


{/* Location */}

<LocationBar />



{/* Search */}

<SearchAstrologer />



{/* Trending */}

<TrendingServices />



{/* Top Astrologers */}

<section className="mt-8">


<h2
className="
text-xl
font-bold
text-white
"
>
⭐ Top Astrologers
</h2>



<div
className="
mt-5
space-y-4
"
>


{
astrologers.map((astrologer)=>(


<AstrologerCard

key={astrologer.id}

astrologer={astrologer}

/>


))
}



</div>


</section>




{/* Services */}


<AstrologyServices />



{/* Why Choose */}

<WhyChooseUs />



{/* Free Kundli */}

<FreeKundli />



{/* Reviews */}

<ReviewSection />



{/* FAQ */}

<FAQ />



</div>



{/* Bottom */}

<BottomNavigation />


</main>

)

}