import React from "react";
import { dentist } from "../../assets";

const Choose = () => {
  return (
    <div className="lg:px-20 md:px-8 px-6 my-20 md:flex items-center justify-between bg-blue-600 text-white py-14">
      <div className="md:w-1/2">
        <img
          src={dentist}
          alt=""
          className="md:w-2/3 mb-4 md:mb-0 rounded-lg shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="lg:text-6xl md:text-4xl text-2xl md:text-left text-center font-semibold">
          Why Choose Me?
        </h2>
        <ul className="mt-6 list-disc pl-6 md:text-xl">
          <li>Highest-rated dentistry in Austin, TX</li>
          <li>Clean, comfortable, and modern studios</li>
          <li>Transparent care and pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default Choose;
