import React from 'react';
import Headers from './Home'
import Partners from './Home/Partener'
import Services from './Home/Services'
import LatestProjects from './Home/LatestProject'
import SuccessRate from '@/src/Components/app/Landing/Home/SuccessRate'
const index = () => {
  return (
    <div>
      <Headers/>
      <Partners/>
      <Services/>
      <LatestProjects/>
      <SuccessRate/>
    </div>
  );
};

export default index;