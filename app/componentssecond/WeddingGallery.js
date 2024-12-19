import React from 'react';

const WeddingGallery = () => {
  // Data: Wedding photography-specific images with descriptions
  const images = [
    { id: 1, src: "https://images.pexels.com/photos/18700114/pexels-photo-18700114/free-photo-of-a-woman-in-traditional-indian-clothing-is-sitting-on-a-red-background.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Wedding Bride", description: "Beautiful bride on her special day." },
    { id: 2, src: "https://images.pexels.com/photos/18677425/pexels-photo-18677425/free-photo-of-a-bride-and-groom-kiss-in-front-of-a-white-background.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Wedding Vows", description: "Couple exchanging vows at the ceremony." },
    { id: 3, src: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg", alt: "Wedding Kiss", description: "The perfect kiss after saying 'I do'." },
    { id: 4, src: "https://images.pexels.com/photos/7090125/pexels-photo-7090125.jpeg", alt: "Wedding Reception", description: "Reception hall beautifully decorated." },
    { id: 5, src: "https://images.pexels.com/photos/1890252/pexels-photo-1890252.jpeg", alt: "Wedding Cake", description: "Elegant wedding cake ready to be cut." },
    { id: 6, src: "https://images.pexels.com/photos/1998486/pexels-photo-1998486.jpeg", alt: "Couple Portrait", description: "Couple sharing an intimate moment." },
    { id: 7, src: "https://images.pexels.com/photos/2100172/pexels-photo-2100172.jpeg", alt: "Wedding Dance", description: "The first dance of the couple." },
    { id: 8, src: "https://images.pexels.com/photos/3184780/pexels-photo-3184780.jpeg", alt: "Wedding Rings", description: "Close-up of wedding rings." },
    { id: 9, src: "https://images.pexels.com/photos/2081898/pexels-photo-2081898.jpeg", alt: "Wedding Guests", description: "Guests enjoying the celebration." },
    { id: 10, src: "https://images.pexels.com/photos/2138050/pexels-photo-2138050.jpeg", alt: "Bridesmaids", description: "Bridesmaids laughing with the bride." },
    { id: 11, src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Wedding Table", description: "Elegant table setting for the wedding." },
    { id: 12, src: "https://images.pexels.com/photos/3739089/pexels-photo-3739089.jpeg", alt: "Bride and Groom Walk", description: "Couple walking hand-in-hand." },
    { id: 13, src: "https://images.pexels.com/photos/28613084/pexels-photo-28613084/free-photo-of-elegant-outdoor-wedding-ceremony-setup-by-the-lake.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Wedding Arch", description: "Beautiful floral arch for the ceremony." },
    { id: 14, src: "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg", alt: "Outdoor Wedding", description: "Stunning outdoor wedding under the stars." },
    { id: 15, src: "https://images.pexels.com/photos/1691899/pexels-photo-1691899.jpeg", alt: "Flower Bouquet", description: "Bridal bouquet of fresh flowers." },
    { id: 16, src: "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Ring Bearer", description: "Adorable ring bearer walking down the aisle." },
    { id: 17, src: "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg", alt: "Wedding Band", description: "Live band performing at the wedding." },
    { id: 18, src: "https://images.pexels.com/photos/2064005/pexels-photo-2064005.jpeg", alt: "First Look", description: "The groom's reaction during the first look." },
    { id: 19, src: "https://images.pexels.com/photos/1458334/pexels-photo-1458334.jpeg", alt: "Candles", description: "Romantic candles creating a dreamy ambiance." },
    { id: 20, src: "https://images.pexels.com/photos/2184122/pexels-photo-2184122.jpeg", alt: "Aisle Walk", description: "Bride walking down the aisle with her father." },
    { id: 21, src: "https://images.pexels.com/photos/3651931/pexels-photo-3651931.jpeg", alt: "First Dance", description: "Magical first dance under fairy lights." },
    { id: 22, src: "https://images.pexels.com/photos/247244/pexels-photo-247244.jpeg", alt: "Flower Girl", description: "Charming flower girl scattering petals." },
    { id: 23, src: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg", alt: "Sparkler Exit", description: "Couple's sparkler exit into the night." },
    { id: 24, src: "https://images.pexels.com/photos/388249/pexels-photo-388249.jpeg", alt: "Vintage Car", description: "A vintage getaway car for the couple." },
    { id: 25, src: "https://images.pexels.com/photos/1051741/pexels-photo-1051741.jpeg", alt: "Wedding Veil", description: "Bride's veil flowing in the wind." },
    { id: 26, src: "https://images.pexels.com/photos/1043906/pexels-photo-1043906.jpeg", alt: "Wedding Toast", description: "Guests raising glasses for the wedding toast." },
    { id: 27, src: "https://images.pexels.com/photos/1691891/pexels-photo-1691891.jpeg", alt: "Close-Up Rings", description: "Rings captured with stunning detail." },
    { id: 28, src: "https://images.pexels.com/photos/1042115/pexels-photo-1042115.jpeg", alt: "Sunset Ceremony", description: "Ceremony with a picturesque sunset." },
    { id: 29, src: "https://images.pexels.com/photos/1488313/pexels-photo-1488313.jpeg", alt: "Guest Book", description: "Wedding guest book filled with wishes." },
    { id: 30, src: "https://images.pexels.com/photos/264159/pexels-photo-264159.jpeg", alt: "Bride's Shoes", description: "Bridal shoes elegantly placed for a photo." },
  ];
  
  return (
    <section className="py-16 bg-gray-100" id="photo-gallery">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Wedding Photography Gallery</h2>
          <p className="text-lg text-gray-600">Memorable moments of your special day</p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 xl:grid-cols-8 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Description on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 text-white flex justify-center items-center transition-opacity duration-300">
                <p className="text-center px-2 py-1 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingGallery;
