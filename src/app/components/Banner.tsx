'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Banner = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav className="bg-gray-700 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-yellow-500 text-2xl font-bold">Dog Doctor</div>
          <ul className="flex space-x-6">
            <li className="relative">
              <button
                className="text-yellow-400 font-bold hover:text-yellow-400 focus:outline-none"
                onClick={toggleDropdown}
              >
                Services
              </button>
              {dropdownOpen && (
                <ul className="absolute top-full mt-2 bg-white text-gray-800 shadow-lg rounded">
                  <li className="px-4 py-2 hover:bg-red-200">General Checkup</li>
                  <li className="px-4 py-2 hover:bg-red-200">Vaccinations</li>
                  <li className="px-4 py-2 hover:bg-red-200">Surgery</li>
                </ul>
              )}
            </li>
            <li>
              <Link href="{/}" className=" text-yellow-200 font-bold hover:text-red-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="{/}" className=" text-yellow-200 font-bold hover:text-red-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="relative w-full h-screen bg-yellow-200 flex items-center justify-center">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/banner.jpg" // image path
          alt="Dog Doctor"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className=" text-yellow-500 text-4xl md:text-6xl font-bold mb-4">Caring for Your Furry Friends</h1>
          <p className=" font-mono text-yellow-200 text-lg md:text-2xl mb-6">
            Expert veterinary services for your beloved pets.
          </p>
          <button className="bg-yellow-600 hover:bg-red-700 text-yellow-100 font-bold py-2 px-10 rounded">
            Learn More
          </button>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </section>
    </div>
  );
};

export default Banner;

