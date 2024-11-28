import { useParams } from "react-router-dom";
import ProductListData from "../../Data/ProductListData";
import Product_Detail from "../Form/Product_Detail";

function Product_laptop_detail() {
  const laptopData = ProductListData.find(
    (item) => item.name === "laptop"
  ).laptopData;
  const { id } = useParams(); // Get the product ID from the URL

  // Filter the laptopData array by the id from the URL
  const selectedLaptop = laptopData.find((item) => item.id === parseInt(id));

  if (!selectedLaptop) {
    return <div>Product not found</div>; // If no laptop is found, show an error message
  }
  return (
    <div>
      <Product_Detail
        key={selectedLaptop.id}
        title="Laptop"
        image={selectedLaptop.image}
        price={selectedLaptop.price}
        model={selectedLaptop.model}
        brand={selectedLaptop.brand}
        year={selectedLaptop.year}
        Discount={selectedLaptop.discount}
        Netprice={
          selectedLaptop.price -
          (selectedLaptop.price * selectedLaptop.discount) / 100
        }
        Qty="2"
      />
    </div>
  );
}

export default Product_laptop_detail;
