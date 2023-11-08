import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
    children: ReactNode
    bgColor?: string | undefined
    link: string;
}

const SocialButton: React.FC<Props> = ({children, bgColor = "black", link}) => {

    let bgHoverColorclass;

    switch (bgColor) {
        case "dribble":
            bgHoverColorclass = "hover:bg-dribble";
            break;
        case "instagram":
            bgHoverColorclass = "hover:bg-instagram";
            break;
        case "linkedin":
            bgHoverColorclass = "hover:bg-linkedin";
            break;
        case "resume":
            bgHoverColorclass = "hover:bg-dribble";
        default:
            bgHoverColorclass = "hover:bg-black";
            break;
        }

        const handleClick = () => {
            window.open(link, "_blank");
        }

        return (
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                className={`group h-12 w-12 bg-white ${bgHoverColorclass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}
            >
                <div className='fill-black group-hover:fill-white transition-colors duration-200 ease-in-out'>
                    {children}
                </div>
            </motion.button>
        );
    }
    
    export default SocialButton;
    