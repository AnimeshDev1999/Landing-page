import pic1 from "../images/22.jpg";

const ProductCard = (props) => {
  return (
    <div className="flex justify-around items-center">
      <img src={props.img} alt="" className="w-1/2 rounded-md" />
      <div className="flex flex-col justify-center gap-3 items-center">
        <p className="text-xl">{props.nam}</p>
        <button className="text-white bg-[#333] px-3 py-1 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
