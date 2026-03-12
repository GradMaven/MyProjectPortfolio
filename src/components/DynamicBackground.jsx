

/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
// ...existing code...

const DynamicBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#041915]">
      
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#BF8C73]/30 blur-[120px]"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[20%] right-[-5%] h-[400px] w-[400px] rounded-full bg-[#BF8C73]/20 blur-[100px]"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-10%] left-[20%] h-[600px] w-[600px] rounded-full
         bg-[#041915]/20 blur-[150px]"
      />
    </div>
    
  );
};

export default DynamicBackground;