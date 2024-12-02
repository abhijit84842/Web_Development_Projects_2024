import React from "react";

import "../CSS/footer.css";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-sub-container">
        <div className="aboutus-box">
          <h2>About Us</h2>
          <p>
            With ViewWorld Travel Agency, your satisfaction is our priority.
            From luxurious getaways to budget-friendly trips, we craft every
            detail to ensure you have the perfect journey.
          </p>
        </div>
        <div className="branch">
          <div className="main-branch">
            <h2>Main Branch</h2>
            <p>India</p>
          </div>
          <div className="sub-branch">
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
        <div className="follow-us">
          <h2>Follow Us</h2>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>Twitter</p>
        </div>
      </div>

      <div className="copy-right-box">
        <div className="copy-right-left">
          <p>
            @2024 | Created By -<span> Abhijit Das</span> | All Rights Reserved!
          </p>
        </div>
        <div className="copy-right-right">
          <p>
            Privacy Policy <span> Terms and Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
