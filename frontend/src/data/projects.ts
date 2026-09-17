import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'travel-to-heaven',
    title: 'Travel to Heaven',
    bannerTag: 'FULL-STACK · TRAVEL PLATFORM',
    category: 'code',
    role: 'Full-Stack Developer (React + Spring Boot)',
    description:
      'A modern travel discovery and trip-planning platform enabling users to explore breathtaking destinations, plan day-by-day itineraries, track budgets, and share travel stories.',
    features: [
      'Destination Discovery & Interactive Map',
      'Trip Creation & Itinerary Planning',
      'Budget & Multi-Currency Tracking',
      'JWT Auth & Admin Moderation',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Spring Boot',
      'PostgreSQL',
      'Spring Security',
      'Tailwind CSS',
      'JPA / Hibernate',
    ],
    githubUrl: 'https://github.com/rejishanth',
    image: '/assets/travel-to-heaven.png',
  },
  {
    id: 'goodreads-redesign',
    title: 'Goodreads Mobile App Redesign',
    bannerTag: 'UI/UX DESIGN · HCI · FIGMA',
    category: 'design',
    role: 'UX/UI Designer — Personalisation & Discovery',
    description:
      'A team-based HCI project focused on redesigning key areas of the Goodreads mobile experience to improve usability, discoverability, and personalisation. My contribution focused on personalised discovery, explore and search, book discovery cards, and voice search.',
    features: [
      'Personalised Discovery',
      'Explore & Search',
      'Book Discovery Cards',
      'Voice Search',
    ],
    technologies: [
      'Figma',
      'UX Research',
      'User-Centred Design',
      'Information Architecture',
      'Interaction Design',
      'Prototyping',
    ],
    caseStudyUrl: 'https://lnkd.in/p/gHGSuqmd?utm_source=chatgpt.com',
    buttonText: 'View Case Study',
    image: '/assets/goodreads-mockup.png',
  },
  {
    id: 'recruitsphere-ai',
    title: 'RecruitSphere AI',
    bannerTag: 'AI · RECRUITMENT',
    category: 'code',
    description:
      'AI-driven recruitment platform connecting recruiters with top candidates through intelligent resume parsing and role matching.',
    features: ['AI Resume Analysis', 'Candidate Matching', 'Interview Scheduling'],
    technologies: ['React', 'TypeScript', 'ASP.NET Core 8'],
    githubUrl: 'https://github.com/rejishanth',
  },
  {
    id: 'findmymeds',
    title: 'FindMyMeds',
    bannerTag: 'HEALTHCARE',
    category: 'code',
    description:
      'Pharmacy inventory tracking and medicine search platform enabling users to locate and reserve essential prescriptions quickly.',
    features: ['Inventory Reservation', 'Medicine Search'],
    technologies: ['React', 'Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/rejishanth',
  },
  {
    id: 'student-management',
    title: 'Student Management System',
    bannerTag: 'EDUCATION',
    category: 'code',
    description:
      'Backend system for academic records management, offering RESTful endpoints and secure data processing.',
    features: ['REST APIs', 'Student Records'],
    technologies: ['Spring Boot', 'MySQL'],
    githubUrl: 'https://github.com/rejishanth',
  },
];
