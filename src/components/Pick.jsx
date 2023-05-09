import React from "react";
import car1 from "../images/cars-big/audia1.jpg";

function Pick() {
  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-content">
            <div className="pick-content__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-content__car">
              <div className="pick-box">
                <button className="coloured">Audi A1 S-Line</button>
                <button>VW Golf 6</button>
                <button>Toyota Camry</button>
                <button>BMW 320 ModernLine</button>
                <button>Mercedes-Benz GLK</button>
                <button>VW Passat CC</button>
              </div>
              <div className="car-box">
                <div className="picked-car">
                  <img src={car1} alt="" />
                </div>
                <div className="picked-desc">
                  <div className="price">
                    <span>$45&nbsp; </span>/ rent per day
                  </div>
                  <div className="table">
                    <div className="table__col">
                      <span>Model</span>
                      <span>Audi</span>
                    </div>
                    <div className="table__col">
                      <span>Mark</span>
                      <span>A1</span>
                    </div>
                    <div className="table__col">
                      <span>Year</span>
                      <span>2018</span>
                    </div>
                    <div className="table__col">
                      <span>Doors</span>
                      <span>4/5</span>
                    </div>
                    <div className="table__col">
                      <span>AC</span>
                      <span>Yes</span>
                    </div>
                    <div className="table__col">
                      <span>Transmission</span>
                      <span>Manual</span>
                    </div>
                    <div className="table__col">
                      <span>Fuel</span>
                      <span>Gasoline</span>
                    </div>
                  </div>
                  <a href="#booking-section" className="cta-btn">
                    Reserve Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pick;
