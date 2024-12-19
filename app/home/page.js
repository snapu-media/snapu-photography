"use client";
import { cn } from "../../lib/utils";

import React,{useEffect} from "react";
import { BackgroundLines } from "../componentssecond/BackgroundLines";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { FlipWords } from "../componentssecond/flip-words";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Duration of the animation
        });
      }, []);
      
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
              [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
              [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
              [background-image:var(--white-gradient),var(--aurora)]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[10px] invert dark:invert-0
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
              after:dark:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:200%,_100%] 
              after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-50 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        <BackgroundLines 
  svgOptions={{ stroke: "#ff0000", strokeWidth: 2 }} 
  style={{ marginLeft: '1000px' }}>
        <div className="relative flex flex-col items-center w-full h-full px-6 pt-20 lg:pt-32">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full max-w-6xl h-full">
            {/* Left Section: Text */}

            
            <div data-aos="fade-up" className="flex flex-col justify-center lg:justify-start text-center lg:text-left space-y-6 lg:w-1/2 px-4">
  <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
    SNAP U Photography  
  </h1>

  <h4 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white">
    Photography is the art of
    <FlipWords words={["capturing memories", "freezing moments", "telling stories"]} duration={3000} className="inline-block text-teal-500 font-semibold" />
  </h4>

  <p className="text-lg lg:text-2xl text-slate-700 dark:text-slate-300 max-w-xl mx-auto">
    Empowering your business with innovative digital solutions to drive success.
  </p>
</div>

            {/* Right Section: Image */}
            <div data-aos="fade-down" className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
              <img
                src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Company Vision"
                className="w-full lg:w-[80%] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        </BackgroundLines>
      </div>
    </main>
  );
};
