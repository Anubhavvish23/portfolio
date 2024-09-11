import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="relative group overflow-hidden">
      <div
        className="h-52 md:h-72 rounded-t-xl bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 transition-transform duration-500 group-hover:scale-105">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
