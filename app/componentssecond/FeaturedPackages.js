import React from "react";
import { FaCamera, FaMoneyBillAlt, FaClock, FaHeart,FaTruck,FaCloudUploadAlt,FaDownload,FaFileImage,FaImages } from "react-icons/fa"; // Importing React Icons

const PhotographyPackages = () => {
  // Step 1: Store photography package data in an array
  const packages = [
    {
      id: 1,
      title: "Wedding Photography",
      category: "Latest",
      image: "https://images.pexels.com/photos/1247756/pexels-photo-1247756.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "8 hours",
      location: "Local",
      delivery: "2 weeks",
      price: "Start from $1200",
      prices:"$1800",
    },
    {
      id: 2,
      title: "Event Photography",
      category: "Latest",
      image: "https://images.pexels.com/photos/29775302/pexels-photo-29775302/free-photo-of-cameraman-captures-live-event-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "5 hours",
      location: "Any",
      delivery: "1 week",
      prices: "$1700",
      price: "Start from $1200",
    },
    {
      id: 3,
      title: "Portrait Photography",
      category: "Latest",
      image: "https://images.pexels.com/photos/3536991/pexels-photo-3536991.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "3 hours",
      location: "Studio",
      delivery: "5 days",
      prices: "$1500",
      price: "Start from $1200",
    },
    {
      id: 4,
      title: "Corporate Photography",
      category: "Latest",
      image: "https://images.pexels.com/photos/6931338/pexels-photo-6931338.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "6 hours",
      location: "Office/Studio",
      delivery: "1 week",
      prices: "$1200",
      price: "Start from $1000",
      
     
    },
    {
      id: 5,
      title: "Family Photography",
      category: "Latest",
      image: "https://images.pexels.com/photos/19351519/pexels-photo-19351519/free-photo-of-portrait-of-parents-with-their-daughter-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "4 hours",
      location: "Local",
      delivery: "1 week",
      prices: "$1600",
      price: "Start from $1200",
    },
    {
      id: 6,
      title: "Travel Photography",
      category: "Latest",
      image: "https://images.pexels.com/photos/29821333/pexels-photo-29821333/free-photo-of-two-men-walking-on-a-modern-pedestrian-bridge.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "Flexible",
      location: "Global",
      delivery: "2 weeks",
      prices: "$1500",
      price: "Start from $1000",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-200 to-blue-300" id="photography-packages">
      <div className="container mx-auto px-6"> 
      <div className="flex justify-between items-center mb-8 flex-col sm:flex-row">
  {/* Title */}
  <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold text-black text-center sm:text-left">
    Featured Photography Packages
  </h2>

  {/* View More button */}
  <a
    href="#"
    className="text-black flex items-center gap-2 hover:text-gray-300 text-lg sm:text-base mt-4 sm:mt-0 py-2 px-6 border-2 border-black rounded-full hover:bg-black hover:text-white transition duration-300"
  >
    <span>View more</span>
    <ion-icon name="arrow-forward-outline" className="text-xl"></ion-icon>
  </a>
</div>


        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <li key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <figure className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="p-6" >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 truncate">
                    <a href="#">{pkg.title}</a>
                  </h3>
                  <span className="px-3 py-1 text-sm font-semibold text-gray-600 border-2 border-gray-300 rounded-full">
                    {pkg.category}
                  </span>
                </div>

                {/* Photography package data */}
                <div className="grid grid-cols-2 gap-4 mb-6"> 
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaClock className="text-blue-500" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCamera className="text-blue-500" />
                    <span>{pkg.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMoneyBillAlt className="text-blue-500" />
                    <span>{pkg.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaFileImage className="text-blue-500" />
                    <span>{pkg.delivery}</span> 
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-800">
                    <strong>{pkg.prices}</strong> / Package
                  </p>
                  <div className="flex gap-2">
                    {/* Favorite Button */}
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-200">
                      <FaImages />
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                      Contact Now
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PhotographyPackages;
