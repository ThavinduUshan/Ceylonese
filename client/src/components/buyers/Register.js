import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import axios from "../../api/axios";

const REGISTER_URL = "buyers/register";

//regex for validations
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const Register = () => {
  //focus state
  const [focus, setFocus] = useState({
    username: false,
    email: false,
    password: false,
  });

  //user state
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  //validation state
  const [validInput, setValidInput] = useState({
    validUserName: false,
    validPassword: false,
    validEmail: false,
  });

  //managing error state and success state
  const [errMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = USER_REGEX.test(user.username);
    setValidInput({ ...validInput, validUserName: result });
  }, [user.username]);

  useEffect(() => {
    const result = PWD_REGEX.test(user.password);
    setValidInput({ ...validInput, validPassword: result });
  }, [user.password]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(user.email);
    setValidInput({ ...validInput, validEmail: result });
  }, [user.email]);

  useEffect(() => {
    setErrorMsg("");
  }, [user.username, user.email, user.password]);

  //handling the submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //preventing any kind of JS Hack
    const r1 = USER_REGEX.test(user.username);
    const r2 = EMAIL_REGEX.test(user.email);
    const r3 = PWD_REGEX.test(user.password);

    if (r1 && r2 && r3) {
      try {
        axios.post(REGISTER_URL, user).then((response) => {
          if (response.data.error) {
            console.log(response.data.error);
            setErrorMsg(`${response.data.error}`);
          } else {
            console.log(response.data);
            setSuccess(true);
            setErrorMsg("");
            setUser({
              username: "",
              email: "",
              password: "",
            });
          }
        });
      } catch {
        console.log("server error!");
        setErrorMsg("Server Response Error!");
      }
    } else {
      console.log("invalid inputs");
      setErrorMsg("Invalid Inputs!");
      return;
    }
  };

  return (
    <>
      <div className="grid grid-cols-8">
        <div className="col-span-3 bg-orange-500 h-screen relative">
          <Link to="/">
            <img className="m-8 absolute w-32" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="col-span-5">
          <div className="h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} method="POST" className="w-9/12">
              <h1 className="text-5xl font-bold mb-5 text-gray-700">
                Signup to Ceylonese
              </h1>
              <label
                htmlFor="terms"
                className="mb-10 text-xl font-medium text-gray-300"
              >
                Already a Member?
                <Link
                  to="/buyers/login"
                  className="ml-2 text-orange-500 dark:text-orange-500"
                >
                  Login
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
                      setUser({
                        ...user,
                        username: e.target.value,
                      })
                    }
                    onFocus={() => setFocus({ ...focus, username: true })}
                    onBlur={() => setFocus({ ...focus, username: false })}
                    className="block w-full p-2.5 shadow-sm bg-white-500 border border-gray-300 text-gray-900 text- rounded-lg"
                    required
                  />
                  {!validInput.validUserName && focus.username && (
                    <>
                      <div className="flex mt-2 px-3 py-2 bg-red-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#dc2626"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="bg-red-100 text-sm text-red-500">
                          Username is not valid!
                        </p>
                      </div>
                    </>
                  )}
                  {validInput.validUserName && focus.username && (
                    <>
                      <div className="flex mt-2 px-3 py-2 bg-green-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#16a34a"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-sm text-green-500">
                          Username is valid!
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="block mb-3 text-sm font-medium text-gray-500"
                  >
                    Email :
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        email: e.target.value,
                      })
                    }
                    onFocus={() => setFocus({ ...focus, email: true })}
                    onBlur={() => setFocus({ ...focus, email: false })}
                    className="block w-full p-2.5 shadow-sm bg-white-500 border border-gray-300 text-gray-900 text- rounded-lg"
                    required
                  />
                  {!validInput.validEmail && focus.email && (
                    <>
                      <div className="flex mt-2 px-3 py-2 bg-red-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#dc2626"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="bg-red-100 text-sm mt-2 text-red-500">
                          Email is not valid!
                        </p>
                      </div>
                    </>
                  )}
                  {validInput.validEmail && focus.email && (
                    <>
                      <div className="flex mt-2 px-3 py-2 bg-green-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#16a34a"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-sm text-green-500">
                          Email is valid!
                        </p>
                      </div>
                    </>
                  )}
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
                    value={user.password}
                    onChange={(e) =>
                      setUser({
                        ...user,
                        password: e.target.value,
                      })
                    }
                    onFocus={() => setFocus({ ...focus, password: true })}
                    onBlur={() => setFocus({ ...focus, password: false })}
                    className="block w-full p-2.5 shadow-sm bg-white-500 border border-gray-300 text-gray-900 text- rounded-lg"
                    required
                  />

                  {!validInput.validPassword && focus.password && (
                    <>
                      <div className="flex mt-2 px-3 py-2 bg-red-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#dc2626"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-sm text-red-500">
                          Password is not valid!
                        </p>
                      </div>
                    </>
                  )}
                  {validInput.validPassword && focus.password && (
                    <>
                      <div className="flex mt-2 px-3 py-2 bg-green-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#16a34a"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="text-sm text-green-500">
                          Password is valid!
                        </p>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      className="block w-full p-3 shadow-sm bg-white-500 border border-gray-300 text-gray-900 text- rounded-lg"
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm font-medium text-gray-500"
                  >
                    I agree with the
                    <Link to="/" className="ml-2 text-orange-500">
                      terms and conditions
                    </Link>
                  </label>
                </div>
                <button
                  type="submit"
                  className="mt-8 text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-md px-5 py-4 text-center w-full"
                >
                  Register new account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
