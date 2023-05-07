import React from "react";
import logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <nav>
        <div
          onClick={() => setMobile(!mobile)}
          className={!mobile ? "mobile-navbar" : "mobile-navbar open"}
        >
          <ul className="mobile-navbar__links">
            <li onClick={() => setMobile(!mobile)}>
              <a href="/">Home</a>
            </li>
            <li onClick={() => setMobile(!mobile)}>
              <a href="/about">About</a>
            </li>
            <li onClick={() => setMobile(!mobile)}>
              <a href="/models">Models</a>
            </li>
            <li onClick={() => setMobile(!mobile)}>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li onClick={() => setMobile(!mobile)}>
              <a href="/team">Our Team</a>
            </li>
            <li onClick={() => setMobile(!mobile)}>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar">
          <div className="navbar-img">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div onClick={() => setMobile(!mobile)} className="hamburger">
            <span className={!mobile ? "bar" : "bar bar1"}></span>
            {!mobile && <span className="bar"></span>}
            <span className={!mobile ? "bar" : "bar bar3"}></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
