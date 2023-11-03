import Link from "next/link";

async function getHouseGroups() {
  const res = await fetch("http://localhost:4000/housegroups");

  return res.json();
}

async function page() {
  const houseGroups = await getHouseGroups();
  return (
    <div>
      {houseGroups.map((group) => (
        <div key={group.id}>
          <Link href={`/Subpages/Get_Involved/House_Groups/${group.id}`}>
            <h1>This is the link for the {group.title} housegroup.</h1>
            <p>Your hosts are {group.hosts}.</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default page;
