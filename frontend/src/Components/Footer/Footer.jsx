import React from "react";
import "./Footer.css";
import logo from "../Asset/R.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-part-1">
        <div className="footer-links">
          <img src={logo} alt="" />
          <div className="footer-links">
            <h2>CONTACT</h2>
            <p>
              <span>Address- </span>XYZ Group of Companies Pura,
              <br /> Delhi-110034
            </p>
            <p>
              <span>Phone- </span>+91 0987765432
            </p>
          </div>
        </div>
        <div className="footer-links">
          <h2>ABOUT</h2>
          <p>About Us</p>
          <p>Delivery Information</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-links">
          <h2>My Account</h2>
          <p>Sign In</p>
          <p>View cart</p>
          <p>My Wishlist</p>
          <p>Track My order</p>
          <p>Help</p>
        </div>
      </div>
      <hr />
      <div className="footer-part-2">
        <div class="footer-icons">
          <a>Copyright © Rahul</a>
          <p>
            <span>
              <FaFacebook />
            </span>
            Facebook
          </p>
          <p>
            <span>
              <FaInstagram />
            </span>
            Instagram
          </p>
          <p>
            <span>
              <FaLinkedin />
            </span>
            Linkedin
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
