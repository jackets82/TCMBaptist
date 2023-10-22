import Image from "next/image";

function Evenings() {
  return (
    <div className="flex gap-5">
      <div className="w-1/2 flex flex-col gap-5">
        <h1 className=" text-3xl font-bold">Sunday Evenings</h1>
        <p>
          Our monthly evening service program consists of the following events:
          <br />
          <br />
          <span className=" font-bold">Evening Service </span>
          <br />
          <br />
          The service consists of worship in song and prayer. We sing modern
          songs and traditional hymns, all led by our Music Team. We then hear a
          message from the Bible that is relevant and meaningful to our modern
          lives. <br />
          <br />
          There are no evening activities for children but they are welcome and
          encouraged to attend if deemed appropriate by parents.
          <br />
          <br /> 4:30 pm in the back hall for tea/coffee, and the service starts
          at 5 pm in the main hall. <br />
          <br /> <span className=" font-bold">Oasis</span> (ad-hoc – look out
          for dates in our printed Bulletin or on social media) <br />
          <br /> An evening of fellowship, sung worship, prayer, and praise.
          <br />
          <br />
          Bring your own refreshments for fellowship at 4:30pm, Oasis starts at
          5pm in the rear meeting hall. <br />
          <br /> <span className=" font-bold">Extra-Time</span> <br />
          <br /> (second Sunday of the month) <br />
          <br /> An Interactive opportunity to look more closely at the passages
          we study during our Worship Services. Meeting at 5 pm via Zoom. Email
          the admin team for further details on all of our evening activities.{" "}
          <br />
          <br />
          Please check out our calendar to see what’s on. For details about our
          upcoming evening services, please check our social media channels or
          get in touch to find out more about our evening meetings. Listen to
          our Spotify playlist to hear the types of sung worship you can expect
          at TCM.
        </p>
      </div>
      <div className=" relative w-1/2">
        <Image src="/SundayEvening.jpeg" fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}

export default Evenings;
