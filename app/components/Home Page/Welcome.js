import FrontPageButtons from "../Buttons/FrontPageButtons";

function Welcome() {
  return (
    <div className=" bg-white">
      <div className=" max-w-6xl mx-auto px-10 flex flex-col content-center py-44 text-center gap-3">
        <h1 className=" text-4xl">Statement of faith</h1>
        <hr className="h-2 rounded w-32 mx-auto bg-gray-200 border-0 dark:bg-gray-700 my-8"></hr>
        <p className=" text-2xl">
          We belive that a church's statement of faith should be first and
          foremost in your decision to attend. We boldy follow Christ's
          teachings, seeking to be a refuge from a corrupt and dying world.
          Please click on the button below for our full statement.
        </p>
        {/* <p className=" italic">
          Small is the gate and narrow the road that leads to life, and only a
          few find it. <span className=" not-italic">Matthew 7:14</span>
        </p>
        <p className=" text-2xl">
          Join us here and discover the way to salvation.
        </p> */}
        <div className="mt-20 w-1/2 mx-auto flex justify-evenly">
          <FrontPageButtons
            link="/Subpages/About/Beliefs"
            title="Statement of Faith"
          />
          {/* <FrontPageButtons link="/Subpages/Sundays" title="Sundays" /> */}
        </div>
      </div>
    </div>
  );
}

export default Welcome;
