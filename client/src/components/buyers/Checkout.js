import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import CategoriesBar from "../CategoriesBar";
import NavBar from "../NavBar";
import useCart from "../../hooks/useCart";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const GET_CHECKOUT_DETAILS_URL = "buyers/checkout/details";

const Checkout = () => {

  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div className="grid grid-cols-4 bg-white">
        <div className="col-start-1 col-end-4 bg-white-500">
          <div className="grid grid-cols-6 text-center my-8 mx-16 bg-gray-100">
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto col-span-1"></div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto col-span-2">
              Item
            </div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 col-span-1">
              price
            </div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 col-span-1">
              Quantity
            </div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 col-span-1">
              Total
            </div>
          </div>

          {Object.keys(cart.cartItems).length !== 0 ? (
            <>
              {cart.cartItems.map((item) => {
                return (
                  <>
                    <div key={item.productID}>
                      <div className="grid grid-cols-6 h-36 text-center m-16 mt-0 shadow-md rounded-md">
                        <div className="flex justify-center font-medium items-center w-full col-span-1">
                          <img
                            src={`http://localhost:3500/products/${item.image1}`}
                            class="mr-3 h-28 ml-2"
                            alt=""
                          />
                        </div>
                        <div className="flex justify-center font-medium items-center w-full col-span-2">
                          <p class="block ">{item.title}</p>
                        </div>
                        <div className="flex justify-center font-medium items-center w-full  col-span-1">
                          <p class="block  ">{item.price}</p>
                        </div>
                        <div className="flex justify-center font-medium items-center w-full col-span-1">
                          <p class="block ">{item.qt ? item.qt : 1}</p>
                        </div>
                        <div className="flex justify-center font-medium items-center w-full col-span-1">
                          <p class="block ">
                            ${item.price * (item.qt ? item.qt : 1)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          ) : (
            <>
              <div className="flex justify-center mx-16 mt-5 px-3 py-10 bg-gray-100">
                <p className="text-lg text-gray-300 ">No items to Display</p>
              </div>
            </>
          )}

          {address?.address ? (
            <>
              <div className="flex justify-between text-gray-700 font-bold text-3xl ml-20 mt-10">
                Delivery Options
                <button
                  type="button"
                  className=" text-white mr-16 focus:ring-orange-500 focus:outline-4 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-orange-500"
                  data-modal-toggle="top-left-modal"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                >
                  Change
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-between text-gray-700 font-bold text-3xl ml-20 mt-10">
                Delivery Options
                <button
                  type="button"
                  className=" text-white mr-16 focus:ring-orange-500 focus:outline-4 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-orange-500"
                  data-modal-toggle="top-left-modal"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsModalOpen(true);
                  }}
                >
                  Add New +
                </button>
              </div>
            </>
          )}
          <div className="p-5 mx-16 md:flex-row md:space-x-2 md:mt-6 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 shadow-md">
            <div className="flex">
              <div className=" text-gray-700 font-bold text-xl ml-2 mt-1">
                Shipping Address
              </div>
              <Modal isOpen={isModalOpen}>
                <div className="w-full md:w-96 md:max-w-full mx-auto">
                  <h1 className="text-3xl font-bold mt-5 mb-10">
                    Enter a New Address
                  </h1>
                  <div className="p-6 border border-gray-300 sm:rounded-md">
                    <form
                      method="POST"
                      action="https://herotofu.com/start"
                      enctype="multipart/form-data"
                    >
                      <label className="block mb-6">
                        <span className="text-gray-700">Address</span>
                        <input
                          name="address1"
                          type="text"
                          className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                          placeholder=""
                        />
                      </label>

                      <label className="block mb-6">
                        <span className="text-gray-700">City</span>
                        <input
                          name="city"
                          type="text"
                          className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                          placeholder=""
                        />
                      </label>
                      <label className="block mb-6">
                        <span className="text-gray-700">State/Province</span>
                        <input
                          name="state"
                          type="text"
                          className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                          placeholder=""
                        />
                      </label>
                      <label className="block mb-6">
                        <span className="text-gray-700">Zip/Postal code</span>
                        <input
                          name="zip"
                          type="text"
                          className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                          placeholder=""
                        />
                      </label>
                      <label className="block mb-6">
                        <span className="text-gray-700">Country</span>
                        <input
                          name="country"
                          type="text"
                          className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                          placeholder=""
                        />
                      </label>

                      <div className="mb-6">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsModalOpen(false);
                          }}
                          className="
            h-10
            px-5
            text-indigo-100
            bg-orange-500
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-orange-600
          "
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </Modal>
            </div>

            <span className="flex  text-gray-500 font-bold text-base ml-3 mt-1">
              <span>{auth?.user.username}</span>
            </span>

            <span className="flex  text-gray-500 font-bold text-base ml-3 mt-0">
              <span>{address?.address} </span>
            </span>
            <span className="flex  text-gray-500 font-bold text-base ml-3 mt-0">
              <span>{address?.city} </span>
            </span>

            <span className="flex  text-gray-500 font-bold text-base ml-3 mt-0">
              <span>{address?.state}</span>,<span>{address?.country}</span>
            </span>
          </div>
        </div>

        <div className="col-start-4 col-end-5 " aria-label="Sidebar">
          <div className=" sticky top-0 right-0 py-4 px-3 bg-white  h-screen border-l-2 ">
            <div className="flex flex-col text-gray-700 font-bold text-3xl p-3 mt-1 md:flex-row md:mt-10 md:bg-white ">
              Checkout
            </div>

            <div className="flex-grow"></div>

            <div class="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
              <ul class="flex justify-between ">
                <li class="block  text-gray-600 ml-5">Sub-total</li>
                <li class="block  text-gray-600 mr-5">${cart.subTotal}.00</li>
              </ul>
            </div>

            <div class="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-700">
              <ul class="flex justify-between ">
                <li class="block  text-gray-600 ml-5">Discount</li>
                <li class=" block text-gray-600 mr-5">${cart.discount}.00</li>
              </ul>
            </div>

            <div class="p-3 mr-4 ml-2 md:flex-row md:space-x-8 md:mt-6 md:text-sm md:font-medium md:bg-white dark:bg-gray-800 md:dark:bg-gray-200 dark:border-gray-500">
              <ul class="flex justify-between ">
                <li class="block  text-gray-600 ml-5">Total</li>
                <li class="block  text-gray-600 mr-5">${cart.total}.00</li>
              </ul>
            </div>

            <button className="flex justify-center  p-1 ml-2 w-80 h-12 text-white text-center md:flex-row md:space-x-8 md:mt-6 md:text-2xl md:font-medium rounded md:bg-orange-500 dark:bg-white">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
