import React from "react";
import { Link } from "react-router-dom";
import CategoriesBar from "./CategoriesBar";
import NavBar from "./NavBar";
import useCart from "../hooks/useCart";

const CartView = () => {
  const { cart, setCart } = useCart();

  const clearCart = () => {
    setCart({
      cartItems: [],
      count: 0,
    });
  };

  return (
    <>
      <NavBar />
      <CategoriesBar />

      <div class="grid grid-cols-4 bg-white">
        <div class="col-start-1 col-end-4 bg-white-500">
          <div className="grid grid-cols-7 text-center my-8 mx-16 bg-gray-100">
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto"></div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto col-span-2">
              Item
            </div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
              price
            </div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 ">
              Quantity
            </div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
              Total
            </div>
          </div>

          {Object.keys(cart.cartItems).length !== 0 ? (
            <>
              {cart.cartItems.map((item) => {
                return (
                  <>
                    <div key={item.productID}>
                      <div className="grid grid-cols-7 h-36 text-center m-16 mt-0 shadow-md rounded-md">
                        <div className="flex justify-center font-medium items-center w-full col-span-1">
                          <img
                            src={`http://localhost:3500/products/${item.image1}`}
                            class="mr-3 h-28 ml-2"
                            alt=""
                          />
                        </div>
                        <div className="flex justify-center font-medium items-center w-full col-span-2">
                          <p class="block text-center ">{item.title}</p>
                        </div>
                        <div className="flex justify-center font-medium items-center w-full  col-span-1">
                          <p class="block text-left ">{item.price}</p>
                        </div>
                        <div className="flex justify-center font-medium items-center w-full col-span-1">
                          <p class="block ml-10">{item.qt ? item.qt : 1}</p>
                        </div>
                        <div className="flex justify-center font-medium items-center w-full col-span-1">
                          <p class="block ml-10">
                            ${item.price * (item.qt ? item.qt : 1)}
                          </p>
                        </div>
                        <div className="flex justify-center font-medium items-center w-full col-span-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
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
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <div className="flex justify-center ml-8 mr-4 mt-5 px-3 py-10 bg-gray-100">
                <p className="text-lg text-gray-300">No items to Display</p>
              </div>
            </>
          )}
          {Object.keys(cart.cartItems).length !== 0 && (
            <>
              <div className="flex justify-end">
                <button
                  onClick={clearCart}
                  className="mr-16 px-5 py-3 bg-orange-500 text-white"
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
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
