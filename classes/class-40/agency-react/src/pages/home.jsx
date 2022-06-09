import React from "react";
import Hero from "../components/Hero";
import Solution from "../components/Solution";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testinomial";
import News from "../components/News";
import BoostBusiness from "../components/Boost";

export default function home() {
  return (
    <>
      <Hero />
      <Solution />
      <Services />
      <Portfolio />
      <Testimonial />
      <News />
      <BoostBusiness />
    </>
  );
}
