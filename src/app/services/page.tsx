import React from 'react'

const page = () => {
  return (
    <div>
      {/* About Section */}

{/* Gray overlay for blurred effect */}
<div className="about-content relative max-w-4xl mx-auto text-center z-10 py-5 sm:py-6 md:py-8 lg:py-10 font-sans">
  <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold text-gray-800 text-gradient animate__animated animate__fadeIn mb-4 sm:mb-6 md:mb-8">
    About Us
  </h2>
  <p className="text-base sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8 text-gray-800 animate__animated animate__fadeIn animate__delay-1s">
    Welcome to <strong className="text-blue-500">Book My Doctor</strong>,
    your trusted platform for connecting with healthcare
    professionals. We specialize in making healthcare accessible by
    allowing you to easily book appointments with expert doctors across
    various specialties. Our mission is to simplify the healthcare
    journey and ensure that every patient receives the care they deserve
    in a timely and efficient manner.
  </p>
  <p className="text-base sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8 text-gray-800 animate__animated animate__fadeIn animate__delay-2s">
    At <strong className="text-blue-500">Book My Doctor</strong>, we
    believe that healthcare should be convenient and stress-free. We
    strive to offer a seamless booking experience, connecting you with
    certified doctors who are dedicated to providing personalized care.
    Explore our platform and take the first step towards better health.
  </p>
</div>
<div className="flex justify-center py-10 sm:py-12 md:py-16 lg:py-10">
  <img
    className="w-full h-auto max-w-md rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
    src="./pic2.jpg"
    alt="background"
    width={500}
    height={500}
  />
</div>


     {/* Why Choose Us Section */}
<div className="why-choose-us bg-slate-300 p-6 sm:p-8 md:p-12 font-sans text-gray-800 rounded-lg shadow-lg mt-12">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-800-600 mb-6 transition duration-500 ease-in-out transform hover:scale-105">
      Why Choose Us
    </h2>
    <p className="text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed mb-6 text-gray-700">
      At <strong className="text-blue-600">Book My Doctor</strong>, we
      prioritize your health and convenience. Here’s why our platform
      stands out:
    </p>
    <ul className="list-disc list-inside text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed space-y-4 text-gray-700">
      <li className="text-sm sm:text-xl md:text-xl lg:text-xl text-gray-800 opacity-90 transition duration-500 ease-in-out hover:opacity-100">
        <strong>Ease of Use:</strong> Our user-friendly platform makes
        booking appointments a breeze.
      </li>
      <li className="text-sm sm:text-xl md:text-xl lg:text-xl text-gray-800 opacity-90 transition duration-500 ease-in-out hover:opacity-100">
        <strong>Trusted Doctors:</strong> We feature only certified
        doctors from various specialties, ensuring quality care.
      </li>
      <li className="text-sm sm:text-xl md:text-xl lg:text-xl text-gray-800 opacity-90 transition duration-500 ease-in-out hover:opacity-100">
        <strong>24/7 Accessibility:</strong> You can book appointments
        anytime, from anywhere.
      </li>
      <li className="text-sm sm:text-xl md:text-xl lg:text-xl text-gray-800 opacity-90 transition duration-500 ease-in-out hover:opacity-100">
        <strong>Verified Reviews:</strong> Transparent doctor reviews to
        help you make an informed decision.
      </li>
    </ul>
  </div>
  <div className="flex justify-center py-10">
    <img
      className="w-full h-auto max-w-md rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
      src="./pic.jpg"
      alt="background"
      width={500}
      height={500}
    />
  </div>
</div>


      {/* Our Services Section */}
      <div className="our-services bg-slate-600 p-6 font-sans md:p-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-3xl font-bold animate__animated animate__fadeIn mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4 animate__animated animate__fadeIn animate__delay-1s">
            We offer a wide range of medical services to ensure you receive the
            best care, no matter your needs. Whether you’re looking for a
            routine check-up, specialist consultation, or emergency care, we
            have you covered.
          </p>
          <ul className="list-disc list-inside text-sm md:text-base leading-relaxed space-y-2">
            <li className="text-base md:text-lg animate__animated animate__fadeIn animate__delay-1.5s">
              <strong>General Check-ups:</strong> Schedule your routine health
              check-ups with ease.
            </li>
            <li className="text-base md:text-lg animate__animated animate__fadeIn animate__delay-2s">
              <strong>Specialist Consultations:</strong> Connect with experts in
              various medical fields.
            </li>
            <li className="text-base md:text-lg animate__animated animate__fadeIn animate__delay-2.5s">
              <strong>Telemedicine:</strong> Book online consultations for your
              convenience.
            </li>
            <li className="text-base md:text-lg animate__animated animate__fadeIn animate__delay-3s">
              <strong>Emergency Appointments:</strong> Book urgent appointments
              for immediate care.
            </li>
          </ul>
        </div>
        <div className="flex justify-center gap-5 py-10">
          <img
            className="w-full h-auto max-w-md rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
            src="./pic4.jpg"
            alt="background"
            width={500}
            height={500}
          />
          <img
            className="w-full h-auto max-w-md rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300"
            src="./pic3.jpg"
            alt="background"
            width={300}
            height={300}
          />
      </div>
      </div>
  

      {/* Our Team Section */}
      <div className="our-team bg-white p-6 md:p-12 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient animate__animated animate__fadeIn mb-4">
            Meet Our Team
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-4 animate__animated animate__fadeIn animate__delay-1s">
            Our team consists of experienced healthcare professionals who are
            dedicated to providing the best care. From our skilled doctors to
            our customer support staff, every member is committed to ensuring a
            smooth healthcare experience for you.
          </p>
          <div className="flex flex-wrap justify-center space-x-6">
            <div className="team-member mb-6 w-1/2 sm:w-1/3 md:w-1/4">
              <img
                src="doc1.jpg"
                alt="Doctor 1"
                className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
              <h3 className="mt-2 text-lg font-bold text-blue-500">
                Dr. John Doe
              </h3>
              <p className="text-sm">Cardiologist</p>
            </div>
            <div className="team-member mb-6 w-1/2 sm:w-1/3 md:w-1/4">
              <img
                src="doc2.jpg"
                alt="Doctor 2"
                className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
              <h3 className="mt-2 text-lg font-bold text-blue-500">
                Dr. Jane Smith
              </h3>
              <p className="text-sm">Pediatrician</p>
            </div>
            <div className="team-member mb-6 w-1/2 sm:w-1/3 md:w-1/4">
            <img
                src="doc3.jpg"
                alt="Doctor 3"
                className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
              />
              <h3 className="mt-2 text-lg font-bold text-blue-500">
                Dr. Mike Johnson
              </h3>
              <p className="text-sm">Neurologist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;