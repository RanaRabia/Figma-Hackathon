import React from "react";

const Popular = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container px-5 mx-auto">
        <div className=" mb-8">
          <h1 className="text-4xl  p-6  font-semibold text-gray-900">
            Our Popular Products{" "}
          </h1>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="p-4 w-full sm:w-1/2 lg:w-2/5 xl:w-2/5">
            <div className="relative bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="./sofa.jpeg"
                alt="Product 1"
                className="object-cover w-full h-[375px]"
              />
              <div className="absolute bottom-0 left-0  text-white p-4 w-full"></div>
            </div>

            <div className="p-4 text-center bg-white rounded-b-lg shadow-md">
              <h3 className="text-xl">The Poplar suede sofa</h3>
              <p className="text-lg font-semibold text-gray-900">$25.00</p>
            </div>
          </div>

          <div className="p-4 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="relative bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="./longchair.jpeg"
                alt="Product 2"
                className="object-cover w-full h-[375px]"
              />
              <div className="absolute bottom-0 left- text-white p-4 w-full"></div>
            </div>

            <div className="p-4 text-center bg-white rounded-b-lg shadow-md">
              <h3 className="text-xl">The Dandy chair</h3>
              <p className="text-lg font-semibold text-gray-900">$35.00</p>
            </div>
          </div>

          <div className="p-4 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4">
            <div className="relative bg-gray-300 rounded-lg overflow-hidden">
              <img
                src="./long3.jpeg"
                alt="Product 3"
                className="object-cover w-full h-[375px]"
              />
              <div className="absolute bottom-0 left-0  text-white p-4 w-full"></div>
            </div>

            <div className="p-4 text-center bg-white rounded-b-lg shadow-md">
              <h3 className="text-xl">The Dandy chair</h3>
              <p className="text-lg font-semibold text-gray-900">$45.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
