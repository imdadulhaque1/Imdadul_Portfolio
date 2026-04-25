"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

interface ThemeToggleButtonProps {
  className?: string;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  className = "",
}) => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`ml-2 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-500 transition-all duration-300 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center gap-1 ${className}`}
        aria-label={t("toggleTheme")}
      >
        <span>🌙</span>
        <span className="text-sm">{t("darkMode")}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`ml-2 p-2 rounded-md bg-gray-200 dark:bg-gray-700 ${theme === "dark" ? "dark-text" : "light-text"} transition-all duration-300 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center gap-1 ${className}`}
      aria-label={t("toggleTheme")}
    >
      <span>{theme === "dark" ? "☀️" : "🌙"}</span>
      <span className="text-sm">
        {t(theme === "dark" ? "lightMode" : "darkMode")}
      </span>
    </button>
  );
};

export default ThemeToggleButton;
