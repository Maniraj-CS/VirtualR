import React from 'react'
import { LuBotMessageSquare } from "react-icons/lu";
import { IoFingerPrint } from "react-icons/io5";
import { LuShieldHalf } from "react-icons/lu";
import { FiBatteryCharging } from "react-icons/fi";
import { LuPlugZap } from "react-icons/lu";
import { LuGlobeLock } from "react-icons/lu";


function Card({i,t,index,className}) {
    let obj = {
        LuBotMessageSquare:<LuBotMessageSquare/>,
        IoFingerPrint:<IoFingerPrint/>,
        LuShieldHalf:<LuShieldHalf/>,
        FiBatteryCharging:<FiBatteryCharging/>,
        LuPlugZap :<LuPlugZap />,
        LuGlobeLock:<LuGlobeLock/>
    }

    let para = ["Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
        "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
        "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
        "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
        "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
        "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard."
    ]
  return (
    <div className={`flex gap-5 ${className}`}>
        <div className='text-[rgb(245,113,22)] text-3xl'>
             {
                obj[i]
             }
        </div>
       <div className='flex flex-col gap-5 '>
        <h1 className='text-2xl '>{t}</h1>
        <p className='text-gray-600 '>{para[index]}</p>
       </div>
    </div>
  )
}

export default Card
