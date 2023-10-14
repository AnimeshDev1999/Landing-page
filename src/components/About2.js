import GraphButton from "./GraphButton";

const About2 = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 px-5 pb-16">
      <p className="text-3xl font-semibold">From Strategy to Engagement</p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci
        incidunt quis quae odio, eius possimus laborum nam veniam numquam. Non
        deleniti reprehenderit reiciendis voluptate libero vel odio placeat
        porro?
        <br />
        <br />
        <span className="font-semibold">Show more &#10097;</span>
      </p>
      <div className="grid grid-cols-2 gap-5">
        <GraphButton
          nam="Strategy and Planning"
          cls="img-1 rounded-md"
        ></GraphButton>
        <GraphButton
          nam="Strategy and Planning"
          cls="img-2 rounded-md"
        ></GraphButton>
        <GraphButton
          nam="Strategy and Planning"
          cls="img-3 rounded-md"
        ></GraphButton>
      </div>
    </div>
  );
};

export default About2;
