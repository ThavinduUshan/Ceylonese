import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import NavBar from "../../NavBar";
import AdminSideBar from "./AdminSideBar";

import chart from "../../../images/admin/chart.png";
import pie from "../../../images/admin/pie.png";

const AdminProfile = () => {
  const { setAuth } = useAuth();
  const navigateTo = useNavigate();

  const logout = () => {
    setAuth({});
    navigateTo("/");
  };
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-5">
        <aside className="col-span-1" aria-label="Sidebar">
          <AdminSideBar />
        </aside>
        <div className="m-4 col-span-4">
          <div>
            <div className="container px-6 py-10 mx-auto">
              <div className="w-full bg-gray-300 h-10">
                <p className="ml-5 mt-4 p-2 font-medium">Good Evening Admin!</p>
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
            </div>

            <p className="m-16 text-2xl text-gray-600">Sales Progress</p>
            <div className="flex flex-row mx-8">
              <div className="basis-4/6 border-solid border-2 border-gray-100">
                <img src={chart} className="w-full"></img>
              </div>
              <div className="basis-2/6">
                <img src={pie}></img>
              </div>
            </div>

            <div>
              <p className="m-16 text-2xl text-gray-600">Latest Orders</p>
              <div className="grid grid-cols-7 text-center ml-8 mr-8 mt-0 shadow-md rounded-md">
                <div className="flex justify-center font-medium items-center w-full h-24">
                  2323
                </div>
                <div className="flex justify-left font-medium items-center col-span-2 w-full h-24">
                  Sama Kumaara
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  samankumara@gmail.com
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  $45
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  <button className="bg-gray-500 w-28 h-8 rounded text-white ">
                    Delivered
                  </button>
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  2022/04/31
                </div>
              </div>
              <div className="grid grid-cols-7 text-center ml-8 mr-8 mt-0 shadow-md rounded-md">
                <div className="flex justify-center font-medium items-center w-full h-24">
                  2323
                </div>
                <div className="flex justify-left font-medium items-center col-span-2 w-full h-24">
                  Sama Kumaara
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  samankumara@gmail.com
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  $45
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  <button className="bg-gray-500 w-28 h-8 rounded text-white ">
                    Delivered
                  </button>
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  2022/04/31
                </div>
              </div>
              <div className="grid grid-cols-7 text-center ml-8 mr-8 mt-0 shadow-md rounded-md">
                <div className="flex justify-center font-medium items-center w-full h-24">
                  2323
                </div>
                <div className="flex justify-left font-medium items-center col-span-2 w-full h-24">
                  Sama Kumaara
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  samankumara@gmail.com
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  $45
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  <button className="bg-orange-500 w-28 h-8 rounded text-white ">
                    Pending
                  </button>
                </div>
                <div className="flex justify-center font-medium items-center w-full h-24">
                  2022/04/31
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 text-center ml-8 mr-8 mt-0 shadow-md rounded-md">
              <div className="flex justify-center font-medium items-center w-full h-24">
                2323
              </div>
              <div className="flex justify-left font-medium items-center col-span-2 w-full h-24">
                Sama Kumaara
              </div>
              <div className="flex justify-center font-medium items-center w-full h-24">
                samankumara@gmail.com
              </div>
              <div className="flex justify-center font-medium items-center w-full h-24">
                $45
              </div>
              <div className="flex justify-center font-medium items-center w-full h-24">
                <button className="bg-gray-500 w-28 h-8 rounded text-white ">
                  Delivered
                </button>
              </div>
              <div className="flex justify-center font-medium items-center w-full h-24">
                2022/04/31
              </div>
            </div>
            <div className="grid grid-cols-7 text-center ml-8 mr-8 mt-0 shadow-md rounded-md">
              <div className="flex justify-center font-medium items-center w-full h-24">
                2323
              </div>
              <div className="flex justify-left font-medium items-center col-span-2 w-full h-24">
                Sama Kumaara
              </div>
              <div className="flex justify-center font-medium items-center w-full h-24">
                samankumara@gmail.com
              </div>
              <div className="flex justify-center font-medium items-center w-full h-24">
                $45
              </div>
              <div className="flex justify-center font-medium items-center w-full h-24">
                <button className="bg-gray-200 w-28 h-8 rounded text-white ">
                  Cancelled
                </button>
              </div>
              <div className="flex justify-center font-medium items-center w-full h-24">
                2022/04/31
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
