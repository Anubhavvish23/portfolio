"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.5, rotate: 90 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Text Animation */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-800">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <span className="text-blue-500"> {/* Add the blue color class here */}
              <TypeAnimation
                sequence={[
                  "Anubhav",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome to my Profile <br />
            I hope you have a wonderful day!
          </p>
          <div>
            <a
              href="/images/cv.pdf"
              download="Anubhav_CV.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-white to-blue-500 hover:bg-blue-300 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-blue-700 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>

        {/* Image Animation */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          className="col-span-4 place-self-center mt-4 lg:mt-0 flex items-center justify-center"
        >
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative rounded-full overflow-hidden">
            <Image
              src="/images/dp.jpg"
              alt="hero image"
              className="object-cover w-full h-full"
              layout="fill"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
