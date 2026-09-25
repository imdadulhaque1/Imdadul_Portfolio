"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

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

  const experiences = [
    {
      role: "Senior Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications using React and Node.js. Managed a team of 3 developers and improved application performance by 40%.",
      achievements: [
        "Led team projects",
        "Improved performance",
        "Code reviews",
      ],
    },
    {
      role: "Software Engineer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description:
        "Built and maintained multiple client projects with modern web technologies. Implemented new features and fixed critical bugs.",
      achievements: [
        "Built 5+ projects",
        "Reduced bugs",
        "Client satisfaction",
      ],
    },
    {
      role: "Junior Developer",
      company: "Innovation Labs",
      period: "2019 - 2020",
      description:
        "Started with fundamentals of web development. Learned best practices and contributed to various projects.",
      achievements: [
        "Learned fundamentals",
        "Contributed code",
        "Team collaboration",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`min-h-screen scroll-mt-20 flex items-center justify-center px-4 ${bgColor} animate-fade-in-up py-12 sm:py-16 md:py-20`}
    >
      <div className="relative z-10 max-w-5xl mx-auto w-full">
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
