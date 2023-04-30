function SubpageHeader({ title }) {
  return (
    <div className=" bg-gray-200 h-28 mt-[78px] w-full">
      <div className=" bgred-500 max-w-6xl mx-auto h-full flex items-center px-10 xl:px-0">
        <h1 className=" text-5xl">{title}</h1>
      </div>
    </div>
  );
}

export default SubpageHeader;
