import React, { useEffect, useState } from 'react';
import { navItems } from './navItems';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Track scroll for navbar background, and scroll-spy for active section
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 top-4 left-1/2 -translate-x-1/2 flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between
        rounded-full border-2 border-white/10 px-6 py-3 backdrop-blur-2xl shadow-lg transition-colors duration-300
        ${scrolled ? 'bg-ink/80' : 'bg-white/5'}`}
      >
        <a href="#home" className="text-accent font-bold text-xl font-header">
          Leonard<span className="blink">_</span>
        </a>

        {/* Hamburger Toggle */}
        <button
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[6px] focus:outline-none"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`font-bold transition-colors ${
                    activeId === id ? 'text-accent' : 'text-white hover:text-accent'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Slide Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/70 backdrop-blur-sm transition-opacity md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-2/3 max-w-xs bg-ink border-l border-white/10 p-8 pt-24 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-8">
          {navItems.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={closeMenu}
                className={`text-2xl font-bold transition-colors ${
                  activeId === id ? 'text-accent' : 'text-white hover:text-accent'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
