import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Header Content */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Our Locations</h2>
        <p className="text-gray-600">Visit us at one of our two main office locations.</p>
      </div>

      {/* Map Images Side-by-Side */}
      <div className="flex flex-wrap gap-4">
        {/* First Map */}
        <div className="relative flex-1">
          <img
            src="./officemap.png"
            alt="Company Location 1"
            className="w-full h-auto object-cover transition duration-300 ease-in-out md:hover:blur-sm"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 md:opacity-0 md:hover:opacity-100 transition duration-300 ease-in-out">
            <h3 className="text-white text-xl font-bold hidden md:block">Visit Office 1</h3>
            <p className="text-white text-sm mb-4 hidden md:block">Kandrika, Pakapuram, Vijayawada</p>
            <a
              href="https://goo.gl/maps/zLWFmpxLQ9nTciE28"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Open in Google Maps
            </a>
          </div>
          {/* Always Visible Button for Mobile */}
          <div className="block md:hidden text-center mt-2">
            <a
              href="https://goo.gl/maps/zLWFmpxLQ9nTciE28"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-black text-sm py-2 px-3 rounded-md hover:bg-blue-600 transition"
            >
              Kandrika, Pakapuram, Vijayawada
            </a>
          </div>
        </div>

        {/* Second Map */}
        <div className="relative flex-1">
          <img
            src="./officemap.png"
            alt="Company Location 2"
            className="w-full h-auto object-cover transition duration-300 ease-in-out md:hover:blur-sm"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 md:opacity-0 md:hover:opacity-100 transition duration-300 ease-in-out  ">
            <h3 className="text-white text-xl font-bold hidden md:block">Visit Office 2</h3>
            <p className="text-white text-sm mb-4 hidden md:block">Peterborugh,UK</p>
            <a
              href="https://goo.gl/maps/YourMapLink"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Open in Google Maps
            </a>
          </div>
          {/* Always Visible Button for Mobile */}
          <div className="block md:hidden text-center mt-2">
            <a
              href="https://goo.gl/maps/YourMapLink"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-sm py-2 px-3 rounded-md hover:bg-blue-600 transition"
            >
              Peterborugh,UK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
