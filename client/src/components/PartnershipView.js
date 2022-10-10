import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import CategoriesBar from "./CategoriesBar";
import NavBar from "./NavBar";
import useCart from "../hooks/useCart";
import StarComponent from "./StarComponent";
import vector from "../images/vector.jpg";

const PartnershipView = () => {
  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div class="grid grid-cols-2 gap-6">
        <div class="p-10 col-span-1 border-r-2">
          <Link to="/support">
            <span class="bg-red-200 py-2 text-red-800 text-xs mb-5 font-medium inline-flex items-center px-2.5 rounded mr-2 ">
              <svg
                aria-hidden="true"
                class="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Report Item #{id}
            </span>
          </Link>
          <img
            src={`http://localhost:3500/products/${product?.image1}`}
            class="w-auto h-auto"
            alt=""
          />
          <div class="mt-5 flex justify-between">
            <img
              src={`http://localhost:3500/products/${product?.image2}`}
              class="border-gray-800 border rounded-lg w-32 h-32"
              alt=""
            />
            <img
              src={`http://localhost:3500/products/${product?.image3}`}
              class="border-gray-800 border rounded-lg  w-32 h-32"
              alt=""
            />
            <img
              src={`http://localhost:3500/products/${product?.image4}`}
              class="border-gray-800 border rounded-lg w-32 h-32"
              alt=""
            />
            <img
              src={`http://localhost:3500/products/${product?.image5}`}
              class="border-gray-800 border rounded-lg  w-32 h-32"
              alt=""
            />
          </div>

          <div>
            <p class="my-12 text-3xl">
              <b>Reviews & Ratings</b>
            </p>
            {reviews?.reviewCount ? (
              <>
                {reviews.map((review) => {
                  return (
                    <div key={review.id}>
                      <div class="mt-4 flex">
                        <div className="flex">
                          <StarComponent
                            width={5}
                            rating={review.productRating}
                          />
                          <p className="text-sm ml-5 bg-yellow-300 px-3 py-1 font-bold rounded-md">
                            {review.productRating} Stars
                          </p>
                        </div>

                        <p class="ml-96">
                          On{" "}
                          {new Date(review.date).getDate() +
                            "-" +
                            (new Date(review.date).getMonth() + 1) +
                            "-" +
                            new Date(review.date).getFullYear()}
                        </p>
                      </div>
                      <p>{review.username}</p>
                      <p class="mt-3">{review.review}</p>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center ml-8 mr-4 mt-5 px-3 py-10 bg-gray-100">
                  <p className="text-lg text-gray-300">No Reviews to Display</p>
                </div>
              </>
            )}
          </div>
        </div>

        <div class="col-span-1 p-10">
          <p class="text-2xl">{product?.title}</p>
          <div class="flex gap-1 mt-1">
            <StarComponent width={8} rating={product?.averageRating} />
            <p class="mt-1 text-gray-400">
              {product?.averageRating == "0" ? product?.averageRating : 0} Out
              of 5 Stars
            </p>
            <p class="mt-1 ml-3 text-green-500">in-stock</p>
          </div>
          <p class="text-gray-900 text-4xl mt-2">
            <b>USD {product?.price}.00</b>
          </p>

          <p class="text-gray-500">Deliver to worldwide</p>
          <form action="" class="mt-5">
            <br />
            <label htmlFor="qt" className="mb-5">
              Quantity *
            </label>
            <br />
            <input
              type="number"
              class="mt-5 px-5 py-3 border border-gray-600 rounded w-20 h-10"
              value={qt}
              onChange={(e) => {
                setQt(e.target.value);
                setProduct({ ...product, qt: e.target.value });
              }}
            />
            <div className="flex justify-start w-full mt-5 mb-5 px-3 py-2 bg-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000"
                class="w-5 h-5 mr-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>

              <p className=" text-sm  text-black">
                Flash Deal! You get <span>{partnershipProduct?.discount}%</span>{" "}
                off from the below product if you buy both together
              </p>
            </div>

            <div class="flex mb-3">
              <div class="flex items-center h-5">
                <input
                  id="helper-radio"
                  aria-describedby="helper-radio-text"
                  type="radio"
                  checked={isPartnershipSelected}
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-orange-500 "
                  onClick={() => setIsPartnershipSelected((prev) => !prev)}
                />
              </div>
              <div class="ml-2 text-sm">
                <label for="helper-radio" class="font-medium text-gray-900 ">
                  Click here to Buy Both Items
                </label>
                <p
                  id="helper-radio-text"
                  class="text-xs font-normal text-gray-500 "
                >
                  {partnershipProduct?.discount}% off from this product if you
                  buy both together
                </p>
              </div>
            </div>

            <div className="grid grid-cols-5 h-36 text-center mt-8 mb-2 bg-gray-50 shadow-md rounded-md">
              <div className="flex justify-center font-medium items-center col-span-1">
                <img
                  src={`http://localhost:3500/products/${partnershipProduct?.image1}`}
                  class=" h-30 ml-10"
                  alt="image"
                />
              </div>
              <div className="flex justify-start ml-10 font-medium items-center col-span-2">
                <p class="block text-left ">{partnershipProduct?.title}</p>
              </div>

              <div className="flex justify-center font-medium items-center w-full  col-span-1">
                <p class="block text-left ">
                  <span className="line-through text-red-500">
                    $
                    {partnershipProduct?.priceBeforDiscount &&
                      parseFloat(partnershipProduct.priceBeforDiscount).toFixed(
                        2
                      )}
                  </span>
                  <sup className="ml-2">
                    {partnershipProduct?.discount}% off
                  </sup>
                </p>
              </div>
              <div className="flex justify-center font-medium items-center w-full col-span-1">
                <p class="block text-green-500  text-2xl">
                  $
                  {partnershipProduct?.price &&
                    partnershipProduct.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div class="mt-14">
              <button
                class="rounded font-semibold shadow-lg text-white bg-orange-500 p-2.5 w-60"
                type="button"
                value="Add to Cart"
                onClick={addToCart}
              >
                Add to Cart
              </button>
              <input
                class="rounded font-semibold shadow-lg text-white bg-gray-900 ml-4 p-2.5 w-60"
                type="submit"
                value="Buy Now"
              />
            </div>
          </form>

          {cartSuccess && (
            <>
              <div className="flex mt-5 px-3 py-2 bg-green-100">
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
                <p className="text-sm text-green-500">Item Added to the Cart</p>
              </div>
            </>
          )}

          {alreadyAdded && (
            <>
              <div className="flex mt-5 px-3 py-2 bg-green-100">
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
                  Item Already In the Cart
                </p>
              </div>
            </>
          )}

          <div class="mt-12">
            <p class="mt-8 text-lg">
              <b>Description</b>
            </p>
            <p>{product?.description}</p>
            <p class="mt-8 text-lg">
              <b>Shipping</b>
            </p>
            <p>
              I accept orders from all over the world, and I'm working hard to
              make sure your order shipped out as soon as possible. Depending on
              my work load, the processing time may vary from 3 to 5 business
              days. Feel free to contact me if you would like to find out the
              lead time for a specific item you are interested in.
            </p>
            <p class="mt-3 font-medium text-gray-500">
              Estimated arrival within
            </p>
            <p class="text-xl text-gray-600">{product?.shippingTime} Days</p>
            <p class="mt-3 font-medium text-gray-500">Shipping Cost</p>
            <p class="text-xl text-gray-600">
              USD {parseFloat(product?.shippingPrice).toFixed(2)}
            </p>
            <p class="mt-5 m">Returns and Refunds:</p>
            <p>
              Please feel free to contact me if there are any problems after you
              got my products, Replacement is free of charge if item comes
              damaged.
            </p>

            <p class="mt-6"></p>
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
            <div>
              <Link
                to={`/sellers/store/${product?.storeID}`}
                className="mt-4 flex"
              >
                <img src={vector} alt="seller-image" className="h-16 rounded" />
                <p class="ml-4 mt-2 text-xl">
                  <b>{product?.storeName}</b>
                  <br />
                </p>
              </Link>
            </div>
            <button class="mt-6 ml-0 rounded font-semibold shadow-lg text-white bg-gray-900 p-2.5 w-60">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipView;
