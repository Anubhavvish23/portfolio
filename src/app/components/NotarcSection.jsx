'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js

const NotarcSection = () => {
  const droneRef = useRef(null);

  useEffect(() => {
    const droneElement = droneRef.current;

    // Create the observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            droneElement.style.animationPlayState = 'running'; // Start the animation
            observer.unobserve(droneElement); // Unobserve after it runs once
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (droneElement) {
      observer.observe(droneElement); // Start observing
    }

    return () => {
      if (droneElement) {
        observer.unobserve(droneElement); // Cleanup on unmount
      }
    };
  }, []);

  return (
    <section
      className="relative bg-#121212 p-6 rounded-lg shadow-lg overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <h2 className="text-4xl font-bold text-white mb-4 text-center">
        About my Company
      </h2>
      <p className="text-lg text-gray-300 text-center mb-8">
        NOTARC is dedicated to providing hands-on education and live demonstrations on drone technologies. 
        Our mission is to empower students and enthusiasts to explore the world of drones through interactive and engaging learning experiences.
      </p>

      {/* Adjusted the grid layout to ensure all tiles are visible */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {/* New Tile 1 - Innovative, Tech Solutions */}
        <div className="bg-grey-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:bg-black hover:text-gray-400">
          <div className="text-5xl mb-4 text-blue-500 transition-all duration-300 hover:text-gray-300">💡</div>
          <h3 className="text-xl font-bold mb-2">Innovative, Tech Solutions</h3>
          <p className="text-gray-600 hover:text-gray-400">
            Cutting-edge technology integration for unique challenges.
          </p>
        </div>

        {/* New Tile 2 - Aerial, Surveying */}
        <div className="bg-grey-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:bg-black hover:text-gray-400">
          <div className="text-5xl mb-4 text-blue-500 transition-all duration-300 hover:text-gray-300">📍</div>
          <h3 className="text-xl font-bold mb-2">Aerial, Surveying</h3>
          <p className="text-gray-600 hover:text-gray-400">
            Precision aerial surveying for mapping, inspections, and more.
          </p>
        </div>

        {/* New Tile 3 - Tech Workshops and Training */}
        <div className="bg-grey-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:bg-black hover:text-gray-400">
          <div className="text-5xl mb-4 text-blue-500 transition-all duration-300 hover:text-gray-300">🔧</div>
          <h3 className="text-xl font-bold mb-2">Tech Workshops and Training</h3>
          <p className="text-gray-600 hover:text-gray-400">
            Comprehensive workshops and training in the latest tech and tools.
          </p>
        </div>

        {/* New Tile 4 - Custom Robotics Design */}
        <div className="bg-grey-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:bg-black hover:text-gray-400">
          <div className="text-5xl mb-4 text-blue-500 transition-all duration-300 hover:text-gray-300">⚙️</div>
          <h3 className="text-xl font-bold mb-2">Custom Robotics Design</h3>
          <p className="text-gray-600 hover:text-gray-400">
            Tailored robotics solutions for automation and complex tasks.
          </p>
        </div>

        {/* Original Tile 1 - Drone Solutions */}
        <div className="bg-grey-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:bg-black hover:text-gray-400">
          <div className="text-5xl mb-4 text-blue-500 transition-all duration-300 hover:text-gray-300">✈️</div>
          <h3 className="text-xl font-bold mb-2">Drone Solutions</h3>
          <p className="text-gray-600 hover:text-gray-400">
            Advanced aerial services for surveying, photography, inspections, and more.
          </p>
        </div>

        {/* Original Tile 2 - Educational Workshops */}
        <div className="bg-grey-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:bg-black hover:text-gray-400">
          <div className="text-5xl mb-4 text-blue-500 transition-all duration-300 hover:text-gray-300">🎓</div>
          <h3 className="text-xl font-bold mb-2">Educational Workshops</h3>
          <p className="text-gray-600 hover:text-gray-400">
            Hands-on training in drones, robotics, and RC cars, tailored to all skill levels.
          </p>
        </div>

        {/* Original Tile 3 - Project Consulting */}
        <div className="bg-grey-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:bg-black hover:text-gray-400">
          <div className="text-5xl mb-4 text-blue-500 transition-all duration-300 hover:text-gray-300">👨‍💼</div>
          <h3 className="text-xl font-bold mb-2">Project Consulting</h3>
          <p className="text-gray-600 hover:text-gray-400">
            Expert guidance from initial concept to successful project completion.
          </p>
        </div>

        {/* Original Tile 4 - RC Car Customization */}
        <div className="bg-grey-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:bg-black hover:text-gray-400">
          <div className="text-5xl mb-4 text-blue-500 transition-all duration-300 hover:text-gray-300">🚗</div>
          <h3 className="text-xl font-bold mb-2">RC Car Customization</h3>
          <p className="text-gray-600 hover:text-gray-400">
            Custom RC car builds designed for both enthusiasts and professionals.
          </p>
        </div>
      </div>

      {/* Drone Image */}
      <div ref={droneRef} className="drone-container mt-8">
        <Image
          src="/images/drone1.avif"  // Use the transparent background image
          alt="Drone Image"
          layout="fill" // Ensures the image fits its container
          objectFit="contain" // Ensures the image maintains its aspect ratio
          className="drone-image"
        />
      </div>
    </section>
  );
};

export default NotarcSection;
