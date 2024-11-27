import { BrowserRouter, Route, Routes } from "react-router-dom";

import Master_Web from "./master_web_layout/Master_Web";
import Advertise from "./components/Advertise";
import Category from "./components/Category";
import HomePage from "./master_web_layout/HomePage";
import ProductList from "./components/ProductList";
import Product_Bike from "./components/Product_Bike";
import Product_Moto from "./components/Product_Moto";
import Product_Car from "./components/Product_Car";
import Product_Laptop from "./components/Product_Laptop";
import Product_Phone from "./components/Product_Phone";
import Product_phone_detail from "./components/Product_Detail/product_phone_detail";
import Product_car_detail from "./components/Product_Detail/Product_car_detail";
import Product_laptop_detail from "./components/Product_Detail/Product_laptop_detail";
import Product_motor_detail from "./components/Product_Detail/Product_motor_detail";
import Product_bike_detail from "./components/Product_Detail/Product_bike_detail";

export default function App() {
  return (
    <div className="bg-[#E7E8D8] h-fit    ">
      <BrowserRouter>
        <Routes>
          <Route basename="/front_end_ecomerce" element={<Master_Web />}>
            <Route path="/front_end_ecomerce/" element={<HomePage />}></Route>
            <Route
              path="/front_end_ecomerce/advertise"
              element={<Advertise />}
            ></Route>
            <Route
              path="/front_end_ecomerce/category"
              element={<Category />}
            ></Route>
            <Route
              path="/front_end_ecomerce/productLIst/:category"
              element={<ProductList />}
            ></Route>
            <Route
              path="/front_end_ecomerce/product/bike"
              element={<Product_Bike />}
            ></Route>
            <Route
              path="/front_end_ecomerce/product/motor"
              element={<Product_Moto />}
            ></Route>
            <Route
              path="/front_end_ecomerce/product/car"
              element={<Product_Car />}
            ></Route>
            <Route
              path="/front_end_ecomerce/product/laptop"
              element={<Product_Laptop />}
            ></Route>
            <Route
              path="/front_end_ecomerce/product/phone"
              element={<Product_Phone />}
            ></Route>
            <Route
              path="/front_end_ecomerce/product_detail/phone"
              element={<Product_phone_detail />}
            ></Route>
            <Route
              path="/front_end_ecomerce/product_detail/car"
              element={<Product_car_detail />}
            ></Route>
            <Route
              path="/front_end_ecomerce/product_detail/laptop"
              element={<Product_laptop_detail />}
            ></Route>
            <Route
              path="/front_end_ecomerce/product_detail/motor"
              element={<Product_motor_detail />}
            ></Route>
            <Route
              path="/front_end_ecomerce/product_detail/bike/:id"
              element={<Product_bike_detail />}
            ></Route>
            <Route
              path="/*"
              element={
                <h2 className="text-center mt-[200px]">Page Not Found</h2>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
