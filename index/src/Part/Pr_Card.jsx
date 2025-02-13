import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

export default function Pr_Card({storage, fild,price,className}) {
  return (
    <div className='flex justify-center mt-10 mb-9 font-[font1] '>
      <div className='flex flex-col gap-20'>
        <div className={`${className}   flex flex-col gap-12 border py-8 px-10 border-gray-500 shadow-md rounded-lg  lg:w-[26vw] w-[70vw] sm:w-[50vw] md:w-[40vw]`}>
          <h1 className='text-5xl'>Free</h1>
          <h1 className='text-5xl'>${price}<span className='text-2xl text-gray-600 font-thin'>/Month</span></h1>
          <ul className='flex flex-col gap-8'>
            <li className='flex gap-3'>
            <h1 className=' text-2xl'>
            <FaRegCheckCircle />
            </h1>
            <h1>Private board sharing</h1>
            </li>
            <li className='flex gap-3'>
            <h1 className=' text-2xl'>
            <FaRegCheckCircle />
            </h1>
            <h1>{storage}</h1>
            </li>
            <li className='flex gap-3'>
            <h1 className=' text-2xl'>
            <FaRegCheckCircle />
            </h1>
            <h1>{fild}</h1>
            </li>
            <li className='flex gap-3'>
            <h1 className=' text-2xl'>
            <FaRegCheckCircle />
            </h1>
            
            <h1>Private Mode</h1>
            </li>
            </ul>
          <button className='mt-6 border py-3 rounded-lg border-orange-700 hover:bg-orange-800 hover:scale-[0.99]'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}
