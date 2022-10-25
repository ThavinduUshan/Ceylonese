import React, { useState, useEffect } from "react";
import axios from "../../../api/axios";
import NavBar from "../../NavBar";
import ModeratorSideBar from "./ModeratorSideBar";
import PendingSupportTicketTypes from "./Charts/PendingSupportTicketTypes";
import SellerRequestsPercentages from "./Charts/SellerRequestsPercentages";

const ModeratorProfile = () => {
  const GET_SELLER_REQUEST_COUNT_URL = "moderators/getsellerrequestscount";
  const GET_SUPPORT_TICKET_COUNT_URL = "moderators/getsupportticketcount";

  const [sellerrequestscount, setSellerRequestsCount] = useState();
  const [supportticketcount, setSupportTicketCount] = useState();

  useEffect(() => {
    axios.get(GET_SELLER_REQUEST_COUNT_URL).then((response) => {
      console.log(response.data.requests);
      setSellerRequestsCount(response.data.requests);
    });
  }, []);

  useEffect(() => {
    axios.get(GET_SUPPORT_TICKET_COUNT_URL).then((response) => {
      console.log(response.data.requests);
      setSupportTicketCount(response.data.requests);
    });
  }, []);

  return (
    <>
      <NavBar />
      <main className="grid grid-cols-5">
        <div className="col-span-1" aria-label="Sidebar">
          <ModeratorSideBar />
        </div>
        <section className="m-4 col-span-4">
          <section>
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
                Good Evening Mod!
              </h1>

              <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-8 xl:gap-8 md:grid-cols-2 xl:grid-cols-3">
                <div className="h-36 p-4 space-y-3 border-2 border-gray-200 rounded-lg">
                  <div className="flex flex-row">
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
                    <p className="pl-16 pb-4 text-xl font-semibold text-gray-400 w-full">
                      Pending Seller Requests
                    </p>
                  </div>
                  <p className=" text-gray-600 text-3xl text-center w-full">
                    {sellerrequestscount?.RequestCount}
                  </p>
                </div>

                <div className="h-36 p-4 space-y-3 border-2 border-gray-200 rounded-lg">
                  <div className="flex flex-row">
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
                    <p className="pl-16 pb-4 text-xl font-semibold text-gray-400 w-full">
                      Account Reports
                    </p>
                  </div>
                  <p className=" text-gray-600 text-3xl text-center w-full">
                    3
                  </p>
                </div>

                <div className="h-36 p-4 space-y-3 border-2 border-gray-200 rounded-lg">
                  <div className="flex flex-row">
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
                    <p className="pl-16 pb-4 text-xl font-semibold text-gray-400 w-full">
                      Pending Support Tickets
                    </p>
                  </div>
                  <p className=" text-gray-600 text-3xl text-center w-full">
                    {supportticketcount?.TicketCount}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center ">
              <div className="flex flex-col justify-center items-center mx-16 my-8">
                <div>
                  <h3 className="text-gray-600 text-3xl p-8">
                    Pending Support Tickets By Ticket Type
                  </h3>
                </div>
                <div className="basis-3/6">
                  <PendingSupportTicketTypes />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mx-16 my-8">
                <div>
                  <h3 className="text-gray-600 text-3xl p-8">
                    Seller Requests
                  </h3>
                </div>
                <div className="basis-3/6">
                  <SellerRequestsPercentages />
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default ModeratorProfile;