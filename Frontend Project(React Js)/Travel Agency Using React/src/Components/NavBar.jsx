import "../CSS/navbar.css";
const NavBar = () => {
  return (
    <div className="nav-main-container">
      <div className="nav-sub-container">
        <div className="nav-left-container">
          <div>Home</div>
          <div>Book</div>
          <div>Packages</div>
          <div>Services</div>
          <div>Gallery</div>
          <div>Review</div>
          <div>Contact</div>
        </div>
        <div className="nav-right-container">
          <div>Login</div>
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
