import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export const InteractiveBlob = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Motion.div
      animate={{
        x: mousePos.x - 150, // Center the blob on cursor
        y: mousePos.y - 150,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 50 }}
      className="pointer-events-none -z-10 fixed h-[300px] w-[300px] rounded-full bg-[#BF8C73]/10 blur-[80px]"
    />
  );
};