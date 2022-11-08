import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "./../../contexts/UserContext";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const { googleLogin, createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // google
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Successfully login");
        navigate("/");
      })
      .catch((e) => toast.error(e.message));
  };

  // email & password
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.imgUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    const cPassword = form.cpassword.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
    } else if (password !== cPassword) {
      toast.error("Password does not match");
    } else {
      createUser(email, password)
        .then(() => {
          updateUser(name, img)
            .then(() => toast.success("Successfully user registration"))
            .catch((e) => toast.error(e.message));
          navigate("/");
          form.reset();
        })
        .catch((e) => toast.error(e.message));
    }
  };

  return (
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <h2 className="text-2xl font-semibold text-blue-600">
          Register Your Account
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="full name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="imgUrl"
            placeholder="photo url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            name="cpassword"
            placeholder="confirm password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="bg-blue-600 text-white py-2 rounded">
            Register
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login
          </Link>
        </p>
        <div
          onClick={handleGoogleLogin}
          className="btn gap-2 w-full mt-3 normal-case"
        >
          <FaGoogle />
          <span>Continue With Google</span>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
