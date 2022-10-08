import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api/axios";
import CategoriesBar from "./CategoriesBar";
import NavBar from "./NavBar";
import vector from "../images/vector.jpg";
import useCart from "../hooks/useCart";
import StarComponent from "./StarComponent";

const GET_REVIEWS_URL = "root/reviews/product";

const ProductView = () => {
  const { cart, setCart } = useCart();

  const { id } = useParams();
  const GET_PRODUCT_DETAILS_URL = `root/getproducts/${id}`;

  const [product, setProduct] = useState();
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [qt, setQt] = useState(1);
  const [reviewAverage, setReviewAverage] = useState(2);
  const [reviews, setReviews] = useState();
  const [cartSuccess, setCartSuccess] = useState(false);

  useEffect(() => {
    axios.get(GET_PRODUCT_DETAILS_URL).then((response) => {
      console.log(response.data.product);
      setProduct(response.data.product);
      setReviewAverage();
    });
  }, []);

  useEffect(() => {
    const data = {
      productID: id,
    };
    axios.post(GET_REVIEWS_URL, data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        const reviews = response.data.reviews;
        console.log(reviews);
        setReviews(reviews);
      }
    });
  }, []);

  const addToCart = (e) => {
    e.preventDefault();

    let itemCount = cart.count;
    const isItemAlreadyAdded = cart.cartItems.some(
      (item) => item.productID == product.productID
    );

    if (isItemAlreadyAdded) {
      setCartSuccess(true);
      // setAlreadyAdded(true);
      // setTimeout(() => {
      //   setAlreadyAdded(false);
      // }, 3000);
      setTimeout(() => {
        setCartSuccess(false);
      }, 1000);
    } else {
      console.log(product);
      let items = cart.cartItems.push(product);
      setCart({ ...cart, cartItems: items });
      setCart({
        ...cart,
        count: ++itemCount,
      });
      setCartSuccess(true);
      setTimeout(() => {
        setCartSuccess(false);
      }, 1000);
    }
  };

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
            {reviews ? (
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
          <p class="text-gray-900 text-4xl mb-2">
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

export default ProductView;
