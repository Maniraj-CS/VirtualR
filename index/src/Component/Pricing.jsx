import React from 'react'
import Pr_Card from '../Part/Pr_Card'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Pricing() {
  let storage = ["5 Gb Storage","10 Gb Storage" , "Unlimited Storage"]
  let fild = ["Web Analytics","Web Analytics (Advance)","High Performance Network"]
  let price = ["0","10","200"]

  useGSAP(()=>{
   
      gsap.from('.anim_left', {
        opacity: 0,
        x: -100,
        duration: 1,
        scrollTrigger: {
          trigger: '.anim_left',
          start: "top 95%",
          end: "top 20%",
          scrub: true,
        
        },
      })

      gsap.from('.anim_right', {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: '.anim_right',
          start: "top 95%",
          end: "top 20%",
          scrub: true,
        
        },
      })
      
      gsap.from('.anim_mid', {
        opacity: 0,
        scale:0.9,
        duration: 1,
        scrollTrigger: {
          trigger: '.anim_mid',
          start: "top 95%",
          end: "top 20%",
          scrub: true,
        
        },
      })
  })
  return (
    <div className='flex flex-col mt-28 '>
       <h1 className='text-5xl text-center  mb-10'>Pricing</h1>
       <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-1'>
       <Pr_Card storage={storage[0]} fild={fild[0]} price={price[0]} className="anim_left"></Pr_Card>
       <Pr_Card storage={storage[1]} fild={fild[1]} price={price[1]} className="anim_mid"></Pr_Card>
       <Pr_Card storage={storage[2]} fild={fild[2]} price={price[2]} className="anim_right"></Pr_Card>
       </div>
    </div>
  )
}

export default Pricing
