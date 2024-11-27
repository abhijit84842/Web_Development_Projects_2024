import "../CSS/navbar.css";
const NavBar = () => {
  return (
    <div className="nav-main-container">
      <div className="nav-sub-container">
        <div className="nav-logo">
          <img src="logo.png" alt="loading.." />
        </div>
        <div className="nav-left-container">
          <div>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">Book</a>
          </div>
          <div>
            <a href="#">Packages</a>
          </div>
          <div>
            <a href="#">Services</a>
          </div>
          <div>
            <a href="#">Gallery</a>
          </div>
          <div>
            <a href="#">Review</a>
          </div>
          <div>
            <a href="#">Contact</a>
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
