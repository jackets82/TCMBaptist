function ContactIcon({ svg, title, deets }) {
  return (
    <div className=" flex flex-col items-center">
      <div className="w-6 pb-2">{svg}</div>
      <p className=" text-2xl">{title}</p>
      <p>{deets}</p>
    </div>
  );
}

export default ContactIcon;
