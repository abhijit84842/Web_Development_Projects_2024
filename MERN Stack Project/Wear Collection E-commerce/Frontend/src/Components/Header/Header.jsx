import logo from "../Assets/logo.png";
import "./Header.css";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Wear Collections"></img>
        <p>Wear Collections</p>
      </div>
      <ul className="header-menu">
        <li>
          Shop
          <hr />
        </li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <section className="profile-bag">
        <div className="profile-section">
          <IoPerson />
        </div>
        <div className="Bag-section">
          <FaShoppingCart />
        </div>
      </section>

      <div className="log-section">
        <div className="header-login-cart">
          <button>Login</button>
        </div>
        <div className="header-logout-cart">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
