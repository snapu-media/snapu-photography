import React from 'react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Header Section */}
      <header className="bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
            Mastering the Art of Composition in Photography
          </h1>
          <div className="flex items-center mt-6 space-x-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Doe"
              className="w-12 h-12 rounded-full border-2 border-teal-500"
            />
            <div>
              <h5 className="text-lg font-semibold text-gray-700">John Doe</h5>
              <p className="text-sm text-gray-500">Published 3 hours ago</p>
            </div>
          </div>
        </div>
      </header>

      {/* Blog Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Blog Image */}
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
            alt="Mastering the Art of Composition"
            className="w-full h-72 sm:h-96 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Blog Content */}
        <article className="text-gray-800 text-lg leading-relaxed space-y-6">
          <p>
            Photography is an art form that blends creativity and technical skill. Among the various aspects that contribute to a stunning photograph, composition stands out as one of the most crucial elements. It is the way we arrange the elements in a photo to guide the viewer's eye and evoke emotions.
          </p>
          <p>
            To master composition, one must start with the fundamental rules: the rule of thirds, leading lines, framing, and balance. Each of these techniques has its own charm and can be used in different scenarios to create impact.
          </p>
          <p>
            The rule of thirds, for instance, divides the frame into nine equal parts using two horizontal and two vertical lines. Placing the subject along these lines or their intersections often results in a more visually appealing image.
          </p>
          <p>
            Experimentation is key. While rules are essential to learn, breaking them can often lead to creative breakthroughs. Explore angles, perspectives, and lighting to bring out the best in your shots.
          </p>
          <p>
            Whether you’re capturing the grandeur of landscapes or the intimacy of portraits, composition is your tool to tell stories that resonate with viewers. Dive into the world of photography, and let your compositions speak for themselves.
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

export default BlogPage;
