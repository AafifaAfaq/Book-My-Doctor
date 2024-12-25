import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section
        className="hero h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url(bg.jpg)" }}
      >
        <div className="hero-text text-center bg-white bg-opacity-70 p-6 md:p-8 rounded-md shadow-lg max-w-xs sm:max-w-sm md:max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 fade-in text-gray-800">
            "Your Health, Our Priority"
          </h1>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6">
            "Book your doctor’s appointment in just a few clicks. Our platform
            makes it easy to connect with trusted healthcare professionals for
            all your medical needs. Whether it's a routine check-up or
            specialized care, we are here to ensure your health journey is
            seamless and stress-free. Get personalized care and expert guidance
            at your convenience."
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 sm:px-5 md:px-6 rounded-md hover:bg-gray-800 transition duration-300">
            Book now
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
