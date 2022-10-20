import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import CategoriesBar from "../CategoriesBar";
import NavBar from "../NavBar";
import useAuth from "../../hooks/useAuth";

const SEND_MESSAGES_URL = "chat/send";

const Chat = () => {
  const { id } = useParams();
  const { auth } = useAuth();

  let userID;

  if (auth?.roles == 2347) {
    userID = auth?.user.sellerID;
  } else if (auth?.roles == 5150) {
    userID = auth?.user.id;
  }

  const GET_CHATS_BY_ROOM_ID = `chat/${id}`;

  const [myMessages, setMyMessages] = useState([]);
  const [otherMessages, setOtherMessages] = useState();
  const [currentMsg, setCurrentMsg] = useState();
  const [count, setCount] = useState();
  const [messages, setMessages] = useState();

  useEffect(() => {
    axios.get(GET_CHATS_BY_ROOM_ID).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        const messages = response.data.messages;
        console.log(messages);
        setMessages(messages);
      }
    });
  });

  const sendMsg = async (e) => {
    e.preventDefault();
    const date = new Date();
    const time = date.toLocaleTimeString();

    const data = {
      roomID: id,
      message: currentMsg,
      sentBy: userID,
      sentDate: date,
      sentTime: time,
    };

    await axios.post(SEND_MESSAGES_URL, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        setCurrentMsg("");
      }
    });
  };

  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div>
        <div className="grid grid-cols-3 min-w-full border rounded">
          <div className="col-span-3 bg-white mt-8 mx-32">
            <div className="w-full">
              <div className="flex items-center border-b border-gray-300 pl-3 py-3 ml-8">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  alt="username"
                />
                <span className="block ml-4 font-bold text-base text-gray-600">
                  Eduard
                </span>
                <span className="connected text-green-500 ml-2">
                  <svg width="6" height="6">
                    <circle cx="3" cy="3" r="3" fill="currentColor"></circle>
                  </svg>
                </span>
              </div>

              <div id="chat" className="w-full overflow-y-auto p-10 relative">
                <ul>
                  <li className="clearfix2 m-4">
                    {messages?.map((msg, index) => {
                      return (
                        <div
                          key={index}
                          className="w-full flex justify-start"
                          style={{
                            justifyContent:
                              userID == msg.sentBy ? "start" : "end",
                          }}
                        >
                          <div
                            className="bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative"
                            style={{ maxWidth: "300px" }}
                          >
                            <span className="block">{msg.message}</span>
                            <span className="block text-xs text-right">
                              {msg.sentTime}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </li>
                </ul>
              </div>

              <div className="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300 sticky  bottom-0 mb-10">
                <input
                  className="py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none  focus:text-gray-700"
                  type="text"
                  name="message"
                  value={currentMsg}
                  onChange={(e) => setCurrentMsg(e.target.value)}
                  placeholder="Send a message..."
                  required
                />

                <button
                  className="outline-none focus:outline-none"
                  type="submit"
                  onClick={(e) => sendMsg(e)}
                >
                  <svg
                    className="text-gray-400 h-7 w-7 origin-center transform rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
