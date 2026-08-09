import Link from "next/link";

export default function Footer() {
    return (
        <footer className="min-h-screen flex justify-center bg-slate-950 border-t border-slate-800 text-white">
            <div className="relative
          w-full
          max-w-[430px]
          min-h-screen
          overflow-hidden max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                {/* <div > */}

                    {/* Company Section */}
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold text-yellow-400">
                            OurHub Services
                        </h2>

                        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-400">
                            OurHub is an online platform where customers can book verified
                            professionals including Pandits, Astrologers, AC Repair,
                            Electricians, Plumbers, Car Wash, Wedding Planners and many more.
                        </p>
                    </div>

                     {/* Links + Contact */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-yellow-400">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="hover:text-yellow-400">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:text-yellow-400"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/refund-policy" className="hover:text-yellow-400">
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/cancellation-policy"
                  className="hover:text-yellow-400"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="break-all">
                  support@ourhubservices.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p>+91 8878632431</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Working Hours</p>
                <p>Monday – Saturday</p>
                <p>9:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
</div>

                <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} OurHub Services. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}