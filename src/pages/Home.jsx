import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import HealthSection from "../components/About";
import Health from "../components/Health";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <Header />
      <HealthSection />
      <Health />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
