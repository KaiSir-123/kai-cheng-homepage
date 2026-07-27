export type ResearchTimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type ResearchProject = {
  title: string;
  description: string;
  focusTitle: string;
  focus: string[];
};

export const researchKeywords = [
  "Robot Localization",
  "Sensor Fusion",
  "SLAM",
  "Graph Optimization",
  "Intelligent Navigation"
];

export const researchOverview = [
  { value: "3+", label: "Research Areas" },
  { value: "3", label: "Project Types" },
  { value: "IMU / Camera / LiDAR", label: "Sensor Systems" }
];

export const researchTimeline: ResearchTimelineItem[] = [
  {
    year: "2022",
    title: "Mobile Robot Localization Research",
    description: "Research on autonomous localization methods for mobile robots."
  },
  {
    year: "2023",
    title: "IMU/Stereo Camera/LiDAR Multisensor Fusion",
    description: "Study of heterogeneous sensor fusion for indoor and outdoor localization."
  },
  {
    year: "2024",
    title: "Graph Optimization Based Localization",
    description: "Research on factor graph optimization methods for robot state estimation."
  },
  {
    year: "2025",
    title: "Adaptive Intelligent Localization System",
    description: "Deep learning assisted multisensor fusion and robust localization."
  }
];

export const researchProjects: ResearchProject[] = [
  {
    title: "National Natural Science Foundation Projects",
    description:
      "Participated in National Natural Science Foundation related research projects.",
    focusTitle: "Research focus",
    focus: [
      "Mobile robot localization",
      "Multisensor fusion",
      "Intelligent perception"
    ]
  },
  {
    title: "Tianjin Natural Science Foundation Projects",
    description:
      "Research on intelligent sensing and robot localization technologies.",
    focusTitle: "Research focus",
    focus: [
      "Sensor fusion",
      "Optimization estimation",
      "Robotic navigation"
    ]
  },
  {
    title: "Enterprise Research Project",
    description:
      "Principal investigator of one enterprise research project.",
    focusTitle: "Responsibilities",
    focus: [
      "Algorithm design",
      "Localization system development",
      "Experimental validation"
    ]
  }
];

export const methodologySteps = [
  {
    title: "Sensors",
    items: ["IMU", "Stereo Camera", "LiDAR"]
  },
  {
    title: "Fusion Algorithm",
    items: ["Heterogeneous sensing", "State estimation"]
  },
  {
    title: "Factor Graph Optimization",
    items: ["Graph constraints", "Trajectory consistency"]
  },
  {
    title: "Robot Localization",
    items: ["Robust pose", "Intelligent navigation"]
  }
];
