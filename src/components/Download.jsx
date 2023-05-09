import React from "react";
import d1 from '../images/download/appstore.svg'
import d2 from '../images/download/googleapp.svg'

function Download() {
  return (
    <>
      <section className="download">
        <div className="container">
          <div className="download-content">
            <h2>Download our app to get most out of it</h2>
            <p>
              Thrown shy denote ten ladies though ask saw. Or by to he going
              think order event music. Incommode so intention defective at
              convinced. Led income months itself and houses you.
            </p>
            <div className="download-content__btns">
                <img src={d1} alt="" />
                <img src={d2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Download;
