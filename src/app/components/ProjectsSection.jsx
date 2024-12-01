"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Task Management System",
    description: "The Task Management System (SSTWM) built with React and SQL helps users manage tasks efficiently by allowing creation, updating, and tracking of tasks. The frontend provides a dynamic user interface, while SQL ensures secure data storage. Features include task categorization, priority setting, and progress tracking for improved productivity.",
    image: "/images/projects/p1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "ERP for small scale industries",
    description: "The ERP model for a small-scale industry, built using React, streamlines core business processes such as inventory management, order processing, and resource allocation. It enhances operational efficiency by providing a user-friendly interface for real-time data access. This scalable solution improves overall productivity for growing businesses.",
    image: "/images/projects/p2.webp",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Lane-Detection Bot",
    description: "The lane detection bot, powered by a Raspberry Pi and OpenCV, processes real-time video to identify and follow lane markings on a surface. It uses computer vision algorithms to detect lanes and adjust its trajectory accordingly, making it suitable for autonomous driving and robotics projects.",
    image: "/images/projects/p5.webp",
    tag: ["All", "IOT"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Object Avoidance Bot",
    description: "The object avoidance bot, built using Arduino, uses ultrasonic sensors to detect obstacles and autonomously navigate around them. It adjusts its movement in real-time to avoid collisions, ensuring efficient pathfinding. The bot is ideal for applications in robotics, automation, and autonomous vehicle development.",
    image: "/images/projects/p4.jpg",
    tag: ["All", "IOT"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "E-Commerce Web-Application",
    description: "The e-commerce web app, developed using React, facilitates seamless online shopping by offering features like product browsing, cart management, and secure checkout. It provides a responsive, user-friendly interface that ensures smooth navigation across devices. The app is scalable, supporting growing inventory and user base needs.",
    image: "/images/projects/p3.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "AI-Powered Medical ChatBot",
    description: "The Medibot is a cutting-edge healthcare assistant with a sleek, humanoid design. It features a glowing chest interface displaying health metrics, precision diagnostic tools, and a screen for patient interaction. Designed for functionality and approachability, it operates in modern medical environments, combining AI and advanced technology to provide efficient and accessible healthcare support.",
    image: "/images/projects/p6.WEBP",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="IOT"
          isSelected={tag === "IOT"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
