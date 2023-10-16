import check from "../images/check.svg";
import dec1 from "../images/25.png";
import dec2 from "../images/26.png";
import img1 from "../images/07.jpg";

const About = () => {
  return (
    <div className="flex gap-8 px-5 md:px-10 py-16">
      <img src={img1} alt="" className="w-1/3 rounded-md hidden md:block" />
      <div className="flex flex-col md:w-2/3 justify-center items-start gap-5 relative">
        <p className="bg-slate-300/50 rounded-full px-3 mb-5">FEATURES</p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          We Make Social Media Work for Your Business
        </p>
        <p className="mb-5 md:text-lg lg:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci
          incidunt quis quae odio, eius possimus laborum nam veniam numquam. Non
          deleniti reprehenderit reiciendis voluptate libero vel odio placeat
          porro?
        </p>
        <ul className="mb-5">
          <li className="flex gap-1 md:text-lg lg:text-xl">
            <img src={check} alt="" className="h-6" /> Developing and executing
            data-driven strategies
          </li>
          <li className="flex gap-1 md:text-lg lg:text-xl">
            <img src={check} alt="" className="h-6" /> Designed to connect brand
            with target audience
          </li>
          <li className="flex gap-1 md:text-lg lg:text-xl">
            <img src={check} alt="" className="h-6" /> Developing and executing
            data-driven strategies
          </li>
        </ul>
        <button className="text-white md:text-lg bg-[#333] px-5 py-2 rounded-full">
          About Us
        </button>
        <img src={dec1} alt="" className="about-decor-1" />
        <img src={dec2} alt="" className="about-decor-2" />
      </div>
    </div>
  );
};

export default About;
