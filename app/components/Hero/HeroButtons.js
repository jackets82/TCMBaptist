import Link from "next/link";

function HeroButtons({ text, link, textColour, ringColour }) {
  return (
    <Link
      href={link}
      scroll={false}
      className={`${ringColour}  ring-2 px-5 py-2 text-lg w-48 ${textColour}
     hover:bg-black hover:bg-opacity-5 hover:shadow
      transition-all duration-150
       mt-12
    `}
    >
      {text}
    </Link>
  );
}

export default HeroButtons;
