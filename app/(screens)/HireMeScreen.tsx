"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const HireMeScreen = () => {
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
    <div className={`min-h-screen ${bgColor} py-20 px-4 flex items-center`}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h1
            className={`text-5xl md:text-7xl font-bold ${txtColor} mb-6 animate-fade-in-up`}
          >
            {t("hireMe")}
          </h1>
          <p
            className={`text-xl md:text-2xl ${txtColor} max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in-up`}
          >
            {t("hireMeDesc")}
          </p>
        </div>

        <div
          className={`p-8 rounded-2xl ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-up mb-12`}
        >
          <h2 className={`text-3xl font-semibold ${txtColor} mb-6`}>
            Why Hire Me?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div
                className={`w-16 h-16 mx-auto rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} flex items-center justify-center mb-4`}
              >
                <svg
                  className={`w-8 h-8 ${txtColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold ${txtColor} mb-2`}>
                Fast Delivery
              </h3>
              <p className={`${txtColor} opacity-80`}>
                Quick turnaround without compromising quality
              </p>
            </div>
            <div className="text-center">
              <div
                className={`w-16 h-16 mx-auto rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} flex items-center justify-center mb-4`}
              >
                <svg
                  className={`w-8 h-8 ${txtColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold ${txtColor} mb-2`}>
                Quality Assured
              </h3>
              <p className={`${txtColor} opacity-80`}>
                Clean, maintainable code following best practices
              </p>
            </div>
            <div className="text-center">
              <div
                className={`w-16 h-16 mx-auto rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} flex items-center justify-center mb-4`}
              >
                <svg
                  className={`w-8 h-8 ${txtColor}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold ${txtColor} mb-2`}>
                24/7 Support
              </h3>
              <p className={`${txtColor} opacity-80`}>
                Always available for questions and updates
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up">
          <a
            href="/contact"
            className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {t("contactMe")}
          </a>
          <a
            href="/projects"
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 ${theme === "dark" ? "border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white" : "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"}`}
          >
            {t("projects")}
          </a>
        </div>

        <div
          className={`mt-16 p-6 rounded-2xl ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-up`}
        >
          <p className={`text-lg ${txtColor} opacity-80 italic`}>
            "Let's build something amazing together!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default HireMeScreen;
