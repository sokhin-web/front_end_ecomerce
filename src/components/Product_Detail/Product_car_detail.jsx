import { useParams } from "react-router-dom";
import ProductListData from "../../Data/ProductListData";
import Product_Detail from "../Form/Product_Detail";

function Product_car_detail() {
  const carData = ProductListData.find((item) => item.name === "car").carData;
  const { id } = useParams(); // Get the product ID from the URL

  // Filter the carData array by the id from the URL
  const selectedCar = carData.find((item) => item.id === parseInt(id));

  if (!selectedCar) {
    return <div>Product not found</div>; // If no car is found, show an error message
  }
  return (
    <div>
      <Product_Detail
        key={selectedCar.id}
        title="Car"
        image={selectedCar.image}
        price={selectedCar.price}
        model={selectedCar.model}
        brand={selectedCar.brand}
        year={selectedCar.year}
        Discount={selectedCar.discount}
        Netprice={
          selectedCar.price - (selectedCar.price * selectedCar.discount) / 100
        }
        Qty="2"
      />
    </div>
  );
}

export default Product_car_detail;
