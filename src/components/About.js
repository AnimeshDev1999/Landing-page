import check from "../images/check.svg";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 px-5 py-16">
      <p className="bg-slate-300/50 rounded-full px-3 mb-5">FEATURES</p>
      <p className="text-3xl font-semibold">
        We Make Social Media Work for Your Business
      </p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci
        incidunt quis quae odio, eius possimus laborum nam veniam numquam. Non
        deleniti reprehenderit reiciendis voluptate libero vel odio placeat
        porro?
      </p>
      <ul className="mb-5">
        <li className="flex gap-1">
          <img src={check} alt="" className="h-6" /> Developing and executing
          data-driven strategies
        </li>
        <li className="flex gap-1">
          <img src={check} alt="" className="h-6" /> Designed to connect brand
          with target audience
        </li>
        <li className="flex gap-1">
          <img src={check} alt="" className="h-6" /> Developing and executing
          data-driven strategies
        </li>
      </ul>
      <button className="text-white bg-[#333] px-5 py-2 rounded-full">
        About Us
      </button>
    </div>
  );
};

export default About;
