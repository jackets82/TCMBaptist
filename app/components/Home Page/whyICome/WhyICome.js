import Image from "next/image";
import JoinUsMain from "../joinUs/JoinUsMain";
import JoinUsThisSunday from "../joinUs/JoinUsThisSunday";

function WhyICome() {
  return (
    <div className=" bg-orange-600 h-[1000px] py-20">
      <div className=" mx-auto max-w-5xl flex h-full justify-center items-center flex-col gap-10">
        <div className="relative w-full h-1/2">
          <p
            className=" bg-black md:text-5xl text-3xl text-center absolute 
            md:-top-10 md:translate-x-1/2
            px-8 py-5 font-extrabold text-white z-10 
            w-full
            md:w-auto
          "
          >
            Why I attend <span className=" text-orange-600">TCM</span>
          </p>
          <div className="h-0 pt-[56.25%]">
            <iframe
              className=" w-full h-full absolute top-0 left-0"
              src="https://www.youtube.com/embed/-pzgRezQXsk?si=fcNEJyL-XOz-asYo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className=" h-1/2 w-full z-20 relative rounded overflow-hidden">
          <Image src="/bible.jpg" fill style={{ objectFit: "cover" }} />
          <div
            className=" 
            text-white text-center bg-black
            absolute 
            gap-5 flex flex-col px-5 py-3 w-full
            md:w-2/3 md:-translate-x-1/2 md:translate-y-1/2 md:left-1/2 "
          >
            <h1
              className=" 
            text-3xl
            md:text-5xl font-black"
            >
              Join Us This <span className=" text-orange-600">Sunday</span>
            </h1>
            <p className=" text-xl tracking-wider ">
              We meet Sundays at 1030 and 1800
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyICome;
