import React from "react";
import Hero from "../Components/Hero";
import Booking from "../Components/Booking";
import Plan from "../Components/Plan";
import Pick from "../Components/Pick";
import Banner from "../Components/Banner";
import ChooseUs from "../Components/ChooseUs";
import Testimonial from "../Components/Testimonial";
import Faq from "../Components/Faq";
import Download from "../Components/Download";

function Home() {
  return (
    <>
      <Hero />
      <Booking />
      <Plan />
      <Pick />
      <Banner />
      <ChooseUs />
      <Testimonial />
      <Faq />
      <Download />
    </>
  );
}

export default Home;
