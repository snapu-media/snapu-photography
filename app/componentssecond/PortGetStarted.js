'use client';
import { FaCameraRetro, FaRegEdit, FaCloudUploadAlt, FaShareAlt } from 'react-icons/fa'; // Import React Icons

export default function PortGetStarted() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Get started with 4 simple steps to showcase your photography
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <li className="relative group">
            <div className="bg-white p-6 rounded-2xl border border-white shadow-md hover:bg-blue-50 hover:shadow-lg transition duration-300 w-56 h-72">
              <div className="bg-pink-200 text-pink-700 h-12 w-12 flex items-center justify-center rounded-full mb-4">
                <FaCameraRetro style={{ fontSize: '26px' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Capture Photos</h3>
              <p className="text-gray-600 mb-4">
                Use your camera to take breathtaking shots. Every photo tells a story.
              </p>
              <a href="#" className="text-blue-500 relative group hover:text-blue-700">
                Get started
                <span className="absolute bottom-0 left-0 block w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
              </a>
            </div>
          </li>

          {/* Step 2 */}
          <li className="relative group">
            <div className="bg-white p-6 rounded-2xl border border-white shadow-md hover:bg-blue-50 hover:shadow-lg transition duration-300 w-56 h-72">
              <div className="bg-blue-300 text-blue-700 h-12 w-12 flex items-center justify-center rounded-full mb-4">
                <FaRegEdit style={{ fontSize: '26px' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Edit your photos</h3>
              <p className="text-gray-600 mb-4">
                Enhance your photos with professional editing tools to make them pop.
              </p>
              <a href="#" className="text-blue-500 relative group hover:text-blue-700">
                Get started
                <span className="absolute bottom-0 left-0 block w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
              </a>
            </div>
          </li>

          {/* Step 3 */}
          <li className="relative group">
            <div className="bg-white p-6 rounded-2xl border border-white shadow-md hover:bg-blue-50 hover:shadow-lg transition duration-300 w-56 h-72">
              <div className="bg-green-100 text-green-700 h-12 w-12 flex items-center justify-center rounded-full mb-4">
                <FaCloudUploadAlt style={{ fontSize: '26px' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Upload to Gallery</h3>
              <p className="text-gray-600 mb-4">
                Upload your best shots to create a stunning gallery online.
              </p>
              <a href="#" className="text-blue-500 relative group hover:text-blue-700">
                Get started
                <span className="absolute bottom-0 left-0 block w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
              </a>
            </div>
          </li>

          {/* Step 4 */}
          <li className="relative group">
            <div className="bg-white p-6 rounded-2xl border border-white shadow-md hover:bg-blue-50 hover:shadow-lg transition duration-300 w-56 h-72">
              <div className="bg-purple-300 text-purple-700 h-12 w-12 flex items-center justify-center rounded-full mb-4">
                <FaShareAlt style={{ fontSize: '26px' }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Share with world</h3>
              <p className="text-gray-600 mb-4">
                Share your portfolio and connect with other photographers or clients.
              </p>
              <a href="#" className="text-blue-500 relative group hover:text-blue-700">
                Get started
                <span className="absolute bottom-0 left-0 block w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all"></span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
