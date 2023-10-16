import GraphButton from "./GraphButton";

const About2 = () => {
  return (
    <div className="px-5 md:px-10 pb-16">
      <div className="flex flex-col md:flex-row justify-center items-start gap-5 mb-5">
        <p className="text-3xl md:text-4xl lg:text-5xl md:w-1/2 font-semibold">
          From Strategy to Engagement
        </p>
        <p className="mb-5 md:w-1/2 md:text-lg lg:text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci
          incidunt quis quae odio, eius possimus laborum nam veniam numquam. Non
          deleniti reprehenderit reiciendis voluptate libero vel odio placeat
          porro?
          <br />
          <br />
          <span className="font-semibold">Show more &#10097;</span>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
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
