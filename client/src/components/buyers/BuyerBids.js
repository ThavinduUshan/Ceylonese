import React from "react";
import SideBar from "./SideBar";
import NavBar from "../NavBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import CategoriesBar from "../CategoriesBar";

const GET_ACTIVE_BIDS = "buyers/bids/active";

const BuyerBids = () => {
  const { auth } = useAuth();
  const [bids, setBids] = useState();

  useEffect(() => {
    const data = {
      buyerID: auth.user.id,
    };

    axios.post(GET_ACTIVE_BIDS, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        console.log(response.data.bids);
        setBids(response.data.bids);
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <CategoriesBar />
      <main className="grid grid-cols-5">
        <SideBar />
        <section className="m-4 col-span-4">
          <div>
            <ul className="mt-20 mx-14 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
              <li className="w-48 rounded-t-lg bg-gray-200">
                <Link
                  to="/buyers/biddings/"
                  aria-current="page"
                  className="inline-block p-4 text-orange-500 text-base active"
                >
                  Active
                </Link>
              </li>
              <li className="w-48 rounded-t-lg bg-gray-100 border border-gray-200">
                <Link
                  to="/buyers/biddings/ended"
                  className="inline-block p-4 text-base rounded-t-lg "
                >
                  Ended
                </Link>
              </li>
            </ul>
            <p className="m-16 text-2xl text-gray-600">
              Biddings
              <hr className="bg-gray-200 mt-2" />
            </p>
            <div className="grid grid-cols-6 text-center m-8">
              <div className="flex justify-center items-center font-medium col-span-2 text-gray-400 w-full h-12 mx-auto">
                Item
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                Your Bid
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                Ends On
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                Status
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12"></div>
            </div>

            {bids?.map((bid) => {
              return (
                <div key={bid.biddingsID}>
                  <div className="grid grid-cols-6 text-center m-8 mt-0 shadow-md rounded-md">
                    <div className="flex justify-center text-base items-center col-span-2 w-full h-24">
                      <div className="flex">
                        <img
                          src={`http://localhost:3500/auctions/${bid.image1}`}
                          className=" h-24  p-5"
                        />
                        <div className="my-2">
                          <p className="text-left">{bid.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center text-base items-center w-full h-24">
                      ${bid.bidAmount}
                    </div>
                    <div className="flex justify-center text-base items-center w-full h-24">
                      {new Date(bid.endDate).getDate() +
                        "-" +
                        (new Date(bid.endDate).getMonth() + 1) +
                        "-" +
                        new Date(bid.endDate).getFullYear()}
                    </div>
                    <div className="flex justify-center text-base items-center w-full h-24">
                      {bid.status ? (
                        <>
                          <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                            Highest
                          </span>
                        </>
                      ) : (
                        <>
                          <span class="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">
                            Not Highest
                          </span>
                        </>
                      )}
                    </div>

                    <div className="flex justify-center text-xs items-center w-full h-24 text-gray-500">
                      <Link to={`/auction/${bid.auctionID}`}>
                        <button className="text-white bg-gray-900 hover:bg-orange-500 hover:text-white w-32 py-3 px-2 rounded-md ">
                          {bid.status ? <>View</> : <>Re-Bid</>}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default BuyerBids;
