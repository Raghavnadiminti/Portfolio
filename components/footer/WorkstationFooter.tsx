import React from "react";
import { LinuxIcon } from "@/components/ui/Icons";

export const WorkstationFooter: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#090b0f] font-mono text-xs text-zinc-400 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs">
          <div className="flex items-center space-x-2 text-zinc-400">
            <LinuxIcon size={14} className="text-emerald-400" />
            <span className="text-emerald-400 font-bold">raghavendra@portfolio:~$</span>
            <span className="text-zinc-300">uptime</span>
            <span className="text-zinc-600 hidden md:inline">→ 99.98% availability, 0 errors</span>
          </div>

          <div className="flex items-center space-x-3 text-[11px] text-zinc-500">
            <span>Built with Next.js & Tailwind</span>
            <span>•</span>
            <span>Running on Linux ☕</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-500 pt-3 border-t border-zinc-900">
          <div>
            © {new Date().getFullYear()} Raghavendra Nadiminti. All rights reserved.
          </div>
          <div className="flex items-center space-x-3">
            <a href="https://github.com/Raghavnadiminti" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
              github.com/Raghavnadiminti
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/raghavendranadiminti/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
              linkedin.com/in/raghavendranadiminti
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
