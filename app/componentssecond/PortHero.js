import Image from "next/image";
import { FaCameraRetro, FaRegImage, FaPhotoVideo, FaBoxOpen, FaBuilding, FaUserTie, FaBaby } from 'react-icons/fa';
import { MdPregnantWoman } from 'react-icons/md'; // New possible icon for maternity
import { CircleText2 } from "../circletext/page";
import  CircleText  from "../circletext/page";

export default function PortHero() {
  return (
    <div className="relative bg-gray-50">

      {/* Hero Section with WavyBackground */}


      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        {/* Hero Content */}
        <h1 className="text-5xl font-bold text-black mb-6">
          Capturing the Moments that Matter
        </h1>
        <p className="text-xl text-black mb-8">
          Explore my photography portfolio showcasing the beauty of life's precious moments.
        </p>
        <div className="text-center">
          <a
            href="#portfolio"
            className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-700 transition duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-10 sm:space-x-6 min-h-screen">
        <div>
            <CircleText />
            </div>
        
        <div>
          <a href="tel:+916304524729">
            <button className="w-40 h-12 bg-gradient-to-r from-blue-100 to-blue-100 via-blue-800 text-white font-semibold rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:from-blue-400 hover:to-blue-500 flex items-center justify-center space-x-2">
              <span className="text-lg">Call Us</span>
            </button>
          </a>
        </div>
        
        <div className="hidden sm:block">
  <CircleText2 />
</div>

      </div>



      {/* Portfolio Section */}
      <div id="portfolio" className="bg-gray-50 py-2 text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            My Photography Portfolio
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Portfolio Items */}
            <div className="relative group">
              <Image
                src="https://images.pexels.com/photos/15669838/pexels-photo-15669838/free-photo-of-retro-camera-on-empty-notepad-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Portfolio Image 1"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative group">
              <Image
                src="https://images.pexels.com/photos/186765/pexels-photo-186765.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Portfolio Image 2"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative group">
              <Image
                src="https://images.pexels.com/photos/15141461/pexels-photo-15141461/free-photo-of-a-man-with-a-backpack-and-camera-is-taking-a-picture.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Portfolio Image 3"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="relative group">
              <Image
                src="https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Portfolio Image 4"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
     

<div id="services" className="py-16 bg-white text-black">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">Our Photography Services</h2>
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Service Item 1 - Weddings */}
      <div className="flex flex-col items-center text-center bg-gray-200 p-8 rounded-lg shadow-md">
        <FaCameraRetro className="text-4xl text-blue-600 mb-4" />
        <h3 className="text-2xl font-semibold text-black mb-3">Weddings</h3>
        <p className="text-black mb-4">Capturing the most beautiful moments of your wedding day.</p>
      </div>

      {/* Service Item 2 - Portraits */}
      <div className="flex flex-col items-center text-center bg-gray-200 p-8 rounded-lg shadow-md">
        <FaRegImage className="text-4xl text-blue-600 mb-4" />
        <h3 className="text-2xl font-semibold text-black mb-3">Portraits</h3>
        <p className="text-black mb-4">Professional portrait photography for all occasions.</p>
      </div>

      {/* Service Item 3 - Events */}
      <div className="flex flex-col items-center text-center bg-gray-200 p-8 rounded-lg shadow-md">
        <FaPhotoVideo className="text-4xl text-blue-600 mb-4" />
        <h3 className="text-2xl font-semibold text-black mb-3">Events</h3>
        <p className="text-black mb-4">Documenting your special events with creative photography.</p>
      </div>

      {/* Service Item 4 - Product Photography */}
      <div className="flex flex-col items-center text-center bg-gray-200 p-8 rounded-lg shadow-md">
        <FaBoxOpen className="text-4xl text-blue-600 mb-4" />
        <h3 className="text-2xl font-semibold text-black mb-3">Product Photography</h3>
        <p className="text-black mb-4">High-quality images to showcase your products professionally.</p>
      </div>

      {/* Service Item 5 - Real Estate Photography */}
      <div className="flex flex-col items-center text-center bg-gray-200 p-8 rounded-lg shadow-md">
        <FaBuilding className="text-4xl text-blue-600 mb-4" />
        <h3 className="text-2xl font-semibold text-black mb-3">Real Estate Photography</h3>
        <p className="text-black mb-4">Showcasing properties with beautiful, detailed photography.</p>
      </div>

      {/* Service Item 6 - Wedding Photography */}
      <div className="flex flex-col items-center text-center bg-gray-200 p-8 rounded-lg shadow-md">
        <FaCameraRetro className="text-4xl text-blue-600 mb-4" />
        <h3 className="text-2xl font-semibold text-black mb-3">Wedding Photography</h3>
        <p className="text-black mb-4">Capturing timeless memories of your wedding day.</p>
      </div>

      {/* Service Item 7 - Corporate Events Photography */}
      <div className="flex flex-col items-center text-center bg-gray-200 p-8 rounded-lg shadow-md">
        <FaUserTie className="text-4xl text-blue-600 mb-4" />
        <h3 className="text-2xl font-semibold text-black mb-3">Corporate Events Photography</h3>
        <p className="text-black mb-4">Professional coverage of corporate events and conferences.</p>
      </div>

      {/* Service Item 8 - Baby Born Photography */}
      <div className="flex flex-col items-center text-center bg-gray-200 p-8 rounded-lg shadow-md">
        <FaBaby className="text-4xl text-blue-600 mb-4" />
        <h3 className="text-2xl font-semibold text-black mb-3">Baby Born Photography</h3>
        <p className="text-black mb-4">Precious moments captured as your baby enters the world.</p>
      </div>

      {/* Service Item 9 - Maternity Photography */}
      <div className="flex flex-col items-center text-center bg-gray-200 p-8 rounded-lg shadow-md">
      <MdPregnantWoman className="text-4xl text-blue-600 mb-4" />
        <h3 className="text-2xl font-semibold text-black mb-3">Maternity Photography</h3>
        <p className="text-black mb-4">Beautiful maternity portraits to celebrate your pregnancy journey.</p>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}
