"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Lock, ExternalLink } from "lucide-react";
import { resumeProjects } from "@/lib/resume-data";

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
      {/* Flat px-4, not the responsive px-4 sm:px-6 lg:px-8 this used to
          have - every other section (About/Experience/Contact) uses a flat
          px-4 on its own wrapper, so the old responsive padding here meant
          Projects/Publication sat with up to 32px of side margin at the lg
          breakpoint while the others stayed at 16px, making this section's
          content measurably narrower instead of matching. */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold ${txtColor} mb-3 sm:mb-4`}
          >
            {t("projects")}
          </h2>
          <p
            className={`text-sm sm:text-body md:text-body-lg ${txtColor} opacity-80`}
          >
            {t("projectsDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {resumeProjects.map((project) => {
            const technologies = project.stack?.split(" · ") ?? [];

            return (
              <div
                key={project.title}
                className={`group flex flex-col rounded-2xl overflow-hidden ${cardBg} backdrop-blur-sm hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:border-accent/50 transition-all duration-300`}
              >
                <div
                  className={`h-36 sm:h-40 md:h-48 shrink-0 ${isDark ? "bg-gray-800" : "bg-gray-100"} flex items-center justify-center`}
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
                {/* flex-1 + mt-auto on the footer (below) - not fixed
                    spacing - so it always lands on the same line across a
                    row of cards, regardless of how many lines the
                    title/description/tech tags each card happens to take. */}
                <div className="flex flex-col flex-1 p-4 sm:p-6">
                  <h3
                    className={`text-lg sm:text-heading-sm md:text-heading font-semibold ${txtColor} leading-snug mb-3 line-clamp-2 group-hover:text-accent transition-colors`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-body md:text-body-lg ${txtColor} opacity-80 mb-4 leading-relaxed`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-sm sm:text-body md:text-body-lg rounded-full ${isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Internal Snowtex projects have no public repo (SVN, not
                      GitHub) - shown as a plain badge instead of a dead
                      link, so it reads as a deliberate fact rather than a
                      broken/missing button. ConvoX has a Play Store credit
                      but no confirmed live listing URL, so its label is
                      likewise non-clickable rather than a guessed link. */}
                  {project.internal ? (
                    <span
                      className={`mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm sm:text-body md:text-body-lg font-medium ${
                        isDark
                          ? "bg-white/5 text-gray-400 border border-gray-700"
                          : "bg-black/5 text-gray-500 border border-gray-300"
                      }`}
                    >
                      <Lock size={16} />
                      Internal Project · SVN
                    </span>
                  ) : project.linkHref ? (
                    <a
                      href={project.linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 text-center px-4 py-2 rounded-lg btn-primary text-sm sm:text-body md:text-body-lg font-medium"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  ) : project.linkLabel ? (
                    <span className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm sm:text-body md:text-body-lg font-medium bg-accent/10 text-accent border border-accent/30">
                      {project.linkLabel}
                    </span>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
