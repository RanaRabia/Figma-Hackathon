import React from "react";

import { FaShoppingCart } from "react-icons/fa";

const Products = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Featured Products
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"></p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                alt="content"
                className="object-cover object-center h-[312px] w-[312px]"
                src="chair.2.png"
              />
              <h1 className="t text-slate-800 text-1xl font-bold title-font">
                Library Stool Chair
              </h1>
              <div className="flex items-center">
                <p> 20$</p>

                <div className="mx-48">
                  <FaShoppingCart className="w-7 h-7 text-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                alt="content"
                className="object-cover object-center gap-0 h-[312px] w-[312px]"
                src="cair3.png"
              />
              <h1 className="tracking-widest text-slate-900 text-1xl  font-medium title-font">
                Library Stool Chair
              </h1>
              <div className="flex items-center">
                <p> 20$</p>

                <div className="mx-48">
                  <FaShoppingCart className="w-7 h-7 text-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                alt="content"
                className="object-cover object-center h-[312px] w-[312px] gap-0 border-r-2"
                src="chair4.png"
              />
              <h1 className="tracking-widest text-slate-900 text-1xl font-medium title-font">
                Library Stool Chair
              </h1>
              <div className="flex items-center">
                <p> 20$</p>

                <div className="mx-48">
                  <FaShoppingCart className="w-7 h-7 text-blue-800" />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                alt="content"
                className="object-cover object-center h-[312px] w-[312px] gap-0 border-r-2"
                src="chair5.png"
              />
              <h1 className="tracking-widest text-slateo-900 text-xs font-medium title-font">
                Library Stool Chair
              </h1>
              <div className="flex items-center">
                <p> 20$</p>

                <div className="mx-48">
                  <FaShoppingCart className="w-7 h-7 text-blue-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
