'use client';
// pages/achievements.js
import React from "react";
import { NumberTicker } from "./NumberTicker";

export default function Achievements() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Container for the layout */}
      <div className="relative w-full px-4">
        {/* Top Expanding Blue Box */}
        <div className="absolute top-24 left-0 w-full h-40 sm:h-56 md:h-40 bg-blue-500 animate-expand rounded-lg shadow-lg sm:block hidden"></div>
        {/* Overlapping Boxes */}
        <div className="relative flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-[70px] z-10">
          <div className="w-full sm:w-1/3 bg-white shadow-md rounded-lg p-5">
            <h2 className="text-xl font-bold text-gray-700">Wedding Photographies</h2>
            <p className="text-gray-600 mt-2">
            <NumberTicker value={250} /> <b>+</b> 
            </p>
          </div>
          <div className="w-full sm:w-1/3 bg-white shadow-md rounded-lg p-5">
            <h2 className="text-xl font-bold text-gray-700">Meternity Photographies</h2>
            <p className="text-gray-600 mt-2">
            <NumberTicker value={200} /> <b>+</b> 
            </p>
          </div>
          <div className="w-full sm:w-1/3 bg-white shadow-md rounded-lg p-5">
            <h2 className="text-xl font-bold text-gray-700">BirthDay Photographies</h2>
            <p className="text-gray-600 mt-2">
            <NumberTicker value={300} /> <b>+</b> 
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        .animate-expand {
          animation: expand 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
