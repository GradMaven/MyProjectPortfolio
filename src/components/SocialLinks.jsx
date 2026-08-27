import React from 'react';
import { socialPlatforms } from './socialPlatforms';

function SocialLinks({ className = '', iconClassName = 'w-5 h-5' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialPlatforms.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          aria-label={name}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 transition-all hover:border-accent/60 hover:bg-accent/10 hover:scale-110"
        >
          <img src={`/icons/${name}.png`} alt="" aria-hidden="true" className={iconClassName} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
