"use client";

import React, { useState } from "react";
import Image from "next/image";

interface TechItem {
  name: string;
  category: string;
  role: string;
  logo?: string;
  color: string;
}

export const TechWorkstation: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const technologies: TechItem[] = [
    // Languages
    { name: "Python", category: "Language", role: "FastAPI, LangGraph, VCS Engine, System Automation", logo: "/Python-Logo-PNG.png", color: "text-amber-400" },
    { name: "TypeScript", category: "Language", role: "Next.js, Type-Safe Full-Stack Endpoints", color: "text-blue-400"},
    { name: "JavaScript", category: "Language", role: "Node.js, Express, Microservice Event Handlers", color: "text-yellow-400", logo: "/JS.webp" },
    { name: "Java", category: "Language", role: "Spring Boot 3, OOP Architecture", color: "text-red-400" },
    { name: "SQL", category: "Language", role: "PostgreSQL, Indexing & Query Optimizations", color: "text-cyan-400" },
    { name: "Bash / Shell", category: "Language", role: "Unix Pipelines, CLI Tools, Server Configs", color: "text-emerald-400", logo: "/Bash.webp"},

    // Cloud & Infra
    { name: "Docker", category: "Containers", role: "Multi-Stage Builds, Isolated Sandboxes, Compose", logo: "/Docker.webp", color: "text-blue-400" },
    { name: "Kubernetes", category: "Infrastructure", role: "Cluster Diagnostics, Incident MCP, Patching", logo: "/kubernetes.webp", color: "text-blue-500" },
    { name: "AWS", category: "Cloud", role: "Multi-Instance Deployments, Pre-Signed URLs", logo: "/Aws-PNG-Pic.png", color: "text-amber-500" },
    { name: "Linux", category: "Operating System", role: "Workstation Daily Driver, Systemd, Process Management", logo: "/Linux.webp", color: "text-yellow-300" },

    // Backend
    { name: "Node.js", category: "Backend", role: "Dynamic Reverse Proxies, BullMQ Queues", logo: "/nodejs.png", color: "text-emerald-500" },
    { name: "FastAPI", category: "Backend", role: "High-Throughput Async APIs, WebSockets, Python", logo: "/FASTAPi.webp", color: "text-teal-400" },
    { name: "Redis", category: "Cache / Queue", role: "Session Registry, Port Allocator, BullMQ Store", logo: "/redis.webp", color: "text-red-500" },

    // Databases
    { name: "PostgreSQL", category: "Database", role: "Relational Schemas, Constraints, Indexes", logo: "/POSTGRES.webp", color: "text-blue-400" },
    { name: "MongoDB", category: "Database", role: "Dynamic Metadata & PaaS Container State", logo: "/MongoDB.jpg", color: "text-emerald-500" },

    // Frontend
    { name: "React", category: "Frontend", role: "Component Architecture, Sandbox Web UI", logo: "/Reactjs.png", color: "text-cyan-400" },
    { name: "Next.js", category: "Frontend / SSR", role: "Production Web Portals, SEO, App Router", logo: "/NEXTjs.webp", color: "text-white" },

    // Tooling & AI
    { name: "Model Context Protocol", category: "AI Tooling", role: "Infrastructure Querying & K8s Diagnostics", color: "text-purple-400", logo: "/MCP.webp" },
    { name: "LangGraph", category: "AI Systems", role: "Socratic Cyclical State Machine Workflows", color: "text-pink-400", logo: "/Langraph.webp" }
  ];

  return (
    <section id="stack" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-16 font-sans">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between pb-4 mb-8 border-b border-zinc-800 gap-2">
        <div>
          <div className="text-xs font-mono text-emerald-400 mb-1">
            ~/technologies
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Technical Stack & Engineering Arsenal
          </h2>
        </div>
        <div className="text-xs font-mono text-zinc-500">
          Only Technologies Verified in Actual Codebases
        </div>
      </div>

      {/* Visual Technology Constellation Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            onMouseEnter={() => setActiveTooltip(tech.name)}
            onMouseLeave={() => setActiveTooltip(null)}
            className="relative rounded-xl border border-zinc-800/90 bg-[#0c0e14] p-4 flex flex-col items-center justify-center text-center space-y-2.5 transition-all duration-200 hover:border-zinc-600 hover:-translate-y-1 hover:bg-[#10131d] cursor-pointer group"
          >
            {/* Logo or Styled Icon */}
            <div className="w-12 h-12 rounded-lg bg-zinc-900/90 flex items-center justify-center p-2 overflow-hidden border border-zinc-800">
              {tech.logo ? (
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={36}
                  height={36}
                  className="object-contain max-h-8 max-w-8 group-hover:scale-110 transition-transform"
                />
              ) : (
                <span className={`font-mono font-bold text-sm ${tech.color}`}>
                  {tech.name.slice(0, 3)}
                </span>
              )}
            </div>

            {/* Name & Category Tag */}
            <div className="space-y-0.5">
              <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                {tech.name}
              </div>
              <div className="text-[10px] font-mono text-zinc-500">
                {tech.category}
              </div>
            </div>

            {/* Interactive Tooltip Card */}
            {activeTooltip === tech.name && (
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 z-30 w-48 p-2 rounded-lg bg-black border border-zinc-700 shadow-2xl text-[11px] text-zinc-300 font-sans pointer-events-none">
                <div className="font-semibold text-emerald-400 font-mono text-[10px]">{tech.category}</div>
                <div>{tech.role}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

