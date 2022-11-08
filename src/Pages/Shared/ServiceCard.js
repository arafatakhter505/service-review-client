import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, imgUrl, name, description, price } = service;
  return (
    <div className="card bg-base-100 shadow-xl border">
      <figure>
        <PhotoProvider>
          <PhotoView src={imgUrl}>
            <img
              src={imgUrl}
              alt="service"
              className="cursor-pointer w-full md:h-[250px]"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <Link to={`/services/${_id}`} className="card-title text-blue-600">
          {name}
        </Link>
        <p>
          {description.length > 100 ? (
            <>{description.slice(0, 100)} .....</>
          ) : (
            description
          )}
        </p>
        <div className="card-actions justify-between items-center">
          <span className="text-xl font-semibold">Price: ${price}</span>
          <Link to={`/services/${_id}`}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded border border-blue-600 hover:bg-white hover:text-blue-600 transition-all">
              More Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
