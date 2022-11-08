import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../Shared/ServiceCard";

const ServicesSection = ({ services }) => {
  return (
    <div className="lg:px-20 md:px-8 px-6 my-20">
      <h2 className="md:text-3xl text-xl font-semibold text-blue-600 text-center">
        My Services
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-12">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to={"/services"}>
          <button className="bg-blue-600 text-white px-6 py-2 rounded border border-blue-600 hover:bg-white hover:text-blue-600 transition-all">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
