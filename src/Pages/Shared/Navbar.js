import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import { AuthContext } from "../../contexts/UserContext";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Successfully logout"))
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="navbar bg-base-100 lg:px-20 md:px-8 shadow sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost p-2 mr-1 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/blog"}>Blog</Link>
            </li>
            {user?.uid && (
              <>
                <li>
                  <Link to={"/myreviews"}>My Reviews</Link>
                </li>
                <li>
                  <Link to={"/addservice"}>Add Service</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to={"/"} className="flex items-center">
          <img src={logo} alt="" className="w-[60px]" />
          <span className="ml-2 font-semibold text-2xl">
            Tooth <span className="text-blue-600">Fixers</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          {user?.uid && (
            <>
              <li>
                <Link to={"/myreviews"}>My Reviews</Link>
              </li>
              <li>
                <Link to={"/addservice"}>Add Service</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <button
            onClick={handleLogOut}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-white hover:text-blue-800 border border-blue-600 transition-all"
          >
            Log Out
          </button>
        ) : (
          <Link
            to={"/login"}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-white hover:text-blue-800 border border-blue-600 transition-all"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
