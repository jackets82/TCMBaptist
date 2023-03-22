import Image from "next/image";
import Link from "next/link";

function SundayCard({ pic, text }) {
  return (
    <div className=" bg-gray-300 rounded overflow-hidden shadow  hover:scale-105 transition-all duration-150 hover:shadow-lg">
      <Link href="/#">
        <div className=" rounded h-36 w-full justify-center items-center flex relative flex-wrap">
          <Image src={pic} fill style={{ objectFit: "cover" }} />
        </div>
        <div className=" px-2">
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
}

export default SundayCard;
