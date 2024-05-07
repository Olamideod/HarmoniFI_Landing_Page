import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [ isHamburgerOpened, setIsHamburgerOpened ] = useState(false);
  return (
    <header className={isHamburgerOpened ? "hamburger-opened" : ""}>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <nav>
          <FaBars className="hamburger-icon" onClick={() => setIsHamburgerOpened(isHamburgerOpened => !isHamburgerOpened)} />
          <ul className={isHamburgerOpened ? "hamburger-opened" : ""}>
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li>Sign up</li>
            <li>Log in</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
