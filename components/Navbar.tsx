"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggleButton from "./ThemeToggleButton";
import { navLinks } from "@/lib/section-data";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(hash || "hireMe");
    };

    updateActiveSection();
    window.addEventListener("hashchange", updateActiveSection);
    return () => window.removeEventListener("hashchange", updateActiveSection);
  }, []);

  const handleNavigation = (path: string, targetId: string) => {
    if (pathname === "/" && path === "/") {
      // On home page, scroll to section
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(path);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full ${theme === "dark" ? "dark-bg-transparent" : "light-bg-transparent"} shadow-md z-50 transition-colors duration-300 backdrop-blur-sm`}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => router.push("/")}
              className={`text-xl font-bold transition-all duration-300 cursor-pointer ${
                activeSection === "hireMe" || activeSection === ""
                  ? theme === "dark"
                    ? "text-red-400"
                    : "text-red-600"
                  : `${theme === "dark" ? "dark-text" : "light-text"} hover:text-gray-600 dark:hover:text-gray-300`
              }`}
              suppressHydrationWarning
            >
              {t("name")}
            </button>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.route}
                type="button"
                onClick={() => handleNavigation(link.path, link.targetId)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === link.targetId
                    ? theme === "dark"
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-blue-500 text-white shadow-lg"
                    : `${theme === "dark" ? "dark-text" : "light-text"} hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`
                }`}
                suppressHydrationWarning
              >
                {t(link.labelKey)}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
