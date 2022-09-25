import React, { useState } from "react";

const AddressForm = () => {
  
  return (
    <>
      <div className="w-full md:w-96 md:max-w-full mx-auto">
        <div className="p-6 border border-gray-300 sm:rounded-md">
          <form
            method="POST"
            action="https://herotofu.com/start"
            enctype="multipart/form-data"
          >
            <label className="block mb-6">
              <span className="text-gray-700">Email</span>
              <input
                name="email"
                type="text"
                className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Address line 1</span>
              <input
                name="address1"
                type="text"
                className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder=""
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Address line 2</span>
              <input
                name="address2"
                type="text"
                className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">City</span>
              <input
                name="city"
                type="text"
                className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder=""
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">State/Province</span>
              <input
                name="state"
                type="text"
                className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder=""
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Zip/Postal code</span>
              <input
                name="zip"
                type="text"
                className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder=""
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Country</span>
              <input
                name="country"
                type="text"
                className="
            block
            w-full
            mt-3
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder=""
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700">Telephone</span>
              <input
                name="telephone"
                type="text"
                className="
            block
            w-full
            mt-1
            px-5
            py-3
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder=""
              />
            </label>

            <div className="mb-6">
              <button
                type="submit"
                className="
            h-10
            px-5
            text-indigo-100
            bg-orange-500
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-orange-600
          "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddressForm;
