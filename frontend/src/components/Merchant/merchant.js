import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const Merchant = () => {
  const navigate = useNavigate();

  const Paytm = () => {
    navigate("/paytm");
  };
  const Phonepe = () => {
    navigate("/phonepe");
  };
  const GooglePay = () => {
    navigate("/googlepay");
  };
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            {/* ROOF PARTY POLAROID */}
          </h2>
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Onboard as a Merchant
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  {/* <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg> */}
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Paytm
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  To accept payments through Paytm
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  <a
                    onClick={Paytm}
                    target="_blank"
                    class="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    {" "}
                    Learn More
                  </a>

                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2 mt-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Phonepe
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  To accept payments through Phonepe
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  <a
                    onClick={Phonepe}
                    target="_blank"
                    class="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    {" "}
                    Learn More
                  </a>

                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2 mt-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 class="text-gray-900 text-lg title-font font-medium">
                  Google Pay
                </h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base">
                  To accept payments through Google Pay
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  <a
                    onClick={GooglePay}
                    target="_blank"
                    class="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    {" "}
                    Learn More
                  </a>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2 mt-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchant;