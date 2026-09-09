import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { FixedHomeBtn } from './components/FixedHomeBtn';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const scrollPos = window.scrollY + 180;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id') || '';

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="cinematic-frame container">
      <div className="spotlight-left"></div>
      <div className="spotlight-right"></div>

      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main>
        <Hero
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
          activeSection={activeSection}
        />

        <About />

        <Skills />

        <Projects />

        {/* Education & Experience Grid Section */}
        <section
          id="experience"
          style={{
            background: 'var(--bg-stat)',
            borderTop: '1px solid var(--border-line)',
          }}
        >
          <div className="container">
            <div className="about-grid">
              <Education />
              <Experience />
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <FixedHomeBtn />
    </div>
  );
}

export default App;