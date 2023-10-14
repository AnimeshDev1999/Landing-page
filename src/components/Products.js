import ProductCard from "./ProductCard";
import pic1 from "../images/22.jpg";
import pic2 from "../images/19.jpg";
import pic3 from "../images/21.jpg";

const Products = () => {
  return (
    <div className="product-div flex flex-col justify-center items-start gap-5 px-5 py-16">
      <p className="text-3xl font-semibold">Connecting Brands to Audiences</p>
      <p className="mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel adipisci
        incidunt quis quae odio, eius.
        <br />
        <br />
        <span className="font-semibold">Show more &#10097;</span>
      </p>
      <div className="flex flex-col gap-5">
        <ProductCard img={pic1} nam="Bike Remodelling"></ProductCard>
        <ProductCard img={pic2} nam="Bike Remodelling"></ProductCard>
        <ProductCard img={pic3} nam="Bike Remodelling"></ProductCard>
      </div>
    </div>
  );
};
export default Products;
