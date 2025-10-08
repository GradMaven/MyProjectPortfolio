import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#BF8C73] text-[#061127] px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        {/* profile */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/images/profilepic.jpeg"
            alt="profilepic"
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-bold">
          <a
            href="#home"
            className="hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-white transition duration-300"
          >
            Projects
          </a>
          <a
            href="#services"
            className="hover:text-white transition duration-300"
          >
            Services
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4">
          <img src="/icons/Facebook.png" alt="Facebook" className="w-8 h-8 hover:ring-2 hover:ring-[#12E93D]" />
          <img src="/icons/LinkedIn.png" alt="LinkedIn" className="w-8 h-8 hover:ring-2 hover:ring-[#12E93D]" />
          <img src="/icons/TikTok.png" alt="Tiktok" className="w-7 h-7 hover:ring-2 hover:ring-[#12E93D]" />
          <img src="/icons/Twitter.png" alt="Twitter" className="w-8 h-8 hover:ring-2 hover:ring-[#12E93D]" />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-xs sm:text-sm text-white">
        <p className='text-sm font-medium'>Crafted by leondigo</p>
        <p className='text-sm font-medium'> © Copyright 2025 crealsd. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
