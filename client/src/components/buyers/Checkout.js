import React from "react";
import CategoriesBar from "../CategoriesBar";
import NavBar from "../NavBar";
import mask from "../../images/mask2.jpg";

const Checkout = () => {
  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div className="grid grid-cols-4 bg-white">
        <div className="col-start-1 col-end-4 bg-white-500">
          <div className=" text-gray-700 font-bold text-3xl ml-20 mt-10">
            Review Order
          </div>

          <ul className="flex flex-col p-6 md:flex-row md:space-x-32 md:mt-1 md:text-sm md:font-medium bg-white">
            <li className="block ml-32 mr-72 py-4 pr-4 pl-3 md:p-0 text-gray-400">
              Item
            </li>
            <li className="block ml-32 mr-4 py-4 pr-4 pl-3 md:p-0 text-gray-400">
              Price
            </li>
            <li className="block ml-32 py-4 pr-4 pl-3 md:p-0 text-gray-400">
              Qunatity
            </li>
            <li className="block ml-32 py-4 pr-4 pl-3 md:p-0 text-gray-400">
              Total
            </li>
          </ul>

          <div className="flex flex-col p-1 ml-9 mr-4 md:flex-row md:space-x-2 md:mt-1 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-md">
            <img src={mask} className="mr-3 h-28 ml-2" alt="" />

            <ul className="flex flex-col md:flex-row">
              <p className="block py-4 pr-4 w-80 text-left pl-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                animi, nihil beatae molestiae recusandae quam cum corrupti
                praesentium error maiores.
              </p>
              <li className="block ml-20 mt-12">$50</li>
              <li className="block ml-36 mt-12">1</li>
              <li className="block ml-44 mr-20 mt-12">$50</li>
            </ul>
          </div>

          <div className="flex flex-col p-1 ml-9 mr-4 md:flex-row md:space-x-2 md:mt-8 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-md">
            <img src={mask} className="mr-3 h-28 ml-2" alt="" />

            <ul className="flex flex-col md:flex-row">
              <p className="block py-4 pr-4 w-80 text-left pl-3 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                animi, nihil beatae molestiae recusandae quam cum corrupti
                praesentium error maiores.
              </p>
              <li className="block ml-20 mt-12">$50</li>
              <li className="block ml-36 mt-12">1</li>
              <li className="block ml-44 mr-20 mt-12">$50</li>
            </ul>
          </div>

          <div className=" text-gray-700 font-bold text-3xl ml-20 mt-10">
            Delivery Options
          </div>
          <div className="p-5 ml-11 mr-4 md:flex-row md:space-x-2 md:mt-6 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 shadow-md">
            <div className="flex">
              <div className=" text-gray-700 font-bold text-xl ml-3 mt-1">
                Shipping Address
              </div>
              <button
                type="submit"
                className=" text-white ml-[48rem] focus:ring-orange-500 focus:outline-4 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500"
                data-modal-toggle="top-left-modal"
              >
                Change
              </button>
            </div>

            <span className="flex  text-gray-500 font-bold text-base ml-3 mt-1">
              <span>Jeewanthi Gamage</span>
              <span className="ml-6">+94719010134</span>
            </span>

            <span className="flex  text-gray-500 font-bold text-base ml-3 mt-0">
              <span>No 397/20 </span>,<span>Galle Road</span>
            </span>

            <span className="flex  text-gray-500 font-bold text-base ml-3 mt-0">
              <span>Southern Province</span>,<span>Sri Lanka</span>
            </span>
          </div>
        </div>

        <div className="col-start-4 col-end-5 " aria-label="Sidebar">
          <div className=" sticky top-0 right-0 py-4 px-3 bg-white  h-screen border-l-2 ">
            <div className="flex flex-col text-gray-700 font-bold text-3xl p-3 mt-1 md:flex-row md:mt-10 md:bg-white ">
              Checkout
            </div>

            <div className="flex-grow"></div>

            <div className="flex flex-col p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white">
              <ul className="flex flex-col md:flex-row md:space-x-40">
                <li className="block  text-gray-600 ml-5">Sub-total</li>
                <li className="block  text-gray-600">$50.00</li>
              </ul>
            </div>

            <div className="flex flex-col p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-100 ">
              <ul className="flex flex-col md:flex-row md:space-x-40">
                <li className="block  text-gray-600 ml-5">Discount</li>
                <li className="block  text-gray-600">$50.00</li>
              </ul>
            </div>

            <div className="flex flex-col p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-100 dark:border-gray-700">
              <ul className="flex flex-col md:flex-row md:space-x-48">
                <li className="block  text-gray-600 ml-5">Total</li>
                <li className="block  text-gray-600">$50.00</li>
              </ul>
            </div>

            <button className="flex flex-col pl-24 p-1 ml-2 w-80 h-12 text-white text-center md:flex-row md:space-x-8 md:mt-6 md:text-2xl md:font-medium rounded md:bg-orange-500 dark:bg-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
