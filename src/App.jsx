import { BrowserRouter, Route, Routes } from "react-router-dom";

import Master_Web from "./master_web_layout/Master_Web";
import Advertise from "./components/Advertise";
import Category from "./components/Category";
import Product from "./components/Product";
import HomePage from "./master_web_layout/HomePage";

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
              path="/front_end_ecomerce/product"
              element={<Product />}
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
