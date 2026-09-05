"use client";

import React, { useState } from "react";
import { projectsData, projectCategories, ProjectCategory } from "@/data/projects";
import { FolderIcon, GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";

export const ProjectExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filtered = projectsData.filter((p) => {
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  return (
    <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="rounded-2xl border border-zinc-800/80 bg-[#090b10] p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-800">
          <div>
            <div className="text-xs font-mono text-cyan-400 mb-1">
              ~/projects/explorer
            </div>
            <h3 className="text-xl font-bold text-white font-sans">
              Complete Project Directory
            </h3>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-1.5 text-xs font-mono">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  activeCategory === cat.id
                    ? "bg-zinc-800 text-cyan-400 border border-cyan-500/30 font-medium"
                    : "text-zinc-400 bg-zinc-900/50 hover:bg-zinc-800/60 hover:text-zinc-200 border border-zinc-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-zinc-800/80 bg-[#0c0e14] p-4 flex flex-col justify-between space-y-3 hover:border-zinc-700 transition-all hover:-translate-y-0.5"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FolderIcon size={16} className="text-cyan-400" />
                    <span className="font-bold text-white text-sm">
                      {project.name}
                    </span>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 rounded bg-zinc-800 hover:bg-emerald-950/60 text-zinc-300 hover:text-emerald-300"
                      title="Live Demo"
                    >
                      <ExternalLinkIcon size={13} />
                    </a>
                  )}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono">
                <span className="text-[11px] text-zinc-500">
                  {project.technologies[0]} · {project.technologies[1] || ""}
                </span>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-zinc-400 hover:text-white transition-colors"
                >
                  <GitHubIcon size={13} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

