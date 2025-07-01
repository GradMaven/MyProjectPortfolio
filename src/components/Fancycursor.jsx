import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function FancyCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleHover = (e) => {
      const target = e.target;
      if (target.closest('a, button, .cursor-hover')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden sm:block
      backdrop-opacity-0 
      "
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isHovering ? 2 : 1,
        opacity: isHovering ? 0 : 2,
        backgroundColor: isHovering ? '#BF8C73' : '#12E93D',
      }}
    
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
        opacity: 0,
      }}
      style={{
        width: 16,
        height: 16,
        borderRadius: '50%',
        position: 'absolute',
      }}
    />
  );
}

export default FancyCursor;
