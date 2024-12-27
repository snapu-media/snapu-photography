
'use client'; 
import Image from 'next/image';
import React, { useState } from "react";
import { FaImage, FaChartLine, FaCogs,FaCalendarAlt } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {WeddingTestimonialSection }from "../../componentssecond/AllTestimonials"

export default function Home() {

    const items = [
        {
          title: "Pre-Wedding Photography",
          description: "Capture intimate moments before your big day with our pre-wedding photoshoot packages.",
          imgSrc: "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          title: "Wedding Day Highlights",
          description: "From vows to first dances, we capture all the magical moments of your wedding day.",
          imgSrc: "https://images.pexels.com/photos/1488318/pexels-photo-1488318.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          title: "Candid Wedding Shots",
          description: "Our photographers excel at capturing genuine, candid moments that truly reflect the love between you and your guests.",
          imgSrc: "https://images.pexels.com/photos/936554/pexels-photo-936554.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          title: "Post-Wedding Shoot",
          description: "Continue the celebration with a relaxed post-wedding photoshoot in your favorite locations.",
          imgSrc: "https://images.pexels.com/photos/2165931/pexels-photo-2165931.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      ];
      

      const [selectedImage, setSelectedImage] = useState(null);

      const images = [
        "https://images.pexels.com/photos/7428102/pexels-photo-7428102.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1667071/pexels-photo-1667071.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/6739702/pexels-photo-6739702.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3373745/pexels-photo-3373745.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=600",
      ];
    
      const handleImageClick = (image) => {
        setSelectedImage(image);
      };
    
      const closePreview = () => {
        setSelectedImage(null);
      };


      
      
    
  return (
    <div>
      {/* Hero Section */}
      <section className="flex justify-center items-center p-10 md:p-16 bg-gradient-to-b from-white via-blue-100 to-white">
  <div className="flex items-center justify-center flex-wrap mt-10 mb-10 gap-12">
    <div className="flex flex-col items-start p-6 gap-6 max-w-lg">
      <p className="text-lg text-blue-500">Welcome to</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Professional Wedding Photography</h1>
      <p className="text-lg text-gray-500">Capture the most beautiful moments of your special day with our expert wedding photography services.</p>
      <div className="flex gap-4">
        <button className="px-8 py-3 bg-blue-500 text-white rounded-full transition-shadow duration-300 hover:shadow-xl">
          Book a Session
        </button>
        <button className="px-8 py-3 border-2 border-blue-500 text-blue-500 font-bold rounded-full transition-shadow duration-300 hover:border-blue-700 hover:bg-blue-100 hover:shadow-xl">
          Learn More
        </button>
      </div>
    </div>
    <div className="flex justify-center items-center mt-6 md:mt-0 lg:pl-24">
      <Image 
        src="https://images.pexels.com/photos/752842/pexels-photo-752842.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="Wedding Photography" 
        width={400} 
        height={300} 
        className="max-w-full h-auto object-cover rounded-xl"
      />
    </div>
  </div>
</section>



      {/* Service Types Section */}
      <section className="bg-gradient-to-b from-white via-blue-200 to-white py-12">
  <div className="flex justify-center gap-12 flex-wrap">
    {/* Grid for responsive layout */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center mt-12">
      
      {/* Box 1 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">10+</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center">Years of Experience</p>
      </div>

      {/* Box 2 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">500+</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center">Weddings Captured</p>
      </div>

      {/* Box 3 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">4.8</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center">Customer Rating</p>
      </div>

      {/* Box 4 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">20+</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center">Countries Served</p>
      </div>
    </div>
  </div>
</section>




    {/* Why Choose US */}
<section className="py-12">
  <div className="text-center mb-10">
    <p className="text-blue-500 text-lg">Why Choose Us</p>
    <h2 className="text-3xl font-semibold">The Benefits of Our Wedding Photography Services</h2>
  </div>
  <div className="flex justify-center gap-16 flex-wrap">
    {/* High-Quality Images */}
    <div className="flex flex-col justify-center items-center text-center bg-white p-6 w-80 h-56 rounded-xl shadow-md hover:-translate-y-4 transition-all">
      <FaImage size={50} className="text-blue-500 bg-blue-200 p-4 rounded-full" /> {/* Icon size increased */}
      <p className="text-xl font-semibold">Crisp, High-Quality Photos</p>
      <p className="text-gray-500">Capture your most precious moments in stunning detail, making memories last forever.</p>
    </div>

    {/* Stress-Free Experience */}
    <div className="flex flex-col justify-center items-center text-center bg-white p-6 w-80 h-56 rounded-xl shadow-md hover:-translate-y-4 transition-all">
      <FaCalendarAlt size={50} className="text-blue-500 bg-blue-200 p-4 rounded-full" /> {/* Icon size increased */}
      <p className="text-xl font-semibold">Stress-Free Experience</p>
      <p className="text-gray-500">Enjoy your big day while we handle all the photography with ease and professionalism.</p>
    </div>

    {/* Custom Packages */}
    <div className="flex flex-col justify-center items-center text-center bg-white p-6 w-80 h-56 rounded-xl shadow-md hover:-translate-y-4 transition-all">
      <FaCogs size={50} className="text-blue-500 bg-blue-200 p-4 rounded-full" /> {/* Icon size increased */}
      <p className="text-xl font-semibold">Tailored Packages</p>
      <p className="text-gray-500">Choose from personalized wedding photography packages that fit your needs and budget.</p>
    </div>
  </div>
</section>

<section className="py-12 bg-gradient-to-b from-blue-50 to-gray-100">
  <div className="text-center mb-12">
    <p className="text-lg text-blue-500 font-semibold">Wedding Photography</p>
    <h2 className="text-4xl font-bold mt-2">Capture Your Love Story with Stunning Wedding Photography</h2>
    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
      Explore how our expert wedding photography services can make your special day unforgettable.
    </p>
  </div>

  {/* Alternating Content Blocks */}
  <div className="flex flex-col gap-16 px-6 md:px-20">
    {items.map((item, index) => (
      <div
        key={index}
        className={`flex flex-wrap md:flex-nowrap items-center gap-8 ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 transition-transform duration-300 transform hover:scale-105">
          <Image
            src={item.imgSrc}
            alt={item.title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-left">
          <h3 className="text-3xl font-bold text-blue-600 mb-4">{item.title}</h3>
          <p className="text-gray-500 text-lg mb-6 leading-relaxed">
            {item.description}
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all">
            Learn More
          </button>
        </div>
      </div>
    ))}
  </div>
</section>




<section className="py-12 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Gallery</h2>
        <p className="text-gray-500 mt-4">Explore some of our past product photography work.</p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-16">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onClick={() => handleImageClick(imgSrc)}
          >
            <Image
              src={imgSrc}
              alt={`Gallery Image ${index + 1}`}
              width={300}
              height={200}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-semibold text-lg">Preview</p>
            </div>
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closePreview}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected Preview"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl object-contain"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200"
              onClick={closePreview}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>

    <WeddingTestimonialSection/>





      {/* Team Section */}


      {/* <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Meet Our Expert Photographers</h2>
          <p className="text-gray-500">Experienced photographers dedicated to capturing the essence of your products</p>
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="flex flex-col items-center bg-white p-6 w-80 h-80 rounded-xl shadow-lg">
            <Image 
              src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Team Member" 
              width={150} 
              height={150} 
              className="rounded-full mb-4" 
            />
            <p className="text-xl font-semibold">John Doe</p>
            <p className="text-blue-500">Lead Photographer</p>
            <button className="px-8 py-3 mt-4 bg-blue-500 text-white rounded-full transition-shadow duration-300 hover:shadow-xl">Contact</button>
          </div>
          <div className="flex flex-col items-center bg-white p-6 w-80 h-80 rounded-xl shadow-lg">
            <Image 
              src="https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Team Member" 
              width={150} 
              height={150} 
              className="rounded-full mb-4" 
            />
            <p className="text-xl font-semibold">Jane Smith</p>
            <p className="text-blue-500">Photography Assistant</p>
            <button className="px-8 py-3 mt-4 bg-blue-500 text-white rounded-full transition-shadow duration-300 hover:shadow-xl">Contact</button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
