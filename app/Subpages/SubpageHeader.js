function SubpageHeader({ title }) {
  return (
    <div className=" flex h-28 mt-[78px] w-full text-center bg-orange-600">
      <div className="mx-auto h-full flex items-center prose xl:px-0">
        <h1 className=" text-white text-5xl">{title}</h1>
      </div>
    </div>
  );
}

export default SubpageHeader;
