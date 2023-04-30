function WhyICome() {
  return (
    <div className=" bg-black">
      <p className=" text-white py-10 text-5xl text-center">Why I attend TCM</p>
      <div className=" bg-green-700 flex justify-center h-[600px] max-w-5xl mx-auto">
        <iframe
          width="5000"
          height="600"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default WhyICome;
