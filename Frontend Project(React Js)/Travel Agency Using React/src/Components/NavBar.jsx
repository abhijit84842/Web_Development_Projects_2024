import { useRef, useEffect } from "react";

import { gsap } from "gsap";

import "../CSS/navbar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  // Create a ref for the element to be animated
  const boxRef = useRef(null);

  useEffect(() => {
    // initial to final position
    gsap.to(boxRef.current, {
      y: 20,
      duration: 3,
      backgroundColor: "red",
    });
  }, []);

  return (
    <div className="nav-main-container">
      <div className="nav-sub-container">
        <div className="nav-logo">
          <img src="logo.png" alt="loading.." />
        </div>
        <div className="nav-left-container" ref={boxRef}>
          <div>
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="link" to="/packages">
              Packages
            </Link>
          </div>
          <div>
            <Link className="link" to="/domestic">
              Domestics
            </Link>
          </div>
          <div>
            <Link className="link" to="/international">
              International
            </Link>
          </div>
          <div>
            <Link className="link" to="/booknow">
              Book
            </Link>
          </div>
          <div>
            <Link className="link" to="/gallery">
              Gallery
            </Link>
          </div>
          <div>
            <Link className="link" to="/review">
              Review
            </Link>
          </div>
          <div>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
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
