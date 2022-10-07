import React, { useState, useEffect } from "react";
import axios from "../../../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../../NavBar";
import ModeratorSideBar from "./ModeratorSideBar";

const OPEN_TICKET_URL = "/moderators/supportticket/open";
const CLOSE_TICKET_URL = "/moderators/supportticket/close";

const SupportTicketIssuesDetails = () => {
  
  return (
    <>
      <NavBar />
      <main className="grid grid-cols-5">
        <div className="col-span-1 " aria-label="Sidebar">
          <ModeratorSideBar />
        </div>
        <section className="m-4 col-span-4">
          <div className="m-20 text-4xl text-gray-700">
            Support Ticket #{request?.ticket_id}
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg m-20">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Requesting Supprt for {request?.subject}
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Support Ticket Details
              </p>
            </div>

            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {request?.name}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {request?.email}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Type</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {request?.type == 1
                      ? "General Issues"
                      : request?.type == 2
                      ? "Account Issues"
                      : ""}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Subject</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {request?.subject}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {request?.description}
                  </dd>
                </div>
              </dl>
            </div>
            {request?.status == "Pending" ? (
              <>
                <button
                  className="my-16 ml-4 bg-gray-900 h-12 px-12 text-white hover:bg-orange-500 rounded-md"
                  onClick={openTicket}
                >
                  Open a Ticket
                </button>
              </>
            ) : (
              <>
                <button
                  className="my-16 ml-4 bg-orange-500 h-12 px-12 text-white rounded-md"
                  onClick={closeTicket}
                >
                  Close Ticket
                </button>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default SupportTicketIssuesDetails;