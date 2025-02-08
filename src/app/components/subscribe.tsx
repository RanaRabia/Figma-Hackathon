import React from "react";

const subscribe = () => {
  return (
    <section className="text-gray-600 bg-[#f0f2f3d7] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">
            Or subscribe to the newsletter
          </h1>

          <div>
            <div className="flex h-8 text-black"></div>
            <p></p>

            <input
              className="texblack h-4 p-4"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <hr className="flex h-8 text-black" />
          </div>

          <h1 className="text-4xl font-medium title-font mb-4 text-gray-900">
            Follow products and discounts on Instagram
          </h1>
        </div>

        
        <div className="flex flex-wrap justify-center gap-4"> 
          <div className="flex-shrink-0">
            <img
              alt="team"
              className="rounded-lg w-40 h-40 object-cover object-center mb-4 sm:w-44 sm:h-44 md:w-48 md:h-48"
              src="./chair9.png"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              alt="team"
              className="rounded-lg w-40 h-40 object-cover object-center mb-4 sm:w-44 sm:h-44 md:w-48 md:h-48"
              src="./chair6).png"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              alt="team"
              className="rounded-lg w-40 h-40 object-cover object-center mb-4 sm:w-44 sm:h-44 md:w-48 md:h-48"
              src="./chair.2.png"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              alt="team"
              className="rounded-lg w-40 h-40 object-cover object-center mb-4 sm:w-44 sm:h-44 md:w-48 md:h-48"
              src="./cair3.png"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              alt="team"
              className="rounded-lg w-40 h-40 object-cover object-center mb-4 sm:w-44 sm:h-44 md:w-48 md:h-48"
              src="./chair4.png"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              alt="team"
              className="rounded-lg w-40 h-40 object-cover object-center mb-4 sm:w-44 sm:h-44 md:w-48 md:h-48"
              src="./chair8.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default subscribe;
