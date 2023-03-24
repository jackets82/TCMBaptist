import MinistriesCard from "./MinistriesCard";

function Ministries() {
  return (
    <div className=" bg-white">
      <div className=" bg-red-600 max-w-6xl mx-auto flex flex-col items-center">
        <p>Our ministries</p>
        <div className="grid grid-cols-4 gap-10">
          <MinistriesCard />
          <MinistriesCard />
          <MinistriesCard />
          <MinistriesCard />
          <MinistriesCard />
          <MinistriesCard />
        </div>
      </div>
    </div>
  );
}

export default Ministries;
