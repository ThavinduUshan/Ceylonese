import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import NavBar from "../NavBar";
import useAuth from "../../hooks/useAuth";

const UPLOAD_URL = "upload/auctions";
const ADD_AUCTION_URL = "sellers/addauction";

const AddListingAuction = (props) => {
  const { auth } = useAuth();

  const navigateTo = useNavigate();

  const [listings, setListings] = useState({
    title: "",
    description: "",
    type: props.type,
    category: "",
    subCategory: "",
  });

  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();

  const [attributes, setAttributes] = useState([]);
  const [attributeCount, setAttributeCount] = useState(0);
  const [addAttribute, setAddAttribute] = useState({
    name: "",
    value: "",
  });
  const [addAttributeStatus, setAddAttributeStatus] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);

  const [images, setImages] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
  });

  const [imageNames, setImageNames] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
  });

  const [auction, setAuction] = useState({
    stPrice: "",
    duration: "",
  });

  const [shipping, setShipping] = useState({
    shipTo: "",
    shippingTime: "",
    shippingPrice: "",
  });

  const [uploadPrecentage, setUploadPrecentage] = useState(0);
  const [isFilesUploaded, setIsFileUploaded] = useState(false);
  const [success, setSuccess] = useState(false);

  const changeType = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    props.set(parseInt(e.target.value));
  };

  const handleSelectCategory = (e) => {
    e.preventDefault();

    setCategory(parseInt(e.target.value));
    setListings({ ...listings, category: parseInt(e.target.value) });
  };

  const handleSelectSubCategory = (e) => {
    e.preventDefault();

    setSubCategory(parseInt(e.target.value));
    setListings({ ...listings, subCategory: parseInt(e.target.value) });
  };

  const addNewAttribute = (e) => {
    e.preventDefault();
    if (addAttribute.name && addAttribute.value) {
      setAttributeCount((prevCount) => prevCount + 1);
      setAddAttributeStatus(false);
      setAttributes([...attributes, addAttribute]);
    } else {
      setEmptyInput(true);
      setTimeout(() => {
        setEmptyInput(false);
      }, 3000);
    }
  };

  const deleteAttribute = (index, e) => {
    e.preventDefault();
  };

  const uploadImages = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    //adding images
    formData.append(images.image1.name, images.image1);
    formData.append(images.image2.name, images.image2);
    formData.append(images.image3.name, images.image3);
    formData.append(images.image4.name, images.image4);
    formData.append(images.image5.name, images.image5);

    try {
      const res = await axios.post(UPLOAD_URL, formData, {
        headers: {
          "Contet-Type": "multipart/form-data",
        },
        onUploadProgress: (ProgressEvent) => {
          setUploadPrecentage(
            parseInt(
              Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            )
          );
          setTimeout(() => {
            setUploadPrecentage(0);
          }, 10000);
        },
      });

      console.log(res.data);

      setIsFileUploaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const time = Date.now() + parseInt(auction.duration) * 1000 * 60 * 60 * 24;
    const date = new Date(time);

    const endDate =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    const endTime =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    let data = {
      sellerID: auth.user.sellerID,
      title: listings.title,
      description: listings.description,
      type: props.type,
      category: listings.category,
      subCategory: listings.subCategory,
      attributes: attributes,
      stPrice: auction.stPrice,
      duration: auction.duration,
      endDate: endDate,
      endTime: endTime,
      shipTo: shipping.shipTo,
      shippingTime: shipping.shippingTime,
      shippingPrice: shipping.shippingPrice,
      image1: images.image1.name,
      image2: images.image2.name,
      image3: images.image3.name,
      image4: images.image4.name,
      image5: images.image5.name,
    };

    console.log(data);

    try {
      await axios.post(ADD_AUCTION_URL, data).then((res) => {
        if (res.data.error) {
          console.log(`${res.data.error}`);
        } else {
          setSuccess(true);
          setImages({
            image1: "",
            image2: "",
            image3: "",
            image4: "",
            image5: "",
          });
          setListings({
            title: "",
            description: "",
            type: 1,
            category: "",
            subCategory: "",
          });

          setAttributes([]);
          setAttributeCount(0);
          setAddAttribute({
            name: "",
            value: "",
          });
          setAddAttributeStatus(false);

          setAuction({
            stPrice: "",
            duration: "",
          });

          setShipping({
            shipTo: "",
            shippingTime: "",
            shippingPrice: "",
          });
          navigateTo("/sellers/profile/listings");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <main className="grid grid-cols-1">
        <form onSubmit={handleSubmit} method="POST">
          <div className="p-20 ">
            <div className="flex flex-wrap space-x-2 pt-4">
              <div className="flex pl-4">
                <Link
                  to="/sellers/profile/listings"
                  className="inline-flex items-center h-10 px-5 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm"
                >
                  <svg
                    className="w-4 h-4 mr-3 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span>Back to listings</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap space-x-2 pt-6 pl-4 mb-5">
              <h2 className="font-medium leading-tight text-3xl mt-0 mb-2 text-gray-900">
                Add a new Auction
              </h2>
            </div>

            <div className=" pt-14 pb-10 ">
              <div className="w-auto bg-gray-200 rounded">
                <h2 className="font-medium leading-tight text-2xl pt-4 pl-8 pb-4 text-gray-900">
                  Listing Details
                </h2>
              </div>

              <div className="w-auto pb-10 mb-6 grid bg-gray-200 rounded-lg">
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="inline-full-name"
                    >
                      Product Title*
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12">
                      add a titile which suits best for your product
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="inline-full-name"
                      type="text"
                      value={listings.title}
                      onChange={(e) =>
                        setListings({
                          ...listings,
                          title: e.target.value,
                        })
                      }
                      placeholder="Product Title"
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="about"
                    >
                      Description*
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12">
                      Start with a brief overview that describes finest features
                      of the product
                    </p>
                  </div>
                  <div className="md:w-2/3">
                    <textarea
                      rows={8}
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="about"
                      type="text"
                      value={listings.description}
                      onChange={(e) =>
                        setListings({
                          ...listings,
                          description: e.target.value,
                        })
                      }
                      placeholder="Add a Description which describe your product best!"
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="protime"
                    >
                      Listing Type*
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12">
                      Select Auction if you want to list this item on an auction
                    </p>
                  </div>
                  <div className="md:w-2/5">
                    <div className="flex">
                      <div className="flex items-center mb-4">
                        <input
                          id="buynow"
                          type="radio"
                          value={0}
                          name="selecttype"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={changeType}
                        />
                        <label
                          htmlFor="buynow"
                          className="ml-2 text-sm font-medium text-gray-700 "
                        >
                          Buy Now
                        </label>
                      </div>
                      <div className="flex items-center ml-10 mb-4">
                        <input
                          id="auction"
                          type="radio"
                          checked
                          name="selecttype"
                          value={1}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={changeType}
                        />
                        <label
                          for="auction"
                          className="ml-2 text-sm font-medium text-gray-700 "
                        >
                          Auction
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="category"
                    >
                      Category*
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12"></p>
                  </div>
                  <div className="md:w-2/5">
                    <select
                      className="bg-white border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-400  focus:bg-white focus:border-gray-500"
                      id="category"
                      onChange={handleSelectCategory}
                    >
                      <option value="0" aria-readonly>
                        Select a Category
                      </option>
                      <option value="1">Home & Living</option>
                      <option value="2">Outdoor & Garden</option>
                      <option value="3">Arts & Crafts</option>
                      <option value="4">Gift Ideas</option>
                      <option value="5">Ornaments and Clothing</option>
                    </select>
                  </div>
                </div>

                {category === 0 && <></>}

                {category == 1 && (
                  <>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                          htmlFor="subcategory"
                        >
                          SubCategory*
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12"></p>
                      </div>
                      <div className="md:w-2/5">
                        <select
                          className="bg-white border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-400  focus:bg-white focus:border-gray-500"
                          id="subcategory"
                          onChange={handleSelectSubCategory}
                        >
                          <option value="0">Select Sub Category</option>
                          <option value="11">Home Decorations</option>
                          <option value="12">Kitchen and Dining</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {category === 2 && (
                  <>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                          htmlFor="subcategory"
                        >
                          SubCategory*
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12"></p>
                      </div>
                      <div className="md:w-2/5">
                        <select
                          className="bg-white border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-400  focus:bg-white focus:border-gray-500"
                          id="subcategory"
                          onChange={handleSelectSubCategory}
                        >
                          <option value="0">Select Sub Category</option>
                          <option value="21">Garden & Tools</option>
                          <option value="22">Garden decos</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {category === 3 && (
                  <>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                          htmlFor="subcategory"
                        >
                          SubCategory*
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12"></p>
                      </div>
                      <div className="md:w-2/5">
                        <select
                          className="bg-white border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-400  focus:bg-white focus:border-gray-500"
                          id="subcategory"
                          onChange={handleSelectSubCategory}
                        >
                          <option value="0">Select Sub Category</option>
                          <option value="31">Coir Products</option>
                          <option value="32">Wood Carvings</option>
                          <option value="33">Clay & Pottery</option>
                          <option value="34">Cane Products</option>
                          <option value="35">Brass Wear</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {category === 4 && (
                  <>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                          htmlFor="subcategory"
                        >
                          SubCategory*
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12"></p>
                      </div>
                      <div className="md:w-2/5">
                        <select
                          className="bg-white border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-400  focus:bg-white focus:border-gray-500"
                          id="subcategory"
                          onChange={handleSelectSubCategory}
                        >
                          <option value="0">Select Sub Category</option>
                          <option value="41">Personalized Gifts</option>
                          <option value="42">Gift Cards</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {category === 5 && (
                  <>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                          htmlFor="subcategory"
                        >
                          SubCategory*
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12"></p>
                      </div>
                      <div className="md:w-2/5">
                        <select
                          className="bg-white border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-400  focus:bg-white focus:border-gray-500"
                          id="subcategory"
                          onChange={handleSelectSubCategory}
                        >
                          <option value="0">Select Sub Category</option>
                          <option value="51">Jewelleries</option>
                          <option value="52">Clothing</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className=" pt-4 pb-10 ">
              <div className="w-auto bg-gray-200 rounded">
                <h2 className="font-medium leading-tight text-2xl pt-4 pl-8 pb-2 text-gray-900">
                  Attributes
                </h2>
                <p className="pb-8 pl-8 text-gray-400">
                  Add upto 5 attributes that describe your product best{" "}
                  <span className="text-gray-900">
                    (Ex : primary color : blue)
                  </span>
                </p>
                {attributeCount < 5 ? (
                  <>
                    {!addAttributeStatus ? (
                      <>
                        <button
                          onClick={() => {
                            setAddAttribute({
                              name: "",
                              value: "",
                            });
                            setAddAttributeStatus(true);
                          }}
                          className="ml-8 mb-10 px-5 py-4 bg-gray-900 text-white text-center rounded-lg hover:bg-orange-500 "
                        >
                          Add a New attribute
                        </button>
                      </>
                    ) : (
                      <>
                        <h2 className="ml-40 font-medium mb-5">
                          Add Attribute Name and Value
                        </h2>
                        <div className="flex ml-40 mb-10">
                          <div className="md:w-1/3 mr-5">
                            <input
                              className="block  bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                              id="scolor"
                              type="text"
                              placeholder="Attribute Name"
                              value={addAttribute.name}
                              onChange={(e) =>
                                setAddAttribute({
                                  ...addAttribute,
                                  name: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="md:w-1/3 mr-5 ">
                            <input
                              className="block  bg-white  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                              id="scolor"
                              type="text"
                              placeholder="Attribute Value"
                              value={addAttribute.value}
                              onChange={(e) =>
                                setAddAttribute({
                                  ...addAttribute,
                                  value: e.target.value,
                                })
                              }
                            />
                          </div>
                          <button
                            onClick={addNewAttribute}
                            className="mr-5 px-5 py-2 rounded-lg bg-gray-900 text-white"
                          >
                            Add
                          </button>
                          <button
                            className=" px-5 py-2 rounded-lg bg-gray-900 text-white"
                            onClick={() => setAddAttributeStatus(false)}
                          >
                            Cancel
                          </button>
                        </div>
                        {emptyInput && (
                          <>
                            <div className="flex justify-center mx-40 mb-5 px-3 py-2 bg-red-100">
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
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <>
                      <div className="flex mt-2 mb-5 px-3 py-2 bg-green-100">
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
                          You have added the maximum no. of attributes
                        </p>
                      </div>
                    </>
                  </>
                )}

                {attributes && (
                  <>
                    <div className="w-auto  pb-6  mb-6 grid bg-gray-200 rounded-lg">
                      {attributes.map((atr, index) => {
                        return (
                          <div
                            key={index}
                            className="md:flex md:items-center mb-6"
                          >
                            <div className="w-1/4">
                              <label
                                className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name"
                              >
                                {atr.name}
                              </label>
                            </div>
                            <div className="w-1/5">
                              <input
                                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full   py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                                id="inline-full-name"
                                type="text"
                                value={atr.value}
                                disabled
                              />
                            </div>
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 ml-8 mr-8"
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
                            </button>
                            <button onClick={(index, e) => deleteAttribute}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#000"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="w-auto bg-gray-200 rounded">
              <h2 className="font-medium leading-tight text-2xl pt-4 pl-8 text-gray-900">
                Photos
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-500 pl-12">
                <span className="font-semibold">
                  Add 5 different photos so buyers can see more details
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 pt-4 pl-12">
                <span className="font-semibold">
                  Tips:Use Natural light.No flash.
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 pl-20">
                <span className="font-semibold">
                  Use a simple and clean background
                </span>
              </p>
            </div>

            <div className="w-auto pl-12 pr-12  pt-10 pb-10 mb-10 bg-gray-200 rounded">
              <div className="m-3">
                <label
                  htmlFor="file_input"
                  className="block mb-3 text-sm font-medium text-gray-500"
                >
                  Image 1:
                </label>
                {!imageNames.image1 ? (
                  <>
                    <input
                      className="block p-2.5 w-full text-sm shadow-sm text-gray-600 bg-white rounded-lg border border-gray-300 cursor-pointer "
                      id="multiple_files"
                      type="file"
                      onChange={(e) => {
                        setImages({
                          ...images,
                          image1: e.target.files[0],
                        });
                        setImageNames({
                          ...imageNames,
                          image1: e.target.files[0].name,
                        });
                      }}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex mt-2 px-3 py-2 bg-gray-100">
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
                      <p className="text-sm text-gray-500">
                        {imageNames.image1}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="m-3">
                <label
                  htmlFor="file_input"
                  className="block mb-3 text-sm font-medium text-gray-500"
                >
                  Image 2:
                </label>
                {!imageNames.image2 ? (
                  <>
                    <input
                      className="block p-2.5 w-full text-sm shadow-sm text-gray-600 bg-white rounded-lg border border-gray-300 cursor-pointer "
                      id="multiple_files"
                      type="file"
                      onChange={(e) => {
                        setImages({
                          ...images,
                          image2: e.target.files[0],
                        });
                        setImageNames({
                          ...imageNames,
                          image2: e.target.files[0].name,
                        });
                      }}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex mt-2 px-3 py-2 bg-gray-100">
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
                      <p className="text-sm text-gray-500">
                        {imageNames.image2}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="m-3">
                <label
                  htmlFor="file_input"
                  className="block mb-3 text-sm font-medium text-gray-500"
                >
                  Image 3:
                </label>
                {!imageNames.image3 ? (
                  <>
                    <input
                      className="block p-2.5 w-full text-sm shadow-sm text-gray-600 bg-white rounded-lg border border-gray-300 cursor-pointer "
                      id="multiple_files"
                      type="file"
                      onChange={(e) => {
                        setImages({
                          ...images,
                          image3: e.target.files[0],
                        });
                        setImageNames({
                          ...imageNames,
                          image3: e.target.files[0].name,
                        });
                      }}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex mt-2 px-3 py-2 bg-gray-100">
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
                      <p className="text-sm text-gray-500">
                        {imageNames.image3}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="m-3">
                <label
                  htmlFor="file_input"
                  className="block mb-3 text-sm font-medium text-gray-500"
                >
                  Image 4:
                </label>
                {!imageNames.image4 ? (
                  <>
                    <input
                      className="block p-2.5 w-full text-sm shadow-sm text-gray-600 bg-white rounded-lg border border-gray-300 cursor-pointer "
                      id="multiple_files"
                      type="file"
                      onChange={(e) => {
                        setImages({
                          ...images,
                          image4: e.target.files[0],
                        });
                        setImageNames({
                          ...imageNames,
                          image4: e.target.files[0].name,
                        });
                      }}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex mt-2 px-3 py-2 bg-gray-100">
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
                      <p className="text-sm text-gray-500">
                        {imageNames.image4}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="m-3">
                <label
                  htmlFor="file_input"
                  className="block mb-3 text-sm font-medium text-gray-500"
                >
                  Image 5:
                </label>
                {!imageNames.image5 ? (
                  <>
                    <input
                      className="block p-2.5 w-full text-sm shadow-sm text-gray-600 bg-white rounded-lg border border-gray-300 cursor-pointer "
                      id="multiple_files"
                      type="file"
                      onChange={(e) => {
                        setImages({
                          ...images,
                          image5: e.target.files[0],
                        });
                        setImageNames({
                          ...imageNames,
                          image5: e.target.files[0].name,
                        });
                      }}
                    />
                  </>
                ) : (
                  <>
                    <div className="flex mt-2 px-3 py-2 bg-gray-100">
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
                      <p className="text-sm text-gray-500">
                        {imageNames.image5}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 ">
                <div
                  className="bg-orange-500 h-1.5 rounded-full "
                  style={{ width: `${uploadPrecentage}%` }}
                ></div>
              </div>
              {images.image1 &&
                images.image2 &&
                images.image3 &&
                images.image4 &&
                images.image5 &&
                !isFilesUploaded && (
                  <>
                    <div className="flex m-3 w-2/5">
                      <button
                        className="w-1/3 px-3 py-2 bg-gray-700 text-white rounded"
                        type="submit"
                        onClick={uploadImages}
                      >
                        Upload Files
                      </button>
                      <button
                        className="w-1/3 ml-3 px-3 py-2 bg-gray-700 text-white rounded"
                        type="submit"
                      >
                        Clear Files
                      </button>
                    </div>
                  </>
                )}
              {!(
                images.image1 &&
                images.image2 &&
                images.image3 &&
                images.image4 &&
                images.image5
              ) &&
                !isFilesUploaded && (
                  <>
                    <div className="flex mt-2 px-3 py-2 bg-red-100">
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
                      <p className="bg-red-100 text-sm text-red-500">
                        You need to Upload 5 Images!
                      </p>
                    </div>
                  </>
                )}

              {isFilesUploaded && (
                <>
                  <div className="flex mt-2 px-3 py-2 bg-green-100">
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
                    <p className="text-sm text-green-500">Upload Successful!</p>
                  </div>
                </>
              )}
            </div>
            <div className=" pt-4 pb-10 ">
              <div className="w-auto bg-gray-200 rounded">
                <h2 className="font-medium leading-tight text-2xl pt-4 pl-8 pb-4 text-gray-900">
                  Pricing and Duration
                </h2>
              </div>

              <div className="w-auto grid bg-gray-200 rounded">
                <div className="md:flex md:items-center mb-6">
                  <div className="flex justify-between  md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="startingprice"
                    >
                      Starting Price
                    </label>
                    <h3 className="font-bold pr-1">$</h3>
                  </div>
                  <div className="md:w-2/5">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="startingprice"
                      type="text"
                      value={auction.stPrice}
                      onChange={(e) =>
                        setAuction({ ...auction, stPrice: e.target.value })
                      }
                      placeholder="Starting Price"
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="quantity"
                    >
                      Duration
                    </label>
                  </div>
                  <div className="md:w-2/5">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="quantity"
                      type="number"
                      value={auction.duration}
                      onChange={(e) =>
                        setAuction({ ...auction, duration: e.target.value })
                      }
                      placeholder="Duration of the auction in Days"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 pb-10 ">
              <div className="w-auto bg-gray-200 rounded">
                <h2 className="font-medium leading-tight text-2xl pt-4 pl-8 pb-4 text-gray-900">
                  Shipping
                </h2>
              </div>

              <div className="w-auto grid bg-gray-200 rounded">
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="protime"
                    >
                      Ship To
                    </label>
                  </div>
                  <div className="md:w-2/5">
                    <div className="flex">
                      <div className="flex items-center mb-4">
                        <input
                          id="worldwide"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={(e) =>
                            setShipping({ ...shipping, shipTo: 1 })
                          }
                        />
                        <label
                          for="worldwide"
                          className="ml-2 text-sm font-medium text-gray-700 "
                        >
                          World Wide
                        </label>
                      </div>
                      <div className="flex items-center ml-10    mb-4">
                        <input
                          id="sri-lanka"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={(e) =>
                            setShipping({ ...shipping, shipTo: 0 })
                          }
                        />
                        <label
                          for="sri-lanka"
                          className="ml-2 text-sm font-medium text-gray-700 "
                        >
                          Only Sri Lanka
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="protime"
                    >
                      Shipping Time
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12">
                      Select the maximum days it takes to deliver the item
                      {shipping.shipTo ? (
                        <> anywhere in the world</>
                      ) : (
                        <>anywhere in the Sri Lanka</>
                      )}
                    </p>
                  </div>
                  <div className="md:w-2/5">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="scolor"
                      type="number"
                      value={shipping.shippingTime}
                      onChange={(e) =>
                        setShipping({
                          ...shipping,
                          shippingTime: e.target.value,
                        })
                      }
                      placeholder="Shipping Time in Days"
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="flex justify-between items-center md:w-1/3">
                    <div>
                      <label
                        className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                        htmlFor="shipprice"
                      >
                        Shipping Cost
                      </label>
                      <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12">
                        add a cost that covers the maximum shipping cost that it
                        can take
                      </p>
                    </div>
                    <h3 className="font-bold pr-1">$</h3>
                  </div>
                  <div className="md:w-2/5">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="shipprice"
                      type="text"
                      value={shipping.shippingPrice}
                      onChange={(e) =>
                        setShipping({
                          ...shipping,
                          shippingPrice: e.target.value,
                        })
                      }
                      placeholder="Shipping Cost"
                    />
                  </div>
                </div>
              </div>
              <div className="flex mt-16 justify-end space-x-2">
                <button
                  type="submit"
                  className="w-full inline-block px-6 py-4 bg-orange-500 text-white font-medium text-base leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >
                  Add Listing
                </button>
              </div>
              {success && (
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
                      Product has been Successfully added!
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddListingAuction;
