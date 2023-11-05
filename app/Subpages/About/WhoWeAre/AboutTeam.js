import Image from "next/image";

function AboutTeam({ name, children, image }) {
  return (
    <div className="max-w-5xl flex gap-5">
      <div className="relative h-80 w-1/4 rounded-lg overflow-hidden">
        <Image src={image} fill style={{ objectFit: "cover" }} />
      </div>
      <div className=" w-3/4">
        <h4 className=" text-3xl mb-5">{name}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default AboutTeam;
