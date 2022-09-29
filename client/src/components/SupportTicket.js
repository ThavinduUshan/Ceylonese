import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "./../api/axios";

const ADD_SUPPORT_URL = "/root/addsupportticket";

const SupportTicket = () => {

    const navigateTo = useNavigate();

  const [ticket, setTicket] = useState({
    name: "",
    email: "",
    type: 1,
    subject: "",
    description: "",
  });

  const handleType = (e) => {
    e.preventDefault();
    setTicket({ ...ticket, type: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios.post(ADD_SUPPORT_URL, ticket).then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setTicket({
            name: "",
            email: "",
            type: "",
            subject: "",
            description: "",
          });

          navigateTo("/");
          alert("Ticket added. Our team will contact you soon.");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="flex flex-wrap space-x-2 pt-6 pl-12">
            <h2 className="font-medium leading-tight text-3xl mt-10 mb-2 ml-28 text-slate-900">
              Support Ticket
            </h2>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex flex-wrap space-x-2 pt-6 pl-12">
            <h2 className="font-medium leading-tight text-3xl mt-10 mb-2 text-slate-900">
              Take Note
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-x-2 divide-gray-300">
        <div className="col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="pl-12 pr-12 pt-8 pb-10 ">
              <div className="w-auto grid  rounded">
                <div className="md:flex md:items-center mb-4 mt-4">
                  <div className="md:w-1/4">
                    <label className="block text-gray-900 font-semibold pl-28 mb-1 md:mb-0 pr-4">
                      Name
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input
                      type="text"
                      value={ticket.name}
                      onChange={(e) =>
                        setTicket({ ...ticket, name: e.target.value })
                      }
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="inline-full-name"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-4 mt-4">
                  <div className="md:w-1/4">
                    <label className="block text-gray-900 font-semibold pl-28 mb-1 md:mb-0 pr-4">
                      Email
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input
                      value={ticket.email}
                      onChange={(e) =>
                        setTicket({ ...ticket, email: e.target.value })
                      }
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                      placeholder=""
                    />
                  </div>
                </div>

                <p className="flex items-center justify-center ml-36 text-sm my-2 text-red-500 font-medium">
                  *If you're reporting an item, select the type as Complains,
                  and mention the product ID within the message
                </p>

                <div class="md:flex md:items-center mb-4 mt-4">
                  <div class="md:w-1/4">
                    <label
                      class="block text-gray-900 font-semibold pl-28 mb-1 md:mb-0 pr-4"
                      for="type"
                    >
                      Type
                    </label>
                  </div>
                  <div class="md:w-3/4">
                    <select
                      class="bg-white border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500 "
                      onChange={(e) => handleType(e)}
                    >
                      <option value="1">General Issues</option>
                      <option value="2">Account Issues</option>
                      <option value="3">Complains</option>
                    </select>
                  </div>
                </div>

                <div className="md:flex md:items-center mb-4 mt-4">
                  <div className="md:w-1/4">
                    <label className="block text-gray-900 font-semibold pl-28 mb-1 md:mb-0 pr-4">
                      Subject
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input
                      value={ticket.subject}
                      onChange={(e) =>
                        setTicket({ ...ticket, subject: e.target.value })
                      }
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="subject"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-4 mt-4">
                  <div className="md:w-1/4">
                    <label className="block text-gray-900 font-semibold pl-28 mb-1 md:mb-0 pr-4">
                      Description
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <textarea
                      value={ticket.description}
                      onChange={(e) =>
                        setTicket({ ...ticket, description: e.target.value })
                      }
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="description"
                      placeholder=""
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-2 mb-4">
              <div className="ml-auto pr-12">
                <button
                  type="submit"
                  className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-span-1">
          <div className="pl-12 pr-12 pt-8 pb-10 ">
            <div className="w-auto grid bg-gray-200 rounded">
              <div className="">
                <ul className="pl-16 pt-4 pr-16 list-disc list-outside text-slate-900 text-lg">
                  <li className="pb-2">
                    Read the instructions before complete the support ticket.
                  </li>
                  <li className="pb-2">
                    Go through the FAQs and see whether there’s an answer
                    foryour question before sending a support ticket.
                  </li>
                  <li className="pb-2">
                    Use the same email you use to log into your Infoplus
                    application when submitting a new Support Ticket.
                  </li>
                  <li className="pb-2">
                    Give us as much detail about your inquiry as possible.
                  </li>
                  <li className="pb-4">
                    The more information we have at the time of ticket
                    submission, the quicker we can get an accurate response to
                    you
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportTicket;
