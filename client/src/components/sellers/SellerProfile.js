import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import SellerSideBar from "./SellerSideBar";
import NavBar from "../NavBar";
import SalesByCategories from "./charts/SalesByCategories";
import TopProducts from "./charts/TopProducts";
import AnnualSalesData from "./charts/AnnualSalesData";

const GET_SELLER_DETAILS = "sellers/profile";

const SellerProfile = () => {
  const { auth } = useAuth();

  const [seller, setSeller] = useState();

  const [salescount, setSalesCount] = useState();
  const [orderscount, setOrdersCount] = useState();
  const [partnershipcount, setPartnershipCount] = useState();
  const [todaysalescount, setTodaySalesCount] = useState();
  const [pendingorderscount, setPendingOrdersCount] = useState();
  const [completedorderscount, setCompletedOrdersCount] = useState();
  const [bestSellingProducts, setBestSellingProducts] = useState();

  const GET_SALES_URL = "sellers/getsales";
  const GET_ORDERS_URL = "sellers/getorders";
  const GET_PARTNERSHIP_URL = "sellers/getpartnerships";
  const GET_TODAY_SALES_URL = "sellers/gettodaysales";
  const GET_PENDING_ORDERS_URL = "sellers/getpendingorders";
  const GET_COMPLETED_ORDERS_URL = "sellers/getcompletedorders";
  const GET_BEST_SELLING_PRODUCTS_URL = "sellers/getbestsellingproducts";

  useEffect(() => {
    const data = {
      sellerID: auth.user.sellerID,
    };
    axios.post(GET_SALES_URL, data).then((response) => {
      setSalesCount(response.data.request);
    });
  }, []);
  useEffect(() => {
    const data = {
      sellerID: auth.user.sellerID,
    };
    axios.post(GET_ORDERS_URL, data).then((response) => {
      setOrdersCount(response.data.request);
    });
  }, []);
  useEffect(() => {
    const data = {
      sellerID: auth.user.sellerID,
    };
    axios.post(GET_PARTNERSHIP_URL, data).then((response) => {
      setPartnershipCount(response.data.request);
    });
  }, []);
  useEffect(() => {
    const data = {
      sellerID: auth.user.sellerID,
    };
    axios.post(GET_TODAY_SALES_URL, data).then((response) => {
      setTodaySalesCount(response.data.request);
    });
  }, []);
  useEffect(() => {
    const data = {
      sellerID: auth.user.sellerID,
    };
    axios.post(GET_PENDING_ORDERS_URL, data).then((response) => {
      setPendingOrdersCount(response.data.request);
    });
  }, []);

  useEffect(() => {
    const data = {
      sellerID: auth.user.sellerID,
    };
    axios.post(GET_COMPLETED_ORDERS_URL, data).then((response) => {
      setCompletedOrdersCount(response.data.request);
    });
  }, []);

  useEffect(() => {
    const data = {
      sellerID: auth?.user.sellerID,
    };
    console.log(data.sellerID);
    axios.post(GET_SELLER_DETAILS, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        const seller = response.data.seller;
        console.log(seller);
        setSeller(seller);
      }
    });
  }, []);

  useEffect(() => {
    const data = {
      sellerID: auth.user.sellerID,
    };
    axios.post(GET_BEST_SELLING_PRODUCTS_URL, data).then((response) => {
      setBestSellingProducts(response.data.request);
    });
  }, []);

  return (
    <>
      <NavBar />
      <main className="grid grid-cols-5">
        <div className="col-span-1" aria-label="Sidebar">
          <SellerSideBar storeID={seller?.storeID} />
        </div>
        <section className="m-4 col-span-4">
          <section>
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
                Good Evening Vimansa
              </h1>

              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-8 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
                <div className="h-36 p-4 space-y-3 border-2 border-gray-200 rounded-lg">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="clear-both text-gray-400 w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                    <p className="pl-16 pb-4 text-xl font-semibold text-gray-400 capitalize">
                      Total sales
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">
                    $
                    {salescount?.sales == "0"
                      ? parseFloat(salescount?.sales).toFixed(2)
                      : "0.00"}
                  </p>
                </div>

                <div className="h-36 p-4 space-y-3 border-2 border-gray-200 rounded-lg">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="clear-both text-gray-400 w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                    <p className="pl-16 pb-4 text-xl font-semibold text-gray-400 capitalize">
                      Total Sales{" "}
                      <span className="text-green-500 text-base">Today</span>
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">
                    {/* ${parseFloat(todaysalescount?.sales).toFixed(2)} */}
                    $55.00
                  </p>
                </div>

                <div className="h-36 p-4 space-y-3 border-2 border-gray-200 rounded-lg">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="clear-both text-gray-400 w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                    <p className="pl-16 pb-4 text-xl font-semibold text-gray-400 capitalize">
                      My Partnerships
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">
                    {partnershipcount?.count}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-8 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
                <div className="h-36 p-4 space-y-3 border-2 border-gray-200 rounded-lg">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="clear-both text-gray-400 w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                    <p className="pl-16 pb-4 text-xl font-semibold text-gray-400 capitalize">
                      Total Orders
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">
                    {orderscount?.order_count}
                  </p>
                </div>

                <div className="h-36 p-4 space-y-3 border-2 border-gray-200 rounded-lg">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="clear-both text-gray-400 w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                    <p className="pl-16 pb-4 text-xl font-semibold text-gray-400 capitalize">
                      Pending Orders
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">
                    {pendingorderscount?.order_count}
                  </p>
                </div>

                <div className="h-36 p-4 space-y-3 border-2 border-gray-200 rounded-lg">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="clear-both text-gray-400 w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                      />
                    </svg>
                    <p className="pl-16 pb-4 text-xl font-semibold text-gray-400 capitalize">
                      Completed Orders
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">
                    {completedorderscount?.order_count}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center ">
              <div className="flex flex-col justify-center items-center mx-16 my-8">
                <div>
                  <h3 className="text-gray-600 text-3xl p-8">
                    Sales of products By Category
                  </h3>
                </div>
                <div className="basis-3/6">
                  <SalesByCategories />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center m-16">
                <div>
                  <h3 className="text-gray-600 text-3xl p-8">
                    Top Sell Products
                  </h3>
                </div>
                <div className="basis-3/6">
                  <TopProducts />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mx-16 ">
              <div className="grid grid-cols-4">
                <div className="col-span-4 text-gray-600 text-3xl p-32 px-32 mt-0">
                  Total Sales During The Year
                </div>
                <div className="col-span-4">
                  <AnnualSalesData />
                </div>
              </div>
            </div>

            <div>
              <p className="m-16 text-2xl text-gray-600">
                Best Selling Products
              </p>
              {bestSellingProducts?.map((value) => {
                return (
                  <div key={value.orderItemID}>
                    <div className="grid grid-cols-5 text-center m-8 mt-0 shadow-md rounded-md">
                      <div className="flex justify-center font-medium items-center col-span-2 w-full h-24">
                        <div className="flex items-center">
                          <img
                            src={`http://localhost:3500/products/${value.image1}`}
                            className="h-24  p-4"
                          />
                          <p>{value.title}</p>
                        </div>
                      </div>
                      <div className="flex justify-center font-medium items-center w-full h-24">
                        {" "}
                      </div>
                      <div className="flex justify-center font-medium items-center w-full h-24">
                        ${parseFloat(value.orderPrice).toFixed(2)}
                      </div>
                      <div className="flex justify-center font-medium items-center w-full h-24">
                        55 sales
                      </div>
                    </div>
                  </div>
                );
              })}
              ;
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default SellerProfile;
