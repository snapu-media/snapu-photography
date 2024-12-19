'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function PortLanding() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
      },
    });

    tl.to('#fanta', {
      top: '120%',
      left: '0%',
    }, 'orange')
      .to('#orange-cut', {
        top: '160%',
        left: '23%',
      }, 'orange')
      .to('#orange', {
        width: '15%',
        top: '160%',
        right: '10%',
      }, 'orange')
      .to('#leaf', {
        top: '110%',
        rotate: '130deg',
        left: '70%',
      }, 'orange')
      .to('#leaf2', {
        top: '110%',
        rotate: '130deg',
        left: '0%',
      }, 'orange');

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%',
        scrub: true,
      },
    });

    tl2.from('.lemon1', {
      rotate: '-90deg',
      left: '-100%',
      top: '110%',
    }, 'ca')
      .from('#cocacola', {
        rotate: '-90deg',
        top: '110%',
        left: '-100%',
      }, 'ca')
      .from('.lemon2', {
        rotate: '90deg',
        left: '100%',
        top: '110%',
      }, 'ca')
      .from('#pepsi', {
        rotate: '90deg',
        top: '110%',
        left: '100%',
      }, 'ca')
      .to('#orange-cut', {
        width: '18%',
        left: '42%',
        top: '204%',
      }, 'ca')
      .to('#fanta', {
        width: '35%',
        top: '210%',
        left: '33%',
      }, 'ca');
  }, []);

  return (
    <div className="bg-orange-600 w-full h-screen overflow-hidden">
      

      {/* Hero Section */}
      <div className="flex items-center justify-center w-full h-screen bg-gradient-to-br from-yellow-400 to-orange-600 relative">
        <h1 className="text-white text-[25vw] font-bold">FANTA</h1>
        <Image
          id="orange-cut"
          src="/Assets/orange2.png"
          alt="Orange Cut"
          width={150}
          height={150}
          className="absolute top-[10%] left-[32%] w-[15%] transition-all duration-500 ease-in-out"
        />
        <Image
          id="fanta"
          src="/Assets/fanta.png"
          alt="Fanta"
          width={300}
          height={300}
          className="absolute top-1/2 left-1/3 w-[40%] z-2 transition-all duration-500 ease-in-out"
        />
        <Image
          id="orange"
          src="/Assets/orange.webp"
          alt="Orange"
          width={150}
          height={150}
          className="absolute top-[55%] right-[30%] w-[20%] transition-all duration-500 ease-in-out"
        />
        <Image
          id="leaf"
          src="/Assets/leaf.webp"
          alt="Leaf"
          width={150}
          height={150}
          className="absolute top-[10%] left-[0%] transform rotate-60 w-[18%] transition-all duration-500 ease-in-out"
        />
        <Image
          id="leaf2"
          src="/Assets/leaf2.png"
          alt="Leaf 2"
          width={150}
          height={150}
          className="absolute top-[70%] left-[80%] transform rotate-[-90deg] w-[12%] transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Section Two */}
      <div className="flex w-full h-screen bg-[#4d231c]">
        <div className="flex items-start justify-center flex-col gap-16 w-1/2 h-full p-10">
          <svg className="w-full transform rotate-x-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#e04428" d="M41.5,-59.5C49.8,-51.1,49.7,-33.6,50.7,-19.2C51.7,-4.7,53.8,6.7,52.4,18.9C51.1,31.1,46.3,44.1,36.9,52.9C27.6,61.8,13.8,66.5,-2.5,70C-18.8,73.4,-37.7,75.6,-52.5,68.5C-67.3,61.5,-78.2,45.2,-84.5,27.1C-90.9,9,-92.7,-10.8,-80.5,-19.3C-68.3,-27.8,-42.1,-24.8,-26.3,-30.8C-10.6,-36.8,-5.3,-51.7,5.7,-59.5C16.6,-67.3,33.2,-68,41.5,-59.5Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center text-white gap-8 w-1/2 h-full px-10">
          <h1 className="text-5xl">Flavour Updated</h1>
          <p className="text-lg w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, excepturi sed, itaque placeat id
            natus soluta veniam obcaecati qui a laborum laboriosam dolorem illum labore sit, voluptates commodi neque
            dolores tempore temporibus deleniti? Nobis, ratione hic error quis cum neque nulla laudantium nostrum sit
            nihil dolorum quisquam enim quaerat, eaque ex sequi, harum totam quia non!
          </p>
        </div>
      </div>

      {/* Section Three */}
      <div className="flex items-center justify-center gap-12 w-full h-screen bg-gradient-to-br from-yellow-400 to-orange-600">
        <div className="relative flex items-center justify-center flex-col gap-8 w-1/3 h-2/3 bg-white rounded-2xl p-6">
          <Image
            src="/Assets/lemon.webp"
            alt="Lemon"
            width={150}
            height={150}
            className="absolute top-[-30%] left-1/2 transform -translate-x-1/2 w-[25vw]"
          />
          <Image
            id="cocacola"
            src="/Assets/cocacola.png"
            alt="CocaCola"
            width={150}
            height={150}
            className="absolute top-[-15%] left-1/2 transform -translate-x-1/2 w-[60%]"
          />
          <h1 className="mt-40 text-3xl">CocaCola</h1>
          <button className="text-white bg-orange-500 px-6 py-2 rounded-full">Buy Now</button>
        </div>
        <div className="relative flex items-center justify-center flex-col gap-8 w-1/3 h-2/3 bg-white rounded-2xl p-6">
          <h1 className="mt-40 text-3xl">Fanta</h1>
          <button className="text-white bg-orange-500 px-6 py-2 rounded-full">Buy Now</button>
        </div>
        <div className="relative flex items-center justify-center flex-col gap-8 w-1/3 h-2/3 bg-white rounded-2xl p-6">
          <Image
            src="/Assets/lemon.webp"
            alt="Lemon"
            width={150}
            height={150}
            className="absolute top-[-30%] left-1/2 transform -translate-x-1/2 w-[25vw]"
          />
          <Image
            id="pepsi"
            src="/Assets/pepsi.png"
            alt="Pepsi"
            width={150}
            height={150}
            className="absolute top-[-15%] left-1/2 transform -translate-x-1/2 w-[85%]"
          />
          <h1 className="mt-40 text-3xl">Pepsi</h1>
          <button className="text-white bg-orange-500 px-6 py-2 rounded-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
