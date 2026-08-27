import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export const InteractiveBlob = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    setEnabled(!prefersReducedMotion && isFinePointer);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <Motion.div
      animate={{
        x: mousePos.x - 150,
        y: mousePos.y - 150,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 50 }}
      className="pointer-events-none -z-10 fixed hidden md:block h-[300px] w-[300px] rounded-full bg-[#BF8C73]/10 blur-[80px]"
    />
  );
};
