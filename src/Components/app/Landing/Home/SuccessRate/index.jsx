import React from 'react';
import Sliders from './Slider'
const index = () => {
  return (
    <div className='container'>
      <h1 className="text-light font-bold text-2xl text-center uppercase mt-5 ">Rate Of Our <span className='text-red-600'>Success</span> With Multiple <span className='text-red-600'>Clients</span></h1>
      <div className='row py-5 '></div>

      <div className="row">
        <div className="col-md-6">
          <div className='mb-3'>
            <h1 className="text-light text-md font-bold mb-2">Communication and Proper Flow</h1>
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">

              <div class="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "95%" }}> 95%</div>
            </div>
          </div>
          <div className='mb-3'>
            <h1 className="text-light text-md font-bold mb-2">Project Success</h1>
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">

              <div class="bg-red-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "100%" }}> 100%</div>
            </div>
          </div>
          <div className='mb-3'>
            <h1 className="text-light text-md font-bold mb-2">Ontime Project Deliver</h1>
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">

              <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "97%" }}> 97%</div>
            </div>
          </div>
          <div className='mb-3'>
            <h1 className="text-light text-md font-bold mb-2">Client Satisfaction</h1>
            <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: "100%" }}> 100%</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl">
            <h3
              class="mb-6 text-light text-3xl font-bold text-neutral-800 dark:text-neutral-200">
              Testimonials
            </h3>
            <p class="mb-6 pb-2 md:mb-12 md:pb-0 text-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
              amet numquam iure provident voluptate esse quasi, veritatis totam
              voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>
          <Sliders/>

         
        </div>
      </div>
      
    </div>
  );
};

export default index;