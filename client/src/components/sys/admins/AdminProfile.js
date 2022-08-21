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

      <main className="grid grid-cols-4">
        <aside className="col-start-1 col-end-2col-start-1 col-end-2 w-80 ">
          <div className="overflow-y-auto bg-gray-800 h-full">
            <div className="flex-grow border-t border-gray-400 mt-36"></div>

            <div className="grid grid-cols-1 divide-y">
              <div className=" h-16 flex flex-col bg-orange-500 text-white text-xl pl-28 md:flex-row md:mt-0 mb-0 hover:bg-orange-500">
                <button className="mt-2 mb-5">Dashboard</button>
              </div>

              <div className=" h-16 flex flex-col text-white text-xl pl-28 md:flex-row md:mt-0 mb-0 hover:bg-orange-500 mt-28">
                <button className="mt-2 mb-5">insights</button>
              </div>

              <div className=" h-16 flex flex-col text-white text-xl pl-28 md:flex-row md:mt-0 mb-0 hover:bg-orange-500 mt-28">
                <button className="mt-2 mb-5 ">Manage Users</button>
              </div>

              <div className=" h-16 flex flex-col text-white text-xl pl-28 md:flex-row md:mt-0 mb-0 hover:bg-orange-500 mt-28">
                <button className="mt-2 mb-5">Reports</button>
              </div>
            </div>

            <div className="flex-grow border-t border-gray-400"></div>
          </div>
        </aside>

        <aside className="col-start-2 col-end-5 bg-white-500 ">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 ... bg-gray-300 mr-10 mt-5 h-10">
              <p className="ml-5 mt-2">Good Evening Admin!</p>
            </div>
            <div className="... border h-24 w-80 ">
              <p className="ml-28 mt-2">Total Sales</p>
              <p className="ml-28 mt-3 text-xl ">$19,645,845.40</p>
            </div>
            <div className="... border h-24 w-80 ">
              <p className="ml-28 mt-2">Total Orders</p>
              <p className="ml-28 mt-3 text-xl ">3290</p>
            </div>
            <div className="... border h-24 w-80">
              <p className="ml-28 mt-2">Total Products</p>
              <p className="ml-28 mt-3 text-xl ">322</p>
            </div>
            <div className="col-span-2 ... mt-4 ">
              <p className="text-lg">
                <b>Sales Statistics</b>
              </p>
              <img className="h-64 " src={chart} />
            </div>
            <div className="... mr-10 ">
              <img src={pie} />
            </div>

            <div className="col-span-3 ... bg-white mr-10 h-full mb-10">
              <p className="text-lg">
                <b>Latest Orders</b>
              </p>

              <div className=" flex flex-col p-2 mr-10 w-full md:flex-row mt-4 md:space-x-2 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg ">
                <ul className="flex flex-col md:flex-row">
                  <li className="block ml-2 mt-2">2323</li>
                  <li className="block ml-20 mt-2">Chathuri Priyangika</li>
                  <li className="block ml-20 mt-2">wscpriyangika@gmail.com</li>
                  <li className="block ml-20 mt-2">$28.00</li>
                  <li className="block ml-20">
                    <button className="bg-gray-500 w-28 h-8 rounded text-white ">
                      Delivered
                    </button>
                  </li>
                  <li className="block ml-20 mt-2">2022/09/03</li>
                </ul>
              </div>
              <div className=" flex flex-col p-2 mr-10 w-full md:flex-row mt-4  md:space-x-2 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
                <ul className="flex flex-col md:flex-row">
                  <li className="block ml-2 mt-2">2456</li>
                  <li className="block ml-20 mt-2">Chathuri Priyangika</li>
                  <li className="block ml-20 mt-2">wscpriyangika@gmail.com</li>

                  <li className="block ml-20 mt-2">$78.45</li>
                  <li className="block ml-20">
                    <button className="bg-gray-500 w-28 h-8 rounded text-white ">
                      Delivered
                    </button>
                  </li>
                  <li className="block ml-20 mt-2">2022/07/03</li>
                </ul>
              </div>
              <div className=" flex flex-col p-2 mr-10 w-full md:flex-row mt-4 md:space-x-2 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
                <ul className="flex flex-col md:flex-row">
                  <li className="block ml-2 mt-2">6348</li>
                  <li className="block ml-20 mt-2">Chathuri Priyangika</li>
                  <li className="block ml-20 mt-2">wscpriyangika@gmail.com</li>

                  <li className="block ml-20 mt-2">$45.00</li>
                  <li className="block ml-20">
                    <button className="bg-gray-300 w-28 h-8 rounded text-white ">
                      Cancelled
                    </button>
                  </li>
                  <li className="block ml-20 mt-2">2022/02/23</li>
                </ul>
              </div>
              <div className=" flex flex-col p-2 mr-10 w-full md:flex-row mt-4  md:space-x-2 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
                <ul className="flex flex-col md:flex-row">
                  <li className="block ml-2 mt-2">3869</li>
                  <li className="block ml-20 mt-2">Chathuri Priyangika</li>
                  <li className="block ml-20 mt-2">wscpriyangika@gmail.com</li>

                  <li className="block ml-20 mt-2">$50.00</li>
                  <li className="block ml-20">
                    <button className="bg-gray-500 w-28 h-8 rounded text-white ">
                      Delivered
                    </button>
                  </li>
                  <li className="block ml-20 mt-2">2022/04/29</li>
                </ul>
              </div>
              <div className=" flex flex-col p-2 mr-10 w-full md:flex-row mt-4  md:space-x-2 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
                <ul className="flex flex-col md:flex-row">
                  <li className="block ml-2 mt-2">1247</li>
                  <li className="block ml-20 mt-2">Chathuri Priyangika</li>
                  <li className="block ml-20 mt-2">wscpriyangika@gmail.com</li>

                  <li className="block ml-20 mt-2">$34.75</li>
                  <li className="block ml-20">
                    <button className="bg-orange-500 w-28 h-8 rounded text-white ">
                      Pending
                    </button>
                  </li>
                  <li className="block ml-20 mt-2">2022/04/06</li>
                </ul>
              </div>

              <div className=" flex flex-col p-2 mr-10 w-full md:flex-row mt-4  md:space-x-2 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
                <ul className="flex flex-col md:flex-row">
                  <li className="block ml-2 mt-2">7813</li>
                  <li className="block ml-20 mt-2">Chathuri Priyangika</li>
                  <li className="block ml-20 mt-2">wscpriyangika@gmail.com</li>

                  <li className="block ml-20 mt-2">$12.45</li>
                  <li className="block ml-20">
                    <button className="bg-gray-500 w-28 h-8 rounded text-white ">
                      Delivered
                    </button>
                  </li>
                  <li className="block ml-20 mt-2">2022/03/23</li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </>
  );
};

export default AdminProfile;
