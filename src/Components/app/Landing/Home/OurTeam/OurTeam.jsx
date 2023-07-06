import React from 'react';
import Team from '@/src/Components/app/Landing/Home/OurTeam/Team'
const OurTeam = () => {
    return (
        <div>
            <div>
                <h1 className='text-center text-3xl font-bold'><span className='text-light'>Our</span> <span className='text-red-600'>Team</span></h1>
            </div>
            <Team />
        </div>
    );
};

export default OurTeam;