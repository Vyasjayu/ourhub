import Image from "next/image";

interface Props {
  title: string;
  image: string;
  price: string;
}

export default function TrendingCard({
  title,
  image,
  price,
}: Props) {
  return (
    <div
      className="
      min-w-[150px]
      bg-[#0D1724]
      rounded-2xl
      border
      border-yellow-700/40
      overflow-hidden
      shadow-xl
    "
    >
      <div className="relative h-30 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3 text-center">

        <h3
          className="
          text-white
          text-sm
          font-semibold
          whitespace-pre-line
          min-h-[42px]
        "
        >
          {title}
        </h3>

        <p className="text-yellow-400 text-lg font-bold mt-2">
          ₹{price}
        </p>

        <button
          className="
          mt-3
          w-full
          rounded-xl
          bg-yellow-400
          text-black
          py-2
          font-semibold
        "
        >
          Book Now
        </button>

      </div>
    </div>
  );
}