import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import axios from "../../api/axios";

const UPLOAD_URL = "upload/docs";
const SELLER_REQUESTS_URL = "sellers/requests";

const RegisterVerifyInfo = (props) => {
  const [files, setFiles] = useState();
  const [uploadPrecentage, setUploadPrecentage] = useState(0);
  const [isFilesUploaded, setIsFileUploaded] = useState(false);

  const inputRef = useRef();
  const navigateTo = useNavigate();

  const selectFileHandler = (e) => {
    setFiles(e.target.files);
  };

  const clearSelectedFiles = (e) => {
    e.preventDefault();
    inputRef.current.value = null;
  };

  const uploadFiles = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append(files.item(i).name, files.item(i));
    }

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
      props.upload(res.data.files);
      setIsFileUploaded(true);
      setFiles();
    } catch (err) {
      console.log(err);
    }
  };

  const loadPersonal = (e) => {
    e.preventDefault();
    props.set(1);
  };
  const loadStore = (e) => {
    e.preventDefault();
    props.set(2);
  };
  const loadVerify = (e) => {
    e.preventDefault();
    props.set(3);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = props.values;
      await axios.post(SELLER_REQUESTS_URL, data).then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
        } else {
          setFiles();
          setUploadPrecentage(0);
          setIsFileUploaded();
          navigateTo("/sellers/register/success");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-8">
        <div className="col-span-3 bg-orange-500 h-screen relative">
          <Link to="/">
            <img className="m-8 absolute w-32" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="col-span-5">
          <div className="h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} method="POST" className="w-9/12">
              {/* tabs for pages */}

              <div className="mb-16 flex ">
                <button
                  className="flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"
                  onClick={loadPersonal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                    />
                  </svg>

                  <span className="mx-1 text-sm sm:text-base">
                    Account Info
                  </span>
                </button>

                <button
                  className="flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1  whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400"
                  onClick={loadStore}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>

                  <span className="mx-1 text-sm sm:text-base">Store Info</span>
                </button>

                <button
                  className="flex items-center h-10 px-2 py-2 -mb-px text-center text-orange-600 bg-transparent border-b-2 border-orange-500 sm:px-4 -px-1  whitespace-nowrap focus:outline-none"
                  onClick={loadVerify}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mx-1 sm:w-6 sm:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>

                  <span className="mx-1 text-sm sm:text-base">
                    Verification
                  </span>
                </button>
              </div>

              <div className="mt-10">
                <label
                  htmlFor="password"
                  className="block mb-3 text-sm font-medium text-gray-500"
                >
                  Please Read the Following :
                </label>
                <div className="border rounded-lg py-3 px-5 mb-3">
                  <p className="mb-2">
                    This information is collected for the sole purpose of
                    verifying your seller account. We will carefully protect
                    your privacy and information.
                  </p>
                  <p className="text-base">
                    As the ID verification, you can submit either one of the
                    following documents.
                  </p>
                  <p className="text-orange-500 font-bold">
                    (National ID Card, Driver's License, Passport)
                  </p>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="block mb-3 text-sm font-medium text-gray-500"
                  >
                    Document Number :
                  </label>
                  <input
                    type="text"
                    id="contactNo"
                    className="block w-full p-2.5 shadow-sm bg-white-500 border border-gray-300 text-gray-900 text- rounded-lg"
                    value={props.values.verificationNo}
                    onChange={props.change("verificationNo")}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="file_input"
                    className="block mb-3 text-sm font-medium text-gray-500"
                  >
                    Uplodad Document:
                  </label>
                  <input
                    className="block p-2.5 w-full text-sm shadow-sm text-gray-600 bg-white rounded-lg border border-gray-300 cursor-pointer "
                    id="multiple_files"
                    type="file"
                    ref={inputRef}
                    multiple
                    onChange={selectFileHandler}
                  />
                </div>
                <div className="w-full bg-white rounded-full h-1.5 mb-4 ">
                  <div
                    className="bg-orange-500 h-1.5 rounded-full "
                    style={{ width: `${uploadPrecentage}%` }}
                  ></div>
                </div>
                {files && (
                  <>
                    <div className="flex">
                      <button
                        className="px-3 py-2 bg-gray-700 text-white rounded"
                        type="submit"
                        onClick={uploadFiles}
                      >
                        Upload Files
                      </button>
                      <button
                        className="ml-3 px-3 py-2 bg-gray-700 text-white rounded"
                        type="submit"
                        onClick={clearSelectedFiles}
                      >
                        Clear Files
                      </button>
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
                      <p className="text-sm text-green-500">
                        Upload Successful!
                      </p>
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  className="mt-8 text-white bg-orange-500 hover:bg-orange-600 font-medium rounded-lg text-md px-5 py-4 text-center w-full"
                >
                  Submit Your Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterVerifyInfo;
