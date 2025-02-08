import React from 'react';

const Chairs = () => {
  return (
    <section className="mb-96 w-full mt-[260px]">
      <div className="container mx-auto">
        <div className="flex flex-col text-center">
         
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          
          <div className="lg:col-span-2 flex justify-center">
            <img
              alt="Chair Left"
              className="w-full h-[648px] object-cover object-center"
              src="./chair4.png"
            />
          </div>

          
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            
            <div className="relative">
              <img
                alt="Chair 1"
                className="w-full h-[350px] object-cover object-center"
                src="./chair5.png"
              />
            </div>
            
            <div className="relative">
              <img
                alt="Chair 2"
                className="w-full h-[350px] object-cover object-center"
                src="./chair.2.png"
              />
            </div>

            
            <div className="relative">
              <img
                alt="Chair 3"
                className="w-full h-[350px] object-cover object-center"
                src="./chair9.png"
              />
            </div>

            
            <div className="relative">
              <img
                alt="Chair 4"
                className="w-full h-[350px] object-cover object-center"
                src="./chair.2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chairs;
