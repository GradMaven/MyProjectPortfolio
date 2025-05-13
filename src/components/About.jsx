import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-[#BF8C73] flex flex-col md:flex-row items-center justify-center gap-8 py-10 px-4 md:px-10">
      {/* Profile Image */}
      <div className="w-full max-w-xs md:max-w-sm flex justify-center">
        <img
          src="/images/profilepic.jpeg"
          alt="profile"
          className="rounded-full object-cover w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:max-w-2xl text-center md:text-left">
        <h2 id="about" className="text-[#1E493D] text-3xl font-bold mb-4">About Me</h2>
        <h3 className="text-[#1E493D] text-xl font-bold">Frontend Engineer</h3>
        <p className="text-white font-semibold mb-6 mt-4 text-sm sm:text-base">
          Highly skilled Front End Developer with three years of experience in creating visually appealing 
          and user-friendly websites. Proficient in HTML, CSS, and JavaScript, with a strong understanding 
          of modern web development technologies and frameworks. Committed to delivering high-quality code 
          and exceptional user experiences. Excellent problem-solving and communication skills.
        </p>

        <button
          onClick={handleToggle}
          className="bg-[#041915] text-white px-6 py-2 rounded-lg font-semibold hover:ring-2 hover:ring-white transition"
        >
          {showMore ? 'See Less' : 'See More'}
        </button>

        {showMore && (
          <div className="mt-6 text-left">
            <h3 className="text-[#1E493D] text-xl font-bold mt-2">Experience</h3>

            {/* Job 1 */}
            <h4 className="text-[#041915] font-semibold mt-4">Fullstack Developer</h4>
            <h5 className="text-[#041915]">
              Business Web Solutions <span className="text-[#1E493D] font-bold">India</span>
            </h5>
            <h5 className="text-[#041915]">April 2025 – Present</h5>
            <p className="text-white font-semibold mt-2 text-sm sm:text-base">
              Applying various stacks and technologies to develop and implement web solutions 
              for businesses across the world.
            </p>

            {/* Job 2 */}
            <h4 className="text-[#041915] font-semibold mt-4">Frontend Developer</h4>
            <h5 className="text-[#041915]">Freelance: Upwork, Fiverr, Freelancer</h5>
            <h5 className="text-[#041915]">February 2022 – Present</h5>
            <p className="text-white font-semibold mt-2 text-sm sm:text-base">
              I help clients online with their business needs. I have worked with various 
              businesses, collaborating with UI/UX designers and backend developers to develop 
              high-quality and user-friendly web solutions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
