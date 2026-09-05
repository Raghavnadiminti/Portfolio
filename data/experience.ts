export interface ExperienceItem {
  id: string;
  serviceName: string;
  pid: number;
  role: string;
  company: string;
  org?: string;
  location: string;
  type: string;
  period: string;
  status: "RUNNING" | "ACTIVE" | "COMPLETED";
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "paypal",
    serviceName: "paypal-sre-infra.service",
    pid: 2026,
    role: "Software Engineering Intern",
    company: "PayPal",
    org: "SRE & Infra Organization",
    location: "Bengaluru, Karnataka, India",
    type: "On-site",
    period: "May 2026 – Aug 2026",
    status: "RUNNING",
    summary: "Engineered scalable telemetry collection and AI-driven automation for enterprise storage fleets and Kubernetes infrastructure.",
    highlights: [
      "Built a scalable data pipeline for PayPal’s storage fleet, automating operational data collection and observability.",
      "Built an MCP-powered AI assistant to query storage fleet data and automate infrastructure workflows.",
      "Developed a Kubernetes incident-investigation MCP for AI-driven cluster diagnostics and root-cause analysis.",
      "Automated Kubernetes patching to streamline cluster maintenance and improve operational reliability."
    ],
    technologies: ["Kubernetes", "MCP (Model Context Protocol)", "Data Pipelines", "Observability", "Infrastructure Automation"]
  },
  {
    id: "vashistadizi",
    serviceName: "vashistadizi-fullstack.service",
    pid: 202511,
    role: "FullStack Developer Intern",
    company: "VASHISTADIZI Automation Solutions LLP",
    location: "Remote",
    type: "Remote",
    period: "Nov 2025 – Jan 2026",
    status: "COMPLETED",
    summary: "Contributed across the application stack focusing on mobile interface development and collaborative engineering.",
    highlights: [
      "Built and maintained cross-platform mobile features using React Native.",
      "Collaborated closely with engineering team members to deliver features on schedule."
    ],
    technologies: ["React Native", "JavaScript", "Mobile Development", "Team Collaboration"]
  },
  {
    id: "neuxa",
    serviceName: "neuxa-platform.service",
    pid: 202506,
    role: "FullStack Developer Intern",
    company: "Neuxa Global",
    location: "Remote",
    type: "Remote",
    period: "Jun 2025 – Oct 2025",
    status: "COMPLETED",
    summary: "Led frontend & backend modules for official company platform, automated candidate document delivery, and mentored peers.",
    highlights: [
      "Contributed to the official company website using Next.js with focus on speed, SEO, and scalability.",
      "Designed and implemented the backend for the admin panel, enabling efficient data and user management.",
      "Developed automation for certification and offer letter generation, including email-based delivery to candidates.",
      "Led a team of 3 members, assigning tasks, reviewing code, and ensuring timely project delivery.",
      "Optimized the Next.js application for speed, SEO, and scalability, improving overall user experience."
    ],
    technologies: ["Next.js", "React", "Node.js", "SEO Optimization", "Document Automation", "Team Leadership"]
  },
  {
    id: "safeyourweb",
    serviceName: "safeyourweb-backend.service",
    pid: 202504,
    role: "Backend Developer Intern",
    company: "SafeYourWeb",
    location: "Remote",
    type: "Remote",
    period: "Apr 2025 – Jul 2025",
    status: "COMPLETED",
    summary: "Developed secure REST APIs and scalable PostgreSQL database foundations for an online exam proctoring platform.",
    highlights: [
      "Developed backend APIs using FastAPI, ensuring efficient data flow and secure endpoints.",
      "Designed and optimized PostgreSQL database schemas, handling queries, indexing, and relationships for scalable performance.",
      "Contributed to building a proctoring website, implementing user authentication, session tracking, and real-time monitoring.",
      "Integrated backend services with the frontend to provide a seamless and secure exam environment.",
      "Collaborated with the team to debug issues, write clean documentation, and follow best practices for web security and reliability."
    ],
    technologies: ["FastAPI", "Python", "PostgreSQL", "Authentication", "Session Tracking", "API Security"]
  }
];

