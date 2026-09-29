export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  tagline: string;
  focus: string[];
  description: string;
}

export interface ProjectSummary {
  id: string;
  number: string;
  title: string;
  category: string;
  keyCapability: string;
  shortDescription: string;
  headlineMetric: string;
  metricLabel: string;
}

export const PROFILE = {
  name: "Rio Koresh Yeremia",
  title: "HR Professional · Psychology Background",
  headlineIdentity: "B.Psi. in Psychology · HR Professional · Bali",
  degree: "Bachelor of Psychology",
  university: "Universitas Negeri Semarang",
  gpa: "GPA 3.35 / 4.00",
  coreBackground: "Psychological Assessment & People Understanding",
  positioning: "A people-focused foundation, applied to HR decisions.",
  subPositioning:
    "Applying a background in Psychology to practical HR work across talent management, recruitment, people development, HR operations, and data-informed decision making.",
  email: "siagianrio10@gmail.com",
  phone: "081377305983",
  linkedin: "https://www.linkedin.com/in/riokoreshyeremia/",
  location: "Bali, Indonesia",
  avatar: "/184a9fad-17d8-47d3-b947-6d76bb55a644.png",
  fallbackAvatar: "/184a9fad-17d8-47d3-b947-6d76bb55a644.png",
  cvUrl: "/Rio_Koresh_Yeremia_CV.pdf",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "pepito",
    company: "PEPITO SUPERMARKET",
    role: "Talent Management Staff",
    period: "Nov 2025 – Present",
    location: "Bali, Indonesia",
    tagline: "Talent identification, succession planning, and promotion readiness",
    description:
      "Managing talent identification, talent pooling, and assessment tracking for promotion readiness across store and support roles. Working with TNA, IDPs, and HR dashboards to support internal mobility and workforce fulfillment across 43 stores.",
    focus: [
      "Talent identification",
      "Talent pooling",
      "Promotion readiness",
      "Succession planning",
      "Psychological and role readiness assessment",
      "TNA and IDP",
      "Leadership development",
      "HR dashboards and people data",
      "Workforce fulfillment",
    ],
  },
  {
    id: "dni",
    company: "DNI SKIN CENTRE INDONESIA",
    role: "HR Generalist",
    period: "Aug 2025 – Nov 2025",
    location: "Denpasar, Indonesia",
    tagline: "End-to-end recruitment, HR administration, and operations",
    description:
      "Managed end-to-end recruitment across 13 branches, HR administration, attendance, payroll validation for 70+ employees, and BPJS. Utilized HRIS to reduce manual processing by 40%, alongside handling performance management, training coordination, regulatory permits, and General Affairs.",
    focus: [
      "End-to-end recruitment",
      "HR administration",
      "Payroll",
      "Attendance and leave",
      "BPJS",
      "HRIS",
      "Performance management",
      "Training",
      "Compliance",
      "General Affairs",
    ],
  },
  {
    id: "lpt",
    company: "LPT (LEMBAGA PSIKOLOGI TERAPAN) INDONESIA",
    role: "HR Consultant & Assistant Psychologist",
    period: "Feb 2024 – Jul 2024",
    location: "Semarang, Indonesia",
    tagline: "Psychological assessment, behavioral interviews, and candidate evaluation",
    description:
      "Administered psychological testing batteries and conducted behavioral interviews for recruitment and selection. Facilitated high-volume assessment sessions for Bank Indonesia scholarship (200+ participants) and Trans Jateng / Trans Jatim recruitment (200+ participants), preparing candidate evaluation reports.",
    focus: [
      "Recruitment and selection",
      "Psychological assessment",
      "Behavioral interviews",
      "High-volume assessment",
      "Candidate evaluation",
      "Scholarship selection",
      "Mass recruitment projects",
    ],
  },
  {
    id: "crekids",
    company: "CREKIDS",
    role: "Trainer",
    period: "Aug 2024 – Jul 2025",
    location: "Semarang, Indonesia",
    tagline: "Learning delivery, curriculum, and evaluation",
    description:
      "Delivered learning sessions for 70 students weekly across 10 schools, developed instructional materials, coordinated workshops for 50–70 participants, and evaluated student learning progress.",
    focus: [
      "Learning delivery",
      "Curriculum / instructional materials",
      "Student development",
      "School coordination",
      "Evaluation",
    ],
  },
  {
    id: "hr-publik",
    company: "HR PUBLIK",
    role: "Trainer (Project Based)",
    period: "Oct 2024 – Dec 2024",
    location: "Semarang, Indonesia",
    tagline: "Institutional core values training and facilitation",
    description:
      "Designed and facilitated institutional and core values training workshops for 100+ academic and administrative staff at STIKes Telogorejo, designed experiential activities, and conducted post-training evaluations.",
    focus: [
      "Institutional training",
      "Core values training",
      "Facilitation",
      "Learning activities",
      "Post-training evaluation",
    ],
  },
];

