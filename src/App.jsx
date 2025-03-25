import React from "react";
import gam from '../src/assets/burger.svg';
import sendwich from '../src/assets/sendwich.svg';
import ice from '../src/assets/icecream.svg';
import sok from '../src/assets/sok.svg';


const App = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">

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


    </div>


  );
};

export default App;