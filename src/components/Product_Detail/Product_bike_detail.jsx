import Product_Detail from "../Form/Product_Detail";
//import image1 from "../../assets/images/bike1.jpg";
import ProductListData from "../../Data/ProductListData";
import { useParams } from "react-router-dom"; // Import the useParams hook to access the URL params

function Product_bike_detail() {
  const bikeData = ProductListData.find(
    (item) => item.name === "bike"
  ).bikeData;
  const { id } = useParams(); // Get the product ID from the URL

  // Filter the bikeData array by the id from the URL
  const selectedBike = bikeData.find((item) => item.id === parseInt(id));

  if (!selectedBike) {
    return <div>Product not found</div>; // If no bike is found, show an error message
  }
  return (
    <div>
      <Product_Detail
        key={selectedBike.id}
        title="Bike"
        image={selectedBike.image}
        price={selectedBike.price}
        model={selectedBike.model}
        brand={selectedBike.brand}
        year={selectedBike.year}
        Discount={selectedBike.discount}
        Netprice={
          selectedBike.price -
          (selectedBike.price * selectedBike.discount) / 100
        }
        Qty="2"
      />
      {/*<Product_Detail
        title="Bike"
        image={image1}
        price=""
        model=""
        brand=""
        year="2024"
        Discount="10%"
        Netprice="1000"
        Qty="2"
      />*/}
    </div>
  );
}

export default Product_bike_detail;
