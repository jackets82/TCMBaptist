function SocialButton({ svg, colour }) {
  const colourVariants = {
    pink: "pink-600",
    blue: "blue-600",
    red: "red-600",
    orange: "orange-600",
  };
  return (
    <div>
      <button
        className={`w-6 hover:fill-${colourVariants[colour]} transition-all duration-300`}
      >
        {svg}
      </button>
    </div>
  );
}

export default SocialButton;
