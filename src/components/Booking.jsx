import React, { useState } from "react";
import golf from "../images/cars-big/audia1.jpg";
import { book } from "../Constant";
import { useEffect } from "react";

function Booking() {
  const [modal, setModal] = useState(false);

  const [carType, setCarType] = useState("");
  const [pickUpLocation, setPickUpLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOffDate, setDropOffDate] = useState("");

  const [firstName, setFirstName] = useState(" ");
  const [lastname, setLastname] = useState(" ");
  const [phone, setPhone] = useState(0);
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [city, setCity] = useState(" ");
  const [zip, setZip] = useState(" ");

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSearch = () => {
    if (
      carType === "" ||
      pickUpLocation === "" ||
      dropOffDate === "" ||
      pickUpDate === "" ||
      dropOffLocation === ""
    ) {
      setError(true);
    } else {
      setModal(true);
    }
  };

  const handleRegister = () => {
    if (
      firstName === "" ||
      lastname === "" ||
      phone === "" ||
      age === "" ||
      age === 0 ||
      phone === 0 ||
      email === "" ||
      zip === "" ||
      city === "" ||
      address === ""
    ) {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
      setModal(false)
    }
  };

  const handlePhone = (value) => {
    setPhone(value);
  };

  const handleAge = (value) => {
    setAge(value);
  };

  useEffect(() => {
    if (
      carType !== "" &&
      pickUpLocation !== "" &&
      dropOffDate !== "" &&
      pickUpDate !== "" &&
      dropOffLocation !== ""
    ) {
      setError(false);
    }
  }, [carType, pickUpDate, pickUpLocation, dropOffDate, dropOffLocation]);

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
              {error && (
                <p className="error-message">
                  All fields required!{" "}
                  <i
                    onClick={() => setError(false)}
                    class="fa-solid fa-xmark"
                  ></i>
                </p>
              )}
              {success && (
                <p className="booking-done">
                  Check your email to confirm order.{" "}
                  <i
                    onClick={() => setSuccess(false)}
                    className="fa-solid fa-xmark"
                  ></i>
                </p>
              )}
              <form className="box-form">
                <div className="box-form__field">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select onChange={(e) => setCarType(e.target.value)}>
                    <option value={""}>Select your car type</option>
                    {book.cars.map((i, index) => (
                      <option key={index}>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="box-form__field">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select onChange={(e) => setPickUpLocation(e.target.value)}>
                    <option value={""}>Select pick up location</option>
                    {book.pickUp.map((i, index) => (
                      <option key={index}>{i}</option>
                    ))}
                  </select>
                </div>
                <div className="box-form__field">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <select onChange={(e) => setDropOffLocation(e.target.value)}>
                    <option value={""}>Select drop off location</option>
                    {book.dropOff.map((i, index) => (
                      <option key={index}>{i}</option>
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
                    onChange={(e) => setPickUpDate(e.target.value)}
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
                    onChange={(e) => setDropOffDate(e.target.value)}
                    type="date"
                  ></input>
                </div>
                <button onClick={() => handleSearch()} type="button">
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
          <i
            onClick={() => (setModal(false), setError(false))}
            className="fa-solid fa-xmark"
          ></i>
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
                    {pickUpDate} / <input type="time" className="input-time" />
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
                    {dropOffDate} / <input type="time" className="input-time" />
                  </p>
                </div>
              </span>
            </div>
            <div className="dates">
              <span>
                {/* <i className="fa-solid fa-location-dot"></i> */}
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUpLocation}</p>
                </div>
              </span>
            </div>
            <div className="dates">
              <span>
                {/* <i className="fa-solid fa-location-dot"></i> */}
                <div>
                  <h6>Drop-Off Loaction</h6>
                  <p>{dropOffLocation}</p>
                </div>
              </span>
            </div>
          </div>
          {/* car model info */}
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car - </span>
              {carType}
            </h5>
            <img src={golf} alt="" />
          </div>
        </div>
        <div className="booking-modal__personal-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                />
                {firstName === "" && (
                  <p className="error-modal">This field is required.</p>
                )}
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  onChange={(e) => setLastname(e.target.value)}
                  type="text"
                  placeholder="Enter your last name"
                />
                {lastname === "" && (
                  <p className="error-modal">This field is required.</p>
                )}
              </span>
              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  type="tel"
                  onChange={(e) => handlePhone(e.target.value)}
                  placeholder="Enter your phone number"
                />
                {phone === "" && (
                  <p className="error-modal">This field is required.</p>
                )}
              </span>
              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  onChange={(e) => handleAge(e.target.value)}
                  type="number"
                  placeholder="18"
                />
                {age === "" && (
                  <p className="error-modal">This field is required.</p>
                )}
              </span>
            </div>
            <div className="info-form__2col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email address"
                />
                {email == "" && (
                  <p className="error-modal">This field is required.</p>
                )}
              </span>
              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="Enter your street address"
                />
                {address == "" && (
                  <p className="error-modal">This field is required.</p>
                )}
              </span>
            </div>
            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  placeholder="Enter your city"
                />
                {city == "" && (
                  <p className="error-modal">This field is required.</p>
                )}
              </span>
              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  onChange={(e) => setZip(e.target.value)}
                  type="text"
                  placeholder="Enter your zip code"
                />
                {zip == "" && (
                  <p className="error-modal">This field is required.</p>
                )}
              </span>
            </div>
            <span className="info-form__checkbox">
              <input type="checkbox" />
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button type="button" onClick={() => handleRegister()}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Booking;
