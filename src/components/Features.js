import Fbox from "./Fbox";

const Features = () => {
  return (
    <div className="feature-div flex flex-col gap-14 px-5 md:px-10 py-16">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start gap-5">
        <h2 className="text-white md:w-1/2 text-3xl md:text-4xl lg:text-5xl font-semibold">
          Your Social Media Journey Starts Here
        </h2>
        <p className="text-[#ccc] md:text-lg lg:text-xl md:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          repudiandae doloribus sapiente molestias, dolor fuga consectetur ea
          corrupti ipsam delectus, necessitatibus.
          <br />
          <br />
          <span className="text-white font-semibold">Show more &#10097;</span>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
        <Fbox nam="Social Commerce"></Fbox>
        <Fbox nam="Social Analytics"></Fbox>
        <Fbox nam="Engagement Booster"></Fbox>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#a77ef2] text-5xl font-bold">75k</p>
          <p className="text-white">Projects</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#a77ef2] text-5xl font-bold">450</p>
          <p className="text-white">Countries</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#a77ef2] text-5xl font-bold">128</p>
          <p className="text-white">Experts</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
