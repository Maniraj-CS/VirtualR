import React from 'react'
import Review_Card from '../Part/Review_Card'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Review() {
  useGSAP(()=>{
    gsap.from('.container-card', {
      opacity: 0,
      scale:0.7,
      duration: 1,
      scrollTrigger: {
        trigger: '.container-card',
        start: "top 95%",
        end: "top 20%",
        scrub: true,
      
      },
    })
  })
  return (
    <div className='mt-16 font-[font1] flex flex-col mb-10 '>
        <h1 className='text-center text-4xl lg:text-5xl'>What people are saying</h1>
        <div className="container-card grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 mt-20 gap-6 ">
            <Review_Card index={0}></Review_Card>
            <Review_Card index={1}></Review_Card>
            <Review_Card index={2}></Review_Card>
            <Review_Card index={3}></Review_Card>
            <Review_Card index={4}></Review_Card>
            <Review_Card index={5}></Review_Card>
        </div>
    </div>
  )
}

export default Review
