const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#f2ebff] to-[#d5bfff] flex justify-center items-center flex-col text-center px-5 py-16">
      <h1 className="text-4xl font-bold mb-4">
        Unlocking the Power of Social Media
      </h1>
      <p className="text-lg mb-4">
        Discover how we can transform your online presence.
      </p>
      <div className="flex mb-10 gap-5">
        <button className="text-white bg-[#333] px-5 py-2 rounded-full">
          Get Started
        </button>
        <button className="font-semibold">Pricing &#10097;</button>
      </div>
      <p className="mb-4">Trusted by Global Companies</p>
      <div className="flex gap-5">
        <p className="font-semibold text-xl">CompLogo</p>
        <p className="font-semibold text-xl">CompLogo</p>
      </div>
    </div>
  );
};

export default Hero;
