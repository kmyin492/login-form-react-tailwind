import React from 'react';
import { CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-[200vh] bg-green-200 text-green-700">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Our Platform</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Building secure, fast, and modern web apps with love and clean code. Dive into a world of innovation and efficiency.
        </p>
        <button className="text-white bg-green-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="bg-white text-gray-800 px-6 py-16 rounded-4xl shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-700 text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Modern UI/UX',
                desc: 'We craft clean and modern designs with user-focused experiences.',
              },
              {
                title: 'Responsive Layouts',
                desc: 'Built to look great on all devices, big or small.',
              },
              {
                title: 'Fast Development',
                desc: 'Optimized workflows using React, Tailwind CSS, and more.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-green-50 rounded-xl shadow-md hover:shadow-lg transition">
                <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-2xl font-semibold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;