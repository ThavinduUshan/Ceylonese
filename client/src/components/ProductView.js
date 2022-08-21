import React from "react";
import { Link } from "react-router-dom";
import CategoriesBar from "./CategoriesBar";
import NavBar from "./NavBar";
import mask2 from "../images/mask2.jpg";

const ProductView = () => {
  return (
    <>
      <NavBar />
      <CategoriesBar />
      <div class="grid grid-cols-2 gap-6">
        <div class="p-10 col-span-1 border-r-2">
          <img src={mask2} class="w-auto h-auto" alt="" />
          <div class="flex gap-7">
            <img src={mask2} class="border-gray-800 border w-32 h-32" alt="" />
            <img
              src={mask2}
              class="border-gray-800 border rotate-90 w-32 h-32"
              alt=""
            />
            <img
              src={mask2}
              class="border-gray-800 border rotate-180 w-32 h-32"
              alt=""
            />
            <img src={mask2} class="border-gray-800 border  w-32 h-32" alt="" />
          </div>
          <div class="mt-6">
            <p class="mt-8 text-lg">
              <b>Product Ratings & Reviews</b>
            </p>
            <p class="text-4xl mt-2">4.5/5</p>
            <div class="flex mt-3">
              <img
                class="w-9 h-9"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-9 h-9"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-9 h-9"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-9 h-9"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-9 h-9"
                src="https://laz-img-cdn.alicdn.com/tfs/TB13svEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
            </div>
            <p class="text-gray-500">760 ratings</p>
            <div class="flex mt-6">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />

              <div class="bg-gray-100 h-3 w-44 ml-5 mt-1">
                <div class="h-3 w-36 bg-yellow-400"></div>
              </div>
              <p class="ml-5">604</p>
            </div>
            <div class="flex mt-3">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <div class="bg-gray-100 h-3 w-44 ml-5 mt-1">
                <div class="h-3 w-8 bg-yellow-400"></div>
              </div>
              <p class="ml-5">57</p>
            </div>
            <div class="flex mt-3">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <div class="bg-gray-100 h-3 w-44 ml-5 mt-1">
                <div class="h-3 w-5 bg-yellow-400"></div>
              </div>
              <p class="ml-5">38</p>
            </div>
            <div class="flex mt-3">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <div class="bg-gray-100 h-3 w-44 ml-5 mt-1">
                <div class="h-3 w-2 bg-yellow-400"></div>
              </div>
              <p class="ml-5">14</p>
            </div>
            <div class="flex mt-3">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB18ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png"
                alt=""
              />
              <div class="bg-gray-100 h-3 w-44 ml-5 mt-1">
                <div class="h-3 w-4 bg-yellow-400"></div>
              </div>
              <p class="ml-5">47</p>
            </div>
          </div>

          <div>
            <p class="mt-8 text-lg">
              <b>Reviews</b>
            </p>
            <div class="mt-4 flex">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <p class="ml-64">15 Mar 2022</p>
            </div>
            <p>by Ashan A.</p>
            <p class="mt-3">
              I really love it!, This is second time I bought these nice mask.
              Good quality and It had been packed very safely. Thank you so
              much. Recommend for other buyers also.good luck!
            </p>
            <img class="w-32 h-32" src={mask2} alt="" />

            <div class="mt-4 flex">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <p class="ml-64">6 june 2022</p>
            </div>
            <p>by Priyantha G.</p>
            <p class="mt-3">
              Amazing! Thank you for the quick service and super product.fast
              delivery
              <br />
              Good quality.
            </p>
            <div class="mt-4 flex">
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <img
                class="w-5 h-5"
                src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
                alt=""
              />
              <p class="ml-64">23 July 2022</p>
            </div>
            <p>by Lakshan K.H</p>
            <p class="mt-3">
              Highly recommended the product very happy with is good for the
              price 🛳️❤️
            </p>
            <button class="text-blue-600">see more...</button>
            <br />
            <br />
          </div>
        </div>

        <div class="col-span-1 p-10">
          <p class="text-2xl">
            Lorem Ipsum is simply dummy of text of the printing and type titles
            industry. Loream Ipsum text here
          </p>
          <div class="flex gap-1 mt-1">
            <img
              class="w-5 h-5"
              src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
              alt=""
            />
            <img
              class="w-5 h-5"
              src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
              alt=""
            />
            <img
              class="w-5 h-5"
              src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
              alt=""
            />
            <img
              class="w-5 h-5"
              src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
              alt=""
            />
            <img
              class="w-5 h-5"
              src="https://laz-img-cdn.alicdn.com/tfs/TB14SXtAXOWBuNjy0FiXXXFxVXa-30-30.png"
              alt=""
            />
            <p class="text-gray-400">760 ratings (2567 sold)</p>
            <p class="text-green-500">in-stock</p>
          </div>
          <p class="text-gray-900 text-4xl mt-2">
            <b>USD 50.00</b>
          </p>
          <div class="flex gap-2">
            <p class="text-orange-600 text-xl">USD 62.50</p>
            <p class="mt-0.5">38%</p>
          </div>
          <p class="text-gray-500">Deliver to worldwide</p>
          <form action="" class="mt-5">
            <label for="size">Size *</label>
            <br />
            <input
              class="border border-gray-600 rounded w-60 h-8"
              type="text"
              id="size"
              name="size"
            />
            <br />
            <br />
            <label for="qt">Quantity *</label>
            <br />
            <select class="border border-gray-600 rounded w-60 h-8">
              <option value="1" selected>
                1
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <div class="mt-14">
              <Link to="/cart">
                <button
                  class="rounded font-semibold shadow-lg text-white bg-orange-500 p-2.5 w-60"
                  type="button"
                  value="Add to Cart"
                >
                  Add to Cart
                </button>
              </Link>
              <input
                class="rounded font-semibold shadow-lg text-white bg-gray-900 ml-4 p-2.5 w-60"
                type="submit"
                value="Buy Now"
              />
            </div>
          </form>

          <div class="mt-12">
            <p class="mt-8 text-lg">
              <b>Description</b>
            </p>
            <p>
              The personalized cigar case would be completely customized to your
              request. Which is a great gift for your beloved dad, boyfriend,
              husband, officiant, groomsmen, best man, groom, it's also a good
              choice for bachelor party, birthday, wedding party, holiday,
              anniversary, valentines day, Christmas gift or any other occasion.
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

export default ProductView;
