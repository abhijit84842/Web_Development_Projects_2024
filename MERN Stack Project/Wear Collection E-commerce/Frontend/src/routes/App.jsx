import { BrowserRouter, Route, Routes } from "react-router-dom";

// Component Import
import Header from "../Components/Header/Header";
import ShopMain from "../Pages/ShopMain";
import Footer from "../Components/Footer/Footer";
import ShopCatagory from "../Pages/ShopCatagory";
import Cart from "../Pages/Cart";
import LoginSignup from "../Pages/LoginSignup";

// banner images import
import men_banner from "../Components/Assets/banner_mens.png";
import women_banner from "../Components/Assets/banner_women.png";
import kid_banner from "../Components/Assets/banner_kids.png";
import Product from "../Pages/Product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ShopMain />} />
          <Route
            path="/men"
            element={<ShopCatagory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCatagory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCatagory banner={kid_banner} category="kid" />}
          />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
