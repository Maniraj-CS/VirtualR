import React from 'react'
import { IoMenu } from "react-icons/io5";

function Nave() {
  return (
    <div className='flex justify-between items-center py-[1.5vw] lg:py-[1.1vw] sticky backdrop-blur border-y-[1px] border-gray-400 px-[3vw] lg:px-[5vw] '>
       <div className='flex items-center'>
       <img className='h-[25px] lg:h-[40px] md:h-[30px]' src="src\assets\logo.png"  />
       <h1 className='font-[font1] text-[3vw] lg:text-[1.5vw] md:text-[2vw]  '>VirtualR</h1>
       </div>         
        <div className='hidden lg:capitalize font-[font1] font-medium lg:flex gap-[2vw] '>
         {
            ["features","workflow","pricing","Testimonials"].map((data , index) =>{
                return (
                    <h1 key={index} className='text-gray-400 hover:text-white cursor-pointer'>{data}</h1>
                )
            })
         }
        </div>
        <div  className=' lg:flex gap-8 hidden'>
             <button className='border-[1px] border-white px-[2vw] py-[0.2vw] rounded-md text-[1.1vw]'>sing in </button>
             <button className='bg-[rgb(186,73,20)] px-[2vw] py-[0.2vw] rounded-md text-[1.1vw]'>sing up</button>
        </div>

       <IoMenu className='lg:hidden text-[5vw] md:text-[3vw]' />
    </div>
  )
}

export default Nave
