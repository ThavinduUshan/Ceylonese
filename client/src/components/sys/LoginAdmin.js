import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const SYS_LOGIN_URL = "/sys/login";

const LoginAdmin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const fromtoAdmin = location?.state?.from?.pathname || "/sys/admins/profile";
  const fromtoModerator =
    location?.state?.from?.pathname || "/sys/moderators/profile";

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(SYS_LOGIN_URL, user).then((response) => {
      if (response.data.error) {
        console.log(`${response.data.error}`);
      } else {
        console.log(response.data.roles);
        if (response.data.roles === 2436) {
          setAuth({
            user: response.data.user,
            roles: response.data.roles,
            accessToken: response.data.accessToken,
          });
          setUser({
            username: "",
            password: "",
          });
          navigate(fromtoAdmin, { replace: true });
        }

        if (response.data.roles === 9871) {
          setAuth({
            user: response.data.user,
            roles: response.data.roles,
            accessToken: response.data.accessToken,
          });
          setUser({
            username: "",
            password: "",
          });
          navigate(fromtoModerator, { replace: true });
        }
      }
    });
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} method="POST" className="w-4/12">
          <h1 className="text-5xl font-bold mb-5 text-gray-700 text-center">
            Admin Portal
          </h1>
          <p
            htmlFor="terms"
            className="mb-10 text-xl font-medium text-gray-300 text-center"
          >
            Ceylonese Ecommerce
          </p>
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
                id="username"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-8 mb-8 text-white bg-gray-700 hover:bg-gray-800 font-medium rounded-lg text-md px-5 py-4 text-center w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginAdmin;
