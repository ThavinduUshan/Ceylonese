import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import logo from "../../images/logo.png";
import useAuth from "../../hooks/useAuth";

//login request url
const LOGIN_URL = "/buyers/login";

const Login = () => {
  //authentication
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/buyers/profile";

  //user state
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(LOGIN_URL, user).then((response) => {
      if (response.data.error) {
        console.log(`${response.data.error}`);
      } else {
        setAuth({
          user: response.data.user,
          roles: response.data.roles,
          accessToken: response.data.accessToken,
        });
        setUser({
          username: "",
          password: "",
        });
        navigate(from, { replace: true });
      }
    });
  };

  return (
    <>
      <div className="grid grid-cols-8">
        <div className="col-span-3 bg-gray-700 h-screen relative">
          <Link to="/">
            <img className="m-8 absolute w-32" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="col-span-5">
          <div className="h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} method="POST" className="w-9/12">
              <h1 className="text-5xl font-bold mb-5 text-gray-700">
                Welcome Back!
              </h1>
              <label
                htmlFor="terms"
                className="mb-10 text-xl font-medium text-gray-300"
              >
                New to Ceylonese?
                <Link
                  to="/buyers/register"
                  className="ml-2 text-gray-500 dark:text-gray-500"
                >
                  Create an account
                </Link>
              </label>
              <div className="mt-10">
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block mb-3 text-sm font-medium text-gray-500"
                  >
                    Username :
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    className="block w-full p-2.5 shadow-sm bg-white-500 border border-gray-300 text-gray-900 text- rounded-lg"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block mb-3 text-sm font-medium text-gray-500"
                  >
                    Password :
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="block w-full p-2.5 shadow-sm bg-white-500 border border-gray-300 text-gray-900 text- rounded-lg"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 mb-8 text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-md px-5 py-4 text-center w-full"
                >
                  Login
                </button>

                <Link
                  to="/"
                  className="text-sm font-medium text-gray-500 underline"
                >
                  Forgot your Password?
                </Link>
              </div>
              <div
                id="alert-5"
                className="mt-10 flex p-4 bg-gray-200 rounded-lg "
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-5 h-5 text-gray-700 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Info</span>
                <div className="ml-3 text-sm font-medium text-gray-500 ">
                  If you want to login As a seller,
                  <Link
                    to="/sellers/login"
                    className="ml-2 font-semibold underline hover:text-gray-500"
                  >
                    Go from here
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
