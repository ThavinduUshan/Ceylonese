import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoriesBar from "../CategoriesBar";
import NavBar from "../NavBar";
import axios from "../../api/axios";
import profile from "../../images/vector.jpg";
import SideBar from "../buyers/SideBar";
import useAuth from "../../hooks/useAuth";

const BuyerChats = () => {
  const { auth } = useAuth();
  const id = auth?.user.id;

  const GET_CHAT_ROOMS = `chat/rooms/buyer`;

  const [chatRooms, setChatRooms] = useState();

  useEffect(() => {
    const data = {
      buyerID: id,
    };
    axios.post(GET_CHAT_ROOMS, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        const rooms = response.data.rooms;
        console.log(rooms);
        setChatRooms(rooms);
      }
    });
  }, []);

  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div className="grid grid-cols-5">
        <SideBar />

        <div className="col-span-4 mx-20">
          <p className="m-16 text-2xl text-gray-600">
            Chats
            <hr className="bg-gray-200 mt-2" />
          </p>

          <div className="grid grid-cols-5 text-center m-8">
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto col-span-1">
              Seller
            </div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 mx-auto col-span-1">
              Seller Name
            </div>

            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 col-span-1">
              Last msg
            </div>
            <div className="flex justify-center items-center font-medium text-gray-400 w-full h-12 col-span-1">
              Date/time
            </div>
          </div>

          <div className="p-10">
            {chatRooms && (
              <>
                {chatRooms?.map((chat) => {
                  return (
                    <>
                      <div className="grid grid-cols-5 text-center flex items-center">
                        <img
                          src={profile}
                          alt="profile photo"
                          className="col-span-1 w-20"
                        />
                        <p className="col-span-1">{chat?.OwnersName}</p>
                        <p className="col-span1">{chat.message}</p>
                        <p className="col-span1">{chat.sentDate}</p>
                        <Link to={`/chat/${chat.roomID}`}>
                          <button className="col-span-1 bg-orange-500 px-2 py-3 w-3/5 rounded-md text-white mx-auto">
                            Chat
                          </button>
                        </Link>
                      </div>

                      <hr className="mt-5" />
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerChats;
