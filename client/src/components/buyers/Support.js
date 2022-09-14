import React from "react";
import CategoriesBar from "../CategoriesBar";
import NavBar from "../NavBar";

const Support = () => {
  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="flex flex-wrap space-x-2 pt-6 pl-12">
            <h2 className="font-medium leading-tight text-3xl mt-0 mb-2 text-slate-900">
              Support Ticket
            </h2>
          </div>
        </div>

        <div className="col-span-1">
          <div className="flex flex-wrap space-x-2 pt-6 pl-12">
            <h2 className="font-medium leading-tight text-3xl mt-0 mb-2 text-slate-900">
              Take Note
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-x-2 divide-gray-300">
        <div className="col-span-2">
          <form>
            <div className="pl-12 pr-12 pt-8 pb-10 ">
              <div className="w-auto grid bg-gray-200 rounded">
                <div className="md:flex md:items-center mb-4 mt-4">
                  <div className="md:w-1/4">
                    <label
                      className="block text-gray-900 font-semibold pl-28 mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Name
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="inline-full-name"
                      type="text"
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-4 mt-4">
                  <div className="md:w-1/4">
                    <label
                      className="block text-gray-900 font-semibold pl-28 mb-1 md:mb-0 pr-4"
                      for="email"
                    >
                      Email
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-4 mt-4">
                  <div className="md:w-1/4">
                    <label
                      className="block text-gray-900 font-semibold pl-28 mb-1 md:mb-0 pr-4"
                      for="type"
                    >
                      Type
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <select className="bg-white border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500">
                      <option selected>Select the type..</option>
                      <option value="1">Type 1</option>
                      <option value="2">Type 2</option>
                      <option value="3">Type 3</option>
                    </select>
                  </div>
                </div>

                <div className="md:flex md:items-center mb-4 mt-4">
                  <div className="md:w-1/4">
                    <label
                      className="block text-gray-900 font-semibold pl-28 mb-1 md:mb-0 pr-4"
                      for="subject"
                    >
                      Subject
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="subject"
                      type="text"
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-4 mt-4">
                  <div className="md:w-1/4">
                    <label
                      className="block text-gray-900 font-semibold pl-28 mb-1 md:mb-0 pr-4"
                      for="description"
                    >
                      Description
                    </label>
                  </div>
                  <div className="md:w-3/4">
                    <textarea
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-4/5 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
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
                  type="button"
                  className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
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

export default Support;