export const PROJECTS: ProjectSummary[] = [
  {
    id: "project-01",
    number: "01",
    title: "Talent Pool & Promotion Readiness Dashboard",
    category: "Talent Management · HR Analytics",
    keyCapability: "Talent Identification & Tracking",
    shortDescription:
      "A structured dashboard for tracking talent candidates, assessment results, readiness progress, and promotion status across four management levels: Staff → Supervisor → Assistant Manager → Manager.",
    headlineMetric: "790 Candidates",
    metricLabel: "Talent pool across 4 leadership levels",
  },
  {
    id: "project-02",
    number: "02",
    title: "Workforce Fulfillment & Internal Mobility",
    category: "Talent Management · Workforce Fulfillment",
    keyCapability: "Internal Mobility & Succession",
    shortDescription:
      "A practical workflow for handling supervisory and managerial vacancies through internal succession or external recruitment.",
    headlineMetric: "2 Pathways",
    metricLabel: "Internal mobility vs. external recruitment",
  },
  {
    id: "project-03",
    number: "03",
    title: "TNA & Individual Development Planning",
    category: "People Development · Talent Management",
    keyCapability: "Competency Gaps & Actionable IDPs",
    shortDescription:
      "A structured approach for turning assessment results, development needs, and competency gaps into individual development plans.",
    headlineMetric: "5 Core Competencies",
    metricLabel: "From skill gaps to development actions",
  },
  {
    id: "project-04",
    number: "04",
    title: "Recruitment & Selection",
    category: "Recruitment · Psychological Assessment",
    keyCapability: "Assessment & Behavioral Interviewing",
    shortDescription:
      "A structured recruitment and selection process covering sourcing, screening, psychological assessment, behavioral interviews, and candidate evaluation.",
    headlineMetric: "400+ Participants",
    metricLabel: "Across high-volume assessment and selection projects",
  },
  {
    id: "project-05",
    number: "05",
    title: "HR Operations & Process Improvement",
    category: "HR Operations · HRIS",
    keyCapability: "Operational Efficiency & Administration",
    shortDescription:
      "A practical HR operations workflow covering attendance, payroll, employee administration, recruitment governance, and general affairs.",
    headlineMetric: "40% Reduction",
    metricLabel: "In manual HR processing",
  },
  {
    id: "project-06",
    number: "06",
    title: "Workforce Planning & Employee Cost Analysis",
    category: "Workforce Planning · HR Analytics",
    keyCapability: "Headcount & Employee Cost Modeling",
    shortDescription:
      "A workforce planning scenario connecting store requirements, headcount gaps, employee cost, and manpower decisions.",
    headlineMetric: "3 Scenarios",
    metricLabel: "Understaffed · Balanced · Overstaffed",
  },
];

export const CAPABILITIES = [
  {
    domain: "Talent & People Development",
    description: "Supporting talent identification, promotion readiness, succession planning, and employee development.",
    skills: [
      "Talent Management",
      "Talent Pooling",
      "Succession Planning",
      "Leadership Development",
      "Training Needs Analysis (TNA)",
      "Individual Development Plan (IDP)",
    ],
  },
  {
    domain: "Recruitment & Assessment",
    description: "Recruitment and assessment experience across screening, interviewing, psychological testing, and high-volume selection.",
    skills: [
      "End-to-End Recruitment",
      "Candidate Screening",
      "Behavioral Interview",
      "Psychological Assessment",
      "Mass Hiring",
      "Managerial Assessment",
    ],
  },
  {
    domain: "HR Operations",
    description: "Hands-on experience in day-to-day HR administration, payroll, attendance, HRIS, BPJS, and employee documentation.",
    skills: [
      "HR Administration",
      "Payroll",
      "Attendance & Leave Management",
      "BPJS Ketenagakerjaan & Kesehatan",
      "HRIS Data Management",
      "Employment Contracts & Compliance",
      "General Affairs Support",
    ],
  },
  {
    domain: "Data & Analytics",
    description: "Using HR data, dashboards, and reporting to monitor people metrics and support HR decisions.",
    skills: [
      "HR Metrics & KPIs",
      "Talent Analytics",
      "Dashboard Design",
      "Microsoft Excel",
      "Google Sheets",
      "Power BI",
      "Management Reporting",
    ],
  },
  {
    domain: "Workforce Planning",
    description: "Connecting workforce requirements, headcount gaps, employee cost, and manpower planning.",
    skills: [
      "Workforce Planning",
      "MPP",
      "Employee Cost Analysis",
      "Workforce Fulfillment",
      "Store Workforce Allocation",
    ],
  },
];
