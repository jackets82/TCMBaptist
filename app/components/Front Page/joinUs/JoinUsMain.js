import Image from "next/image";
import JoinUsCards from "./JoinUsCards";

function JoinUsMain() {
  return (
    <div className="mx-auto w-full flex justify-center max-w-5xl flex-col items-center my-40 gap-10 relative">
      <div className="w-full flex justify-center rounded-2xl relative h-[300px] overflow-hidden">
        <Image src="/bible.jpg" fill style={{ objectFit: "cover" }} />
        <div className=" absolute z-10 text-center gap-5 flex flex-col top-10">
          <h1 className=" text-5xl font-black">Join Us This Sunday</h1>
          <p className=" text-xl tracking-wider">
            We meet Sundays at 1030 and 1800
          </p>
        </div>
      </div>
      <h1 className=" text-3xl">Explore what else happens at TCM</h1>
      <div className=" grid grid-cols-2 gap-5 w-full place-items-center z-20">
        <JoinUsCards title="Young People" link="/Subpages/About/Beliefs" />
        <JoinUsCards title="Home Groups" link="/Subpages/About/Beliefs" />
        <JoinUsCards title="Men and Women" link="/Subpages/About/Beliefs" />
        <JoinUsCards title="Courses" link="/Subpages/About/Beliefs" />
      </div>
      <div className=" absolute inset-0 rounded-2xl bg-gradient-to-b from-white via-transparent to-transparent"></div>
    </div>
  );
}

export default JoinUsMain;
