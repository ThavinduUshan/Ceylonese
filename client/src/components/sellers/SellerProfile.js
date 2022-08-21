import React from "react";
import sales from "../../images/sellers/sales.png";
import pieChart from "../../images/sellers/pie.png";
import pot from "../../images/home/04.jpg";
import statue1 from "../../images/home/06.jpg";
import statue2 from "../../images/home/14.jpg";
import mask from "../../images/Mask.png";

import SellerSideBar from "./SellerSideBar";
import NavBar from "../NavBar";

const SellerProfile = () => {
  return (
    <>
      <NavBar />
      <main className="grid grid-cols-5">
        <div className="col-span-1" aria-label="Sidebar">
          <SellerSideBar />
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
                    Rs. 12000
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
                      Total Products
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">
                    120
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
                      Total Orders
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">
                    540
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
                      Total Customers
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">
                    120
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
                      Active Chats
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">4</p>
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
                      Partnerships
                    </p>
                  </div>
                  <p className="text-gray-600 text-4xl text-center w-full">2</p>
                </div>
              </div>
            </div>

            <p className="m-16 text-2xl text-gray-600">Sales Progress</p>
            <div className="flex flex-row mx-8">
              <div className="basis-4/6">
                <img src={sales} />
              </div>
              <div className="basis-2/6">
                <img src={pieChart} />
              </div>
            </div>

            <div>
              <p className="m-16 text-2xl text-gray-600">
                Best Selling Products
              </p>
              <div className="grid grid-cols-5 text-center m-8 mt-0 shadow-md rounded-md">
                <div className="flex justify-center font-medium items-center col-span-2 w-full h-24">
                  <div className="flex">
                    <img src={pot} className="h-24 w-24 pl-4" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  {" "}
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  $45
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  55 sales
                </div>
              </div>
              <div className="grid grid-cols-5 text-center m-8 mt-0 shadow-md rounded-md">
                <div className="flex justify-center font-medium items-center col-span-2 w-full h-24">
                  <div className="flex">
                    <img src={statue1} className="h-24 w-24 pl-4" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  {" "}
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  $45
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  53 sales
                </div>
              </div>
              <div className="grid grid-cols-5 text-center m-8 mt-0 shadow-md rounded-md">
                <div className="flex justify-center font-medium items-center col-span-2 w-full h-24">
                  <div className="flex">
                    <img src={statue2} className="h-24 w-24 pl-4" />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  {" "}
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  $60
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  51 sales
                </div>
              </div>
            </div>

            <div>
              <p className="m-16 text-2xl text-gray-600">Partnership Details</p>
              <div className="grid grid-cols-5 text-center m-8">
                <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto">
                  Shop
                </div>
                <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                  Item
                </div>
                <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                  My Item
                </div>
                <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                  Discount Rate
                </div>
                <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                  Remain Time
                </div>
              </div>
              <div className="grid grid-cols-5 text-center m-8 mt-0 shadow-md rounded-md">
                <div
                  className="bg-no-repeat bg-center flex justify-center font-medium items-center w-full h-24"
                  style={{ backgroundImage: `url(${mask})` }}
                ></div>
                <div
                  className="bg-no-repeat bg-center flex justify-center font-medium items-center w-full h-24"
                  style={{ backgroundImage: `url(${mask})` }}
                ></div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  Thavindu
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  Pending
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  05.06.2022
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default SellerProfile;
