function BeliefsCard({ title, text }) {
  return (
    <div className=" bg-gray-300 w-full text-center p-2 rounded-lg">
      <h1 className=" text-3xl font-semibold pb-2">{title}</h1>
      <p className="text-sm">{text}</p>
    </div>
  );
}

export default BeliefsCard;
