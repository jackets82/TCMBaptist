import Image from "next/image";

function Mornings() {
  return (
    <div className="flex gap-5">
      <div className="w-1/2 flex flex-col gap-5">
        <h1 className=" text-3xl font-bold">Sunday Mornings</h1>
        <p>
          On Sundays our worship commences with a prayer meeting online via zoom
          at 8:55 – this is open to anyone and you will be very welcome to join
          us. Please contact us for Zoom meeting details.
        </p>
        <p>
          Our morning service begins at 10:30 am. The first part of the service
          consists of worship in song and prayer. We sing modern songs and some
          of the great traditional hymns, all led by our Music Team.
        </p>
        <p>
          Everyone participates in the worship but at about 11 am the children
          and youth (aged 0 – 14) go to their own groups in a Sunday School.
          Here they will take part in Bible-based programs.
        </p>
        <p>
          We then hear a message from the Bible that is relevant and meaningful
          to our modern lives. Our meeting finishes around 12 pm.
        </p>
        <p>
          The Lord’s Supper is normally celebrated during the morning service on
          the first Sunday of the month.
        </p>
        <p>
          Directly following the service tea and coffee are served in the front
          foyer, giving everyone time to chat and catch up with others. This
          enables us to have an important time of informal fellowship and an
          opportunity to encourage others in Christ.
        </p>
        <p>During term time there is a vibrant program for students.</p>
        <p>
          Listen to our Spotify playlist to hear the types of sung worship you
          can expect at TCM.
        </p>
      </div>
      <div className=" relative w-1/2">
        <Image src="/SundayMorning.jpeg" fill style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}

export default Mornings;
