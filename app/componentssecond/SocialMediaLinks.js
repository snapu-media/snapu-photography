import Head from "next/head";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function SocialMediaLinks() {
  return (
    <>
      <Head>
        <title>Programwithfun</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="flex flex-col items-center justify-center gap-4">
  <h2>Follow Us On Social Media Handles</h2>
  {/* Upper Buttons */}
  <div className="flex gap-4">
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="w-28 h-28 rounded-tl-[90px] rounded-tr-md rounded-bl-md rounded-br-md bg-white shadow-sm shadow-black transition-transform duration-200 hover:scale-110 hover:bg-pink-100">
        <FaInstagram className="w-10 h-10 mx-auto mt-8 text-pink-600 transition-colors duration-200 hover:text-black" />
      </button>
    </a>
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="w-28 h-28 rounded-tr-[90px] rounded-tl-md rounded-bl-md rounded-br-md bg-white shadow-sm shadow-black transition-transform duration-200 hover:scale-110 hover:bg-blue-100">
        <FaFacebookF className="w-10 h-10 mx-auto mt-8 text-blue-500 transition-colors duration-200 hover:text-black" />
      </button>
    </a>
  </div>


         {/* Call Us Button */}
         <div className="flex flex-col items-center space-y-4">
  {/* India Container */}
  <div className="flex items-center justify-between w-60 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-4">
    <a href="tel:+916304524729" className="flex items-center space-x-2">
      <button className="w-20 h-8 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:scale-105 hover:bg-blue-50 transition-transform duration-200 flex items-center justify-center text-xs">
        <span>Call India</span>
      </button>
    </a>
    <span className="text-xs text-white">+91 63045 24729</span> {/* Display India phone number */}
  </div>

  {/* UK Container */}
  <div className="flex items-center justify-between w-60 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg p-4">
    <a href="tel:+44XXXXXXXXXX" className="flex items-center space-x-2">
      <button className="w-20 h-8 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:scale-105 hover:bg-blue-50 transition-transform duration-200 flex items-center justify-center text-xs">
        <span>Call UK</span>
      </button>
    </a>
    <span className="text-xs text-white">+44 XXXXXXXXXX</span> {/* Display UK phone number */}
  </div>
</div>

        {/* Lower Buttons */}
        <div className="flex gap-4">
  <a
    href="https://www.whatsapp.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="w-28 h-28 rounded-bl-[90px] rounded-tr-md rounded-tl-md rounded-br-md bg-white shadow-sm shadow-black transition-transform duration-200 hover:scale-110 hover:bg-green-100">
      <FaWhatsapp className="w-10 h-10 mx-auto mt-1 text-green-500 transition-colors duration-200 hover:text-black" />
    </button>
  </a>
  <a
    href="https://www.youtube.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="w-28 h-28 rounded-br-[90px] rounded-tr-md rounded-tl-md rounded-bl-md bg-white shadow-sm shadow-black transition-transform duration-200 hover:scale-110 hover:bg-red-100">
      <FaYoutube className="w-10 h-10 mx-auto mt-1 text-red-500 transition-colors duration-200 hover:text-black" />
    </button>
  </a>
</div>

      </div>
    </>
  );
}
