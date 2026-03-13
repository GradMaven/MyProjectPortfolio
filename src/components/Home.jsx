import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import AnimatedBackground from './AnimatedBackground';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    // 1. using 'relative' here so the z-index of children works correctly
    <div className="relative min-h-screen w-full overflow-x-hidden bg-transparent">
      
      {/* 2. Background stays fixed behind everything */}
   
       
      {/* 3. Main Content Wrapper */}
      <div className="relative z-10 mx-auto max-w-6xl p-6 space-y-12">
        
        {/* Navigation */}
        <div className="fixed z-50 top-4 mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border-2 border-white/25 bg-white/5 px-6 py-3 backdrop-blur-3xl shadow-lg">
          <h3 className="text-[#BF8C73] font-bold text-xl">Leonard<span className="blink">_</span></h3>

          {/* Hamburger Toggle */}
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            <img 
              src={isMenuOpen ? "/icons/close-menu.png" : "/icons/open-menu.png"} 
              alt="menu toggle" 
              className="w-8 h-8 invert" // Invert if icons are black but bg is dark
            />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {['Home', 'About Me', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '')}`} className="text-white hover:text-[#BF8C73] font-bold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Slide Menu Overlay */}
        <div className={`fixed inset-0 z-[60] bg-[#041915]/60 backdrop-blur-sm transition-opacity ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} md:hidden`} onClick={toggleMenu} />
        <div className={`fixed top-0 left-0 z-[70] h-full w-2/3 bg-[#041915] p-8 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
           <ul className="flex flex-col gap-8 text-[#BF8C73]">
              {['Home', 'About Me', 'Services', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-2xl font-bold hover:text-white" onClick={toggleMenu}>{item}</a>
              ))}
           </ul>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col-reverse items-center rounded-3xl border-2
         border-white/10 px-8 py-16 backdrop-blur-2xl shadow-2xl md:flex-row md:px-12 mt-40">
          
          <div className="w-full text-left md:w-1/2">
            <h3 className="text-[#BF8C73] text-3xl sm:text-4xl md:text-5xl mb-4">
              Hello It's Me
            </h3>
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Leonard Ondigo
            </h2>

            <div className="h-16"> {/* Fixed height prevents layout shift during typing */}
                <TypeAnimation
                sequence={[
                    'I am a Software Developer', 1000,
                    'I am a Project Manager', 1000,
                    'I build scalable web solutions', 1000,
                ]}
                wrapper="h4"
                cursor
                repeat={Infinity}
                style={{ fontSize: '1.5rem', color: '#BF8C73', fontWeight: 'bold' }}
                />
            </div>

            <p className="mt-6 text-sm font-medium leading-relaxed text-slate-300 sm:text-base md:text-lg">
              As a software developer and project manager, I design, develop,
              and implement software solutions while ensuring projects are
              completed on time and within scope. I bridge the gap
              between development and management, ensuring seamless
              collaboration and efficient execution.
            </p>

            {/* Social Icons and CV Button */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex gap-4">
                {['Twitter', 'Facebook', 'TikTok', 'LinkedIn'].map((platform) => (
                    <a key={platform} href="#" className="transition-transform hover:scale-110">
                        <img src={`/icons/${platform}.png`} alt={platform} className="w-8 h-8 hover:ring-2 hover:ring-[#BF8C73] rounded-md" />
                    </a>
                ))}
              </div>
              <a href="https://docs.google.com/document/d/1RKCEWFgF3shnzW-x35pd4Qisgw7dvsBOAWKXVMHZ_ek/edit?usp=sharing">
                <button className="rounded-lg bg-[#BF8C73] px-6 py-3 font-bold text-slate-900 transition-all hover:brightness-110 hover:shadow-[0_0_20px_rgba(191,140,115,0.4)]">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="mb-12 flex w-full justify-center md:mb-0 md:w-1/2">
            <div className="relative">
                {/* Decorative ring around image */}
                <div className="absolute -inset-4 rounded-full border border-[#BF8C73]/30 animate-pulse" />
                <img
                src="/images/profilepic.jpeg"
                alt="profile"
                className="relative h-[250px] w-[250px] rounded-full border-4 border-[#BF8C73]/20 object-cover shadow-2xl sm:h-[300px] sm:w-[300px] md:h-[400px] md:w-[400px]"
                />
            </div>
          </div>
        </div>

        <hr className="h-1 w-full rounded-sm border-0 bg-[#BF8C73]/50" />
      </div>
    </div>
  );
}

export default Home;