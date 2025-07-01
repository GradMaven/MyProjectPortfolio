import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-[#BF8C73] grid grid-cols-1 items-center justify-center gap-6 py-4 px-4 md:px-4">
     
     <div className='flex flex-col lg:flex-row p-4 items-center'>
      {/* Profile Image */}
      <div className="w-full max-w-xs md:max-w-sm flex justify-center">
        <img
          src="/images/profilepic.jpeg"
          alt="profile"
          className="rounded-full object-cover w-[250px] h-[250px] ring-4 ring-[#12E93D]"
        />
      </div>

      {/* Text Content */}
      <div className="w-full mx-6 md:max-w-2xl text-center md:text-left">
        <h2 id="about" className="text-[#1E493D] text-3xl font-bold mb-4 mt-4">About Me</h2>
        <h3 className="text-[#1E493D] text-2xl font-bold">Frontend Engineer</h3>
        <p className="text-white font-semibold mb-6 mt-4 text-justify text-sm sm:text-base">
          Highly skilled Front End Developer with three years of experience in creating visually appealing 
          and user-friendly websites. Proficient in HTML, CSS, and JavaScript, with a strong understanding 
          of modern web development technologies and frameworks. Committed to delivering high-quality code 
          and exceptional user experiences. Excellent problem-solving and communication skills.
        </p>

     </div>
     </div>
      
    <div className='flex flex-col items-center justify-center text-justify'>
      <button
          onClick={handleToggle}
          className="bg-[#041915] text-white px-6 py-2 rounded-lg font-semibold hover:ring-2 hover:ring-[#12E93D] transition"
        >
          {showMore ? 'See Less' : 'See More'}
        </button>

        {showMore && (
          
          <div className="w-full max-w-3xl mx-auto mt-6 bg-[#1E493D]/10 rounded-xl p-6 shadow-md space-y-6">
            <h3 className="text-[#1E493D] text-2xl font-bold text-center mt-2">Experience</h3>

            {/* Job 1 */}
            <h4 className="text-[#1D493D] text-xl font-semibold">Fullstack Developer</h4>
            <h5 className="text-[#041915] font-medium">
              Business Web Solutions <span className="text-[#12E93D] font-bold">India</span>
            </h5>
            <h5 className="text-[#041915] text-sm italic indent-4">April 2025 – Present</h5>
            <p className="text-white font-medium mt-2 text-sm sm:text-base text-justify">
              Applying various stacks and technologies to develop and implement web solutions 
              for businesses across the world.
            </p>

            {/* Job 2 */}
            <h4 className="text-[#1D493D] text-xl font-semibold">Frontend Developer</h4>
            <h5 className="text-[#041915] font-medium">Freelance: Upwork, Fiverr, Freelancer  
              <span className="text-[#12E93D] font-bold"> Remote</span></h5>
            <h5 className="text-[#041915] text-sm italic indent-4">February 2022 – Present</h5>
            <p className="text-white font-medium mt-2 text-sm sm:text-base text-justify">
              I help clients online with their business needs. I have worked with various 
              businesses, collaborating with UI/UX designers and backend developers to develop 
              high-quality and user-friendly web solutions.
            </p>

            <div>
             <h3 className="text-[#1E493D] text-2xl font-bold mt-4 text-center ">Tools and Software</h3>
              <div className="mt-4 space-y-2">
                <h4 className="text-white text-xl font-bold" >Tech Stack:</h4>
             <ul className='list-disc list-inside text-[#1D493D] font-medium indent-2'>
                <li>Languages: JavaScript, Java, Python</li>
                <li>Frameworks: React, NodeJS, ExpressJS</li>
                <li>Database: MongoDB, PostegreSQL, SQLite</li>
                <li>Tools: Firebase, Git, Postman</li>
             </ul>
             <h4 className="text-white text-xl font-bold " >Project Management:</h4>
             <ul className='list-disc list-inside text-[#1E493D] font-medium indent-2'>
                <li>Microsoft Project</li>
                <li>Agile Project Management</li>
                <li>Waterfall Project Management</li>
                 <li>Scrum</li>
                <li>Kanban</li>
               
             </ul>
              </div>
             
            
          </div>
          </div>

          
        )}
      
    </div>
     <hr className='w-full h-1 bg-[#12E93d] border-0 rounded-sm'></hr>
    </div>
  );
}

export default About;
