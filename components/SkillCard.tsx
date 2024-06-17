import React from "react";

// Define TypeScript interface for SkillCard props
interface SkillCardProps {
  title: string;
  items: string[];
}

// SkillCard functional component
const SkillCard: React.FC<SkillCardProps> = ({ title, items }) => {
  return (
    // Card container
    <div className="bg-[#E1E2E2] rounded-3xl shadow-xl overflow-hidden">
      {/* Card header with gradient background */}
      <div className="bg-gradient-to-r from-[#E1E2E2] to-[#E1E2E2] p-6">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
      </div>
      {/* Container for skill items */}
      <div className="p-6 flex flex-wrap gap-2">
        {items.map((item, index) => (
          // Skill item
          <span
            key={index}
            className="px-3 py-1 rounded-md border border-solid border-[#000000] text-black 
                       hover:bg-[#5C5C5C] hover:text-black transition-colors duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
