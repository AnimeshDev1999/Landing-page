import bag from "../images/bag.svg";

const Fbox = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={bag} alt="" className="h-10 mb-5" />
      <p className="text-white font-semibold mb-3">{props.nam}</p>
      <p className="text-white text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Fbox;
