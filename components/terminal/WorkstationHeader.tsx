"use client";

import React, { useState, useEffect } from "react";
import { TerminalIcon, DownloadIcon, LinuxIcon } from "@/components/ui/Icons";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "featured-projects", label: "Projects" },
  { id: "stack", label: "Tech Stack" },
  { id: "engineering", label: "Engineering" },
  { id: "cp", label: "Competitive" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

interface WorkstationHeaderProps {
  onToggleTerminal?: () => void;
}

export const WorkstationHeader: React.FC<WorkstationHeaderProps> = ({ onToggleTerminal }) => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#0c0e14]/90 backdrop-blur-md font-sans text-xs text-zinc-300">
      {/* Top Linux Status Line */}
      <div className="flex items-center justify-between px-3 sm:px-6 py-2 border-b border-zinc-800/50 bg-[#090b0f] font-mono text-[11px] select-none">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center space-x-2 text-zinc-400">
            <LinuxIcon size={13} className="text-zinc-300" />
            <span className="text-emerald-400 font-semibold">raghavendra@workstation</span>
            <span className="text-zinc-600 hidden sm:inline">:</span>
            <span className="text-zinc-400 hidden sm:inline">Linux 6.8.0-zen</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-zinc-400">
          <div className="hidden md:flex items-center space-x-1.5 text-zinc-500">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SESSION: ACTIVE</span>
          </div>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="text-zinc-400 tabular-nums font-mono">{currentTime || "12:00:00"}</span>
          <span className="text-zinc-700">|</span>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-emerald-950/60 hover:text-emerald-300 border border-zinc-700/60 text-zinc-300 transition-colors"
          >
            <DownloadIcon size={12} />
            <span className="text-[11px] font-mono">resume.pdf</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center space-x-2 text-zinc-200 hover:text-emerald-400 transition-colors font-mono"
        >
          <span className="text-emerald-400 font-bold">~/</span>
          <span className="font-bold tracking-tight text-sm font-sans">Raghavendra Nadiminti</span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1 rounded-lg transition-all text-xs ${
                  isActive
                    ? "bg-zinc-800 text-emerald-400 border border-emerald-500/30 font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {onToggleTerminal && (
            <button
              onClick={onToggleTerminal}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/50 transition-colors font-mono text-xs"
            >
              <TerminalIcon size={12} />
              <span className="hidden sm:inline">CLI Prompt</span>
              <span className="text-[10px] bg-emerald-900/60 px-1 rounded text-emerald-300">`</span>
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white text-xs font-mono"
          >
            {mobileMenuOpen ? "✕" : "≡ MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-[#090b0f] px-4 py-3 space-y-1">
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center px-3 py-2 rounded text-left text-xs ${
                  activeSection === item.id
                    ? "bg-zinc-800 text-emerald-400 border border-emerald-500/30 font-medium"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
