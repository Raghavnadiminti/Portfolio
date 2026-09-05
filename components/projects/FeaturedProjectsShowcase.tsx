"use client";

import React, { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projects";
import {
  GitHubIcon,
  ExternalLinkIcon,
  ServerIcon
} from "@/components/ui/Icons";

export const FeaturedProjectsShowcase: React.FC = () => {
  const featured = projectsData.filter((p) => p.featured);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const renderProjectVisualDiagram = (projectId: string) => {
    if (projectId === "deployservers") {
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0a0d14] via-[#0e1320] to-[#07090f] p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/80">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              DEPLOYMENT PIPELINE
            </span>
            <span className="text-zinc-600">PaaS Microservices</span>
          </div>

          <div className="py-4 space-y-2.5 font-mono text-xs">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-700/80 text-zinc-200">
                <div className="text-[10px] text-zinc-500">Source</div>
                <div className="font-semibold text-white">GitHub Webhook</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-emerald-500/40 text-emerald-300">
                <div className="text-[10px] text-emerald-500">Queue</div>
                <div className="font-semibold">BullMQ / Redis</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-cyan-500/40 text-cyan-300">
                <div className="text-[10px] text-cyan-500">Synthesis</div>
                <div className="font-semibold">Auto Dockerfile</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-zinc-500 py-1">
              <span>↓</span>
              <span className="text-[11px] text-zinc-400">Isolated Container Spawn</span>
              <span>↓</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                <div className="text-[10px] text-emerald-400">Runtime</div>
                <div className="font-semibold text-white">Docker Daemon</div>
              </div>
              <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-500/30 text-blue-300">
                <div className="text-[10px] text-blue-400">Routing</div>
                <div className="font-semibold text-white">Public IP / Port</div>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-zinc-500 flex items-center justify-between pt-2 border-t border-zinc-800/60">
            <span>Node.js / Python Auto-Detect</span>
            <span className="text-emerald-400 font-semibold">Zero-Downtime</span>
          </div>
        </div>
      );
    }

    if (projectId === "reactnative-sandbox") {
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0a0d14] via-[#11131c] to-[#07090f] p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/80">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              EXECUTION SANDBOX
            </span>
            <span className="text-zinc-600">Multi-Stage Docker</span>
          </div>

          <div className="py-4 space-y-2.5 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-700/80 flex items-center justify-between">
              <span className="text-zinc-400">Browser Editor</span>
              <span className="text-emerald-400">React Client Code</span>
            </div>

            <div className="flex items-center justify-center text-zinc-500">↓ Proxy Forwarding</div>

            <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/40 flex items-center justify-between">
              <span className="text-cyan-300">Node.js Reverse Proxy</span>
              <span className="text-[11px] text-zinc-400">Dynamic Port Pool</span>
            </div>

            <div className="flex items-center justify-center text-zinc-500">↓ Isolated Spawning</div>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2 rounded-lg bg-zinc-900 border border-purple-500/30 text-purple-300">
                <div className="text-[10px] text-purple-400">Container</div>
                <div className="font-semibold text-white">Docker Sandbox</div>
              </div>
              <div className="p-2 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300">
                <div className="text-[10px] text-amber-400">Cleanup Janitor</div>
                <div className="font-semibold text-white">Redis Cron (&gt;30m)</div>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-zinc-500 flex items-center justify-between pt-2 border-t border-zinc-800/60">
            <span>AWS EC2 Multi-Instance</span>
            <span className="text-cyan-400 font-semibold">Live Browser Sandbox</span>
          </div>
        </div>
      );
    }

    if (projectId === "ai-paper-correction") {
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0a0d14] via-[#10141f] to-[#07090f] p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/80">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-purple-400">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              MULTIMODAL EVALUATION
            </span>
            <span className="text-zinc-600">FastAPI + Gemini</span>
          </div>

          <div className="py-4 space-y-2.5 font-mono text-xs">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-700/80 text-zinc-200">
                <div className="text-[10px] text-zinc-500">Input</div>
                <div className="font-semibold text-white">Exam Paper PDF</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-purple-500/40 text-purple-300">
                <div className="text-[10px] text-purple-500">Extraction</div>
                <div className="font-semibold">PyMuPDF / Pillow</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-blue-500/40 text-blue-300">
                <div className="text-[10px] text-blue-500">Vision Model</div>
                <div className="font-semibold">Google Gemini</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-zinc-500 py-1">
              <span>↓</span>
              <span className="text-[11px] text-zinc-400">Rubric & Handwriting Analysis</span>
              <span>↓</span>
            </div>

            <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-center">
              <div className="text-[10px] text-emerald-400 font-mono">Output</div>
              <div className="font-semibold text-white">Automated Marks & Detailed Question Rubric</div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-zinc-500 flex items-center justify-between pt-2 border-t border-zinc-800/60">
            <span>Live on Vercel</span>
            <span className="text-purple-400 font-semibold">Next.js + Docker</span>
          </div>
        </div>
      );
    }

    if (projectId === "versioncontrol-from-scratch") {
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0a0d14] via-[#0f141b] to-[#07090f] p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/80">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              VCS INTERNALS
            </span>
            <span className="text-zinc-600">Python from Scratch</span>
          </div>

          <div className="py-4 space-y-2.5 font-mono text-xs">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-700/80">
                <div className="text-[10px] text-amber-400">Object Storage</div>
                <div className="font-semibold text-white font-mono">obj/ &lt;hash&gt;</div>
                <div className="text-[10px] text-zinc-500 mt-1">Immutable commits</div>
              </div>
              <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-700/80">
                <div className="text-[10px] text-cyan-400">References</div>
                <div className="font-semibold text-white font-mono">ref/branches/</div>
                <div className="text-[10px] text-zinc-500 mt-1">Commit pointers</div>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#07090e] border border-amber-500/30 flex items-center justify-between">
              <span className="text-zinc-400">HEAD Resolution</span>
              <span className="text-amber-400 font-semibold">crntBranch → main → head</span>
            </div>

            <div className="flex items-center justify-between text-[11px] text-zinc-400 px-1">
              <span>init.py</span>
              <span>•</span>
              <span>commit.py</span>
              <span>•</span>
              <span>switch-branch.py</span>
              <span>•</span>
              <span>getBack.py</span>
            </div>
          </div>

          <div className="text-[11px] font-mono text-zinc-500 flex items-center justify-between pt-2 border-t border-zinc-800/60">
            <span>Zero 3rd-party VCS libs</span>
            <span className="text-amber-400 font-semibold">Filesystem Design</span>
          </div>
        </div>
      );
    }

    if (projectId === "agent-did") {
      return (
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0a0d14] via-[#120f1c] to-[#07090f] p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/80">
          <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-pink-400">
              <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
              SOCRATIC MULTI-AGENT
            </span>
            <span className="text-zinc-600">LangGraph State Machine</span>
          </div>

          <div className="py-4 space-y-2.5 font-mono text-xs">
            <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-700/80 flex items-center justify-between">
              <span className="text-zinc-300">User Concept Explanation</span>
              <span className="text-[10px] text-zinc-500">Input</span>
            </div>

            <div className="flex items-center justify-center text-zinc-500">↓ Cyclical State Loop</div>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2 rounded-lg bg-pink-950/40 border border-pink-500/30 text-pink-300">
                <div className="text-[10px] text-pink-400">Dumb Agent</div>
                <div className="font-semibold text-white">Probing Doubts</div>
              </div>
              <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                <div className="text-[10px] text-emerald-400">Evaluator</div>
                <div className="font-semibold text-white">Score (0.0 → 1.0)</div>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-purple-950/30 border border-purple-500/30 text-center">
              <span className="text-purple-300">Mem0 Long-Term Vector Memory</span>
            </div>
          </div>

          <div className="text-[11px] font-mono text-zinc-500 flex items-center justify-between pt-2 border-t border-zinc-800/60">
            <span>LangGraph + Gemini + FAISS</span>
            <span className="text-pink-400 font-semibold">Cognitive Tutor</span>
          </div>
        </div>
      );
    }

    // Default diagram for other featured projects (NodeS3 Gallery / AlgotradeBackend / NoCode RAG)
    return (
      <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#0a0d14] via-[#0d1017] to-[#07090f] p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-800/80 font-mono">
        <div className="flex items-center justify-between text-[11px] text-zinc-400">
          <span className="text-emerald-400 flex items-center gap-1.5">
            <ServerIcon size={13} />
            SYSTEM FLOW
          </span>
          <span className="text-zinc-600">Full Architecture</span>
        </div>

        <div className="py-4 text-xs text-zinc-300 space-y-2">
          <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
            <div className="text-[10px] text-zinc-500">Pipeline Summary</div>
            <div className="text-xs text-zinc-200 leading-relaxed font-sans">
              Decoupled cloud architecture connecting client UI, authenticated backend gateways, and persistent storage.
            </div>
          </div>
        </div>

        <div className="text-[11px] text-zinc-500 pt-2 border-t border-zinc-800/60 flex items-center justify-between">
          <span>Production Verified</span>
          <span className="text-emerald-400">GitHub Source</span>
        </div>
      </div>
    );
  };

  return (
    <section id="featured-projects" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between pb-4 mb-8 border-b border-zinc-800 gap-2">
        <div>
          <div className="text-xs font-mono text-emerald-400 mb-1">
            ~/projects/featured
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
            Featured Systems & Engineering Projects
          </h2>
        </div>
        <div className="text-xs font-mono text-zinc-500">
          Selected for Architectural Depth & Low-Level Rigor
        </div>
      </div>

      {/* Grid of Large Showcase Cards (Visual 50-60%, Text 40-50%) */}
      <div className="space-y-8">
        {featured.slice(0, 5).map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl border border-zinc-800/90 bg-[#0c0e14] hover:border-zinc-700 transition-all duration-300 shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Left Side: 50-60% Visual Representation (7 cols) */}
              <div
                onClick={() => setSelectedProject(project)}
                className="md:col-span-7 cursor-pointer overflow-hidden transition-transform duration-300 group-hover:scale-[1.01]"
              >
                {renderProjectVisualDiagram(project.id)}
              </div>

              {/* Right Side: 40-50% Text & Actions (5 cols) */}
              <div className="md:col-span-5 p-6 flex flex-col justify-between space-y-4 font-sans">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-400">
                      ~/projects/{project.id}
                    </span>
                    {project.liveUrl && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
                        LIVE DEPLOYED
                      </span>
                    )}
                  </div>

                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    {project.name}
                  </h3>

                  <p className="text-xs font-mono text-zinc-400">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges & Action Links */}
                <div className="space-y-4 pt-2 border-t border-zinc-800/70">
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {project.technologies.slice(0, 6).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3 pt-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLinkIcon size={13} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs border border-zinc-700 transition-colors"
                    >
                      <GitHubIcon size={14} />
                      <span>Source Code</span>
                    </a>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-zinc-400 hover:text-emerald-400 transition-colors ml-auto"
                    >
                      $ inspect details →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-700 bg-[#0d1017] p-6 sm:p-8 space-y-6 shadow-2xl font-sans text-zinc-200">
            <div className="flex items-start justify-between border-b border-zinc-800 pb-4">
              <div>
                <div className="text-xs font-mono text-emerald-400 mb-1">
                  $ cat README.md --project={selectedProject.id}
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {selectedProject.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-1">
                  {selectedProject.tagline}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Architecture Visual in Modal */}
            <div className="rounded-xl overflow-hidden border border-zinc-800">
              {renderProjectVisualDiagram(selectedProject.id)}
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Project Overview
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Implementation Highlights */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Key Implementation Highlights
              </h4>
              <div className="space-y-2 text-sm text-zinc-300">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <span className="text-emerald-400 font-mono font-bold mt-0.5">•</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Repositories if multi-repo */}
            {selectedProject.subRepos && (
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Repository Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
                  {selectedProject.subRepos.map((sr, idx) => (
                    <a
                      key={idx}
                      href={sr.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 space-y-1 block"
                    >
                      <div className="font-semibold text-emerald-400">{sr.name}</div>
                      <div className="text-[11px] text-zinc-400 font-sans">{sr.role}</div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Modal CTAs */}
            <div className="flex flex-wrap items-center justify-between pt-4 border-t border-zinc-800 gap-3">
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {selectedProject.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs"
                  >
                    Live Deployment ↗
                  </a>
                )}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs border border-zinc-700"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
