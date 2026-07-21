"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    title: "Website Development",
    image: "/images/software/website.jpg",
    description: "Professional business & portfolio websites.",
  },
  {
    title: "Mobile Apps",
    image: "/images/software/mobile-app.jpg",
    description: "Android & iOS application development.",
  },
  {
    title: "UI/UX Design",
    image: "/images/software/uiux.jpg",
    description: "Modern, responsive and user-friendly designs.",
  },
  {
    title: "Digital Marketing",
    image: "/images/software/marketing.jpg",
    description: "SEO, Social Media & Online Branding.",
  },
  {
    title: "Graphic Design",
    image: "/images/software/graphic.jpg",
    description: "Logo, Banner, Poster & Brand Identity.",
  },
  {
    title: "Cloud Services",
    image: "/images/software/cloud.jpg",
    description: "Cloud hosting & server management.",
  },
  {
    title: "Cyber Security",
    image: "/images/software/security.jpg",
    description: "Protect your business with secure solutions.",
  },
  {
    title: "AI Solutions",
    image: "/images/software/ai.jpg",
    description: "AI automation & smart business tools.",
  },
];

export default function SoftwarePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-4">
          <Link
            href="/"
            className="rounded-full bg-slate-800 p-2 hover:bg-slate-700"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-xl font-bold">Software Services</h1>
            <p className="text-xs text-gray-400">
              Digital Solutions for Every Business
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 py-6">
        {/* Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-700 p-5 text-white shadow-lg">
          <h2 className="text-2xl font-bold">
            Software Solutions
          </h2>

          <p className="mt-2 text-sm">
            Website development, mobile apps, UI/UX design, cloud services,
            AI solutions and many more digital services are coming soon on
            OurHub.
          </p>

          <span className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-700">
            💻 Coming Soon
          </span>
        </div>

        {/* Services */}
        <h2 className="mt-8 mb-4 text-lg font-bold">
          Popular Software Services
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-28 w-full object-cover"
              />

              <div className="p-3">
                <h3 className="text-sm font-semibold">
                  {service.title}
                </h3>

                <p className="mt-1 text-xs text-gray-400 line-clamp-2">
                  {service.description}
                </p>

                <span className="mt-3 inline-block rounded-full bg-violet-600 px-3 py-1 text-[11px] font-bold text-white">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="mt-8 rounded-2xl bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            Why Choose OurHub Software?
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>💻 Expert Developers</li>
            <li>🎨 Modern UI/UX Design</li>
            <li>☁️ Secure Cloud Solutions</li>
            <li>⚡ Fast Project Delivery</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-700 p-5 text-center">
          <h2 className="text-xl font-bold">
            More Software Services Coming Soon
          </h2>

          <p className="mt-2 text-sm text-violet-100">
            We are building a complete software marketplace where businesses
            can find trusted IT professionals and digital solutions.
          </p>

          <button className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-indigo-700">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}