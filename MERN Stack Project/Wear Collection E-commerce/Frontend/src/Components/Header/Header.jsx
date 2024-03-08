import logo from "../Assets/logo.png";
import "./Header.css";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const bag = useSelector((store) => store.bag);
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
          <Link to="/profile">
            <IoPerson size="1.9rem" color="black" />
          </Link>
          <div className="action_name">Profile</div>
        </div>
        <div className="Bag-section">
          <Link className="link" to="/bag">
            <FaShoppingCart size="1.9rem" color="black" />
            <span className="bag-item-count">{bag.length}</span>
          </Link>

          <div className="action_name">Bag</div>
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
