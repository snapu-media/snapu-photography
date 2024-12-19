'use client';
import { useEffect } from 'react';

const MapPage = () => {
  useEffect(() => {
    // Dynamically load the Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA8eaHt9Dh5H57Zh0xVTqxVdBFCvFMqFjQ&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Create a global `initMap` function
    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {
          lat: 40.645037,
          lng: -73.880224,
        },
      });

      const image = {
        url: 'https://cdn-icons-png.freepik.com/256/15692/15692612.png?semt=ais_hybrid',  // Path to the image
        scaledSize: new google.maps.Size(30, 40),  // Set the new width and height of the icon
      };
      
      const beachMarker = new google.maps.Marker({
        position: {
          lat: 40.645037,
          lng: -73.880224,
        },
        map: map,
        icon: image,
      });
    };

    // Append script to the document
    document.head.appendChild(script);

    // Cleanup the script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <section className="map_section">
        {/* Ensure the map has proper height and width */}
        <div id="map" className="h-100 w-100" style={{ height: '500px', width: '100%' }}></div>
      </section>
    </div>
  );
};

export default MapPage;
 