import React, { useEffect, useState } from "react";
import hero from '../images/hero/main-car.png'
import heroBg from '../images/hero/hero-bg.png'

function Hero() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 920) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);


  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <img src={heroBg} alt="" className="bg-shape" />
          <a
            href="#home"
            className={`scroll-up ${scroll ? "show" : ""}`}
          >
            <i className="fa-solid fa-angle-up"></i>
          </a>
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Plan your trip now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns">
                <a href="#booking-section" className="book-ride">
                  Book Ride &nbsp;<i className="fa-solid fa-circle-check"></i>
                </a>
                <a href="/" className="learn-more">
                  Learn more &nbsp; <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
            <img  src={hero} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
