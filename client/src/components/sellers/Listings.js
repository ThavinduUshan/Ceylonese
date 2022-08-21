import React from "react";
import { Link } from "react-router-dom";
import mask from "../../images/Mask.png";
import SellerSideBar from "./SellerSideBar";
import NavBar from "../NavBar";

const Listings = () => {
  return (
    <>
      <NavBar />
      <main className="grid grid-cols-5">
        <aside className="col-span-1">
          <SellerSideBar />
        </aside>

        <div className="col-span-4 bg-white-500 ">
          <div className="flex mt-10 mb-10">
            <div className="flex flex-col text-gray-700 font-bold text-3xl mt-7 ml-14 mb-7">
              My Listings
            </div>
            <Link
              to="/sellers/profile/newlisting"
              className="flex flex-col pt-1 ml-[40.5rem] w-56 h-12 pl-6 text-white text-center md:flex-row  md:mt-6 md:text-2xl md:font-medium rounded-xl md:bg-orange-500 dark:bg-white shadow-xl"
            >
              + Add a Listing
            </Link>
          </div>

          <div className="flex flex-col p-1 ml-12 mr-12 md:flex-row md:space-x-2 md:mt-6 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
            <img src={mask} className="mr-3 h-28 ml-2" />

            <ul className="flex flex-col md:flex-row">
              <textarea className="block py-4 pr-4 w-80 text-left pl-3 md:p-0">
                Lorem ipsum simply text of dummy
                bshcgjhcgdhjvgdsjhcshdcbdshvcbdshvcbshvcbhvbchvcbhdsvcbhdsvchhscghschdjsbchjsdbcjhbshcbsdbchbchdsbhc
              </textarea>
              <li className="block ml-20 mt-12">$50</li>
              <li className="block ml-28 mt-12">1</li>
              <li className="block ml-44 mr-20 mt-12">
                <button>Edit</button>
              </li>
            </ul>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 mt-12 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>

          <div className="flex flex-col p-1 ml-12 mr-12 md:flex-row md:space-x-2 md:mt-6 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
            <img src={mask} className="mr-3 h-28 ml-2" />

            <ul className="flex flex-col md:flex-row">
              <textarea className="block py-4 pr-4 w-80 text-left pl-3 md:p-0">
                Lorem ipsum simply text of dummy
                bshcgjhcgdhjvgdsjhcshdcbdshvcbdshvcbshvcbhvbchvcbhdsvcbhdsvchhscghschdjsbchjsdbcjhbshcbsdbchbchdsbhc
              </textarea>
              <li className="block ml-20 mt-12">$50</li>
              <li className="block ml-28 mt-12">1</li>
              <li className="block ml-44 mr-20 mt-12">
                <button>Edit</button>
              </li>
            </ul>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 mt-12 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>

          <div className="flex flex-col p-1 ml-12 mr-12 md:flex-row md:space-x-2 md:mt-6 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
            <img src={mask} className="mr-3 h-28 ml-2" />

            <ul className="flex flex-col md:flex-row">
              <textarea className="block py-4 pr-4 w-80 text-left pl-3 md:p-0">
                Lorem ipsum simply text of dummy
                bshcgjhcgdhjvgdsjhcshdcbdshvcbdshvcbshvcbhvbchvcbhdsvcbhdsvchhscghschdjsbchjsdbcjhbshcbsdbchbchdsbhc
              </textarea>
              <li className="block ml-20 mt-12">$50</li>
              <li className="block ml-28 mt-12">1</li>
              <li className="block ml-44 mr-20 mt-12">
                <button>Edit</button>
              </li>
            </ul>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 mt-12 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>

          <div className="flex flex-col p-1 ml-12 mr-12 md:flex-row md:space-x-2 md:mt-6 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
            <img src={mask} className="mr-3 h-28 ml-2" />

            <ul className="flex flex-col md:flex-row">
              <textarea className="block py-4 pr-4 w-80 text-left pl-3 md:p-0">
                Lorem ipsum simply text of dummy
                bshcgjhcgdhjvgdsjhcshdcbdshvcbdshvcbshvcbhvbchvcbhdsvcbhdsvchhscghschdjsbchjsdbcjhbshcbsdbchbchdsbhc
              </textarea>
              <li className="block ml-20 mt-12">$50</li>
              <li className="block ml-28 mt-12">1</li>
              <li className="block ml-44 mr-20 mt-12">
                <button>Edit</button>
              </li>
            </ul>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 mt-12 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default Listings;
