import Image from "next/image";
import JoinUs from "./JoinUs";
import LeftJoinUs from "./LeftJoinUs";
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
      <div className=" grid grid-cols-3 gap-5 w-full place-items-center">
        <JoinUsCards text="Ministries" />
        <JoinUsCards text="Home Groups" />
        <JoinUsCards />
        <JoinUsCards />
        <JoinUsCards />
        <JoinUsCards />
        {/* <div className=" rounded-2xl w-1/2 relative overflow-hidden">
          <Image src="/sermon.jpg" fill style={{ objectFit: "cover" }} />
          <div className="absolute z-9 items-center w-full gap-5 flex flex-col text-white bottom-10 justify-center">
            <h1 className=" text-4xl">Watch Past Sermons</h1>
            <p className=" text-xl tracking-wider">
              Listen to previous messages
            </p>
            <button className=" bg-green-600 rounded px-5 py-1">
              Listen Now
            </button>
          </div>
        </div> */}
      </div>
      <div className=" absolute inset-0 rounded-2xl bg-gradient-to-b from-white via-transparent to-transparent"></div>
    </div>
  );
}

export default JoinUsMain;
