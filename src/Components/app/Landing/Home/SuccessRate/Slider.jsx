import React from 'react';
import Slider from "react-slick-slider";
import Head from 'next/head'
import { ReviewData } from '@/src/constant/Review/ReviewData'
const Sliders = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 1,
    speed: 500
  };

  return (
    <>
      <Head>
        {/* <style>{cssstyle}</style> */}
      </Head>
      <Slider {...settings}>

        {
          ReviewData.map((items, index) => <div class=" flex text-center w-80" key={index}>

            <div className='flex justify-center mr-2 mb-10' >
              <div class="mb-12 md:mb-0 bg-gray-900 py-3 px-4 rounded ">
                <div class="mb-6 flex justify-center">
                  <img
                    src={items.imageUrl}
                    class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
                </div>
                <h5 class="mb-4 text-xl font-semibold text-light text-center">{items?.name}</h5>
                <h6 class="mb-4 font-semibold text-primary dark:text-primary-500 text-center">
                  Graphic Designer
                </h6>
                <p class="mb-4 text-light text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24">
                    <path
                      d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  {items.review}
                </p>
                <ul class="mb-0 flex items-center justify-center">
                  {Array.from({ length: items.stars }, (_, index) => (
                    <li key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="h-5 w-5 text-yellow-500">
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd" />
                      </svg>
                    </li>
                  ))}


                </ul>
              </div>
            </div>

          </div>
          )
        }
      </Slider>
    </>
  );
};

export default Sliders;

// const cssstyle = `
// .container {
//   margin: 0 auto;
//   padding: 0px 40px 40px 40px;
//   max-width: 800px;
// }
// h3 {
//     background: #5f9ea0;
//     color: #fff;
//     font-size: 36px;
//     line-height: 100px;
//     margin: 10px;
//     padding: 2%;
//     position: relative;
//     text-align: center;
// }
// .slick-next:before, .slick-prev:before {
//     color: #000;
// }
// .center .slick-center h3 {
//     color: #e67e22;
//     opacity: 1;
//     -ms-transform: scale(1.08);
//     transform: scale(1.08);
// }
// .center h3 {
//     transition: all .10s ease;
// }
// `;