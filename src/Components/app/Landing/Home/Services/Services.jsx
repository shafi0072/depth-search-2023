import React, { useState } from 'react';

const Services = () => {
  const [tabs, setTabs] = useState('web-development')
  const webTech = [
    {
      name: 'Vue.js',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png',

    },
    {
      name: 'React.js',
      image: 'https://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png',
    },
    {
      name: 'Angular Js',
      image: 'https://angular.io/assets/images/logos/angular/angular.png',
    },
    {
      name: 'Node Js',
      image: 'https://cdn-icons-png.flaticon.com/256/919/919825.png',
    },
    {
      name: 'Php',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png',
    },
    {
      name: 'Laravel',
      image: 'https://static.vecteezy.com/system/resources/previews/012/697/294/original/3d-laravel-programming-framework-logo-free-png.png',
    },
    {
      name: 'Django',
      image: 'https://cdn.iconscout.com/icon/free/png-256/free-django-3550620-2970205.png',
    },
  ]
  const MobileTech = [
    {
      name: 'Flutter',
      image: 'https://w7.pngwing.com/pngs/537/866/png-transparent-flutter-hd-logo.png',

    },
    {
      name: 'React Native',
      image: 'https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1523028284340-2FY0DO8X58JYL5Z2NF2I/512px-React-icon.svg.png',
    },
  ]
  const cloudDatabase = [
    {
      name: 'Amazon Web Service',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png',

    },
    {
      name: 'Google Cloud',
      image: 'https://www.pngmart.com/files/23/Google-Cloud-Logo-PNG-Photo.png',
    },
    {
      name: 'Firebase',
      image: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png',

    },
    {
      name: 'MongoDB',
      image: 'https://seeklogo.com/images/M/mongodb-logo-655F7D542D-seeklogo.com.png',
    },
    {
      name: 'Postgre',
      image: 'https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png',

    },
    {
      name: 'My Sql',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/1448px-Database-mysql.svg.png',
    },
  ]
  return (
    <div className='container'>
      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2" onClick={() => setTabs('web-development')}>
            <a class={`inline-block p-4 ${tabs === 'web-development' ? "text-red-600 border-b-2 border-red-600 active" : "border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>Web Development</a>
          </li>
          <li class="mr-2" onClick={() => setTabs('Mobile')}>
            <a class={`inline-block p-4 ${tabs === 'Mobile' ? "text-red-600 border-b-2 border-red-600  rounded-t-lg active" : "border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`} aria-current="page">Mobile App Development</a>
          </li>
          <li class="mr-2" onClick={() => setTabs('Clound & Database')}>
            <a class={`inline-block p-4 ${tabs === 'Clound & Database' ? "text-red-600 border-b-2 border-red-600  rounded-t-lg active" : "border-b-2 border-transparent rounded-t-lg text-white hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}>Clound & Database</a>
          </li>
         

        </ul>
      </div>
      {
        tabs === 'web-development' && <div className='row'>
          {
            webTech?.map((items, index) => <div key={index} className='col-md-3 my-4'>
              <div className='flex justify-center'>
                <img src={items?.image} alt="" className='w-[100px] h-[100px]'/>
              </div>
              <div className='text-center'>
                <h1 className="text-xl text-white">{items?.name}</h1>
              </div>
            </div>)
          }
        </div>
      }
      {
        tabs === 'Mobile' && <div className='row'>
          {
            MobileTech?.map((items, index) => <div key={index} className='col-md-3 my-4'>
              <div className='flex justify-center'>
                <img src={items?.image} alt="" className='w-[100px] h-[100px]'/>
              </div>
              <div className='text-center'>
                <h1 className="text-xl text-white">{items?.name}</h1>
              </div>
            </div>)
          }
        </div>
      }
      {
        tabs === 'Clound & Database' && <div className='row'>
          {
            cloudDatabase?.map((items, index) => <div key={index} className='col-md-3 my-4'>
              <div className='flex justify-center'>
                <img src={items?.image} alt="" className='w-[100px] h-[100px]'/>
              </div>
              <div className='text-center'>
                <h1 className="text-xl text-white">{items?.name}</h1>
              </div>
            </div>)
          }
        </div>
      }
    </div>
  );
};


export default Services;