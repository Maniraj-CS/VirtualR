
import React, {  useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


function Nave() {

  const [value, setValue] = useState(true);
  const [final, setFinal] = useState(false);
 

  let HandFunction = ()=>{
        setValue(false)
        setFinal(true)
  }

  let handleclick = ()=>{
    setValue(true)
    setFinal(false)
  }
  

  return (
    
      
        <div  className='fixed w-full top-0 z-10 nave '>
      <div  className='flex justify-between h-[8vh] items-center py-[1.5vw] lg:py-[1.1vw] sticky backdrop-blur-[0.6rem] border-y-[0.0001rem] border-gray-400 px-[3vw] lg:px-[5vw] '>
       <div  className='flex items-center  one  opacity-1'>
       <img className='h-[35px] lg:h-[40px] md:h-[42px] ' src="src\assets\logo.png"  />
       <h1 className='font-[font1] text-[3.3vw] lg:text-[1.5vw] md:text-[3vw]  '>VirtualR</h1>
       </div>         
        <div className='hidden lg:capitalize font-[font1] font-medium lg:flex gap-[2vw] '>
         {
            ["features","workflow","pricing","Testimonials"].map((data , index) =>{
               return (
                    <h1 key={index} className='text-gray-400 hover:text-white cursor-pointer two'>{data}</h1>
                )
            })
         }
        </div>

        <div  className=' lg:flex gap-8 hidden'>
             <button className='border-[1px] border-white px-[2vw] py-[0.2vw] three rounded-md text-[1.1vw]'>sing in </button>
             <button className='bg-[rgb(186,73,20)] px-[2vw] py-[0.2vw] four rounded-md text-[1.1vw]'>sing up</button>
        </div>
        {value == true ?<IoMenu onClick={HandFunction} className='lg:hidden text-[5vw] md:text-[5vw] cursor-pointer one' /> : <RxCross2 onClick={handleclick} className='lg:hidden text-[5vw] md:text-[5vw] cursor-pointer one' />}
        
      </div>
      <div className={`hidden-nave absolute  ${final == true ?"" :"hidden" }  backdrop-blur-[0.6rem]    py-3  w-full `}  >
       <div className='lg:hidden capitalize font-[font1] font-medium flex flex-col items-center gap-[3vw] '>
         {
            ["features","workflow","pricing","Testimonials"].map((data , index) =>{
               return (
                    <h1 key={index} className='text-white cursor-pointer hover:text-[rgb(186,73,20)]'>{data}</h1>
                )
            })
         }
        </div>
        <div  className=' flex md:gap-16 gap-10 justify-center mt-8 lg:hidden'>
             <button className='bg-[rgb(186,73,20)]  px-[1.2vw] md:min-w-28  min-w-24 py-[1vw] rounded-md text-[2.1vw]'>sing in </button>
             <button className=' px-[1.2vw] md:min-w-28 border-[1px] border-white  min-w-24 py-[1vw] rounded-md text-[2.1vw]'>sing up</button>
        </div>
       </div>
        </div>

  )
}

export default Nave
