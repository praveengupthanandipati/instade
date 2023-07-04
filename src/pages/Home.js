import React from "react";
import BannerImage from "../assets/img/home-banner.png";
import { NavLink } from "react-router-dom";
import PostsSlider from "../components/PostsSlider";
import designSkills from "../assets/img/design-skills-img.png";
import Focusimg from "../assets/img/focusimg.png";
import Understandimg from "../assets/img/understandimg.png";
import startCreatingbanner from "../assets/img/start-creatingbanner.png";

const Home = () => {
  return (
    <div>
      <main>
        <div className="Home-banner">
          <div className="custom-container">
            <article className="text-center">
              <h1 className="title text-black">
                AI Powered Instant Design Generator
              </h1>
              <h5 className="h5 pb-4 text-black">
                You Can Generate Stunning Designs Instantly like a Magic
              </h5>
              <NavLink to="" className="link-btn">
                <span>Try instaDe</span>
              </NavLink>
            </article>
            <figure>
              <img src={BannerImage} alt="" className="img-fluid" />
            </figure>
          </div>
        </div>
        <div className="compatible-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="title-article text-center pb-4">
                  <h2 className="text-blak">Capabilities of instaDe</h2>
                  <p>
                    Instantly generate eye-catching social media creatives in
                    all sizes. We're constantly expanding our capabilities to
                    instantly generate even more types of designs like logo,
                    flyer, pamphlet, brochure, or any other type of designs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="custom-container">
            <PostsSlider />
          </div>
          <div className="designSkills position-relative">
            <img
              src={designSkills}
              className="designSkillsImg position-absolute"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="title-article">
                    <div>
                      <h2 className="text-blak">
                        Don’t have design skills or time?
                      </h2>
                      <p className="py-2">
                        Don’t worry, say goodbye to spending hours creating
                        designs with sample templates and complex design tools.
                        With instaDe you can generate stunning designs in
                        seconds, without needing any design skills. Just input
                        your requirement and watch the AI generate a custom
                        design that perfectly fits your needs, all in a fraction
                        of the time it would take using templates or complex
                        design tools.
                      </p>
                      <NavLink to="" className="link-btn">
                        <span>Try instaDe</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="focus-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <img src={Focusimg} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="title-article">
                    <div>
                      <h2 className="text-blak">Focus on Bigger Goals</h2>
                      <p className="py-3">
                        Whether you're a business, designer, or marketing
                        agency, you can focus on bigger goals by reducing design
                        time drastically with instaDe. Our platform is designed
                        to be a magical tool that supercharges your design
                        process, saving you time and effort while delivering
                        stunning results.
                      </p>
                      <NavLink to="" className="link-btn">
                        <span>Try instaDe</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 order-lg-last">
                  <img src={Understandimg} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="title-article">
                    <div>
                      <h2 className="text-blak">
                        We Understand Your Brand, Messaging and Target Audience
                      </h2>
                      <p className="py-3">
                        instaDe uses advanced AI algorithms to analyse your
                        brand, messaging, and target audience to create
                        customized designs that are perfectly tailored to your
                        social media marketing needs. Our revolutionary
                        technology delivers beautiful, high-quality, multiple
                        variations of designs optimized for your message and
                        target audience every time.
                      </p>
                      <NavLink to="" className="link-btn">
                        <span>Try instaDe</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="startCreating">
            <div className="container">
              <div className="title-article text-center pb-3">
                <div>
                  <h2 className="text-blak pb-3">
                    Start Creating Beautiful Designs instantly
                  </h2>
                  <NavLink to="" className="link-btn">
                    <span>Sign up Now</span>
                  </NavLink>
                </div>
              </div>              
            </div>
            <img src={startCreatingbanner} className="img-fluid w-100" alt=""/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;