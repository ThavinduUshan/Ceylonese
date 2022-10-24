import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import SideBar from "./SideBar";
import vector from "../../images/vector.jpg";
import CategoriesBar from "../CategoriesBar";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";

const TOP_PENDING_URL = "/buyers/orders/pending/top";
const TOP_COMPLETED_URL = "/buyers/orders/completed/top";

const Profile = () => {
  const { auth } = useAuth();

  const [orders, setOrders] = useState();
  const [orderHistory, setOrderHistory] = useState();

  useEffect(() => {
    const data = {
      buyerID: auth.user.id,
    };

    axios.post(TOP_PENDING_URL, data).then((response) => {
      console.log(response.data.requests);
      setOrders(response.data.requests);
    });
  }, []);

  useEffect(() => {
    const data = {
      buyerID: auth.user.id,
    };

    axios.post(TOP_COMPLETED_URL, data).then((response) => {
      console.log(response.data.orders);
      setOrderHistory(response.data.orders);
    });
  }, []);

  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div className="grid grid-cols-5">
        <SideBar />
        <div className="col-span-3">
          <div className="text-sans">
            <div className="text-gray-900 font-semibold text-3xl m-16">
              <h3>Pending Orders</h3>
            </div>
            <div>
              <div className="grid grid-cols-5 text-center m-8">
                <div className="flex justify-center items-center font-medium col-span-2 text-gray-400 w-full h-12 mx-auto">
                  Item
                </div>
                <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                  Quantity
                </div>
                <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                  Status
                </div>
                <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                  Orderd Date
                </div>
              </div>
              {orders ? (
                <>
                  {orders?.map((order, index) => {
                    return (
                      <div key={index}>
                        <div className="grid grid-cols-5 text-center m-8 mt-0 shadow-md rounded-md">
                          <div className="flex justify-center font-medium items-center col-span-2 w-full h-24">
                            <div className="flex items-center">
                              <img
                                src={`http://localhost:3500/products/${order.image1}`}
                                className="pl-4 h-20"
                              />
                              <p className="ml-5 text-left">{order.title}</p>
                            </div>
                          </div>
                          <div className="flex justify-center font-medium items-center w-full h-24">
                            {order.orderQuantity}
                          </div>
                          <div className="flex justify-center font-medium items-center w-full h-24">
                            {order.status}
                          </div>
                          <div className="flex justify-center font-medium items-center w-full h-24">
                            {new Date(order.datetime).getDate() +
                              "-" +
                              (new Date(order.datetime).getMonth() + 1) +
                              "-" +
                              new Date(order.datetime).getFullYear()}
                          </div>
                        </div>
                      </div>
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
            </div>
            <hr />
          </div>

          <div className="text-sans">
            <div className="text-gray-900 font-semibold text-3xl m-16">
              <h3>Purchase History</h3>
            </div>
            {orderHistory ? (
              <>
                {orderHistory?.map((order) => {
                  return (
                    <>
                      <div className="flex flex-row justify-between m-16">
                        <div className="w-1/3 p-4">
                          <a
                            href=""
                            className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                          >
                            <div className="relative pb-48 overflow-hidden">
                              <img
                                className="absolute inset-0 h-full w-full object-cover"
                                src={`http://localhost:3500/products/${order.image1}`}
                                alt=""
                              />
                            </div>
                            <div className="p-4">
                              <h2 className="mt-2 mb-2  font-bold">
                                {order.title}
                              </h2>
                              <p className="text-sm">{order.description}</p>
                              <div className=" flex items-center text-sm text-gray-600">
                                <svg
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 fill-current text-yellow-500"
                                >
                                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                </svg>
                                <svg
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 fill-current text-yellow-500"
                                >
                                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                </svg>
                                <svg
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 fill-current text-yellow-500"
                                >
                                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                </svg>
                                <svg
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 fill-current text-yellow-500"
                                >
                                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                </svg>
                                <svg
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 fill-current text-gray-400"
                                >
                                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                                </svg>
                                <span className="ml-2">4.0</span>
                              </div>
                              <div className="mt-3 flex items-center">
                                <span className="text-sm font-semibold">
                                  USD
                                </span>
                                &nbsp;
                                <span className="font-bold text-xl">
                                  {order.orderPrice}
                                </span>
                                &nbsp;
                                <span className="text-sm font-semibold">$</span>
                              </div>
                              <div className="mt-3 flex items-center">
                                <span className="text-sm font-semibold">
                                  Added by {order.storeName}
                                </span>
                              </div>
                            </div>
                          </a>
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
          </div>
        </div>
        <div className="col-span-1 border-l-2 sticky top-0 right-0 h-screen">
          <div class="flex flex-col m-16">
            <img src={vector} class="mx-auto h-28 w-28" />
            <h2 class="font-bold align-middle text-center pt-4">
              {auth?.user.username}
            </h2>
            <Link
              to="/"
              class="font-light text-gray-900 align-middle text-center pt-4"
            >
              Edit Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
