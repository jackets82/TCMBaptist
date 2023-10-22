import WhatElseCard from "./WhatElseCard";

function WhatElseHappens() {
  return (
    <div className=" bg-slate-300 p-10 text-center">
      <p className=" font-bold text-5xl my-10">More stuff we do</p>
      <div className=" max-w-5xl mx-auto flex justify-around gap-5">
        <WhatElseCard image="/week.jpg" text="During The Week" />
        <WhatElseCard image="/courses.jpg" text="Courses" />
      </div>
    </div>
  );
}

export default WhatElseHappens;
