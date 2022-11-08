import React from "react";
import { login } from "../../assets";
import LoginForm from "./LoginForm";
import useTitle from "./../../hooks/useTitle";

const Login = () => {
  useTitle("Login");
  return (
    <div className="md:flex items-center justify-between lg:px-20 md:px-8 px-4 my-20 gap-20">
      <div className="md:w-1/2">
        <img src={login} alt="" className="lg:w-2/3 mb-6 md:mb-0" />
      </div>
      <div className="md:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
