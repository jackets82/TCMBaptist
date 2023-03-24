import Image from "next/image";
import HeroButtons from "../Hero/HeroButtons";
import SundayCard from "./SundayCard";

function Sundays() {
  return (
    <div className=" bg-sky-200 ">
      <div className=" items-center max-w-6xl text-stone-800 mx-auto text-center px-10 flex flex-col content-center py-44 gap-3">
        <h1 className=" text-4xl">Sundays</h1>
        <hr className="h-2 rounded w-32 mx-auto bg-gray-200 border-0 dark:bg-gray-700 my-8"></hr>
        <div>
          <p>Our worship service starts every Lord's day at 10:30</p>
          <p>Here you want some more basic details about Sunday mornings</p>
        </div>
        <HeroButtons
          text="More Details"
          link="/#"
          textColour="text-black"
          ringColour="ring-black"
        />
        <hr className="h-2 rounded w-32 mx-auto bg-gray-200 border-0 dark:bg-gray-700 my-8"></hr>

        <p className=" text-3xl">What else happens</p>
        <div className=" grid md:grid-cols-3 gap-5 mt-5 grid-cols-1">
          <SundayCard text="Sunday School" pic="/sunday_school.jpeg" />
          <SundayCard text="Extra Time" pic="/Extra Time.png" />
          <SundayCard text="Sunday Evenings" pic="/Sunday_evenings.jpeg" />
        </div>
        <h1 className=" pt-28">Watch our latest sermon here</h1>
        <div className=" bg-black opacity-70 px-20 py-32 relative ">
          <div className="w-3/4 mx-auto relative">
            <Image src="/mainLogo.png" width={500} height={500} />
          </div>
          <div className=" absolute bottom-2 left-2 flex">
            <div className=" relative h-28 w-28 mr-2">
              <Image src="/clouds.jpg" fill style={{ objectFit: "cover" }} />
            </div>
            <div className=" text-white text-left flex flex-col justify-end">
              <p>Inexplicable and Glorious Joy</p>
              <p>Greg DeWeese</p>
              <p>1 Peter 1:6-9</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sundays;
