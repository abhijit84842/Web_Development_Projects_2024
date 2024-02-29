import "./Footer.css";
import footerLogo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={footerLogo} alt="" />
        <p>Wear Collections</p>
      </div>

      <ul className="footer-list">
        <li>Company</li>
        <li>Office Locations</li>
        <li>About Us</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>

        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>

        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
