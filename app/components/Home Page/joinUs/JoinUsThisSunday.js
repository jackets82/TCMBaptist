import Image from "next/image";
import Link from "next/link";

function JoinUsThisSunday() {
  return (
    <div className="w-full flex justify-center rounded-2xl relative h-[300px] overflow-hidden">
      <Image src="/bible.jpg" fill style={{ objectFit: "cover" }} />
      <div className=" absolute z-10 text-center gap-5 flex flex-col top-10">
        <Link href="/Subpages/Sundays">
          <h1 className=" text-5xl font-black">Join Us This Sunday</h1>
        </Link>
        <p className=" text-xl tracking-wider">
          We meet Sundays at 1030 and 1800
        </p>
      </div>
    </div>
  );
}

export default JoinUsThisSunday;
