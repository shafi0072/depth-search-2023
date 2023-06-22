import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const index = () => {
  return (
    <div className='container'>
      <div className='row '>
      <div className="col-md-6 pt-5">
        <div className='fadeIn'>
        <h1 className="text-7xl font-bold text-light mt-5">Welcome to <br /><span className='text-red-600'>Depth Search</span></h1>
        <h1 className="text-xl  text-light uppercase mt-2">we build high quality apps for web & mobile</h1>
        </div>
        <div className='fadeIn pt-5'>
        <h1 className="text-2xl  text-red-600  font-bold uppercase mt-5">GET IN TOUCH FOR A QUOTE</h1>
        </div>
        <div>
        <button className=" px-5 py-3 rounded bg-red-600 hover:bg-red-700 text-light font-bold text-xl mt-4 mr-3">Get Started</button>
        <button className=" px-2 py-2 rounded-full  bg-red-600 hover:bg-red-700 text-light font-bold text-xl mt-4">
          <PlayArrowIcon fontSize='large'/>
        </button>
        </div>
      </div>
      <div className="col-md-6 pt-5">
        <div className='image_drop'>
        <img className='mobileImage' src="https://screentimelabs.com/wp-content/uploads/2019/09/ScreenTime-Best-Parental-Control-App-gps-800x487.png" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default index;