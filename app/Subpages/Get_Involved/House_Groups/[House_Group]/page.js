async function getGroup(House_Group) {
  const res = await fetch(` http://localhost:4000/housegroups/${House_Group}`);

  return res.json();
}

async function page({ params }) {
  const group = await getGroup(params.House_Group);
  return (
    <div>
      <p>This will show individual house group details</p>
      <p>Location - {group.title}</p>
    </div>
  );
}

export default page;
