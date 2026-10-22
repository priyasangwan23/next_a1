export type Specialization = {
  slug: string;
  name: string;
  trackCode: string;
  description: string;
  academicLead: string;
  coreLab: string;
  curriculumCycle: string;
};

export type Department = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  specializations: number;
  enrolledStudents: number;
  specialization: Specialization[];
};

export const departments: Department[] = [
  {
    slug: "computer-science",
    name: "Computer Science",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    icon: "CS",
    specializations: 4,
    enrolledStudents: 320,
    specialization: [
      {
        slug: "web-development",
        name: "Web Development",
        trackCode: "CS-SPEC-04",
        description:
          "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
        academicLead: "Prof. Elena Vance",
        coreLab: "Turing Hall 408",
        curriculumCycle: "2024-2025 Revised",
      },
      {
        slug: "artificial-intelligence",
        name: "Artificial Intelligence",
        trackCode: "CS-SPEC-01",
        description:
          "Machine learning, neural networks, natural language processing, and intelligent systems design.",
        academicLead: "Prof. David Kim",
        coreLab: "Turing Hall 201",
        curriculumCycle: "2024-2025 Revised",
      },
      {
        slug: "systems-infrastructure",
        name: "Systems & Infrastructure",
        trackCode: "CS-SPEC-02",
        description:
          "Operating systems, distributed computing, cloud infrastructure, and network engineering.",
        academicLead: "Prof. Anita Rowe",
        coreLab: "Turing Hall 312",
        curriculumCycle: "2024-2025 Revised",
      },
      {
        slug: "cybersecurity",
        name: "Cybersecurity",
        trackCode: "CS-SPEC-03",
        description:
          "Network security, cryptography, ethical hacking, and secure systems development.",
        academicLead: "Prof. Marcus Bell",
        coreLab: "Turing Hall 105",
        curriculumCycle: "2024-2025 Revised",
      },
    ],
  },
  {
    slug: "design",
    name: "Design",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    icon: "DS",
    specializations: 3,
    enrolledStudents: 185,
    specialization: [
      {
        slug: "ux-design",
        name: "UX Design",
        trackCode: "DS-SPEC-01",
        description:
          "Human-centred research, usability testing, wireframing, and end-to-end experience design.",
        academicLead: "Prof. Clara Watts",
        coreLab: "Studio Hall 102",
        curriculumCycle: "2024-2025 Revised",
      },
      {
        slug: "visual-communication",
        name: "Visual Communication",
        trackCode: "DS-SPEC-02",
        description:
          "Typography, branding, motion graphics, and editorial design for digital and print media.",
        academicLead: "Prof. James Park",
        coreLab: "Studio Hall 205",
        curriculumCycle: "2024-2025 Revised",
      },
      {
        slug: "product-design",
        name: "Product Design",
        trackCode: "DS-SPEC-03",
        description:
          "End-to-end product design including prototyping, design systems, and cross-functional collaboration.",
        academicLead: "Prof. Nora Singh",
        coreLab: "Studio Hall 310",
        curriculumCycle: "2024-2025 Revised",
      },
    ],
  },
  {
    slug: "business",
    name: "Business",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    icon: "BS",
    specializations: 3,
    enrolledStudents: 240,
    specialization: [
      {
        slug: "financial-technology",
        name: "Financial Technology",
        trackCode: "BS-SPEC-01",
        description:
          "Fintech products, digital banking, blockchain applications, and financial data analysis.",
        academicLead: "Prof. Leo Zhang",
        coreLab: "Commerce Hall 301",
        curriculumCycle: "2024-2025 Revised",
      },
      {
        slug: "entrepreneurship",
        name: "Entrepreneurship",
        trackCode: "BS-SPEC-02",
        description:
          "Startup creation, venture capital, business model innovation, and international market expansion.",
        academicLead: "Prof. Sara Okon",
        coreLab: "Commerce Hall 210",
        curriculumCycle: "2024-2025 Revised",
      },
      {
        slug: "business-analytics",
        name: "Business Analytics",
        trackCode: "BS-SPEC-03",
        description:
          "Data-driven decision-making, statistical modelling, business intelligence, and predictive analytics.",
        academicLead: "Prof. Tom Rivera",
        coreLab: "Commerce Hall 115",
        curriculumCycle: "2024-2025 Revised",
      },
    ],
  },
];
