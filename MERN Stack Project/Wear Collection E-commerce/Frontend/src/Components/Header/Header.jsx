import logo from "../Assets/logo.png";
import "./Header.css";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [Menu, SetMenu] = useState([]);
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Wear Collections"></img>
        <p>Wear Collections</p>
      </div>
      <ul className="header-menu">
        <li>
          <Link className="link" to="/">
            Shop
          </Link>
        </li>
        <li>
          <Link className="link" to="/men">
            Men
          </Link>
        </li>
        <li>
          <Link className="link" to="/women">
            Women
          </Link>
        </li>
        <li>
          <Link className="link" to="/kids">
            Kids
          </Link>
        </li>
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
