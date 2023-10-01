import Link from "next/link";
import FrontPageButtons from "../Buttons/FrontPageButtons";

function Welcome() {
  return (
    <div className=" bg-slate-300 py-72 ">
      <div className=" text-center flex flex-col gap-5 max-w-5xl mx-auto">
        <p className=" text-5xl font-bold tracking-wide">STATEMENT OF FAITH</p>
        <p className=" text-2xl">
          We believe that a church&apos;s statement of faith should be first and
          foremost in your decision to attend. We boldy follow Christ&apos;s
          teachings, seeking to be a refuge from a corrupt and dying world.
          Please click {""}
          <span className=" font-bold text-orange-600">
            <Link href="/Subpages/About/Beliefs">here </Link>
          </span>
          for our full statement.
        </p>
      </div>
    </div>
  );
}

export default Welcome;

{
  /* <div className=" max-w-6xl mx-auto flex flexcol content-center gap-3">
        <div className="w-2/3">
          <h1 className="text-5xl font-bold tracking-wide">
            Statement of faith
          </h1>
          <p className=" text-2xl">
            We believe that a church's statement of faith should be first and
            foremost in your decision to attend. We boldy follow Christ's
            teachings, seeking to be a refuge from a corrupt and dying world.
            Please click <span className=" font-bold">here</span> for our full
            statement.
          </p>
        </div>
       
      </div> */
}
