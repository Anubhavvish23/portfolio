"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Power Bi</li>
        <li>Python</li>
        <li>Machine Learning</li>
        <li>Iot</li>
        <li>Figma</li>
        <li>React</li>
        <li>Full Stack</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Vidya Soudha PU College</li>
        <li>Sri Krishna Institute Of Technology, Karnataka India</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Power Bi Certification</li>
        <li>Machine Learning</li>
        <li>Full Stack in Django</li>
      </ul>
    ),
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  
  // Reference for the section and tracking its in-view state
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // `once: true` ensures animation triggers only once

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about" ref={ref}>
      <motion.div
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Image */}
        <motion.div variants={itemVariants}>
          <Image src="/images/me.jpg" width={500} height={500} alt="Me" />
        </motion.div>

        {/* Text Content */}
        <motion.div variants={itemVariants} className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As an intermediate-level professional, I possess a diverse skill set
            in machine learning, Power BI, React.js, and full stack development.
            My expertise includes developing ML models, crafting interactive
            dashboards in Power BI, and building responsive web applications
            with React.js. I also have a solid foundation in ERP development and
            configuration, Python for data analysis and automation, and SQL for
            complex data manipulation. My adaptability enables me to swiftly
            master new technologies and thrive in dynamic environments.
            Additionally, I am the <b>founder of NOTARC</b>, a company dedicated
            to teaching students about drones.
          </p>

          {/* Tab Buttons */}
          <motion.div
            className="flex flex-row justify-start mt-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
            </motion.div>
            <motion.div variants={itemVariants}>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
            </motion.div>
            <motion.div variants={itemVariants}>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certifications
              </TabButton>
            </motion.div>
          </motion.div>

          {/* Tab Content */}
          <motion.div variants={itemVariants} className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
