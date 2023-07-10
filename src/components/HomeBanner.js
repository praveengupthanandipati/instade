import React from "react";
import { NavLink } from "react-router-dom";
import poster01 from "../assets/img/posters/01.jpg";
import poster02 from "../assets/img/posters/02.jpg";
import poster03 from "../assets/img/posters/03.jpg";
import poster04 from "../assets/img/posters/04.jpg";
import poster05 from "../assets/img/posters/05.jpg";
import poster06 from "../assets/img/posters/06.jpg";
import poster07 from "../assets/img/posters/07.jpg";
import poster08 from "../assets/img/posters/08.jpg";
import poster09 from "../assets/img/posters/09.jpg";
import poster10 from "../assets/img/posters/10.jpg";
import poster11 from "../assets/img/posters/11.jpg";
import poster12 from "../assets/img/posters/12.jpg";
import poster13 from "../assets/img/posters/13.jpg";
import poster14 from "../assets/img/posters/14.jpg";
import poster15 from "../assets/img/posters/15.jpg";
import poster16 from "../assets/img/posters/16.jpg";
import poster17 from "../assets/img/posters/17.jpg";
import poster18 from "../assets/img/posters/18.jpg";

const HomeBanner = () => {
  return (
    <div>
      <div className="Home-banner">
        <div className="custom-container">
          <article className="text-center">
            <h1 className="title text-black">
              AI Powered Instant Design Generator
            </h1>
            <h5 className="h5 py-md-3 text-black">
              You Can Generate Stunning Designs Instantly like a Magic
            </h5>
            <div>
              <NavLink to="" className="link-btn">
                <span>Try instaDe</span>
              </NavLink>
            </div>
          </article>

          <div className="HomebannerFigure">
            <div className="row g-1">
              <div className="col-2">
                <figure>
                  <img src={poster01} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster02} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster03} className="img-fluid" alt="" />
                </figure>
              </div>
              <div className="col-2">
                <figure>
                  <img src={poster04} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster05} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster06} className="img-fluid" alt="" />
                </figure>
              </div>
              <div className="col-2">
                <figure>
                  <img src={poster07} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster08} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster09} className="img-fluid" alt="" />
                </figure>
              </div>
              <div className="col-2">
                <figure>
                  <img src={poster10} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster11} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster12} className="img-fluid" alt="" />
                </figure>
              </div>
              <div className="col-2">
                <figure>
                  <img src={poster13} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster14} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster15} className="img-fluid" alt="" />
                </figure>
              </div>
              <div className="col-2">
                <figure>
                  <img src={poster09} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster17} className="img-fluid" alt="" />
                </figure>
                <figure>
                  <img src={poster18} className="img-fluid" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
