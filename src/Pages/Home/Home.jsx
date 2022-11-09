import React from "react";
import useTitle from "../../Hooks/useTitle";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import ServicesHome from "../ServicesHome/ServicesHome";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Hero />
      <ServicesHome />
      <Features />
      <Contact />
    </>
  );
};

export default Home;
