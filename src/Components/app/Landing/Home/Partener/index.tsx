import React from 'react';
import Marquee from "react-fast-marquee";
const index = () => {
  const clients = [
    "/images/partners/tsande-logo.png", "/images/partners/suvatrip.png", "/images/partners/tcg-logo.png", "/images/partners/sherpas-logo.png", "/images/partners/high-road-logo.png", , "https://cdn.enochdev.com/enochweb-logo.svg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Upwork_Logo.svg/2560px-Upwork_Logo.svg.png", "/images/partners/2b6b6c5e-255f-42cf-8eed-c72f67f31aad.png",

  ]
  return (
    <div style={{ background: 'black' }} className='py-2'>
      <h1 className="text-light font-bold text-2xl text-center uppercase mt-3 mb-4">Our <span className="text-red-600">Clients</span></h1>
      <Marquee className=''>
        <div className='d-flex align-items-center'>
          {
            clients?.map((items, index) => <div className='mx-5' key={index}>
              <img style={{ width: '150px' }} src={items} alt={index.toString()} />
            </div>)
          }
        </div>

      </Marquee>
    </div>
  );
};

export default index;