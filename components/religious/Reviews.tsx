"use client";

import { Star, BadgeCheck } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Verma",
    city: "Indore",
    rating: 5,
    review:
      "Excellent service. Pandit ji arrived on time and completed the Griha Pravesh Puja perfectly.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    city: "Ujjain",
    rating: 5,
    review:
      "Very knowledgeable Jyotish. The consultation was clear and helpful.",
  },
  {
    id: 3,
    name: "Amit Patel",
    city: "Ratlam",
    rating: 4,
    review:
      "Good Vastu consultation for my shop. Professional and polite service.",
  },
];

export default function Reviews() {
  return (
    <section className="mt-8">

      <div className="flex items-center justify-between px-4 mb-4">
        <h2 className="text-xl font-bold text-white">
          ⭐ Customer Reviews
        </h2>

        <button className="text-[#D4AF37] text-sm">
          View All
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 pb-2">

        {reviews.map((review) => (
          <div
            key={review.id}
            className="min-w-[300px] rounded-3xl bg-[#0d1b2a] border border-white/10 p-5"
          >
            {/* User */}
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#071321] font-bold text-xl">
                {review.name.charAt(0)}
              </div>

              <div>

                <div className="flex items-center gap-2">

                  <h3 className="font-bold text-white">
                    {review.name}
                  </h3>

                  <BadgeCheck
                    size={16}
                    className="text-green-500"
                  />

                </div>

                <p className="text-gray-400 text-sm">
                  {review.city}
                </p>

              </div>

            </div>

            {/* Rating */}

            <div className="flex gap-1 mt-4">
              {Array.from({ length: review.rating }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review */}

            <p className="text-gray-300 text-sm leading-6 mt-4">
              {review.review}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}