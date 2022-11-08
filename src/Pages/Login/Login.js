import React, { useContext } from "react";
import { login } from "../../assets";
import LoginForm from "./LoginForm";
import useTitle from "./../../hooks/useTitle";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../contexts/UserContext";

const Login = () => {
  useTitle("Login");
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
      .then((result) => {
        const user = result.user;
        toast.success("Successfully login");
        fetch("https://tooth-fixers-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("tooth-fixers-token", data.token);
          });
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((e) => toast.error(e.message));
  };
  return (
    <div className="md:flex items-center justify-between lg:px-20 md:px-8 px-4 my-20 gap-20">
      <div className="md:w-1/2">
        <img src={login} alt="" className="lg:w-2/3 mb-6 md:mb-0" />
      </div>
      <div className="md:w-1/2">
        <LoginForm
          handleSubmit={handleSubmit}
          handleGoogleLogin={handleGoogleLogin}
        />
      </div>
    </div>
  );
};

export default Login;
