import React, { useState } from "react";
import golf from "../images/cars-big/audia1.jpg";
import { book } from "../Constant";

function Booking() {
  const [modal, setModal] = useState(false);

  console.log(book);

  return (
    <>
      <section className="booking" id="booking-section">
        <div
          onClick={() => setModal(false)}
          className={`modal-overlay ${modal ? "active-overlay" : ""}`}
        ></div>
        <div className="container">
          <div className="booking-content">
            <div className="booking-content__box">
              <h2>Book a car</h2>
              <p className="error-message">
                All fields required! <i class="fa-solid fa-xmark"></i>
              </p>
              <p className="booking-done">
                Check your eamil to confirm an order.{" "}
                <i class="fa-solid fa-xmark"></i>
              </p>
              <form className="box-form">
                <div className="box-form__field">
                  <label>
                    <i class="fa-solid fa-car"></i> &nbsp; Select Your Car Type{" "}
                    <b>*</b>
                  </label>
                  <select>
                    <option>Select your car type</option>
                  {book.cars.map((i) => (
                      <option>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="box-form__field">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select>
                  <option>Select pick up location</option>
                  {book.pickUp.map((i) => (
                      <option>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="box-form__field">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <select>
                  <option>Select drop off location</option>
                    {book.dropOff.map((i) => (
                      <option>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="box-form__field">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    // value={pickTime}
                    // onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__field">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-of <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    // value={dropTime}
                    // onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>
                <button onClick={() => setModal(true)} type="button">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* BOOKING - MODAL */}

      <div className={!modal ? "booking-modal modal-open" : "booking-modal"}>
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={() => setModal(false)} className="fa-solid fa-xmark"></i>
        </div>
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i>
            Upon completing this reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car and booking info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="dates">
              <h5>Loaction & Dates</h5>
              <span>
                {/* <i className="fa-solid fa-location-dot"></i> */}
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    2023-05-08 / <input type="time" className="input-time" />
                  </p>
                </div>
              </span>
            </div>
            <div className="dates">
              <span>
                {/* <i className="fa-solid fa-location-dot"></i> */}
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    2023-05-08 / <input type="time" className="input-time" />
                  </p>
                </div>
              </span>
            </div>
            <div className="dates">
              <span>
                {/* <i className="fa-solid fa-location-dot"></i> */}
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>X-location</p>
                </div>
              </span>
            </div>
            <div className="dates">
              <span>
                {/* <i className="fa-solid fa-location-dot"></i> */}
                <div>
                  <h6>Drop-Off Loaction</h6>
                  <p>Y-location</p>
                </div>
              </span>
            </div>
          </div>
          {/* car model info */}
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car - </span>
              VW golf 6
            </h5>
            <img src={golf} alt="" />
          </div>
        </div>
        <div className="booking-modal__personal-info">
          <h4>Personal Information</h4>
          <form action="#" className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input type="text" placeholder="Enter your first name" />
                <p className="error-modal">This field is required.</p>
              </span>
              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input type="text" placeholder="Enter your last name" />
                <p className="error-modal">This field is required.</p>
              </span>
              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input type="tel" placeholder="Enter your phone number" />
                <p className="error-modal">This field is required.</p>
              </span>
              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input type="number" placeholder="18" />
                <p className="error-modal">This field is required.</p>
              </span>
            </div>
            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="Enter your email address" />
                <p className="error-modal">This field is required.</p>
              </span>
              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input type="text" placeholder="Enter your street address" />
                <p className="error-modal">This field is required.</p>
              </span>
            </div>
            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input type="text" placeholder="Enter your city" />
                <p className="error-modal">This field is required.</p>
              </span>
              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input type="text" placeholder="Enter your zip code" />
                <p className="error-modal">This field is required.</p>
              </span>
            </div>
            <span className="info-form__checkbox">
              <input type="checkbox" />
              <p>Please send me latest news and updates</p>
            </span>
            <div className="reserve-button">
              <button onClick={() => setModal(false)}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Booking;
