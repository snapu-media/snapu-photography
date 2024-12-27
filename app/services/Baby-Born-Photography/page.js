
'use client'; 
import Image from 'next/image';
import React, { useState } from "react";
import { FaImage, FaBaby, FaCogs} from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {BabyBornTestimonialSection}from "../../componentssecond/AllTestimonials"

export default function Home() {

    const items = [
        {
          title: "Newborn Portraits",
          description: "Capture the precious first moments of your baby's life with intimate and heartwarming portraits.",
          imgSrc: "https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          title: "Family Bonding",
          description: "Document the loving connection between family members with beautiful family photography sessions.",
          imgSrc: "https://images.pexels.com/photos/2721581/pexels-photo-2721581.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          title: "Baby Milestones",
          description: "Celebrate your baby's growth with milestone photography, capturing special moments as they develop.",
          imgSrc: "https://images.pexels.com/photos/933186/pexels-photo-933186.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
          title: "First Birthday Shoots",
          description: "Make your baby's first birthday unforgettable with stunning photography that reflects their joyful milestone.",
          imgSrc: "https://images.pexels.com/photos/1652117/pexels-photo-1652117.jpeg?auto=compress&cs=tinysrgb&w=600",
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
<section className="flex justify-center items-center p-10 md:p-16 bg-gradient-to-b from-white via-pink-100 to-white">
  <div className="flex items-center justify-center flex-wrap mt-10 mb-10 gap-12">
    <div className="flex flex-col items-start p-6 gap-6 max-w-lg">
      <p className="text-lg text-pink-500">Welcome to</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Professional Baby Born Photography</h1>
      <p className="text-lg text-gray-500">Cherish the first moments of your baby's life with our heartwarming and professional baby photography services.</p>
      <div className="flex gap-4">
        <button className="px-8 py-3 bg-pink-500 text-white rounded-full transition-shadow duration-300 hover:shadow-xl">
          Book a Session
        </button>
        <button className="px-8 py-3 border-2 border-pink-500 text-pink-500 font-bold rounded-full transition-shadow duration-300 hover:border-pink-700 hover:bg-pink-100 hover:shadow-xl">
          Learn More
        </button>
      </div>
    </div>
    <div className="flex justify-center items-center mt-6 md:mt-0 lg:pl-24">
      <Image 
        src="https://images.pexels.com/photos/1973270/pexels-photo-1973270.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="Baby Born Photography" 
        width={400} 
        height={300} 
        className="max-w-full h-auto object-cover rounded-xl"
      />
    </div>
  </div>
</section>



<section className="bg-gradient-to-b from-white via-pink-200 to-white py-12">
  <div className="flex justify-center gap-12 flex-wrap">
    {/* Grid for responsive layout */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center mt-12">
      
      {/* Box 1 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">5+</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center">Years of Experience</p>
      </div>

      {/* Box 2 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">200+</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center">Babies Captured</p>
      </div>

      {/* Box 3 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">4.8</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center">Customer Rating</p>
      </div>

      {/* Box 4 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">30+</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center">Families Served</p>
      </div>
    </div>
  </div>
</section>




{/* Why Choose Us */}
<section className="py-12">
  <div className="text-center mb-10">
    <p className="text-pink-500 text-lg">Why Choose Us</p>
    <h2 className="text-3xl font-semibold">The Benefits of Our Baby Born Photography Services</h2>
  </div>
  <div className="flex justify-center gap-16 flex-wrap">
    {/* Heartwarming Imagery */}
    <div className="flex flex-col justify-center items-center text-center bg-white p-6 w-80 h-56 rounded-xl shadow-md hover:-translate-y-4 transition-all">
      <FaImage size={50} className="text-pink-500 bg-pink-200 p-4 rounded-full" /> {/* Icon size increased */}
      <p className="text-xl font-semibold">Heartwarming Imagery</p>
      <p className="text-gray-500">Capture the precious first moments of your baby's life in stunning, emotional photos.</p>
    </div>

    {/* Cherished Memories */}
    <div className="flex flex-col justify-center items-center text-center bg-white p-6 w-80 h-56 rounded-xl shadow-md hover:-translate-y-4 transition-all">
      <FaBaby size={50} className="text-pink-500 bg-pink-200 p-4 rounded-full" /> {/* Replace with baby-related icon */}
      <p className="text-xl font-semibold">Cherished Memories</p>
      <p className="text-gray-500">Preserve memories of your baby's early days, turning them into lifelong treasures.</p>
    </div>

    {/* Customized Packages */}
    <div className="flex flex-col justify-center items-center text-center bg-white p-6 w-80 h-56 rounded-xl shadow-md hover:-translate-y-4 transition-all">
      <FaCogs size={50} className="text-pink-500 bg-pink-200 p-4 rounded-full" /> {/* Icon size increased */}
      <p className="text-xl font-semibold">Customized Packages</p>
      <p className="text-gray-500">Choose from flexible packages that cater to your needs, including newborn and family sessions.</p>
    </div>
  </div>
</section>









<section className="py-12 bg-gradient-to-b from-blue-50 to-gray-100">
  <div className="text-center mb-12">
    <p className="text-lg text-blue-500 font-semibold">Corporate Event Photography</p>
    <h2 className="text-4xl font-bold mt-2">Preserve Your Professional Events with Stunning Photography</h2>
    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
      Discover how our expert corporate event photography services can showcase your company's milestones and achievements.
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

    <BabyBornTestimonialSection/>





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
