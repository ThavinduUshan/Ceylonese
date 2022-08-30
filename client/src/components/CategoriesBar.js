import React from "react";
import { Link } from "react-router-dom";

const CategoriesBar = () => {
  return (
    <>
      <div className="flex justify-around bg-white shadow-md">
        <div>
          <button className="peer px-5 py-3 text-sm font-medium text-gray-900 bg-white">
            Home & Living
          </button>

          <div className="z-50 absolute top-32 hidden peer-hover:flex hover:flex bg-white flex-col w-64 drop-shadow-lg">
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Home Decorations
            </a>
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Kitchen & Dining
            </a>
          </div>
        </div>
        <div>
          <button className="peer px-5 py-3 text-sm font-medium text-gray-900 bg-white">
            Outdoor & Garden
          </button>

          <div className="z-50 absolute top-32 hidden peer-hover:flex hover:flex bg-white flex-col w-64 drop-shadow-lg">
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Garden Tools
            </a>
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Garden Decos
            </a>
          </div>
        </div>
        <div>
          <button className="peer px-5 py-3 text-sm font-medium text-gray-900 bg-white">
            Arts & Crafts
          </button>

          <div className="z-50 absolute top-32 hidden peer-hover:flex hover:flex bg-white flex-col w-64 drop-shadow-lg">
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Coir Products
            </a>
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Wood Carvings
            </a>
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Clay Pottery
            </a>
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Brass Wear
            </a>
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Laksha
            </a>
          </div>
        </div>
        <div>
          <button className="peer px-5 py-3 text-sm font-medium text-gray-900 bg-white">
            Gift Ideas
          </button>

          <div className="z-50 absolute top-32 hidden peer-hover:flex hover:flex bg-white flex-col w-64 drop-shadow-lg">
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Personalized Gifts
            </a>
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Gift Cards
            </a>
          </div>
        </div>
        <div>
          <button className="peer px-5 py-3 text-sm font-medium text-gray-900 bg-white">
            Oranaments & Clothing
          </button>

          <div className="z-50 absolute top-32 hidden peer-hover:flex hover:flex bg-white flex-col w-64 drop-shadow-lg">
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Jewellery and Accessories
            </a>
            <a
              className="px-5 py-3 text-sm font-medium hover:bg-gray-200"
              href="#"
            >
              Clothing
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesBar;
