import React from 'react'

const page = () => {
  return (
    <div>

<h1 className='flex justify-center items-center text-4xl font-bold mb-4'>Get In Touch With Us</h1>
<p className='flex justify-center items-center'> For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. <br/> Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="">
      
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6 ">
          <h2 className="title-font text-2xl font-semibold text-gray-900 tracking-widest ">
            ADDRESS
          </h2>
          
          <a className="text-indigo-500 leading-relaxed">Mobile: +(84) 546-6789
          Hotline: +(84) 456-6789</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-2xl mt-4">
            Working time
          </h2>
          <p className="leading-relaxed">Monday-Friday: 9:00 - 22:00
          Saturday-Sunday: 9:00 - 21:00</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-2xl">
            EMAIL
          </h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 className="title-fonttext-2xl font-semibold text-gray-900 tracking-widest text-2xl mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">Mobile: +(84) 546-6789
          Hotline: +(84) 456-6789</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
     
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
 Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Your Subject
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Submit
      </button>
      
    </div>
  </div>
</section>
</div>
)
}
export default page