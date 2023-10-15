import Tbox from "./Tbox";
import p1 from "../images/13.jpg";
import p2 from "../images/12.jpg";
import p3 from "../images/11.jpg";

const Testimonials = () => {
  return (
    <div className="testi-div flex flex-col justify-center items-start gap-5 px-5 py-16">
      <p className="text-3xl font-semibold">Our Customer Stories</p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci
        incidunt quis quae odio, eius.
        <br />
        <br />
        <span className="font-semibold">Show more &#10097;</span>
      </p>
      <div className="flex flex-col gap-5">
        <Tbox img={p1} nam="ADAM S." plat="Linkedin" cls="tbox-v1"></Tbox>
        <Tbox img={p2} nam="MIKE LEWIS" plat="Twitter" cls="tbox-v2"></Tbox>
        <Tbox img={p3} nam="JOHN DOE" plat="Google" cls="tbox-v1"></Tbox>
      </div>
    </div>
  );
};

export default Testimonials;
