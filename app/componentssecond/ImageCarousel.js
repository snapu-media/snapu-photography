'use client';
import { useState } from 'react';

const data = [
  {
    title: "Lossless Youths",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
    imageUrl:
      'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: "Estrange Bond",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
    imageUrl:
      'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: "The Gate Keeper",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
    imageUrl:
      'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: "Last Trace Of Us",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
    imageUrl:
      'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: "Urban Decay",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
    imageUrl:
      'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: "The Migration",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi.",
    imageUrl:
      'https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <main className="relative w-full h-screen bg-gray-100 shadow-lg overflow-hidden grid place-items-center">
      <div className="relative w-full h-full flex items-center justify-center">
        <ul className="w-full h-full flex items-center justify-center relative">
          {data.map((item, index) => (
            <li
              key={index}
              className={`absolute top-1/2 transform -translate-y-1/2 bg-cover bg-center transition-all duration-700 ease-in-out
                ${index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'} 
                ${index === 2 ? 'left-1/2' : ''}
                ${index === 3 ? 'left-[calc(50%+220px)]' : ''}
                ${index === 4 ? 'left-[calc(50%+440px)]' : ''}
                ${index === 5 ? 'left-[calc(50%+660px)] opacity-0' : ''}
              `}
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 text-white text-shadow-xl px-4 py-6 opacity-0 transition-opacity duration-500 ease-in-out">
                <h2 className="text-3xl font-extrabold uppercase mb-4">{item.title}</h2>
                <p className="text-sm mb-6">{item.description}</p>
                <button className="bg-black bg-opacity-40 border-2 border-white text-white rounded px-4 py-2">
                  Read More
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <nav className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={goToPrev}
          className="bg-white text-black border-2 border-black rounded-full p-3 mx-2 hover:bg-opacity-30"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="bg-white text-black border-2 border-black rounded-full p-3 mx-2 hover:bg-opacity-30"
        >
          &gt;
        </button>
      </nav>
    </main>
  );
}
