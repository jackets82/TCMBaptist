function SocialButton({ svg, colour }) {
  const colourVariants = {
    red: "hover:fill-[#ff0000]",
    blue: "hover:fill-blue-600",
    orange: "hover:fill-orange-600",
  };
  return (
    <div>
      <button
        className={`${colourVariants[colour]} w-6 transition-all duration-300`}
      >
        {svg}
      </button>
    </div>
  );
}

export default SocialButton;

// className={`w-6 hover:fill-${colourVariants[colour]} transition-all duration-300`}
