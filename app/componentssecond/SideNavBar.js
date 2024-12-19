"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // To handle the sidebar toggle
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOtherServicesOpen, setIsOtherServicesOpen] = useState(false);
  const [isClientAlbumsOpen, setIsClientAlbumsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleOtherServices = () => {
    setIsOtherServicesOpen(!isOtherServicesOpen);
  };

  const toggleClientAlbums = () => {
    setIsClientAlbumsOpen(!isClientAlbumsOpen);
  };

  return (
    <div className="mobile-nav-bar">
      {/* Toggle Button - Only visible on mobile */}
      <div
        className="lg:hidden fixed top-4 right-4 z-50 cursor-pointer"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <IoMdClose className="text-3xl text-gray-800" />
        ) : (
          <GiHamburgerMenu className="text-3xl text-gray-800" />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col p-6">
          <h1 className="text-xl font-bold text-blue-900 mb-4">My Portfolio</h1>

          {/* Menu Items */}
          <ul>
            <li className="mb-4 cursor-pointer">
              <a href="/portfolio" className="text-gray-800 hover:text-blue-900">
                Portfolio
              </a>
            </li>
            <li
              className="mb-4 cursor-pointer"
              onClick={toggleServices}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800 hover:text-blue-900">Photography Services</span>
                {isServicesOpen ? (
                  <MdArrowDropUp className="text-xl text-gray-800" />
                ) : (
                  <MdArrowDropDown className="text-xl text-gray-800" />
                )}
              </div>
              {isServicesOpen && (
                <ul className="pl-6 mt-2">
                  <li className="mb-2 text-gray-700 hover:text-blue-900">
                    <a href="/services/service1">Service 1</a>
                  </li>
                  <li className="mb-2 text-gray-700 hover:text-blue-900">
                    <a href="/services/service2">Service 2</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="mb-4 cursor-pointer"
              onClick={toggleOtherServices}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800 hover:text-blue-900">Packages</span>
                {isOtherServicesOpen ? (
                  <MdArrowDropUp className="text-xl text-gray-800" />
                ) : (
                  <MdArrowDropDown className="text-xl text-gray-800" />
                )}
              </div>
              {isOtherServicesOpen && (
                <ul className="pl-6 mt-2">
                  <li className="mb-2 text-gray-700 hover:text-blue-900">
                    <a href="/other-services/service1">Other Service 1</a>
                  </li>
                  <li className="mb-2 text-gray-700 hover:text-blue-900">
                    <a href="/other-services/service2">Other Service 2</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="mb-4 cursor-pointer"
              onClick={toggleClientAlbums}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800 hover:text-blue-900">Client Albums</span>
                {isClientAlbumsOpen ? (
                  <MdArrowDropUp className="text-xl text-gray-800" />
                ) : (
                  <MdArrowDropDown className="text-xl text-gray-800" />
                )}
              </div>
              {isClientAlbumsOpen && (
                <ul className="pl-6 mt-2">
                  <li className="mb-2 text-gray-700 hover:text-blue-900">
                    <a href="/client-albums/album1">Album 1</a>
                  </li>
                  <li className="mb-2 text-gray-700 hover:text-blue-900">
                    <a href="/client-albums/album2">Album 2</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-4 cursor-pointer">
              <a href="/about" className="text-gray-800 hover:text-blue-900">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
