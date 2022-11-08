import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useTitle from "./../../hooks/useTitle";

const AddService = () => {
  const [service, setService] = useState({});
  useTitle("Add Service");

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newService = { ...service };
    newService[field] = value;
    setService(newService);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://tooth-fixers-server.vercel.app/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully service add");
          event.target.reset();
        }
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="lg:px-64 md:px-8 px-6 my-12">
      <h2 className="md:text-5xl text-4xl md:text-left text-center font-semibold text-blue-600">
        Add New Service
      </h2>
      <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 mt-12">
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInputChange}
              placeholder="service name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="imgUrl"
              onChange={handleInputChange}
              placeholder="image url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              onChange={handleInputChange}
              placeholder="price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              onChange={handleInputChange}
              className="textarea textarea-bordered"
              placeholder="description"
              required
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
