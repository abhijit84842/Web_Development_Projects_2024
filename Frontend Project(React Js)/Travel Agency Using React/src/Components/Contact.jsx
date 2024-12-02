import React from "react";

import "../CSS/contact.css";

import contact from "../assets/images/contactus.png";

const Contact = () => {
  return (
    <div className="contact-main-container">
      <h1>CONTACT</h1>
      <div className="contact-subcontainer">
        <div className="contact-image-box">
          <img src={contact} alt="loading.." />
        </div>
        <div className="contact-form">
          <form className="form-box" action="">
            <input type="text" placeholder="enter your name" />
            <input type="text" placeholder="email" />
            <input type="text" placeholder="ph number" />
            <input type="text" placeholder="subject" />
            <textarea
              className="text-sms"
              name=""
              id=""
              placeholder=" write some things.."
            ></textarea>
            <button className="contact-button" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
