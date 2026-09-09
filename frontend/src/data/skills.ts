import type { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconClass: 'fa-solid fa-code',
    skills: ['Java', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Frontend',
    iconClass: 'fa-solid fa-desktop',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    iconClass: 'fa-solid fa-server',
    skills: ['Spring Boot', 'ASP.NET Core 8', 'REST APIs'],
  },
  {
    title: 'Databases & Tools',
    iconClass: 'fa-solid fa-database',
    skills: ['MySQL', 'SQL Server', 'Git/GitHub', 'Postman'],
  },
];
