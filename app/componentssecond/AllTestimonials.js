import { AnimatedTestimonials } from "./TestimonialsComponent";

// Product Testimonial Section
export const ProductTestimonialSection = () => {
  const testimonialsData = [
    {
      name: "Rose",
      designation: "CEO at Example Corp",
      quote: "This product photography transformed our brand image. Highly recommend!",
      src: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Jane Smith",
      designation: "Marketing Director at XYZ Ltd",
      quote: "The images helped us increase our sales by 30%! The quality is unmatched.",
      src: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Sam Wilson",
      designation: "Founder at Sam's Creations",
      quote: "Incredible service. The photography showcased our products in the best light.",
      src: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // Add more testimonials here...
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
    </div>
  );
};

// Real Estate Testimonial Section
export const RealEstateTestimonialSection = () => {
  const testimonialsData = [
    {
      name: "Michael Johnson",
      designation: "Real Estate Agent at Prime Properties",
      quote: "The real estate photos we received were exceptional. They helped us sell properties faster and at higher prices!",
      src: "https://images.pexels.com/photos/5920774/pexels-photo-5920774.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Emily Davis",
      designation: "Owner at Modern Homes Realty",
      quote: "These stunning images brought out the charm of every property. Our clients were impressed, and so were we!",
      src: "https://images.pexels.com/photos/14596539/pexels-photo-14596539.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Natasha",
      designation: "Real Estate Investor",
      quote: "The photography service provided was professional and top-notch. It really highlighted the unique features of each property.",
      src: "https://images.pexels.com/photos/3867823/pexels-photo-3867823.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Sarah Williams",
      designation: "Realtor at Elite Realty Group",
      quote: "Thanks to these incredible photos, we were able to attract more buyers. The details captured were just perfect!",
      src: "https://images.pexels.com/photos/5876513/pexels-photo-5876513.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // Add more testimonials as needed...
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say About Our Real Estate Photography</h2>
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
    </div>
  );
};




// Wedding Photography Testimonial Section
export const WeddingTestimonialSection = () => {
  const testimonialsData = [
    {
      name: "Lily Anderson",
      designation: "Bride",
      quote: "The wedding photos we received were breathtaking. They perfectly captured the magic of our big day!",
      src: "https://images.pexels.com/photos/254069/pexels-photo-254069.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "John Roberts",
      designation: "Groom",
      quote: "Our wedding photographer went above and beyond. Every moment was captured beautifully. We couldn't be happier with the results!",
      src: "https://images.pexels.com/photos/853406/pexels-photo-853406.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Rachel White",
      designation: "Bride",
      quote: "The photos are absolutely stunning! They captured every emotion and detail of our wedding day.",
      src: "https://images.pexels.com/photos/2055225/pexels-photo-2055225.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Mark Thompson",
      designation: "Groom",
      quote: "These pictures are priceless. We will cherish them forever. The photographer made us feel so comfortable throughout the day.",
      src: "https://images.pexels.com/photos/3009324/pexels-photo-3009324.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // Add more testimonials as needed...
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-pink-50 to-white">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say About Our Wedding Photography</h2>
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
    </div>
  );
};




export const CorporateEventTestimonialSection = () => {
  const testimonialsData = [
    {
      name: "Sophia Martinez",
      designation: "Event Manager at BrightFuture Corp",
      quote: "The photography perfectly captured the essence of our corporate event. Professional and stunning shots throughout!",
      src: "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "James Taylor",
      designation: "CEO at Tech Innovators",
      quote: "These photos elevated our event portfolio. Exceptional attention to detail and truly remarkable quality.",
      src: "https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Emily Watson",
      designation: "HR Manager at Global Synergy Inc",
      quote: "The team captured every significant moment of our award ceremony beautifully. Highly recommend their services!",
      src: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "David Wilson",
      designation: "Marketing Head at Apex Ventures",
      quote: "Impressed with the quality of the photos. They managed to capture the energy and professionalism of our product launch perfectly!",
      src: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // Add more testimonials as needed...
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say About Our Corporate Event Photography</h2>
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
    </div>
  );
};



export const BabyBornTestimonialSection = () => {
  const testimonialsData = [
    {
      name: "Olivia Johnson",
      designation: "Mother of newborn",
      quote: "The newborn photoshoot was absolutely wonderful. They captured every detail of our baby's first moments perfectly!",
      src: "https://images.pexels.com/photos/1471843/pexels-photo-1471843.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ethan Brown",
      designation: "Father of newborn",
      quote: "We couldn't be happier with the photos. The photographers were patient and made our baby feel comfortable during the session.",
      src: "https://images.pexels.com/photos/1648396/pexels-photo-1648396.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Isabella Smith",
      designation: "Mother of twin babies",
      quote: "The photoshoot was a dream! The team captured every precious moment with our twins. Truly magical memories.",
      src: "https://images.pexels.com/photos/3820203/pexels-photo-3820203.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Mason Williams",
      designation: "Father of newborn",
      quote: "The team made us feel at ease and captured our baby's personality so well. These photos will be cherished forever!",
      src: "https://images.pexels.com/photos/105952/pexels-photo-105952.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // Add more testimonials as needed...
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-pink-50 to-white">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say About Our Baby Born Photography</h2>
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
    </div>
  );
};



export const MaternityTestimonialSection = () => {
  const testimonialsData = [
    {
      name: "Sophia Martinez",
      designation: "Mother-to-be",
      quote: "The maternity photoshoot was such an unforgettable experience. The photographers made me feel beautiful and captured every moment so perfectly!",
      src: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "David Taylor",
      designation: "Father-to-be",
      quote: "We were so impressed by the maternity session! The team was professional, thoughtful, and made us feel completely comfortable. The photos are stunning!",
      src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Emily Thompson",
      designation: "Expecting Mother",
      quote: "The maternity shoot was beyond amazing! They made me feel so comfortable and captured such beautiful moments that I'll treasure forever.",
      src: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "James Robinson",
      designation: "Father-to-be",
      quote: "Such a great experience! The team was super attentive and ensured the photoshoot was a memorable and enjoyable experience. We love the results!",
      src: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // Add more testimonials as needed...
  ];

  return (
    <div className="py-12 bg-gradient-to-b from-pink-50 to-white">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say About Our Maternity Photography</h2>
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
    </div>
  );
};
