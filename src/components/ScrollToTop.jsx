import React, { useEffect, useState } from 'react';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full
      border border-white/10 bg-ink/80 text-accent shadow-lg backdrop-blur-md transition-all duration-300
      hover:border-accent/60 hover:bg-accent/10
      ${visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M10 3a.75.75 0 01.53.22l6 6a.75.75 0 11-1.06 1.06L10.75 5.56v11.69a.75.75 0 01-1.5 0V5.56L4.53 10.28a.75.75 0 01-1.06-1.06l6-6A.75.75 0 0110 3z" clipRule="evenodd" />
      </svg>
    </a>
  );
}

export default ScrollToTop;
