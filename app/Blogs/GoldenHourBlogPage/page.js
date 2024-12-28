import React from 'react';

const GoldenHourBlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Header Section */}
      <header className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
            The Golden Hour: Perfect Lighting for Perfect Photos
          </h1>
          <div className="flex items-center mt-6 space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/52.jpg"
              alt="Alex Green"
              className="w-12 h-12 rounded-full border-2 border-teal-500"
            />
            <div>
              <h5 className="text-lg font-semibold text-gray-700">Alex Green</h5>
              <p className="text-sm text-gray-500">Published 2 weeks ago</p>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Blog Image */}
        <div className="mb-8">
          <img
            src="https://images.pexels.com/photos/10910631/pexels-photo-10910631.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Golden Hour Photography"
            className="w-full h-72 sm:h-96 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Blog Content */}
        <article className="text-gray-800 text-lg leading-relaxed space-y-6">
          <p>
            The golden hour, also known as the magic hour, refers to the period just after sunrise and before sunset when the light is softer and more flattering. This is a photographer’s favorite time to capture stunning images due to the warm, diffused light that adds a magical touch to your photos.
          </p>
          <p>
            During this time, the sun sits lower in the sky, creating long, dramatic shadows and rich, warm tones. The light quality is soft, making it easier to capture details and achieve a balanced exposure without harsh highlights or deep shadows.
          </p>
          <p>
            To make the most of the golden hour, you should plan your shoots around the time when the sun is closest to the horizon. This requires knowing the sunrise and sunset times for your location, which can be easily found through various apps or websites.
          </p>
          <p>
            Keep in mind that the golden hour doesn’t last long, so timing is crucial. As the sun moves, the light will change rapidly, so be ready to shoot quickly. Also, don’t forget to experiment with backlighting, silhouettes, and lens flare to add creativity to your shots.
          </p>
          <p>
            Whether you're photographing landscapes, portraits, or still life, the golden hour offers the perfect conditions to make your photos shine. Embrace this fleeting moment and capture the magic that only the golden hour can provide.
          </p>
        </article>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <a
            href="/Blogs"
            className="inline-block bg-teal-500 text-white font-semibold text-lg px-6 py-3 rounded-md shadow-md hover:bg-teal-600 transition-all"
          >
            ← Back to Blogs
          </a>
        </div>
      </main>
    </div>
  );
};

export default GoldenHourBlogPage;
