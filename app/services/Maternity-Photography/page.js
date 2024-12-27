
'use client'; 
import Image from 'next/image';
import React, { useState } from "react";
import { FaCamera, FaHeart, FaGift } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {MaternityTestimonialSection  }from "../../componentssecond/AllTestimonials"

export default function Home() {

  const items = [
    {
      title: "Capture Precious Memories",
      description:
        "Newborn photography is all about preserving those fleeting, precious moments during the early stages of life. Our professional photographers are experts in capturing your baby’s first smiles, tiny hands, and peaceful sleep. These timeless images will allow you to cherish these precious memories for a lifetime, bringing joy every time you look at them.",
      imgSrc:
        "https://images.pexels.com/photos/1497530/pexels-photo-1497530.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Professional and Safe Experience",
      description:
        "Our experienced photographers specialize in newborn baby photography, ensuring a safe and comfortable environment for your baby. We prioritize your baby’s safety, using props and poses that are gentle and safe. Our studio is designed with a calming atmosphere to make sure both baby and parents feel relaxed during the session.",
      imgSrc:
        "https://images.pexels.com/photos/3995921/pexels-photo-3995921.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Capture Every Detail",
      description:
        "Newborns grow and change so quickly, and we are here to help you preserve every tiny detail. From their delicate features to the adorable poses, professional newborn photography captures it all. Whether it's their soft skin, tiny toes, or peaceful expressions, our photos will immortalize these small yet significant moments forever.",
      imgSrc:
        "https://images.pexels.com/photos/3807212/pexels-photo-3807212.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Create Lasting Family Keepsakes",
      description:
        "Newborn photography isn't just for the baby; it’s also about capturing the love and bond between parents and their little one. We offer family sessions that focus on your growing family, creating beautiful keepsakes for you to cherish. These photographs will serve as a reminder of the love and joy that surrounds your new arrival.",
      imgSrc:
        "https://images.pexels.com/photos/3995914/pexels-photo-3995914.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "A Perfect Gift for Loved Ones",
      description:
        "Newborn photos make wonderful, heartfelt gifts for family members. Whether it’s a framed photo for grandparents or a keepsake album for your own collection, newborn photography is a thoughtful and meaningful gift that will be cherished for generations. Capture the joy and beauty of your baby’s first days to share with loved ones.",
      imgSrc:
        "https://images.pexels.com/photos/3617872/pexels-photo-3617872.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    <div className="flex flex-col items-start p-6 gap-6 max-w-lg ">
      <p className="text-lg text-pink-500">Welcome to</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Professional Maternity Photography</h1>
      <p className="text-lg text-gray-500">Capture the beauty and joy of your pregnancy journey with our expert maternity photography services.</p>
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
        src="https://images.pexels.com/photos/3593437/pexels-photo-3593437.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="Maternity Photography" 
        width={400} 
        height={300} 
        className="max-w-full h-auto object-cover rounded-xl"
      />
    </div>
  </div>
</section>



      <section className="bg-gradient-to-b from-white via-blue-200 to-white py-12">
  <div className="flex justify-center gap-12 flex-wrap">
    {/* Grid for responsive layout */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center mt-12">
      
      {/* Box 1 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">8+</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center">Years Experience</p>
      </div>

      {/* Box 2 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">500+</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center">Sessions Completed</p>
      </div>

      {/* Box 3 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">4.8 Rating</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center">On Maternity Photography</p>
      </div>

      {/* Box 4 */}
      <div className="box w-full h-32 p-6 bg-white rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-4 cursor-pointer flex flex-col items-center justify-center gap-2">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">10+</p>
        <p className="text-xs sm:text-sm md:text-lg text-gray-500 text-center"> Countries Served</p>
      </div>
    </div>
  </div>
</section>



<section className="py-12">
  <div className="text-center mb-10">
    <p className="text-pink-500 text-lg">Why Choose Us</p>
    <h2 className="text-3xl font-semibold">The Benefits of Our Maternity Photography Services</h2>
  </div>
  <div className="flex justify-center gap-16 flex-wrap">
    {/* Beautiful Portraits Icon */}
    <div className="flex flex-col justify-center items-center text-center bg-white p-6 w-80 h-56 rounded-xl shadow-md hover:-translate-y-4 transition-all">
      <FaCamera size={50} className="text-pink-500 bg-pink-200 p-4 rounded-full" /> {/* Camera icon for maternity shoot */}
      <p className="text-xl font-semibold">Beautiful Portraits</p>
      <p className="text-gray-500">Capture the beauty and emotions of your maternity moments in exquisite detail.</p>
    </div>

    {/* Heart Icon for Cherished Memories */}
    <div className="flex flex-col justify-center items-center text-center bg-white p-6 w-80 h-56 rounded-xl shadow-md hover:-translate-y-4 transition-all">
      <FaHeart size={50} className="text-pink-500 bg-pink-200 p-4 rounded-full" /> {/* Heart icon for cherished memories */}
      <p className="text-xl font-semibold">Cherished Memories</p>
      <p className="text-gray-500">Create timeless memories with maternity photos that you and your family will treasure forever.</p>
    </div>

    {/* Custom Package Icon */}
    <div className="flex flex-col justify-center items-center text-center bg-white p-6 w-80 h-56 rounded-xl shadow-md hover:-translate-y-4 transition-all">
      <FaGift size={50} className="text-pink-500 bg-pink-200 p-4 rounded-full" /> {/* Gift icon for personalized packages */}
      <p className="text-xl font-semibold">Personalized Packages</p>
      <p className="text-gray-500">Choose from customized packages that cater to your preferences and vision for your maternity shoot.</p>
    </div>
  </div>
</section>

<section className="py-12 bg-gradient-to-b from-pink-50 to-gray-100">
  <div className="text-center mb-12">
    <p className="text-lg text-pink-500 font-semibold">Maternity Photography</p>
    <h2 className="text-4xl font-bold mt-2">Capture the Beauty of Motherhood with Stunning Maternity Photos</h2>
    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
      Discover how our professional maternity photography can help preserve these precious moments for a lifetime.
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
          <h3 className="text-3xl font-bold text-pink-600 mb-4">{item.title}</h3>
          <p className="text-gray-500 text-lg mb-6 leading-relaxed">
            {item.description}
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all">
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

    <MaternityTestimonialSection />





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
