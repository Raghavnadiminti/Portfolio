"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { CpuIcon, ExternalLinkIcon } from "@/components/ui/Icons";

export const EducationCard: React.FC = () => {
  return (
    <section id="education" className="py-10 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-16 font-sans">
      <div className="rounded-2xl border border-zinc-800/90 bg-[#0c0e14] p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: University & Degree Info (8 cols) */}
          <div className="lg:col-span-8 space-y-2.5">
            <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400">
              <CpuIcon size={14} />
              <span>~/education</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {profileData.education.institution}
            </h3>

            <p className="text-sm font-medium text-emerald-400 font-mono">
              {profileData.education.degree} · Class of 2027
            </p>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
              Rigorous foundational coursework in Operating Systems, Distributed Systems, Computer Networks,
              Database Systems, and Object-Oriented Software Design.
            </p>

            {/* GDG Campus Link */}
            <div className="pt-2 flex items-center space-x-2 text-xs text-zinc-400">
              <span className="text-zinc-500">Campus Tech Community:</span>
              <a
                href={profileData.community.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                <span>GDG on Campus VIIT Platform</span>
                <ExternalLinkIcon size={12} />
              </a>
            </div>
          </div>

          {/* Right Column: Academic Metric Box (4 cols) */}
          <div className="lg:col-span-4 p-5 rounded-xl bg-[#080a0f] border border-zinc-800 text-center space-y-1">
            <div className="text-xs font-mono text-zinc-500">Cumulative Grade Point Average</div>
            <div className="text-4xl font-extrabold text-amber-400 font-mono tracking-tight">
              9.01 <span className="text-base text-zinc-500 font-normal">/ 10.0</span>
            </div>
            <div className="text-[11px] text-zinc-400 font-sans">
              Top Academic Percentile · 2023 – 2027
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

