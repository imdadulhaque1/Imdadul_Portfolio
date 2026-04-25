"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import type { SectionRoute } from "@/lib/section-data";

type SectionBlockProps = {
  section: SectionRoute;
};

export default function SectionBlock({ section }: SectionBlockProps) {
  const { theme } = useTheme();
  const { t } = useTranslation("common");

  const textClass = theme === "dark" ? "dark-text" : "light-text";
  const bgClass =
    theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent";

  return (
    <section
      id={section.sectionId}
      className={`min-h-screen flex items-center justify-center px-4 ${bgClass} animate-fade-in-up`}
      suppressHydrationWarning
    >
      <div className="text-center">
        <h2 className={`text-3xl md:text-5xl font-bold ${textClass} mb-4`}>
          {t(section.titleKey)}
        </h2>
        <p className={`text-base md:text-lg ${textClass} max-w-3xl mx-auto`}>
          {t(section.descKey)}
        </p>
      </div>
    </section>
  );
}
