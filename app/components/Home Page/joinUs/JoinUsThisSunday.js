import Image from "next/image";
import Link from "next/link";

function JoinUsThisSunday() {
  return (
    <div className=" bg-slate-300">
      <div className="w-1/2 mx-auto flex justify-center rounded-2xl relative h-[300px] overflowhidden">
        <Image src="/bible.jpg" fill style={{ objectFit: "cover" }} />
        <div className=" absolute z-10 text-center gap-5 flex flex-col -right-10 -top-10 bg-orange-600 px-5 py-3">
          <h1 className=" text-5xl font-black">Join Us This Sunday</h1>
          <p className=" text-xl tracking-wider ">
            We meet Sundays at 1030 and 1800
          </p>
        </div>
      </div>
    </div>
  );
}

export default JoinUsThisSunday;
