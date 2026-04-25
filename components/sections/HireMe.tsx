"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const HireMe = () => {
  const { theme } = useTheme();
  const { t } = useTranslation("common");
  const txtColor = theme === "dark" ? "dark-text" : "light-text";
  const bgColor = theme === "dark" ? "dark-bg" : "light-bg";

  return (
    <section
      id="hireMe"
      className={`min-h-screen flex items-center justify-center px-4 ${bgColor} animate-fade-in-up`}
    >
      <div className="text-center max-w-3xl mx-auto">
        <h1 className={`text-5xl md:text-7xl font-bold ${txtColor} mb-6`}>
          {t("hireMe")}
        </h1>
        <p
          className={`text-xl md:text-2xl ${txtColor} max-w-2xl mx-auto mb-8 leading-relaxed`}
        >
          {t("hireMeDesc")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold cursor-pointer">
            {t("contactMe")}
          </button>
          <button
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 cursor-pointer ${theme === "dark" ? "border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white" : "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"}`}
          >
            {t("projects")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
