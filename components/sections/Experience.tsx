"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { resumeExperience } from "@/lib/resume-data";

// Short pill-style highlights for these cards - resumeExperience's own
// bullets are full sentences meant for the dense resume layout, not a
// badge. Role/company/dates/description still come from that shared data
// so the two stay in sync; only this presentation-specific summary lives
// here, indexed to match resumeExperience's order.
const experienceHighlights: string[][] = [
  ["Recently promoted"],
  ["4 production systems", "Native Android modules", "REST API integration"],
  ["Hello Super Stars app", "VideoSDK integration", "Multiple RN apps"],
];

const experiences = resumeExperience.map((entry, idx) => ({
  role: entry.title,
  company: entry.company ?? "",
  period: entry.dateRange ?? "",
  description: entry.description ?? "",
  achievements: experienceHighlights[idx] ?? [],
}));

const Experience = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";
  const txtColor = isDark ? "dark-text" : "light-text";
  const bgColor = isDark ? "dark-bg" : "light-bg";
  const cardBg = isDark ? "dark-bg-transparent" : "light-bg-transparent";

  return (
    <section
      id="experience"
      className={`min-h-screen scroll-mt-20 flex items-center justify-center px-4 ${bgColor} animate-fade-in-up py-12 sm:py-16 md:py-20`}
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h2
          className={`text-3xl md:text-5xl font-bold ${txtColor} mb-4 sm:mb-6 md:mb-8 text-center`}
        >
          {t("experience")}
        </h2>
        <p
          className={`text-sm sm:text-body md:text-body-lg ${txtColor} mb-8 sm:mb-12 text-center leading-relaxed`}
        >
          {t("experienceDesc")}
        </p>
        <div className="space-y-6 sm:space-y-8 relative">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-3 sm:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-accent rounded-full border-4 border-[var(--background)]"></div>
                {idx !== experiences.length - 1 && (
                  <div
                    className={`w-1 flex-1 min-h-16 sm:min-h-20 md:min-h-24 ${isDark ? "bg-gray-700" : "bg-gray-300"}`}
                  ></div>
                )}
              </div>
              <div
                className={`p-4 sm:p-6 rounded-xl flex-1 ${cardBg} backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent/50`}
              >
                <h3
                  className={`text-lg sm:text-heading-sm md:text-heading font-semibold ${txtColor} leading-snug mb-1`}
                >
                  {exp.role}
                </h3>
                <p className="text-sm sm:text-body md:text-body-lg text-accent font-semibold mb-1">
                  {exp.company}
                </p>
                <p className={`text-sm sm:text-body md:text-body-lg ${txtColor} opacity-75 mb-4`}>
                  {exp.period}
                </p>
                <p
                  className={`text-sm sm:text-body md:text-body-lg ${txtColor} mb-4 leading-relaxed`}
                >
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-3 sm:px-4 py-1.5 bg-accent/10 text-accent border border-accent/30 text-sm sm:text-body md:text-body-lg rounded-full"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
