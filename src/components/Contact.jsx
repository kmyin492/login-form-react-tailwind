import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-green-700 mb-10">Get in Touch</h1>

        <p className="text-lg text-gray-600 text-center mb-12">
          We'd love to hear from you! Whether you have a question, feedback, or just want to connect, feel free to reach out through any of the methods below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Phone */}
          <div className="flex items-start bg-green-100 p-6 rounded-2xl shadow-md">
            <Phone className="w-8 h-8 text-green-600 mt-1 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Phone</h2>
              <p className="text-lg text-gray-700">+95 9 123 456 789</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start bg-green-100 p-6 rounded-2xl shadow-md">
            <Mail className="w-8 h-8 text-green-600 mt-1 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Email</h2>
              <p className="text-lg text-gray-700">hello@example.com</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start bg-green-100 p-6 rounded-2xl shadow-md">
            <MapPin className="w-8 h-8 text-green-600 mt-1 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Address</h2>
              <p className="text-lg text-gray-700">123, Insein Road, Yangon, Myanmar</p>
            </div>
          </div>

          {/* Website */}
          <div className="flex items-start bg-green-100 p-6 rounded-2xl shadow-md">
            <Globe className="w-8 h-8 text-green-600 mt-1 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Website</h2>
              <a href="https://yourwebsite.com" className="text-lg text-green-600 hover:underline">
                yourwebsite.com
              </a>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex items-start bg-green-100 p-6 rounded-2xl shadow-md">
            <Facebook className="w-8 h-8 text-green-600 mt-1 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Facebook</h2>
              <a href="https://facebook.com/yourpage" className="text-lg text-green-600 hover:underline">
                facebook.com/yourpage
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start bg-green-100 p-6 rounded-2xl shadow-md">
            <Linkedin className="w-8 h-8 text-green-600 mt-1 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">LinkedIn</h2>
              <a href="https://linkedin.com/in/yourprofile" className="text-lg text-green-600 hover:underline">
                linkedin.com/in/yourprofile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;