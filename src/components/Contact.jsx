// src/components/Contact.jsx
import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; 

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState(''); // State for name
  const [email, setEmail] = useState(''); // State for email
  const [message, setMessage] = useState(''); // State for message

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log submitted data
    console.log("Submitted Data:", {
      name,
      email,
      message,
    });

    setSubmitted(true); 
  };

  return (
    <section id="contact" className="dark:bg-dark-900 bg-gradient-to-b from-gray-800 text-white py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Contact Form */}
        {!submitted ? (
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-red-500 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-400 mb-8">
              Have a question or want to work together? Reach out to me!
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-dark-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <input
                  type="text"
                  value={name} // Bind value to state
                  onChange={(e) => setName(e.target.value)} // Update state on change
                  className="w-full p-3 rounded-lg bg-dark-700 text-black focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  value={email} // Bind value to state
                  onChange={(e) => setEmail(e.target.value)} // Update state on change
                  className="w-full p-3 rounded-lg bg-dark-700 text-black focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  rows="5"
                  value={message} // Bind value to state
                  onChange={(e) => setMessage(e.target.value)} // Update state on change
                  className="w-full p-3 rounded-lg bg-dark-700 text-black focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        ) : (
          // Success Message
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center">
            <h2 className="text-3xl font-bold text-red-500 mb-6">Thank You!</h2>
            <p className="text-lg text-gray-400 mb-4">
              Your message has been submitted successfully.
            </p>
            <p className="text-gray-300">
              I look forward to connecting with you soon!
            </p>
          </div>
        )}

        {/* Contact Details */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:pl-10">
          <h3 className="text-2xl font-bold text-red-500 mb-4">Contact Details</h3>
          <p className="text-lg text-gray-400 mb-2">Feel free to reach out through any of the following methods:</p>
          <ul className="list-none">
            <li className="mb-2">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:abhishekvishwakarma460@gmail.com"
                className="flex items-center text-red-500 hover:underline transition duration-300"
                aria-label="Send an email to abhishekvishwakarma460@gmail.com"
              >
                <FaEnvelope className="mr-2 text-xl" /> abhishekvishwakarma460@gmail.com
              </a>
            </li>
            <li className="mb-2">
              <strong>Phone:</strong>
              <a
                href="tel:+919915857465"
                className="flex items-center text-red-500 hover:underline transition duration-300"
                aria-label="Call +91 99158 57465"
              >
                <FaPhoneAlt className="mr-2 text-xl" /> +91 99158 57465
              </a>
            </li>
            <li className="mb-2">
              <strong>Twitter:</strong>{' '}
              <a 
                href="https://twitter.com/@abhisharma0812" 
                className="flex items-center text-red-500 hover:underline transition duration-300" 
                target='_blank' 
                rel="noopener noreferrer"
              >
                <FaTwitter className="mr-2" /> @abhisharma0812
              </a>
            </li>
            <li className="mb-2">
              <strong>LinkedIn:</strong>{' '}
              <a 
                href="https://www.linkedin.com/in/abhiwebdev" 
                className="flex items-center text-red-500 hover:underline transition duration-300" 
                target='_blank' 
                rel="noopener noreferrer"
              >
                <FaLinkedin className="mr-2" /> Connect with me on LinkedIn
              </a>
            </li>
          </ul>
          <p className="text-lg text-gray-400 mt-4">
            I look forward to connecting with you and exploring new opportunities together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
