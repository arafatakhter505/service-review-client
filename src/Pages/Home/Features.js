import React from "react";
import { FaPlusSquare, FaUserMd } from "react-icons/fa";
import { GiLoveInjection } from "react-icons/gi";

const Features = () => {
  return (
    <div className="lg:px-20 md:px-8 px-6 my-20 text-center">
      <h2 className="md:text-3xl text-xl font-semibold text-blue-600">
        All-encompassing care, <br /> a fresh approach to dentistry
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 mt-8">
        <div className="shadow p-4 border rounded">
          <span className="text-6xl text-blue-600">
            <FaUserMd className="inline" />
          </span>
          <h3 className="text-xl font-semibold text-blue-600 my-3">
            Neck Wraps
          </h3>
          <p>
            Take some time for yourself. Soothe any tightness in the shoulders
            and neck.
          </p>
        </div>
        <div className="shadow p-4 border rounded">
          <span className="text-6xl text-blue-600">
            <GiLoveInjection className="inline" />
          </span>
          <h3 className="text-xl font-semibold text-blue-600 my-3">
            Botox Treatments
          </h3>
          <p>
            Reduce muscle-generated dental pain and help your skin look
            refreshed.
          </p>
        </div>
        <div className="shadow p-4 border rounded">
          <span className="text-6xl text-blue-600">
            <FaPlusSquare className="inline" />
          </span>
          <h3 className="text-xl font-semibold text-blue-600 my-3">
            Pain-free Care
          </h3>
          <p>
            Our technology allows us to perform treatments without drills,
            needles, or scalpels.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
