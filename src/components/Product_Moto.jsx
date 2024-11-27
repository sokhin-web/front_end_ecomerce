import Product_Card from "./Form/Product_Card";
import ProductListData from "../Data/ProductListData";
import { Link } from "react-router-dom";

function Product_Moto() {
  const motorData = ProductListData.find(
    (item) => item.name === "motor"
  ).motorData; //find motor data from ProductListData
  return (
    <div className="mt-[100px] cursor-pointer">
      <h1 className="font-bold text-xl text-[#675D50] text-center underline pb-[10px]">
        Motor List:
      </h1>
      <div className="flex flex-row flex-wrap justify-center  gap-2 py-[10px]">
        {motorData.map((items) => (
          <Link key={items.id} to={`/front_end_ecomerce/product_detail/motor`}>
            <Product_Card image={items.image} price={items.price} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Product_Moto;
