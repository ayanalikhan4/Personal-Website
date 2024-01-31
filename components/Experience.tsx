import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    companyName?: string;
    role?: string;
    experiencePoints?: string[];
    bgColor?: string;
    dark?: boolean;
    link?: string;
    logoSrc?: string; // New prop for the company logo
}

const ExperiencePreview: React.FC<Props> = ({
    companyName = "Company Name",
    role = "Your Role",
    experiencePoints = ["Experience point 1", "Experience point 2"],
    bgColor = "#E1E2E2",
    dark = false,
    link = "#",
    logoSrc = "https://1000logos.net/wp-content/uploads/2020/08/Logo-Thales.jpg", // Default to no image
}) => {
  return ( 
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between rounded-xl overflow-hidden shadow-lg ${dark ? "dark" : ""}`}
      style={{ background: bgColor }}
      initial="initial"
      whileInView="animate"
      variants={PreviewAnimation}
      whileHover={{ scale: 1.02 }}
      transition={{ 
          duration: 0.3, 
          ease: "easeOut",
      }}
    >
        <div className='h-full w-4/5 p-6'>
            <h2 className='font-bold text-xl dark:text-white'>{companyName}</h2>
            <h3 className='font-medium text-lg dark:text-white'>{role}</h3>
            <ul className='custom-list space-y-2 text-sm text-zinc-500 dark:text-zinc-300 mt-4'>
                {experiencePoints.map((point, index) => (
                    <li key={index} className={`border-b ${index !== experiencePoints.length - 1 ? 'border-gray-300' : 'border-transparent'} pb-2`}>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
        {logoSrc && (
            <div className='w-1/5 h-full flex items-center justify-center p-4'>
                <img src={logoSrc} alt={`${companyName} logo`} className='max-h-full max-w-full' />
            </div>
        )}
    </motion.a>
  )
}

const PreviewAnimation = {
    initial: {
      y: 30,
      opacity: 0,
      scale: 0.98,
    },
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

export default ExperiencePreview;
