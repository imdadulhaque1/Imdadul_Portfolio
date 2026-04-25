"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const PublicationScreen = () => {
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

  const publications = [
    {
      title: t("modernWebDevelopment"),
      journal: t("techJournal"),
      year: "2023",
      description:
        "A comprehensive guide to building modern web applications using React and its ecosystem.",
      link: "#",
      type: "Article",
    },
    {
      title: t("typeScriptBestPractices"),
      journal: t("conferenceCapital"),
      year: "2023",
      description:
        "Best practices for writing maintainable and scalable TypeScript code in large applications.",
      link: "#",
      type: "Conference Paper",
    },
  ];

  return (
    <div className={`min-h-screen ${bgColor} py-20 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-6xl font-bold ${txtColor} mb-6 animate-fade-in-up`}
          >
            {t("publication")}
          </h1>
          <p
            className={`text-lg md:text-xl ${txtColor} max-w-3xl mx-auto leading-relaxed`}
          >
            {t("publicationDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-up hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${theme === "dark" ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                >
                  {pub.type}
                </span>
                <span className={`text-sm ${txtColor} opacity-70`}>
                  {pub.year}
                </span>
              </div>
              <h3 className={`text-xl font-semibold ${txtColor} mb-3`}>
                {pub.title}
              </h3>
              <p className={`font-medium ${txtColor} mb-2`}>{pub.journal}</p>
              <p className={`${txtColor} opacity-80 mb-4 leading-relaxed`}>
                {pub.description}
              </p>
              <a
                href={pub.link}
                className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors font-medium"
              >
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div
          className={`p-8 rounded-2xl ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-up`}
        >
          <h2 className={`text-2xl font-semibold ${txtColor} mb-6 text-center`}>
            Research Interests
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div
                className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} mb-3`}
              >
                <svg
                  className={`w-8 h-8 mx-auto ${txtColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className={`font-semibold ${txtColor} mb-2`}>
                Web Technologies
              </h3>
              <p className={`${txtColor} opacity-80 text-sm`}>
                Modern frontend frameworks and performance optimization
              </p>
            </div>
            <div className="text-center">
              <div
                className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} mb-3`}
              >
                <svg
                  className={`w-8 h-8 mx-auto ${txtColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className={`font-semibold ${txtColor} mb-2`}>
                Mobile Development
              </h3>
              <p className={`${txtColor} opacity-80 text-sm`}>
                Cross-platform mobile applications and user experience
              </p>
            </div>
            <div className="text-center">
              <div
                className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} mb-3`}
              >
                <svg
                  className={`w-8 h-8 mx-auto ${txtColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className={`font-semibold ${txtColor} mb-2`}>Data Science</h3>
              <p className={`${txtColor} opacity-80 text-sm`}>
                Machine learning applications and data visualization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationScreen;
