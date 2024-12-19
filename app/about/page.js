import React from "react";
import {TimelineScroll} from "../componentssecond/timeline"
import {WorldMap} from "../componentssecond/world-map"
import Vision from "../componentssecond/vision"
import TeamPage from "../componentssecond/TeamPage"
import {NumberTicker} from "../componentssecond/NumberTicker"
import Achievements from "../componentssecond/achievements"


const AboutPage = () => {
  const timelineData = [
    {
      title: "Company Founded",
      content: "Launched our photography business in 2022, with a vision to capture timeless memories.",
      image: "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "First Photoshoot",
      content: "Completed our first professional photoshoot, showcasing our creativity and passion.",
      image: "https://images.pexels.com/photos/2388569/pexels-photo-2388569.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Website Launch",
      content: "Launched our website to showcase our portfolio and allow clients to book sessions.",
      image: "https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "First Wedding Shoot",
      content: "Captured our first wedding shoot, marking a milestone in our wedding photography journey.",
      image: "https://images.pexels.com/photos/11384497/pexels-photo-11384497.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Expanding Services",
      content: "Expanded our services to include corporate headshots, events, and more.",
      image: "https://images.pexels.com/photos/7642130/pexels-photo-7642130.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  
  return (
    <div>
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-16 relative bg-[#F5F5F5]">
      {/* Photography Business Section */}
      <div className="w-full h-full">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="https://images.pexels.com/photos/7964652/pexels-photo-7964652.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Photography Business"
              className="w-full max-w-md lg:max-w-lg rounded-lg"
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-left lg:pl-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Capturing Memories, One Frame at a Time
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Welcome to our photography business, where we bring your moments to life with the perfect shot. Whether it’s a wedding, portrait, or special event, we combine artistry with technology to create timeless memories for you and your loved ones.
            </p>

            {/* Button Section */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#services"
                className="flex justify-center items-center bg-orange-500 text-white text-lg py-3 px-6 rounded-md shadow-lg hover:bg-orange-600 transition-all w-full sm:w-auto"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="flex justify-center items-center bg-black text-white text-lg py-3 px-6 rounded-md shadow-lg hover:bg-gray-800 transition-all w-full sm:w-auto"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Reversed Section */}
      <div className="w-full h-full mt-16">
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center px-4 sm:px-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://images.pexels.com/photos/986733/pexels-photo-986733.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Photography Business 2"
              className="w-full max-w-md lg:max-w-lg rounded-lg"
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-left lg:pr-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Turning Moments into Masterpieces
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Our experienced team specializes in crafting beautiful, high-quality images that tell your story. With creativity and precision, we ensure every shot reflects the emotion and essence of the moment.
            </p>

            {/* Button Section */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#portfolio"
                className="flex justify-center items-center bg-orange-500 text-white text-lg py-3 px-6 rounded-md shadow-lg hover:bg-orange-600 transition-all w-full sm:w-auto"
              >
                View Portfolio
              </a>
              <a
                href="#book-now"
                className="flex justify-center items-center bg-black text-white text-lg py-3 px-6 rounded-md shadow-lg hover:bg-gray-800 transition-all w-full sm:w-auto"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full h-full mt-16">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="https://images.pexels.com/photos/260561/pexels-photo-260561.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Photography Business 3"
              className="w-full max-w-md lg:max-w-lg rounded-lg"
            />
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 text-left lg:pl-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Preserving the Beauty of Every Moment
            </h1>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              From candid snapshots to studio-quality portraits, we provide a wide range of services to meet your needs. Let us help you celebrate life’s precious occasions and create art that lasts a lifetime.
            </p>

            {/* Button Section */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#testimonials"
                className="flex justify-center items-center bg-orange-500 text-white text-lg py-3 px-6 rounded-md shadow-lg hover:bg-orange-600 transition-all w-full sm:w-auto"
              >
                Client Testimonials
              </a>
              <a
                href="#pricing"
                className="flex justify-center items-center bg-black text-white text-lg py-3 px-6 rounded-md shadow-lg hover:bg-gray-800 transition-all w-full sm:w-auto"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <TimelineScroll data={timelineData} />
    <Vision />
    <Achievements/>
    <WorldMap/>
    <TeamPage />
    
      


    </div>
  );
};

export default AboutPage;