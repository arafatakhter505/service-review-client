import React from "react";
import { useLoaderData } from "react-router-dom";
import Choose from "./Choose";
import Features from "./Features";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Hero />
      <ServicesSection services={services} />
      <Features />
      <Choose />
    </div>
  );
};

export default Home;
