import React, { useState, useEffect } from "react";
import Select from "react-select";
import NavBar from "../NavBar";
import mask from "../../images/mask2.jpg";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const GET_MY_PRODUCTS_URL = "sellers/getlistings";
const GET_PRODUCTS_BY_STORE_URL = "sellers/getproductsfromstore";
const REQUEST_PARTNERSHIP_URL = "sellers/partnership/request";

const PartnershipRequest = () => {
  const { auth } = useAuth();
  const myId = auth?.user.sellerID;
  const { id } = useParams();

  const myProducts = [];
  const otherProducts = [];

  const [myProduct, setMyProduct] = useState(null);
  const [otherProduct, setOtherProduct] = useState(null);
  const [storeOwner, setStoreOwner] = useState();
  const [otherDetails, setOtherDetails] = useState({
    description: "",
    myDiscount: "",
  });

  const [errorMsg, setErrorMsg] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const data = {
      sellerID: myId,
    };

    axios.post(GET_MY_PRODUCTS_URL, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        const products = response.data.listings;
        console.log("my product", products);

        products.map((product) => {
          myProducts.push({
            value: product?.productID,
            label: (
              <div className="flex">
                <img
                  src={`http://localhost:3500/products/${product?.image1}`}
                  height="30px"
                  width="30px"
                  className="mr-6"
                />
                <p>{product?.title}</p>
              </div>
            ),
          });
        });
      }
    });
  });

  useEffect(() => {
    const data = {
      storeID: id,
    };

    axios.post(GET_PRODUCTS_BY_STORE_URL, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        const products = response.data.listings;
        const storeOwnerID = response.data.sellerID;

        setStoreOwner(storeOwnerID);

        console.log("other seller", products);

        products.map((product) => {
          otherProducts.push({
            value: product?.productID,
            label: (
              <div className="flex">
                <img
                  src={`http://localhost:3500/products/${product?.image1}`}
                  height="30px"
                  width="30px"
                  className="mr-6"
                />
                <p>{product?.title}</p>
              </div>
            ),
          });
        });
      }
    });
  });

  const sendPartnershipRequest = (e) => {
    e.preventDefault();
    {
      !myProduct
        ? setErrorMsg("You need to select a product from your list")
        : !otherProduct
        ? setErrorMsg("You need to select a product from other seller list")
        : !otherDetails.description
        ? setErrorMsg("you need to add a description")
        : !otherDetails.myDiscount
        ? setErrorMsg("You need to add a discount for your product")
        : isNaN(otherDetails.myDiscount)
        ? setErrorMsg("Discount must be an Number")
        : setErrorMsg(false);
      const data = {
        senderID: myId,
        senderProduct: myProduct.value,
        receiverID: id,
        receiverProduct: otherProduct.value,
        description: otherDetails.description,
        senderDiscount: otherDetails.myDiscount,
      };

      axios.post(REQUEST_PARTNERSHIP_URL, data).then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
          setMyProduct("");
          setOtherProduct("");
          setOtherDetails({
            description: "",
            myDiscount: "",
          });
        }
      });
    }
  };

  return (
    <>
      <NavBar />
      <h1 className="text-3xl m-20 font-bold">
        Start a partnership with #Anil Handicrafts
      </h1>
      {success && (
        <>
          <div className="flex mt-5 px-3 py-2 bg-green-100 mx-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#16a34a"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-sm text-green-500">
              Partnership Request has been Successfully sent!
            </p>
          </div>
        </>
      )}
      {errorMsg && (
        <>
          <div className="flex mt-2 px-3 py-2 bg-red-100 mx-20">
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
            <p className="bg-red-100 text-sm text-red-500">{errorMsg}</p>
          </div>
        </>
      )}
      <div className="grid grid-cols-2 m-20">
        <div className="border-white border-2 border-r-gray-300">
          <h2 className="font-bold text-xl">Your Info</h2>
          <div className=" mt-10 mr-10">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Leave a comment..."
              value={otherDetails.description}
              onChange={(e) =>
                setOtherDetails({
                  ...otherDetails,
                  description: e.target.value,
                })
              }
            ></textarea>
          </div>

          <div className="mt-10 mr-10">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Selected Product
            </label>
            <Select
              defaultValue={myProduct}
              onChange={setMyProduct}
              options={myProducts}
            />
          </div>

          <div className="mt-10 mr-10">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Discount
            </label>
            <input
              type="text"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder=""
              value={otherDetails.myDiscount}
              onChange={(e) =>
                setOtherDetails({
                  ...otherDetails,
                  myDiscount: e.target.value,
                })
              }
            ></input>
          </div>
        </div>

        <div className="pl-16">
          <h2 className="font-bold text-xl">Other Seller's Info</h2>
          <div className="mt-10 mr-10">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Interested Product
            </label>
            <Select
              defaultValue={otherProduct}
              onChange={setOtherProduct}
              options={otherProducts}
            />
          </div>
        </div>

        <div className="grid col-span-2 place-items-end h-30 m-10">
          <button
            onClick={sendPartnershipRequest}
            className="bg-gray-900 rounded-md text-white p-3 place-content-end"
          >
            Send Request
          </button>
        </div>
      </div>
    </>
  );
};

export default PartnershipRequest;
