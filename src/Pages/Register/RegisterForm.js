import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className="text-2xl font-semibold text-blue-600">
          Register Your Account
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="full name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="photo url"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="confirm password"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <button className="bg-blue-600 text-white py-2 rounded">
            Register
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login
          </Link>
        </p>
        <button className="btn gap-2 w-full mt-3 normal-case">
          <FaGoogle />
          <span>Continue With Google</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
