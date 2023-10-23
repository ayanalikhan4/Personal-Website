import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
    bgColor?: string | undefined
}


const SocialButton: React.FC<Props> = ({children, bgColor = "black"}) => {

    let bgHoverColorclass;

    switch (bgColor) {
        case "dribble":
            bgHoverColorclass = "hover:bg-dribble";
            break;
        case "instagram":
            bgHoverColorclass = "hover:bg-instagram";
            break;
        case "twitter":
            bgHoverColorclass = "hover:bg-twitter";
            break;
        case "linkedin":
            bgHoverColorclass = "hover:bg-linkedin";
            break;
        default:
            bgHoverColorclass = "hover:bg-black";
            break;
        }

  return <button className={`group h-12 w-12 bg-white ${bgHoverColorclass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}>
    <div className='fill-black group-hover:fill-white transition-colors duration-200 ease-in-out'>
        {children}
    </div>
  </button>
}

export default SocialButton