import Image from "next/image";
import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <div className="relative h-screen block">
      {/* <video
        src="/hd0983.mov"
        muted
        autoPlay
        loop
        className="absolute w-screen min-h-full"
        style={{ objectFit: "cover" }}
      ></video> */}
      <Image
        src="/church.jpg"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        fill
      />
      <div className=" text-white absolute top-1/3 left-1/2 -translate-x-1/2 text-center ">
        <h1 className=" text-6xl pb-5">A Christ centered Church</h1>
        <p className=" text-3xl">In the world but not of the world</p>
        <div className=" flex justify-center gap-5 mt-10">
          <HeroButtons
            text="Statement of Faith"
            link="/Subpages/About/Beliefs"
          />
          <HeroButtons text="Join Us" link="/#" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
