import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./../Shared/ServiceCard";
import useTitle from "./../../hooks/useTitle";

const Services = () => {
  const services = useLoaderData();
  useTitle("Services");
  return (
    <div className="lg:px-20 md:px-8 px-6 my-12">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
