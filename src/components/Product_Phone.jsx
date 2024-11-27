import Product_Card from "./Form/Product_Card";

import { Link } from "react-router-dom";
import ProductListData from "../Data/ProductListData";

function Product_Phone() {
  const phoneData = ProductListData.find(
    (item) => item.name === "phone"
  ).phoneData; //find phone data from ProductListData
  return (
    <div className="mt-[100px] cursor-pointer">
      <h1 className="font-bold text-xl text-[#675D50] text-center underline pb-[10px]">
        Phone List:
      </h1>
      <div className="flex flex-row flex-wrap justify-center  gap-2 py-[10px]">
        {phoneData.map((items) => (
          <Link key={items.id} to={`/front_end_ecomerce/product_detail/phone`}>
            <Product_Card image={items.image} price={items.price} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Product_Phone;
