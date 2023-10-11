import HeroButtons from "./HeroButtons";

function Hero() {
  return (
    <div className="relative -mt-20 h-[50vh]">
      <video
        src="/hero_video-smallerer.mov"
        muted
        autoPlay
        loop
        className=" h-full w-full"
        style={{ objectFit: "cover" }}
      ></video>

      <div
        className="
      
      bg-orange-600 text-white absolute 
      md:px-10 md:py-20 md:w-3/5 md:-bottom-40
      w-full
      left-1/2 -translate-x-1/2 text-center flex flex-col justify-center"
      >
        <h1
          className="
        md:text-6xl md:pb-5
        text-2xl
        "
        >
          A <span className="font-bold text-black">Christ</span> centered Church
        </h1>
        <p className="md:text-3xl text-white">
          In the world but not of the world
        </p>
      </div>
    </div>
  );
}

export default Hero;
