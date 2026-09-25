"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { projects } from "@/lib/projects-data";

const Projects = () => {
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
      id="projects"
      className={`py-12 sm:py-16 md:py-20 scroll-mt-20 ${bgColor}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold ${txtColor} mb-3 sm:mb-4`}
          >
            {t("projects")}
          </h2>
          <p
            className={`text-sm sm:text-body md:text-body-lg ${txtColor} opacity-80 max-w-2xl mx-auto`}
          >
            {t("projectsDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl overflow-hidden ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div
                className={`h-36 sm:h-40 md:h-48 ${isDark ? "bg-gray-800" : "bg-gray-100"} flex items-center justify-center`}
              >
                <svg
                  className={`w-16 h-16 ${txtColor} opacity-50`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div className="p-4 sm:p-6">
                <h3
                  className={`text-heading-sm sm:text-heading md:text-heading-lg font-semibold ${txtColor} mb-3 group-hover:text-blue-500 transition-colors`}
                >
                  {t(project.titleKey)}
                </h3>
                <p
                  className={`text-sm sm:text-body md:text-body-lg ${txtColor} opacity-80 mb-4 leading-relaxed`}
                >
                  {t(project.descriptionKey)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 text-sm sm:text-body md:text-body-lg rounded-full ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 text-sm sm:text-body md:text-body-lg font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm sm:text-body md:text-body-lg font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
