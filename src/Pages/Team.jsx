import React from "react";
import HeroPage from "../Components/HeroPage";
import t1 from "../images/team/1.png";
import t2 from "../images/team/2.png";
import t4 from "../images/team/4.png";
import t3 from "../images/team/3.png";
import t5 from "../images/team/5.png";
import t6 from "../images/team/6.png";
import BookBanner from "../Components/BookBanner";

function Team() {
  return (
    <>
      <section className="team-page">
        <HeroPage name="Our Team" />
        <div className="container">
          <div className="team-content">
            <div className="box">
              <img src={t1} alt="" />
              <h4>Luke Miller</h4>
              <p>Salesman</p>
            </div>{" "}
            <div className="box">
              <img src={t2} alt="" />
              <h4>Luke Miller</h4>
              <p>Salesman</p>
            </div>{" "}
            <div className="box">
              <img src={t3} alt="" />
              <h4>Luke Miller</h4>
              <p>Salesman</p>
            </div>{" "}
            <div className="box">
              <img src={t4} alt="" />
              <h4>Luke Miller</h4>
              <p>Salesman</p>
            </div>{" "}
            <div className="box">
              <img src={t5} alt="" />
              <h4>Luke Miller</h4>
              <p>Salesman</p>
            </div>{" "}
            <div className="box">
              <img src={t6} alt="" />
              <h4>Luke Miller</h4>
              <p>Salesman</p>
            </div>
          </div>
        </div>
        <BookBanner />

      </section>
    </>
  );
}

export default Team;
