import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  const [isSticked, setIsSticked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticked(true);
      } else {
        setIsSticked(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* <header className={`fixed-top ${isSticked ? "sticked" : ""}`}> */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              <img src={Logo} alt="" />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <NavLink to="/Bgremoval" className="nav-link">
                  BG Removal
                </NavLink>
                <NavLink to="/Login" className="nav-link">
                  Log in
                </NavLink>
                <NavLink to="/Signup" className="signup-btn">
                  <span>Signup</span>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
