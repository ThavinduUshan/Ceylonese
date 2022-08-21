import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const RegisterPersonalInfo = (props) => {
  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });

  //validation state
  const [validInput, setValidInput] = useState({
    validEmail: false,
    validPassword: false,
  });

  const [errMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const result = EMAIL_REGEX.test(props.values.email);
    setValidInput({ ...validInput, validEmail: result });
  }, [props.values.email]);

  useEffect(() => {
    const result = PWD_REGEX.test(props.values.password);
    setValidInput({ ...validInput, validPassword: result });
  }, [props.values.password]);

  useEffect(() => {
    setErrorMsg("");
  }, [props.values.email, props.values.password]);

  const loadPersonal = (e) => {
    e.preventDefault();
    props.set(1);
  };
  const loadStore = (e) => {
    e.preventDefault();
    props.set(2);
  };
  const loadVerify = (e) => {
    e.preventDefault();
    props.set(3);
  };

  const Continue = (e) => {
    e.preventDefault();
    props.next();
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
            <form className="w-9/12">
              {/* tabs for pages */}

              <div className="mb-16 flex ">
                <button
                  className="flex items-center h-10 px-2 py-2 -mb-px text-center text-orange-600 bg-transparent border-b-2 border-orange-500 sm:px-4 -px-1  whitespace-nowrap focus:outline-none"
                  onClick={loadPersonal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>

                  <span className="mx-1 text-sm sm:text-base">
                    Account Info
                  </span>
                </button>

                <button
                  className="flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"
                  onClick={loadStore}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>

                  <span className="mx-1 text-sm sm:text-base">Store Info</span>
                </button>

                <button
                  className="flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"
                  onClick={loadVerify}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>

                  <span className="mx-1 text-sm sm:text-base">
                    Verification
                  </span>
                </button>
              </div>

              <h1 className="text-5xl font-bold mb-5 text-gray-700">
                Signup to Ceylonese
              </h1>
              <label
                htmlFor="terms"
                className="mb-10 text-xl font-medium text-gray-300"
              >
                Already a Member?
                <Link
                  to="/sellers/login"
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
                    Email :
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={props.values.email}
                    onChange={props.change("email")}
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
                    value={props.values.password}
                    onChange={props.change("password")}
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

                <button
                  type="submit"
                  className="mt-8 text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-md px-5 py-4 text-center w-full"
                  onClick={Continue}
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPersonalInfo;
