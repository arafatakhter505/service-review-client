import React from "react";
import { Link } from "react-router-dom";
import { hero } from "../../assets";

const Hero = () => {
  return (
    <div className="lg:px-20 md:px-8 px-6 my-12 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <h2 className="lg:text-6xl md:text-5xl text-3xl font-bold text-blue-600">
          Your Trusted <br /> Liberty Dentist
        </h2>
        <p className="my-4 text-xl">Modern Dentistry with a Personal Touch</p>
        <Link to={"/services"}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded border border-blue-600 hover:bg-white hover:text-blue-600 transition-all">
            Get Started
          </button>
        </Link>
      </div>
      <div className="md:w-1/2">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
