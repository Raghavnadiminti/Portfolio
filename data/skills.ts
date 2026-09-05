export interface SkillGroup {
  category: string;
  command: string;
  description: string;
  items: {
    name: string;
    version?: string;
    level: "core" | "proficient" | "familiar";
    status: "active" | "installed" | "running";
    notes?: string;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    command: "pacman -Q | grep -E 'python|node|ts|java|c|sql|bash'",
    description: "Core languages used across production backends, low-level tooling, and systems programming.",
    items: [
      { name: "Python", version: "3.11+", level: "core", status: "running", notes: "FastAPI, LangGraph, VCS engine, async tooling" },
      { name: "TypeScript", version: "5.x", level: "core", status: "running", notes: "Next.js, full-stack typed APIs" },
      { name: "JavaScript (Node.js)", version: "20 LTS", level: "core", status: "running", notes: "Express, BullMQ workers, reverse proxies" },
      { name: "Java", version: "17 / 21", level: "proficient", status: "installed", notes: "Spring Boot 3, OOP architectures" },
      { name: "C", version: "C11", level: "proficient", status: "installed", notes: "Systems programming & memory fundamentals" },
      { name: "SQL", version: "ANSI SQL", level: "core", status: "running", notes: "PostgreSQL, MySQL, indexing & queries" },
      { name: "Bash / Shell", version: "5.2", level: "core", status: "running", notes: "Unix pipelines, xclip tools, server automation" },
      { name: "Solidity", version: "0.8.x", level: "familiar", status: "installed", notes: "Smart contracts & EVM experiments" }
    ]
  },
  {
    category: "Backend & Systems Architecture",
    command: "systemctl list-units --type=service | grep -E 'api|broker|worker'",
    description: "Architectures for high-throughput APIs, asynchronous worker queues, and event streams.",
    items: [
      { name: "FastAPI", version: "0.110+", level: "core", status: "running", notes: "Async endpoints, Pydantic, WebSockets" },
      { name: "Express.js", version: "5.x", level: "core", status: "running", notes: "Microservices, OAuth, webhook handlers" },
      { name: "Spring Boot 3", version: "3.5", level: "proficient", status: "installed", notes: "Enterprise REST services & MVC" },
      { name: "BullMQ", version: "5.x", level: "core", status: "running", notes: "Redis-backed distributed job queues" },
      { name: "WebSockets", version: "WSS/RFC 6455", level: "proficient", status: "running", notes: "Real-time ticker streams & paper trading" },
      { name: "REST APIs", version: "OpenAPI 3.0", level: "core", status: "running", notes: "Scalable endpoint design & security" }
    ]
  },
  {
    category: "Cloud, Containers & Infrastructure",
    command: "docker ps -a && kubectl get nodes",
    description: "Container virtualization, cloud infrastructure, and cluster automation.",
    items: [
      { name: "Docker", version: "26.x", level: "core", status: "running", notes: "Multi-stage builds, isolated sandboxes, Compose" },
      { name: "Kubernetes", version: "v1.29+", level: "proficient", status: "running", notes: "Diagnostics, incident investigation MCP, patching" },
      { name: "AWS (EC2 / S3)", version: "Cloud", level: "core", status: "running", notes: "Multi-instance deployments, signed URLs" },
      { name: "Linux / Unix", version: "Kernel 6.x", level: "core", status: "running", notes: "Workstation daily driver, CLI, permissions, cron" },
      { name: "Redis", version: "7.x", level: "core", status: "running", notes: "Session registry, port mapping, task caching" },
      { name: "NGINX", version: "1.25+", level: "proficient", status: "installed", notes: "Reverse proxy, SSL termination, load balancing" },
      { name: "Git & GitHub Actions", version: "2.44+", level: "core", status: "running", notes: "Internal VCS design, CI/CD pipelines" }
    ]
  },
  {
    category: "Databases & Storage",
    command: "cat /etc/databases.conf | grep -E 'active'",
    description: "Relational, document, in-memory databases, and object stores.",
    items: [
      { name: "PostgreSQL", version: "16", level: "core", status: "running", notes: "Schema design, relational indexes, constraints" },
      { name: "MongoDB", version: "7.x", level: "core", status: "running", notes: "Document models, aggregation, dynamic metadata" },
      { name: "AWS S3", version: "Object Storage", level: "core", status: "running", notes: "Private bucket policies & pre-signed tokens" },
      { name: "SQLAlchemy", version: "2.0+", level: "proficient", status: "installed", notes: "Python ORM & relational transactions" },
      { name: "Mongoose", version: "9.x", level: "core", status: "running", notes: "MongoDB schema modeling & validation" }
    ]
  },
  {
    category: "AI, Agents & Tooling",
    command: "pip list | grep -E 'lang|mcp|gemini|torch'",
    description: "Multi-agent frameworks, multimodal reasoning, and infrastructure developer tools.",
    items: [
      { name: "Model Context Protocol (MCP)", version: "Spec 1.0", level: "core", status: "running", notes: "Infra assistants, K8s diagnostics & patching" },
      { name: "LangGraph / LangChain", version: "0.2+", level: "core", status: "running", notes: "Cyclical agent state machines & Socratic loops" },
      { name: "Google Gemini Multimodal", version: "GenAI SDK", level: "core", status: "running", notes: "Vision-based exam grading & OCR pipelines" },
      { name: "Mem0 & FAISS", version: "Latest", level: "proficient", status: "installed", notes: "Cross-session agent memory & vector similarity" },
      { name: "RAG Architecture", version: "Design Pattern", level: "core", status: "running", notes: "Retrieval-augmented generation pipelines" }
    ]
  },
  {
    category: "Frontend Development",
    command: "npm list -g --depth=0 | grep -E 'react|next|tail'",
    description: "Modern component-driven web and mobile applications.",
    items: [
      { name: "Next.js", version: "14 / 15 / 16", level: "core", status: "running", notes: "App Router, SSR, SEO, metadata, fast loads" },
      { name: "React", version: "18 / 19", level: "core", status: "running", notes: "Component architecture, hooks, state design" },
      { name: "React Native", version: "0.74+", level: "proficient", status: "installed", notes: "Cross-platform mobile apps & sandboxing" },
      { name: "Tailwind CSS", version: "v3 / v4", level: "core", status: "running", notes: "Responsive UI, accessible dark design" },
      { name: "Vite", version: "6.x / 7.x", level: "core", status: "running", notes: "Fast frontend build tooling & SPA dev" }
    ]
  }
];

