import React from "react";
import { Nav } from "./Nav";

export const About = () => {
  return (
 
          <div className="p-6 md:p-10 lg:p-16 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-8">
              About Our Platform
            </h1>
            <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
              Welcome to our React-based web platform. Built with React,
              Tailwind CSS, and modern tooling, this project exemplifies how
              user-centric interfaces and developer-friendly tools come together
              to create seamless web experiences.
            </p>

            <section className="bg-green-100 shadow-md rounded-lg p-6 mb-10">
              <h2 className="text-2xl font-semibold text-green-700 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                Our mission is to simplify frontend development and provide
                intuitive UI/UX experiences. Whether you're building apps for
                small businesses or enterprise-level applications, our focus is
                to deliver robust solutions that scale.
              </p>
            </section>

            <section className="bg-green-100 shadow-md rounded-lg p-6 mb-10">
              <h2 className="text-2xl font-semibold text-green-700 mb-3">
                Technologies Used
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>React – For building dynamic UIs</li>
                <li>Tailwind CSS – For rapid UI styling</li>
                <li>React Router – For client-side routing</li>
                <li>React Toastify – For clean and accessible notifications</li>
                <li>JSON Server – For quick API mocking</li>
              </ul>
            </section>

            <section className="bg-green-100 shadow-md rounded-lg p-6 mb-10">
              <h2 className="text-2xl font-semibold text-green-700 mb-3">
                Our Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                <div>
                  <h3 className="font-bold">John Doe</h3>
                  <p>Lead Developer</p>
                </div>
                <div>
                  <h3 className="font-bold">Jane Smith</h3>
                  <p>UI/UX Designer</p>
                </div>
                <div>
                  <h3 className="font-bold">Alex Johnson</h3>
                  <p>Backend Engineer</p>
                </div>
              </div>
            </section>

            <section className="bg-green-100 shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-green-700 mb-3">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you'd like to get in touch or learn more about this project,
                feel free to reach out through our contact form or email us
                directly at{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-green-600 underline"
                >
                  info@example.com
                </a>
                .
              </p>
            </section>
          </div>
       
  );
};

export default About;
