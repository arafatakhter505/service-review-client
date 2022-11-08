import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "./../../contexts/UserContext";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const { googleLogin, logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // google
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Successfully login");
        navigate(from, { replace: true });
      })
      .catch((e) => toast.error(e.message));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then(() => {
        toast.success("Successfully login");
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <h2 className="text-2xl font-semibold text-blue-600">Welcome Back!</h2>
        <p>Login to continue</p>
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
        <div className="form-control mt-6">
          <button type="submit" className="bg-blue-600 text-white py-2 rounded">
            Login
          </button>
        </div>
        <p>
          Don't have an account?{" "}
          <Link to={"/register"} className="text-blue-600">
            Register
          </Link>
        </p>
        <div
          onClick={handleGoogleLogin}
          className="btn gap-2 w-full mt-3 normal-case"
        >
          <FaGoogle />
          <span>Login With Google</span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
