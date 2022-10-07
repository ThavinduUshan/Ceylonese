import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import SellerSideBar from "./SellerSideBar";
import useAuth from "../../hooks/useAuth";
import NavBar from "../NavBar";

const PartnershipRequests = () => {
  return (
    <>
      <NavBar />
      <main className="grid grid-cols-5">
        <div className="col-span-1" aria-label="Sidebar">
          <SellerSideBar />
        </div>
        <section className="m-4 col-span-4">
          <div>
            <ul className="mt-20 mx-14 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
              <li className="w-48 rounded-t-lg bg-gray-200">
                <Link
                  to="/sellers/partnerships/requests"
                  aria-current="page"
                  className="inline-block p-4 text-orange-500 text-base active"
                >
                  Requests
                </Link>
              </li>
              <li className="w-48 rounded-t-lg bg-gray-100 border border-gray-200">
                <Link
                  to="/sellers/partnerships/active"
                  className="inline-block p-4 text-base rounded-t-lg "
                >
                  Active
                </Link>
              </li>
              <li className="w-48 rounded-t-lg bg-gray-100  border border-gray-200">
                <Link
                  to="/sellers/partnerships/ended"
                  className="inline-block p-4 text-base rounded-t-lg "
                >
                  Ended
                </Link>
              </li>
            </ul>
            <p className="m-16 text-2xl text-gray-600">Partnerships</p>

            <div className="grid grid-cols-4 text-center m-8">
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto col-span-1">
                My Product
              </div>

              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 col-span-1">
                Interest Product
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 col-span-1">
                Seller ID
              </div>
            </div>
            {partnerships && (
              <>
                {partnerships.map((partnership) => {
                  return (
                    <>
                      <div className="grid grid-cols-4 h-36 text-center m-16 mt-0 shadow-md rounded-md">
                        <div className="flex justify-center font-medium items-center w-full col-span-1">
                          {partnership?.receiverProduct}
                        </div>

                        <div className="flex justify-center font-medium items-center w-full col-span-1">
                          {partnership?.senderProduct}
                        </div>
                        <div className="flex justify-center font-medium items-center w-full col-span-1">
                          {partnership?.senderID}
                        </div>
                        <div className="flex justify-center font-medium items-center w-full col-span-1">
                          <Link
                            to={`/sellers/partnerships/accept/${partnership.partnershipID}`}
                          >
                            <button className="bg-gray-700 h-8 px-4 text-white rounded-md">
                              View More
                            </button>
                          </Link>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default PartnershipRequests;
