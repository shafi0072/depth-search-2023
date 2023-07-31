import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Services from './Services'
const index = () => {

  const services = [
    {
      name: 'Mobile Development',
      logo: '/images/services/setting-mobile.svg',
      description: 'aasdsadasdasdasdadasdasdasd'
    },
    {
      name: 'web Development',
      logo: 'https://www.edureka.co/blog/wp-content/uploads/2018/10/How-to-become-a-Full-Stack-Web-Developer--451x300.png',
      description: 'aasdsadasdasdasdadasdasdasd'
    },
    {
      name: 'Mobile Development',
      logo: '/images/services/setting-mobile.svg',
      description: 'aasdsadasdasdasdadasdasdasd'
    },
    {
      name: 'Mobile Development',
      logo: '/images/services/setting-mobile.svg',
      description: 'aasdsadasdasdasdadasdasdasd'
    },
  ]

  return (
    <div className="container">
      <h1 className="text-light font-bold text-2xl text-center uppercase mt-5 mb-3">Our <span className='text-red-600'>Services</span></h1>
      <div className="text-center">
        
        <div className='mt-3'>
          <h1 className="text-4xl text-light font-bold">
            Services We’re
            Offering
          </h1>
          <p className='text-light mt-2'>
            There are many variations of passages of lorem ipsum available but the majority have suffered in some form by injected humour.
          </p>

        </div>
        <div>
          <button className=" px-2 py-2 rounded-full  bg-red-600 hover:bg-red-700 text-light font-bold text-xl mt-4">
            <PlayArrowIcon fontSize='large' />
          </button>
          <span className='text-light ml-2'>Watch Our Services in a short Video</span>
        </div>
      </div>
      <div>
        <Services/>
      </div>
    </div>
  );
};

export default index;