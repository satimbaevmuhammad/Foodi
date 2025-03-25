import { useState } from 'react';
import logo from './assets/logotip.svg';
import score from './assets/Group 2.svg';
import lupa from './assets/lupa.svg';
import telfon from './assets/tell.svg';
import oodi from './assets/oodi.svg';

import gam from '../src/assets/burger.svg';
import sendwich from '../src/assets/sendwich.svg';
import ice from '../src/assets/icecream.svg';
import sok from '../src/assets/sok.svg';
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
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <div>
      <header className='px-[154px] my-[64px]'>
        <nav className='flex items-center justify-between'>
          <div className='flex gap-1'>
            <div className="bg-[#39DB4A] flex justify-center items-center rounded-md w-[34px] h-[41px]">
              <img className='w-[18px] h-[23px]' src={logo} alt="" />
            </div>
            <img src={oodi} alt="" />
          </div>

          <ul className='flex gap-10'>
            <li><a className='hover:text-[#39DB4A]' href="#">Home</a></li>

            {['Menu', 'Offers', 'Services'].map((item) => (
              <li key={item} className='relative'>
                <button onClick={() => toggleDropdown(item)} className='flex items-center gap-2'>
                  <a className='hover:text-[#39DB4A]' href="#">{item}</a>
                  <img className='w-[11px] h-[6px]' src={score} alt="" />
                </button>
                {dropdown === item && (
                  <ul className='absolute left-0 mt-2 w-[150px] bg-white shadow-lg rounded-md py-2'>
                    <li className='px-4 py-2 hover:bg-gray-200'><a href="#">Option 1</a></li>
                    <li className='px-4 py-2 hover:bg-gray-200'><a href="#">Option 2</a></li>
                    <li className='px-4 py-2 hover:bg-gray-200'><a href="#">Option 3</a></li>
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className='flex items-center gap-[51px]'>
            <img className='w-[32px] h-[32px]' src={lupa} alt="" />
            <button className='flex items-center justify-center w-[179px] gap-2 h-[60px] rounded-[40px] bg-[#39DB4A]'>
              <img className='w-[24px] h-[24px]' src={telfon} alt="" />
              <span className='text-[20px] text-white font-medium'>Contact</span>
            </button>
          </div>
        </nav>
      </header>
      <section className="flex flex-col items-center justify-center min-h-screen p-4">
        <p className="text-[10px] text-red-500 font-semibold uppercase">Customer Favorites</p>
        <h1 className="text-3xl font-bold text-gray-800 mt-1">Popular Categories</h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center w-[326px]">
            <div className="bg-[#C1F1C6] rounded-full p-4 flex items-center justify-center w-20 h-20">
              <img src={gam} alt="" className="w-12 h-12" />
            </div>
            <h2 className="text-lg font-semibold text-gray-700 mt-3">Main Dish</h2>
            <p className="text-gray-500 text-sm">(86 dishes)</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center w-[326px]">
            <div className="bg-[#C1F1C6] rounded-full p-4 flex items-center justify-center w-20 h-20">
              <img src={sendwich} alt="" className="w-12 h-12" />
            </div>
            <h2 className="text-lg font-semibold text-gray-700 mt-3">Breakfast</h2>
            <p className="text-gray-500 text-sm">(12 dishes)</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center w-[326px]">
            <div className="bg-[#C1F1C6] rounded-full p-4 flex items-center justify-center w-20 h-20">
              <img src={ice} alt="" className="w-12 h-12" />
            </div>
            <h2 className="text-lg font-semibold text-gray-700 mt-3">Dessert</h2>
            <p className="text-gray-500 text-sm">(48 dishes)</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center w-[326px]">
            <div className="bg-[#C1F1C6] rounded-full p-4 flex items-center justify-center w-20 h-20">
              <img src={sok} alt="" className="w-12 h-12" />
            </div>
            <h2 className="text-lg font-semibold text-gray-700 mt-3">Browse All</h2>
            <p className="text-gray-500 text-sm">(255 items)</p>
          </div>
        </div>
      </section>
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
    </div>
  );
};

// First Component (App.js)

export default App