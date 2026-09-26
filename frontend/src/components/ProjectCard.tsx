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
  const [showWipToast, setShowWipToast] = React.useState(false);

  const currentImage = imageList[activeImgIdx] || project.image;

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev === 0 ? imageList.length - 1 : prev - 1));
  };

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIdx((prev) => (prev === imageList.length - 1 ? 0 : prev + 1));
  };

  const handleSourceCodeClick = (e: React.MouseEvent) => {
    if (project.isWorkInProgress) {
      e.preventDefault();
      setShowWipToast(true);
      setTimeout(() => {
        setShowWipToast(false);
      }, 5000);
    }
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
                target={project.isWorkInProgress ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`project-btn secondary-link ${project.isWorkInProgress ? 'wip-link' : ''}`}
                onClick={handleSourceCodeClick}
              >
                <i className={`fa-solid ${project.isWorkInProgress ? 'fa-clock-rotate-left' : 'fa-code-branch'}`}></i>{' '}
                {project.isWorkInProgress ? 'Source Code (Updating Soon)' : 'Source Code'}
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

      {/* Work In Progress Toast Alert */}
      {showWipToast && (
        <div className="wip-toast">
          <div className="wip-toast-icon">
            <i className="fa-solid fa-code-commit"></i>
          </div>
          <div className="wip-toast-content">
            <strong>Work In Progress</strong>
            <p>{project.inProgressMessage || 'Currently working project — Repository will be updated soon!'}</p>
          </div>
          <button
            type="button"
            className="wip-toast-close"
            onClick={() => setShowWipToast(false)}
            aria-label="Close notification"
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
};
