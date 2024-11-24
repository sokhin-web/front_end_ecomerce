import Product_Card from "./Form/Product_Card";
import image1 from "../assets/images/p_car1.jpg";
import image2 from "../assets/images/p_car1.jpg";
import image3 from "../assets/images/p_car1.jpg";
import image4 from "../assets/images/p_car1.jpg";
import image5 from "../assets/images/p_car1.jpg";

const product_carData = [
  {
    id: 1,
    image: image1,
    price: 200,
  },
  {
    id: 2,
    image: image2,
    price: 500,
  },
  {
    id: 3,
    image: image3,
    price: 100,
  },
  {
    id: 4,
    image: image4,
    price: 300,
  },
  {
    id: 5,
    image: image5,
    price: 400,
  },
];
function Product_Car() {
  return (
    <div className="mt-[100px] cursor-pointer">
      <h1 className="font-bold text-xl text-[#675D50] text-center underline pb-[10px]">
        Car List:
      </h1>
      <div className="flex flex-row flex-wrap justify-center  gap-2 py-[10px]">
        {product_carData.map((product) => (
          <Product_Card
            key={product.id}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Product_Car;
