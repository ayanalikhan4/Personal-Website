import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    companyName?: string;
    role?: string;
    experiencePoints?: string[];
    bgColor?: string;
    dark?: boolean;
    link?: string; // This prop will be used for the clickable link
}

const ExperiencePreview: React.FC<Props> = ({
    companyName = "Company Name",
    role = "Your Role",
    experiencePoints = ["Experience point 1", "Experience point 2"],
    bgColor = "#ffffff",
    dark = false,
    link = "#" // Default link to a placeholder
}) => {
  return ( 
    <motion.a // Changed to 'a' tag to make it clickable
      href={link} // Link to the provided URL
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Security measure for opening new tabs
      className={`rounded-xl overflow-hidden shadow-lg ${dark ? "dark" : ""}`}
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
        <div className='h-full w-full p-6'>
            <h2 className='font-bold text-xl dark:text-white'>{companyName}</h2>
            <h3 className='font-medium text-lg dark:text-white'>{role}</h3>
            <ul className='list-disc list-inside space-y-2 text-sm text-zinc-500 dark:text-zinc-300 mt-4'>
                {experiencePoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
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
