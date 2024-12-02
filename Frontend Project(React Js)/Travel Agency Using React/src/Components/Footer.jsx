import React from "react";

import "../CSS/footer.css";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="aboutus-box">
        <h2>About Us</h2>
        <p>
          With ViewWorld Travel Agency, your satisfaction is our priority. From
          luxurious getaways to budget-friendly trips, we craft every detail to
          ensure you have the perfect journey.
        </p>
      </div>
      <div className="branch">
        <div>
          <h2>Main Branch</h2>
          <p>India</p>
        </div>
        <div>
          <h2>Sub Branch</h2>
          <p>India</p>
          <p>Japan</p>
          <p>France</p>
          <p>USA</p>
        </div>
      </div>
      <div className="quick-access">
        <h2>Quick Access</h2>
        <div>Home</div>
        <div>Packages</div>
        <div>International</div>
        <div>Domestic</div>
        <div>Book</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Footer;
