import React from 'react';

const contentData = [
  {
    image: '/blogs/b1.png',
    tag: 'popular',
    category:"Photography",
    title: 'Mastering the Art of Composition in Photography',
    description: 'Learn the rules of composition to create stunning photos.',
    userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    userName: 'John Doe',
    time: '3h ago',
    link: '/Blogs/composition',
  },
  {
    image: 'https://images.pexels.com/photos/29888769/pexels-photo-29888769/free-photo-of-senior-man-participating-in-trail-run-in-balikesir.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Technology',
    category:"Photography",
    title: '10 Tips for Capturing Stunning Landscape Shots',
    description: 'Take your landscape photography to the next level.',
    userImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    userName: 'Jane Smith',
    time: '1d ago',
    link: '/Blogs/LandscapeBlogPage',
  },
  {
    image: 'https://images.pexels.com/photos/10910631/pexels-photo-10910631.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'average',
    category:"Photography",
    title: 'The Golden Hour: Perfect Lighting for Perfect Photos',
    description: 'Discover the magic of shooting during the golden hour.',
    userImage: 'https://randomuser.me/api/portraits/men/52.jpg',
    userName: 'Alex Green',
    time: '2w ago',
    link: '/Blogs/GoldenHourBlogPage',
  },
];

const Blogs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 pt-10 pb-10">
      <div className="grid gap-6 max-w-screen-lg grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center">
        {contentData.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-80 flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 w-full">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <span
                className={`px-3 py-1 text-sm text-white rounded-full mb-3 ${
                  item.tag === 'Technology'
                    ? 'bg-teal-500'
                    : item.tag === 'popular'
                    ? 'bg-purple-500'
                    : 'bg-blue-500'
                }`}
              >
                {item.category}
              </span>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm mb-6">{item.description}</p>
              <div className="flex items-center mt-auto">
                <img
                  src={item.userImage}
                  alt={item.userName}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h5 className="text-sm font-medium">{item.userName}</h5>
                  <small className="text-gray-500 text-xs">{item.time}</small>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
