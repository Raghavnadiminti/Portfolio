export interface ProfileData {
  name: string;
  role: string;
  subtitle: string;
  bio: string[];
  location: string;
  email: string;
  github: string;
  linkedin: string;
  leetcode: string;
  codechef: string;
  education: {
    institution: string;
    degree: string;
    period: string;
    cgpa: string;
    details: string;
  };
  community: {
    name: string;
    url: string;
    description: string;
  };
  systemSpecs: {
    os: string;
    kernel: string;
    shell: string;
    terminal: string;
    wm: string;
    editor: string;
    uptime: string;
  };
}

export const profileData: ProfileData = {
  name: "Raghavendra Nadiminti",
  role: "Software Engineer",
  subtitle: "Backend Systems · Cloud Infrastructure · Distributed Workflows · AI Developer Tooling",
  bio: [
    "Computer Science undergraduate and software engineer passionate about how low-level systems and scalable backend infrastructure operate under the hood.",
    "Experienced in architecting isolated runtime sandboxes, asynchronous queue-driven deployment workers, secure cloud storage pipelines, and MCP-powered developer automation.",
    "Driven by curiosity to build systems from first principles — from custom Git version control engines in Python to multi-container execution proxies with dynamic port orchestration."
  ],
  location: "Visakhapatnam , India",
  email: "raghavendranadiminti@gmail.com",
  github: "https://github.com/Raghavnadiminti",
  linkedin: "https://www.linkedin.com/in/raghavendranadiminti/",
  leetcode: "https://leetcode.com/u/Raghavendra90/",
  codechef: "https://www.codechef.com/users/raghavendra91",
  education: {
    institution: "Vignan's Institute of Information Technology",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2023 – 2027",
    cgpa: "9.01 / 10.0",
    details: "Core Coursework: Operating Systems, Data Structures & Algorithms, Computer Networks, Database Management Systems, Object-Oriented Software Design."
  },
  community: {
    name: "GDG on Campus VIIT",
    url: "https://gdgviit2k25.vercel.app/",
    description: "Contributed to the official community platform and developed the Google Cloud Study Jams tracking dashboard for 200+ campus participants."
  },
  systemSpecs: {
    os: "Arch Linux x86_64",
    kernel: "Linux 6.8.0-arch1-1-zen",
    shell: "bash 5.2.26",
    terminal: "alacritty / tmux",
    wm: "GNOME 46 / Wayland",
    editor: "Neovim / VS Code",
    uptime: "99.98% availability"
  }
};

