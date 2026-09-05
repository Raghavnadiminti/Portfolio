"use client";

import React from "react";
import { CheckCircleIcon, ActivityIcon, ServerIcon, CpuIcon } from "@/components/ui/Icons";

export const QuickStats: React.FC = () => {
  const stats = [
    {
      index: "01",
      value: "4",
      label: "Industry Internships",
      detail: "PayPal (SRE & Infra), Neuxa, SafeYourWeb, Vashistadizi",
      icon: ServerIcon,
      color: "text-emerald-400",
      borderColor: "border-emerald-500/20 hover:border-emerald-500/50",
      bgGlow: "from-emerald-950/20 to-transparent",
    },
    {
      index: "02",
      value: "9.01",
      label: "Academic CGPA",
      detail: "B.Tech Computer Science @ VIIT (Top Tier Standing)",
      icon: CpuIcon,
      color: "text-amber-400",
      borderColor: "border-amber-500/20 hover:border-amber-500/50",
      bgGlow: "from-amber-950/20 to-transparent",
    },
    {
      index: "03",
      value: "Active",
      label: "Competitive Problem Solver",
      detail: "LeetCode (@Raghavendra90) & CodeChef (@raghavendra91)",
      icon: ActivityIcon,
      color: "text-cyan-400",
      borderColor: "border-cyan-500/20 hover:border-cyan-500/50",
      bgGlow: "from-cyan-950/20 to-transparent",
    },
    {
      index: "04",
      value: "2023 → 27",
      label: "B.Tech Graduation Cohort",
      detail: "Systems, Distributed Architectures & Cloud Infrastructure",
      icon: CheckCircleIcon,
      color: "text-purple-400",
      borderColor: "border-purple-500/20 hover:border-purple-500/50",
      bgGlow: "from-purple-950/20 to-transparent",
    },
  ];

  return (
    <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.index}
              className={`relative rounded-xl border bg-[#0b0e14] bg-gradient-to-b ${item.bgGlow} p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.borderColor}`}
            >
              <div className="flex items-center justify-between text-xs text-zinc-500 font-mono mb-3">
                <span className="font-semibold text-zinc-400">{item.index}</span>
                <IconComp size={16} className={item.color} />
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                {item.value}
              </div>

              <div className="text-sm font-semibold text-zinc-200 mt-2 font-sans">
                {item.label}
              </div>

              <p className="text-xs text-zinc-400 mt-1.5 font-sans leading-relaxed">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
