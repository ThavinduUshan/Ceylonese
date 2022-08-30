import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import CategoriesBar from "./CategoriesBar";
import NavBar from "./NavBar";
import SearchAuctionsSideBar from "./SearchAuctionsSideBar";

const GET_AUCTIONS_URL = "root/getauctions";

const SearchAuctions = (props) => {
  const [auctionList, setAuctionList] = useState();

  useEffect(() => {
    axios.get(GET_AUCTIONS_URL).then((response) => {
      console.log(response.data.auctions);
      setAuctionList(response.data.auctions);
    });
  });

  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div className="grid grid-cols-5">
        <SearchAuctionsSideBar set={props.set} />
        <div className="col-span-4">
          <section className="flex flex-wrap mx-auto p-8">
            {auctionList?.map((auction) => {
              return (
                <div
                  key={auction.auctionID}
                  className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
                >
                  <Link
                    to={`/auction/${auction.auctionID}`}
                    className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
                  >
                    <div className="relative pb-48 overflow-hidden">
                      <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={`http://localhost:3500/products/${auction.image1}`}
                        alt="product"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="mt-2 mb-2  font-bold">{auction.title}</h2>
                      <p className="text-sm">{auction.description}</p>

                      <div className="mt-2 flex items-center">
                        <span className="text-sm font-semibold">USD</span>
                        &nbsp;
                        <span className="font-bold text-xl">
                          {auction.startingPrice}
                        </span>
                        &nbsp;
                        <span className="text-sm font-semibold">$</span>
                      </div>
                      <div className="mt-3 flex items-center">
                        <span className="text-sm font-semibold">
                          Added by {auction.storeName}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default SearchAuctions;
