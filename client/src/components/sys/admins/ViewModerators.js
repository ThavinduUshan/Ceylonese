import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../../api/axios";
import NavBar from "../../NavBar";
import AdminSideBar from "./AdminSideBar";

const GET_MODERATORS_URL = "admins/getmoderators";

const ViewModerators = () => {
  const [moderatorList, setModeratorList] = useState();

  useEffect(() => {
    axios.get(GET_MODERATORS_URL).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        console.log(response.data.moderators);
        setModeratorList(response.data.moderators);
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-5">
        <aside className="col-span-1" aria-label="Sidebar">
          <AdminSideBar />
        </aside>

        <section className="m-4 col-span-4">
          <div>
            <div className="flex justify-end ">
              <Link to="/sys/admins/addmoderators">
                <button className="mr-16 mt-12 px-5 py-3 bg-orange-500 text-white rounded-lg">
                  + Add Moderator
                </button>
              </Link>
            </div>
            <p className="m-10 text-2xl text-gray-600">Moderators</p>

            <div className="grid grid-cols-5 text-center m-8">
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto">
                Id
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 col col-span-2">
                Email
              </div>
              <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 col-span-2">
                Remove
              </div>
            </div>
            {moderatorList && (
              <>
                {moderatorList.map((mod) => {
                  return (
                    <>
                      <div
                        key={mod.id}
                        className="grid grid-cols-5 h-20 text-center m-8 mt-0 shadow-md rounded-md"
                      >
                        <div className="flex justify-center font-medium items-center w-full">
                          {mod.id}
                        </div>
                        <div className="flex justify-center font-medium items-center w-full col-span-2">
                          {mod.email}
                        </div>
                        <div className="flex justify-center font-medium items-center w-full col-span-2">
                          <button className="bg-gray-700 h-8 px-4 text-white rounded-md">
                            Remove
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ViewModerators;
