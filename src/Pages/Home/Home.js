import React from "react";
import { useLoaderData } from "react-router-dom";
import Choose from "./Choose";
import Features from "./Features";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
import useTitle from "./../../hooks/useTitle";

const Home = () => {
  const services = useLoaderData();
  useTitle("Home");

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
