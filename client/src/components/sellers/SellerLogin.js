import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import logo from "../../images/logo.png";
import useAuth from "../../hooks/useAuth";

const SELLER_LOGIN_URL = "sellers/login";

const SellerLogin = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/sellers/profile";

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(SELLER_LOGIN_URL, user).then((response) => {
      if (response.data.error) {
        console.log(`${response.data.error}`);
      } else {
        setAuth({
          user: response.data.user,
          roles: response.data.roles,
          accessToken: response.data.accessToken,
        });
        setUser({
          email: "",
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
                  to="/sellers/register"
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
                    Email :
                  </label>
                  <input
                    type="text"
                    id="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
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
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerLogin;
