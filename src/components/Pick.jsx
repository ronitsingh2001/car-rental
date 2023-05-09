import React, { useState } from "react";
import {fleet} from "../Constant";

function Pick() {
  // const fleet = fleet;
  const [activeCar, setActiveCar] = useState(fleet[0]);

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
                {fleet.map((car) => (
                  <button
                    onClick={() => setActiveCar(car)}
                    className={`${car.id == activeCar?.id ? "coloured" : ""}`}
                    key={car.name}
                  >
                    {car.name}
                  </button>
                ))}
              </div>
              <div className="car-box">
                <div className="picked-car">
                  <img src={activeCar?.img} alt="" />
                </div>
                <div className="picked-desc">
                  <div className="price">
                    <span>$ {activeCar?.rent}&nbsp; </span>/ rent per day
                  </div>
                  <div className="table">
                    <div className="table__col">
                      <span>Model</span>
                      <span>{activeCar?.details.model}</span>
                    </div>
                    <div className="table__col">
                      <span>Mark</span>
                      <span>{activeCar?.details.mark}</span>
                    </div>
                    <div className="table__col">
                      <span>Year</span>
                      <span>{activeCar?.details.year}</span>
                    </div>
                    <div className="table__col">
                      <span>Doors</span>
                      <span>{activeCar?.details.door}</span>
                    </div>
                    <div className="table__col">
                      <span>AC</span>
                      <span>{activeCar?.details.ac}</span>
                    </div>
                    <div className="table__col">
                      <span>Transmission</span>
                      <span>{activeCar?.details.transmission}</span>
                    </div>
                    <div className="table__col">
                      <span>Fuel</span>
                      <span>{activeCar?.details.fuel}</span>
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
