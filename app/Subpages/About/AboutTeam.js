import Image from "next/image";

function AboutTeam({ name, title, children, picture }) {
  return (
    <div className="max-w-5xl gap-10 h-96 ">
      {title && <h2 className=" text-5xl">{title}</h2>}
      <div className=" flex h-full gap-5">
        <div className="  w-1/3 relative rounded-lg overflow-hidden">
          <Image src={picture} fill style={{ objectFit: "cover" }} />
        </div>
        <div className="  w-2/3 flex flex-col gap-5">
          <h3 className=" text-3xl">{name}</h3>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;

{
  /* <div className="relative rounded-md overflow-hidden bg-green-600 w-60">
        
      </div>
      <div className="">
        <h1 className=" font-bold text-3xl">{name}</h1>
        {children}
      </div> */
}
