import Product_Detail from "../Form/Product_Detail";
import image1 from "../../assets/images/car1.jpg";

function Product_car_detail() {
  return (
    <div>
      <Product_Detail
        title="Car"
        image={image1}
        price=""
        model=""
        brand=""
        year="2024"
        Discount="10%"
        Netprice="1000"
        Qty="2"
      />
    </div>
  );
}

export default Product_car_detail;