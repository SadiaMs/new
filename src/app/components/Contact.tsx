'use client'
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process the form data here, e.g., send it to an API or email service
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gradient-to-r from-black-500 py-16 px-4 sm:px-8">
      <div className="container mx-auto text-white text-center">
        <h2 className=" text-yellow-500 text-4xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-yellow-200 text-lg mb-8">We’d love to hear from you! Drop us a message, and we’ll get back to you as soon as possible.</p>
        <div className="max-w-4xl mx-auto bg-black text-yellow-100 rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative">
                <label  className="text-yellow-400 text-sm font-medium hover:text-red-600">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 bg-yellow-100 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="relative">
                <label  className="text-yellow-400 text-sm font-medium ">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 bg-yellow-100 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="relative mt-6">
              <label htmlFor="message" className="text-sm font-medium text-yellow-400">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-4 bg-yellow-100 rounded-lg border-2 border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none h-32"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <div className="mt-6 text-center">
              <button type="submit" className="px-8 py-3 bg-yellow-400 text-white rounded-lg hover:bg-red-600 transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <p className="text-yellow-200 mt-8 text-sm">Your privacy is important to us. We never share your information with third parties.</p>
      </div>
    </div>
  );
};

export default Contact;
