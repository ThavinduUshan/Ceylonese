import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import NavBar from "../NavBar";
import useAuth from "../../hooks/useAuth";

const UPLOAD_URL = "upload/products";
const ADD_PRODUCT_URL = "sellers/addproduct";

const AddListing = () => {
  const { auth } = useAuth();

  const [listings, setListings] = useState({
    title: "",
    description: "",
    type: "",
    category: "",
    subCategory: "",
    pColor: "",
    sColor: "",
    size: "",
    material: "",
  });

  const [category, setCategory] = useState();

  const [images, setImages] = useState({
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
  });

  const [price, setPrice] = useState({
    price: "",
    quantity: "",
  });

  const [shipping, setShipping] = useState({
    shipTo: "",
    shippingTime: "",
    shippingPrice: "",
  });

  const [uploadPrecentage, setUploadPrecentage] = useState(0);
  const [isFilesUploaded, setIsFileUploaded] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSelectCategory = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setCategory(parseInt(e.target.value));
    setListings({ ...listings, category: parseInt(e.target.value) });
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
    let data = {
      sellerID: auth.user.sellerID,
      title: listings.title,
      description: listings.description,
      type: listings.type,
      category: listings.category,
      subCategory: listings.subCategory,
      pColor: listings.pColor,
      sColor: listings.sColor,
      size: listings.size,
      material: listings.material,
      price: price.price,
      quantity: price.quantity,
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
      await axios.post(ADD_PRODUCT_URL, data).then((res) => {
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
            type: "",
            category: "",
            subCategory: "",
            pColor: "",
            sColor: "",
            size: "",
            material: "",
          });

          setPrice({
            price: "",
            quantity: "",
          });

          setShipping({
            shipTo: "",
            shippingTime: "",
            shippingPrice: "",
          });
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
                Add a new listing
              </h2>
            </div>

            <div className=" pt-14 pb-10 ">
              <div className="w-auto bg-gray-200 rounded">
                <h2 className="font-medium leading-tight text-2xl pt-4 pl-8 pb-4 text-gray-900">
                  Listing Details
                </h2>
              </div>

              <div className="w-auto mb-6 grid bg-gray-200 rounded-lg">
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
                          value=""
                          name="buynow"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={(e) =>
                            setListings({ ...listings, type: 0 })
                          }
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
                          value=""
                          name="auction"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          onChange={(e) =>
                            setListings({ ...listings, type: 1 })
                          }
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
                      <option value="5">Collectables</option>
                    </select>
                  </div>
                </div>

                {category === 0 && <></>}

                {category === 1 && (
                  <>
                    <div className="md:flex md:items-center mb-6">
                      <div className="md:w-1/3">
                        <label
                          className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                          htmlFor="category"
                        >
                          SubCategory*
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12"></p>
                      </div>
                      <div className="md:w-2/5">
                        <select
                          className="bg-white border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-400  focus:bg-white focus:border-gray-500"
                          id="category"
                          onChange={(e) =>
                            setListings({
                              ...listings,
                              subCategory: e.target.value,
                            })
                          }
                        >
                          <option value="11">Home & Living</option>
                          <option value="12">Outdoor & Garden</option>
                          <option value="13">Arts & Crafts</option>
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
                          htmlFor="category"
                        >
                          SubCategory*
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12"></p>
                      </div>
                      <div className="md:w-2/5">
                        <select
                          className="bg-white border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-400  focus:bg-white focus:border-gray-500"
                          id="category"
                          onChange={(e) =>
                            setListings({
                              ...listings,
                              subCategory: e.target.value,
                            })
                          }
                        >
                          <option value="11">Home & Living</option>
                          <option value="12">Outdoor & Garden</option>
                          <option value="13">Arts & Crafts</option>
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
                          htmlFor="category"
                        >
                          SubCategory*
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12"></p>
                      </div>
                      <div className="md:w-2/5">
                        <select
                          className="bg-white border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-400  focus:bg-white focus:border-gray-500"
                          id="category"
                          onChange={(e) =>
                            setListings({
                              ...listings,
                              subCategory: e.target.value,
                            })
                          }
                        >
                          <option value="11">Home & Living</option>
                          <option value="12">Outdoor & Garden</option>
                          <option value="13">Arts & Crafts</option>
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
                          htmlFor="category"
                        >
                          SubCategory*
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12"></p>
                      </div>
                      <div className="md:w-2/5">
                        <select
                          className="bg-white border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-400  focus:bg-white focus:border-gray-500"
                          id="category"
                          onChange={(e) =>
                            setListings({
                              ...listings,
                              subCategory: e.target.value,
                            })
                          }
                        >
                          <option value="11">Home & Living</option>
                          <option value="12">Outdoor & Garden</option>
                          <option value="13">Arts & Crafts</option>
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
                          htmlFor="category"
                        >
                          SubCategory*
                        </label>
                        <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12"></p>
                      </div>
                      <div className="md:w-2/5">
                        <select
                          className="bg-white border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-400  focus:bg-white focus:border-gray-500"
                          id="category"
                          onChange={(e) =>
                            setListings({
                              ...listings,
                              subCategory: e.target.value,
                            })
                          }
                        >
                          <option value="11">Home & Living</option>
                          <option value="12">Outdoor & Garden</option>
                          <option value="13">Arts & Crafts</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="pcolor"
                    >
                      Primary Color
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12">
                      Optional
                    </p>
                  </div>
                  <div className="md:w-2/5">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="pcolor"
                      type="text"
                      value={listings.pColor}
                      onChange={(e) =>
                        setListings({
                          ...listings,
                          pColor: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="scolor"
                    >
                      Secondary Color
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12">
                      Optional-you can show your shoppers that the item is multi
                      coloured
                    </p>
                  </div>
                  <div className="md:w-2/5">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="scolor"
                      type="text"
                      value={listings.sColor}
                      onChange={(e) =>
                        setListings({
                          ...listings,
                          sColor: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="size"
                    >
                      Dimensions
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12">
                      Optional
                    </p>
                  </div>
                  <div className="md:w-2/5">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="scolor"
                      type="text"
                      value={listings.size}
                      onChange={(e) =>
                        setListings({
                          ...listings,
                          size: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="materials"
                    >
                      Materials
                    </label>
                    <p className="text-sm text-gray-500 dark:text-gray-500 pl-40 pr-12">
                      Optional
                    </p>
                  </div>
                  <div className="md:w-2/5">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="scolor"
                      type="text"
                      value={listings.material}
                      onChange={(e) =>
                        setListings({
                          ...listings,
                          material: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
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
                <input
                  className="block p-2.5 w-full text-sm shadow-sm text-gray-600 bg-white rounded-lg border border-gray-300 cursor-pointer "
                  id="multiple_files"
                  type="file"
                  onChange={(e) =>
                    setImages({
                      ...images,
                      image1: e.target.files[0],
                    })
                  }
                />
              </div>
              <div className="m-3">
                <label
                  htmlFor="file_input"
                  className="block mb-3 text-sm font-medium text-gray-500"
                >
                  Image 2:
                </label>
                <input
                  className="block p-2.5 w-full text-sm shadow-sm text-gray-600 bg-white rounded-lg border border-gray-300 cursor-pointer "
                  id="multiple_files"
                  type="file"
                  onChange={(e) =>
                    setImages({
                      ...images,
                      image2: e.target.files[0],
                    })
                  }
                />
              </div>
              <div className="m-3">
                <label
                  htmlFor="file_input"
                  className="block mb-3 text-sm font-medium text-gray-500"
                >
                  Image 3:
                </label>
                <input
                  className="block p-2.5 w-full text-sm shadow-sm text-gray-600 bg-white rounded-lg border border-gray-300 cursor-pointer "
                  id="multiple_files"
                  type="file"
                  onChange={(e) =>
                    setImages({
                      ...images,
                      image3: e.target.files[0],
                    })
                  }
                />
              </div>
              <div className="m-3">
                <label
                  htmlFor="file_input"
                  className="block mb-3 text-sm font-medium text-gray-500"
                >
                  Image 4:
                </label>
                <input
                  className="block p-2.5 w-full text-sm shadow-sm text-gray-600 bg-white rounded-lg border border-gray-300 cursor-pointer "
                  id="multiple_files"
                  type="file"
                  onChange={(e) =>
                    setImages({
                      ...images,
                      image4: e.target.files[0],
                    })
                  }
                />
              </div>
              <div className="m-3">
                <label
                  htmlFor="file_input"
                  className="block mb-3 text-sm font-medium text-gray-500"
                >
                  Image 5:
                </label>
                <input
                  className="block p-2.5 w-full text-sm shadow-sm text-gray-600 bg-white rounded-lg border border-gray-300 cursor-pointer "
                  id="multiple_files"
                  type="file"
                  onChange={(e) =>
                    setImages({
                      ...images,
                      image5: e.target.files[0],
                    })
                  }
                />
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
                  Inventory and Pricing
                </h2>
              </div>

              <div className="w-auto grid bg-gray-200 rounded">
                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="price"
                    >
                      Price
                    </label>
                  </div>
                  <div className="md:w-2/5">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="price"
                      type="text"
                      value={price.price}
                      onChange={(e) =>
                        setPrice({ ...price, price: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
                    <label
                      className="block text-gray-900 font-semibold pl-40 mb-1 md:mb-0 pr-4"
                      htmlFor="quantity"
                    >
                      Quantity
                    </label>
                  </div>
                  <div className="md:w-2/5">
                    <input
                      className="bg-white appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:bg-white focus:border-gray-500"
                      id="quantity"
                      type="number"
                      value={price.quantity}
                      onChange={(e) =>
                        setPrice({ ...price, quantity: e.target.value })
                      }
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
                      <div className="flex items-center ml-10 mb-4">
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
                          WorldWide
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
                      anywhere in the world
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
                    />
                  </div>
                </div>

                <div className="md:flex md:items-center mb-6">
                  <div className="md:w-1/3">
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
                    />
                  </div>
                </div>
              </div>
              <div className="flex mt-16 justify-end space-x-2">
                <button
                  type="submit"
                  className="w-full inline-block px-6 py-4 bg-orange-500 text-white font-medium text-base leading-tight uppercase rounded shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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

export default AddListing;
