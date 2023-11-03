import ExtraStuffTile from "./ExtraStuffTile";

async function getAllWeeklyStuff() {
  const res = await fetch("http://localhost:4000/weekly_activities");

  return res.json();
}

async function DuringTheWeek() {
  const AllWeeklyStuff = await getAllWeeklyStuff();
  return (
    <div className="bg-orange-600">
      <div className="max-w-5xl mx-auto">
        <h1 className=" text-center py-10">
          As well as our regular Sunday services, we also have youth work,
          men&apos;s and women&apos;s ministries and much more
        </h1>
        <div className="grid grid-cols-2 place-items-center gap-5">
          {AllWeeklyStuff.map((WeeklyItem) => (
            <ExtraStuffTile
              key={WeeklyItem.id}
              link={WeeklyItem.link}
              image={WeeklyItem.image}
              title={WeeklyItem.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DuringTheWeek;
