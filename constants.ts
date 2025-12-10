import { Experience, Project, SkillCategory, Affiliation, Education } from './types';
import { Rocket, Satellite, Plane, Telescope, Cpu, Wind, Code, Globe, Music, PenTool } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Shreyas Satish Dhumal",
  tagline: "Aerospace Engineer · UAV & Space Tech Enthusiast",
  summary: "Aerospace engineer with hands-on experience in UAV design, heavy-payload drones, and aerospace prototyping through projects at BDL, VTOL Aviation India, and TiHAN–IIT Hyderabad. Skilled in navigation systems, control projects, and drone development. Certified DGCA drone pilot and active citizen scientist contributing to astronomy and planetary science research.",
  email: "shreyasdhumal504@gmail.com",
  phone: "+91 7798024236",
  location: "Pune, Maharashtra, India",
  linkedin: "https://www.linkedin.com/in/shreyas-dhumal504",
  github: "https://github.com/Shreyasdhumal504"
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "tihan-fellow",
    role: "Research Assistant Fellow",
    company: "TIHAN–IIT Hyderabad",
    period: "Dec 2021 – Oct 2022",
    description: [
      "Developed a 50 kg heavy-payload cargo drone with a carbon-fiber body.",
      "Performed assemblies, flight testing, maintenance, and component optimization.",
      "Worked on GPS-denied navigation and an autonomous e-bike module.",
      "Hands-on experience with hexacopters and quadcopters."
    ]
  },
  {
    id: "tihan-intern",
    role: "Research Intern",
    company: "TIHAN–IIT Hyderabad",
    period: "Sept 2021 – Dec 2021",
    description: [
      "Designed a UAV prototype for a two-seater air taxi.",
      "Created CAD models and balloon diagrams to streamline production.",
      "Performed structural optimization via CFD and performance analysis.",
      "Installed Pixhawk, telemetry, and camera gimbal systems."
    ]
  },
  {
    id: "bdl-intern",
    role: "Project Intern",
    company: "Bharat Dynamics Limited",
    period: "Apr 2021 – Oct 2021",
    description: [
      "Worked on enhancing PID-based gimbal control using ESO.",
      "Improved azimuth and elevation accuracy; contributed to defense systems."
    ]
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: "Advanced Certification in Space Technologies",
    institution: "IISc Bangalore",
    year: "Oct 2024 – Jul 2025"
  },
  {
    degree: "B.Tech in Aerospace Engineering",
    institution: "MIT School of Engineering, MITADT University",
    year: "2017 – 2021"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "heavy-drone",
    title: "Heavy Payload Cargo Drone",
    category: "UAV Development",
    description: "Development of a 50kg payload drone utilizing carbon fiber materials for structural integrity and weight optimization.",
    tools: ["UAV Design", "Flight Testing", "Composites"]
  },
  {
    id: "air-taxi",
    title: "Air Taxi UAV Prototype",
    category: "Design & Simulation",
    description: "Designed a prototype for a two-seater air taxi, including extensive CAD modeling and structural optimization.",
    tools: ["CATIA V5", "CFD", "Prototyping"]
  },
  {
    id: "rlv-control",
    title: "RLV Trajectory Control",
    category: "GNC & Control Systems",
    description: "Developed a control system for Reusable Launch Vehicle (RLV) trajectory simulation using a quadcopter testbed.",
    tools: ["MATLAB", "Simulink", "SolidWorks"]
  },
  {
    id: "pslv-model",
    title: "PSLV-C48 Static Model",
    category: "Aerospace Design",
    description: "Created a 1/20th static scale model of the PSLV-C48 aligned strictly with ISRO specifications.",
    tools: ["CATIA V5", "Fabrication"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "UAV & Aerospace",
    skills: ["UAV Design & Assembly", "Heavy Payload Drones", "Payload Integration", "Avionics Setup", "Pixhawk", "Mission Planner", "QGroundControl", "CFD Basics"]
  },
  {
    title: "Tools & Programming",
    skills: ["CATIA V5", "SolidWorks", "Fusion 360", "MATLAB & Simulink", "Python", "Power BI", "AI Tools for Aerospace"]
  },
  {
    title: "Professional",
    skills: ["Leadership", "Team Collaboration", "Problem-Solving", "Cross-Cultural Communication", "Adaptability"]
  }
];

export const AFFILIATIONS_DATA: Affiliation[] = [
  {
    id: "zooniverse",
    role: "Citizen Scientist",
    organization: "Zooniverse",
    icon: "Telescope"
  },
  {
    id: "sera",
    role: "Member",
    organization: "Space Exploration & Research Agency (SERA)",
    icon: "Rocket"
  },
  {
    id: "sgac",
    role: "Member",
    organization: "Space Generation Advisory Council (SGAC)",
    icon: "Globe"
  }
];

export const INTERESTS = [
  { name: "Astronomy", icon: Telescope },
  { name: "Trekking", icon: Wind },
  { name: "Sketching", icon: PenTool },
  { name: "Bansuri (Flute)", icon: Music },
];