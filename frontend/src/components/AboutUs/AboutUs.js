import React, { Fragment } from "react";

const AboutUs = () => {
  return (
    <Fragment>
      {/* html wala part */}

      <div class="bg-blue-600 py-16 text-white">
        <div class="container mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4">Welcome to WeEmpower</h1>
          <p class="text-lg mb-8">
            Empowering Merchants with UPI and Financial Literacy
          </p>

          <div class="flex flex-wrap justify-center">
            <div class="w-full md:w-1/2 p-4">
              <p class="text-lg mb-6">
                At WeEmpower, we believe in the transformative power of
                technology and knowledge. Our platform is dedicated to
                empowering street vendors and small merchants, enabling them to
                thrive in the modern digital landscape. By harnessing the
                potential of UPI platforms and providing valuable financial
                literacy resources, we pave the way for a brighter and more
                prosperous future.
              </p>

              <p class="text-lg mb-6">
                <strong class="block">Why Choose Us?</strong>
                Navigating the world of UPI and financial services can seem
                complex, but we're here to guide you every step of the way. Our
                mission is to simplify the process, making it accessible and
                beneficial for merchants of all sizes. Whether you're a street
                vendor selling fresh produce or a small business owner,
                WeEmpower is your partner in success.
              </p>
            </div>

            {/* <div class="w-full md:w-1/2 p-4"> */}
            {/* <h2 class="text-2xl font-bold mb-2">
                Unlock Opportunities with [Your Website Name]
              </h2>
              <ul class="list-disc pl-6">
                <li>
                  Seamless Onboarding: Our step-by-step guide ensures a
                  hassle-free journey to becoming a UPI merchant. We'll walk you
                  through the process, from registration to your first digital
                  transaction.
                </li>
                <li>
                  Government and Bank Schemes: Discover a world of opportunities
                  through a comprehensive list of schemes and insurances
                  tailored to your needs. We connect you to the resources that
                  can elevate your business.
                </li>
                <li>
                  Financial Literacy: Empower yourself with knowledge. Our
                  platform offers insights into financial planning, risk
                  management, and more, helping you make informed decisions for
                  a secure future.
                </li>
                <li>
                  Success Stories: Join a community of successful merchants who
                  have already reaped the benefits of UPI integration and
                  financial literacy. Their stories inspire us, and they can
                  inspire you too.
                </li>
              </ul>

              <h2 class="text-2xl font-bold mt-4">Let's Begin Your Journey</h2>
              <p class="mb-6">
                Your path to financial empowerment starts here. Explore the
                possibilities, make informed choices, and embrace the future of
                commerce with confidence. Join [Your Website Name] and take the
                first step towards a more prosperous tomorrow.
              </p>

              <a
                href="#"
                class="inline-block bg-yellow-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
              >
                Get Started
              </a>

              <p class="mt-4">
                Subscribe to our newsletter for the latest updates, insights,
                and tips on navigating the world of UPI and financial services.
              </p>

              <a
                href="#"
                class="inline-block mt-2 text-blue-300 hover:text-blue-400"
              >
                Subscribe
              </a>

              <p class="text-lg mt-8">
                At [Your Website Name], we're here to uplift you, guide you, and
                celebrate your success. Together, we're shaping a stronger, more
                inclusive economy.
              </p> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* Taiwind wala part */}
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4868.890878509795!2d76.36285954117561!3d30.355901524852076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028ab86533db5%3A0x93cc1f72eae1c9a8!2sThapar%20Institute%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1691693000170!5m2!1sen!2sin"
              style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.4)",
              }}
            ></iframe>

            <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div class="lg:w-1/2 px-6">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p class="mt-1">
                  Thapar Institute of Engineering & Technology, Bhadson Rd,
                  Adarsh Nagar, Prem Nagar, Patiala, Punjab 147004
                </p>
              </div>
              <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p class="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            {/* <p class="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p> */}
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="message" class="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send
            </button>
            {/* <p class="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p> */}
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Sign Up for a Newsletter
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Receive updates and latest news direct to your inbox.
            </p>
          </div>
          <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div class="relative flex-grow w-full">
              <label for="full-name" class="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative flex-grow w-full">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AboutUs;
