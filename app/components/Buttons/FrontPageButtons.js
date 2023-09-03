import Link from "next/link";

function FrontPageButtons({ link, title }) {
  return (
    <Link href={link}>
      <button className="py-2 w-40 ring-2 hover:shadow-lg hover:bg-gray-300 text-black ring-black transition-all duration-300">
        {title}
      </button>
    </Link>
  );
}

export default FrontPageButtons;
