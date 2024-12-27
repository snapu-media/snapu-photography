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
        <h2>Follow US On Social Media Handles</h2>
        {/* Upper Buttons */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-28 h-28 rounded-tl-[90px] rounded-tr-md rounded-bl-md rounded-br-md bg-white-200 shadow-md transition-transform duration-200 hover:scale-110 hover:bg-pink-100">
              <FaInstagram className="w-10 h-10 mx-auto mt-8 text-pink-600 transition-colors duration-200 hover:text-black" />
            </button>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-28 h-28 rounded-tr-[90px] rounded-tl-md rounded-bl-md rounded-br-md bg-white shadow-md transition-transform duration-200 hover:scale-110 hover:bg-blue-100">
              <FaFacebookF className="w-10 h-10 mx-auto mt-8 text-blue-500 transition-colors duration-200 hover:text-black" />
            </button>
          </a>
        </div>
         {/* Call Us Button */}
         <div>
          <a href="tel:+916304524729">
            <button className="w-40 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 hover:from-blue-400 hover:to-blue-500 flex items-center justify-center space-x-2">
              <span className="text-lg">Call Us</span>
            </button>
          </a>
        </div>
        {/* Lower Buttons */}
        <div className="flex gap-4">
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-28 h-28 rounded-bl-[90px] rounded-tr-md rounded-tl-md rounded-br-md bg-white shadow-md transition-transform duration-200 hover:scale-110 hover:bg-green-100">
              <FaWhatsapp className="w-10 h-10 mx-auto mt-1 text-green-500 transition-colors duration-200 hover:text-black" />
            </button>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-28 h-28 rounded-br-[90px] rounded-tr-md rounded-tl-md rounded-bl-md bg-white shadow-md transition-transform duration-200 hover:scale-110 hover:bg-red-100">
              <FaYoutube className="w-10 h-10 mx-auto mt-1 text-red-500 transition-colors duration-200 hover:text-black" />
            </button>
          </a>
          

        </div>
      </div>
    </>
  );
}
