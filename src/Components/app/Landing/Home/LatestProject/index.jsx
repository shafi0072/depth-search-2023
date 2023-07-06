import React, { useState } from 'react';
import {ProjectData} from '@/src/constant/project/ProjectData'
import Link from 'next/link';
const index = () => {
  const [displayCount, setDisplayCount] = useState(4);
  const handleLoadMore = () => {
    setDisplayCount(displayCount + 4);
  };
  return (
    <div className='container'>
      <h1 className="text-light font-bold text-2xl text-center uppercase mt-5 ">Our Latest <span className='text-red-600'>Projects</span></h1>
      <div className='row py-5 '></div>

 <div className="row">
      {ProjectData.slice(0, displayCount).map((project, index) => (
        <div className="col-md-3 rounded">
        <div key={index} className="image-container rounded">
          <img src={project.images[0].path} alt="" className="project-image rounded" />
          <div className="project-title "><div className='text-3xl'>{project.title}
          <div>
            <Link href={project.url} target='_' className="btn bg-red-600 text-light hover:bg-red-700">Live</Link>
          </div>
          </div></div>
        </div>
        </div>
        
      ))}
      <div className='d-flex justify-content-center mt-3 mb-5'>
      {displayCount < ProjectData?.length && <button className='w-48 btn bg-red-600 text-light hover:bg-red-700' onClick={handleLoadMore}>Load More</button>}
      </div>
    </div>

    </div>
  );
};

export default index;