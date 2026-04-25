"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const txtColor = theme === "dark" ? "dark-text" : "light-text";
  const bgColor = theme === "dark" ? "dark-bg" : "light-bg";

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
      role: "Full Stack Developer",
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
      className={`min-h-screen flex items-center justify-center px-4 ${bgColor} animate-fade-in-up py-20`}
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2
          className={`text-3xl md:text-5xl font-bold ${txtColor} mb-8 text-center`}
        >
          {t("experience")}
        </h2>
        <p
          className={`text-lg md:text-xl ${txtColor} mb-12 text-center leading-relaxed`}
        >
          {t("experienceDesc")}
        </p>
        <div className="space-y-8 relative">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-300 dark:border-gray-800"></div>
                {idx !== experiences.length - 1 && (
                  <div
                    className={`w-1 h-24 ${theme === "dark" ? "bg-gray-700" : "bg-gray-300"}`}
                  ></div>
                )}
              </div>
              <div
                className={`p-6 rounded-lg flex-1 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
              >
                <h3 className={`text-xl font-semibold ${txtColor} mb-1`}>
                  {exp.role}
                </h3>
                <p className={`text-blue-500 font-semibold mb-1`}>
                  {exp.company}
                </p>
                <p className={`${txtColor} opacity-75 mb-4`}>{exp.period}</p>
                <p className={`${txtColor} mb-4 leading-relaxed`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full"
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
