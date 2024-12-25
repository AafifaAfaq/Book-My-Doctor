'use client'
import React, { useState } from 'react';
import { FaCalendarCheck } from "react-icons/fa";

const Doctors = () => {
  // State to store appointments
  const [appointments, setAppointments] = useState<{ [key: number]: number }>({});

  const doctorData: any = [
    { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist', fee: 250, image: '/doc1.jpg' },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Pediatrician', fee: 200, image: '/doc2.jpg' },
    { id: 3, name: 'Dr. Mike Johnson', specialization: 'Neurologist', fee: 300, image: '/doc3.jpg' },
    { id: 4, name: 'Dr. Mark Lee', specialization: 'Orthopedic', fee: 300, image: '/pic2.jpg' },
    { id: 5, name: 'Dr. Shane Cork', specialization: 'Dentist', fee: 400, image: '/doc6.webp' },
    { id: 6, name: 'Dr. Michael Brown', specialization: 'Dermatologist', fee: 300, image: '/doc8.jpg' },
    { id: 7, name: 'Dr. Olivia White', specialization: 'Psychiatrist', fee: 400, image: '/doc4.jpg' },
    { id: 8, name: 'Dr. William Green', specialization: 'Surgeon', fee: 550, image: '/doc7.png' },
    { id: 9, name: 'Dr. Sophia Wilson', specialization: 'Gynecologist', fee: 350, image: '/doc5.jpg' },
  ];

  // Function to book an appointment
  const handleBookAppointment = (id: number) => {
    setAppointments((prevAppointments) => {
      const newAppointments = { ...prevAppointments };
      if (newAppointments[id]) {
        newAppointments[id] += 1;
      } else {
        newAppointments[id] = 1;
      }
      return newAppointments;
    });
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctorData.map((doctor: any) => (
          <div
            key={doctor.id}
            className="doctor-card border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white max-w-sm mx-auto"
          >
            <div
              className="doctor-image h-40 bg-cover bg-center"
              style={{
                backgroundImage: `url(${doctor.image})`,
              }}
            ></div>
            <div className="p-4">
              <div className="doctor-name text-lg font-semibold mb-2 text-gray-700">
                {doctor.name}
              </div>
              <div className="doctor-specialization text-gray-600 mb-2">
                {doctor.specialization}
              </div>
              <div className="doctor-fee text-gray-600 mb-4">
                Fee: ${doctor.fee}
              </div>
              <button
                onClick={() => handleBookAppointment(doctor.id)}
                className="book-appointment-button bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="appointment-info mt-6 text-center">
        <h3 className="text-xl font-semibold text-gray-700">
          <FaCalendarCheck className="inline-block mr-2 text-blue-500" /> Total Appointments:{' '}
          {Object.values(appointments).reduce((total, count) => total + count, 0)}
        </h3>
      </div>
    </div>
  );
};

export default Doctors;
