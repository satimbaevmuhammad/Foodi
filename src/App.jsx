// First Component (App.js)


import React from 'react';
import cat from '../public/assets/icons/cat.svg';
import fast from '../public/assets/icons/fast.svg';
import online from '../public/assets/icons/online.svg';
import gift from '../public/assets/icons/gift.svg';

const App = () => {
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
    <div className="min-h-screen bg-white flex flex-col">
      <div className="container mx-auto px-4 md:px-[156px] flex flex-col md:flex-row items-center gap-[100px]">
        <div className="w-full md:w-1/2 md:pr-12">
          <div className="text-red-500 uppercase tracking-wide mb-4">Our Story & Services</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Culinary Journey And Services</h1>
          <p className="text-gray-600 max-w-[400px] mb-8">
            Rooted in passion, we curate unforgettable dining experiences and offer exceptional services,
            blending culinary artistry with warm hospitality.
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300">
            Explore
          </button>
        </div>

        <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
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

export default App;