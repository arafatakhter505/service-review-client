import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <h2 className="text-8xl font-bold text-blue-600">404</h2>
        <p className="my-6 md:text-5xl text-3xl font-semibold">
          Page Not Found
        </p>
        <Link to={"/"} className="bg-blue-600 text-white px-4 py-2 rounded">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
