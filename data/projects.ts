export type ProjectCategory = "all" | "infrastructure" | "ai-systems" | "systems-internals" | "fullstack";

export interface ProjectItem {
  id: string;
  name: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  architecture?: string;
  highlights: string[];
  subRepos?: { name: string; url: string; role: string }[];
}

export const projectCategories: { id: ProjectCategory; label: string; path: string }[] = [
  { id: "all", label: "All Repositories", path: "~/projects/*" },
  { id: "infrastructure", label: "Infrastructure & Cloud", path: "~/projects/infra" },
  { id: "ai-systems", label: "AI Systems & Agents", path: "~/projects/ai" },
  { id: "systems-internals", label: "Systems & Internals", path: "~/projects/internals" },
  { id: "fullstack", label: "Full-Stack Platforms", path: "~/projects/fullstack" },
];

export const projectsData: ProjectItem[] = [
  {
    id: "deployservers",
    name: "DeployServers",
    category: "infrastructure",
    tagline: "Automated Application Deployment Platform & Distributed Worker",
    description:
      "A self-hosted PaaS platform orchestrating automated builds and container deployments. Features GitHub OAuth, push webhook interception, asynchronous BullMQ/Redis job queue processing, automated project-type detection (Node.js / Python), dynamic Dockerfile generation, and isolated container execution.",
    technologies: ["Node.js", "Express", "BullMQ", "Redis", "Docker", "MongoDB", "React 19", "Vite", "GitHub Webhooks"],
    githubUrl: "https://github.com/Raghavnadiminti/DeployServers",
    featured: true,
    architecture:
      "GitHub Webhook / API → Express Backend → BullMQ Job Queue (Redis) → Worker Process → Repo Clone → Project Auto-Detection → Dynamic Dockerfile → Docker Daemon Spawn & Port Binding → MongoDB State Tracking",
    highlights: [
      "Built asynchronous task queue with BullMQ and Redis for decoupled, reliable deployment jobs.",
      "Engineered automated runtime inspection to detect Node.js vs Python repos and synthesize optimized Dockerfiles on the fly.",
      "Integrated GitHub OAuth and raw webhook listeners to trigger instant zero-downtime rebuilds on git push.",
      "Automated Docker container lifecycle management, port mapping, and live status reporting."
    ],
    subRepos: [
      { name: "DeployServers (Frontend)", url: "https://github.com/Raghavnadiminti/DeployServers", role: "React 19 + Vite Dashboard" },
      { name: "deployServers_backend", url: "https://github.com/Raghavnadiminti/deployServers_backend", role: "Express API & Webhook Service" },
      { name: "deployservers_worker", url: "https://github.com/Raghavnadiminti/deployservers_worker", role: "BullMQ & Docker Build Worker" }
    ]
  },
  {
    id: "reactnative-sandbox",
    name: "React-Native-Pad (ReactNative Sandbox)",
    category: "infrastructure",
    tagline: "Browser-Based Isolated React Native Execution Sandbox",
    description:
      "A cloud-hosted playground enabling users to write and execute React Native code directly in the browser without local SDK setup. User code runs within isolated Docker containers orchestrated by a custom Node.js reverse proxy, dynamic port allocation manager, Redis session tracking, and scheduled cleanup cron jobs.",
    technologies: ["React", "Node.js", "Docker", "Redis", "AWS EC2", "Linux", "Cron", "http-proxy-middleware"],
    githubUrl: "https://github.com/Raghavnadiminti/ReactNative-Sandbox",
    featured: true,
    architecture:
      "Browser Code Editor → Custom Node.js Proxy → Dynamic Port Allocator → Isolated Docker Container → Redis State Registry (User ↔ Container ↔ Port) → Background Cron Janitor (>30m Idle Reclaim)",
    highlights: [
      "Engineered custom reverse proxy in Node.js using http-proxy-middleware with dynamic port pool management.",
      "Implemented strict container isolation using Docker with multi-stage builds to minimize image sizes and boot latency.",
      "Devised crypto-based client session hashing stored in browser localStorage for conflict-free container binding.",
      "Built an automated background cron cleanup service querying Redis to terminate idle containers (>30 mins) and reclaim system ports.",
      "Architected multi-instance deployment on AWS EC2 separating the proxy/Redis layer from container execution nodes."
    ],
    subRepos: [
      { name: "ReactNative-Sandbox (Core)", url: "https://github.com/Raghavnadiminti/ReactNative-Sandbox", role: "Sandbox Architecture & Orchestration" },
      { name: "nodejs_proxyserver", url: "https://github.com/Raghavnadiminti/nodejs_proxyserver", role: "Dynamic Reverse Proxy & Port Manager" },
      { name: "reactnative_sandbox-frontend", url: "https://github.com/Raghavnadiminti/reactnative_sandbox-frontend", role: "Web Editor & Live Preview UI" }
    ]
  },
  {
    id: "versioncontrol-from-scratch",
    name: "mini-git (Version Control from Scratch)",
    category: "systems-internals",
    tagline: "Lightweight Git-Like Version Control Engine Built in Python",
    description:
      "An educational implementation of core Git internals built from first principles using plain Python and the file system. Demonstrates low-level content storage, commit snapshots, branch references, HEAD pointer resolution, and history traversal without relying on any external VCS libraries.",
    technologies: ["Python", "Filesystem Design", "Object Storage", "CLI", "System Internals"],
    githubUrl: "https://github.com/Raghavnadiminti/versioncontrol-from-scratch",
    featured: true,
    architecture:
      "CLI Command Parser → Repository Initializer (`init.py`) → Commit Object Serializer (`obj/`) → Pointer Graph (`ref/branches/` & HEAD) → Tree Traversal & Branch Switching (`switch-branch.py`, `getBack.py`)",
    highlights: [
      "Reimplemented Git's content-addressed object storage paradigm (`obj/`) for immutable commit storage.",
      "Constructed pointer-based branch architecture (`ref/branches/`) and HEAD pointer resolution.",
      "Implemented commit history log tracking (`commitRef`) and branch checkout mechanics that update pointers without data loss.",
      "Built clean CLI commands for repo initialization (`init`), committing (`commit -m`), branch creation, and historical rollback."
    ]
  },
  {
    id: "ai-paper-correction",
    name: "AI-PaperCorrection",
    category: "ai-systems",
    tagline: "End-to-End Automated Exam Assessment Platform",
    description:
      "A production-grade full-stack platform for automated grading of handwritten and digital academic papers. Features a containerized FastAPI backend with PyMuPDF document rendering and assessment powered by Google Gemini multimodal vision API, delivered through a modern Next.js web interface.",
    technologies: ["Next.js", "FastAPI", "Docker Compose", "Google Gemini Vision API", "PyMuPDF", "Pillow", "Pydantic"],
    githubUrl: "https://github.com/Raghavnadiminti/AI-PaperCorrection",
    liveUrl: "https://ai-paper-correction.vercel.app",
    featured: true,
    architecture:
      "Next.js Frontend (Vercel) → FastAPI API Ingestion (Docker) → Multi-page PDF Rendering (PyMuPDF & Pillow) → Google Gemini Multimodal Vision Analysis → Rubric-Based Scoring & Feedback",
    highlights: [
      "Developed high-throughput PDF processing pipeline converting student examination sheets into high-resolution imagery using PyMuPDF and Pillow.",
      "Integrated Google Gemini multimodal vision models for rubric-aware handwriting analysis and automated mark calculation.",
      "Designed full multi-container Docker Compose environment with container health checks and volume mounts.",
      "Built a production Next.js frontend deployed live at ai-paper-correction.vercel.app."
    ]
  },
  {
    id: "agent-did",
    name: "AGENT_DID (Socratic Cognitive Tutor)",
    category: "ai-systems",
    tagline: "Stateful Multi-Agent Socratic Evaluation Framework",
    description:
      "A stateful pedagogical multi-agent system built with LangGraph and LangChain. Implements an adversarial 'dumb student' agent that poses probing doubts exposing conceptual misunderstandings, coupled with an evaluation agent that computes a 0-1 understanding score and triggers corrective interventions.",
    technologies: ["LangGraph", "LangChain", "Google Gemini", "Mem0", "FAISS", "FastAPI", "Python"],
    githubUrl: "https://github.com/Raghavnadiminti/AGENT_DID",
    featured: true,
    architecture:
      "User Input → LangGraph State Node → Dumb Agent (Doubt Generation) → User Clarification → Evaluation Node (Understanding Score) → Intervention Trigger (< 0.6) → Mem0 Long-Term Memory Persistence",
    highlights: [
      "Constructed multi-agent cyclical state machine using LangGraph to guide multi-turn Socratic learning dialogues.",
      "Engineered automated understanding scoring logic extracting quantitative comprehension metrics from conversational interactions.",
      "Integrated Mem0 long-term memory for cross-session learner context retention and personalized concept reinforcement."
    ]
  },
  {
    id: "nocode-rag",
    name: "No-Code RAG Builder",
    category: "ai-systems",
    tagline: "Visual Workflow Editor for Retrieval-Augmented Generation Pipelines",
    description:
      "An interactive node-based visual workflow editor enabling engineers and analysts to construct, configure, and execute Retrieval-Augmented Generation pipelines without writing boilerplate code. Connects Knowledge Nodes, Vector Retrievers, LLM Reasoning Nodes, and Output Targets.",
    technologies: ["React Flow", "JavaScript", "Python", "FastAPI", "Vector Embeddings", "RAG"],
    githubUrl: "https://github.com/Raghavnadiminti/nocode_frontend",
    featured: true,
    architecture:
      "Interactive Canvas → Node/Edge Graph Definition → Knowledge Ingestion Nodes → Vector Retriever Node → LLM Generation Node → Execution Engine",
    highlights: [
      "Built drag-and-drop pipeline composer connecting heterogeneous data sources to vector databases and LLM models.",
      "Decoupled graph serialization from execution runtime, allowing rapid pipeline iteration and instant testing.",
      "Designed separate decoupled microservices for the frontend canvas and backend pipeline execution."
    ],
    subRepos: [
      { name: "nocode_frontend", url: "https://github.com/Raghavnadiminti/nocode_frontend", role: "Visual Workflow Editor Canvas" },
      { name: "NoCodeRagBackend", url: "https://github.com/Raghavnadiminti/NoCodeRagBackend", role: "RAG Pipeline Execution Engine" }
    ]
  },
  {
    id: "personal-cloud-gallery",
    name: "NodeS3 Cloud Gallery",
    category: "fullstack",
    tagline: "Private Cloud Vault with AWS S3 Pre-Signed Cryptographic Access",
    description:
      "A full-stack cloud media vault designed with zero public bucket exposure. Features Node.js Express backend and React frontend utilizing AWS SDK v3 to generate time-limited cryptographic pre-signed URLs for direct, secure uploads and viewings.",
    technologies: ["Node.js", "Express", "AWS S3", "AWS SDK v3", "React", "Axios"],
    githubUrl: "https://github.com/Raghavnadiminti/Personal_cloud_gallery",
    featured: true,
    architecture:
      "React Client → Express API → AWS SDK v3 Pre-Signed URL Generator → Direct Authenticated Browser-to-S3 Upload (Strictly Private Bucket) → Auto-Expiring Read Tokens",
    highlights: [
      "Enforced strict private S3 bucket configuration with all public access blocked at the IAM and ACL levels.",
      "Implemented pre-signed URL generation using AWS SDK v3 to offload heavy file transfers directly to S3.",
      "Designed responsive React gallery with grid selection, asynchronous uploads, and individual asset purging."
    ]
  },
  {
    id: "algotrade-backend",
    name: "AlgotradeBackend",
    category: "systems-internals",
    tagline: "Real-Time Algorithmic Trading & Paper Trading Execution Engine",
    description:
      "Real-time financial quantitative backend built with FastAPI, WebSockets, pandas, and SQLAlchemy. Features live market telemetry ingestion via yfinance, rolling moving average crossover backtesting (50/200 MA), real-time signal broadcasting, and a stateful `LivePaperTrader` execution engine.",
    technologies: ["FastAPI", "WebSockets", "Python", "pandas", "SQLAlchemy", "yfinance"],
    githubUrl: "https://github.com/Raghavnadiminti/AlgotradeBackend",
    featured: true,
    architecture:
      "Market Feed (yfinance) → Rolling Moving Average Strategy (50/200) → Signal Engine → WebSocket Broadcast Stream → LivePaperTrader Simulation → SQLAlchemy Database",
    highlights: [
      "Constructed WebSocket streaming service for real-time market data broadcasting and trading signal emission.",
      "Implemented moving average crossover strategy (50/200 rolling window) with automated signal triggering.",
      "Built a stateful `LivePaperTrader` simulator managing cash reserves, position sizing, average execution prices, and trade logs."
    ]
  },
  {
    id: "gdg-website",
    name: "GDG on Campus VIIT Platform",
    category: "fullstack",
    tagline: "Official Community Portal for GDG-on-Campus VIIT 2025–2026",
    description:
      "The official web platform for Google Developer Groups on Campus at VIIT. Built using Next.js and modern web standards to showcase community initiatives, events, and resources.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/Raghavnadiminti/GDGwebsite",
    liveUrl: "https://gdgviit2k25.vercel.app/",
    featured: false,
    highlights: [
      "Developed official campus developer community web portal deployed live on Vercel.",
      "Optimized for responsive mobile performance and high Core Web Vitals scores."
    ]
  },
  {
    id: "gdg-studyjams-leaderboard",
    name: "Google Cloud Study Jams Leaderboard",
    category: "fullstack",
    tagline: "Real-Time Tracking Leaderboard for 200+ Cloud Participants",
    description:
      "Leaderboard web platform built with Next.js and MongoDB to track and rank the progress of 200+ Google Cloud Study Jams participants across campus cohorts.",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Raghavnadiminti/GDG_studyJams_LeaderBoard",
    featured: false,
    highlights: [
      "Constructed leaderboard backend and aggregation pipelines in MongoDB to track progress across 200+ participants.",
      "Delivered real-time ranking updates with a clean Next.js UI."
    ]
  },
  {
    id: "toxisense",
    name: "toxisense & Browser Extension",
    category: "systems-internals",
    tagline: "Pre-Render Web Content Toxicity Interceptor & Extension",
    description:
      "A Manifest V3 browser extension and text classification system that intercepts web pages before rendering, extracts text content, and stops page display if toxic language or malicious content is detected.",
    technologies: ["JavaScript", "Chrome Manifest V3", "React", "Vite", "DOM Parser"],
    githubUrl: "https://github.com/Raghavnadiminti/toxisense",
    featured: false,
    highlights: [
      "Engineered Chrome Manifest V3 extension with content scripts intercepting HTML prior to DOM paint.",
      "Built clean text extraction engine stripping scripts and styles for classification analysis."
    ],
    subRepos: [
      { name: "toxisense", url: "https://github.com/Raghavnadiminti/toxisense", role: "Web Classification Dashboard" },
      { name: "browser_extension", url: "https://github.com/Raghavnadiminti/browser_extension", role: "Chrome Extension Interceptor" }
    ]
  },
  {
    id: "clipboard-shell",
    name: "clipboardShellScripting",
    category: "systems-internals",
    tagline: "Lightweight Linux X11 Clipboard History Manager in Bash",
    description:
      "A native Unix shell script utility creating a persistent 10-item clipboard ring buffer on Linux using xclip, sed, and standard stream redirection pipelines.",
    technologies: ["Bash", "Linux Shell", "xclip", "Unix Pipelines", "sed"],
    githubUrl: "https://github.com/Raghavnadiminti/clipboardShellScripting",
    featured: false,
    highlights: [
      "Implemented a 10-line circular clipboard history manager for X11 environments using xclip and head/sed pipelines.",
      "Zero dependencies beyond standard Linux coreutils."
    ]
  },
  {
    id: "websearch-agent",
    name: "WebSearch Agent",
    category: "ai-systems",
    tagline: "Autonomous Web Retrieval & Summarization RAG Agent",
    description:
      "A Python-based automated agent that performs live web retrieval using DuckDuckGo, scrapes and parses top results, and synthesizes context-rich summaries via Retrieval-Augmented Generation.",
    technologies: ["Python", "DuckDuckGo API", "Web Scraping", "RAG", "LLM Prompting"],
    githubUrl: "https://github.com/Raghavnadiminti/websearch_agent",
    featured: false,
    highlights: [
      "Built multi-step search orchestration pipeline fetching live DuckDuckGo results and extracting clean text.",
      "Generated grounded answers with source citations using RAG prompt templates."
    ],
    subRepos: [
      { name: "websearch_agent", url: "https://github.com/Raghavnadiminti/websearch_agent", role: "Python Core Agent & RAG Pipeline" },
      { name: "websearchagent-frontend", url: "https://github.com/Raghavnadiminti/websearchagent-frontend", role: "Web Search UI" }
    ]
  },
  {
    id: "hall-booking-system",
    name: "HallBookingSystem",
    category: "fullstack",
    tagline: "Campus Seminar Hall Reservation & Approval Workflow in Spring Boot",
    description:
      "Enterprise Java Spring Boot 3 web application enabling college club leads to request seminar hall bookings with multi-tier administrative approval workflows and conflict resolution.",
    technologies: ["Java", "Spring Boot 3", "Maven", "REST APIs", "SQL"],
    githubUrl: "https://github.com/Raghavnadiminti/HallBookingSystem",
    featured: false,
    highlights: [
      "Engineered reservation validation and slot conflict prevention logic using Spring Boot 3.",
      "Designed role-based authorization for club organizers and approving campus authorities."
    ]
  }
];

