import React from "react";
import { Link } from "react-router-dom";
import success from "../../images/success.jpg";
import NavBar from "../NavBar";

const RegisterSuccess = () => {
  return (
    <>
      <NavBar />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-16 pt-16 items-center justify-center flex-col">
          <img
            src={success}
            className="lg:w-2/12 md:w-4/12 w-5/12 mb-10 object-cover object-center rounded"
            alt="hero"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Thank You For Registration!
            </h1>
            <p className=" mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              quae adipisci, explicabo reprehenderit recusandae ullam non
              dolorum doloremque corrupti dolore praesentium itaque aliquam
              distinctio veniam iusto qui iure cupiditate culpa?
            </p>
            <div className="flex justify-center">
              <Link
                to="/"
                className="inline-flex text-white font-medium bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg"
              >
                Browse Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterSuccess;
