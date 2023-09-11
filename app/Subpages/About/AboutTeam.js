import Image from "next/image";

function AboutTeam({ name, text, children }) {
  return (
    <div className="flex max-w-5xl mx-auto gap-10 h-96">
      <div className=" relative w-full rounded-md overflow-hidden">
        <Image src="/gregDeweese.jpeg" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="">
        <h1 className=" font-bold text-3xl">{name}</h1>
        {children}
      </div>
    </div>
  );
}

export default AboutTeam;
