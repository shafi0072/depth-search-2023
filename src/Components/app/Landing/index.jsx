import React from 'react';
import Headers from './Home'
import Partners from './Home/Partener'
import Services from './Home/Services'
import LatestProjects from './Home/LatestProject'
import SuccessRate from '@/src/Components/app/Landing/Home/SuccessRate'
import OurTeam from '@/src/Components/app/Landing/Home/OurTeam/OurTeam'
import ConactUs from '@/src/Components/app/Landing/Home/ContactUs'
import Footer from '@/src/Components/app/Landing/Home/Footer/Footer'

const index = () => {
  return (
    <div>
      <Headers/>
      <Partners/>
      <Services/>
      <LatestProjects/>
      <SuccessRate/>
      <OurTeam />
      <Footer />
    </div>
  );
};

export default index;