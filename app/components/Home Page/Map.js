function Map() {
  return (
    <div className="flex justify-center w-full h-[800px]">
      <div className=" bg-gray-500 h-full w-1/2 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2388.674019765914!2d-0.5458079221710949!3d53.22369297225398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48785b2ef178b211%3A0x2917c4009537dd35!2sTCM%20Baptist%20Church!5e0!3m2!1sen!2suk!4v1695540566027!5m2!1sen!2suk"
          style={{ marginRight: 0 + "em" }}
          width="100%"
          height="100%"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="h-full w-1/2 bg-stone-200 flex px-10 justify-center flex-col">
        <p>We meet every Sunday at 1030</p>
        <div>
          <button className=" bg-red-500 ">More Sunday Details</button>
        </div>
      </div>
    </div>
  );
}

export default Map;
