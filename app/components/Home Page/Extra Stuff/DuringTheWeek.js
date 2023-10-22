import ExtraStuffTile from "./ExtraStuffTile";

function DuringTheWeek() {
  return (
    <div className="bg-orange-600">
      <div className="max-w-5xl mx-auto">
        <p className=" text-center py-10">
          As well as our regular Sunday services, we also have youth work,
          men&apos;s and women&apos;s ministries and much more
        </p>
        <div className="grid grid-cols-3 place-items-center gap-10">
          <ExtraStuffTile title="Extra Time" />
          <ExtraStuffTile title="House Groups" />
          <ExtraStuffTile title="Men's Ministries" />
          <ExtraStuffTile title="Women's Ministries" />
          <ExtraStuffTile title="Young Adults" />
          <ExtraStuffTile title="Children & Youth Groups" />
          <ExtraStuffTile title="Sunday School" />
        </div>
      </div>
    </div>
  );
}

export default DuringTheWeek;
