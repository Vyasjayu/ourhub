import Image from "next/image";

interface Props {
  name: string;
  image: string;
}

export default function PoojaCard({ name, image }: Props) {
  return (
    <div
      className="
      bg-[#111C2B]
      rounded-xl
      border
      border-[#2C3A4D]
      flex
      flex-col
      items-center
      justify-center
      py-3
      px-2
      h-[118px]
      active:scale-95
      transition
    "
    >
      <div className="relative w-16 h-16 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain scale-150"
        />
      </div>

      <p
        className="
        mt-2
        text-center
        text-[11px]
        leading-4
        whitespace-pre-line
      "
      >
        {name}
      </p>
    </div>
  );
}