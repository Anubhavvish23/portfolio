'use client';  // Mark this file as a Client Component

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const PhotoGallery = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Animation runs only once
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  const photos = [
    {
      imgUrl: '/images/photo1.jpg',
      title: 'Hands-on Drone Workshop',
      description: 'Students are watching closely as an instructor demonstrates how to control a drone. The scene is dynamic, capturing the curiosity and excitement of the attendees.',
    },
    {
      imgUrl: '/images/photo2.jpg',
      title: 'Drone Demonstration',
      description: 'This image shows a group of enthusiastic learners, gathered around a table, attentively following instructions on drone operation. The participants appear highly engaged in the hands-on experience.',
    },
    {
      imgUrl: '/images/photo3.jpg',
      title: 'Drone Assembly and Flying',
      description: 'This image captures students in action, working on assembling drones while others test their flying skills. The setting conveys collaboration and practical learning.',
    },
    {
      imgUrl: '/images/photo4.png',
      title: 'Drone Mechanism Close-up',
      description: 'A close-up view of the inner workings of a drone, showcasing its propellers, sensors, and circuit boards. The detailed shot highlights the complexity and precision of the technology.',
    },
  ];

  return (
    <section className="photo-gallery">
      <h1 className="gallery-title">Our Work in Action</h1>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div className="relative group overflow-hidden" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div
              className="h-52 md:h-72 rounded-t-xl bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url(${photo.imgUrl})` }}
            ></div>
            <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 transition-transform duration-500 group-hover:scale-105">
              <div className="bg-[#282828] py-2 px-3 mb-3 rounded-lg transition-colors duration-300 group-hover:bg-[#333333]">
                <h5 className="text-xl font-semibold mb-0 text-center">{photo.title}</h5>
              </div>
              <p className="text-[#ADB7BE]">{photo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
