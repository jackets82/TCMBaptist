import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <div className=" relative -mt-20 h-[50vh]">
      <video
        src="/hero_video-smallerer.mov"
        muted
        autoPlay
        loop
        className=" h-full w-full"
        style={{ objectFit: "cover" }}
      ></video>

      <div className=" bg-orange-600 text-white absolute px-10 py-20 w-3/5 -bottom-40 left-1/2 -translate-x-1/2 text-center flex flex-col justify-center">
        <h1 className=" text-6xl pb-5">A Christ centered Church</h1>
        <p className=" text-3xl">In the world but not of the world</p>
      </div>
    </div>
  );
}

export default Hero;
