import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData();
  return (
    <div className="lg:px-20 md:px-8 px-6 my-12">
      <div className="card lg:card-side bg-base-100 shadow-xl border">
        <figure className="lg:w-1/2">
          <img src={service.imgUrl} alt="service" className="w-full h-[100%]" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title">{service.name}</h2>
          <p>{service.description}</p>
          <div className="card-actions justify-end">
            <span className="bg-blue-600 text-white px-6 py-2">
              Price: ${service.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
