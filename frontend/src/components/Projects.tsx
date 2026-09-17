import React from 'react';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projects';

export const Projects: React.FC = () => {
  const [filter, setFilter] = React.useState<'all' | 'code' | 'design'>('all');

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <section id="projects" style={{ borderTop: '1px solid var(--border-line)' }}>
      <div className="container">
        <div className="section-eyebrow">FEATURED WORK</div>
        <h2 className="section-title">Selected projects.</h2>
        <p className="section-desc">
          Real-world applications spanning software engineering platforms, healthcare search systems, and UI/UX HCI design case studies.
        </p>

        <div className="project-filter-tabs">
          <button
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            className={`filter-tab ${filter === 'code' ? 'active' : ''}`}
            onClick={() => setFilter('code')}
          >
            <i className="fa-solid fa-code"></i> Software Engineering (
            {projectsData.filter((p) => p.category === 'code').length})
          </button>
          <button
            className={`filter-tab ${filter === 'design' ? 'active' : ''}`}
            onClick={() => setFilter('design')}
          >
            <i className="fa-brands fa-figma"></i> UI/UX & HCI Design (
            {projectsData.filter((p) => p.category === 'design').length})
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
