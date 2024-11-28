import { useParams } from "react-router-dom";
import ProductListData from "../../Data/ProductListData";
import Product_Detail from "../Form/Product_Detail";

function Product_phone_detail() {
  const phoneData = ProductListData.find(
    (item) => item.name === "phone"
  ).phoneData;
  const { id } = useParams(); // Get the product ID from the URL

  // Filter the phoneData array by the id from the URL
  const selectedPhone = phoneData.find((item) => item.id === parseInt(id));

  if (!selectedPhone) {
    return <div>Product not found</div>; // If no phone is found, show an error message
  }
  return (
    <div>
      <Product_Detail
        key={selectedPhone.id}
        title="Phone"
        image={selectedPhone.image}
        price={selectedPhone.price}
        model={selectedPhone.model}
        brand={selectedPhone.brand}
        year={selectedPhone.year}
        Discount={selectedPhone.discount}
        Netprice={
          selectedPhone.price -
          (selectedPhone.price * selectedPhone.discount) / 100
        }
        Qty="2"
      />
    </div>
  );
}

export default Product_phone_detail;
