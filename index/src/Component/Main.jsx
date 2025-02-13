import React from 'react'
import vedio2 from "../assets/video2.mp4"
import vedio1 from "../assets/video1.mp4"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"


function Main() {

  useGSAP(() => {
    let tl = gsap.timeline()  
   
    tl.from(".container-1", {
      x: -220,
      opacity: 0,
      delay:0.9,
      duration: 1.5,
    }, "same")  

    tl.from(".container-2", {
      x: 220,
      opacity: 0,
      delay:0.9,
      duration: 1.5,
    }, "same")  

    tl.from(".bt-1", {
      x: -220,
      opacity: 0,
      delay:0.9,
      duration: 1.5,
    }, "same")  

    tl.from(".bt-2", {
      x: 220,
      opacity: 0,
      delay:0.9,
      duration: 1.5,
    }, "same") 
    tl.from(".video-sec-left",{
      x: -220,
      opacity: 0,
      duration: 1,
    },"time")

    tl.from(".video-sec-right",{
      x: 220,
      opacity: 0,
      duration: 1,
    }, "time")
    

  });
      
  
  return (
    <main>
        <div  className="container-1 opacity-1  flex flex-col justify-center mt-[25vw] md:mt-[12vw] lg:mt-[12vw] font-[font1]">
           <p className='text-[8vw] sm:text-[7vw] lg:text-[5vw] leading-none text-center'>VirtualR build tools <span className='text-[#EB6A15]'>for </span></p>
           <p className='text-[8vw] sm:text-[7vw] lg:text-[5vw] leading-none text-center text-[#EB6A15]'>developers</p>
        </div>
        <div className="text-sectioon container-2 mt-[5vw] w-[90%] lg:w-[70%] m-auto">
            <p className='text-center text-gray-500 text-[3vw] sm:text-[2.7vw] md:text-[2.3vw] lg:text-[1.5vw] leading-[3.9vw] sm:leading-[3.1vw] lg:leading-[2.1vw]'>Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>
        </div>
        <div  className=' flex flex-col md:flex-row md:justify-center  md:gap-10 gap-4 items-center mt-16 lg:mt-12 '>
             <button className='bt-1 bg-[rgb(186,73,20)]  px-[1.5vw] lg:px-[2vw] md:px-[0.5vw]   min-w-[30vw] md:min-w-[22vw] lg:min-w-[10vw] py-[1vw] lg:py-0 rounded-md lg:text-[1.4vw] lg:h-[3vw]'>Start for free </button>
             <button className='bt-2 px-[1.2vw]  border-[1px] border-white lg:px-[1.1vw]  min-w-[30vw] lg:min-w-[10vw] md:min-w-[22vw] py-[1vw] lg:py-0 rounded-md lg:text-[1.4vw] lg:h-[3vw]'>Documentation</button>
        </div>
        <div className="video-sec  flex flex-col sm:flex-row gap-[6vw] sm:gap-4  mt-28 sm:mt-20 items-center sm:justify-center relative  ">
            <div className='w-[90vw] sm:w-[45vw] md:w-[40vw] lg:w-[35vw] ' >
            <video src={vedio1} autoPlay loop muted  className='video-sec-left rounded-md border border-orange-700 '></video>
            </div>
           <div className='w-[90vw] sm:w-[45vw] md:w-[40vw] lg:w-[35vw] ' >
           <video src={vedio2} autoPlay loop muted className='video-sec-right rounded-md border border-orange-700 '></video>
           </div>
        </div>
    </main>
  )
}

export default Main
