"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import {
  LinkedInIcon,
  GitHubIcon,
  DownloadIcon,
  ExternalLinkIcon
} from "@/components/ui/Icons";

export const ContactCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-16 font-sans">
      <div className="relative rounded-3xl border border-zinc-800/90 bg-gradient-to-b from-[#0e121c] via-[#090b10] to-[#07090e] p-8 sm:p-12 text-center space-y-8 shadow-2xl overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

        {/* Small Terminal Prompt Decoration */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
          <span className="text-emerald-400 font-bold">raghavendra@linux:~$</span>
          <span className="text-zinc-200 font-semibold">./connect.sh</span>
        </div>

        {/* Headline & Subtitle */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have something to build?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            I am always interested in discussing backend systems engineering, cloud infrastructure,
            distributed systems, and developer tooling. Let&apos;s connect.
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {/* Email Button */}
          <button
            onClick={copyEmail}
            className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20"
          >
            <span>{copied ? "Email Copied! ✓" : "Copy Email Address"}</span>
          </button>

          {/* LinkedIn Button */}
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm border border-zinc-800 hover:border-blue-500/40 transition-all"
          >
            <LinkedInIcon size={16} className="text-blue-400" />
            <span>LinkedIn</span>
            <ExternalLinkIcon size={13} className="text-zinc-500" />
          </a>

          {/* GitHub Button */}
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm border border-zinc-800 hover:border-zinc-600 transition-all"
          >
            <GitHubIcon size={16} />
            <span>GitHub</span>
            <ExternalLinkIcon size={13} className="text-zinc-500" />
          </a>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-semibold text-sm border border-zinc-800 hover:border-cyan-500/40 transition-all"
          >
            <DownloadIcon size={15} className="text-cyan-400" />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Direct Email Display */}
        <div className="pt-4 text-xs font-mono text-zinc-500">
          Direct email: <span className="text-zinc-300 select-all">{profileData.email}</span>
        </div>
      </div>
    </section>
  );
};

