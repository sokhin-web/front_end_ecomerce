import Category from "../components/Category";
import Product from "../components/ProductList";
import Advertise from "../components/Advertise";

function HomePage() {
  return (
    <div>
      <Advertise />
      <Category />
      <Product />
    </div>
  );
}

export default HomePage;
