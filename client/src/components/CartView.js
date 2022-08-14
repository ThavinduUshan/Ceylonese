import React from "react";
import { Link } from "react-router-dom";
import CategoriesBar from "./CategoriesBar";
import NavBar from "./NavBar";

import mask from "../images/mask2.jpg";

const CartView = () => {
  return (
    <>
      <NavBar />
      <CategoriesBar />

      <div class="grid grid-cols-4 bg-white">
        <div class="col-start-1 col-end-4 bg-white-500">
          <ul class="flex flex-col p-3 md:flex-row md:space-x-32 md:mt-6 md:text-sm md:font-medium bg-white">
            <li class="block ml-32 mr-72 py-4 pr-4 pl-3 md:p-0 text-gray-400">
              Item
            </li>
            <li class="block ml-32 mr-4 py-4 pr-4 pl-3 md:p-0 text-gray-400">
              Price
            </li>
            <li class="block ml-32 py-4 pr-4 pl-3 md:p-0 text-gray-400">
              Qunatity
            </li>
            <li class="block ml-32 py-4 pr-5 md:p-0 text-gray-400">Total</li>
          </ul>

          <div class="flex flex-col p-1 ml-9 mr-4 md:flex-row md:space-x-2 md:mt-6 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
            <img src={mask} class="mr-3 h-28 ml-2" alt="" />

            <ul class="flex flex-col md:flex-row">
              <p class="block py-4 pr-4 w-80 text-left pl-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ea dignissimos error aliquam ab unde quisquam aspernatur quos
                illo natus.
              </p>
              <li class="block ml-20 mt-12">$50</li>
              <li class="block ml-36 mt-12">1</li>
              <li class="block ml-44 mr-20 mt-12">$50</li>
            </ul>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 mt-12 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
          <div class="flex flex-col p-1 ml-9 mr-4 md:flex-row md:space-x-2 md:mt-6 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
            <img src={mask} class="mr-3 h-28 ml-2" alt="" />

            <ul class="flex flex-col md:flex-row">
              <p class="block py-4 pr-4 w-80 text-left pl-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ea dignissimos error aliquam ab unde quisquam aspernatur quos
                illo natus.
              </p>
              <li class="block ml-20 mt-12">$50</li>
              <li class="block ml-36 mt-12">1</li>
              <li class="block ml-44 mr-20 mt-12">$50</li>
            </ul>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 mt-12 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
          <div class="flex flex-col p-1 ml-9 mr-4 md:flex-row md:space-x-2 md:mt-6 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
            <img src={mask} class="mr-3 h-28 ml-2" alt="" />

            <ul class="flex flex-col md:flex-row">
              <p class="block py-4 pr-4 w-80 text-left pl-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                ea dignissimos error aliquam ab unde quisquam aspernatur quos
                illo natus.
              </p>
              <li class="block ml-20 mt-12">$50</li>
              <li class="block ml-36 mt-12">1</li>
              <li class="block ml-44 mr-20 mt-12">$50</li>
            </ul>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 mt-12 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>

        <div class="col-start-4 col-end-5" aria-label="Sidebar">
          <div class="absolute left-3/4 ml-1 w-0.5 h-[33rem] mt-12 bg-gray-300"></div>

          <div class="overflow-y-auto py-4 px-3 bg-white dark:bg-white-800 h-screen border-l-2  sticky top-0 right-0">
            <div class="flex flex-col text-gray-700 font-bold text-3xl p-3 mt-1 md:flex-row  md:mt-1 md:bg-white dark:bg-gray-800 dark:border-gray-700 ">
              Summary
            </div>

            <div class="flex-grow border-t border-gray-400"></div>

            <div class="flex flex-col p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
              <ul class="flex flex-col md:flex-row md:space-x-40">
                <li class="block  text-gray-600 ml-5">Sub-total</li>
                <li class="block  text-gray-600">$50.00</li>
              </ul>
            </div>

            <div class="flex flex-col p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-700">
              <ul class="flex flex-col md:flex-row md:space-x-40">
                <li class="block  text-gray-600 ml-5">Discount</li>
                <li class="block  text-gray-600">$50.00</li>
              </ul>
            </div>

            <div class="flex flex-col p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-700">
              <ul class="flex flex-col md:flex-row md:space-x-48">
                <li class="block  text-gray-600 ml-5">Total</li>
                <li class="block  text-gray-600">$50.00</li>
              </ul>
            </div>

            <Link
              to="/buyers/checkout"
              class="flex flex-col p-1 ml-2 w-80 h-12 pl-24 text-white text-center md:flex-row  md:mt-6 md:text-2xl md:font-medium rounded-xl md:bg-orange-500 dark:bg-white shadow-xl"
            >
              Checkout
            </Link>

            <div class="flex flex-col  text-gray-700 font-bold text-3xl p-3 md:flex-row md:space-x-8 md:mt-6 md:bg-white dark:bg-gray-800 dark:border-gray-700">
              Discount codes
            </div>

            <div class="flex-grow border-t border-gray-400"></div>

            <div class="flex flex-col p-3 mr-5 ml-2 pl-20 text-gray-400 md:flex-row md:mt-6 md:text-sm md:font-medium rounded-xl md:bg-white dark:bg-white border border-black">
              Enter Cupon Codes here...
            </div>

            <button class="flex flex-col p-1 ml-2 w-80 h-12 pl-28 text-white text-center md:flex-row md:mt-6 md:text-2xl md:font-medium rounded-xl md:bg-black dark:bg-white border border-black shadow-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartView;
