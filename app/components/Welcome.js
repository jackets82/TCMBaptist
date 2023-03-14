function Welcome() {
  return (
    <div className=" bg-white">
      <div className=" max-w-6xl mx-auto px-10 flex flex-col content-center py-44 text-center">
        <h1 className=" text-4xl">Title</h1>
        <hr className="h-2 rounded w-32 mx-auto bg-gray-200 border-0 dark:bg-gray-700 my-8"></hr>
        <p className=" text-2xl">
          I personally think the front page should lay down what we believe
          before anything else. When I go to a Church's website I want to know
          that they are actual Christians before I go any further.
        </p>
      </div>
    </div>
  );
}

export default Welcome;
