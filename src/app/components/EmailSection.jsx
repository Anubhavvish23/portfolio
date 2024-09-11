"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          {/* Email link */}
          <Link href="mailto:anubhavsanjay01@gmail.com">
            <div className="icon-wrapper">
              <Image src="/images/e.png" alt="Email Icon" width={50} height={50} />
            </div>
          </Link>
          {/* LinkedIn link */}
          <Link href="https://www.linkedin.com/in/anubhav-s-14a380229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <div className="icon-wrapper">
              <Image src="/linkedin-icon.svg" alt="LinkedIn Icon" width={50} height={50} />
            </div>
          </Link>
          {/* WhatsApp link */}
          <Link href="https://wa.me/+919880502538"> {/* Replace 'yourphonenumber' with your actual number */}
            <div className="icon-wrapper">
              <Image src="/images/wp.png" alt="WhatsApp Icon" width={40} height={40} />
            </div>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .icon-wrapper {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .icon-wrapper:hover {
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default EmailSection;
