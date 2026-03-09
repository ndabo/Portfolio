export type ProjectCategory = 'AI/ML' | 'Data Science' | 'Web Dev' | 'Sports Tech' | 'Networking'

export interface ProjectMetric {
  label: string
  value: string
}

export interface SubItem {
  name: string
  type: string
  topics: string[]
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  description: string
  approach: string
  technologies: string[]
  metrics: [ProjectMetric, ProjectMetric]  // always exactly 2 for the card layout
  github: string | null
  demo: string | null
  image: string | null
  featured?: boolean
  subItems?: SubItem[]
}

export const projects: Project[] = [
  {
    slug: 'autograph-authenticity',
    title: 'Autograph Authenticity System',
    category: 'AI/ML',
    description:
      'Computer vision pipeline that detects and verifies autograph authenticity on sports memorabilia using object detection and embedding similarity. Built during a professional internship.',
    approach:
      'YOLOv8 for autograph region detection combined with contrastive embedding models to compare against verified reference signatures.',
    technologies: ['Python', 'YOLOv8', 'PyTorch', 'OpenCV', 'FastAPI'],
    metrics: [
      { label: 'Accuracy', value: '94.2%' },
      { label: 'Type', value: 'Internship' },
    ],
    github: null,          // private company repository
    demo: null,
    image: '/athletics/metabelia.webp',
    featured: true,
  },
  {
    slug: 'model-inference-firewall',
    title: 'Model Inference Firewall',
    category: 'AI/ML',
    description:
      'A lightweight security layer that intercepts and validates requests to ML model inference endpoints, filtering malicious inputs and enforcing access policies.',
    approach:
      'Proxy-based architecture that inspects inference payloads for prompt injection, input sanitization, and rate limiting before forwarding to the model backend.',
    technologies: ['Python', 'FastAPI', 'Docker', 'Security', 'ML Ops'],
    metrics: [
      { label: 'Threats Blocked', value: '100%' },
      { label: 'Overhead', value: '<5ms' },
    ],
    github: 'https://github.com/ndabo/min-firewall',
    demo: null,
    image: '/projects/inference-firewall.jpeg',
    featured: true,
  },
  {
    slug: 'mvp-prediction',
    title: 'MVP Prediction Model',
    category: 'Sports Tech',
    description:
      'End-to-end ML pipeline predicting NBA MVP winners using historical player statistics, advanced metrics, and team performance data.',
    approach:
      'Feature engineering on 20 years of NBA data; ensemble of XGBoost and logistic regression with SHAP explainability.',
    technologies: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'SHAP'],
    metrics: [
      { label: 'F1 Score', value: '91.5%' },
      { label: 'Seasons', value: '20 yrs' },
    ],
    github: 'https://github.com/ndabo/nba-mvp-prediction/tree/main',
    demo: null,
    image: '/projects/mvp-change.png',
  },
  {
    slug: 'football-ranking-analysis',
    title: 'FIFA Ranking Prediction',
    category: 'Data Science',
    description:
      'Logistic regression model predicting whether a national team belongs to the FIFA top 50 based on regional association (UEFA, CONMEBOL, CAF, etc.) using pre-2022 World Cup data.',
    approach:
      'Binary classification on 211 national teams; engineered a Top_50 target variable, evaluated with precision, recall, F1, and accuracy metrics. Key finding: UEFA and CONMEBOL associations are the strongest predictors.',
    technologies: ['Python', 'Scikit-learn', 'Statsmodels', 'Pandas', 'Seaborn'],
    metrics: [
      { label: 'Accuracy', value: '68%' },
      { label: 'Teams', value: '211' },
    ],
    github: 'https://github.com/ndabo/football-ranking-analysis',
    demo: null,
    image: '/projects/fifa-association.jpg',
  },
  // {
  //   slug: 'economic-analysis',
  //   title: 'Economic Trend Analysis',
  //   category: 'Data Science',
  //   description:
  //     'Interactive dashboard visualizing macroeconomic indicators and their cross-correlations using real-time FRED API data.',
  //   approach:
  //     'Automated ETL pipeline pulling Federal Reserve data; Plotly Dash front-end with regression overlays and anomaly detection.',
  //   technologies: ['Python', 'Plotly', 'Dash', 'Pandas', 'FRED API'],
  //   metrics: [
  //     { label: 'Indicators', value: '40+' },
  //     { label: 'Data Points', value: '500k+' },
  //   ],
  //   github: 'https://github.com/ndabo',
  //   demo: null,
  //   image: null,
  // },

  {
    slug: 'network-topology',
    title: 'Network Design Portfolio',
    category: 'Networking',
    description:
      'Collection of 8 fully simulated network designs covering enterprise, healthcare, hospitality, and SOHO environments — including VoIP, subnetting, and multi-site architectures.',
    approach:
      'Cisco Packet Tracer simulations featuring VLSM subnetting, OSPF/RIP routing, VLAN segmentation, DHCP/DNS, and VoIP configuration across real-world scenarios.',
    technologies: ['Cisco Packet Tracer', 'OSPF', 'VLAN', 'VoIP', 'DHCP/DNS'],
    metrics: [
      { label: 'Designs', value: '8' },
      { label: 'Packet Loss', value: '0.00%' },
    ],
    github: 'https://github.com/ndabo/Network-Projects',
    demo: null,
    image: '/projects/network-topology.png',
    subItems: [
      { name: 'Campus Network Design',         type: 'Education',        topics: ['VLAN', 'OSPF', 'DHCP'] },
      { name: 'Small Office / Home Office',    type: 'SOHO',             topics: ['NAT', 'DHCP', 'Wireless'] },
      { name: 'VoIP Network',                  type: 'Telecommunications', topics: ['VoIP', 'Call Manager', 'QoS'] },
      { name: 'Bank Network Design',           type: 'Finance',          topics: ['ACL', 'VLAN', 'Firewall'] },
      { name: 'Company Network',               type: 'Enterprise',       topics: ['OSPF', 'HSRP', 'VLAN'] },
      { name: 'Hospital Network',              type: 'Healthcare',       topics: ['VLAN', 'DHCP/DNS', 'Security'] },
      { name: 'Hotel Network System',          type: 'Hospitality',      topics: ['Wireless', 'VLAN', 'NAT'] },
      { name: 'Simple Network & Subnetting',   type: 'Fundamentals',     topics: ['VLSM', 'Subnetting', 'TCP/IP'] },
    ],
  },
]

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug)

export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
  projects.filter((p) => p.category === category)
