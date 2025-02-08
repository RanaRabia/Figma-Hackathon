import React from 'react'
import Brand from '../components/Brand'
import Popular from '../Popular'
const About = () => {
  return (
    <div>
<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-6/5 mx-auto flex gap-6">
      <div className="lg:w-4/5 w-full lg:pr-10 lg:py-6  bg-[#007580]  mb-6 lg:mb-0">
        
        <h1 className="text-white flex  mx-4 justify-center mt-14 items-center text-5xl title-font font-medium mb-4">
        About Us - Comforty
        </h1>
        <div className="flex mb-4">
          
        </div>
        <p className="  mx-12 text-2xl flex justify-center items-center mb-4 text-white">
        At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design,
         premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
        
       
       
        <div className="flex">
          
          <button className="flex items-center justify-center  mx-16  mt-24 text-white text-2xl  bg-cyan-800 border-0 py-8 px-10 focus:outline-none hover:bg-indigo-600 rounded">
            View Collection
          </button>
          
        </div>
      </div>
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
        src="chair.2.png"
      />

    </div>
  </div>
</section>
<Brand/>
<Popular/>
</div>
)
}

export default About