import SubpageHeader from "../SubpageHeader";
import Evenings from "./Evenings";
import Mornings from "./Mornings";

function page() {
  return (
    <div>
      <SubpageHeader title="Services" />
      <div className="max-w-7xl mx-auto gap-20 flex flex-col bg-stone-200 p-10">
        <Mornings />
        <Evenings />
      </div>
    </div>
  );
}

export default page;
