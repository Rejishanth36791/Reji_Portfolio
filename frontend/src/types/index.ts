export interface Project {
  id: string;
  title: string;
  description: string;
  bannerTag: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  category?: 'code' | 'design';
  role?: string;
  image?: string;
  images?: string[];
  caseStudyUrl?: string;
  buttonText?: string;
  isWorkInProgress?: boolean;
  inProgressMessage?: string;
}

export interface SkillCategory {
  title: string;
  iconClass: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
