import React from 'react';
import type { Project } from '../types';
import { GlassCard } from './GlassCard';
import { SkillChip } from './SkillChip';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const imageList = project.images || (project.image ? [project.image] : []);
  const [activeImgIdx, setActiveImgIdx] = React.useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  const currentImage = imageList[activeImgIdx] || project.image;

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <GlassCard className="project-card">
        <div
          className={`project-banner ${currentImage ? 'has-image' : ''}`}
          onClick={() => currentImage && setIsLightboxOpen(true)}
          style={{ cursor: currentImage ? 'pointer' : 'default' }}
        >
          {currentImage && (
            <img
              src={currentImage}
              alt={`${project.title} Screenshot ${activeImgIdx + 1}`}
              className="project-banner-img"
            />
          )}
          <div className="project-banner-overlay" />
          <span className="project-tag-float">{project.bannerTag}</span>

          {imageList.length > 1 && (
            <>
              <button
                className="gallery-nav-btn prev"
                onClick={handlePrevImg}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="gallery-nav-btn next"
                onClick={handleNextImg}
                aria-label="Next image"
              >
                ›
              </button>
              <div className="gallery-dots">
                {imageList.map((_, idx) => (
                  <span
                    key={idx}
                    className={`gallery-dot ${idx === activeImgIdx ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImgIdx(idx);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="project-content">
          <h3>{project.title}</h3>

          {project.role && (
            <div className="project-role-badge">
              <i className="fa-solid fa-user-nib"></i> {project.role}
            </div>
          )}

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
            {project.caseStudyUrl && (
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn primary-btn"
              >
                <i className="fa-brands fa-figma"></i> {project.buttonText || 'View Case Study'}
              </a>
            )}

            {imageList.length > 1 && (
              <button
                type="button"
                className="project-btn gallery-trigger-btn"
                onClick={() => setIsLightboxOpen(true)}
              >
                <i className="fa-solid fa-images"></i> View Boards ({imageList.length})
              </button>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn secondary-link"
              >
                <i className="fa-brands fa-github"></i> Source Code
              </a>
            )}
          </div>
        </div>
      </GlassCard>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="lightbox-backdrop"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
            >
              &times;
            </button>
            <div className="lightbox-header">
              <h4>{project.title}</h4>
              <span>
                Board {activeImgIdx + 1} of {imageList.length}
              </span>
            </div>
            <div className="lightbox-img-wrapper">
              <img
                src={currentImage}
                alt={`${project.title} full view`}
                className="lightbox-img"
              />
              {imageList.length > 1 && (
                <>
                  <button
                    className="lightbox-arrow prev"
                    onClick={handlePrevImg}
                  >
                    ‹
                  </button>
                  <button
                    className="lightbox-arrow next"
                    onClick={handleNextImg}
                  >
                    ›
                  </button>
                </>
              )}
            </div>
            {imageList.length > 1 && (
              <div className="lightbox-thumbnails">
                {imageList.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`lightbox-thumb ${idx === activeImgIdx ? 'active' : ''}`}
                    onClick={() => setActiveImgIdx(idx)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
