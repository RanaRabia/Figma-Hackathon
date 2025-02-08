import React from 'react'

const Brand = () => {
  return (
    <div>
      <section className="text-cyan-800  font-bold  body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-3xl font-bold title-font text-cyan-800">
              What makes our Brand Different
            </h1>
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="p-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
              <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-cyan-800 flex-shrink-0">
                    
                  </div>
                  <h1 className="text-cyan-800 text-1xl title-font font-bold">
                    Next day as standard
                  </h1>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    Order before 3pm and get your order the next day as standard
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
              <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h1 className="text-cyan-800 text-lg title-font font-medium">
                    Made by true artisans
                  </h1>
                </div>
                <p className="leading-relaxed text-base">
                  Handmade crafted goods made with real passion and craftsmanship
                </p>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
              <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-cyan-800 flex-shrink-0">
                    
                  </div>
                  <h1 className="text-cyan-800 text-lg title-font font-medium">
                    Unbeatable prices
                  </h1>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    For our materials and quality you won’t find better prices anywhere
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
              <div className="flex rounded-lg h-full bg-gray-200 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-cyan-800 flex-shrink-0">
                  
                  </div>
                  <h1 className="text-cyan-800 text-lg title-font font-medium">
                  Recycled packaging
                  </h1>
                </div>
                <div className="flex-grow">
                  <p className=" text-cyan-800 leading-relaxed text-base">
                  We use 100% recycled to ensure our footprint is more manageable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Brand
