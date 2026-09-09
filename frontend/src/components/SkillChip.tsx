import React from 'react';

interface SkillChipProps {
  name: string;
}

export const SkillChip: React.FC<SkillChipProps> = ({ name }) => {
  return <span className="skill-chip">{name}</span>;
};
