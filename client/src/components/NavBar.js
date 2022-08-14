import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const { auth, setAuth } = useAuth();
  const navigateTo = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleSearch = () => setShowSearch((prevState) => !prevState);
  const toggleMenu = () => setShowMenu((prevState) => !prevState);
  const toggleDropDown = () => setShowDropDown((prevState) => !prevState);

  const logout = () => {
    setAuth({});
    navigateTo("/");
  };

  return (
    <React.Fragment>
      <nav className="bg-gray-900 border-gray-200 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container px-2.5 flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-10 sm:h-16" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Ceylonese
            </span>
          </Link>
          <div className="flex md:order-1 md:w-4/12">
            <button
              type="button"
              onClick={toggleSearch}
              data-collapse-toggle="NavBar-search"
              aria-controls="NavBar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="hidden relative md:block md:w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-NavBar"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search items..."
              />
            </div>
            <button
              onClick={toggleMenu}
              data-collapse-toggle="NavBar-search"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="NavBar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="NavBar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-NavBar"
                className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {!auth.user ? (
                <>
                  <li>
                    <Link
                      to="/buyers/login"
                      className="block py-2 pr-4 pl-3 text-gray-400 text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 "
                      aria-current="page"
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/buyers/register"
                      className="block py-2 pr-4 pl-3 text-gray-400 text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#f97316"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#f97316"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#fff"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </Link>
                  </li>
                  <button onClick={toggleDropDown}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#fff"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </>
              )}
            </ul>
          </div>
        </div>
        {showSearch && (
          <>
            <div
              className="justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="NavBar-search"
            >
              <div className="relative mx-5 mt-3 md:hidden">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-NavBar"
                  className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
            </div>
          </>
        )}

        {showMenu && (
          <>
            <ul className="md:hidden mx-5 flex flex-col p-4 mt-4 bg-gray-800 rounded-lg border border-gray-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {!auth.user ? (
                <>
                  <li>
                    <Link
                      to="/buyers/login"
                      className="block py-2 pr-4 pl-3 text-gray-400 text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 "
                      aria-current="page"
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/buyers/register"
                      className="block py-2 pr-4 pl-3 text-gray-400 text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block mt-2 w-4/12 text-center py-2 pr-4 pl-3 bg-orange-500 text-white text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
                    >
                      Add to Cart
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block py-2 pr-4 pl-3 text-orange-500 text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 "
                      aria-current="page"
                    >
                      Add to Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="block py-2 pr-4 pl-3 text-gray-400 text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 "
                      aria-current="page"
                    >
                      Notifications
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className="block py-2 pr-4 pl-3 text-gray-400 text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 "
                      aria-current="page"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      to="/"
                      className="block mt-2 w-full py-2 pr-4 pl-3 bg-orange-500 text-white text-base rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0"
                    >
                      Log out
                    </button>
                  </li>
                </>
              )}
            </ul>
          </>
        )}
      </nav>
      {/* Drop Down Menu */}
      {showDropDown && auth.user && (
        <>
          <div
            className="hidden md:block md:w-2/12 md:right-0 md:absolute md:z-50  md:text-base md:list-none md:bg-white md:rounded md:divide-y md:divide-gray-100 md:shadow-md "
            id="user-dropdown"
          >
            <Link to="/buyers/profile">
              <div className="py-3 px-5">
                <span className="block text-sm text-gray-900 ">
                  Thavindu Ushan
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  thavinduushan@gmail.com
                </span>
              </div>
            </Link>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-5 text-sm text-gray-700 hover:bg-gray-100 "
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 px-5 text-sm text-gray-700 hover:bg-gray-100 "
                >
                  Settings
                </Link>
              </li>

              <li>
                <button
                  onClick={logout}
                  to="/"
                  className="block py-2 px-5 text-sm text-left font-bold text-orange-500 hover:text-white hover:bg-orange-500 w-full "
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </React.Fragment>
  );
};

export default NavBar;
