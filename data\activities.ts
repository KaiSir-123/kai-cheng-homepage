export type Activity = {
  year: string;
  title: string;
  role: string;
  description: string;
  location: string;
  type: string;
};

export type ProfessionalDevelopmentItem = {
  title: string;
  description: string;
};

export const activityKeywords = [
  "Academic Activities",
  "International Experience",
  "Professional Service",
  "Global Communication"
];

export const activities: Activity[] = [
  {
    year: "2025",
    title: "World Economic Forum Annual Meeting (Davos)",
    role: "Volunteer Service Participant",
    description:
      "Participated in volunteer service activities during the 2025 World Economic Forum Annual Meeting, supporting international conference operations and communication.",
    location: "Davos, Switzerland",
    type: "International Event Service"
  }
];

export const professionalDevelopment: ProfessionalDevelopmentItem[] = [
  {
    title: "Academic Conferences",
    description:
      "Reserved for future academic conference participation and research presentation records."
  },
  {
    title: "Research Collaboration",
    description:
      "Reserved for future interdisciplinary collaboration and laboratory research exchange records."
  },
  {
    title: "Technical Exchange",
    description:
      "Reserved for future technical communication in robotics, sensing, localization, and intelligent systems."
  }
];

export const demonstratedSkills = [
  "International Communication",
  "Organization Coordination",
  "Professional Service",
  "Team Collaboration"
];

export const activityConnection = {
  en:
    "International academic activities contribute to broader perspectives in engineering research and technology communication.",
  zh: "国际交流与专业服务经历有助于拓展科研视野，促进工程技术领域的交流与合作。"
};
