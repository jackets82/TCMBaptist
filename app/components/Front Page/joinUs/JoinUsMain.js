import JoinUsCards from "./JoinUsCards";
import JoinUsThisSunday from "./JoinUsThisSunday";

function JoinUsMain() {
  return (
    <div className="mx-auto w-full flex justify-center max-w-5xl flex-col items-center my-40 gap-10 relative">
      <JoinUsThisSunday />
      <h1 className=" text-3xl">Explore what else happens at TCM</h1>
      <div className=" grid grid-cols-2 gap-5 w-full place-items-center z-20">
        <JoinUsCards
          title="Young People"
          link="/Subpages/About/Beliefs"
          image="/youth.jpeg"
        />
        <JoinUsCards
          title="Home Groups"
          link="/Subpages/About/Beliefs"
          image="/homeGroup.jpeg"
        />
        <JoinUsCards title="Men and Women" link="/Subpages/About/Beliefs" />
        <JoinUsCards title="Courses" link="/Subpages/About/Beliefs" />
      </div>
      <div className=" absolute inset-0 rounded-2xl bg-gradient-to-b from-white via-transparent to-transparent"></div>
    </div>
  );
}

export default JoinUsMain;
