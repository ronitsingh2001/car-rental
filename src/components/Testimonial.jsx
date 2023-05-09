import test1 from "../images/testimonials/pfp1.jpg";
import test2 from "../images/testimonials/pfp2.jpg";

const Testimonial = () => {
  return (
    <>
      <section className="testimonial">
        <div className="container">
          <div className="testimonial-content">
            <div className="testimonial-content__title">
              <h4>Reviewed by people</h4>
              <h2>Client's Testimonial</h2>
              <p>
                Discover the positive impact we've made on the our clients by
                reading through their testimonials. Our clients have experienced
                our service and results, and they're eager to share their
                positive experiences with you.
              </p>
            </div>
            <div className="all-testimonial">
              <div className="all-testimonial__box">
                <span className="quote-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="all-testimonial__box__name">
                  <div className="all-testimonial__box__name__profile">
                    <img src={test1} alt="" />
                    <span>
                      <h4>Harry potter</h4>
                      <p>belgrade</p>
                    </span>
                  </div>
                </div>
              </div>{" "}
              <div className="all-testimonial__box box-2">
                <span className="quote-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable. "
                </p>
                <div className="all-testimonial__box__name">
                  <div className="all-testimonial__box__name__profile">
                    <img src={test2} alt="" />
                    <span>
                      <h4>Harry potter</h4>
                      <p>belgrade</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
