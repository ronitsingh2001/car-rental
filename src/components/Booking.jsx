import React from "react";

function Booking() {
  return (
    <>
      <section className="booking" id="booking-section">
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
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>
                <div className="box-form__field">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select>
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>
                <div className="box-form__field">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <select>
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
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
                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* BOOKING - MODAL */}
    </>
  );
}

export default Booking;
