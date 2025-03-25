  import React from "react"

function App() {


  return (
    <>
      <p>Aziza yadgarova</p>

      <p>Umar 1318</p>
      <p>hello</p>
    </>
  )
}

export default App

import React from 'react';
import cat from '../public/assets/icons/cat.svg';
import fast from '../public/assets/icons/fast.svg';
import online from '../public/assets/icons/online.svg';
import gift from '../public/assets/icons/gift.svg';

const CulinaryServicesLanding = () => {
  const services = [
    {
      icon: cat,
      title: 'CATERING',
      description: 'Delight your guests with our flavors and presentation'
    },
    {
      icon: fast,
      title: 'FAST DELIVERY',
      description: 'We deliver your order promptly to your door'
    },
    {
      icon: online,
      title: 'ONLINE ORDERING',
      description: 'Explore menu & order with ease using our Online Ordering'
    },
    {
      icon: gift,
      title: 'GIFT CARDS',
      description: 'Give the gift of exceptional dining with Foodi Gift Cards'
    }
  ];

  return (
    <div className="min-h-screen  bg-white flex flex-col p-[156px]">
      <div className="container gap-[100px] mx-auto px-4  flex flex-col md:flex-row items-start">
        <div className="w-full mt-[200px] md:w-1/2 mb-8 md:mb-0 md:pr-12">
          <div className="text-red-500 mt-[53px] uppercase tracking-wide mb-4">Our Story & Services</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Culinary Journey And Services</h1>
          <p className="text-gray-600 w-[400px] h-[126px] mt-[50px] mb-8">
            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services,
            blending culinary artistry with warm hospitality.
          </p>
          <button className="bg-green-500 mt-53px text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
            Explore
          </button>
        </div>

        <div className=" mt-[250px] w-[350px] h-[10px] grid grid-cols-2 gap-[36px]">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="w-[80px] h-[10px] mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <img src={service.icon} alt={service.title} className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CulinaryServicesLanding;
