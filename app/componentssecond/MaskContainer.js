"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";


export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const containerRef = useRef(null);

  const updateMousePosition = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", updateMousePosition);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);

  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-screen relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with hover mask effect */}
      <motion.div
        className="w-full h-full absolute flex items-center justify-center bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
          maskSize: `${maskSize}px`,
          backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <div className="absolute inset-0 bg-black h-full w-full opacity-50" />
        
        {/* The 'children' text will fade in on hover */}
        <motion.div
          className="relative z-20 max-w-4xl mx-auto text-center text-white text-4xl font-bold"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {children}
        </motion.div>
      </motion.div>

      {/* The 'revealText' will be visible by default and fade out on hover */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-black text-5xl font-semibold z-10"
        animate={{
          opacity: isHovered ? 0 : 1, // This fades out on hover
        }}
        transition={{
          duration: 0.3,
        }}
      >
        {revealText}
      </motion.div>
    </motion.div>
  );
};
