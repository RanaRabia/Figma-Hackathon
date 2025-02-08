import React from 'react';
import { GrCircleAlert } from "react-icons/gr";

const Upperheader = () => {
  return (
    <div className='text-white bg-[#272343] h-[45px] flex justify-between py-[14px] px-5 lg:px-[300px] items-center'>
      <p className='text-white'>Free shipping on all orders over $50</p>

      <div className='flex justify-center gap-[24px]'>
        <select className='bg-[#272343]'>
          <option value="english" className='bg-[#272343]'>English</option>
        </select>
        <p>FAQ</p>
        <GrCircleAlert className='text-white text-lg' />
        <p>Need help</p>
      </div>
    </div>
  );
};

export default Upperheader;
