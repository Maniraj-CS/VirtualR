import React, { useRef } from 'react'
import Card from '../Part/Card'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Feature() {
  let arrI = ["LuBotMessageSquare","IoFingerPrint","LuShieldHalf","FiBatteryCharging","LuPlugZap","LuGlobeLock"]
  let arrT =  ["Drag-and-Drop Interface","Multi-Platform Compatibility","Built-in Templates","Real-Time Preview","Collaboration Tools","Analytics Dashboard"]
    
  useGSAP(()=>{
    gsap.utils.toArray(".card-left").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "top 20%",
          scrub: true,
          
        },
      })
    })
    gsap.utils.toArray(".card-right").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "top 20%",
          scrub: true,
        
        },
      })
    })

    gsap.utils.toArray(".card-pop").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        z: -100,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "top 20%",
          scrub: true,
          
        },
      })
    })

    gsap.from(".text_feature", {
         
      opacity:0,
      delay:0.5,
      duration:2,
     stagger: {
       amount: 1,
       from: Math.floor(gsap.utils.random(5, 10)),
     },
     scrollTrigger: {
       trigger: ".text_feature",
       start: "top 100%",
       scrub: true,
       
     },
   });

   gsap.from(".text_feature1", {
         
    opacity:0,
    delay:0.5,
    duration:2,
   stagger: {
     amount: 1,
     from: Math.floor(gsap.utils.random(0, 10)),
   },
   scrollTrigger: {
     trigger: ".text_feature1",
     start: "top 100%",
     scrub: true,
    
   },
 });
  })
 
  return (
    <div className='mt-16 font-[font1]   ' >
        <div className='container1   flex flex-col items-center '>
          <h1  className='text-2xl mt-10 mb-20 text-[rgb(245,113,22)]  opacity-1'>
            {
              ['F', 'e', 't', 'u', 'r', 'e', 's'].map((num , key) =>{
                    return <span key={key} className='text_feature'>{num}</span>
              })
            }
            
          </h1>
          <h1 className='text-4xl mt-8'>
          {
              ['E', 'a', 's', 'i', 'l', 'y', ' ', 'B', 'u', 'i', 'l', 'd',' '].map((num , key) =>{
                    return <span key={key} className='text_feature1'>{num}</span>
              })
            }
            
          <span className='text-[rgb(245,113,22)]'>
          {
              ['Y', 'o', 'u', 'r', ' ', 'C', 'o', 'd', 'e'].map((num , key) =>{
                    return <span key={key} className='text_feature1'>{num}</span>
              })
            }
            </span></h1>
        </div>
        <div className='container2 grid grid-rows-6 sm:grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 sm:grid-cols-2 mt-16 gap-16 px-[6vw] border-b border-gray-600 pb-24  '>
           <Card i={arrI[0]} t={arrT[0]}  index={0} className="card-left" ></Card>
           <Card i={arrI[1]} t={arrT[1]}  index={1} className="card-pop"></Card>
           <Card i={arrI[2]} t={arrT[2]}  index={2} className="card-right"></Card>
           <Card i={arrI[3]} t={arrT[3]}  index={3} className="card-left" ></Card>
           <Card i={arrI[4]} t={arrT[4]}  index={4} className="card-pop"></Card>
           <Card i={arrI[5]} t={arrT[5]}  index={5} className="card-right"></Card>
          
        </div>
    </div>
  )
}

export default Feature
