"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { projects } from "@/lib/projects-data";

const Projects = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const txtColor = theme === "dark" ? "dark-text" : "light-text";
  const bgColor = theme === "dark" ? "dark-bg" : "light-bg";
  const cardBg =
    theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent";

  return (
    <section id="projects" className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold ${txtColor} mb-4`}>
            {t("projects")}
          </h2>
          <p className={`text-lg ${txtColor} opacity-80 max-w-2xl mx-auto`}>
            {t("projectsDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-2xl overflow-hidden ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div
                className={`h-48 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} flex items-center justify-center`}
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
              <div className="p-6">
                <h3
                  className={`text-xl font-semibold ${txtColor} mb-3 group-hover:text-blue-500 transition-colors`}
                >
                  {t(project.titleKey)}
                </h3>
                <p
                  className={`${txtColor} opacity-80 mb-4 leading-relaxed text-sm`}
                >
                  {t(project.descriptionKey)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs rounded-full ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 text-sm font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 text-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm font-medium"
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
