"use client";

import React from "react";
import { profileData } from "@/data/profile";
import {
  DownloadIcon,
  GitHubIcon,
  ChevronRightIcon,
  ServerIcon,
  CpuIcon,
  ActivityIcon
} from "@/components/ui/Icons";

export const HeroVisual: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="pt-8 sm:pt-14 pb-10 sm:pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* LEFT COLUMN: Clean, punchy recruiter presentation (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Subtle Linux Prompt Label */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-400">~/raghavendra</span>
            <span className="text-zinc-600">/</span>
            <span className="text-emerald-400 font-semibold">system online</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
              {profileData.name}
            </h1>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-sans">
              {profileData.role}
            </div>
          </div>

          {/* Concise Statement */}
          <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-2xl">
            Computer Science undergraduate building{" "}
            <strong className="text-white font-semibold">backend systems</strong>,{" "}
            <strong className="text-white font-semibold">cloud infrastructure</strong>,{" "}
            <strong className="text-white font-semibold">developer tools</strong>, and{" "}
            <strong className="text-white font-semibold">AI-powered applications</strong>.
          </p>

          {/* 3 Capability Badges */}
          <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-medium font-sans">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200">
              <ServerIcon size={14} className="text-emerald-400" />
              <span>Backend Systems</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200">
              <CpuIcon size={14} className="text-cyan-400" />
              <span>Cloud & Infrastructure</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200">
              <ActivityIcon size={14} className="text-purple-400" />
              <span>AI Developer Tools</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => scrollTo("featured-projects")}
              className="group flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
            >
              <span>View Projects</span>
              <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo("experience")}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-sm border border-zinc-800 transition-all"
            >
              <span>Experience</span>
            </button>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-sm border border-zinc-800 transition-all"
            >
              <GitHubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 font-medium text-sm border border-zinc-800/80 transition-all"
            >
              <DownloadIcon size={15} className="text-cyan-400" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Developer Workstation (5 cols) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-zinc-800/90 bg-[#090b10] shadow-2xl overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1017] border-b border-zinc-800/80 text-xs font-mono text-zinc-400">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-zinc-300 font-semibold ml-1">workstation.sh</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-mono">Arch Linux x86_64</span>
            </div>

            {/* Interactive Shell & Visual Architecture Window */}
            <div className="p-5 space-y-4 font-mono text-xs text-zinc-300">
              {/* Real Command 1 */}
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-zinc-400">
                  <span className="text-emerald-400 font-bold">raghavendra@workstation:~$</span>
                  <span className="text-white font-semibold">whoami</span>
                </div>
                <div className="pl-4 text-emerald-300 font-semibold text-sm">
                  Raghavendra Nadiminti
                </div>
              </div>

              {/* Real Command 2 */}
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 text-zinc-400">
                  <span className="text-emerald-400 font-bold">raghavendra@workstation:~$</span>
                  <span className="text-white font-semibold">ls -F ~/focus</span>
                </div>
                <div className="pl-4 grid grid-cols-2 gap-1.5 text-xs">
                  <div className="flex items-center space-x-1 text-cyan-400">
                    <span>📁</span> <span>backend/</span>
                  </div>
                  <div className="flex items-center space-x-1 text-emerald-400">
                    <span>📁</span> <span>System Architecture/</span>
                  </div>
                  <div className="flex items-center space-x-1 text-purple-400">
                    <span>📁</span> <span>DEVOPS/</span>
                  </div>
                  <div className="flex items-center space-x-1 text-amber-400">
                    <span>📁</span> <span>Agentic Workflows/</span>
                  </div>
                </div>
              </div>

              {/* Live Visual Infrastructure Component */}
              <div className="pt-2 border-t border-zinc-800/80 space-y-2">
               

                {/* Micro Visual Containers Grid */}
               
              </div>

              {/* Active Career Pill */}
              <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between text-xs font-sans">
                <div className="flex items-center space-x-2">
            <img
  src="/1725506319701.jpg"
  alt="PayPal"
  className="h-8 w-8 object-contain"
 />
                  <div>
                    <div className="text-white font-semibold text-xs">PayPal</div>
                    <div className="text-[10px] text-emerald-400">Software Engineering Intern (SRE & Infra)</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded">
                  May 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
