import type { Metadata, Viewport } from "next";
import { Work_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import ChatWidget from "@/components/ChatWidget";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import InstallPWAPrompt from "@/components/InstallPWAPrompt";
import { ActiveSectionProvider } from "@/components/ActiveSectionContext";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imdadul Haque",
  description:
    "Welcome to visit IMDADUL HAQUE's profile! Software Engineer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Imdadul Haque",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Mobile Developer",
  ],
  authors: [{ name: "Imdadul Haque" }],
  openGraph: {
    title: "Imdadul Haque - Software Engineer",
    description:
      "Portfolio of Imdadul Haque, a passionate Software Engineer",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Imdadul Haque",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef2ff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1442" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <div suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <ActiveSectionProvider>
              {/* One ambient glow pinned to the viewport, not re-created per
                  section - each section used to render its own pair, clipped
                  hard at that section's own edge, so every section boundary
                  showed as a visible seam where one section's glow abruptly
                  ended and the next's began. Fixed position means it never
                  interacts with section boundaries at all. */}
              <div
                className="hero-orb w-72 h-72 sm:w-96 sm:h-96 bg-accent -top-24 -left-24"
                aria-hidden="true"
              />
              <div
                className="hero-orb w-72 h-72 sm:w-96 sm:h-96 bg-accent-secondary -bottom-24 -right-24"
                aria-hidden="true"
              />
              <Navbar />
              <InstallPWAPrompt />
              {children}
              <ChatWidget />
              <ServiceWorkerRegister />
            </ActiveSectionProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
