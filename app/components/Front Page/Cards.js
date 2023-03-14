import Card from "./Card";

function Cards() {
  return (
    <div className=" bg-slate-400 py-44">
      <div className=" max-w-6xl mx-auto grid md:grid-cols-3 justify-center gap-5 grid-cols-1 lg:px-0">
        <Card
          image="/hope_explored.jpeg"
          title="Card 1"
          blurb="This is just some text to fill the gap here and to sort out the styling. Doesn't matter what it actually says"
          buttonText="More Info"
        />
        <Card
          image="/whatsOn.jpeg"
          title="Card 1"
          blurb="This is just some text to fill the gap here and to sort out the styling. Doesn't matter what it actually says
          This is just some text to fill the gap here and to sort out the styling. Doesn't matter what it actually says"
          buttonText="Calendar"
        />
        <Card
          image="/Playlist.png"
          title="Card 1"
          blurb="This is just some text to fill the gap here and to sort out the styling. Doesn't matter what it actually says"
          buttonText="Open Spotify"
        />
      </div>
    </div>
  );
}

export default Cards;
