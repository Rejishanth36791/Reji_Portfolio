import React from 'react';
import type { Project } from '../types';
import { GlassCard } from './GlassCard';
import { SkillChip } from './SkillChip';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <GlassCard className="project-card">
      <div className="project-banner">
        <span className="project-tag-float">{project.bannerTag}</span>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-feats">
          {project.features.map((feat, i) => (
            <React.Fragment key={i}>
              <span>✓ {feat}</span>
              {i < project.features.length - 1 ? ' · ' : ''}
            </React.Fragment>
          ))}
        </div>
        <div className="tag-wrap" style={{ marginTop: '8px' }}>
          {project.technologies.map((tech, tIdx) => (
            <SkillChip key={tIdx} name={tech} />
          ))}
        </div>
        <div className="project-actions">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <i className="fa-brands fa-github"></i> Source Code
          </a>
        </div>
      </div>
    </GlassCard>
  );
};
