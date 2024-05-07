import React from "react";
import Logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaEarthEurope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <section className="container">
        <div className="logo">
          <img src={Logo} alt="" style={{ width: '300px', height: 'auto' }} />
        </div>
        <div className="links">
          <div className="company">
            <ul>
              <li className="heading">COMPANY</li>
              <li>About</li>
              <li>Jobs</li>
              <li>For The Records</li>
            </ul>
          </div>
          <div className="communities">
            <ul>
              <li className="heading">COMMUNITIES</li>
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advertising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
          </div>
          <div className="useful-links">
            <ul>
              <li className="heading">USEFUL LINKS</li>
              <li>Support</li>
              <li>Web Playe</li>
              <li>Free Mobile App</li>
            </ul>
          </div>
        </div>
        <div className="social">
          <ul>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaFacebookF />
            </li>
          </ul>
        </div>
        <div className="location">
        <FaEarthEurope />
        <span>USA</span>
        </div>
        <div className="extras">
          <ul>
            <li>Legal</li>
            <li>Privacy Center</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
            <li>About Ads</li>
            <li>Additional CA Privacy Disclosures</li>
          </ul>
          <span>&copy; 2023 HarmoniFi</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
