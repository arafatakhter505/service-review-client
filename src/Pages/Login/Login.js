import React from "react";
import { login } from "../../assets";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="md:flex items-center justify-between lg:px-20 px-8 my-20 gap-20">
      <div className="md:w-1/2">
        <img src={login} alt="" className="lg:w-2/3 mb-6 md:mb-0" />
      </div>
      <div className="md:w-1/2">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-blue-600">
              Welcome Back!
            </h2>
            <p>Login to continue</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
            <div className="form-control mt-6">
              <button className="bg-blue-600 text-white py-2 rounded">
                Login
              </button>
            </div>
            <p>
              Don't have an account?{" "}
              <Link to={"/register"} className="text-blue-600">
                Register
              </Link>
            </p>
            <button className="btn gap-2 w-full mt-3 normal-case">
              <FaGoogle />
              <span>Login With Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
