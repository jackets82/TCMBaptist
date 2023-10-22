import SubpageHeader from "../SubpageHeader";

function page() {
  return (
    <div>
      <SubpageHeader title="Hope Explored" />
      <div className="mx-auto max-w-5xl mt-20">
        <div className=" h-[500px]">
          <iframe
            className=" w-full h-full"
            src="https://www.youtube.com/embed/d8AbJ2N8NAY?si=aRW-tU9VSWWrWJ96"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className=" prose prose-xl my-20">
          <p>
            Hope Explored looks at the life, death and resurrection of Jesus in
            Luke’s Gospel, this three-session series shows that Christianity is
            about real hope: a joyful expectation for the future, based on true
            events in the past, which changes everything about my present.{" "}
            <br />
            <br /> Hope Explored does not require a huge time commitment from
            guests and is one of the easiest ways to introduce someone to
            Christianity. The Christianity Explored series can then be run as a
            follow-up course for those eager to explore the Christian faith
            more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
