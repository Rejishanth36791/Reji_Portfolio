import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border-line)' }}>
      <div className="container">
        <div className="section-eyebrow">FEATURED WORK</div>
        <h2 className="section-title">Selected projects.</h2>
        <p className="section-desc">
          Real-world applications spanning AI platforms, healthcare search systems, and e-commerce.
        </p>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
