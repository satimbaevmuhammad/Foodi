import { useState } from 'react';
import logo from './assets/logotip.svg';
import score from './assets/Group 2.svg';
import lupa from './assets/lupa.svg';
import telfon from './assets/tell.svg';
import oodi from './assets/oodi.svg';

function App() {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
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
  );
}

export default App;
