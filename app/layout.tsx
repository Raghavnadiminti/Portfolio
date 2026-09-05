import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://raghavendranadiminti.dev"),
  title: {
    default: "Raghavendra Nadiminti | Software Engineer | Backend, Cloud & Infrastructure",
    template: "%s | Raghavendra Nadiminti",
  },
  description:
    "Raghavendra Nadiminti is a software engineer and CS student specializing in backend systems, cloud infrastructure, Docker sandboxes, distributed queues, and AI-powered developer tooling.",
  keywords: [
    "Raghavendra Nadiminti",
    "Raghavendra Nadiminti Software Engineer",
    "Raghavendra Nadiminti developer",
    "Raghavendra Nadiminti GitHub",
    "Raghavendra Nadiminti portfolio",
    "Software Engineer India",
    "Backend Developer",
    "Full Stack Developer",
    "Kubernetes Developer",
    "Next.js Developer",
    "FastAPI",
    "Docker Sandboxing",
    "Distributed Systems"
  ],
  authors: [{ name: "Raghavendra Nadiminti", url: "https://github.com/Raghavnadiminti" }],
  creator: "Raghavendra Nadiminti",
  publisher: "Raghavendra Nadiminti",
  alternates: {
    canonical: "https://raghavendranadiminti.dev",
  },
 
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raghavendranadiminti.dev",
    siteName: "Raghavendra Nadiminti | Linux Developer Workstation",
    title: "Raghavendra Nadiminti | Software Engineer | Backend, Cloud & Infrastructure",
    description:
      "Linux-inspired developer workstation portfolio of Raghavendra Nadiminti — Software engineer specializing in backend systems, cloud infrastructure, and AI developer tooling.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghavendra Nadiminti | Software Engineer",
    description:
      "Software engineer specializing in backend systems, cloud infrastructure, Docker sandboxes, and AI developer tooling.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://raghavendranadiminti.dev/#person",
        name: "Raghavendra Nadiminti",
        jobTitle: "Software Engineer",
        url: "https://raghavendranadiminti.dev",
        sameAs: [
          "https://github.com/Raghavnadiminti",
          "https://www.linkedin.com/in/raghavendranadiminti/",
          "https://leetcode.com/u/Raghavendra90/",
          "https://www.codechef.com/users/raghavendra91"
        ],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Vignan's Institute of Information Technology",
        },
        knowsAbout: [
          "Backend Engineering",
          "Cloud Infrastructure",
          "Docker Containerization",
          "Kubernetes",
          "FastAPI",
          "Node.js",
          "Distributed Task Queues",
          "Model Context Protocol (MCP)",
          "Python",
          "TypeScript"
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://raghavendranadiminti.dev/#website",
        url: "https://raghavendranadiminti.dev",
        name: "Raghavendra Nadiminti Portfolio",
        description: "Production Linux-themed developer portfolio for Raghavendra Nadiminti",
        publisher: {
          "@id": "https://raghavendranadiminti.dev/#person",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": "https://raghavendranadiminti.dev/#webpage",
        url: "https://raghavendranadiminti.dev",
        name: "Raghavendra Nadiminti | Software Engineer",
        isPartOf: {
          "@id": "https://raghavendranadiminti.dev/#website",
        },
        mainEntity: {
          "@id": "https://raghavendranadiminti.dev/#person",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0c0e14] text-zinc-100 font-sans">
        {children}
      </body>
    </html>
  );
}
