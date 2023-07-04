import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className="pb-0 mb-0 text-white">
                © 2023 All Rights Reserved, InstaDe
              </p>
            </div>
            <div className="col-lg-6 text-end">
              <div className="d-flex justify-content-end">
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
      </div>
    </div>
  );
};

export default Footer;
