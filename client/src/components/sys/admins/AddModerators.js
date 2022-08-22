import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import NavBar from "../../NavBar";

const ADD_MODERATORS_URL = "/admins/addmoderators";

const AddModerators = () => {
  const navigateTo = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post(ADD_MODERATORS_URL, user).then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setUser({
            email: "",
            password: "",
          });
          navigateTo("/sys/admins/viewmoderators");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <NavBar />
      <div className="h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-4/12">
          <h1 className="text-5xl font-bold mb-5 text-gray-700 text-center">
            Admin Moderators
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
              Add Moderator
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddModerators;
