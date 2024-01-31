import React from 'react';
import { motion } from 'framer-motion';

interface Props {
    companyName?: string;
    role?: string;
    experiencePoints?: string[];
    bgColor?: string; // This prop is no longer needed since the background is hardcoded
    dark?: boolean;
    link?: string;
    logoSrc?: string; // New prop for the company logo
}

const ExperiencePreview: React.FC<Props> = ({
    companyName = "Company Name",
    role = "Your Role",
    experiencePoints = ["Experience point 1", "Experience point 2"],
    dark = false,
    link = "#",
    logoSrc = "https://1000logos.net/wp-content/uploads/2020/08/Logo-Thales.jpg", // Default to no image
}) => {
  return ( 
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-between rounded-3xl overflow-hidden shadow-xl ${dark ? "dark" : ""}`}
      style={{ backgroundColor: '#E1E2E2' }} // Use the same background color as in AboutMe
      initial="initial"
      whileInView="animate"
      variants={PreviewAnimation}
      whileHover={{ scale: 1.02 }}
      transition={{ 
          duration: 0.3, 
          ease: "easeOut",
      }}
    >
        <div className='w-4/5 p-6 md:p-10'> {/* Match the padding from AboutMe */}
            <h2 className='font-semibold text-3xl'>{companyName}</h2> {/* Adjusted font size to match AboutMe */}
            <h3 className='font-semibold text-2xl mb-4'>{role}</h3> {/* Adjusted font size and margin to match AboutMe */}
            <ul className='space-y-4'> {/* Adjusted spacing to match AboutMe */}
                {experiencePoints.map((point, index) => (
                    <li key={index} className={`border-b ${index !== experiencePoints.length - 1 ? 'border-gray-300' : 'border-transparent'} pb-2 text-black`}>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    {logoSrc && (
        <div className='w-1/5 flex items-center justify-center p-4'>
            <img 
                src={logoSrc} 
                alt={`${companyName} logo`} 
                className='max-h-full max-w-full rounded-3xl' // Apply border-radius to all corners of the image
                // Or for top-right and bottom-right corners only:
                // className='max-h-full max-w-full rounded-tr-3xl rounded-br-3xl'
            />
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
