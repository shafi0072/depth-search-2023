import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const index = () => {

  const services = [
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
      <div className='row py-5 mt-5'>

        <div className="col-md-6">
          <div className='w-25'>
            <p className='uppercase text-light border-b-2 border-red-600'>what we do</p>
          </div>
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
        <div className="col-md-6">
          <div className="row">
          {
            services?.map((items, index) => <div className='col-md-6 mb-4' key={index}>
              <a href="#" className="block max-w-sm p-6 bg-gray-900   rounded-lg shadow hover:bg-gray-800 ">
                <img src={items?.logo} className='h-20 w-full' alt="" />
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{items?.name}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{items?.description}</p>
              </a>
            </div>)
          }
          </div>


        </div>
      </div>
    </div>
  );
};

export default index;