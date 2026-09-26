import React, { useState, useEffect, useRef } from 'react';

interface Scene {
  id: number;
  timeStart: number;
  timeEnd: number;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  caption: string;
}

const scenes: Scene[] = [
  {
    id: 1,
    timeStart: 0,
    timeEnd: 6,
    title: 'P. REJISHANTH',
    subtitle: 'Full-Stack Software Engineer & QA Undergraduate',
    badge: 'SCENE 1/5 · INTRODUCTION',
    image: '/assets/demo/scene1.jpg',
    caption: 'Welcome to the 30-second portfolio demo showcase of Rejishanth.',
  },
  {
    id: 2,
    timeStart: 6,
    timeEnd: 12,
    title: 'OUR SERVICES',
    subtitle: 'Full-Stack Web Development · REST API Architecture · Software QA',
    badge: 'SCENE 2/5 · SERVICES SHOWCASE',
    image: '/assets/demo/scene2.jpg',
    caption: 'Providing end-to-end web engineering, REST API development, and software testing QA.',
  },
  {
    id: 3,
    timeStart: 12,
    timeEnd: 18,
    title: 'TRAVEL TO HEAVEN',
    subtitle: 'Full-Stack Travel Platform (React, Spring Boot, PostgreSQL)',
    badge: 'SCENE 3/5 · FEATURED PROJECT',
    image: '/assets/travel-to-heaven.png',
    caption: 'Featured Project: Travel to Heaven — interactive itinerary planner and budget tracker.',
  },
  {
    id: 4,
    timeStart: 18,
    timeEnd: 24,
    title: 'RECRUITSPHERE AI & FINDMYMEDS',
    subtitle: 'AI Candidate Matcher & Pharmacy Inventory System',
    badge: 'SCENE 4/5 · AI & HEALTHCARE',
    image: '/assets/recruitsphere-ai.jpg',
    caption: 'Building intelligent AI recruitment matching and pharmacy inventory management software.',
  },
  {
    id: 5,
    timeStart: 24,
    timeEnd: 30,
    title: "LET'S BUILD TOGETHER",
    subtitle: 'Available for Full-Stack & Web Engineering Opportunities',
    badge: 'SCENE 5/5 · CALL TO ACTION',
    image: '/assets/demo/scene5.jpg',
    caption: 'Ready to collaborate on high-performance web applications. Get in touch today!',
  },
];

export const DemoVideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  // Playback timer loop (0s to 30s)
  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= 30) {
            setIsPlaying(false);
            return 30;
          }
          return Math.min(30, +(prev + 0.1).toFixed(1));
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentScene =
    scenes.find((s) => currentTime >= s.timeStart && currentTime < s.timeEnd) || scenes[scenes.length - 1];

  const handleTogglePlay = () => {
    if (currentTime >= 30) {
      setCurrentTime(0);
    }
    setIsPlaying((prev) => !prev);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
  };

  const toggleFullscreen = () => {
    if (!playerRef.current) return;
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTime = (sec: number) => {
    const s = Math.floor(sec);
    return `00:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className={`video-player-container ${isFullscreen ? 'fullscreen' : ''}`} ref={playerRef}>
      {/* Video Viewport */}
      <div className="video-viewport">
        {/* Animated Scene Background */}
        <div
          className="video-scene-bg"
          style={{ backgroundImage: `url(${currentScene.image})` }}
        />

        <div className="video-viewport-overlay" />

        {/* Scene Text & Title Animation */}
        <div className="video-scene-content">
          <div className="video-title-box" key={currentScene.id}>
            <h2>{currentScene.title}</h2>
            <p>{currentScene.subtitle}</p>
          </div>
        </div>

        {/* Play Button Overlay (when paused) */}
        {!isPlaying && (
          <button className="video-play-center" onClick={handleTogglePlay} aria-label="Play Demo Reel">
            <i className="fa-solid fa-play"></i>
          </button>
        )}
      </div>

      {/* Video Player Controls Bar */}
      <div className="video-controls-bar">
        {/* Timeline Scrubber */}
        <div className="video-timeline">
          <input
            type="range"
            min="0"
            max="30"
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            className="timeline-slider"
            style={{
              background: `linear-gradient(to right, var(--accent-cyan) ${(currentTime / 30) * 100}%, rgba(255, 255, 255, 0.15) ${(currentTime / 30) * 100}%)`,
            }}
          />
        </div>

        {/* Control Buttons Group */}
        <div className="video-controls-group">
          <div className="video-controls-left">
            <button
              type="button"
              className="ctrl-btn play-btn"
              onClick={handleTogglePlay}
              aria-label={isPlaying ? 'Pause Demo' : 'Play Demo'}
            >
              <i className={`fa-solid ${isPlaying ? 'fa-pause' : currentTime >= 30 ? 'fa-rotate-right' : 'fa-play'}`}></i>
            </button>

            <span className="video-timer">
              {formatTime(currentTime)} / 00:30
            </span>
          </div>

          <div className="video-controls-right">
            <button
              type="button"
              className="ctrl-btn"
              onClick={() => setIsMuted(!isMuted)}
              aria-label="Toggle Mute"
            >
              <i className={`fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`}></i>
            </button>

            <button
              type="button"
              className="ctrl-btn"
              onClick={toggleFullscreen}
              aria-label="Toggle Fullscreen"
            >
              <i className={`fa-solid ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
