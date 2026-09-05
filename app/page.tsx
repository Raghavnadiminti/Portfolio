"use client";

import React, { useState } from "react";
import { WorkstationHeader } from "@/components/terminal/WorkstationHeader";
import { TerminalCommandBar } from "@/components/terminal/TerminalCommandBar";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { QuickStats } from "@/components/profile/QuickStats";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { FeaturedProjectsShowcase } from "@/components/projects/FeaturedProjectsShowcase";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { TechWorkstation } from "@/components/stack/TechWorkstation";
import { WhatIBuild } from "@/components/engineering/WhatIBuild";
import { CodingProfiles } from "@/components/competitive/CodingProfiles";
import { EducationCard } from "@/components/education/EducationCard";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { WorkstationFooter } from "@/components/footer/WorkstationFooter";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0e14] text-zinc-100 selection:bg-emerald-600 selection:text-white">
      {/* Top Linux Workstation Header */}
      <WorkstationHeader onToggleTerminal={() => setTerminalOpen(!terminalOpen)} />

      {/* Main Sections in Required Order */}
      <main className="flex-1 w-full space-y-4">
        {/* 1. HERO */}
        <HeroVisual />

        {/* 2. QUICK PROFILE / STATS */}
        <QuickStats />

        {/* 3. EXPERIENCE */}
        <ExperienceTimeline />

        {/* 4. FEATURED PROJECTS */}
        <FeaturedProjectsShowcase />

        {/* 5. PROJECT EXPLORER */}
        <ProjectExplorer />

        {/* 6. TECH STACK */}
        <TechWorkstation />

        {/* 7. ENGINEERING / WHAT I BUILD */}
        <WhatIBuild />

        {/* 8. CODING PROFILES */}
        <CodingProfiles />

        {/* 9. EDUCATION */}
        <EducationCard />

        {/* 10. CONTACT */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <WorkstationFooter />

      {/* Interactive CLI Prompt Modal */}
      <TerminalCommandBar
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
    </div>
  );
}
