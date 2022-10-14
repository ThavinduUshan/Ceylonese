import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import NavBar from "../NavBar";
const ACCEPT_PARTERSHIP_URL = "sellers/partnerships/accept";
const REJECT_PARTERSHIP_URL = "sellers/partnerships/reject";

const PartnershipAccept = () => {
  const [partnership, setPartnership] = useState();
  const [myDiscount, setMyDiscount] = useState();
  const [isError, setIsError] = useState(false);

  const navigateTo = useNavigate();

  const acceptPartnership = (e) => {
    e.preventDefault();
    if (myDiscount) {
      const data = {
        partnershipID: partnership.partnershipID,
        myDiscount: myDiscount,
      };

      axios.post(ACCEPT_PARTERSHIP_URL, data).then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          console.log(response.data.success);
          setPartnership("");
          setMyDiscount("");
          navigateTo("/sellers/partnerships/active");
        }
      });
    } else {
      setIsError(true);
    }
  };

  const { id } = useParams();
  const GET_PARTNERSHIP_INFO_URL = `sellers/partnership/${id}`;

  useEffect(() => {
    axios.get(GET_PARTNERSHIP_INFO_URL).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        const partnership = response.data.partnership;
        setPartnership(partnership);
        console.log(partnership);
      }
    });
  }, []);
  return (
    <>
      <NavBar />
      <h1 className="text-3xl m-20 font-bold">
        Start a partnership with #Anil Handicrafts
      </h1>

      <div className="grid grid-cols-2 m-20">
        <div className="border-r-gray-300 border-2 border-white">
          <h2 className=" text-xl font-bold">Other's Seller Info</h2>

          <div className=" mt-10 mr-10">
            <label
              for="message"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Description
            </label>

            <p className="mt-2">
              {partnership?.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsa explicabo hic blanditiis suscipit eaque
              facere a culpa quo aliquam repudiandae. Est distinctio
              perspiciatis sed aut veniam sit corporis, aliquid consequatur?
            </p>
          </div>

          <div className="mt-10 mr-10">
            <label
              for="message"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Other Seller's Product
            </label>
            <div className="flex items-center bg-gray-50 px-10 py-5 mt-5 rounded-lg">
              <img
                src={`http://localhost:3500/products/${partnership?.senderProductImage}`}
                alt="photo"
                className="w-20 mr-5"
              />
              <p className="font-medium">{partnership?.senderProductName}</p>
            </div>
          </div>

          <div className="mt-10 mr-10">
            <label
              for="message"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Other Seller Discount
            </label>
            <input
              type="text"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mt-5 "
              value={partnership?.senderDiscount}
            />
          </div>
        </div>
        <div className="pl-16">
          <h2 className="font-bold text-xl">Your Info</h2>
          <div className="mt-10 mr-10">
            <label
              for="message"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Interested Product
            </label>
            <div className="flex items-center bg-gray-50 px-10 py-5 mt-5 rounded-lg">
              <img
                src={`http://localhost:3500/products/${partnership?.receiverProductImage}`}
                alt="photo"
                className="w-20 mr-5"
              />
              <p className="font-medium">{partnership?.receiverProductName}</p>
            </div>
          </div>
          <div className="mt-10 mr-10">
            <label
              for="message"
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Add your Discount
            </label>
            <input
              type="number"
              className="block p-2.5 mt-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              value={myDiscount}
              onChange={(e) => {
                e.preventDefault();
                setIsError(false);
                setMyDiscount(e.target.value);
              }}
            ></input>
            {isError && (
              <>
                <div className="flex justify-center w-full mt-5 mb-5 px-3 py-2 bg-red-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#dc2626"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="bg-red-100 text-sm  text-red-500">
                    Name and Value must be filled!
                  </p>
                </div>
              </>
            )}
          </div>
          <div className="grid col-span-2 place-items-end h-24 m-10">
            <div className="flex flex-row">
              <button
                onClick={rejectPartnership}
                className=" mr-10 bg-gray-900 rounded-md text-white p-3 place-content-end"
              >
                Cancel Request
              </button>
              <button
                onClick={acceptPartnership}
                className="bg-orange-500 rounded-md text-white p-3 place-content-end"
              >
                Send Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipAccept;
