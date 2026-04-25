"use client";

import Navbar from "./Navbar";
import SectionBlock from "./SectionBlock";
import type { SectionRoute } from "@/lib/section-data";

type SectionPageProps = {
  section: SectionRoute;
};

export default function SectionPage({ section }: SectionPageProps) {
  return (
    <div
      className="min-h-screen transition-colors duration-300"
      suppressHydrationWarning
    >
      <Navbar />
      <main className="pt-16">
        <SectionBlock section={section} />
      </main>
    </div>
  );
}
