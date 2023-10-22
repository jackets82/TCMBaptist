import WhatElseCard from "./WhatElseCard";

function WhatElseHappens() {
  return (
    <div className=" bg-slate-300 p-10 text-center">
      <p className=" font-bold text-5xl my-10">
        Learn <span className=" text-orange-600">More</span> About Christianity
      </p>
      <div className=" max-w-5xl mx-auto flex justify-around gap-5 flex-col md:flex-row">
        <WhatElseCard
          image="/hope_explored.jpeg"
          text="Hope Explored"
          link="/Subpages/Hope_Explored"
        />
        <WhatElseCard
          image="/Christianity_Explored.jpg"
          text="Christianity Explored"
          link="/Subpages/Christianity_Explored"
        />
      </div>
    </div>
  );
}

export default WhatElseHappens;
