import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/Header";
import ShopMain from "../Pages/ShopMain";
import Footer from "../Components/Footer/Footer";
import ShopCatagory from "../Pages/ShopCatagory";
import Cart from "../Pages/Cart";
import LoginSignup from "../Pages/LoginSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ShopMain />} />
          <Route path="/men" element={<ShopCatagory category="men" />} />
          <Route path="/women" element={<ShopCatagory category="women" />} />
          <Route path="/kids" element={<ShopCatagory category="kid" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
