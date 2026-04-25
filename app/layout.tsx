import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imdadul Haque",
  description:
    "Welcome to visit IMDADUL HAQUE's profile! Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Imdadul Haque",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Mobile Developer",
  ],
  authors: [{ name: "Imdadul Haque" }],
  openGraph: {
    title: "Imdadul Haque - Full Stack Developer",
    description:
      "Portfolio of Imdadul Haque, a passionate full stack developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
