import React from 'react'
import Arrow from '../public/arrow.svg'
import { motion } from 'framer-motion';

interface Props {
    name?: string;
    description?: string;
    imageUrl?: string;
    bgColor?: string;
    dark?: boolean;
    link?: string; 
}

const ProjectPreview: React.FC<Props> = ({
    name = "Block name",
    description = "This is a project",
    imageUrl = "/project-1.png",
    bgColor = "#e4e4e7",
    dark = false,
    link = "https://rayaankhan.ca"
}) => {
  return ( 
  <motion.div
    className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
    style={{ background: bgColor }}
    initial="initial"
    whileInView="animate"
    variants={PreviewAnimation}
    whileHover={{ scale: 1.02 }}
    transition={{ 
        duration: 0.3, 
        ease: "easeOut",
        // Define a separate transition for hover-out if needed
        // This will ensure the hover out is also smooth
        // Uncomment the following line if necessary
        exit: { scale: 1.0, transition: { duration: 0.3, ease: "easeIn" } }
    }}
  >
        
        <div 
            className='h-full w-full px-10 py-6 bg-cover bg-no-repeat bg-center'
            style={{ backgroundImage: `url('${imageUrl}')` }}
        >   
        
            <div className='flex justify-between items-start h-full'>
            <div>
                <h2 className='font-medium text-lg dark:text-white'>{name}</h2>
                <p className='text-sm text-zinc-500 dark:text-zinc-300'>{description}</p>
            </div>
            <motion.div 
                className='h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer'
                whileTap={{ scale: 0.8, transition: { duration: 0.2 } }}
                onClick={() => link && window.open(link, "_blank")}
            >
                <Arrow className="w-6 h-6"/>
            </motion.div>

            </div>
        </div>
    </motion.div>
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

export default ProjectPreview;
