import React from "react";
import CategoriesBar from "../CategoriesBar";
import NavBar from "../NavBar";

const BuyerChat = () => {
  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div>
        <div className="grid grid-cols-3 min-w-full border rounded">
          <div className="col-span-1 bg-white border-r border-gray-900 mt-8 ml-4">
            <button className="outline-none focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-arrow-left-short"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </button>
            <ul className="overflow-auto mr-4">
              <h2 className="ml-2 mb-10 text-gray-600 text-3xl my-2">Chats</h2>
              <li>
                <a className="hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-base text-gray-600 ">
                        Jhon C
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        5 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      Hello world!!
                    </span>
                  </div>
                </a>
                <a className="bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-base text-gray-600 ">
                        Eduard
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        15 minutes
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      I am fine
                    </span>
                  </div>
                </a>
                <a className="hover:bg-gray-100 border-b border-gray-300 px-3 py-2 cursor-pointer flex items-center text-sm focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src="https://images.pexels.com/photos/6238133/pexels-photo-6238133.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt="username"
                  />
                  <div className="w-full pb-2">
                    <div className="flex justify-between">
                      <span className="block ml-2 font-semibold text-base text-gray-600 ">
                        Celia
                      </span>
                      <span className="block ml-2 text-sm text-gray-600">
                        1 hour
                      </span>
                    </div>
                    <span className="block ml-2 text-sm text-gray-600">
                      Last message
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 bg-white mt-8">
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
                    <div className="w-full flex justify-start">
                      <div
                        className="bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative"
                        style={{ maxWidth: "300px" }}
                      >
                        <span className="block">Hello bro</span>
                        <span className="block text-xs text-right">
                          10:30pm
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                      <div
                        className="bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative"
                        style={{ maxWidth: "300px" }}
                      >
                        <span className="block">Hello</span>
                        <span className="block text-xs text-left">10:32pm</span>
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                      <div
                        className="bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative"
                        style={{ maxWidth: "300px" }}
                      >
                        <span className="block">how are you?</span>
                        <span className="block text-xs text-left">10:32pm</span>
                      </div>
                    </div>
                    <div className="w-full flex justify-start">
                      <div
                        className="bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative"
                        style={{ maxWidth: "300px" }}
                      >
                        <span className="block">I am fine</span>
                        <span className="block text-xs text-right">
                          10:42pm
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                      <div
                        className="bg-gray-100 rounded px-5 py-2 my-2 text-gray-700 relative"
                        style={{ maxWidth: "300px" }}
                      >
                        <span className="block">how are you again?</span>
                        <span className="block text-xs text-left">10:55pm</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="w-full py-3 px-3 flex items-center justify-between border-t border-gray-300">
                <input
                  aria-placeholder="Message"
                  placeholder="Message"
                  className="py-2 mx-3 pl-5 block w-full rounded-full bg-gray-100 outline-none focus:text-gray-700"
                  type="text"
                  name="message"
                  required
                />

                <button
                  className="outline-none focus:outline-none"
                  type="submit"
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

export default BuyerChat;
