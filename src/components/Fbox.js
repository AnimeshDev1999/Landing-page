import bag from "../images/bag.svg";

const Fbox = (props) => {
  return (
    <div className="flex flex-col bg-purple-400/10 px-3 py-5 rounded-md justify-around items-center">
      <img src={bag} alt="" className="h-10 mb-5" />
      <p className="text-white font-semibold mb-1">{props.nam}</p>
      <p className="text-[#ccc] text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Fbox;
