import React from 'react'

function About() {
  return (
    <div className='mb-32 mt-20 pl-10 sm:px-32 border-t border-gray-600 flex flex-col sm:flex-row sm:flex-wrap  sm:justify-between font-[font1] pt-28  gap-10'>
        <dvi className="first">
             <h1 className='text-xl text-gray-200'>Resoutces</h1>
              <ul className="text-gray-400   mt-5 cursor-pointer flex flex-col gap-1">
                <li className="hover:text-white ">Getting Started</li>
                <li className="hover:text-white  ">Documentation</li>
                <li className="hover:text-white  ">Tutorials</li>
                <li className="hover:text-white  ">API Reference</li>
                <li className="hover:text-white  ">Community Forums</li>
              </ul>
        </dvi>
        <div className="second">
        <h1 className='text-xl text-gray-200'>Platform</h1>
              <ul className="text-gray-400  mt-5 cursor-pointer  flex flex-col gap-1 ">
                <li className="hover:text-white  ">Features</li>
                <li className="hover:text-white  ">Supported Devices</li>
                <li className="hover:text-white  ">System Requirements</li>
                <li className="hover:text-white  ">Downloads</li>
                <li className="hover:text-white  ">Release Notes</li>
              </ul>
        </div>
        <div className="third">
        <h1 className='text-xl text-gray-200'>Community</h1>
              <ul className="text-gray-400  mt-5 cursor-pointer  flex flex-col gap-1 ">
                <li className="hover:text-white  ">Events</li>
                <li className="hover:text-white  ">Meetups</li>
                <li className="hover:text-white  ">Conferences</li>
                <li className="hover:text-white  ">Hackathons</li>
                <li className="hover:text-white  ">Jobs </li>
              </ul>
        </div>
    </div>
  )
}

export default About
