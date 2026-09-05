"use client";

import React from "react";
import { ServerIcon, CpuIcon, ActivityIcon, ArrowRightIcon } from "@/components/ui/Icons";

export const WhatIBuild: React.FC = () => {
  return (
    <section id="engineering" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-16 font-sans">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between pb-4 mb-8 border-b border-zinc-800 gap-2">
        <div>
          <div className="text-xs font-mono text-emerald-400 mb-1">
            ~/engineering/domains
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What I Build · Core Engineering Disciplines
          </h2>
        </div>
        <div className="text-xs font-mono text-zinc-500">
          Systems Architecture & Applied Infrastructure
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CARD 1: BACKEND SYSTEMS */}
        <div className="rounded-2xl border border-zinc-800/90 bg-[#0c0e14] p-6 space-y-5 hover:border-emerald-500/40 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ServerIcon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Backend Systems</h3>
                <p className="text-xs font-mono text-zinc-500">High Throughput & Resilient APIs</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Designing scalable REST and WebSocket endpoints, relational schemas with PostgreSQL,
              and asynchronous job processing with BullMQ and Redis.
            </p>

            {/* Visual Animated Pipeline Card */}
           
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5 font-mono text-[11px]">
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">FastAPI</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">BullMQ Queues</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">WebSockets</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">PostgreSQL</span>
          </div>
        </div>

        {/* CARD 2: INFRASTRUCTURE & SANDBOXES */}
        <div className="rounded-2xl border border-zinc-800/90 bg-[#0c0e14] p-6 space-y-5 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <CpuIcon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Infrastructure</h3>
                <p className="text-xs font-mono text-zinc-500">Containers, Proxies & Clusters</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Engineering isolated multi-tenant execution sandboxes in Docker, dynamic reverse proxies with automated port pools,
              and cluster diagnostics in Kubernetes.
            </p>

            {/* Visual Animated Pipeline Card */}
           
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5 font-mono text-[11px]">
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">Docker Runtimes</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">Kubernetes</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">AWS EC2 / S3</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">Reverse Proxies</span>
          </div>
        </div>

        {/* CARD 3: AI DEVELOPER TOOLS */}
        <div className="rounded-2xl border border-zinc-800/90 bg-[#0c0e14] p-6 space-y-5 hover:border-purple-500/40 transition-all flex flex-col justify-between group">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <ActivityIcon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">AI Developer Tools</h3>
                <p className="text-xs font-mono text-zinc-500">MCP Assistants & State Machines</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Developing Model Context Protocol (MCP) tooling for infrastructure queries, automated Kubernetes incident diagnosis,
              and LangGraph stateful pedagogical agents.
            </p>

            {/* Visual Animated Pipeline Card */}
           
          </div>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5 font-mono text-[11px]">
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">Model Context Protocol</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">LangGraph</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">Gemini Multimodal</span>
            <span className="px-2 py-0.5 rounded bg-zinc-900 text-zinc-300">Mem0 Memory</span>
          </div>
        </div>
      </div>
    </section>
  );
};

