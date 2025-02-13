import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

function Pic_Card({title}) {
    
  return (
    <div className='flex gap-5 font-[font1] px-[9vw]  md:px-[1vw] '>
        <div className='text-green-500 text-2xl'>
        <FaRegCheckCircle />
        </div>
       <div className='flex flex-col gap-5 '>
        <h1 className='text-1xl '>{title}</h1>
        <p className='text-gray-600  text-sm' >Track the performance of your VR apps and gain insights into user behavior.</p>
       </div>
    </div>
  )
}

export default Pic_Card
