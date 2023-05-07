import React from "react";

function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="container">
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
                <a href="/" className="book-ride">
                  Book Ride &nbsp;<i className="fa-solid fa-circle-check"></i>
                </a>
                <a href="/" className="learn-more">
                  Learn more &nbsp; <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
