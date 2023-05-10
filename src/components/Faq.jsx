import React, { useState } from "react";
import { faq } from "../Constant";

function Faq() {
  const [active, setActive] = useState(1);

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>
            <div className="all-question">
              {/* testimonials */}
              {faq.map((qna) => (
                <div className="faq-box">
                  <div
                    onClick={() => setActive(active == qna.id ? 0 : qna.id)}
                    className={`question ${
                      active == qna.id ? "active-question" : ""
                    }`}
                  >
                    <p>{qna.question}</p>
                    <i className="fa-solid fa-angle-down"></i>
                  </div>
                  <div
                    onClick={() => setActive(0)}
                    className={`answere ${
                      active == qna.id ? "active-answere" : ""
                    }`}
                  >
                    {qna.answere}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
