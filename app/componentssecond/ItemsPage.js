'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './ItemsPage.css';

export default function Home() {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const carouselRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const backButtonRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Array containing content for each image
  const itemsData = [
    {
      title: 'DESIGN SLIDER 1',
      topic: 'Portrait Photography',
      description: 'Capture the essence of individuals through stunning portrait photography. Whether you need a personal portrait or a professional headshot, our expertise ensures you stand out.',
      detailTitle: 'Portrait Photography Details',
      detailDescription: 'Detailed information about our portrait photography services, including customizable packages and session types. Ideal for families, professionals, or individuals looking to create lasting memories.',
      specifications: [
        { label: 'Session Duration', value: '1 Hour' },
        { label: 'Location', value: 'Studio/Outdoor' },
        { label: 'Final Product', value: 'High-Resolution Images' },
      ],
    },
    {
      title: 'DESIGN SLIDER 2',
      topic: 'Wedding Photography',
      description: 'Our wedding photography services capture every special moment from your big day. From intimate ceremonies to grand receptions, we ensure every memory is immortalized.',
      detailTitle: 'Wedding Photography Details',
      detailDescription: 'Learn about our wedding photography packages, which include full-day coverage, photo albums, and digital galleries. We specialize in candid, emotional shots that tell your wedding story.',
      specifications: [
        { label: 'Coverage Time', value: 'Up to 10 Hours' },
        { label: 'Packages', value: 'Customizable' },
        { label: 'Final Product', value: 'Albums, Digital Galleries' },
      ],
    },
    {
      title: 'DESIGN SLIDER 3',
      topic: 'Product Photography',
      description: 'Showcase your products in the best light with our professional product photography. Ideal for e-commerce, catalogs, or promotional materials.',
      detailTitle: 'Product Photography Details',
      detailDescription: 'We offer detailed product shots with studio lighting to enhance product features and appeal. We cater to various industries, from fashion to tech, ensuring your products look their best.',
      specifications: [
        { label: 'Session Duration', value: '1-2 Hours' },
        { label: 'Package Options', value: 'Per Product/Hourly' },
        { label: 'Final Product', value: 'High-Quality Digital Images' },
      ],
    },
    {
      title: 'DESIGN SLIDER 4',
      topic: 'Event Photography',
      description: 'Capture the highlights of your event, whether it\'s a corporate function, party, or charity event. We ensure your event is documented with beautiful, professional photos.',
      detailTitle: 'Event Photography Details',
      detailDescription: 'Our event photography services are tailored to your needs, offering everything from candid moments to group photos. We document the atmosphere and action in a way that lets you relive the event.',
      specifications: [
        { label: 'Coverage Time', value: 'Flexible' },
        { label: 'Ideal For', value: 'Conferences, Parties, Fundraisers' },
        { label: 'Final Product', value: 'Event Highlights Album' },
      ],
    },
    {
      title: 'DESIGN SLIDER 5',
      topic: 'Landscape Photography',
      description: 'Explore the world through stunning landscape photography. From natural vistas to urban sceneries, we bring breathtaking landscapes to life.',
      detailTitle: 'Landscape Photography Details',
      detailDescription: 'Our landscape photography services capture the beauty of the world, whether through grand panoramic shots or intricate close-ups. Perfect for prints or showcasing the beauty of nature.',
      specifications: [
        { label: 'Location', value: 'Outdoor/Scenic Locations' },
        { label: 'Session Duration', value: 'Varies by Location' },
        { label: 'Final Product', value: 'High-Resolution Prints and Digital Files' },
      ],
    },
  ];
  

  useEffect(() => {
    // Reset the button states after animation is complete
    if (!isAnimating) {
      nextButtonRef.current.style.pointerEvents = 'auto';
      prevButtonRef.current.style.pointerEvents = 'auto';
    }
  }, [isAnimating]);

  const showSlider = (type) => {
    if (isAnimating) return; // Prevent additional clicks during animation

    setIsAnimating(true);
    nextButtonRef.current.style.pointerEvents = 'none';
    prevButtonRef.current.style.pointerEvents = 'none';

    const items = carouselRef.current.querySelectorAll('.carousel .list .item');

    if (type === 'next') {
      carouselRef.current.querySelector('.list').appendChild(items[0]);
      carouselRef.current.classList.add('next');
    } else {
      carouselRef.current.querySelector('.list').prepend(items[items.length - 1]);
      carouselRef.current.classList.add('prev');
    }

    setTimeout(() => {
      setIsAnimating(false); // Allow button clicks after transition
    }, 500); // Adjust this timeout to match the transition duration

    setIsDetailVisible(false);
  };

  const toggleDetail = () => {
    carouselRef.current.classList.remove('next', 'prev');
    carouselRef.current.classList.add('showDetail');
    setIsDetailVisible(true);
  };

  const backToCarousel = () => {
    carouselRef.current.classList.remove('showDetail');
    setIsDetailVisible(false);
  };

  return (
    <div>
      <div className="carousel" ref={carouselRef}>
        <div className="list">
          {/* Carousel items */}
          {itemsData.map((item, index) => (
            <div className="item" key={index}>
              <Image src={`/images/img${index + 1}.png`} alt={`Image ${index + 1}`} width={500} height={500} />
              <div className="introduce">
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                <button className="seeMore" onClick={toggleDetail}>
                  SEE MORE &#8599;
                </button>
              </div>
              {isDetailVisible && (
                <div className="detail">
                  <div className="title">{item.detailTitle}</div>
                  <div className="des">{item.detailDescription}</div>
                  <div className="specifications">
                    {item.specifications.map((spec, index) => (
                      <div key={index}>
                        <p>{spec.label}</p>
                        <p>{spec.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="checkout">
                    <button>Check Out</button>
                    <button>Contact</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="arrows">
          <button
            id="prev"
            ref={prevButtonRef}
            onClick={() => showSlider('prev')}
          >
            &lt;&lt;
          </button>
          <button
            id="next"
            ref={nextButtonRef}
            onClick={() => showSlider('next')}
          >
            &gt;
          </button>
          <button
            id="back"
            ref={backButtonRef}
            onClick={backToCarousel}
          >
            Back &#8599;
          </button>
        </div>
      </div>
    </div>
  );
}
