import React from 'react';

const Hero = () => {
  return (
    <section className="flex justify-between items-center mx-5 lg:mx-72 bg-[#f0f2f3d7] border-1">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center mb-8 sm:p-12 md:flex-row">
          
          <div className="lg:w-1/2 w-full lg:pr-6 lg:py-6 mb-6 lg:mb-0 text-center lg:text-left">
            <h2 className="text-sm title-font text-slate-900 tracking-widest">
              Welcome to Comforty
            </h2>
            <h1 className="mb-8 sm:text-4xl text-3xl font-bold text-gray-900">
              Best Furniture Collection <br /> for your interior.
            </h1>
            <div className="flex justify-center lg:justify-start mb-4">
              <button className="text-white bg-[#029FAE] border-0 py-2 px-8 rounded text-lg">
                Shop Now
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./chair1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
