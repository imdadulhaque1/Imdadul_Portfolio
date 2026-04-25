"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const ExperienceScreen = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const txtColor = mounted && theme === "dark" ? "dark-text" : "light-text";
  const bgColor = mounted && theme === "dark" ? "dark-bg" : "light-bg";
  const cardBg =
    mounted && theme === "dark"
      ? "dark-bg-transparent"
      : "light-bg-transparent";

  const experiences = [
    {
      title: t("seniorDeveloper"),
      company: t("techCompany"),
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices.",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
    },
    {
      title: t("fullStackDeveloperRole"),
      company: t("startupInc"),
      period: "2020 - 2022",
      description:
        "Developed full-stack applications from concept to deployment. Worked closely with design team to create intuitive user experiences.",
      skills: ["React Native", "Express.js", "MongoDB", "Docker"],
    },
    {
      title: t("juniorDeveloper"),
      company: t("freelanceWork"),
      period: "2019 - 2020",
      description:
        "Built mobile applications and websites for various clients. Gained experience in multiple technologies and project management.",
      skills: ["React", "JavaScript", "Firebase", "UI/UX"],
    },
  ];

  return (
    <div className={`min-h-screen ${bgColor} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-6xl font-bold ${txtColor} mb-6 animate-fade-in-up`}
          >
            {t("experience")}
          </h1>
          <p
            className={`text-lg md:text-xl ${txtColor} max-w-3xl mx-auto leading-relaxed`}
          >
            {t("experienceDesc")}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                >
                  <div
                    className={`p-6 rounded-2xl ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-up`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className={`text-xl font-semibold ${txtColor}`}>
                        {exp.title}
                      </h3>
                      <span
                        className={`text-sm ${txtColor} opacity-70 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full mt-2 sm:mt-0`}
                      >
                        {exp.period}
                      </span>
                    </div>
                    <p className={`text-lg font-medium ${txtColor} mb-3`}>
                      {exp.company}
                    </p>
                    <p
                      className={`${txtColor} opacity-80 mb-4 leading-relaxed`}
                    >
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 text-sm rounded-full ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-20 p-8 rounded-2xl ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-up`}
        >
          <h2 className={`text-2xl font-semibold ${txtColor} mb-6 text-center`}>
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
              <p className={`${txtColor} opacity-80`}>Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">4+</div>
              <p className={`${txtColor} opacity-80`}>Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">
                100%
              </div>
              <p className={`${txtColor} opacity-80`}>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceScreen;
