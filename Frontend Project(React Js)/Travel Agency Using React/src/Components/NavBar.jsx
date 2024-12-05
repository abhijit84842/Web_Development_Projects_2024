import "../CSS/navbar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-main-container">
      <div className="nav-sub-container">
        <div className="nav-logo">
          <img src="logo.png" alt="loading.." />
        </div>
        <div className="nav-left-container">
          <div>{/* <Link to="/">Home</Link> */}</div>
          <div>{/* <Link to="/packages">Packages</Link> */}</div>
          <div>{/* <Link to="/domestics">Domestics</Link> */}</div>
          <div>{/* <Link to="/international">International</Link> */}</div>
          <div>{/* <Link to="/book">Book</Link> */}</div>
          <div>{/* <Link to="/gallery">Gallery</Link> */}</div>
          <div>{/* <Link to="/review">Review</Link> */}</div>
          <div>{/* <Link to="/contact">Contact</Link> */}</div>
        </div>
        <div className="nav-right-container">
          <div className="login">Login</div>
          <div className="input-box">
            <input type="text" placeholder="search the palce" />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
