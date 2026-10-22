export type Subject = {
  code: string;
  name: string;
  credits: number;
};

export type Student = {
  id: string;
  studentId: string;
  name: string;
  email: string;
  department: string;
  departmentSlug: string;
  studyYear: string;
  enrolledSemester: string;
  status: string;
  about: string;
  specialization: string;
  cgpa: number;
  systemRecordId: string;
  lastValidated: string;
  subjects: Subject[];
};

export const students: Student[] = [
  {
    id: "1042",
    studentId: "STU-1042",
    name: "Aarav Mehta",
    email: "aarav.mehta@campus.edu",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "3rd Year (Junior)",
    enrolledSemester: "Fall 2022",
    status: "Active Student",
    about:
      "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    specialization: "Full-Stack Architecture",
    cgpa: 8.9,
    systemRecordId: "0948-CS-AM",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "CS-301", name: "Distributed Systems & Microservices", credits: 4.0 },
      { code: "CS-340", name: "Web Application Architecture", credits: 4.0 },
      { code: "CS-280", name: "Algorithms & Complexity", credits: 3.5 },
    ],
  },
  {
    id: "1089",
    studentId: "STU-1089",
    name: "Elena Rostova",
    email: "elena.rostova@campus.edu",
    department: "Design",
    departmentSlug: "design",
    studyYear: "2nd Year (Sophomore)",
    enrolledSemester: "Fall 2023",
    status: "Active Student",
    about:
      "Elena is passionate about user experience research and visual communication. She leads the campus design club and runs workshops on interaction design fundamentals.",
    specialization: "UX Research",
    cgpa: 9.1,
    systemRecordId: "0989-DS-ER",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "DS-201", name: "UX Research Methods", credits: 3.0 },
      { code: "DS-210", name: "Visual Communication", credits: 3.0 },
      { code: "DS-220", name: "Interaction Design", credits: 3.5 },
    ],
  },
  {
    id: "1120",
    studentId: "STU-1120",
    name: "Marcus Chen",
    email: "marcus.chen@campus.edu",
    department: "Business",
    departmentSlug: "business",
    studyYear: "4th Year (Senior)",
    enrolledSemester: "Fall 2021",
    status: "Active Student",
    about:
      "Marcus focuses on financial technology and entrepreneurship. He is currently building a student-led startup focused on sustainable supply chains.",
    specialization: "Financial Technology",
    cgpa: 8.5,
    systemRecordId: "1020-BS-MC",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "BS-401", name: "Strategic Management", credits: 3.0 },
      { code: "BS-410", name: "Financial Technology", credits: 3.5 },
      { code: "BS-420", name: "International Entrepreneurship", credits: 3.0 },
    ],
  },
  {
    id: "1155",
    studentId: "STU-1155",
    name: "Priya Sharma",
    email: "priya.sharma@campus.edu",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "1st Year (Freshman)",
    enrolledSemester: "Fall 2024",
    status: "Active Student",
    about:
      "Priya is a first-year student with a strong interest in frontend development and reactive UI design. She participates in hackathons and open-source projects.",
    specialization: "Reactive UI Design",
    cgpa: 8.2,
    systemRecordId: "1055-CS-PS",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "CS-101", name: "Introduction to Programming", credits: 4.0 },
      { code: "CS-110", name: "Web Fundamentals", credits: 3.0 },
      { code: "CS-115", name: "Mathematics for CS", credits: 3.5 },
    ],
  },
  {
    id: "1201",
    studentId: "STU-1201",
    name: "Lucas Dubois",
    email: "lucas.dubois@campus.edu",
    department: "Design",
    departmentSlug: "design",
    studyYear: "3rd Year (Junior)",
    enrolledSemester: "Fall 2022",
    status: "Active Student",
    about:
      "Lucas specialises in product prototyping and design systems. He collaborates with engineering teams to bridge the gap between design and implementation.",
    specialization: "Product Prototyping",
    cgpa: 8.7,
    systemRecordId: "1101-DS-LD",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "DS-301", name: "Design Systems", credits: 3.5 },
      { code: "DS-310", name: "Product Prototyping", credits: 4.0 },
      { code: "DS-320", name: "Motion & Animation", credits: 3.0 },
    ],
  },
  {
    id: "1244",
    studentId: "STU-1244",
    name: "Maya Lin",
    email: "maya.lin@campus.edu",
    department: "Business",
    departmentSlug: "business",
    studyYear: "2nd Year (Sophomore)",
    enrolledSemester: "Fall 2023",
    status: "Active Student",
    about:
      "Maya is interested in analytics and international business. She is part of the business case competition team and has participated in national-level events.",
    specialization: "Business Analytics",
    cgpa: 9.0,
    systemRecordId: "1144-BS-ML",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "BS-201", name: "Business Analytics", credits: 3.0 },
      { code: "BS-210", name: "International Business", credits: 3.0 },
      { code: "BS-220", name: "Marketing Strategy", credits: 3.5 },
    ],
  },
  {
    id: "1310",
    studentId: "STU-1310",
    name: "Tariq Al-Mansoor",
    email: "tariq.almansoor@campus.edu",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "4th Year (Senior)",
    enrolledSemester: "Fall 2021",
    status: "Active Student",
    about:
      "Tariq works on distributed web systems and has contributed to several open-source networking projects. He is completing his capstone on edge computing architectures.",
    specialization: "Distributed Web Systems",
    cgpa: 9.2,
    systemRecordId: "1210-CS-TA",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "CS-401", name: "Advanced Networking", credits: 4.0 },
      { code: "CS-410", name: "Edge Computing", credits: 4.0 },
      { code: "CS-420", name: "Capstone Project", credits: 6.0 },
    ],
  },
  {
    id: "1388",
    studentId: "STU-1388",
    name: "Sophia Müller",
    email: "sophia.muller@campus.edu",
    department: "Computer Science",
    departmentSlug: "computer-science",
    studyYear: "2nd Year (Sophomore)",
    enrolledSemester: "Fall 2023",
    status: "Active Student",
    about:
      "Sophia focuses on progressive web apps and mobile-first design. She is an active contributor to the campus tech newsletter and runs a coding study group.",
    specialization: "Progressive Web Apps",
    cgpa: 8.6,
    systemRecordId: "1288-CS-SM",
    lastValidated: "Oct 24, 2024",
    subjects: [
      { code: "CS-201", name: "Data Structures", credits: 4.0 },
      { code: "CS-210", name: "Progressive Web Apps", credits: 3.5 },
      { code: "CS-220", name: "Database Systems", credits: 3.0 },
    ],
  },
];
