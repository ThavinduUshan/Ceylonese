import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import SellerSideBar from "./SellerSideBar";
import useAuth from "../../hooks/useAuth";

const GET_ORDER_ITEMS_URL = "sellers/orders";
const MARK_AS_SHIPPED_URL = "sellers/orders/update/shipping";

const SellerOrders = () => {
  const { auth } = useAuth();

  const [listOfOrders, setListOfOrders] = useState();

  const navigateTo = useNavigate();

  useEffect(() => {
    const data = {
      sellerID: auth.user.sellerID,
    };

    axios.post(GET_ORDER_ITEMS_URL, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        console.log(response.data.orders);
        setListOfOrders(response.data.orders);
      }
    });
  }, []);

  const handleShipping = (event, orderItemID) => {
    event.preventDefault();
    const data = {
      orderItemID: orderItemID,
    };

    axios.post(MARK_AS_SHIPPED_URL, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        setListOfOrders("");
        navigateTo("/sellers/orders/shipped");
      }
    });
  };

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-5">
        <div className="col-span-1" aria-label="Sidebar">
          <SellerSideBar />
        </div>
        <div className="m-10 col-span-4 border-gray-200 dark:border-gray-700">
          <ul className="mt-20 mx-14 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <li className="w-48 rounded-t-lg bg-gray-200">
              <Link
                to="/sellers/orders"
                aria-current="page"
                className="inline-block p-4 text-orange-500 text-base active"
              >
                Pending
              </Link>
            </li>
            <li className="w-48 rounded-t-lg bg-gray-100 border border-gray-200">
              <Link
                to="/sellers/orders/shipped"
                className="inline-block p-4 text-base rounded-t-lg "
              >
                Shipped
              </Link>
            </li>
            <li className="w-48 rounded-t-lg bg-gray-100 border border-gray-200">
              <Link
                to="/sellers/orders/completed"
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
                Ordered Date
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                Shipping Time
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                Shipping Address
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                Shipped
              </div>
            </div>

            {listOfOrders?.map((item) => {
              return (
                <div key={item.orderItemID}>
                  <div className="grid grid-cols-6 text-center m-8 mt-0 shadow-md rounded-md">
                    <div className="flex justify-center text-base items-center col-span-2 w-full h-36">
                      <div className="flex items-center">
                        <img
                          src={`http://localhost:3500/products/${item.image1}`}
                          className=" h-24  p-5"
                        />
                        <div className="my-2">
                          <p className="text-left">{item.title}</p>
                          <div className="flex justify-start items-center text-left text-sm text-gray-500 py-1 ">
                            <p className=" pr-3">
                              Price{" :"}
                              <span>
                                {" "}
                                ${parseFloat(item.orderPrice).toFixed(2)}
                              </span>
                            </p>
                            <p>
                              Qty :<span>{item.orderQuantity}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center text-base items-center w-full ">
                      {new Date(item.datetime).getDate() +
                        "-" +
                        (new Date(item.datetime).getMonth() + 1) +
                        "-" +
                        new Date(item.datetime).getFullYear()}
                    </div>
                    <div className="flex justify-center text-base items-center w-full ">
                      {item.shippingTime} Days
                    </div>
                    <div className="flex justify-center text-xs items-center w-full text-gray-500">
                      <div>
                        <p className="text-left">{item.line1}</p>
                        <p className="text-left">{item.line2}</p>
                        <p className="text-left">{item.city}</p>
                        <p className="text-left">{item.country}</p>
                        <p className="text-left">{item.postalCode}</p>
                      </div>
                    </div>
                    <div className="flex justify-center text-xs items-center w-full  text-gray-500">
                      <button
                        onClick={(e) => handleShipping(e, item.orderItemID)}
                        className="text-white bg-gray-900 hover:bg-orange-500 hover:text-white w-32 py-3 px-2 rounded-md "
                      >
                        Mark as Shipped
                      </button>
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

export default SellerOrders;
