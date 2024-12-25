import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Left Section */}
      <div className="footer-left space-y-4">
        <p className="text-sm">
          Contact us <FaPhone className="inline-block" />: 123-456-7890
        </p>
        <p className="text-sm">
          Email: <br />
          <FaEnvelope className="inline-block" />{" "}
          <Link
            href={"/"}
            className="italic underline text-blue-400 hover:text-blue-300"
          >
           support@bookmydoctor.com.
          </Link>
        </p>
        <p className="text-sm">&copy; 2024 Book My Doctor. All rights reserved.</p>
      </div>

      {/* Center Section */}
      <div className="footer-center">
        <ul className="footer-ul space-y-2">
          <li>
            <Link
              href={"/"}
              className="underline text-blue-400 hover:text-blue-300"
            >
              Find a Doctor
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="underline text-blue-400 hover:text-blue-300"
            >
             Appointment Booking
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="underline text-blue-400 hover:text-blue-300"
            >
             Patient Resources
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="underline text-blue-400 hover:text-blue-300"
            >
             Medical Insurance
            </Link>
          </li>
        </ul>
      </div>

      {/* Middle Section */}
      {/* Feedback Section */}
      <div className="feedback-section">
        <h1 className="text-lg font-bold mb-4"> Feedback</h1>
        <form className="feedback-form space-y-4">
          <textarea
            placeholder="Message"
            className="w-full p-2 border border-gray-700 bg-gray-800 text-white rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <div className="social-icons flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          <a
            href="#"
            aria-label="Facebook"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <FaFacebook /> <span>Facebook</span>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="flex items-center space-x-2 hover:text-pink-400"
          >
            <FaInstagram /> <span>Instagram</span>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <FaTwitter /> <span>Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
