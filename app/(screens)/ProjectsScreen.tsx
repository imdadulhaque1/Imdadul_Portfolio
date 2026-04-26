"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { projects } from "../../lib/projects-data";

const ProjectsScreen = () => {
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

  return (
    <div className={`min-h-screen ${bgColor} py-20 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-6xl font-bold ${txtColor} mb-6 animate-fade-in-up`}
          >
            {t("projects")}
          </h1>
          <p
            className={`text-lg md:text-xl ${txtColor} max-w-3xl mx-auto leading-relaxed`}
          >
            {t("projectsDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl overflow-hidden ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300`}
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

        <div
          className={`mt-20 p-8 rounded-2xl ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-up`}
        >
          <h2 className={`text-2xl font-semibold ${txtColor} mb-6 text-center`}>
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Next.js", icon: "▲" },
              { name: "TypeScript", icon: "🟦" },
              { name: "Node.js", icon: "🟢" },
              { name: "MongoDB", icon: "🍃" },
              { name: "AWS", icon: "☁️" },
              { name: "React Native", icon: "📱" },
              { name: "Firebase", icon: "🔥" },
              { name: "Docker", icon: "🐳" },
              { name: "Git", icon: "📚" },
              { name: "Tailwind", icon: "🎨" },
              { name: "Figma", icon: "🎯" },
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} flex items-center justify-center mb-2 text-2xl`}
                >
                  {tech.icon}
                </div>
                <p className={`text-sm font-medium ${txtColor}`}>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsScreen;
