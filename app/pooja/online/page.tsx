import Header from "@/components/online-pooja/Header";
import SearchSection from "@/components/online-pooja/SearchSection";
import HeroBanner from "@/components/online-pooja/HeroBanner";
import PopularCategory from "@/components/online-pooja/PopularCategory";
import WhyChoose from "@/components/online-pooja/WhyChoose";
import HowItWorks from "@/components/online-pooja/HowItWorks";
import PoojaList from "@/components/pooja/PoojaList";
import HelpFooter from "@/components/online-pooja/HelpFooter";
import StickyBooking from "@/components/online-pooja/StickyBooking";


export default function Page() {

  return (

    <main className="flex min-h-screen justify-center bg-[#071424]">


      {/* Mobile Container */}
      <div className="w-full max-w-[430px] min-h-screen bg-[#071424]">


        {/* Scroll Content */}
        <div className="px-4 pb-32">


          <Header />


          <SearchSection />


          <HeroBanner />


          {/* Categories */}
          <PopularCategory />


          {/* Why Choose */}
          <WhyChoose />


          {/* How Booking Works */}
          <HowItWorks />


          {/* All Pooja Cards */}
          <PoojaList />


          {/* Footer */}
          <HelpFooter />


        </div>


        {/* Bottom Booking Button */}
        <StickyBooking />


      </div>


    </main>

  );
}