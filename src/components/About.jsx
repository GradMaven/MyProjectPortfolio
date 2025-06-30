import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-[#BF8C73] grid grid-cols-1 md:flex-row items-center justify-center gap-8 py-10 px-4 md:px-10">
     
     <div className='flex flex-row'>
      {/* Profile Image */}
      <div className="w-full max-w-xs md:max-w-sm flex justify-center">
        <img
          src="/images/profilepic.jpeg"
          alt="profile"
          className="rounded-full object-cover w-[250px] h-[250px]"
        />
      </div>

      {/* Text Content */}
      <div className="w-full mx-6 md:max-w-2xl text-center md:text-left">
        <h2 id="about" className="text-[#1E493D] text-3xl font-bold mb-4">About Me</h2>
        <h3 className="text-[#1E493D] text-2xl font-bold">Frontend Engineer</h3>
        <p className="text-white font-semibold mb-6 mt-4 text-justify text-sm sm:text-base">
          Highly skilled Front End Developer with three years of experience in creating visually appealing 
          and user-friendly websites. Proficient in HTML, CSS, and JavaScript, with a strong understanding 
          of modern web development technologies and frameworks. Committed to delivering high-quality code 
          and exceptional user experiences. Excellent problem-solving and communication skills.
        </p>

     </div>
     </div>
      
    <div className='flex flex-col items-center justify-center'>

      <button
          onClick={handleToggle}
          className="bg-[#041915] text-white px-6 py-2 rounded-lg font-semibold hover:ring-2 hover:ring-white transition"
        >
          {showMore ? 'See Less' : 'See More'}
        </button>

        {showMore && (
          <div>
          <div className="mt-4 text-left">
            <h3 className="text-[#1E493D] text-2xl font-bold mt-2">Experience</h3>

            {/* Job 1 */}
            <h4 className="text-[#C2C2C2] text-xl font-semibold mt-4">Fullstack Developer</h4>
            <h5 className="text-[#041915]">
              Business Web Solutions <span className="text-[#1E493D] font-bold">India</span>
            </h5>
            <h5 className="text-[#041915] indent-4">April 2025 – Present</h5>
            <p className="text-white font-semibold mt-2 text-sm sm:text-base">
              Applying various stacks and technologies to develop and implement web solutions 
              for businesses across the world.
            </p>

            {/* Job 2 */}
            <h4 className="text-[#C2C2C2] text-xl font-semibold mt-4">Frontend Developer</h4>
            <h5 className="text-[#041915]">Freelance: Upwork, Fiverr, Freelancer</h5>
            <h5 className="text-[#041915] indent-4">February 2022 – Present</h5>
            <p className="text-white font-semibold mt-2 text-justify text-sm sm:text-base">
              I help clients online with their business needs. I have worked with various 
              businesses, collaborating with UI/UX designers and backend developers to develop 
              high-quality and user-friendly web solutions.
            </p>
          </div>

          <div>
             <h3 className="text-[#1E493D] text-2xl font-bold mt-2 ">Tools and Software</h3>
             <h4 className="text-white text-xl font-bold mt-2" >Software Dev:</h4>
             <ul className='text-[#C2C2C2] font-medium indent-4'>
                <li>Languages: JavaScript, Java, Python</li>
                <li>Frameworks: React, NodeJS, ExpressJS</li>
                <li>Database: MongoDB, PostegreSQL, SQLite</li>
                <li>Tools: Firebase, Git, Postman</li>
             </ul>
             <h4 className="text-white text-xl font-bold mt-2" >Project Management:</h4>
             <ul className='text-[#C2C2C2] font-medium indent-4'>
                <li>Microsoft Project</li>
                <li>Agile Project Management</li>
                <li>Waterfall Project Management</li>
                 <li>Scrum</li>
                <li>Kanban</li>
               
             </ul>
            
          </div>
          </div>
        )}
      
    </div>
        

    
      
    </div>
  );
}

export default About;
