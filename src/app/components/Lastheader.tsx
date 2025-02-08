import Link from 'next/link';
import React from 'react';

const Lastheader = () => {
  return (
    <div className='h-[74px] py-[14px] px-5 lg:px-[300px] bg-white flex justify-between items-center'>
      <div className='flex gap-8 font-inter flex-wrap'>
        <Link href="/" className='text-[#007580]'>Home</Link>
        <Link href="./Shop">Shop</Link>
        <Link href="./Product">Product</Link>
        
        <Link href="./About">About</Link>
        <Link href="./contact">Contact</Link>
       
        <Link href="./Witchlist">Witchlist</Link>
        =
      </div>
      <div className="hidden md:block">
        <p>Contact: (808) 555-0111</p>
      </div>
    </div>
  );
};

export default Lastheader;
