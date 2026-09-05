"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { LeetCodeIcon, CodeChefIcon, GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";

export const CodingProfiles: React.FC = () => {
  const profiles = [
    {
      platform: "LeetCode",
      handle: "Raghavendra90",
      link: profileData.leetcode,
      description: "Algorithmic problem solving across Trees, Dynamic Programming, Graphs & Data Structures.",
      badge: "Active Solver",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
      icon: LeetCodeIcon,
      hoverBorder: "hover:border-amber-500/50",
    },
    {
      platform: "CodeChef",
      handle: "raghavendra91",
      link: profileData.codechef,
      description: "Competitive programming contests, rated division challenges & runtime efficiency.",
      badge: "Contest Participant",
      badgeColor: "bg-amber-600/10 text-amber-500 border-amber-600/30",
      icon: CodeChefIcon,
      hoverBorder: "hover:border-amber-600/50",
    },
    {
      platform: "GitHub",
      handle: "Raghavnadiminti",
      link: profileData.github,
      description: "Active open-source systems repositories, PaaS prototypes, and internal VCS implementations.",
      badge: "Verified Profile",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      icon: GitHubIcon,
      hoverBorder: "hover:border-emerald-500/50",
    },
  ];

  return (
    <section id="cp" className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-16 font-sans">
      {/* Section Header */}
      <div className="flex flex-wrap items-end justify-between pb-4 mb-8 border-b border-zinc-800 gap-2">
        <div>
          <div className="text-xs font-mono text-emerald-400 mb-1">
            ~/profiles/competitive
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Competitive Programming & Code Profiles
          </h2>
        </div>
        <div className="text-xs font-mono text-zinc-500">
          Verified Online Problem Solving Profiles
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {profiles.map((item) => {
          const IconComp = item.icon;
          return (
            <div
              key={item.platform}
              className={`rounded-2xl border border-zinc-800/90 bg-[#0c0e14] p-6 flex flex-col justify-between space-y-4 transition-all duration-200 hover:-translate-y-1 ${item.hoverBorder}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white">
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">
                        {item.platform}
                      </h3>
                      <p className="text-xs font-mono text-emerald-400">
                        @{item.handle}
                      </p>
                    </div>
                  </div>

                  <span className={`px-2 py-0.5 rounded-full border text-[10px] font-mono font-semibold ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white text-xs font-medium border border-zinc-800 transition-colors"
              >
                <span>View {item.platform} Profile</span>
                <ExternalLinkIcon size={14} />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

