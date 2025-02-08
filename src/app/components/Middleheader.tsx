import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const Middleheader = () => {
  return (
    <div className='flex justify-between items-center bg-[rgb(240,242,243)] h-[84px] py-4 px-5 lg:px-[300px]'>
      <header>
        <div className="container flex flex-col md:flex-row items-center w-full">
      
          <img src="./l1.png" alt="Logo" className="w-auto" />
        </div>
      </header>

      
      <div className="flex gap-2 items-center h-[44px] border-0 bg-white rounded text-base mt-4 md:mt-0 ml-auto">
        <CiShoppingCart className='h-8 w-8' />
        <p>Cart</p>
        <p className='border-0 rounded-2xl text-center text-white h-[20px] font-sans font-medium w-[20px] bg-[#007580]'>
          2
        </p>
      </div>
    </div>
  );
}

export default Middleheader;
