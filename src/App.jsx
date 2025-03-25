import { useState } from 'react'
import logo from '../public/chef.png'
import polo from '../public/image.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div class="max-w-4xl flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-lg shadow-lg">
<img src={logo} alt="" />
<div class="relative">
   

</div>


<div class="max-w-lg">
    <h3 class="text-red-500 uppercase text-sm font-bold mb-2">Testimonials</h3>
    <h2 class="text-2xl font-bold mb-4">What Our Customers Say About Us</h2>
    <p class="text-gray-600 mb-4">
        "I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The
        attention to detail in presentation and service was impeccable."
    </p>
    <div class="flex items-center gap-2">
        <div class="fle">
           <img src={polo} alt="" />
           
        </div>
        
    </div>
</div>
</div>


    </>
  )
}

export default App
