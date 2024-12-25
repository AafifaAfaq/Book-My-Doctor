import React from 'react'

const Contact = () => {
  return (
    <section
      className="contact-form bg-cover bg-slate-300 bg-center px-6 py-12 md:px-16 md:py-20"
    >
      <h2 className="fade-in text-3xl font-bold text-gray-800 text-center mb-6 md:text-4xl">
        Contact Us
      </h2>
      <p className="fade-in text-gray-600 text-center mb-8 md:text-lg">
        For more information or to schedule a meeting, please contact us.
      </p>
      <form className="max-w-xl mx-auto bg-gray-400 p-6 rounded-lg shadow-lg space-y-4">
        <label className="block text-gray-700 font-medium">
          Name:
          <input
            type="text"
            name="name"
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <label className="block text-gray-700 font-medium">
          Email:
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <label className="block text-gray-700 font-medium">
          Phone:
          <input
            type="tel"
            name="phone"
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
        <label className="block text-gray-700 font-medium">
          Message:
          <textarea
            name="message"
            rows={6}
            required
            className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Contact
