"use client";
import Image from "next/image";

export default function Vision() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-gray-800 mb-12">
          About Us
        </h1>
        
        {/* Vision Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our vision is to inspire and empower people worldwide to capture, preserve, 
              and cherish life’s moments. Through innovation, creativity, and passion, 
              we aim to connect communities and create a legacy of memories that last forever.
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <Image
              src="https://images.pexels.com/photos/16479746/pexels-photo-16479746/free-photo-of-man-reaching-hand-towards-moon.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Vision"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <Image
              src="https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Mission"
              width={500}
              height={300}
              className="rounded-lg shadow-md" 
            />
          </div>
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to provide exceptional photography services, combining artistry 
              with advanced technology. We strive to capture the essence of every story and 
              deliver unmatched quality that delights and exceeds expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
