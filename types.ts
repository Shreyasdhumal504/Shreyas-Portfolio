export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Affiliation {
  id: string;
  role: string;
  organization: string;
  icon?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}