export type Publication = {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  publicationInfo: string;
  abstract: string;
  keywords: string[];
  doi: string;
  doiUrl: string;
  pdfUrl?: string;
  bibtex: string;
};

export const publicationKeywords = [
  "Robot Localization",
  "Multisensor Fusion",
  "SLAM",
  "Factor Graph Optimization",
  "LiDAR",
  "Visual-Inertial Navigation"
];

export const researchTopics = [
  "IMU",
  "Stereo Camera",
  "LiDAR",
  "Factor Graph",
  "Optimization",
  "SLAM"
];

export const publicationStats = [
  { value: "2+", label: "Published Papers" },
  { value: "6", label: "Research Keywords" },
  { value: "3", label: "Sensor Modalities" }
];

export const publications: Publication[] = [
  {
    id: "indoor-outdoor-integrated-localization-2026",
    title:
      "Indoor and Outdoor Integrated Localization Scheme for Mobile Robot Using Multisensor Fusion and Graph Optimization",
    authors: "Liyang Zhang; Kai Cheng; Zhiyou Pan; Lei Pan; Yang Liu; Lixia Guo; Yan He",
    journal: "IEEE Internet of Things Journal",
    year: "2026",
    publicationInfo:
      "IEEE Internet of Things Journal, Vol. 13, No. 15, pp. 34646-34660, Aug. 2026",
    abstract:
      "Formal abstract placeholder. This publication focuses on indoor and outdoor integrated localization for mobile robots using multisensor fusion and graph optimization. The final author-approved abstract can be added here later.",
    keywords: [
      "Mobile Robot Localization",
      "Multisensor Fusion",
      "Graph Optimization",
      "Factor Graph",
      "IMU",
      "LiDAR"
    ],
    doi: "10.1109/JIOT.2026.3696546",
    doiUrl: "https://doi.org/10.1109/JIOT.2026.3696546",
    bibtex: `@article{zhang2026indoorOutdoorIntegratedLocalization,
  title={Indoor and Outdoor Integrated Localization Scheme for Mobile Robot Using Multisensor Fusion and Graph Optimization},
  author={Zhang, Liyang and Cheng, Kai and Pan, Zhiyou and Pan, Lei and Liu, Yang and Guo, Lixia and He, Yan},
  journal={IEEE Internet of Things Journal},
  volume={13},
  number={15},
  pages={34646--34660},
  year={2026},
  doi={10.1109/JIOT.2026.3696546}
}`
  },
  {
    id: "indoor-mobile-robot-localization-2024",
    title:
      "Indoor Mobile Robot Localization Applying IMU/Stereo Camera/LiDAR and Graph Optimization",
    authors: "Liyang Zhang; Lidong Zhang; Rui Gao; Lei Pan; Chenyu Xu; Kai Cheng",
    journal: "IEEE Sensors Journal",
    year: "2024",
    publicationInfo:
      "IEEE Sensors Journal, Vol. 24, No. 13, pp. 21466-21478, Jul. 1, 2024",
    abstract:
      "Formal abstract placeholder. This publication studies indoor mobile robot localization using IMU, stereo camera, LiDAR, and graph optimization. The final author-approved abstract can be added here later.",
    keywords: [
      "Indoor Localization",
      "IMU",
      "Stereo Camera",
      "LiDAR",
      "Graph Optimization",
      "SLAM"
    ],
    doi: "10.1109/JSEN.2024.3400269",
    doiUrl: "https://doi.org/10.1109/JSEN.2024.3400269",
    bibtex: `@article{zhang2024indoorMobileRobotLocalization,
  title={Indoor Mobile Robot Localization Applying IMU/Stereo Camera/LiDAR and Graph Optimization},
  author={Zhang, Liyang and Zhang, Lidong and Gao, Rui and Pan, Lei and Xu, Chenyu and Cheng, Kai},
  journal={IEEE Sensors Journal},
  volume={24},
  number={13},
  pages={21466--21478},
  year={2024},
  doi={10.1109/JSEN.2024.3400269}
}`
  }
];
