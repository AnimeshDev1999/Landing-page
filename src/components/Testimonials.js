import Tbox from "./Tbox";
import p1 from "../images/13.jpg";
import p2 from "../images/12.jpg";
import p3 from "../images/11.jpg";

const Testimonials = () => {
  return (
    <div className="testi-div px-5 md:px-10 py-16">
      <div className="flex flex-col md:flex-row justify-center items-start gap-5 mb-5">
        <p className="text-3xl font-semibold md:text-4xl lg:text-5xl md:w-1/2">
          Our Customer Stories
        </p>
        <p className="mb-5 md:text-lg lg:text-xl md:w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci
          incidunt quis quae odio, eius.
          <br />
          <br />
          <span className="font-semibold">Show more &#10097;</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <Tbox img={p1} nam="ADAM S." plat="Linkedin" cls="tbox-v1"></Tbox>
        <Tbox img={p2} nam="MIKE LEWIS" plat="Twitter" cls="tbox-v2"></Tbox>
        <Tbox img={p3} nam="JOHN DOE" plat="Google" cls="tbox-v1"></Tbox>
      </div>
    </div>
  );
};

export default Testimonials;
