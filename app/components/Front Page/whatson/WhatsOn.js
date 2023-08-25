import WhatsOnCircle from "./WhatsOnCircle";

function WhatsOn() {
  return (
    <div className=" flex flex-col items-center gap-10 py-20  bg-slate-400">
      <h1 className=" text-4xl">What's On</h1>
      <div className=" sm:grid sm:grid-cols-2 md:grid-cols-4 flex flex-col max-w-5xl mx-auto gap-y-10">
        <WhatsOnCircle
          title="Mens Ministry"
          image="https://picsum.photos/200"
        />
        <WhatsOnCircle
          title="Womens Ministry"
          image="https://picsum.photos/200"
        />
        <WhatsOnCircle title="Extra Time" image="https://picsum.photos/200" />
        <WhatsOnCircle title="Young Adults" image="https://picsum.photos/200" />
        <WhatsOnCircle title="House Groups" image="https://picsum.photos/200" />
        <WhatsOnCircle
          title="Childrens and Youth Groups"
          image="https://picsum.photos/200"
        />
        <WhatsOnCircle
          title="Christianity Explored"
          image="https://picsum.photos/200"
        />
        <WhatsOnCircle
          title="Hope Explored"
          image="https://picsum.photos/200"
        />
      </div>
    </div>
  );
}

export default WhatsOn;
