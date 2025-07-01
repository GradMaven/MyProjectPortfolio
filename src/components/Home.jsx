import React, {useState} from 'react';
import { TypeAnimation } from 'react-type-animation';



function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  

  return (
    <div className="w-full bg-[#041915]">
      
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start md:items-center">
        <h3 className="text-[#BF8C73] font-bold text-xl mt-4">Portfolio</h3>

        <button onClick = {toggleMenu} id="menu-btn" class="md:hidden text-white focus:outline-none">
       <img 
        src={isMenuOpen ? "/icons/open-menu.png" : "/icons/close-menu.png"}

       alt="harmburger" className="w-8 h-8" />
      </button>

      

         {/* Desktop Menu */}
        <nav className="hidden md:flex md:items-center mt-4">
          <ul className="text-[#BF8C73] flex flex-col md:flex-row mt-4 md:mt-0 gap-2 md:gap-6">
            <a href="#home" className="text-white hover:text-[#BF8C73] font-bold">Home</a>
            <a href="#about" className="text-white hover:text-[#BF8C73] font-bold">About Me</a>
            <a href="#services" className="text-white hover:text-[#BF8C73] font-bold">Services</a>
            <a href="#projects" className="text-white hover:text-[#BF8C73] font-bold">Projects</a>
            <a href="#contact" className="text-white hover:text-[#BF8C73] font-bold">Contact</a>
          </ul>
        </nav>


        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-2/3 bg-[#041915] text-white z-40 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
        >
          <ul className="flex flex-col mt-20 gap-6 pl-6 text-[#BF8C73]">
            <a href="#home" className="font-bold hover:text-white" onClick={toggleMenu}>Home</a>
            <a href="#about" className="font-bold hover:text-white" onClick={toggleMenu}>About Me</a>
            <a href="#services" className="font-bold hover:text-white" onClick={toggleMenu}>Services</a>
            <a href="#projects" className="font-bold hover:text-white" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="font-bold hover:text-white" onClick={toggleMenu}>Contact</a>
          </ul>
        </div>

      </div>

      
      <div className="flex flex-col-reverse md:flex-row items-center px-4 md:px-8 py-10">
      
        <div className="text-left w-full md:w-1/2 mb-10 md:mb-0">
          <h3 className="text-[#BF8C73] hover:text-[#1E493D] text-3xl sm:text-4xl md:text-5xl mb-6">
            Hello It's Me
          </h3>
          <h2 className="text-[#BF8C73] text-4xl sm:text-4xl md:text-5xl font-bold mb-6 mt-4">
            Leonard Ondigo
          </h2>

          <TypeAnimation
            sequence={[
              'I am a Software Developer',
              1000,
              '',
              500,
              'and a Project Manager',
              500,
              'I build scalable web solutions',
              1000,
            ]}
            wrapper="h4"
            cursor
            repeat={Infinity}
            style={{ fontSize: '1.5rem', color: '#BF8C73', fontWeight: 'bold' }}
          />

          <p className="text-white text-justify font-semibold mt-6 sm:text-base text-sm">
            As a software developer and project manager, I design, develop,
            and implement software solutions while ensuring projects are
            completed on time and within scope. I coordinate with
            cross-functional teams, manage resources, and monitor progress
            to meet project objectives. My role involves solving technical
            challenges, maintaining code quality, and aligning deliverables
            with stakeholder expectations. Additionally, I bridge the gap
            between development and management, ensuring seamless
            collaboration and efficient execution.
          </p>

          {/* Social Icons and CV Button */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a href="https://x.com/leonard_ondigo">
              <img src="/icons/Twitter.png" alt="Twitter" className="w-8 h-8 hover:ring-2 hover:ring-[#12E93D]" />
            </a>
            <a href="https://www.facebook.com/leonard.ondigo.9/">
              <img src="/icons/Facebook.png" alt="Facebook" className="w-8 h-8 hover:ring-2 hover:ring-[#12E93D]" />
            </a>
            <img src="/icons/TikTok.png" alt="TikTok" className="w-8 h-8 hover:ring-2 hover:ring-[#12E93D]" />
            <a href="https://www.linkedin.com/in/leonard-ondigo-software-developer-biomed-eng">
              <img src="/icons/LinkedIn.png" alt="LinkedIn" className="w-8 h-8 hover:ring-2 hover:ring-[#12E93D]" />
            </a>
            <a href="https://docs.google.com/document/d/1_eGeAiveNQt6QDt_Lv9wJcni-v0VeS2UcCZ3OqlawZc/edit?usp=sharing">
              <button className="bg-[#BF8C73] text-[#1E493D] px-4 py-2 rounded-lg font-semibold hover:ring-2 hover:ring-[#12E93D] transition">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <img
            src="/images/profilepic.jpeg"
            alt="profile"
            className="rounded-full object-cover w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] mb-4 md:mb-0"
          />
        </div>
      </div>
      <hr className='w-full h-1 bg-[#12E93d] border-0 rounded-sm'></hr>
    </div>
    
  );
}

export default Home;
