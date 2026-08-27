import React from 'react';
import { navItems } from './navItems';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer className="bg-surface/60 border-t border-white/10 text-white px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-8">
        {/* profile */}
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <img
            src="/images/profilepic.jpeg"
            alt="Leonard Ondigo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40"
          />
          <span className="text-accent font-bold text-lg font-header">Leonard Ondigo</span>
        </div>

        {/* Links */}
        <nav>
          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-bold">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <a href={`#${id}`} className="text-slate-300 hover:text-accent transition duration-300">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks className="justify-center md:justify-end" iconClassName="w-4 h-4" />
      </div>

      {/* Bottom Text */}
      <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs sm:text-sm text-slate-400 space-y-1">
        <p className="font-medium">Crafted by Leonard Ondigo</p>
        <p className="font-medium">© {new Date().getFullYear()} Leonard Ondigo. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
