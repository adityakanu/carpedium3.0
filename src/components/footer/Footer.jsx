import React from "react";
import "./styles.css";
import { FiInstagram, FiLinkedin, FiFacebook, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="body" id="contact">
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.instagram.com/ecellnita/">
              <FiInstagram />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.linkedin.com/company/ecellnita/">
              <FiLinkedin />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://twitter.com/ecellnita">
              <FiTwitter />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://www.facebook.com/ecellnita/">
              <FiFacebook />
            </a>
          </li>
        </ul>
        <p>
          &copy;<strong>E-CELL NIT AGARTALA</strong> | All Rights Reserved
        </p>
      </footer>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script
        noModule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
};

export default Footer;
