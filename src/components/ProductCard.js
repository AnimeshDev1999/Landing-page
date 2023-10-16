import pic1 from "../images/22.jpg";

const ProductCard = (props) => {
  return (
    <div className="flex md:flex-col justify-around items-center">
      <img
        src={props.img}
        alt=""
        className="w-1/2 md:w-full rounded-md md:mb-5"
      />
      <div className="flex flex-col justify-center gap-3 items-center">
        <p className="text-xl md:font-semibold lg:text-2xl">{props.nam}</p>
        <p className="text-center lg:text-lg hidden md:block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur.
        </p>
        <button className="text-white bg-[#333] px-3 py-1 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
