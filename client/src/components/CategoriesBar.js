import React from "react";
import { Link } from "react-router-dom";

const CategoriesBar = () => {
  return (
    <>
      <div class="px-2 sm:px-4 py-1 ">
        <div class="col-span-4">
          <ul class="flex flex-col p-3 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-white   ">
            <li>
              <Link
                to="/"
                class="block ml-28 py-2 pr-4 pl-3 md:p-0  dark:text-gray-900"
                aria-current="page"
              >
                Home & Living
              </Link>
            </li>
            <li>
              <Link
                to="/"
                class="block ml-28 py-2 pr-4 pl-3 md:p-0  dark:text-gray-900"
              >
                Outdoor & Garden
              </Link>
            </li>
            <li>
              <Link
                to="/"
                class="block ml-28 py-2 pr-4 pl-3 md:p-0  dark:text-gray-900"
              >
                Arts & Crafts
              </Link>
            </li>
            <li>
              <Link
                to="/"
                class="block ml-28 py-2 pr-4 pl-3 md:p-0  dark:text-gray-900"
              >
                Gift Ideas
              </Link>
            </li>
            <li>
              <Link
                to="/"
                class="block ml-28 py-2 pr-4 pl-3 md:p-0  dark:text-gray-900"
              >
                Vintage
              </Link>
            </li>
            <li>
              <Link
                to="/"
                class="block ml-28 py-2 pr-4 pl-3 md:p-0  dark:text-gray-900"
              >
                Collectables
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategoriesBar;
