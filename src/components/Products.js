import ProductCard from "./ProductCard";
import pic1 from "../images/22.jpg";
import pic2 from "../images/19.jpg";
import pic3 from "../images/21.jpg";

const Products = () => {
  return (
    <div className="product-div px-5 md:px-10 py-16">
      <div className="flex flex-col md:flex-row justify-center items-start gap-5 mb-5">
        <p className="text-3xl md:text-4xl lg:text-5xl md:w-1/2 font-semibold">
          Connecting Brands to Audiences
        </p>
        <p className="mb-5 md:text-lg lg:text-xl md:w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci
          incidunt quis quae odio, eius.
          <br />
          <br />
          <span className="font-semibold">Show more &#10097;</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        <ProductCard img={pic1} nam="Bike Remodelling"></ProductCard>
        <ProductCard img={pic2} nam="Bike Remodelling"></ProductCard>
        <ProductCard img={pic3} nam="Bike Remodelling"></ProductCard>
      </div>
    </div>
  );
};
export default Products;
