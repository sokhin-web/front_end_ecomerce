import Product_Detail from "../Form/Product_Detail";
import image1 from "../../assets/images/motor1.jpg";

function Product_motor_detail() {
  return (
    <div>
      <Product_Detail
        title="Motor"
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

export default Product_motor_detail;
