import React from 'react'

function Review_Card({index}) {
    let para =[
        "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
        "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
        "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
        "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
        "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
        "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    ]
    
    let image = [
        "../src/assets/user1-DvhEV_KB.jpg",
        "../src/assets/user2-Dq5OlDsA.jpg",
        "../src/assets/user3-gEXVevPl.jpg",
        "../src/assets/user4-DVTefW4K.jpg",
        "../src/assets/user5-BF7rZEox.jpg",
        "../src/assets/user6-C1JI-hjQ.jpg",
    ]

    const info = [
        {
            name:"John Doe",
            bio:"Stellar Solutions"
        },
        {
            name:"Jane Smith",
            bio:"Blue Horizon Technologies"
        },
        {
            name:"David Johnson",
            bio:"Quantum Innovations"
        },
        {
            name:"Ronee Brown",
            bio:"Fusion Dynamics"
        },
        {
            name:"Michael Wilson",
            bio:"Visionary Creations"
        },
        {
            name:"Emily Davis",
            bio:"Synergy Systems"
        },
    ]
  return (
    <div className='border min-h-[50vw] sm:min-h-[35vw] lg:min-h-[25vw] md:min-h-[35vw]  flex flex-col  w-[85%]  border-gray-600 rounded-xl pl-10 justify-between lg:justify-around py-4 lg:py-0 shadow-gray-600'>
        <p className='w-[90%] text-gray-400'>{para[index]}</p>
        <div className="button-sec flex gap-5 items-center mt-6 lg:mt-[0]">
            <img src={image[index]} className='h-16 rounded-full'/>
            <div>
                <h1 className="title text-gray-400 mb-3 ">{info[index].name}</h1>
                <h1 className="bio text-gray-600 leading-none">S{info[index].bio}</h1>
            </div>
        </div>
    </div>
  )
}

export default Review_Card
