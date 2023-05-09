import React from "react";
import HeroPage from "../Components/HeroPage";

import main from "../images/about/about-main.jpg";
import icon1 from "../images/about/icon1.png";
import icon2 from "../images/about/icon2.png";
import icon3 from "../images/about/icon3.png";
import Plan from "../Components/Plan";
import BookBanner from "../Components/BookBanner";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPage name={"About"}></HeroPage>
        <div className="container">
          <div className="about-main">
            <img className="about-main__img" src={main} alt="" />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="about-main__text__icon">
                <div className="box">
                  <img src={icon1} alt="" />
                  <span>
                    <h4>20</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="box">
                  <img src={icon2} alt="" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="box">
                  <img src={icon3} alt="" />
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Plan />

        </div>
        <BookBanner />
      </section>
    </>
  );
}

export default About;
