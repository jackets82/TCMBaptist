function Welcome() {
  return (
    <div className=" bg-white">
      <div className=" max-w-6xl mx-auto px-10 flex flex-col content-center py-44 text-center">
        <h1 className=" text-4xl">Statement of Faith</h1>
        <hr className="h-2 rounded w-32 mx-auto bg-gray-200 border-0 dark:bg-gray-700 my-8"></hr>
        <p className=" text-2xl">
          We believe in 1 God in 3, the Father, the Son, the Holy Spirit.
          <p>A complete set of our beliefs can be found here.</p>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
