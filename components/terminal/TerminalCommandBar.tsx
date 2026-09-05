"use client";

import React, { useState, useRef, useEffect } from "react";
import { TerminalIcon } from "@/components/ui/Icons";

interface TerminalCommandBarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: string | React.ReactNode;
}

export const TerminalCommandBar: React.FC<TerminalCommandBarProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: "welcome",
      output: (
        <span className="text-zinc-400">
          Raghavendra Linux Interactive Shell v1.0. Type <span className="text-emerald-400">help</span> for available commands or <span className="text-cyan-400">projects</span> to jump.
        </span>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1 text-zinc-300">
            <div>Available Commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-xs text-zinc-400">
              <div><span className="text-emerald-400">whoami</span> - Identity</div>
              <div><span className="text-emerald-400">projects</span> - View projects</div>
              <div><span className="text-emerald-400">experience</span> - View career timeline</div>
              <div><span className="text-emerald-400">stack</span> - View technologies</div>
              <div><span className="text-emerald-400">engineering</span> - What I build</div>
              <div><span className="text-emerald-400">cp</span> - Competitive stats</div>
              <div><span className="text-emerald-400">education</span> - University</div>
              <div><span className="text-emerald-400">contact</span> - Get in touch</div>
              <div><span className="text-emerald-400">resume</span> - Open resume.pdf</div>
              <div><span className="text-emerald-400">clear</span> - Clear output</div>
              <div><span className="text-emerald-400">exit</span> - Close shell</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="text-emerald-400 font-semibold">
            Raghavendra Nadiminti — Software Engineer (Backend Systems, Cloud Infrastructure & AI Tooling)
          </div>
        );
        break;

      case "projects":
      case "cd projects":
      case "ls projects":
        scrollTo("featured-projects");
        output = "Navigating to projects...";
        break;

      case "experience":
      case "cd experience":
        scrollTo("experience");
        output = "Navigating to experience timeline...";
        break;

      case "stack":
      case "skills":
        scrollTo("stack");
        output = "Navigating to tech stack...";
        break;

      case "engineering":
      case "systems":
        scrollTo("engineering");
        output = "Navigating to engineering domains...";
        break;

      case "cp":
      case "leetcode":
      case "codechef":
        scrollTo("cp");
        output = "Navigating to competitive programming...";
        break;

      case "education":
        scrollTo("education");
        output = "Navigating to education...";
        break;

      case "contact":
        scrollTo("contact");
        output = "Navigating to contact section...";
        break;

      case "resume":
      case "cat resume.pdf":
        window.open("/resume.pdf", "_blank");
        output = "Opening /resume.pdf in new tab...";
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
        onClose();
        setInput("");
        return;

      default:
        output = (
          <span className="text-red-400">
            command not found: {cmd}. Type <span className="text-emerald-400 underline cursor-pointer" onClick={() => setInput("help")}>help</span> for options.
          </span>
        );
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-[#090b0f]/95 border-t border-emerald-500/30 backdrop-blur-xl shadow-2xl transition-all duration-200">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-[#0c0e14] text-xs font-mono text-zinc-400">
        <div className="flex items-center space-x-2">
          <TerminalIcon size={14} className="text-emerald-400" />
          <span className="text-zinc-200 font-semibold">raghavendra@terminal: ~ (interactive shell)</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-[11px] text-zinc-500 hidden sm:inline">Press ` or ESC to close</span>
          <button
            onClick={onClose}
            className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs"
          >
            ✕ Close
          </button>
        </div>
      </div>

      <div className="max-h-64 sm:max-h-80 overflow-y-auto p-4 space-y-3 font-mono text-xs text-zinc-300">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center space-x-2 text-zinc-400">
              <span className="text-emerald-400">raghavendra@portfolio:~$</span>
              <span className="text-zinc-100 font-semibold">{item.command}</span>
            </div>
            <div className="pl-4 text-zinc-300">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleCommand} className="flex items-center px-4 py-2.5 border-t border-zinc-800/80 bg-[#07080c] font-mono text-xs">
        <span className="text-emerald-400 font-bold mr-2 select-none">raghavendra@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type a command (e.g. 'projects', 'experience', 'resume', 'help')..."
          className="flex-1 bg-transparent text-zinc-100 outline-none placeholder:text-zinc-600 focus:placeholder:text-zinc-700 text-xs"
          autoFocus
        />
        <button
          type="submit"
          className="ml-2 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs hover:bg-emerald-900/60 transition-colors"
        >
          Run ↵
        </button>
      </form>
    </div>
  );
};
