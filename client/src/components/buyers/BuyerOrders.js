import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import SideBar from "./SideBar";
import useAuth from "../../hooks/useAuth";
import CategoriesBar from "../CategoriesBar";

const GET_ORDER_ITEMS_URL = "buyers/orders";

const BuyerOrders = () => {

  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div className="grid grid-cols-5">
        <SideBar />
        <div className="m-4 col-span-4 border-gray-200 dark:border-gray-700">
          <ul className="mt-20 mx-14 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <li className="w-48 rounded-t-lg bg-gray-200">
              <Link
                to="/buyers/orders"
                aria-current="page"
                className="inline-block p-4 text-orange-500 text-base active"
              >
                Pending
              </Link>
            </li>
            <li className="w-48 rounded-t-lg bg-gray-100 border border-gray-200">
              <Link
                to="/buyers/orders/completed"
                className="inline-block p-4 text-base rounded-t-lg "
              >
                Completed
              </Link>
            </li>
          </ul>
          <p className="m-16 text-2xl text-gray-600">
            Orders
            <hr className="bg-gray-200 mt-2" />
          </p>
          <div>
            <div className="grid grid-cols-6 text-center m-8">
              <div className="flex justify-center items-center font-medium col-span-2 text-gray-400 w-full h-12 mx-auto">
                Item
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                Order Date
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                Estimated delivery
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                Status
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                Refund
              </div>
            </div>

            {listOfOrders?.map((value) => {
              return (
                <div key={value.orderItemID}>
                  <div className="grid grid-cols-6 text-center m-8 mt-0 shadow-md rounded-md">
                    <div className="flex justify-center text-base items-center col-span-2 w-full h-24">
                      <div className="flex items-center">
                        <img
                          src={`http://localhost:3500/products/${value.image1}`}
                          className=" h-24  p-5"
                        />
                        <div className="my-2">
                          <p className="text-left">{value.title}</p>
                          <div className="flex justify-start items-center text-left text-sm text-gray-500 py-1 ">
                            <p className=" pr-3">
                              Price{" :"}
                              <span>
                                ${parseFloat(value.orderPrice).toFixed(2)}
                              </span>
                            </p>
                            <p>
                              Qty :<span>{value.orderQuantity}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center text-base items-center w-full ">
                      {new Date(value.datetime).getDate() +
                        "-" +
                        (new Date(value.datetime).getMonth() + 1) +
                        "-" +
                        new Date(value.datetime).getFullYear()}
                    </div>
                    <div className="flex justify-center text-base items-center w-full ">
                      {value.shippingTime} Days
                    </div>
                    <div className="flex justify-center text-xs items-center w-full  text-gray-500">
                      <Link to={`/buyers/order/review/${value.orderItemID}`}>
                        {value.status === "Shipped" ? (
                          <>
                            <button className=" text-white bg-orange-500 hover:bg-gray-900 hover:text-white w-32 py-3 px-2 rounded-md">
                              Mark as delivered
                            </button>
                          </>
                        ) : (
                          <>
                            <p className="text-base font-bold text-yellow-500">
                              Pending
                            </p>
                          </>
                        )}
                      </Link>
                    </div>
                    <div className="flex justify-center text-xs items-center w-full h-24 text-gray-500">
                      {value.status === "Shipped" ? (
                        <>
                          <button className="text-white bg-gray-900 hover:bg-orange-500 hover:text-white w-32 py-3 px-2 rounded-md ">
                            Make Refund
                          </button>
                        </>
                      ) : (
                        <>
                          <p className="text-base font-bold text-green-500">
                            N/A
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerOrders;
