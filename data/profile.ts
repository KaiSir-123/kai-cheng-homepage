import {
  academicProfilePlaceholders,
  ieeeAuthorProfileUrl
} from "@/data/seo";

export const profile = {
  nameZh: "程凯",
  nameEn: "Kai Cheng",
  title: "Control Science and Engineering Researcher",
  domain: "Mobile Robot Localization · Multisensor Fusion · Factor Graph Optimization",
  description:
    "Research focuses on mobile robot localization, multisensor fusion, factor graph optimization, and SLAM for intelligent robotic systems.",
  siteUrl: "https://kai-cheng-research.netlify.app",
  researchDirections: [
    "Mobile Robot Localization",
    "Multisensor Fusion",
    "Factor Graph Optimization",
    "SLAM",
    "Intelligent Navigation"
  ],
  highlights: [
    { value: "2+", label: "Academic Publications" },
    { value: "3+", label: "Research Projects" },
    { value: "Q1", label: "CAS Zone 1 Top Research" },
    { value: "1", label: "Enterprise Project" }
  ],
  heroTags: [
    "Robot Localization",
    "Multisensor Fusion",
    "Factor Graph",
    "SLAM",
    "LiDAR",
    "Visual-Inertial Navigation"
  ],
  researchAreas: [
    {
      title: "Multisensor Fusion",
      detail: "IMU · Stereo Camera · LiDAR",
      description:
        "Fusion of inertial, visual, and LiDAR measurements for robust mobile robot state estimation."
    },
    {
      title: "Robot Localization",
      detail: "Indoor and Outdoor Localization",
      description:
        "Reliable pose estimation for mobile robots operating across structured indoor and outdoor environments."
    },
    {
      title: "Factor Graph Optimization",
      detail: "Graph Constraints · Pose Estimation",
      description:
        "Graph-based modeling of heterogeneous sensor constraints to reduce drift and improve trajectory consistency."
    },
    {
      title: "SLAM",
      detail: "Mapping · Navigation · Perception",
      description:
        "SLAM-oriented localization and mapping methods for intelligent navigation in complex scenes."
    }
  ],
  timeline: [
    {
      year: "2022",
      title: "Robot Localization Research",
      description: "Started systematic research on mobile robot autonomous localization."
    },
    {
      year: "2023",
      title: "IMU/Stereo Camera/LiDAR Fusion",
      description: "Focused on complementary sensing with inertial, visual, and LiDAR measurements."
    },
    {
      year: "2024",
      title: "Graph Optimization Based Localization",
      description: "Developed graph optimization based localization methods for indoor mobile robots."
    },
    {
      year: "2025",
      title: "Adaptive Multisensor Fusion Research",
      description: "Explored adaptive multisensor fusion for robust localization in complex environments."
    }
  ],
  achievements: [
    {
      value: "2+",
      label: "Publications",
      description: "Selected academic papers on mobile robot localization and multisensor fusion."
    },
    {
      value: "3+",
      label: "Research Projects",
      description: "Research experience across national, municipal, and applied robotics projects."
    },
    {
      value: "NSFC",
      label: "National Natural Science Foundation",
      description: "Participated in research related to mobile robot multisensor localization."
    },
    {
      value: "1",
      label: "Enterprise Project",
      description: "Led one enterprise research project on localization algorithm design."
    }
  ],
  publications: [
    {
      title:
        "Indoor and Outdoor Integrated Localization Scheme for Mobile Robot Using Multisensor Fusion and Graph Optimization",
      venue: "IEEE Internet of Things Journal, 2026",
      keywords: ["Mobile Robot Localization", "Multisensor Fusion", "Graph Optimization", "Factor Graph"]
    },
    {
      title:
        "Indoor Mobile Robot Localization Applying IMU/Stereo Camera/LiDAR and Graph Optimization",
      venue: "IEEE Sensors Journal, 2024",
      keywords: ["Indoor Localization", "IMU", "Stereo Camera", "LiDAR", "Graph Optimization"]
    }
  ],
  projects: [
    {
      title: "National Natural Science Foundation Projects",
      description:
        "Participated in research work related to mobile robot multisensor fusion localization."
    },
    {
      title: "Tianjin Natural Science Foundation",
      description:
        "Conducted research on intelligent perception and robot localization."
    },
    {
      title: "Enterprise Research Project",
      description:
        "Led one enterprise research project, responsible for robot localization algorithm design and system development."
    }
  ],
  profileSummary: {
    zh:
      "程凯，主要从事控制科学与工程领域相关研究，研究方向包括移动机器人自主定位、多传感器融合、因子图优化以及智能导航。",
    en:
      "Kai Cheng is a researcher in Control Science and Engineering, focusing on mobile robot localization, multisensor fusion, graph optimization and SLAM-based intelligent robotic systems."
  },
  philosophy: {
    en:
      "Reliable perception and robust localization are essential foundations for intelligent robotic systems.",
    zh: "可靠感知与鲁棒定位是智能机器人系统实现自主运行的重要基础。"
  },
  aboutKeywords: [
    "Control Science and Engineering",
    "Robot Localization",
    "Multisensor Fusion",
    "Factor Graph",
    "SLAM",
    "Intelligent Navigation"
  ],
  researchInterests: [
    {
      title: "Mobile Robot Localization",
      description:
        "Autonomous localization methods for indoor and outdoor robotic systems."
    },
    {
      title: "Multisensor Fusion",
      description:
        "Fusion of IMU, stereo camera, LiDAR and other heterogeneous sensors."
    },
    {
      title: "Factor Graph Optimization",
      description:
        "Optimization-based state estimation for robotic localization."
    },
    {
      title: "SLAM",
      description: "Mapping and localization in complex environments."
    }
  ],
  academicBackground: [
    {
      year: "Education",
      event: "Academic Training",
      description:
        "Background in Control Science and Engineering, with research training in robot localization and intelligent navigation."
    },
    {
      year: "Research Experience",
      event: "Robotics Localization Research",
      description:
        "Research experience in mobile robot localization, multisensor fusion, graph optimization, and SLAM."
    },
    {
      year: "Academic Activities",
      event: "Academic and Research Activities",
      description:
        "Engaged in academic research activities related to intelligent robotic systems and applied localization technologies."
    }
  ],
  skills: [
    {
      category: "Programming",
      items: ["MATLAB", "Python", "C++"]
    },
    {
      category: "Robotics",
      items: ["ROS", "GTSAM", "SLAM"]
    },
    {
      category: "Sensors",
      items: ["IMU", "LiDAR", "Stereo Camera", "RTK"]
    },
    {
      category: "Machine Learning",
      items: ["Deep Learning", "LSTM", "Neural Network"]
    }
  ],
  contactLinks: [
    {
      label: "Email",
      value: "email@example.com",
      href: "mailto:email@example.com"
    },
    {
      label: "IEEE Author Profile",
      value: "Kai Cheng on IEEE Xplore",
      href: ieeeAuthorProfileUrl
    },
    {
      label: "Google Scholar",
      value: "Profile placeholder",
      href: academicProfilePlaceholders.googleScholar
    },
    {
      label: "ResearchGate",
      value: "Profile placeholder",
      href: academicProfilePlaceholders.researchGate
    },
    {
      label: "ORCID",
      value: "Profile placeholder",
      href: academicProfilePlaceholders.orcid
    }
  ]
};
