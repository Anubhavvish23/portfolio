"use client";
import React, { useState } from "react";

const SkillCard = ({ imgUrl, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image section with hover scale effect */}
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="h-52 md:h-72 rounded-t-xl bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
      ></div>

      {/* Text content section with hover scale effect */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 transition-transform duration-500 group-hover:scale-105">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
