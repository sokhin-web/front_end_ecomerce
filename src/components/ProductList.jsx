import { RiHeart2Fill, RiShoppingBasket2Fill } from "react-icons/ri";
/*import image1 from "../assets/images/p_bike1.jpg";
import image2 from "../assets/images/p_car1.jpg";
import image3 from "../assets/images/p_laptop1.jpg";
import image4 from "../assets/images/p_motor1.jpg";
import image5 from "../assets/images/p_phone1.jpg";*/
import { Link } from "react-router-dom";
import productListData from "../Data/ProductListData";

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
    <div className="mt-[100px] cursor-pointer">
      <div>
        <h1 className="font-bold text-xl text-[#675D50] text-center underline pb-[10px]">
          Product
        </h1>

        <div className=" animate-fadeIn flex flex-row flex-wrap justify-center gap-2 py-[10px] ">
          {productListData.map((product) => (
            <Link
              key={product.id}
              to={`/front_end_ecomerce/product_detail/${product.name}`}
            >
              {(
                product.carData ||
                product.phoneData ||
                product.bikeData ||
                product.laptopData ||
                product.motorData
              ).map((items) => (
                <div
                  key={items.id}
                  className="w-fit h-fit my-[10px] bg-[#CADABF] rounded-md pt-5 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-10 duration-200 linear"
                >
                  <div className="text-white text-center w-[200px] h-fit bg-white m-auto rounded-t-md">
                    <img src={items.image} alt="" className=" h-[200px] " />
                  </div>
                  <div className="py-[5px] mx-[10px] flex flex-row justify-between items-center">
                    <p className="text-black">{items.price}$</p>
                    <div className="flex flex-row gap-2">
                      <RiHeart2Fill className="text-gray-200 hover:text-red-500 font-bold  duration-200 cursor-pointer" />
                      <RiShoppingBasket2Fill className="text-orange-500 font-bold hover:opacity-70 duration-200 cursor-pointer" />
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
