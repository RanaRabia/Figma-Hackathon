import React from 'react';

const Category = () => {
  return (
    <div className="text-center">
      
      <h1 className="text-gray-900 font-bold text-4xl mb-8">Top Category</h1>

      
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-shrink-0 justify-items-center">
        
        <div className="relative">
          <img
            src="./chair6).png"
            alt="Wing Chair"
            className="w-[400px] h-[400px] "
          />
          <h2 className=" bottom-0 left-0 right-0 bg-black text-white font-bold h-[85px] p-5 text-center">
            Wing Chair <br />31,84
          </h2>
        </div>

        
        <div className="relative">
          <img
            src="./chair7.png"
            alt="Wing Chair"
            className="w-[424px] h-[424px]  "
          />
          <h2 className="absolute bottom-0 left-0 right-0 bg-black text-white font-bold h-[85px] p-5 text-center">
            Wing Chair <br />31,84
          </h2>
        </div>

        
        <div className="relative">
          <img
            src="./chair8.png"
            alt="Wing Chair"
            className="w-[424px] h-[424px] object-cover "
          />
          <h2 className="absolute bottom-0 left-0 right-0 bg-black text-white font-bold h-[85px] p-5 text-center">
            Wing Chair <br />31,84
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
