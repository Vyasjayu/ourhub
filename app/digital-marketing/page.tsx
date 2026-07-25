"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    image: "/images/digital-marketing/seo.jpg",
    description: "Improve your website ranking and grow organic traffic.",
  },
  {
    title: "Social Media Marketing",
    image: "/images/digital-marketing/social-media.jpg",
    description: "Boost your brand on Facebook, Instagram & LinkedIn.",
  },
  {
    title: "Google Ads",
    image: "/images/digital-marketing/google-ads.jpg",
    description: "Reach the right audience with high-converting campaigns.",
  },
  {
    title: "Facebook & Instagram Ads",
    image: "/images/digital-marketing/meta-ads.jpg",
    description: "Increase leads and sales through Meta advertising.",
  },
  {
    title: "Content Marketing",
    image: "/images/digital-marketing/content.jpg",
    description: "Engaging content to build trust and attract customers.",
  },
  {
    title: "Email Marketing",
    image: "/images/digital-marketing/email.jpg",
    description: "Professional email campaigns with better conversion.",
  },
  {
    title: "Website Promotion",
    image: "/images/digital-marketing/website.jpg",
    description: "Grow your online presence with smart marketing strategies.",
  },
  {
    title: "Brand Advertising",
    image: "/images/digital-marketing/branding.jpg",
    description: "Build a strong brand identity through digital advertising.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-md items-center gap-3 px-4 py-4">
          <Link
            href="/"
            className="rounded-full bg-slate-800 p-2 transition hover:bg-slate-700"
          >
            <ArrowLeft size={18} />
          </Link>

          <div>
            <h1 className="text-xl font-bold">
              Digital Marketing & Advertising
            </h1>
            <p className="text-xs text-gray-400">
              Grow Your Business with Smart Marketing Solutions
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-md px-4 py-6">
        {/* Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-5 text-white shadow-xl">
          <h2 className="text-2xl font-bold">
            Digital Marketing Services
          </h2>

          <p className="mt-2 text-sm leading-6">
            SEO, Google Ads, Social Media Marketing, Brand Promotion,
            Performance Marketing, Content Marketing, Website Promotion and
            complete digital advertising solutions are coming soon on OurHub.
          </p>

          <span className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-purple-700">
            🚀 Coming Soon
          </span>
        </div>

        {/* Services */}
        <h2 className="mb-4 mt-8 text-lg font-bold">
          Popular Digital Marketing Services
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-purple-500"
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

                <p className="mt-1 line-clamp-2 text-xs text-gray-400">
                  {service.description}
                </p>

                <span className="mt-3 inline-block rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-[11px] font-bold text-white">
                  Coming Soon
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <div className="mt-8 rounded-2xl bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            Why Choose OurHub Marketing?
          </h2>

          <ul className="mt-4 space-y-3 text-sm text-gray-300">
            <li>📈 Increase Website Traffic</li>
            <li>🎯 Targeted Advertising Campaigns</li>
            <li>💰 Better ROI & Lead Generation</li>
            <li>📱 Complete Social Media Management</li>
            <li>🚀 Brand Growth & Online Visibility</li>
            <li>🛡️ Trusted Digital Marketing Experts</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mt-8 rounded-2xl bg-slate-900 p-5">
          <h2 className="text-lg font-bold">
            Our Marketing Solutions
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-slate-800 p-3 text-center">
              🔍
              <p className="mt-2 font-medium">SEO</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3 text-center">
              📢
              <p className="mt-2 font-medium">Google Ads</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3 text-center">
              📱
              <p className="mt-2 font-medium">Social Media</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3 text-center">
              ✉️
              <p className="mt-2 font-medium">Email Marketing</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3 text-center">
              🎨
              <p className="mt-2 font-medium">Branding</p>
            </div>

            <div className="rounded-xl bg-slate-800 p-3 text-center">
              📊
              <p className="mt-2 font-medium">Analytics</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 p-5 text-center shadow-xl">
          <h2 className="text-xl font-bold">
            Launch Your Business Online
          </h2>

          <p className="mt-2 text-sm text-purple-100">
            We're building a complete Digital Marketing & Advertising platform
            to help businesses grow faster with powerful online marketing
            solutions.
          </p>

          <button className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-purple-700 transition hover:bg-gray-100">
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}