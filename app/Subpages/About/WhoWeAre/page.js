import Image from "next/image";
import SubpageHeader from "../../SubpageHeader";
import AboutTeam from "./AboutTeam";

async function getTeams() {
  const res = await fetch("http://localhost:4000/teams", { cache: "no-store" });
  return res.json();
}

async function page() {
  const teams = await getTeams();
  console.log(teams);
  return (
    <div className=" bg-slate-300">
      <SubpageHeader title="Who We Are" />
      <div className="max-w-5xl mx-auto p-10 flex flex-col gap-10">
        {teams.map((team) => (
          <div key={team.id} className=" ">
            <h1 className=" pb-3 text-5xl">{team.heading}</h1>
            <div className=" flex flex-col gap-5">
              {team.people.map((person, index) => (
                <div className="flex gap-10" key={index}>
                  <div className="">
                    <Image src={person.image} width={300} height={300} alt="" />
                  </div>
                  <div className="prose">
                    <h2 className=" text-2xl">{person.name}</h2>
                    <p>{person.blurb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
