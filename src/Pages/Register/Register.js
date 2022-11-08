import React from "react";
import { register } from "../../assets";
import RegisterForm from "./RegisterForm";
import useTitle from "./../../hooks/useTitle";

const Register = () => {
  useTitle("Register");
  return (
    <div className="md:flex items-center justify-between lg:px-20 md:px-8 px-4 my-20 gap-20">
      <div className="md:w-1/2">
        <img src={register} alt="" className="mb-6 md:mb-0" />
      </div>
      <div className="md:w-1/2">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
