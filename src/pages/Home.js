import React from "react";
import { NavLink } from "react-router-dom";
import PostsSlider from "../components/PostsSlider";
import HomeBanner from "../components/HomeBanner";
import HomeMarquee from "../components/HomeMarquee";
import designSkills from "../assets/img/design-skills-img.png";
import Focusimg from "../assets/img/focusgoals.svg";
import Understandimg from "../assets/img/understandimg.png";

const Home = () => {
  return (
    <div>
      <main>
        <HomeBanner />
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
          <div className="designSkills">
            <div className="container-fluid">
              <div className="row  g-0">
                <div className="col-lg-5 order-lg-last">
                  <img
                    src={designSkills}
                    className="designSkillsImg img-fluid w-100"
                  />
                </div>
                <div className="col-lg-7 align-self-center">
                  <div className="row justify-content-end">
                    <div className="col-lg-8 align-self-center">
                      <div className="title-article">
                        <div>
                          <h2 className="text-blak">
                            Don’t have design skills or time?
                          </h2>
                          <p>
                            Don’t worry, say goodbye to spending hours creating
                            designs with sample templates and complex design
                            tools. With instaDe you can generate stunning
                            designs in seconds, without needing any design
                            skills. Just input your requirement and watch the AI
                            generate a custom design that perfectly fits your
                            needs, all in a fraction of the time it would take
                            using templates or complex design tools.
                          </p>
                          <p>
                            <NavLink to="" className="link-btn">
                              <span>Try instaDe</span>
                            </NavLink>
                          </p>
                        </div>
                      </div>
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
                      <h2 className="text-blak py-3 py-md-0">
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
                  <h2 className="text-blak pb-4">
                    Start Creating Beautiful Designs instantly
                  </h2>
                  <p>
                    <NavLink to="" className="link-btn">
                      <span>Sign up Now</span>
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <HomeMarquee />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
