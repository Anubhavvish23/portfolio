"use client";
import React, { useState, useRef } from "react";
import SkillCard from "./SkillCard";
import { motion, useInView, useAnimation } from "framer-motion";

// Example skills data (make sure you include your actual data)
const skillsData = [
  {
    id: 1,
    title: "Winner in Line Following Bot",
    description:
      "The line-following bot competition involved using a Raspberry Pi to build a bot capable of accurately detecting and following lanes. Leveraging real-time video processing and computer vision algorithms, the bot demonstrated precise navigation along the track. This achievement showcased the integration of hardware and software for robotics control.",
    image: "/images/line.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Participated in Biggest event of india",
    description:
      "At the Delhi Startup Mahakumbh, one of India's largest startup events, I was one of the few students selected to represent my university. This prestigious platform provided an invaluable opportunity to network with numerous entrepreneurs and gain deep insights into the startup ecosystem. The experience was both enriching and inspiring, offering a rare chance to connect with industry leaders.",
    image: "/images/delhi.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: " Got Addressed by PM and Delegates",
    description:
      "At the Delhi Startup Mahakumbh, I had the honor of being addressed by notable figures, including the Prime Minister of India, the MPDI (Ministry of Micro, Small & Medium Enterprises), and the founder of BoAt. This remarkable experience provided valuable insights and recognition, underscoring the event's significance and my involvement in it.",
    image: "/images/start.webp",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Started my own Company",
    description:
      "My friend and I founded NOTARC, a company dedicated to teaching students about drones, complete with all necessary government-registered documents. We provide comprehensive education and practical training for aspiring drone enthusiasts, ensuring a solid foundation in drone technology and operations.",
    image: "/images/notarc.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Won in a national level Competition",
    description:
      "I secured first place in a national-level competition held at RajaRajeswari Engineering College, showcasing innovative drone applications. The event highlighted the use of drones in solving real-world problems, and my project stood out for its creativity, technical execution, and practical impact. This achievement reflects my expertise in robotics, drone technology, and application-driven solutions.",
    image: "/images/me1.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Won 12 months incubation  with upto 3 lakhs funding support",
    description:
      "I was awarded a 12-month incubation opportunity at Acharya, along with funding support of up to ₹3 lakhs. This program is designed to nurture innovative ideas and provide mentorship, resources, and financial backing to transform them into successful ventures. This achievement highlights my entrepreneurial potential and commitment to creating impactful, technology-driven solutions.",
    image: "/images/me2.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 7,
    title: "Conducted Workshops at internatioal schools and innovation Hubs",
    description:
      "I have successfully conducted workshops at prestigious international schools and innovation hubs, focusing on cutting-edge technologies like drones, robotics, and IoT. These sessions provided hands-on learning experiences, inspiring young minds to explore and innovate in the fields of science and technology. This initiative demonstrates my dedication to fostering a culture of innovation and education on a global scale..",
    image: "/images/me3.jpg",
    tag: ["All", "Web"],
  },
  // Add more projects here
];

const Skills = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Initialize Framer Motion controls
  const controls = useAnimation();

  // Start the animation by default
  React.useEffect(() => {
    controls.start("animate");
  }, [controls]);

  // Infinite scroll animation
  const scrollVariants = {
    animate: {
      x: [0, -2000], // Adjust based on the total width of the content
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Duration for a smoother, slower scroll
          ease: "linear",
        },
      },
    },
  };

  // Duplicate the data to make the infinite loop seamless
  const duplicatedSkillsData = [...skillsData, ...skillsData];

  // Handle the card click to stop the animation
  const handleCardClick = () => {
    controls.stop(); // Stop the scroll animation when a card is clicked
  };

  // Handle outside click to resume the animation
  const handleOutsideClick = (e) => {
    if (!ref.current.contains(e.target)) {
      controls.start("animate"); // Restart the animation when clicked outside
    }
  };

  // Attach event listener to the document to detect outside clicks
  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Achievements
      </h2>
      <div className="overflow-hidden">
        {/* Horizontal scroll container */}
        <motion.ul
          ref={ref}
          className="flex space-x-8 md:space-x-12"
          variants={scrollVariants}
          animate={controls}
        >
          {duplicatedSkillsData.map((project, index) => (
            <motion.li
              key={index} // Use index because of duplicate data
              className="min-w-[300px] md:min-w-[350px]" // Adjust grid size
              onClick={handleCardClick} // Stop animation on card click
            >
              <SkillCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Skills;
