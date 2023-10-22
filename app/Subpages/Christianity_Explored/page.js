import SubpageHeader from "../SubpageHeader";

function page() {
  return (
    <div>
      <SubpageHeader title="Christianity Explored" />

      <div className=" h-[500px] max-w-5xl mx-auto mt-20">
        {/* relative h-0 pt-[56.25%] */}
        <iframe
          // absolute top-0 left-0
          className="w-full h-full"
          src="https://www.youtube.com/embed/8lJa-PcEGE4?si=lEpb0bu_2fiUMGVy"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="max-w-5xl mx-auto flex justify-center my-20">
        <div className="prose prose-xl">
          <p>
            Christianity Explored is an informal course for people who’d like to
            know more about Christianity or just brush up on the basics. It
            explores who Jesus was, what His aims were, and what it means to
            follow Him. <br />
            <br />
            You won’t be asked to pray, sing or read aloud. You can ask any
            questions you like or, if you prefer, you can just come along and
            listen. <br />
            <br />
            Christianity Explored has been around for many years and is designed
            to suit different age ranges and people.
          </p>
          <h3 className=" text-center">
            We regularly run the Christianity Explored course, please get in
            touch below
          </h3>
          <h4>Who is Christianity Explored for?</h4>
          <p>
            Christianity Explored is for anyone who wants to investigate
            Christianity informally with a group of other people. Whether you
            have previous experience of church, Christians and the Bible, or
            none at all, this course is for you. <br />
            <br /> Everyone is welcome – from the most sympathetic Sunday
            Schooler to the convinced atheist. We will respect your background,
            culture and beliefs. Tell us as little or as much about yourself as
            you feel comfortable.
          </p>
          <h4>What goes on?</h4>
          <p>
            The course is normally run in several groups of six to nine people,
            and after briefly discussing the course material from the week
            before, there is a talk or DVD on the theme for that week. Then the
            groups discuss any questions that have arisen. <br />
            <br />
            You’re welcome to stick around a bit longer for a coffee to discuss
            any further issues you might have. You can ask any question you
            want, at any time during the course.
          </p>
          <h4>How long does the course last?</h4>
          <p>The course runs for 7 weeks.</p>
          <h4>Can I pull out if I want to?</h4>
          <p>There is no pressure if you want to pull out of the course.</p>
          <h4>How much does the course cost?</h4>
          <p>Nothing.</p>
        </div>
      </div>
    </div>
  );
}

export default page;
