/* eslint-disable react/prop-types */
import Product_Card from "./Product_Card";

function Product_Detail({
  title,
  image,
  price,
  model,
  brand,
  year,
  Discount,
  Netprice,
  Qty,
}) {
  return (
    <div className="mt-[100px] top-48 cursor-pointer phone:mt-[150px]">
      <h1 className="font-bold text-xl text-[#675D50] text-center underline pb-[10px]">
        {title} Detail:
      </h1>
      <div className="flex flex-row gap-10 justify-center items-center mt-10 phone:flex-col phone:mt-2 phone:gap-2  phone:pb-10">
        <Product_Card image={image} price={price} />
        <div className="flex flex-col gap-5 items-start w-fit bg-[#CADABF] rounded-md shadow-sm p-5">
          <div className="text-md  flex flex-col gap-3 ">
            <p>
              <span className="font-bold">Model:</span> {model}
            </p>
            <p>
              <span className="font-bold">Brand:</span> {brand}
            </p>
            <p>
              <span className="font-bold">Year:</span> {year}
            </p>
            <p>
              <span className="font-bold">Price:</span> {price}$
            </p>
            <p>
              <span className="font-bold">Discount:</span> {Discount}
            </p>
            <p>
              <span className="font-bold">Netprice:</span> {Netprice}$
            </p>
            <p>
              <span className="font-bold">Qty:</span> {Qty}
            </p>
          </div>
          <div className="flex flex-row justify-end gap-5">
            <button className="bg-yellow-500 text-white  py-1 px-2 rounded-md shadow-sm hover:bg-yellow-400 transition-all ease-linear duration-200">
              Add to Card
            </button>
            <button className="bg-green-500 text-white  py-1 px-2 rounded-md shadow-sm hover:bg-green-400 transition-all ease-linear duration-200">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Detail;
