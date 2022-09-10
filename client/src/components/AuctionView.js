import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "../api/axios";
import CategoriesBar from "./CategoriesBar";
import NavBar from "./NavBar";
import useAuth from "../hooks/useAuth";

const AuctionView = () => {
  const { id } = useParams();
  const { auth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const GET_AUCTION_DETAILS_URL = `root/getauctions/${id}`;

  const [auction, setAuction] = useState();
  const [bidAmount, setBidAmount] = useState();
  const [remainingTime, setRemainingTime] = useState([0, 0, 0, 0]);

  const calculateRemaningTime = (endDate) => {
    endDate = "2022-09-12T18:30:00.000Z";
    const countDown = new Date(endDate).getTime();

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    setInterval(function () {
      const now = new Date().getTime();
      const distance = countDown - now;
      const days = Math.floor(distance / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      setRemainingTime([days, hours, minutes, seconds]);
    }, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!auth?.user) {
      navigate("/buyers/login", {
        state: { from: { pathname: location.pathname } },
        replace: true,
      });
    } else {
      const data = {
        auctionID: id,
        buyerID: auth.user.id,
        bidAmount: bidAmount,
      };
    }
  };

  useEffect(() => {
    axios.get(GET_AUCTION_DETAILS_URL).then((response) => {
      console.log(response.data.auction);
      setAuction(response.data.auction);
      calculateRemaningTime(response.data.auction.endDate);
    });
  }, []);

  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-1 border-r-2 my-10 sticky top-0 left-0 h-screen px-20">
          <img
            src={`http://localhost:3500/products/${auction?.image1}`}
            className="w-auto h-auto"
            alt=""
          />
          <div className="mt-5 flex justify-between">
            <img
              src={`http://localhost:3500/products/${auction?.image2}`}
              className="border-gray-800 border rounded-lg w-32 h-32"
              alt=""
            />
            <img
              src={`http://localhost:3500/products/${auction?.image3}`}
              className="border-gray-800 border rounded-lg  w-32 h-32"
              alt=""
            />
            <img
              src={`http://localhost:3500/products/${auction?.image4}`}
              className="border-gray-800 border rounded-lg w-32 h-32"
              alt=""
            />
            <img
              src={`http://localhost:3500/products/${auction?.image5}`}
              className="border-gray-800 border rounded-lg  w-32 h-32"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-1 p-10">
          <p className="text-2xl">{auction?.title}</p>
          <div className="flex gap-1 mt-1">
            <p className="bg-green-500 text-white mt-2 px-3 py-1 rounded text-sm">
              Current Bid is at
            </p>
          </div>
          <p className="text-gray-900 text-5xl mt-2">
            <b>USD 58.00</b>
          </p>

          <p className="text-gray-500">Deliver to worldwide</p>

          {remainingTime[0] < 0 &&
          remainingTime[1] < 0 &&
          remainingTime[2] < 0 &&
          remainingTime[3] < 0 ? (
            <>
              <div className="flex mt-8 items-center mt-2 px-3 py-2 bg-red-100">
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
                  Auction has ended!
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="flex gap-5 mt-8">
                <div>
                  <span className="countdown font-mono text-5xl">
                    {remainingTime[0]}
                  </span>
                  days
                </div>
                <div>
                  <span className="countdown font-mono text-5xl">
                    {remainingTime[1]}
                  </span>
                  hours
                </div>
                <div>
                  <span className="countdown font-mono text-5xl">
                    {remainingTime[2]}
                  </span>
                  min
                </div>
                <div>
                  <span className="countdown font-mono text-5xl">
                    {remainingTime[3]}
                  </span>
                  sec
                </div>
              </div>
            </>
          )}

          <form onSubmit={handleSubmit} className="mt-14">
            <p className="font-medium text-green-500 mb-3">
              Minimum amount for next bid :
            </p>
            <input
              className="w-4/5 border border-gray-800 rounded px-5 py-3"
              type="number"
              name="bidamount"
              value={bidAmount}
              onChange={(e) => {
                e.preventDefault();
                setBidAmount(parseInt(e.target.value));
              }}
            />
            <div class="mt-5">
              <button
                className="rounded font-semibold shadow-lg text-white bg-orange-500 p-2.5 w-60"
                type="type"
                value="Add to Cart"
              >
                Place Bid
              </button>
            </div>
          </form>
          <div class="mt-12">
            <p class="mt-8 text-lg">
              <b>Description</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              ullam suscipit voluptatem repellat eius quisquam ratione
              architecto recusandae eum quas, consectetur, voluptate delectus
              libero, repudiandae rerum blanditiis! Nisi, laborum modi.
            </p>
            <p class="mt-8 text-lg">
              <b>SHIPPING</b>
            </p>
            <p>
              I accept orders from all over the world, and I'm working hard to
              make sure your order shipped out as soon as possible. Depending on
              my work load, the processing time may vary from 3 to 5 business
              days. Feel free to contact me if you would like to find out the
              lead time for a specific item you are interested in.
            </p>
            <p class="mt-2 underline text-gray-500">Estimated arrival</p>
            <p class="text-xl text-gray-600">Sep 23-29</p>
            <p class="mt-2 underline text-gray-500">Cost to ship</p>
            <p class="text-xl text-gray-600">USD 4.99</p>
            <p class="mt-5">RETURN AND EXCHANGE:</p>
            <p>
              Please feel free to contact me if there are any problems after you
              got my products, Replacement is free of charge if item comes
              damaged.
            </p>

            <p class="mt-6">
              <b>
                ****************************CONTACT_ME***************************
              </b>
            </p>
            <p class="mt-4">
              * For any further information or wholesale orders contact me at
              any time.
            </p>
            <p class="mt-4">
              * Please allow me to reply you within 24hrs (Monday-Friday). I
              will do my best to answer you quickly and accurately.
            </p>
            <p class="mt-4">
              * If you do not receive my reply, please kindly re-sent your email
              and I will reply to you as soon as possible. Thanks.
            </p>

            <p class="mt-5">
              <b>Meet your sellers</b>
            </p>
            <div class="mt-4 flex">
              <img
                src="https://i.etsystatic.com/isla/a37ea4/42486621/isla_75x75.42486621_m57y49qe.jpg?version=0"
                alt=""
              />
              <p class="ml-4 mt-2 text-xl">
                <b>Kayla</b>
                <br />
                Owner of SunFayStudioCo
              </p>
            </div>
            <button class="mt-6 ml-0 rounded font-semibold shadow-lg text-white bg-gray-900 p-2.5 w-60">
              Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuctionView;
