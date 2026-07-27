export type BlogArticleSection = {
  heading: string;
  body: string[];
  points?: string[];
};

export type BlogArticle = {
  slug: string;
  title: string;
  titleEn: string;
  date: string;
  category: string;
  keywords: string[];
  abstract: string;
  content: BlogArticleSection[];
  relatedPublications: string[];
  markdown?: string;
};

export const blogKeywords = [
  "Factor Graph",
  "SLAM",
  "Robot Localization",
  "LiDAR",
  "IMU",
  "Computer Vision",
  "GTSAM"
];

export const blogCategories = [
  "Robot Localization",
  "SLAM",
  "Sensor Fusion",
  "Optimization",
  "Deep Learning"
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "factor-graph-optimization-mobile-robot-localization",
    title: "因子图优化在移动机器人定位中的应用",
    titleEn: "Factor Graph Optimization for Mobile Robot Localization",
    date: "2026-07-27",
    category: "Robot Localization",
    keywords: ["Factor Graph", "GTSAM", "State Estimation"],
    abstract:
      "介绍因子图优化基本思想，以及其在IMU、LiDAR、视觉融合定位中的应用。",
    content: [
      {
        heading: "Technical Overview",
        body: [
          "Factor graph optimization models robot localization as a probabilistic state estimation problem. Robot poses, sensor biases, and map-related variables are represented as nodes, while measurements are encoded as constraints.",
          "In mobile robot localization, this framework is useful because IMU, LiDAR, camera, wheel odometry, and GNSS/RTK measurements can be integrated in one optimization problem."
        ],
        points: [
          "Pose nodes describe robot states over time.",
          "Measurement factors encode IMU preintegration, LiDAR registration, visual constraints, and prior information.",
          "Nonlinear optimization improves trajectory consistency and reduces accumulated drift."
        ]
      },
      {
        heading: "Connection with Multisensor Localization",
        body: [
          "For IMU, LiDAR, and visual fusion, factor graphs provide a flexible back-end architecture. Different sensor modalities can contribute complementary constraints according to their reliability and operating conditions."
        ],
        points: [
          "IMU contributes high-frequency motion prediction.",
          "LiDAR provides geometric structure constraints.",
          "Stereo camera contributes visual feature and depth information."
        ]
      }
    ],
    relatedPublications: [
      "Indoor and Outdoor Integrated Localization Scheme for Mobile Robot Using Multisensor Fusion and Graph Optimization",
      "Indoor Mobile Robot Localization Applying IMU/Stereo Camera/LiDAR and Graph Optimization"
    ],
    markdown:
      "# 因子图优化在移动机器人定位中的应用\n\nThis article can be expanded with Markdown content later."
  },
  {
    slug: "understanding-lio-sam-lidar-inertial-odometry",
    title: "LIO-SAM算法原理解析：激光惯性里程计与因子图优化",
    titleEn:
      "Understanding LIO-SAM: LiDAR Inertial Odometry and Factor Graph Optimization",
    date: "2026-07-27",
    category: "SLAM",
    keywords: ["LIO-SAM", "LiDAR", "IMU", "SLAM"],
    abstract:
      "介绍LIO-SAM系统结构、激光雷达与IMU融合方法，以及后端因子图优化过程。",
    content: [
      {
        heading: "System Structure",
        body: [
          "LIO-SAM is a LiDAR-inertial odometry and mapping framework that combines scan matching, IMU preintegration, and factor graph optimization.",
          "The system builds a graph-based back-end where LiDAR odometry, IMU measurements, loop closure, and prior constraints can be optimized together."
        ],
        points: [
          "LiDAR odometry estimates geometric motion from point cloud registration.",
          "IMU preintegration provides motion constraints between keyframes.",
          "Factor graph optimization refines the trajectory and improves mapping consistency."
        ]
      },
      {
        heading: "Research Relevance",
        body: [
          "For mobile robot localization, LIO-SAM offers a representative technical route for integrating LiDAR and IMU measurements. It also provides a useful reference for extending localization systems with camera constraints or adaptive sensor weighting."
        ]
      }
    ],
    relatedPublications: [
      "Indoor and Outdoor Integrated Localization Scheme for Mobile Robot Using Multisensor Fusion and Graph Optimization"
    ],
    markdown:
      "# LIO-SAM算法原理解析\n\nThis article can be expanded with Markdown content later."
  },
  {
    slug: "imu-lidar-camera-multisensor-fusion-localization",
    title: "IMU/LiDAR/Camera多传感器融合定位方法",
    titleEn: "Multisensor Fusion Localization Using IMU, LiDAR and Camera",
    date: "2026-07-27",
    category: "Multisensor Fusion",
    keywords: ["IMU", "LiDAR", "Stereo Camera", "Sensor Fusion"],
    abstract:
      "介绍多传感器融合定位框架，包括传感器建模、数据融合和优化估计。",
    content: [
      {
        heading: "Fusion Framework",
        body: [
          "Multisensor fusion localization combines complementary sensing sources to estimate robot states more reliably than a single sensor can provide.",
          "A typical fusion system includes sensor calibration, timestamp alignment, feature extraction, front-end matching, and back-end optimization."
        ],
        points: [
          "IMU captures short-term motion and attitude changes.",
          "LiDAR measures stable geometric structures in the environment.",
          "Stereo camera provides visual constraints and depth cues."
        ]
      },
      {
        heading: "Optimization Estimation",
        body: [
          "Optimization-based estimation can integrate heterogeneous measurements into a consistent state estimation framework. This is particularly important for indoor and outdoor mobile robots that face changing sensor visibility and environmental conditions."
        ]
      }
    ],
    relatedPublications: [
      "Indoor Mobile Robot Localization Applying IMU/Stereo Camera/LiDAR and Graph Optimization",
      "Indoor and Outdoor Integrated Localization Scheme for Mobile Robot Using Multisensor Fusion and Graph Optimization"
    ],
    markdown:
      "# IMU/LiDAR/Camera多传感器融合定位方法\n\nThis article can be expanded with Markdown content later."
  }
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
