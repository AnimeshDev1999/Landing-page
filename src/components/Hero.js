import ico1 from "../images/04.png";
import ico2 from "../images/06.png";
import ico3 from "../images/05.png";
import img1 from "../images/29.png";
import img2 from "../images/02.png";
import img3 from "../images/03.png";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#f2ebff] to-[#d5bfff] flex justify-center items-center gap-5 flex-col text-center px-5 md:px-10 py-28 relative">
      <h1 className="leading-normal md:leading-normal lg:leading-normal text-4xl md:text-5xl lg:text-6xl font-bold relative">
        Unlocking the Power of <br /> Social Media
        <img src={ico1} alt="" className="decor1" />
        <img src={ico2} alt="" className="decor2" />
        <img src={ico3} alt="" className="decor3" />
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl">
        Discover how we can transform your online presence.
      </p>
      <div className="flex gap-5 mb-20">
        <button className="text-white bg-[#333] md:text-lg px-5 py-2 md:font-semibold rounded-full">
          Get Started
        </button>
        <button className="font-semibold md:text-lg">Pricing &#10097;</button>
      </div>
      <p className="md:text-lg">Trusted by Global Companies</p>
      <div className="flex gap-5">
        <p className="font-semibold text-xl md:text-2xl">CompLogo</p>
        <p className="font-semibold text-xl md:text-2xl">CompLogo</p>
      </div>
      <img src={img1} alt="" className="decor4" />
      <img src={img2} alt="" className="decor5" />
      <img src={img3} alt="" className="decor6" />
    </div>
  );
};

export default Hero;
