import React, { useState, useEffect } from "react";
import axios from "../../../api/axios";
import { useParams } from "react-router-dom";
import NavBar from "../../NavBar";
import ModeratorSideBar from "./ModeratorSideBar";

const SellerRequestDetails = () => {
  const { id } = useParams();

  const [request, setRequest] = useState();

  const GET_SELLER_REQUESTS_URL = `moderators/sellerrequests/${id}`;
  console.log(GET_SELLER_REQUESTS_URL);

  const SELLER_REQUEST_ACCEPT_URL = "moderators/sellerrequests/accept";
  const SELLER_REQUEST_REJECT_URL = "moderators/sellerrequests/reject";

  useEffect(() => {
    axios.get(GET_SELLER_REQUESTS_URL).then((response) => {
      setRequest(response.data.request);
      console.log(response.data.request);
    });
  }, []);

  const sendSuccessEmail = (e) => {
    e.preventDefault();
    let data = {
      service_id: "service_esmvt5i",
      template_id: "template_scq6tah",
      user_id: "7v0_CisEp31iy063a",
      template_params: {
        to_email: `${request?.email}`,
        to_name: `${request?.ownersName}`,
      },
    };

    axios
      .post(
        "https://api.emailjs.com/api/v1.0/email/send",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        console.log("Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const sendRejectEmail = (e) => {
    e.preventDefault();
    let data = {
      service_id: "service_esmvt5i",
      template_id: "template_obs382n",
      user_id: "7v0_CisEp31iy063a",
      template_params: {
        to_email: `${request?.email}`,
        to_name: `${request?.ownersName}`,
      },
    };

    axios
      .post(
        "https://api.emailjs.com/api/v1.0/email/send",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        console.log("Success!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReject = (e) => {
    e.preventDefault();
    axios.post(SELLER_REQUEST_REJECT_URL, request).then((response) => {
      console.log(response);
      // sendRejectEmail();
    });
  };

  const handleAccept = (e) => {
    e.preventDefault();
    axios.post(SELLER_REQUEST_ACCEPT_URL, request).then((response) => {
      console.log(response);
      sendSuccessEmail();
    });
  };

  return (
    <>
      <NavBar />
      <main className="grid grid-cols-5">
        <div className="col-span-1 " aria-label="Sidebar">
          <ModeratorSideBar />
        </div>
        <section className="m-4 col-span-4">
          <div className="m-20 text-4xl text-gray-700">
            {request?.storeName}
          </div>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg m-20">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Requesting Seller Account
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and shop details.
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Owner Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {request?.ownersName}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Shop Name
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {request?.storeName}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {request?.email}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Contact No
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {request?.ownersContactNo}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Home Address/Shop Address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {request?.ownersAddress}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    National Id No
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {request?.verificationNo}
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Attachments
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <ul
                      role="list"
                      className="border border-gray-200 rounded-md divide-y divide-gray-200"
                    >
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <img
                            src={
                              request &&
                              `http://localhost:3500/docs/${request?.verificationDocs[0]}`
                            }
                          ></img>
                        </div>
                      </li>
                      <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                        <div className="w-0 flex-1 flex items-center">
                          <img
                            src={
                              request &&
                              `http://localhost:3500/docs/${request?.verificationDocs[1]}`
                            }
                          ></img>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="my-10 float-right ">
              <button
                onClick={handleReject}
                className="mx-5 bg-gray-700 h-12 px-12 text-white rounded-md"
              >
                Reject Request
              </button>
              <button
                onClick={handleAccept}
                className="mx-5 bg-orange-500 h-12 px-12 text-white rounded-md"
              >
                Accept Request
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SellerRequestDetails;
