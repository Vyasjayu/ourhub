import PageLayout from "@/components/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout title="About OurHub Services">
      <div className="space-y-6 text-gray-300 leading-8">

        <p>
          Welcome to <span className="font-semibold text-white">OurHub Services</span>,
          your trusted online platform for booking verified professionals across
          multiple service categories. Our goal is to make finding reliable
          service providers simple, secure, and convenient for every customer.
        </p>

        <p>
          Whether you need a <strong>Pandit</strong> for religious ceremonies,
          an <strong>Astrologer</strong>, <strong>AC Repair</strong>,
          <strong> Electrician</strong>, <strong>Plumber</strong>,
          <strong> Car Wash</strong>, <strong>Construction Services</strong>,
          <strong> Event Management</strong>,
          <strong> Digital Marketing</strong>, or
          <strong> Web Designing & Development</strong>, OurHub connects you
          with trusted professionals through a seamless online booking
          experience.
        </p>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Our Mission
          </h2>

          <p>
            Our mission is to simplify service booking by creating a trusted
            marketplace where customers can easily discover, compare, and book
            verified professionals. We focus on transparency, quality,
            convenience, and customer satisfaction.
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Services We Offer
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Religious Services (Pandit Booking, Astrology, Online Pooja)</li>
            <li>Home Services (AC Repair, Electrician, Plumber, Carpenter, Cleaning)</li>
            <li>Automobile Services</li>
            <li>Construction Services</li>
            <li>Event Management Services</li>
            <li>Digital Marketing & Advertising</li>
            <li>Web Designing & Development</li>
            <li>And many more professional services.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Why Choose OurHub?
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>Verified and experienced professionals.</li>
            <li>Simple and secure online booking process.</li>
            <li>Transparent pricing with no hidden charges.</li>
            <li>Safe online payment options.</li>
            <li>Reliable customer support.</li>
            <li>Multiple service categories available on one platform.</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold text-yellow-400">
            Our Vision
          </h2>

          <p>
            We aim to become one of India's most trusted online service booking
            platforms by providing high-quality services, verified
            professionals, secure transactions, and an excellent customer
            experience.
          </p>
        </div>

        <div className="rounded-xl border border-yellow-500/20 bg-slate-800 p-5">
          <h2 className="mb-2 text-lg font-semibold text-yellow-400">
            Our Commitment
          </h2>

          <p>
            At OurHub Services, we are committed to delivering a safe,
            transparent, and reliable platform where customers can confidently
            book professional services and service providers can grow their
            business through genuine bookings.
          </p>
        </div>

      </div>
    </PageLayout>
  );
}