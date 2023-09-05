import Image from "next/image";
import Link from "next/link";

function JoinUsCards({ title, link }) {
  return (
    <button className=" rounded-2xl w-full h-52 relative overflow-hidden bg-red-600 hover:cursor-pointer">
      <Link href={link}>
        <Image src="/cross.jpg" fill style={{ objectFit: "cover" }} />{" "}
        <div className="w-full h-5 absolute bottom-5 text-center">
          <p className=" text-xl font-bold tracking-wider text-white">
            {title}
          </p>
        </div>
      </Link>
    </button>
  );
}

export default JoinUsCards;
