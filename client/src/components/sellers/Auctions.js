import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import NavBar from "../NavBar";
import SellerSideBar from "./SellerSideBar";
import useAuth from "../../hooks/useAuth";

const GET_AUCTIONS_URL = "sellers/getauctions";

const Auctions = () => {
  const [auctions, setAuctions] = useState();

  const { auth } = useAuth();

  useEffect(() => {
    const sellerID = auth?.user.sellerID;
    const data = {
      sellerID: sellerID,
    };
    axios.post(GET_AUCTIONS_URL, data).then((response) => {
      if (response.data.error) {
        console.log(`${response.data.error}`);
      } else {
        setAuctions(response.data.auctions);
        console.log(response.data.auctions);
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <main className="grid grid-cols-5">
        <aside className="col-span-1">
          <SellerSideBar />
        </aside>

        <div className="col-span-4 bg-white-500 ">
          <ul className="mt-20 mx-14 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <li className="w-48 rounded-t-lg bg-gray-100">
              <Link
                to="/sellers/profile/listings"
                aria-current="page"
                className="inline-block p-4  text-base active"
              >
                Listings
              </Link>
            </li>
            <li className="w-48 rounded-t-lg bg-gray-200">
              <Link
                to="/sellers/profile/auctions"
                className="inline-block p-4 text-orange-500 text-base rounded-t-lg "
              >
                Auctions
              </Link>
            </li>
          </ul>

          <div className="flex justify-end">
            <Link
              to="/sellers/profile/newlisting"
              className="mr-16 mt-16 rounded-lg px-6 text-lg py-3 bg-orange-500 text-white font-bold"
              type="button"
            >
              + Add a Listing
            </Link>
          </div>
          <div className="flex mt-10 mb-10">
            <div className="flex flex-col text-gray-700 font-bold text-3xl mt-7 ml-14 mb-7">
              My Listings
            </div>
          </div>

          {auctions?.length === 0 && (
            <>
              <div className="flex justify-center ml-8 mr-8 mt-5 px-3 py-10 bg-gray-100">
                <p className="text-lg text-gray-300">No items to Display</p>
              </div>
            </>
          )}

          {auctions?.map((auction) => {
            return (
              <div key={auction.auctionID}>
                <div className="flex flex-col p-1 ml-12 mr-12 md:flex-row md:space-x-2 md:mt-6 md:text-sm md:font-medium rounded bg-white-300 border border-gray-200 dark:border-gray-300 shadow-lg">
                  <img
                    src={`http://localhost:3500/auctions/${auction.image1}`}
                    className="mr-3 h-28 ml-2"
                  />

                  <ul className="flex flex-col md:flex-row">
                    <p className="block py-4 pr-4 w-80 text-left pl-3 mt-8">
                      Lorem Ipsum is simply dummy of text
                    </p>
                    <li className="block ml-20 mt-12">
                      {auction.startingPrice}
                    </li>
                    <li className="block ml-28 mt-12">{auction.Duration}</li>
                    <li className="block ml-44 mr-20 mt-12">
                      <button>Edit</button>
                    </li>
                  </ul>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 mt-12 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Auctions;
