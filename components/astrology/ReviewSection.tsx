"use client";

import {
  Star,
  BadgeCheck,
  ThumbsUp,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    date: "2 days ago",
    rating: 5,
    helpful: 32,
    review:
      "Very accurate prediction. The guidance regarding my career was excellent. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Verma",
    date: "1 week ago",
    rating: 5,
    helpful: 18,
    review:
      "The astrologer explained everything patiently. I also received practical remedies that really helped.",
  },
  {
    id: 3,
    name: "Amit Patel",
    date: "2 weeks ago",
    rating: 4,
    helpful: 11,
    review:
      "Excellent consultation experience. Worth every minute. Will consult again.",
  },
];

export default function ReviewSection() {
  return (
    <section
      className="
        mt-6
        rounded-3xl
        border
        border-yellow-500/20
        bg-gradient-to-br
        from-[#0E1726]
        to-[#09111D]
        p-5
        shadow-xl
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Customer Reviews
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Verified consultation feedback
          </p>

        </div>

        <div className="text-right">

          <h3 className="text-3xl font-bold text-yellow-400">
            4.9
          </h3>

          <div className="mt-1 flex justify-end">

            {[1,2,3,4,5].map((star)=>(
              <Star
                key={star}
                size={14}
                fill="currentColor"
                className="text-yellow-400"
              />
            ))}

          </div>

          <p className="mt-1 text-xs text-gray-400">
            12,842 Reviews
          </p>

        </div>

      </div>

      {/* Rating Bars */}

      <div className="mt-6 space-y-3">

        {[
          { star:5,value:92 },
          { star:4,value:6 },
          { star:3,value:1 },
          { star:2,value:1 },
          { star:1,value:0 },
        ].map((item)=>(
          <div
            key={item.star}
            className="flex items-center gap-3"
          >

            <span className="w-6 text-sm text-gray-300">
              {item.star}★
            </span>

            <div className="h-2 flex-1 rounded-full bg-[#1B2940]">

              <div
                className="h-2 rounded-full bg-yellow-400"
                style={{
                  width:`${item.value}%`,
                }}
              />

            </div>

            <span className="w-8 text-right text-xs text-gray-400">
              {item.value}%
            </span>

          </div>
        ))}

      </div>

      {/* Reviews */}

      <div className="mt-8 space-y-5">

        {reviews.map((review)=>(

          <div
            key={review.id}
            className="
              rounded-2xl
              border
              border-yellow-500/10
              bg-[#111C30]
              p-5
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-yellow-500/10
                    text-lg
                    font-bold
                    text-yellow-400
                  "
                >
                  {review.name.charAt(0)}
                </div>

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="font-semibold text-white">
                      {review.name}
                    </h3>

                    <BadgeCheck
                      size={16}
                      className="text-green-400"
                    />

                  </div>

                  <p className="text-xs text-gray-500">
                    {review.date}
                  </p>

                </div>

              </div>

              <div className="flex">

                {Array.from({
                  length:review.rating,
                }).map((_,i)=>(
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    className="text-yellow-400"
                  />
                ))}

              </div>

            </div>

            <p
              className="
                mt-4
                leading-7
                text-gray-300
              "
            >
              {review.review}
            </p>

            <button
              className="
                mt-5
                flex
                items-center
                gap-2
                rounded-full
                bg-[#1B2940]
                px-4
                py-2
                text-sm
                text-gray-300
                transition
                hover:bg-[#223554]
              "
            >
              <ThumbsUp size={16} />

              Helpful ({review.helpful})

            </button>

          </div>

        ))}

      </div>

      {/* Bottom CTA */}

      <button
        className="
          mt-6
          w-full
          rounded-2xl
          border
          border-yellow-500
          py-4
          font-semibold
          text-yellow-400
          transition
          hover:bg-yellow-500
          hover:text-black
        "
      >
        View All Reviews
      </button>

    </section>
  );
}