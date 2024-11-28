/* eslint-disable react/prop-types */
import { RiHeart2Fill, RiShoppingBasket2Fill } from "react-icons/ri";

function Product_Card({ image, price }) {
  return (
    <div>
      <div className=" animate-fadeIn flex flex-row flex-wrap justify-center gap-2 py-[10px] ">
        <div className=" w-fit h-fit my-[10px] bg-[#CADABF] rounded-md pt-5 shadow-md hover:shadow-lg hover:-translate-y-1 hover:scale-10 duration-200 linear">
          <div className="text-white text-center w-[200px] h-fit bg-white m-auto phone:w-[150px]">
            <img src={image} alt="" className=" h-[200px] phone:h-[150px]" />
          </div>
          <div className="py-[5px] mx-[10px] flex flex-row justify-between items-center">
            <p className="phone:text-sm">{price}$</p>
            <div className="flex flex-row gap-2">
              <RiHeart2Fill className="text-gray-200 hover:text-red-500 font-bold  duration-200 cursor-pointer" />
              <RiShoppingBasket2Fill className="text-orange-500 font-bold hover:opacity-70 duration-200 cursor-pointer" />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Product_Card;
