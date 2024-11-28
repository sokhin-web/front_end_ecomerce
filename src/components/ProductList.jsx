/*import image1 from "../assets/images/p_bike1.jpg";
import image2 from "../assets/images/p_car1.jpg";
import image3 from "../assets/images/p_laptop1.jpg";
import image4 from "../assets/images/p_motor1.jpg";
import image5 from "../assets/images/p_phone1.jpg";*/

import Product_Bike from "./Product_Bike";
import Product_Car from "./Product_Car";
import Product_Laptop from "./Product_Laptop";
import Product_Moto from "./Product_Moto";
import Product_Phone from "./Product_Phone";

//productData: image,price, name,id
/*const productListData = [
  {
    id: 1,
    image: image1,
    price: 200,
    name: "bike",
  },
  {
    id: 2,
    image: image2,
    price: 50000,
    name: "car",
  },
  {
    id: 3,
    image: image3,
    price: 900,
    name: "laptop",
  },
  {
    id: 4,
    image: image4,
    price: 3000,
    name: "motor",
  },
  {
    id: 5,
    image: image5,
    price: 1000,
    name: "phone",
  },
];*/
function ProductList() {
  return (
    <div className="mt-[100px] cursor-pointer phone:mt-[0px]">
      <div>
        <div className=" animate-fadeIn flex flex-row flex-wrap justify-center gap-2 py-[10px] ">
          <Product_Laptop />
          <Product_Bike />
          <Product_Car />
          <Product_Moto />
          <Product_Phone />
        </div>
      </div>
    </div>
  );
}

export default ProductList;
