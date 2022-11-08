import React from "react";

const AddService = () => {
  return (
    <div className="lg:px-64 md:px-8 px-6 my-12">
      <h2 className="md:text-5xl text-4xl md:text-left text-center font-semibold text-blue-600">
        Add New Service
      </h2>
      <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 mt-12">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              name="name"
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
              type="text"
              name="price"
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
        </div>
      </div>
    </div>
  );
};

export default AddService;
