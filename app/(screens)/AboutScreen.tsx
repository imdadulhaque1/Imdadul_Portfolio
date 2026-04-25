"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const AboutScreen = () => {
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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-6xl font-bold ${txtColor} mb-6 animate-fade-in-up`}
          >
            {t("about")}
          </h1>
          <p
            className={`text-lg md:text-xl ${txtColor} max-w-3xl mx-auto leading-relaxed`}
          >
            {t("AboutsDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`p-8 rounded-2xl ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-left`}
          >
            <h2 className={`text-2xl font-semibold ${txtColor} mb-4`}>
              {t("skills")}
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className={txtColor}>{t("fullStackDeveloper")}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className={txtColor}>React Native Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className={txtColor}>TypeScript Expert</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className={txtColor}>Node.js Backend</span>
              </div>
            </div>
          </div>

          <div
            className={`p-8 rounded-2xl ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-right`}
          >
            <h2 className={`text-2xl font-semibold ${txtColor} mb-4`}>
              {t("expertiseIn")}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} text-center`}
              >
                <span className={`font-medium ${txtColor}`}>React</span>
              </div>
              <div
                className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} text-center`}
              >
                <span className={`font-medium ${txtColor}`}>Next.js</span>
              </div>
              <div
                className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} text-center`}
              >
                <span className={`font-medium ${txtColor}`}>TypeScript</span>
              </div>
              <div
                className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} text-center`}
              >
                <span className={`font-medium ${txtColor}`}>Node.js</span>
              </div>
              <div
                className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} text-center`}
              >
                <span className={`font-medium ${txtColor}`}>MongoDB</span>
              </div>
              <div
                className={`p-4 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"} text-center`}
              >
                <span className={`font-medium ${txtColor}`}>AWS</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`p-8 rounded-2xl ${cardBg} backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-fade-in-up`}
        >
          <h2 className={`text-2xl font-semibold ${txtColor} mb-6 text-center`}>
            My Journey
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className={`text-lg font-medium ${txtColor}`}>
                  Started with Web Development
                </h3>
                <p className={`${txtColor} opacity-80`}>
                  Began my journey learning HTML, CSS, and JavaScript
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className={`text-lg font-medium ${txtColor}`}>
                  Mastered React Ecosystem
                </h3>
                <p className={`${txtColor} opacity-80`}>
                  Deep dived into React, Next.js, and modern frontend
                  technologies
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className={`text-lg font-medium ${txtColor}`}>
                  Mobile App Development
                </h3>
                <p className={`${txtColor} opacity-80`}>
                  Specialized in React Native for cross-platform mobile
                  applications
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className={`text-lg font-medium ${txtColor}`}>
                  Full Stack Expertise
                </h3>
                <p className={`${txtColor} opacity-80`}>
                  Built complete applications from frontend to backend and
                  deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
