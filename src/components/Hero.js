import ico1 from "../images/04.png";
import ico2 from "../images/06.png";
import ico3 from "../images/05.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b  from-[#f2ebff] to-[#d5bfff] flex justify-center items-center gap-5 flex-col text-center px-5 py-28">
      <h1 className="text-4xl font-bold relative">
        Unlocking the Power of Social Media
        <img src={ico1} alt="" className="decor1" />
        <img src={ico2} alt="" className="decor2" />
        <img src={ico3} alt="" className="decor3" />
      </h1>
      <p className="text-lg">
        Discover how we can transform your online presence.
      </p>
      <div className="flex gap-5 mb-20">
        <button className="text-white bg-[#333] px-5 py-2 rounded-full">
          Get Started
        </button>
        <button className="font-semibold">Pricing &#10097;</button>
      </div>
      <p className="">Trusted by Global Companies</p>
      <div className="flex gap-5">
        <p className="font-semibold text-xl">CompLogo</p>
        <p className="font-semibold text-xl">CompLogo</p>
      </div>
    </div>
  );
};

export default Hero;
