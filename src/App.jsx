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

export default function App() {
  return (
    <div className="bg-[#E7E8D8] h-fit    ">
      <BrowserRouter>
        <Routes>
          <Route element={<Master_Web />}>
            <Route path="/front_end_ecomerce" element={<HomePage />}></Route>
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
            <Route path="product/bike" element={<Product_Bike />}></Route>
            <Route path="product/motor" element={<Product_Moto />}></Route>
            <Route path="product/car" element={<Product_Car />}></Route>
            <Route path="product/laptop" element={<Product_Laptop />}></Route>
            <Route path="product/phone" element={<Product_Phone />}></Route>
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
