import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tora from './assets/tora.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className='w-[1200px] mx-auto mt-[40px] '>
          <div className='flex justify-between items-start '>
            <div>
              <img src={tora} alt="" className='w-[90px]' />
              <p className='font-[500] text-[24px] text-[#929090] mt-[37px] '>
                Savor the artistry where <br />
                every dish is a culinary <br />
                masterpiece
              </p>
            </div>
            <div>
              <p className='font-[600] text-[20px] text-[#000000] '>
                Useful links
              </p>
              <p className='font-[500] text-[18px] text-[#929090] mt-[36px] '>
                About us
              </p>
              <p className='font-[500] text-[18px] text-[#929090] mt-[31px] '>
                Events
              </p>
              <p className='font-[500] text-[18px] text-[#929090] mt-[31px] '>
                Blogs
              </p>
              <p className='font-[500] text-[18px] text-[#929090] mt-[31px] '>
                FAQ
              </p>
            </div>
            <div>
              <p className='font-[600] text-[20px] text-[#000000] '>
                Main Menu
              </p>
              <p className='font-[500] text-[18px] text-[#929090] mt-[36px] '>
                Home
              </p>
              <p className='font-[500] text-[18px] text-[#929090] mt-[31px] '>
                Offers
              </p>
              <p className='font-[500] text-[18px] text-[#929090] mt-[31px] '>
                Menus
              </p> 
              <p className='font-[500] text-[18px] text-[#929090] mt-[31px] '>
                Reservation
              </p>
            </div>
            <div>
            <p className='font-[600] text-[20px] text-[#000000] '>
            Contact Us
              </p>
              <p className='font-[500] text-[18px] text-[#929090] mt-[36px] '>
              example@email.com
              </p>
              <p className='font-[500] text-[18px] text-[#929090] mt-[31px] '>
              +64 958 248 966
              </p>
              <p className='font-[500] text-[18px] text-[#929090] mt-[31px] '>
              Social media
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
