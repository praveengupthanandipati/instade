import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(false);
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMoveTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-lg-start">
              <p className="pb-0 mb-0 text-white">
                © 2023 All Rights Reserved, InstaDe
              </p>
            </div>
            <div className="col-md-6 text-end">
              <div className="d-md-flex justify-content-lg-end">
                <ul className="d-flex p-0 m-0">
                  <li>
                    <NavLink to="">Policies</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Contact</NavLink>
                  </li>
                </ul>
                <div className="footerSocial">
                  <NavLink to="">
                    <span class="icon-facebook"></span>
                  </NavLink>
                  <NavLink to="">
                    <span class="icon-twitter"></span>
                  </NavLink>
                  <NavLink to="">
                    <span class="icon-linkedin"></span>
                  </NavLink>
                  <NavLink to="">
                    <span class="icon-instagram"></span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          href="javascript:void(0)"
          class="moveTop"
          id="movetop"
          onClick={handleMoveTopClick}
        >
          <span class="icon-right icomoon"></span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
