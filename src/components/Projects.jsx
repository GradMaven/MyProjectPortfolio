import React from 'react'

function Projects() {
  return (
    <div className='bg-[#BF8C73] flex flex-col items-center'>

        <h2 id="projects" className='text-[#1E493D] text-2xl font-bold mt-6'>My Projects</h2>
        
        <div className='grid grid-cols-2 gap-4 mt-4 mb-4 cursor-pointer'>
            <a href="https://travel-planner-app-pied.vercel.app/">
            <img src="/images/travel-planner-design.JPG" alt="travel planner project"
             className='rounded-md w-full h-64 object-cover p-2 transition-transform 
             duration-300 ease-in-out transform hover:scale-105 hover:brightness-110'/></a>
            <a href='https://naizop.com/buy-tiktok-followers'>
            <img src="/images/tiktok-naizop.JPG" alt="tiktok-naizop" 
            className='rounded-md w-full h-64 object-cover p-2 transition-transform 
            duration-300 ease-in-out transform hover:scale-105 hover:brightness-110' /></a>
            <a href="https://www.figma.com/design/fZarhYcD1Yi8UQeN6POjx5/Homepage--Copy-
            ?node-id=0-1&p=f&t=sd4QkooHDLMBmVOv-0">
              <img src="/images/figmadesign1.JPG" alt=" Figma design" 
            className='rounded-md w-full h-64 object-cover p-2 transition-transform 
            duration-300 ease-in-out transform hover:scale-105 hover:brightness-110' /></a>
            <img src="/images/figmamobiledesign.JPG" alt="Figma design" 
            className='rounded-md w-full h-64 object-cover p-2 transition-transform 
            duration-300 ease-in-out transform hover:scale-105 hover:brightness-110' />
        </div>
        
        </div>
  )
}

export default Projects