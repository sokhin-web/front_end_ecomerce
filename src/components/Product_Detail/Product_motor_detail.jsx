import { useParams } from "react-router-dom";
import ProductListData from "../../Data/ProductListData";
import Product_Detail from "../Form/Product_Detail";

function Product_motor_detail() {
  const motorData = ProductListData.find(
    (item) => item.name === "motor"
  ).motorData;
  const { id } = useParams(); // Get the product ID from the URL

  // Filter the motorData array by the id from the URL
  const selectedMotor = motorData.find((item) => item.id === parseInt(id));

  if (!selectedMotor) {
    return <div>Product not found</div>; // If no motor is found, show an error message
  }
  return (
    <div>
      <Product_Detail
        key={selectedMotor.id}
        title="Motor"
        image={selectedMotor.image}
        price={selectedMotor.price}
        model={selectedMotor.model}
        brand={selectedMotor.brand}
        year={selectedMotor.year}
        Discount={selectedMotor.discount}
        Netprice={
          selectedMotor.price -
          (selectedMotor.price * selectedMotor.discount) / 100
        }
        Qty="2"
      />
    </div>
  );
}

export default Product_motor_detail;
