// components/SkillCard.tsx

import React from 'react';

interface SkillCardProps {
  title: string;
  items: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, items }) => {
  return (
    <div className="bg-[#1E1E1E] rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-[#434343] to-[#232526] p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="p-6 flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span key={index} className="px-3 py-1 rounded-md border border-solid border-[#F8D926] text-white">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
