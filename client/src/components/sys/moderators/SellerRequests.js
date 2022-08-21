import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";

import NavBar from "../../NavBar";
import ModeratorSideBar from "./ModeratorSideBar";

const GET_SELLER_REQUESTS_URL = "moderators/sellerrequests";

const SellerRequests = () => {
  const [listOfRequests, setListOfRequests] = useState();

  const navigateTo = useNavigate();

  useEffect(() => {
    axios.get(GET_SELLER_REQUESTS_URL).then((response) => {
      console.log(response.data.requests);
      setListOfRequests(response.data.requests);
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
          <div>
            <p className="m-16 text-2xl text-gray-600">Seller Requests</p>

            <div className="grid grid-cols-5 text-center m-8">
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto">
                Shop Name
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                Owner Name
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 col-span-2">
                Email
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12">
                More Details
              </div>
            </div>

            {listOfRequests?.map((value) => {
              return (
                <div key={value.requestID}>
                  <div className="grid grid-cols-5 h-36 text-center m-16 mt-0 shadow-md rounded-md">
                    <div className="flex justify-center font-medium items-center w-full">
                      {value.storeName}
                    </div>
                    <div className="flex justify-center font-medium items-center w-full ">
                      {value.ownersName}
                    </div>
                    <div className="flex justify-center font-medium items-center w-full col-span-2">
                      {value.email}
                    </div>
                    <div className="flex justify-center font-medium items-center w-full ">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(`./${value.requestID}`, {
                            replace: true,
                          });
                        }}
                        className="bg-gray-700 h-8 px-4 text-white rounded-md"
                      >
                        View More
                      </button>
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

export default SellerRequests;
