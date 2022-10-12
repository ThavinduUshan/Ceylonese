import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../api/axios";
import NavBar from "../../NavBar";
import ModeratorSideBar from "./ModeratorSideBar";

const GET_SUPPORT_TICKET_ISSUES_URL = "moderators/supportticketcomplains";

const Complains = () => {
  
 const [listOfTickets, setListOfTickets] = useState();

  const navigateTo = useNavigate();

  useEffect(() => {
    axios.post(GET_SUPPORT_TICKET_ISSUES_URL).then((response) => {
      console.log(response.data.requests);
      setListOfTickets(response.data.requests);
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
            <p className="m-16 text-2xl text-gray-600">Pending Complains</p>
            <div className="grid grid-cols-6 text-center m-8">
              <div className="flex justify-center items-center font-medium text-gray-400  col-span-1 mx-auto">
                Name
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400  col-span-1">
                Email
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400   col-span-2">
                Subject
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400   col-span-1">
                Status
              </div>
              <div className="flex justify-center items-center font-medium text-center text-gray-400  col-span-1"></div>
            </div>
            {listOfTickets?.map((value) => {
              return (
                <div key={value.ticket_id}>
                  <div className="grid grid-cols-6 h-36 text-center m-16 mt-0 shadow-md rounded-md">
                    <div className="flex justify-center font-medium items-center col-span-1 w-36">
                      {value.name}
                    </div>
                    <div className="flex justify-center font-medium items-center  col-span-1">
                      {value.email}
                    </div>
                    <div className="flex justify-center font-medium items-center col-span-2">
                      {value.subject}
                    </div>
                    <div className="flex justify-center font-medium items-center col-span-1">
                      {value.status == "Pending" ? (
                        <>
                          <span class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
                            {value.status}
                          </span>
                        </>
                      ) : (
                        <>
                          <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
                            {value.status}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex justify-center font-medium items-center col-span-1">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(`./${value.ticket_id}`, {
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

export default Complains;
