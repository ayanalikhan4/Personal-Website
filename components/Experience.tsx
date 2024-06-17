import React from "react";
import { motion } from "framer-motion";

interface Props {
  companyName?: string;
  role?: string;
  experiencePoints?: string[];
  dark?: boolean;
  link?: string;
  logoSrc?: string;
}

const previewAnimation = {
  initial: { y: 30, opacity: 0, scale: 0.98 },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 10,
      stiffness: 100,
      when: "beforeChildren",
    },
  },
};

const ExperiencePreview: React.FC<Props> = ({
  companyName = "Company Name",
  role = "Your Role",
  experiencePoints = ["Experience point 1", "Experience point 2"],
  dark = false,
  link = "#",
  logoSrc = "https://1000logos.net/wp-content/uploads/2020/08/Logo-Thales.jpg",
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex flex-col md:flex-row items-center justify-between rounded-3xl overflow-hidden mb-8 shadow-xl ${
      dark ? "dark" : ""
    }`}
    style={{ backgroundColor: "#E1E2E2" }}
    {...previewAnimation}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <div className="w-full md:w-4.8/5 p-8 md:p-6">
      <h2 className="text-black text-3xl font-semibold">{companyName}</h2>
      <h3 className="text-black text-2xl font-semibold mb-4">{role}</h3>
      <ul className=" text-black space-y-4">
        {experiencePoints.map((point, index) => (
          <li
            key={index}
            className={`border-b ${
              index !== experiencePoints.length - 1
                ? "border-gray-300"
                : "border-transparent"
            } pb-2`}
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
    {logoSrc && (
      <div className="flex w-full md:w-1/5 items-center justify-center p-4">
        <img
          src={logoSrc}
          alt={`${companyName} logo`}
          className="max-h-24 md:max-h-full md:max-w-full rounded-3xl"
        />
      </div>
    )}
  </motion.a>
);

export default ExperiencePreview;
