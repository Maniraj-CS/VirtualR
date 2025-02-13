import React from 'react'
import Pic_Card from '../Part/Pic-Card'
import { useGSAP } from '@gsap/react';
import  { gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Pic() {
  let title = ["Code merge made easy","Review code without worry","AI Assistance to reduce time","Share work in minutes"]

  useGSAP(()=>{
    
      gsap.from(".card-cont", {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: ".card-cont",
          start: "top 95%",
          end: "top 20%",
          scrub: true,
          
        },
      })

      gsap.from(".image-sec", {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: ".image-sec",
          start: "top 95%",
          end: "top 20%",
          scrub: true,
          
        },
      })

      gsap.from(".text_span", {
         
         opacity:0,
         delay:0.5,
         duration:2,
        stagger: {
          amount: 1,
          from: Math.floor(gsap.utils.random(5, 10)),
        },
        scrollTrigger: {
          trigger: ".text_span",
          start: "top 95%",
          scrub: true,
        },
      });
      
  
})
  return (
    <div className='mt-[5vw]  flex flex-col   '>
        <h1 className='capitalize text-4xl text-center'>
          {
            ['A','c','c','e','l','e','r','a','t','e'," ",'Y','o','u','r'].map((e,index) =>{
                return <span key={index} className='text_span'>{e}</span>
            })
          }{" "} <span className='text-orange-700'>{
            ['C', 'o', 'd', 'i', 'n', 'g', ' ', 'W', 'o', 'r', 'k', 'f', 'l', 'o', 'w'].map((e,index)=>(
              <span key={index} className='text_span'>{e}</span>
            ))
          }</span>
        </h1> 

        <div className='flex flex-col  gap-10 mt-32 items-center lg:flex-row lg:ml-32'>
             <img src="src\assets\code.jpg" className=' h-[70vw] lg:h-[40vw] image-sec ' />
             <div className='mt-12 flex flex-col gap-10 items-start mb-20 card-cont'>
              <Pic_Card title={title[0]}></Pic_Card>
              <Pic_Card title={title[1]}></Pic_Card>
              <Pic_Card title={title[2]}></Pic_Card>
              <Pic_Card title={title[3]}></Pic_Card>
             </div>
        </div>
      
    </div>
  )
}

export default Pic

