import React from 'react';

// Define TypeScript interface for SkillCard props
interface SkillCardProps {
  title: string;
  items: string[];
}

// SkillCard functional component
const SkillCard: React.FC<SkillCardProps> = ({ title, items }) => {
  return (
    // Card container
    <div className="bg-[#1E1E1E] rounded-3xl shadow-xl overflow-hidden">
      {/* Card header with gradient background */}
      <div className="bg-gradient-to-r from-[#434343] to-[#232526] p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      {/* Container for skill items */}
      <div className="p-6 flex flex-wrap gap-2">
        {items.map((item, index) => (
          // Skill item
          <span 
            key={index} 
            className="px-3 py-1 rounded-md border border-solid border-[#f82424] text-white 
                       hover:bg-[#f82424] hover:text-black transition-colors duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
