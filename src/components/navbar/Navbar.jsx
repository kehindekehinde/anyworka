import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
// import logo from '../../assets/logo.svg';

const Menu = () => (
  <React.Fragment>
    <p>
      {" "}
      <a href="#home">Home</a>
    </p>
    <p>
      {" "}
      <a href="#features">Find Services</a>
    </p>
    <p>
      {" "}
      <a href="#possibility">Find Work</a>
    </p>
    <p>
      {" "}
      <a href="#blog">Company</a>
    </p>
    <p>
      {" "}
      <a href="#whatanyworkaNAv">Contact Us</a>
    </p>
  </React.Fragment>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="anyworka__navbar">
      <div className="anyworka__navbar-links">
        <div className="anyworka__navbar-link_logo">
          <img src="" alt="logo" />
          <h3 className="logo">Anyworka.</h3>
        </div>

        <div className="anyworka__navbar-links_container">
          <Menu />
        </div>

        <div className="anyworka__navbar-sign">
          <p>log in</p>
          <button type="button">
            <p>Sign Up</p>
          </button>
        </div>

        <div className="anyworka__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="anyworka__navbar-menu_container scale-up-center">
              <div className="anyworka__navbar-menu-container-links">
                <Menu />
                </div>
                <div className="anyworka__navbar-menu_container-links-sign">
                  <button type="button">
                    <p>Log in</p>
                  </button>
                  <button type="button">
                    <p>Sign Up</p>
                  </button>
                </div>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
