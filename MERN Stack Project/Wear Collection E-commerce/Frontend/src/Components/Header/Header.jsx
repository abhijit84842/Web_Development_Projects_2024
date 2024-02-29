import logo from "../Assets/logo.png";
import "./Header.css";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
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
          <span className="action_name">
            <Link to="/profile">
              <IoPerson />
            </Link>
          </span>
        </div>
        <div className="Bag-section">
          <span className="action_name">
            <Link to="/bag">
              <FaShoppingCart />
            </Link>
          </span>
        </div>
      </section>

      <div className="log-section">
        <div className="header-login-cart">
          <button>
            <Link className="link" to="/login">
              Login
            </Link>
          </button>
        </div>
        <div className="header-logout-cart">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
