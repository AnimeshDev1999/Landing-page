import Fbox from "./Fbox";

const Features = () => {
  return (
    <div className="feature-div flex flex-col gap-14 px-5 py-16">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-white text-2xl font-semibold">
          Your Social Media Journey Starts Here
        </h2>
        <p className="text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          repudiandae doloribus sapiente molestias, dolor fuga consectetur ea
          corrupti ipsam delectus, necessitatibus.
          <br />
          <br />
          <span className="text-white font-semibold">Show more &#10097;</span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-y-10 justify-center items-center">
        <Fbox nam="Social Commerce"></Fbox>
        <Fbox nam="Social Analytics"></Fbox>
        <Fbox nam="Engagement Booster"></Fbox>
        <Fbox nam="Social Commerce"></Fbox>
      </div>
      <div className="flex justify-around">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#a77ef2] text-3xl font-bold">75k</p>
          <p className="text-white">Projects</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#a77ef2] text-3xl font-bold">450</p>
          <p className="text-white">Countries</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#a77ef2] text-3xl font-bold">128</p>
          <p className="text-white">Experts</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
