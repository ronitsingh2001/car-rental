import React from "react";
import HeroPage from "../Components/HeroPage";
import Testimonial from "../Components/Testimonial";
import BookBanner from "../Components/BookBanner";

function TestimonialPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPage name="Testimonial" />
        <Testimonial />
        <BookBanner />
      </section>
    </>
  );
}

export default TestimonialPage;
