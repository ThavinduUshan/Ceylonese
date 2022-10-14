import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar";
import CategoriesBar from "../CategoriesBar";
import RatingStars from "./RatingStars";

const AddRating = () => {

  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div className="grid grid-rows-1 mt-8 mx-64">
        <section className="flex flex-wrap justify-center rounded-lg py-8 w-96 mx-auto px-8">
          <div className=" justify-center">
            <h2 className="text-slate-900 font-bold tracking-wide text-4xl">
              {request?.storeName}
            </h2>
          </div>
          <div className="my-8 ">
            <div className="flex justify-center">
              <RatingStars section={true} set={setRating} />
            </div>
            <p className="mt-2 text-center font-italic">
              click here to add a review for store
            </p>
          </div>
        </section>

        <div className="mb-8">
          <section className="flex flex-col items-center bg-gray-50 rounded-lg w-full py-8 mx-auto px-8">
            <div className=" justify-center">
              <h2 className="text-slate-900 font-bold tracking-wide text-2xl">
                {request?.title}
              </h2>
            </div>
            <div className="mt-6 w-fit mx-auto">
              <img
                src={`http://localhost:3500/products/${request?.image1}`}
                className="rounded-full w-28 "
                alt="profile picture"
                srcset=""
              />
            </div>
            <div className="mt-5 flex justify-center">
              <RatingStars section={false} set={setRating} />
            </div>
            <p className="mt-2 text-center font-italic">
              click here to add a review for store
            </p>
            <div className="mt-16 justify-center">
              <textarea
                maxlength="300"
                name="feedback"
                id="feedback"
                rows="4"
                cols="60"
                className="border-0 px-3 py-3 bg-white placeholder-gray-400 text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                placeholder="Give feedback here..."
                value={reviewMsg}
                onChange={(e) => setReviewMsg(e.target.value)}
                required
              ></textarea>
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-center items-center m-8">
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-block w-4/5 px-6 py-2.5 bg-orange-500 text-white text-lg rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-lg transition duration-150 ease-in-out"
        >
          Review & Finish
        </button>
      </div>
    </>
  );
};

export default AddRating;
