import React from 'react';

const LandscapeBlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Header Section */}
      <header className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
            10 Tips for Capturing Stunning Landscape Shots
          </h1>
          <div className="flex items-center mt-6 space-x-4">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Jane Smith"
              className="w-12 h-12 rounded-full border-2 border-teal-500"
            />
            <div>
              <h5 className="text-lg font-semibold text-gray-700">Jane Smith</h5>
              <p className="text-sm text-gray-500">Published 1 day ago</p>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Blog Image */}
        <div className="mb-8">
          <img
            src="https://images.pexels.com/photos/1475893/pexels-photo-1475893.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="10 Tips for Capturing Stunning Landscape Shots"
            className="w-full h-72 sm:h-96 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Blog Content */}
        <article className="text-gray-800 text-lg leading-relaxed space-y-6">
          <p>
            Landscape photography can transform the way we perceive the world around us. By capturing sweeping vistas or even the smallest details of nature, you can convey the beauty of the natural world. However, achieving those perfect shots requires careful planning, technique, and an eye for detail.
          </p>
          <p>
            Here are 10 essential tips to help you take your landscape photography to the next level:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use a wide-angle lens for expansive views.</li>
            <li>Consider shooting during the golden hour for softer lighting.</li>
            <li>Make use of leading lines to draw the viewer’s eye into the frame.</li>
            <li>Pay attention to your foreground – it can add depth and interest.</li>
            <li>Always use a tripod for sharp, clear images.</li>
            <li>Experiment with long exposure to capture movement, like flowing water or clouds.</li>
            <li>Keep an eye on the weather – dramatic skies often lead to the best photos.</li>
            <li>Consider the rule of thirds for balanced compositions.</li>
            <li>Use filters to manage exposure, particularly when shooting in bright conditions.</li>
            <li>Don’t be afraid to get creative with your angles and perspectives.</li>
          </ul>
          <p>
            By following these tips, you’ll be well on your way to creating breathtaking landscape shots that showcase the beauty of nature.
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

export default LandscapeBlogPage;
