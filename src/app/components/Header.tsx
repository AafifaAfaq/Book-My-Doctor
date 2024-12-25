"use client"; // Make sure this is at the top

import { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = () => {
    setIsMenuOpen(false); // Close the menu on navigation
  };

  return (
    <header className="header flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo Section */}
      <div className="header-left flex items-center gap-2">
        <img
          src="/logo.png"
          alt="logo"
          width={70}
          height={50}
          className="object-contain"
        />
        <h1 className="logo text-xl">BOOK MY DOCTOR</h1>
      </div>

      {/* Hamburger Menu */}
      <div
        className="hamburger ml-auto flex flex-col justify-center gap-1 cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        <span
          className={`line h-1 w-6 bg-white transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`line h-1 w-6 bg-white transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`line h-1 w-6 bg-white transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>

      {/* Navigation Links */}
      <nav
        className={`nav fixed top-0 left-0 w-full bg-gray-800 p-8 flex-col md:flex-row lg:flex-row items-center justify-center gap-6 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:relative md:flex md:translate-y-0 md:w-auto md:bg-transparent md:p-0`}
      >
        <Link
          href="/"
          className="block px-4 py-2 text-sm sm:text-base text-white hover:text-gray-300"
          onClick={handleNavigation}
        >
          Home
        </Link>
        <Link
          href="/services"
          className="block px-4 py-2 text-sm sm:text-base text-white hover:text-gray-300"
          onClick={handleNavigation}
        >
          Services
        </Link>
        <Link
          href="/doctors"
          className="block px-4 py-2 text-sm sm:text-base text-white hover:text-gray-300"
          onClick={handleNavigation}
        >
          Doctors
        </Link>
        <Link
          href="/contact"
          className="block px-4 py-2 text-sm sm:text-base text-white hover:text-gray-300"
          onClick={handleNavigation}
        >
          Contact
        </Link>
      </nav>

      {/* Icons Section */}
      <div className="header-icons hidden md:flex items-center gap-4">
        <a
          href="#"
          className="login text-xs sm:text-sm text-white hover:text-gray-300"
        >
          Sign Up / Log In
        </a>
        <CiSearch className="icon text-xl sm:text-2xl cursor-pointer hover:text-gray-300" />
        <FaBell className="icon text-xl sm:text-2xl cursor-pointer hover:text-gray-300" />
      </div>
    </header>
  );
};
