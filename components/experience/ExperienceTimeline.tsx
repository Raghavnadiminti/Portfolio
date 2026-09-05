"use client";

import React, { useState } from "react";
import Image from "next/image";
import { experienceData, ExperienceItem } from "@/data/experience";
import { PayPalLogo, ChevronRightIcon, ArrowRightIcon } from "@/components/ui/Icons";

export const ExperienceTimeline: React.FC = () => {
  // By default, expand the first one (PayPal) so recruiters immediately see the high-value role and diagram
  const [expandedId, setExpandedId] = useState<string | null>("paypal");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderCompanyLogo = (exp: ExperienceItem) => {
    if (exp.id === "paypal") {
      return (
        <div className="w-11 h-11 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-center p-2">
        <Image
            src="/1725506319701.jpg"
            alt="PaypalLogo"
            width={44}
            height={44}
            className="object-cover"
          />
        </div>
      );
    }
    if (exp.id === "vashistadizi") {
      return (
        <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          <Image
            src="/vashistadizi_automation_solutions_logo.jpg"
            alt="Vashistadizi Logo"
            width={44}
            height={44}
            className="object-cover"
          />
        </div>
      );
    }
    if (exp.id === "neuxa") {
      return (
        <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          <Image
            src="/tastezy_marketplace_llp_logo.jpg"
            alt="Neuxa Global Logo"
            width={44}
            height={44}
            className="object-cover"
          />
        </div>
      );
    }
    if (exp.id === "safeyourweb") {
      return (
        <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          <Image
            src="/safeyourwebofficial_logo.jpg"
            alt="SafeYourWeb Logo"
            width={44}
            height={44}
            className="object-cover"
          />
        </div>
      );
    }
    return (
      <div className="w-11 h-11 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-bold text-white">
        {exp.company[0]}
      </div>
    );
  };

  const renderVisualDiagram = (expId: string) => {
    if (expId === "paypal") {
      return (
        <div className="p-4 rounded-xl bg-[#07090e] border border-blue-500/20 space-y-2 font-mono text-xs">
          <div className="text-[11px] font-semibold text-blue-400 flex items-center gap-1.5">
            <span>Verified Infrastructure Architecture</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-zinc-300 py-1">
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
              Storage Fleet
            </span>
            <ArrowRightIcon size={12} className="text-blue-400" />
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
              Data Pipeline
            </span>
            <ArrowRightIcon size={12} className="text-blue-400" />
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
              Observability
            </span>
            <ArrowRightIcon size={12} className="text-blue-400" />
            <span className="px-2.5 py-1 rounded bg-blue-950/60 border border-blue-500/40 text-blue-300">
              AI Assistant / MCP
            </span>
            <ArrowRightIcon size={12} className="text-blue-400" />
            <span className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
              Infra Workflows
            </span>
          </div>
        </div>
      );
    }

    if (expId === "safeyourweb") {
      return (
        <div className="p-4 rounded-xl bg-[#07090e] border border-emerald-500/20 space-y-2 font-mono text-xs">
          <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
            <span>⚡ Backend System Flow</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-zinc-300 py-1">
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
              Proctoring Exam Client
            </span>
            <ArrowRightIcon size={12} className="text-emerald-400" />
            <span className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
              FastAPI Gateway & Auth
            </span>
            <ArrowRightIcon size={12} className="text-emerald-400" />
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
              PostgreSQL Relational DB
            </span>
            <ArrowRightIcon size={12} className="text-emerald-400" />
            <span className="px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
              Real-time Monitoring
            </span>
          </div>
        </div>
      );
    }

    if (expId === "neuxa") {
      return (
        <div className="p-4 rounded-xl bg-[#07090e] border border-purple-500/20 space-y-2 font-mono text-xs">
          <div className="text-[11px] font-semibold text-purple-400 flex items-center gap-1.5">
            <span>⚡ Platform & Automation Flow</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-zinc-300 py-1">
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
              Next.js Official Web
            </span>
            <ArrowRightIcon size={12} className="text-purple-400" />
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-200">
              Admin Panel Backend
            </span>
            <ArrowRightIcon size={12} className="text-purple-400" />
            <span className="px-2.5 py-1 rounded bg-purple-950/60 border border-purple-500/40 text-purple-300">
              Offer Letter / Cert Automation
            </span>
            <ArrowRightIcon size={12} className="text-purple-400" />
            <span className="px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
              Automated Email Delivery
            </span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-16">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between pb-4 mb-8 border-b border-zinc-800 gap-2">
        <div>
          <div className="text-xs font-mono text-emerald-400 mb-1">
            ~/experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
            Work Experience & Internships
          </h2>
        </div>
        <div className="text-xs font-mono text-zinc-500">
          4 Verified Roles 
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-4 sm:pl-8 border-l border-zinc-800 space-y-6">
        {experienceData.map((exp: ExperienceItem) => {
          const isExpanded = expandedId === exp.id;
          const isCurrent = exp.status === "RUNNING";

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[21px] sm:-left-[37px] top-4 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                  isCurrent
                    ? "bg-emerald-400 border-emerald-500 shadow-lg shadow-emerald-500/50 ring-4 ring-emerald-500/20"
                    : "bg-zinc-800 border-zinc-700 group-hover:border-zinc-500"
                }`}
              />

              {/* Card Container */}
              <div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isCurrent
                    ? "bg-[#0c0f17] border-blue-500/30 hover:border-blue-500/50 shadow-xl shadow-blue-950/10"
                    : "bg-[#0b0d13] border-zinc-800/90 hover:border-zinc-700"
                }`}
              >
                {/* Collapsed Bar: Clickable Header */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-wrap items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-center space-x-4">
                    {renderCompanyLogo(exp)}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-white font-sans">
                          {exp.company}
                        </h3>
                        {isCurrent && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold animate-pulse">
                            UPCOMING
                          </span>
                        )}
                        {exp.org && (
                          <span className="text-xs text-blue-400 font-mono hidden sm:inline">
                            [{exp.org}]
                          </span>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm text-zinc-300 font-sans mt-0.5">
                        {exp.role}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-xs font-mono text-zinc-300 font-semibold">
                        {exp.period}
                      </div>
                      <div className="text-[11px] text-zinc-500 font-sans">
                        {exp.location}
                      </div>
                    </div>
                    <div
                      className={`p-1.5 rounded-lg bg-zinc-800/70 text-zinc-400 group-hover:text-white transition-transform duration-200 ${
                        isExpanded ? "rotate-90 text-emerald-400" : ""
                      }`}
                    >
                      <ChevronRightIcon size={16} />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-zinc-800/60 space-y-4 font-sans">
                    {/* Visual Architecture Diagram (if available) */}
                  

                    {/* Achievement Bullets */}
                    <div className="space-y-2 pt-1">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                          <span className="text-emerald-400 font-mono text-sm mt-0.5 select-none font-bold">
                            •
                          </span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-xs">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

