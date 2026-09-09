import React from 'react';
import { GlassCard } from './GlassCard';
import { SkillChip } from './SkillChip';
import { skillsData } from '../data/skills';

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      style={{ background: 'var(--bg-stat)', borderTop: '1px solid var(--border-line)' }}
    >
      <div className="container">
        <div className="section-eyebrow">TECHNICAL CAPABILITIES</div>
        <h2 className="section-title">Tools of the trade.</h2>
        <p className="section-desc">
          Languages, frameworks, and technologies I use to build scalable web applications.
        </p>

        <div className="skills-grid">
          {skillsData.map((category, idx) => (
            <GlassCard key={idx} className="skill-card">
              <h4>
                <i className={category.iconClass}></i> {category.title}
              </h4>
              <div className="tag-wrap">
                {category.skills.map((skill, sIdx) => (
                  <SkillChip key={sIdx} name={skill} />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
